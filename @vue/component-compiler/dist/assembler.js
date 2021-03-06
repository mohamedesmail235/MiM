"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const source_map_1 = require("source-map");
const source_map_2 = require("./source-map");
const path = require("path");
function assemble(compiler, filename, result, options = {}) {
    return assembleFromSource(compiler, options, {
        filename,
        scopeId: result.scopeId,
        script: result.script && {
            source: result.script.code,
            map: result.script.map
        },
        template: result.template && Object.assign({}, result.template, { source: result.template.code, functional: result.template.functional }),
        styles: result.styles.map(style => {
            if (style.errors.length) {
                console.error(style.errors);
            }
            return Object.assign({}, style, { source: style.code, media: style.media, scoped: style.scoped, moduleName: style.moduleName, module: style.module });
        })
    });
}
exports.assemble = assemble;
function assembleFromSource(compiler, options, { filename, script, template, styles, scopeId }) {
    script = script || { source: 'export default {}' };
    template = template || { source: '' };
    let map = undefined;
    const mapGenerator = new source_map_1.SourceMapGenerator({ file: filename });
    const hasScopedStyle = styles.some(style => style.scoped === true);
    const hasStyle = styles.some(style => style.source || style.module);
    const e = (any) => JSON.stringify(any);
    const createImport = (name, value) => value.startsWith('~')
        ? `import ${name} from '${value.substr(1)}'`
        : `const ${name} = ${value}`;
    const o = e;
    const IDENTIFIER = /^[a-z0-9]+$/i;
    // language=JavaScript
    const inlineCreateInjector = `function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0]
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {})
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\\\b/.test(navigator.userAgent.toLowerCase())

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined })

      if (!style.ids.includes(id)) {
        let code = css.source
        let index = style.ids.length

        style.ids.push(id)

        if (${e(compiler.template.isProduction)} && css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\\n/*# sourceURL=' + css.map.sources[0] + ' */'
          // http://stackoverflow.com/a/26603875
          code +=
            '\\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */'
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']')
        }

        if (!style.element) {
          const el = style.element = document.createElement('style')
          el.type = 'text/css'

          if (css.media) el.setAttribute('media', css.media)
          if (isOldIE) {
            el.setAttribute('data-group', group)
            el.setAttribute('data-next-index', '0')
          }

          head.appendChild(el)
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'))
          style.element.setAttribute('data-next-index', index + 1)
        }

        if (style.element.styleSheet) {
          style.parts.push(code)
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\\n')
        } else {
          const textNode = document.createTextNode(code)
          const nodes = style.element.childNodes
          if (nodes[index]) style.element.removeChild(nodes[index])
          if (nodes.length) style.element.insertBefore(textNode, nodes[index])
          else style.element.appendChild(textNode)
        }
      }
    }
  }`;
    const createInjector = options.styleInjector
        ? createImport('__vue_create_injector__', options.styleInjector)
        : inlineCreateInjector;
    // language=JavaScript
    const inlineCreateInjectorSSR = `function __vue_create_injector_ssr__(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
      context = __VUE_SSR_CONTEXT__
    }

    if (!context) return function () {}

    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: () => context._styles
      })
      context._renderStyles = renderStyles
    }

    function renderStyles(styles) {
      let css = ''
      for (const {ids, media, parts} of styles) {
        css +=
          '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
          + parts.join('\\n') +
          '</style>'
      }

      return css
    }

    return function addStyle(id, css) {
      const group = ${e(compiler.template.isProduction)} ? css.media || 'default' : id
      const style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] })

      if (!style.ids.includes(id)) {
        style.media = css.media
        style.ids.push(id)
        let code = css.source
        if (${e(!compiler.template.isProduction)} && css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\\n/*# sourceURL=' + css.map.sources[0] + ' */'
          // http://stackoverflow.com/a/26603875
          code +=
            '\\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */'
        }
        style.parts.push(code)
      }
    }
  }`;
    const createInjectorSSR = options.styleInjectorSSR
        ? createImport('__vue_create_injector_ssr__', options.styleInjectorSSR)
        : inlineCreateInjectorSSR;
    // language=JavaScript
    const inlineNormalizeComponent = `function __vue_normalize__(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {}

    // For security concerns, we use only base name in production mode.
    component.__file = ${compiler.template.isProduction ? e(path.basename(filename)) : e(filename)}

    if (!component.render) {
      component.render = template.render
      component.staticRenderFns = template.staticRenderFns
      component._compiled = true

      if (functional) component.functional = true
    }

    component._scopeId = scope

    if (${e(hasStyle)}) {
      let hook
      if (${e(compiler.template.optimizeSSR)}) {
        // In SSR.
        hook = function(context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__
          }
          // inject component styles
          if (style) {
            style.call(this, createInjectorSSR(context))
          }
          // register component module identifier for async chunk inference
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier)
          }
        }
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        component._ssrRegister = hook
      }
      else if (style) {
        hook = function(context) {
          style.call(this, createInjector(context))
        }
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context)
            return originalRender(h, context)
          }
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook]
        }
      }
    }

    return component
  }`;
    const normalizeComponent = options.normalizer
        ? createImport('__vue_normalize__', options.normalizer)
        : inlineNormalizeComponent;
    const DEFAULT_EXPORT = 'const __vue_script__ =';
    // language=JavaScript
    let code = `/* script */\n${script.source.replace(/export\s+default/, DEFAULT_EXPORT)}` +
        `\n/* template */\n${template.source
            .replace('var render =', 'var __vue_render__ =')
            .replace('var staticRenderFns =', 'var __vue_staticRenderFns__ =')
            .replace('render._withStripped =', '__vue_render__._withStripped =')}
  /* style */
  const __vue_inject_styles__ = ${hasStyle ? `function (inject) {
    if (!inject) return
    ${styles.map((style, index) => {
            const source = IDENTIFIER.test(style.source)
                ? style.source
                : e(style.source);
            const map = !compiler.template.isProduction
                ? typeof style.map === 'string' && IDENTIFIER.test(style.map)
                    ? style.map
                    : o(style.map)
                : undefined;
            const tokens = typeof style.module === 'string' && IDENTIFIER.test(style.module)
                ? style.module
                : o(style.module);
            return ((source
                ? `inject("${scopeId +
                    '_' +
                    index}", { source: ${source}, map: ${map}, media: ${e(style.media)} })\n`
                : '') +
                (style.moduleName
                    ? `Object.defineProperty(this, "${style.moduleName}", { value: ${tokens} })` + '\n'
                    : ''));
        })}
  }` : 'undefined'}
  /* scoped */
  const __vue_scope_id__ = ${hasScopedStyle ? e(scopeId) : 'undefined'}
  /* module identifier */
  const __vue_module_identifier__ = ${compiler.template.optimizeSSR ? e(scopeId) : 'undefined'}
  /* functional template */
  const __vue_is_functional_template__ = ${e(template.functional)}
  /* component normalizer */
  ${normalizeComponent}
  /* style inject */
  ${!compiler.template.optimizeSSR ? createInjector : ''}
  /* style inject SSR */
  ${compiler.template.optimizeSSR ? createInjectorSSR : ''}

  `;
    // generate source map.
    {
        const input = script.source.split('\n');
        input.forEach((sourceLine, index) => {
            if (!sourceLine)
                return;
            const matches = /export\s+default/.exec(sourceLine);
            if (matches) {
                const pos = sourceLine.indexOf(matches[0]);
                if (pos > 0) {
                    mapGenerator.addMapping({
                        source: filename,
                        original: { line: index + 1, column: 0 },
                        generated: { line: index + 2, column: 0 }
                    });
                }
                mapGenerator.addMapping({
                    source: filename,
                    original: { line: index + 1, column: pos },
                    generated: { line: index + 2, column: pos }
                });
                if (sourceLine.substr(pos + matches[0].length)) {
                    mapGenerator.addMapping({
                        source: filename,
                        original: { line: index + 1, column: pos + matches[0].length },
                        generated: { line: index + 2, column: pos + DEFAULT_EXPORT.length }
                    });
                }
            }
            else {
                mapGenerator.addMapping({
                    source: filename,
                    original: { line: index + 1, column: 0 },
                    generated: { line: index + 2, column: 0 }
                });
            }
        });
    }
    code += `
  export default __vue_normalize__(
    ${code.indexOf('__vue_render__') > -1
        ? '{ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }'
        : '{}'},
    __vue_inject_styles__,
    ${code.indexOf('__vue_script__') > -1 ? '__vue_script__' : '{}'},
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    ${code.indexOf('__vue_create_injector__') > -1
        ? '__vue_create_injector__'
        : 'undefined'},
    ${code.indexOf('__vue_create_injector_ssr__') > -1
        ? '__vue_create_injector_ssr__'
        : 'undefined'}
  )`;
    if (script.map) {
        map = source_map_2.merge(script.map, JSON.parse(mapGenerator.toString()));
    }
    else {
        map = JSON.parse(mapGenerator.toString());
    }
    return { code, map };
}
exports.assembleFromSource = assembleFromSource;
