import MagicString from 'magic-string';
import * as acorn from 'acorn';

var xhtml = {
  quot: '\u0022',
  amp: '&',
  apos: '\u0027',
  lt: '<',
  gt: '>',
  nbsp: '\u00A0',
  iexcl: '\u00A1',
  cent: '\u00A2',
  pound: '\u00A3',
  curren: '\u00A4',
  yen: '\u00A5',
  brvbar: '\u00A6',
  sect: '\u00A7',
  uml: '\u00A8',
  copy: '\u00A9',
  ordf: '\u00AA',
  laquo: '\u00AB',
  not: '\u00AC',
  shy: '\u00AD',
  reg: '\u00AE',
  macr: '\u00AF',
  deg: '\u00B0',
  plusmn: '\u00B1',
  sup2: '\u00B2',
  sup3: '\u00B3',
  acute: '\u00B4',
  micro: '\u00B5',
  para: '\u00B6',
  middot: '\u00B7',
  cedil: '\u00B8',
  sup1: '\u00B9',
  ordm: '\u00BA',
  raquo: '\u00BB',
  frac14: '\u00BC',
  frac12: '\u00BD',
  frac34: '\u00BE',
  iquest: '\u00BF',
  Agrave: '\u00C0',
  Aacute: '\u00C1',
  Acirc: '\u00C2',
  Atilde: '\u00C3',
  Auml: '\u00C4',
  Aring: '\u00C5',
  AElig: '\u00C6',
  Ccedil: '\u00C7',
  Egrave: '\u00C8',
  Eacute: '\u00C9',
  Ecirc: '\u00CA',
  Euml: '\u00CB',
  Igrave: '\u00CC',
  Iacute: '\u00CD',
  Icirc: '\u00CE',
  Iuml: '\u00CF',
  ETH: '\u00D0',
  Ntilde: '\u00D1',
  Ograve: '\u00D2',
  Oacute: '\u00D3',
  Ocirc: '\u00D4',
  Otilde: '\u00D5',
  Ouml: '\u00D6',
  times: '\u00D7',
  Oslash: '\u00D8',
  Ugrave: '\u00D9',
  Uacute: '\u00DA',
  Ucirc: '\u00DB',
  Uuml: '\u00DC',
  Yacute: '\u00DD',
  THORN: '\u00DE',
  szlig: '\u00DF',
  agrave: '\u00E0',
  aacute: '\u00E1',
  acirc: '\u00E2',
  atilde: '\u00E3',
  auml: '\u00E4',
  aring: '\u00E5',
  aelig: '\u00E6',
  ccedil: '\u00E7',
  egrave: '\u00E8',
  eacute: '\u00E9',
  ecirc: '\u00EA',
  euml: '\u00EB',
  igrave: '\u00EC',
  iacute: '\u00ED',
  icirc: '\u00EE',
  iuml: '\u00EF',
  eth: '\u00F0',
  ntilde: '\u00F1',
  ograve: '\u00F2',
  oacute: '\u00F3',
  ocirc: '\u00F4',
  otilde: '\u00F5',
  ouml: '\u00F6',
  divide: '\u00F7',
  oslash: '\u00F8',
  ugrave: '\u00F9',
  uacute: '\u00FA',
  ucirc: '\u00FB',
  uuml: '\u00FC',
  yacute: '\u00FD',
  thorn: '\u00FE',
  yuml: '\u00FF',
  OElig: '\u0152',
  oelig: '\u0153',
  Scaron: '\u0160',
  scaron: '\u0161',
  Yuml: '\u0178',
  fnof: '\u0192',
  circ: '\u02C6',
  tilde: '\u02DC',
  Alpha: '\u0391',
  Beta: '\u0392',
  Gamma: '\u0393',
  Delta: '\u0394',
  Epsilon: '\u0395',
  Zeta: '\u0396',
  Eta: '\u0397',
  Theta: '\u0398',
  Iota: '\u0399',
  Kappa: '\u039A',
  Lambda: '\u039B',
  Mu: '\u039C',
  Nu: '\u039D',
  Xi: '\u039E',
  Omicron: '\u039F',
  Pi: '\u03A0',
  Rho: '\u03A1',
  Sigma: '\u03A3',
  Tau: '\u03A4',
  Upsilon: '\u03A5',
  Phi: '\u03A6',
  Chi: '\u03A7',
  Psi: '\u03A8',
  Omega: '\u03A9',
  alpha: '\u03B1',
  beta: '\u03B2',
  gamma: '\u03B3',
  delta: '\u03B4',
  epsilon: '\u03B5',
  zeta: '\u03B6',
  eta: '\u03B7',
  theta: '\u03B8',
  iota: '\u03B9',
  kappa: '\u03BA',
  lambda: '\u03BB',
  mu: '\u03BC',
  nu: '\u03BD',
  xi: '\u03BE',
  omicron: '\u03BF',
  pi: '\u03C0',
  rho: '\u03C1',
  sigmaf: '\u03C2',
  sigma: '\u03C3',
  tau: '\u03C4',
  upsilon: '\u03C5',
  phi: '\u03C6',
  chi: '\u03C7',
  psi: '\u03C8',
  omega: '\u03C9',
  thetasym: '\u03D1',
  upsih: '\u03D2',
  piv: '\u03D6',
  ensp: '\u2002',
  emsp: '\u2003',
  thinsp: '\u2009',
  zwnj: '\u200C',
  zwj: '\u200D',
  lrm: '\u200E',
  rlm: '\u200F',
  ndash: '\u2013',
  mdash: '\u2014',
  lsquo: '\u2018',
  rsquo: '\u2019',
  sbquo: '\u201A',
  ldquo: '\u201C',
  rdquo: '\u201D',
  bdquo: '\u201E',
  dagger: '\u2020',
  Dagger: '\u2021',
  bull: '\u2022',
  hellip: '\u2026',
  permil: '\u2030',
  prime: '\u2032',
  Prime: '\u2033',
  lsaquo: '\u2039',
  rsaquo: '\u203A',
  oline: '\u203E',
  frasl: '\u2044',
  euro: '\u20AC',
  image: '\u2111',
  weierp: '\u2118',
  real: '\u211C',
  trade: '\u2122',
  alefsym: '\u2135',
  larr: '\u2190',
  uarr: '\u2191',
  rarr: '\u2192',
  darr: '\u2193',
  harr: '\u2194',
  crarr: '\u21B5',
  lArr: '\u21D0',
  uArr: '\u21D1',
  rArr: '\u21D2',
  dArr: '\u21D3',
  hArr: '\u21D4',
  forall: '\u2200',
  part: '\u2202',
  exist: '\u2203',
  empty: '\u2205',
  nabla: '\u2207',
  isin: '\u2208',
  notin: '\u2209',
  ni: '\u220B',
  prod: '\u220F',
  sum: '\u2211',
  minus: '\u2212',
  lowast: '\u2217',
  radic: '\u221A',
  prop: '\u221D',
  infin: '\u221E',
  ang: '\u2220',
  and: '\u2227',
  or: '\u2228',
  cap: '\u2229',
  cup: '\u222A',
  'int': '\u222B',
  there4: '\u2234',
  sim: '\u223C',
  cong: '\u2245',
  asymp: '\u2248',
  ne: '\u2260',
  equiv: '\u2261',
  le: '\u2264',
  ge: '\u2265',
  sub: '\u2282',
  sup: '\u2283',
  nsub: '\u2284',
  sube: '\u2286',
  supe: '\u2287',
  oplus: '\u2295',
  otimes: '\u2297',
  perp: '\u22A5',
  sdot: '\u22C5',
  lceil: '\u2308',
  rceil: '\u2309',
  lfloor: '\u230A',
  rfloor: '\u230B',
  lang: '\u2329',
  rang: '\u232A',
  loz: '\u25CA',
  spades: '\u2660',
  clubs: '\u2663',
  hearts: '\u2665',
  diams: '\u2666'
};

var hexNumber = /^[\da-fA-F]+$/;
var decimalNumber = /^\d+$/;

var inject = function(acorn$$1) {
  var tt = acorn$$1.tokTypes;
  var tc = acorn$$1.tokContexts;

  tc.j_oTag = new acorn$$1.TokContext('<tag', false);
  tc.j_cTag = new acorn$$1.TokContext('</tag', false);
  tc.j_expr = new acorn$$1.TokContext('<tag>...</tag>', true, true);

  tt.jsxName = new acorn$$1.TokenType('jsxName');
  tt.jsxText = new acorn$$1.TokenType('jsxText', {beforeExpr: true});
  tt.jsxTagStart = new acorn$$1.TokenType('jsxTagStart');
  tt.jsxTagEnd = new acorn$$1.TokenType('jsxTagEnd');

  tt.jsxTagStart.updateContext = function() {
    this.context.push(tc.j_expr); // treat as beginning of JSX expression
    this.context.push(tc.j_oTag); // start opening tag context
    this.exprAllowed = false;
  };
  tt.jsxTagEnd.updateContext = function(prevType) {
    var out = this.context.pop();
    if (out === tc.j_oTag && prevType === tt.slash || out === tc.j_cTag) {
      this.context.pop();
      this.exprAllowed = this.curContext() === tc.j_expr;
    } else {
      this.exprAllowed = true;
    }
  };

  var pp = acorn$$1.Parser.prototype;

  // Reads inline JSX contents token.

  pp.jsx_readToken = function() {
    var out = '', chunkStart = this.pos;
    for (;;) {
      if (this.pos >= this.input.length)
        this.raise(this.start, 'Unterminated JSX contents');
      var ch = this.input.charCodeAt(this.pos);

      switch (ch) {
      case 60: // '<'
      case 123: // '{'
        if (this.pos === this.start) {
          if (ch === 60 && this.exprAllowed) {
            ++this.pos;
            return this.finishToken(tt.jsxTagStart);
          }
          return this.getTokenFromCode(ch);
        }
        out += this.input.slice(chunkStart, this.pos);
        return this.finishToken(tt.jsxText, out);

      case 38: // '&'
        out += this.input.slice(chunkStart, this.pos);
        out += this.jsx_readEntity();
        chunkStart = this.pos;
        break;

      default:
        if (acorn$$1.isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.pos);
          out += this.jsx_readNewLine(true);
          chunkStart = this.pos;
        } else {
          ++this.pos;
        }
      }
    }
  };

  pp.jsx_readNewLine = function(normalizeCRLF) {
    var ch = this.input.charCodeAt(this.pos);
    var out;
    ++this.pos;
    if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
      ++this.pos;
      out = normalizeCRLF ? '\n' : '\r\n';
    } else {
      out = String.fromCharCode(ch);
    }
    if (this.options.locations) {
      ++this.curLine;
      this.lineStart = this.pos;
    }

    return out;
  };

  pp.jsx_readString = function(quote) {
    var out = '', chunkStart = ++this.pos;
    for (;;) {
      if (this.pos >= this.input.length)
        this.raise(this.start, 'Unterminated string constant');
      var ch = this.input.charCodeAt(this.pos);
      if (ch === quote) break;
      if (ch === 38) { // '&'
        out += this.input.slice(chunkStart, this.pos);
        out += this.jsx_readEntity();
        chunkStart = this.pos;
      } else if (acorn$$1.isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.pos);
        out += this.jsx_readNewLine(false);
        chunkStart = this.pos;
      } else {
        ++this.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return this.finishToken(tt.string, out);
  };

  pp.jsx_readEntity = function() {
    var str = '', count = 0, entity;
    var ch = this.input[this.pos];
    if (ch !== '&')
      this.raise(this.pos, 'Entity must start with an ampersand');
    var startPos = ++this.pos;
    while (this.pos < this.input.length && count++ < 10) {
      ch = this.input[this.pos++];
      if (ch === ';') {
        if (str[0] === '#') {
          if (str[1] === 'x') {
            str = str.substr(2);
            if (hexNumber.test(str))
              entity = String.fromCharCode(parseInt(str, 16));
          } else {
            str = str.substr(1);
            if (decimalNumber.test(str))
              entity = String.fromCharCode(parseInt(str, 10));
          }
        } else {
          entity = xhtml[str];
        }
        break;
      }
      str += ch;
    }
    if (!entity) {
      this.pos = startPos;
      return '&';
    }
    return entity;
  };


  // Read a JSX identifier (valid tag or attribute name).
  //
  // Optimized version since JSX identifiers can't contain
  // escape characters and so can be read as single slice.
  // Also assumes that first character was already checked
  // by isIdentifierStart in readToken.

  pp.jsx_readWord = function() {
    var ch, start = this.pos;
    do {
      ch = this.input.charCodeAt(++this.pos);
    } while (acorn$$1.isIdentifierChar(ch) || ch === 45); // '-'
    return this.finishToken(tt.jsxName, this.input.slice(start, this.pos));
  };

  // Transforms JSX element name to string.

  function getQualifiedJSXName(object) {
    if (!object)
      return object;

    if (object.type === 'JSXIdentifier')
      return object.name;

    if (object.type === 'JSXNamespacedName')
      return object.namespace.name + ':' + object.name.name;

    if (object.type === 'JSXMemberExpression')
      return getQualifiedJSXName(object.object) + '.' +
      getQualifiedJSXName(object.property);
  }

  // Parse next token as JSX identifier

  pp.jsx_parseIdentifier = function() {
    var node = this.startNode();
    if (this.type === tt.jsxName)
      node.name = this.value;
    else if (this.type.keyword)
      node.name = this.type.keyword;
    else
      this.unexpected();
    this.next();
    return this.finishNode(node, 'JSXIdentifier');
  };

  // Parse namespaced identifier.

  pp.jsx_parseNamespacedName = function() {
    var startPos = this.start, startLoc = this.startLoc;
    var name = this.jsx_parseIdentifier();
    if (!this.options.plugins.jsx.allowNamespaces || !this.eat(tt.colon)) return name;
    var node = this.startNodeAt(startPos, startLoc);
    node.namespace = name;
    node.name = this.jsx_parseIdentifier();
    return this.finishNode(node, 'JSXNamespacedName');
  };

  // Parses element name in any form - namespaced, member
  // or single identifier.

  pp.jsx_parseElementName = function() {
    if (this.type === tt.jsxTagEnd)
      return '';
    var startPos = this.start, startLoc = this.startLoc;
    var node = this.jsx_parseNamespacedName();
    if (this.type === tt.dot && node.type === 'JSXNamespacedName' && !this.options.plugins.jsx.allowNamespacedObjects) {
      this.unexpected();
    }
    while (this.eat(tt.dot)) {
      var newNode = this.startNodeAt(startPos, startLoc);
      newNode.object = node;
      newNode.property = this.jsx_parseIdentifier();
      node = this.finishNode(newNode, 'JSXMemberExpression');
    }
    return node;
  };

  // Parses any type of JSX attribute value.

  pp.jsx_parseAttributeValue = function() {
    switch (this.type) {
    case tt.braceL:
      var node = this.jsx_parseExpressionContainer();
      if (node.expression.type === 'JSXEmptyExpression')
        this.raise(node.start, 'JSX attributes must only be assigned a non-empty expression');
      return node;

    case tt.jsxTagStart:
    case tt.string:
      return this.parseExprAtom();

    default:
      this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text');
    }
  };

  // JSXEmptyExpression is unique type since it doesn't actually parse anything,
  // and so it should start at the end of last read token (left brace) and finish
  // at the beginning of the next one (right brace).

  pp.jsx_parseEmptyExpression = function() {
    var node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
    return this.finishNodeAt(node, 'JSXEmptyExpression', this.start, this.startLoc);
  };

  // Parses JSX expression enclosed into curly brackets.


  pp.jsx_parseExpressionContainer = function() {
    var node = this.startNode();
    this.next();
    node.expression = this.type === tt.braceR
      ? this.jsx_parseEmptyExpression()
      : this.parseExpression();
    this.expect(tt.braceR);
    return this.finishNode(node, 'JSXExpressionContainer');
  };

  // Parses following JSX attribute name-value pair.

  pp.jsx_parseAttribute = function() {
    var node = this.startNode();
    if (this.eat(tt.braceL)) {
      this.expect(tt.ellipsis);
      node.argument = this.parseMaybeAssign();
      this.expect(tt.braceR);
      return this.finishNode(node, 'JSXSpreadAttribute');
    }
    node.name = this.jsx_parseNamespacedName();
    node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
    return this.finishNode(node, 'JSXAttribute');
  };

  // Parses JSX opening tag starting after '<'.

  pp.jsx_parseOpeningElementAt = function(startPos, startLoc) {
    var node = this.startNodeAt(startPos, startLoc);
    node.attributes = [];
    var nodeName = this.jsx_parseElementName();
    if (nodeName) node.name = nodeName;
    while (this.type !== tt.slash && this.type !== tt.jsxTagEnd)
      node.attributes.push(this.jsx_parseAttribute());
    node.selfClosing = this.eat(tt.slash);
    this.expect(tt.jsxTagEnd);
    return this.finishNode(node, nodeName ? 'JSXOpeningElement' : 'JSXOpeningFragment');
  };

  // Parses JSX closing tag starting after '</'.

  pp.jsx_parseClosingElementAt = function(startPos, startLoc) {
    var node = this.startNodeAt(startPos, startLoc);
    var nodeName = this.jsx_parseElementName();
    if (nodeName) node.name = nodeName;
    this.expect(tt.jsxTagEnd);
    return this.finishNode(node, nodeName ? 'JSXClosingElement' : 'JSXClosingFragment');
  };

  // Parses entire JSX element, including it's opening tag
  // (starting after '<'), attributes, contents and closing tag.

  pp.jsx_parseElementAt = function(startPos, startLoc) {
    var node = this.startNodeAt(startPos, startLoc);
    var children = [];
    var openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
    var closingElement = null;

    if (!openingElement.selfClosing) {
      contents: for (;;) {
        switch (this.type) {
        case tt.jsxTagStart:
          startPos = this.start; startLoc = this.startLoc;
          this.next();
          if (this.eat(tt.slash)) {
            closingElement = this.jsx_parseClosingElementAt(startPos, startLoc);
            break contents;
          }
          children.push(this.jsx_parseElementAt(startPos, startLoc));
          break;

        case tt.jsxText:
          children.push(this.parseExprAtom());
          break;

        case tt.braceL:
          children.push(this.jsx_parseExpressionContainer());
          break;

        default:
          this.unexpected();
        }
      }
      if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
        this.raise(
          closingElement.start,
          'Expected corresponding JSX closing tag for <' + getQualifiedJSXName(openingElement.name) + '>');
      }
    }

    node.openingElement = openingElement;
    node.closingElement = closingElement;
    node.children = children;
    if (this.type === tt.relational && this.value === "<") {
      this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
    }
    return this.finishNode(node, openingElement.name ? 'JSXElement' : 'JSXFragment');
  };

  // Parse JSX text

  pp.jsx_parseText = function(value) {
    var node = this.parseLiteral(value);
    node.type = "JSXText";

    return node;
  };

  // Parses entire JSX element from current position.

  pp.jsx_parseElement = function() {
    var startPos = this.start, startLoc = this.startLoc;
    this.next();
    return this.jsx_parseElementAt(startPos, startLoc);
  };

  acorn$$1.plugins.jsx = function(instance, opts) {
    if (!opts) {
      return;
    }

    if (typeof opts !== 'object') {
      opts = {};
    }

    instance.options.plugins.jsx = {
      allowNamespaces: opts.allowNamespaces !== false,
      allowNamespacedObjects: !!opts.allowNamespacedObjects
    };

    instance.extend('parseExprAtom', function(inner) {
      return function(refShortHandDefaultPos) {
        if (this.type === tt.jsxText)
          return this.jsx_parseText(this.value);
        else if (this.type === tt.jsxTagStart)
          return this.jsx_parseElement();
        else
          return inner.call(this, refShortHandDefaultPos);
      };
    });

    instance.extend('readToken', function(inner) {
      return function(code) {
        var context = this.curContext();

        if (context === tc.j_expr) return this.jsx_readToken();

        if (context === tc.j_oTag || context === tc.j_cTag) {
          if (acorn$$1.isIdentifierStart(code)) return this.jsx_readWord();

          if (code == 62) {
            ++this.pos;
            return this.finishToken(tt.jsxTagEnd);
          }

          if ((code === 34 || code === 39) && context == tc.j_oTag)
            return this.jsx_readString(code);
        }

        if (code === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
          ++this.pos;
          return this.finishToken(tt.jsxTagStart);
        }
        return inner.call(this, code);
      };
    });

    instance.extend('updateContext', function(inner) {
      return function(prevType) {
        if (this.type == tt.braceL) {
          var curContext = this.curContext();
          if (curContext == tc.j_oTag) this.context.push(tc.b_expr);
          else if (curContext == tc.j_expr) this.context.push(tc.b_tmpl);
          else inner.call(this, prevType);
          this.exprAllowed = true;
        } else if (this.type === tt.slash && prevType === tt.jsxTagStart) {
          this.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
          this.context.push(tc.j_cTag); // reconsider as closing tag context
          this.exprAllowed = false;
        } else {
          return inner.call(this, prevType);
        }
      };
    });
  };

  return acorn$$1;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var inject$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = injectDynamicImport;
/* eslint-disable no-underscore-dangle */

var DynamicImportKey = exports.DynamicImportKey = 'Import';

function injectDynamicImport(acorn$$1) {
  var tt = acorn$$1.tokTypes;

  // NOTE: This allows `yield import()` to parse correctly.
  tt._import.startsExpr = true;

  function parseDynamicImport() {
    var node = this.startNode();
    this.next();
    if (this.type !== tt.parenL) {
      this.unexpected();
    }
    return this.finishNode(node, DynamicImportKey);
  }

  function peekNext() {
    return this.input[this.pos];
  }

  // eslint-disable-next-line no-param-reassign
  acorn$$1.plugins.dynamicImport = function () {
    function dynamicImportPlugin(instance) {
      instance.extend('parseStatement', function (nextMethod) {
        return function () {
          function parseStatement() {
            var node = this.startNode();
            if (this.type === tt._import) {
              var nextToken = peekNext.call(this);
              if (nextToken === tt.parenL.label) {
                var expr = this.parseExpression();
                return this.parseExpressionStatement(node, expr);
              }
            }

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return nextMethod.apply(this, args);
          }

          return parseStatement;
        }();
      });

      instance.extend('parseExprAtom', function (nextMethod) {
        return function () {
          function parseExprAtom(refDestructuringErrors) {
            if (this.type === tt._import) {
              return parseDynamicImport.call(this);
            }
            return nextMethod.call(this, refDestructuringErrors);
          }

          return parseExprAtom;
        }();
      });
    }

    return dynamicImportPlugin;
  }();

  return acorn$$1;
}
});

var acornDynamicImport = unwrapExports(inject$1);
var inject_1 = inject$1.DynamicImportKey;

// used for debugging, without the noise created by
// circular references
function toJSON(node) {
	var obj = {};

	Object.keys(node).forEach(key => {
		if (
			key === 'parent' ||
			key === 'program' ||
			key === 'keys' ||
			key === '__wrapped'
		)
			{ return; }

		if (Array.isArray(node[key])) {
			obj[key] = node[key].map(toJSON);
		} else if (node[key] && node[key].toJSON) {
			obj[key] = node[key].toJSON();
		} else {
			obj[key] = node[key];
		}
	});

	return obj;
}

class Node {
	ancestor(level) {
		var node = this;
		while (level--) {
			node = node.parent;
			if (!node) { return null; }
		}

		return node;
	}

	contains(node) {
		while (node) {
			if (node === this) { return true; }
			node = node.parent;
		}

		return false;
	}

	findLexicalBoundary() {
		return this.parent.findLexicalBoundary();
	}

	findNearest(type) {
		if (typeof type === 'string') { type = new RegExp(`^${type}$`); }
		if (type.test(this.type)) { return this; }
		return this.parent.findNearest(type);
	}

	unparenthesizedParent() {
		var node = this.parent;
		while (node && node.type === 'ParenthesizedExpression') {
			node = node.parent;
		}
		return node;
	}

	unparenthesize() {
		var node = this;
		while (node.type === 'ParenthesizedExpression') {
			node = node.expression;
		}
		return node;
	}

	findScope(functionScope) {
		return this.parent.findScope(functionScope);
	}

	getIndentation() {
		return this.parent.getIndentation();
	}

	initialise(transforms) {
		for (var i = 0, list = this.keys; i < list.length; i += 1) {
			var key = list[i];

			var value = this[key];

			if (Array.isArray(value)) {
				value.forEach(node => node && node.initialise(transforms));
			} else if (value && typeof value === 'object') {
				value.initialise(transforms);
			}
		}
	}

	toJSON() {
		return toJSON(this);
	}

	toString() {
		return this.program.magicString.original.slice(this.start, this.end);
	}

	transpile(code, transforms) {
		for (var i = 0, list = this.keys; i < list.length; i += 1) {
			var key = list[i];

			var value = this[key];

			if (Array.isArray(value)) {
				value.forEach(node => node && node.transpile(code, transforms));
			} else if (value && typeof value === 'object') {
				value.transpile(code, transforms);
			}
		}
	}
}

function extractNames(node) {
	var names = [];
	extractors[node.type](names, node);
	return names;
}

var extractors = {
	Identifier(names, node) {
		names.push(node);
	},

	ObjectPattern(names, node) {
		for (var i = 0, list = node.properties; i < list.length; i += 1) {
			var prop = list[i];

			extractors[prop.type](names, prop);
		}
	},

	Property(names, node) {
		extractors[node.value.type](names, node.value);
	},

	ArrayPattern(names, node) {
		for (var i = 0, list = node.elements; i < list.length; i += 1) {
			var element = list[i];

			if (element) { extractors[element.type](names, element); }
		}
	},

	RestElement(names, node) {
		extractors[node.argument.type](names, node.argument);
	},

	AssignmentPattern(names, node) {
		extractors[node.left.type](names, node.left);
	}
};

var reserved = Object.create(null);
'do if in for let new try var case else enum eval null this true void with await break catch class const false super throw while yield delete export import public return static switch typeof default extends finally package private continue debugger function arguments interface protected implements instanceof'
	.split(' ')
	.forEach(word => (reserved[word] = true));

function Scope(options) {
	options = options || {};

	this.parent = options.parent;
	this.isBlockScope = !!options.block;
	this.createDeclarationCallback = options.declare;

	var scope = this;
	while (scope.isBlockScope) { scope = scope.parent; }
	this.functionScope = scope;

	this.identifiers = [];
	this.declarations = Object.create(null);
	this.references = Object.create(null);
	this.blockScopedDeclarations = this.isBlockScope ? null : Object.create(null);
	this.aliases = Object.create(null);
}

Scope.prototype = {
	addDeclaration(node, kind) {
		for (var i = 0, list = extractNames(node); i < list.length; i += 1) {
			var identifier = list[i];

			var name = identifier.name;

			var declaration = { name, node: identifier, kind, instances: [] };
			this.declarations[name] = declaration;

			if (this.isBlockScope) {
				if (!this.functionScope.blockScopedDeclarations[name])
					{ this.functionScope.blockScopedDeclarations[name] = []; }
				this.functionScope.blockScopedDeclarations[name].push(declaration);
			}
		}
	},

	addReference(identifier) {
		if (this.consolidated) {
			this.consolidateReference(identifier);
		} else {
			this.identifiers.push(identifier);
		}
	},

	consolidate() {
		for (var i = 0; i < this.identifiers.length; i += 1) {
			// we might push to the array during consolidation, so don't cache length
			var identifier = this.identifiers[i];
			this.consolidateReference(identifier);
		}

		this.consolidated = true; // TODO understand why this is necessary... seems bad
	},

	consolidateReference(identifier) {
		var declaration = this.declarations[identifier.name];
		if (declaration) {
			declaration.instances.push(identifier);
		} else {
			this.references[identifier.name] = true;
			if (this.parent) { this.parent.addReference(identifier); }
		}
	},

	contains(name) {
		return (
			this.declarations[name] ||
			(this.parent ? this.parent.contains(name) : false)
		);
	},

	createIdentifier(base) {
		if (typeof base === 'number') { base = base.toString(); }

		base = base
			.replace(/\s/g, '')
			.replace(/\[([^\]]+)\]/g, '_$1')
			.replace(/[^a-zA-Z0-9_$]/g, '_')
			.replace(/_{2,}/, '_');

		var name = base;
		var counter = 1;

		while (
			this.declarations[name] ||
			this.references[name] ||
			this.aliases[name] ||
			name in reserved
		) {
			name = `${base}$${counter++}`;
		}

		this.aliases[name] = true;
		return name;
	},

	createDeclaration(base) {
		var id = this.createIdentifier(base);
		this.createDeclarationCallback(id);
		return id;
	},

	findDeclaration(name) {
		return (
			this.declarations[name] ||
			(this.parent && this.parent.findDeclaration(name))
		);
	},

	// Sometimes, block scope declarations change name during transpilation
	resolveName(name) {
		var declaration = this.findDeclaration(name);
		return declaration ? declaration.name : name;
	}
};

function locate(source, index) {
	var lines = source.split('\n');
	var len = lines.length;

	var lineStart = 0;
	var i;

	for (i = 0; i < len; i += 1) {
		var line = lines[i];
		var lineEnd = lineStart + line.length + 1; // +1 for newline

		if (lineEnd > index) {
			return { line: i + 1, column: index - lineStart, char: i };
		}

		lineStart = lineEnd;
	}

	throw new Error('Could not determine location of character');
}

function pad(num, len) {
	var result = String(num);
	return result + repeat(' ', len - result.length);
}

function repeat(str, times) {
	var result = '';
	while (times--) { result += str; }
	return result;
}

function getSnippet(source, loc, length) {
	if ( length === void 0 ) length = 1;

	var first = Math.max(loc.line - 5, 0);
	var last = loc.line;

	var numDigits = String(last).length;

	var lines = source.split('\n').slice(first, last);

	var lastLine = lines[lines.length - 1];
	var offset = lastLine.slice(0, loc.column).replace(/\t/g, '  ').length;

	var snippet = lines
		.map((line, i) => `${pad(i + first + 1, numDigits)} : ${line.replace(/\t/g, '  ')}`)
		.join('\n');

	snippet += '\n' + repeat(' ', numDigits + 3 + offset) + repeat('^', length);

	return snippet;
}

class CompileError extends Error {
	constructor(message, node) {
		super(message);

		this.name = 'CompileError';
		if (!node) {
			return;
		}

		var source = node.program.magicString.original;
		var loc = locate(source, node.start);

		this.message = message + ` (${loc.line}:${loc.column})`;

		this.stack = new Error().stack.replace(
			new RegExp(`.+new ${this.name}.+\\n`, 'm'),
			''
		);

		this.loc = loc;
		this.snippet = getSnippet(source, loc, node.end - node.start);
	}

	toString() {
		return `${this.name}: ${this.message}\n${this.snippet}`;
	}
}

function findIndex(array, fn) {
	for (var i = 0; i < array.length; i += 1) {
		if (fn(array[i], i)) { return i; }
	}

	return -1;
}

var handlers = {
	Identifier: destructureIdentifier,
	AssignmentPattern: destructureAssignmentPattern,
	ArrayPattern: destructureArrayPattern,
	ObjectPattern: destructureObjectPattern
};

function destructure(
	code,
	createIdentifier,
	resolveName,
	node,
	ref,
	inline,
	statementGenerators
) {
	handlers[node.type](code, createIdentifier, resolveName, node, ref, inline, statementGenerators);
}

function destructureIdentifier(
	code,
	createIdentifier,
	resolveName,
	node,
	ref,
	inline,
	statementGenerators
) {
	statementGenerators.push((start, prefix, suffix) => {
		code.overwrite(node.start, node.end, (inline ? prefix : `${prefix}var `) + resolveName(node) + ` = ${ref}${suffix}`);
		code.move(node.start, node.end, start);
	});
}

function destructureMemberExpression(
	code,
	createIdentifier,
	resolveName,
	node,
	ref,
	inline,
	statementGenerators
) {
	statementGenerators.push((start, prefix, suffix) => {
		code.prependRight(node.start, inline ? prefix : `${prefix}var `);
		code.appendLeft(node.end, ` = ${ref}${suffix}`);
		code.move(node.start, node.end, start);
	});
}

function destructureAssignmentPattern(
	code,
	createIdentifier,
	resolveName,
	node,
	ref,
	inline,
	statementGenerators
) {
	var isIdentifier = node.left.type === 'Identifier';
	var name = isIdentifier ? node.left.name : ref;

	if (!inline) {
		statementGenerators.push((start, prefix, suffix) => {
			code.prependRight(
				node.left.end,
				`${prefix}if ( ${name} === void 0 ) ${name}`
			);
			code.move(node.left.end, node.right.end, start);
			code.appendLeft(node.right.end, suffix);
		});
	}

	if (!isIdentifier) {
		destructure(code, createIdentifier, resolveName, node.left, ref, inline, statementGenerators);
	}
}

function destructureArrayPattern(
	code,
	createIdentifier,
	resolveName,
	node,
	ref,
	inline,
	statementGenerators
) {
	var c = node.start;

	node.elements.forEach((element, i) => {
		if (!element) { return; }

		if (element.type === 'RestElement') {
			handleProperty(
				code,
				createIdentifier,
				resolveName,
				c,
				element.argument,
				`${ref}.slice(${i})`,
				inline,
				statementGenerators
			);
		} else {
			handleProperty(
				code,
				createIdentifier,
				resolveName,
				c,
				element,
				`${ref}[${i}]`,
				inline,
				statementGenerators
			);
		}
		c = element.end;
	});

	code.remove(c, node.end);
}

function destructureObjectPattern(
	code,
	createIdentifier,
	resolveName,
	node,
	ref,
	inline,
	statementGenerators
) {
	var c = node.start;

	var nonRestKeys = [];
	node.properties.forEach(prop => {
		var value;
		var content;
		if (prop.type === 'Property') {
			var isComputedKey = prop.computed || prop.key.type !== 'Identifier';
			var key = isComputedKey
				? code.slice(prop.key.start, prop.key.end)
				: prop.key.name;
			value = isComputedKey ? `${ref}[${key}]` : `${ref}.${key}`;
			content = prop.value;
			nonRestKeys.push(isComputedKey ? key : '"' + key + '"');
		} else if (prop.type === 'RestElement') {
			content = prop.argument;
			value = createIdentifier('rest');
			statementGenerators.push((start, prefix, suffix) => {
				var helper = prop.program.getObjectWithoutPropertiesHelper(code);
				code.overwrite(
					prop.start,
					(c = prop.argument.start),
					(inline ? prefix : `${prefix}var `) + `${value} = ${helper}( ${ref}, [${nonRestKeys.join(', ')}] )${suffix}`
				);
				code.move(prop.start, c, start);
			});
		} else {
			throw new CompileError(
				this,
				`Unexpected node of type ${prop.type} in object pattern`
			);
		}
		handleProperty(code, createIdentifier, resolveName, c, content, value, inline, statementGenerators);
		c = prop.end;
	});

	code.remove(c, node.end);
}

function handleProperty(
	code,
	createIdentifier,
	resolveName,
	c,
	node,
	value,
	inline,
	statementGenerators
) {
	switch (node.type) {
		case 'Identifier': {
			code.remove(c, node.start);
			destructureIdentifier(
				code,
				createIdentifier,
				resolveName,
				node,
				value,
				inline,
				statementGenerators
			);
			break;
		}

		case 'MemberExpression':
			code.remove(c, node.start);
			destructureMemberExpression(
				code,
				createIdentifier,
				resolveName,
				node,
				value,
				true,
				statementGenerators
			);
			break;

		case 'AssignmentPattern': {
			var name;

			var isIdentifier = node.left.type === 'Identifier';

			if (isIdentifier) {
				name = resolveName(node.left);
			} else {
				name = createIdentifier(value);
			}

			statementGenerators.push((start, prefix, suffix) => {
				if (inline) {
					code.prependRight(
						node.right.start,
						`${name} = ${value}, ${name} = ${name} === void 0 ? `
					);
					code.appendLeft(node.right.end, ` : ${name}${suffix}`);
				} else {
					code.prependRight(
						node.right.start,
						`${prefix}var ${name} = ${value}; if ( ${name} === void 0 ) ${name} = `
					);
					code.appendLeft(node.right.end, suffix);
				}

				code.move(node.right.start, node.right.end, start);
			});

			if (isIdentifier) {
				code.remove(c, node.right.start);
			} else {
				code.remove(c, node.left.start);
				code.remove(node.left.end, node.right.start);
				handleProperty(
					code,
					createIdentifier,
					resolveName,
					c,
					node.left,
					name,
					inline,
					statementGenerators
				);
			}

			break;
		}

		case 'ObjectPattern': {
			code.remove(c, (c = node.start));

			var ref = value;
			if (node.properties.length > 1) {
				ref = createIdentifier(value);

				statementGenerators.push((start, prefix, suffix) => {
					// this feels a tiny bit hacky, but we can't do a
					// straightforward appendLeft and keep correct order...
					code.prependRight(node.start, (inline ? '' : `${prefix}var `) + `${ref} = `);
					code.overwrite(node.start, (c = node.start + 1), value);
					code.appendLeft(c, suffix);

					code.overwrite(
						node.start,
						(c = node.start + 1),
						(inline ? '' : `${prefix}var `) + `${ref} = ${value}${suffix}`
					);
					code.move(node.start, c, start);
				});
			}

			destructureObjectPattern(
				code,
				createIdentifier,
				resolveName,
				node,
				ref,
				inline,
				statementGenerators
			);

			break;
		}

		case 'ArrayPattern': {
			code.remove(c, (c = node.start));

			if (node.elements.filter(Boolean).length > 1) {
				var ref$1 = createIdentifier(value);

				statementGenerators.push((start, prefix, suffix) => {
					code.prependRight(node.start, (inline ? '' : `${prefix}var `) + `${ref$1} = `);
					code.overwrite(node.start, (c = node.start + 1), value, {
						contentOnly: true
					});
					code.appendLeft(c, suffix);

					code.move(node.start, c, start);
				});

				node.elements.forEach((element, i) => {
					if (!element) { return; }

					if (element.type === 'RestElement') {
						handleProperty(
							code,
							createIdentifier,
							resolveName,
							c,
							element.argument,
							`${ref$1}.slice(${i})`,
							inline,
							statementGenerators
						);
					} else {
						handleProperty(
							code,
							createIdentifier,
							resolveName,
							c,
							element,
							`${ref$1}[${i}]`,
							inline,
							statementGenerators
						);
					}
					c = element.end;
				});
			} else {
				var index = findIndex(node.elements, Boolean);
				var element = node.elements[index];
				if (element.type === 'RestElement') {
					handleProperty(
						code,
						createIdentifier,
						resolveName,
						c,
						element.argument,
						`${value}.slice(${index})`,
						inline,
						statementGenerators
					);
				} else {
					handleProperty(
						code,
						createIdentifier,
						resolveName,
						c,
						element,
						`${value}[${index}]`,
						inline,
						statementGenerators
					);
				}
				c = element.end;
			}

			code.remove(c, node.end);
			break;
		}

		default: {
			throw new Error(`Unexpected node type in destructuring (${node.type})`);
		}
	}
}

function isUseStrict(node) {
	if (!node) { return false; }
	if (node.type !== 'ExpressionStatement') { return false; }
	if (node.expression.type !== 'Literal') { return false; }
	return node.expression.value === 'use strict';
}

class BlockStatement extends Node {
	createScope() {
		this.parentIsFunction = /Function/.test(this.parent.type);
		this.isFunctionBlock = this.parentIsFunction || this.parent.type === 'Root';
		this.scope = new Scope({
			block: !this.isFunctionBlock,
			parent: this.parent.findScope(false),
			declare: id => this.createdDeclarations.push(id)
		});

		if (this.parentIsFunction) {
			this.parent.params.forEach(node => {
				this.scope.addDeclaration(node, 'param');
			});
		}
	}

	initialise(transforms) {
		this.thisAlias = null;
		this.argumentsAlias = null;
		this.defaultParameters = [];
		this.createdDeclarations = [];

		// normally the scope gets created here, during initialisation,
		// but in some cases (e.g. `for` statements), we need to create
		// the scope early, as it pertains to both the init block and
		// the body of the statement
		if (!this.scope) { this.createScope(); }

		this.body.forEach(node => node.initialise(transforms));

		this.scope.consolidate();
	}

	findLexicalBoundary() {
		if (this.type === 'Program') { return this; }
		if (/^Function/.test(this.parent.type)) { return this; }

		return this.parent.findLexicalBoundary();
	}

	findScope(functionScope) {
		if (functionScope && !this.isFunctionBlock)
			{ return this.parent.findScope(functionScope); }
		return this.scope;
	}

	getArgumentsAlias() {
		if (!this.argumentsAlias) {
			this.argumentsAlias = this.scope.createIdentifier('arguments');
		}

		return this.argumentsAlias;
	}

	getArgumentsArrayAlias() {
		if (!this.argumentsArrayAlias) {
			this.argumentsArrayAlias = this.scope.createIdentifier('argsArray');
		}

		return this.argumentsArrayAlias;
	}

	getThisAlias() {
		if (!this.thisAlias) {
			this.thisAlias = this.scope.createIdentifier('this');
		}

		return this.thisAlias;
	}

	getIndentation() {
		if (this.indentation === undefined) {
			var source = this.program.magicString.original;

			var useOuter = this.synthetic || !this.body.length;
			var c = useOuter ? this.start : this.body[0].start;

			while (c && source[c] !== '\n') { c -= 1; }

			this.indentation = '';

			// eslint-disable-next-line no-constant-condition
			while (true) {
				c += 1;
				var char = source[c];

				if (char !== ' ' && char !== '\t') { break; }

				this.indentation += char;
			}

			var indentString = this.program.magicString.getIndentString();

			// account for dedented class constructors
			var parent = this.parent;
			while (parent) {
				if (parent.kind === 'constructor' && !parent.parent.parent.superClass) {
					this.indentation = this.indentation.replace(indentString, '');
				}

				parent = parent.parent;
			}

			if (useOuter) { this.indentation += indentString; }
		}

		return this.indentation;
	}

	transpile(code, transforms) {
		var indentation = this.getIndentation();

		var introStatementGenerators = [];

		if (this.argumentsAlias) {
			introStatementGenerators.push((start, prefix, suffix) => {
				var assignment = `${prefix}var ${this.argumentsAlias} = arguments${
					suffix
				}`;
				code.appendLeft(start, assignment);
			});
		}

		if (this.thisAlias) {
			introStatementGenerators.push((start, prefix, suffix) => {
				var assignment = `${prefix}var ${this.thisAlias} = this${suffix}`;
				code.appendLeft(start, assignment);
			});
		}

		if (this.argumentsArrayAlias) {
			introStatementGenerators.push((start, prefix, suffix) => {
				var i = this.scope.createIdentifier('i');
				var assignment = `${prefix}var ${i} = arguments.length, ${
					this.argumentsArrayAlias
				} = Array(${i});\n${indentation}while ( ${i}-- ) ${
					this.argumentsArrayAlias
				}[${i}] = arguments[${i}]${suffix}`;
				code.appendLeft(start, assignment);
			});
		}

		if (/Function/.test(this.parent.type)) {
			this.transpileParameters(
				this.parent.params,
				code,
				transforms,
				indentation,
				introStatementGenerators
			);
		} else if ('CatchClause' === this.parent.type) {
			this.transpileParameters(
				[this.parent.param],
				code,
				transforms,
				indentation,
				introStatementGenerators
			);
		}

		if (transforms.letConst && this.isFunctionBlock) {
			this.transpileBlockScopedIdentifiers(code);
		}

		super.transpile(code, transforms);

		if (this.createdDeclarations.length) {
			introStatementGenerators.push((start, prefix, suffix) => {
				var assignment = `${prefix}var ${this.createdDeclarations.join(', ')}${suffix}`;
				code.appendLeft(start, assignment);
			});
		}

		if (this.synthetic) {
			if (this.parent.type === 'ArrowFunctionExpression') {
				var expr = this.body[0];

				if (introStatementGenerators.length) {
					code
						.appendLeft(this.start, `{`)
						.prependRight(this.end, `${this.parent.getIndentation()}}`);

					code.prependRight(expr.start, `\n${indentation}return `);
					code.appendLeft(expr.end, `;\n`);
				} else if (transforms.arrow) {
					code.prependRight(expr.start, `{ return `);
					code.appendLeft(expr.end, `; }`);
				}
			} else if (introStatementGenerators.length) {
				code.prependRight(this.start, `{`).appendLeft(this.end, `}`);
			}
		}

		var start;
		if (isUseStrict(this.body[0])) {
			start = this.body[0].end;
		} else if (this.synthetic || this.parent.type === 'Root') {
			start = this.start;
		} else {
			start = this.start + 1;
		}

		var prefix = `\n${indentation}`;
		var suffix = ';';
		introStatementGenerators.forEach((fn, i) => {
			if (i === introStatementGenerators.length - 1) { suffix = `;\n`; }
			fn(start, prefix, suffix);
		});
	}

	transpileParameters(params, code, transforms, indentation, introStatementGenerators) {
		params.forEach(param => {
			if (
				param.type === 'AssignmentPattern' &&
				param.left.type === 'Identifier'
			) {
				if (transforms.defaultParameter) {
					introStatementGenerators.push((start, prefix, suffix) => {
						var lhs = `${prefix}if ( ${param.left.name} === void 0 ) ${
							param.left.name
						}`;

						code
							.prependRight(param.left.end, lhs)
							.move(param.left.end, param.right.end, start)
							.appendLeft(param.right.end, suffix);
					});
				}
			} else if (param.type === 'RestElement') {
				if (transforms.spreadRest) {
					introStatementGenerators.push((start, prefix, suffix) => {
						var penultimateParam = params[params.length - 2];

						if (penultimateParam) {
							code.remove(
								penultimateParam ? penultimateParam.end : param.start,
								param.end
							);
						} else {
							var start$1 = param.start,
								end = param.end; // TODO https://gitlab.com/Rich-Harris/buble/issues/8

							while (/\s/.test(code.original[start$1 - 1])) { start$1 -= 1; }
							while (/\s/.test(code.original[end])) { end += 1; }

							code.remove(start$1, end);
						}

						var name = param.argument.name;
						var len = this.scope.createIdentifier('len');
						var count = params.length - 1;

						if (count) {
							code.prependRight(
								start,
								`${prefix}var ${name} = [], ${len} = arguments.length - ${
									count
								};\n${indentation}while ( ${len}-- > 0 ) ${name}[ ${
									len
								} ] = arguments[ ${len} + ${count} ]${suffix}`
							);
						} else {
							code.prependRight(
								start,
								`${prefix}var ${name} = [], ${len} = arguments.length;\n${
									indentation
								}while ( ${len}-- ) ${name}[ ${len} ] = arguments[ ${len} ]${
									suffix
								}`
							);
						}
					});
				}
			} else if (param.type !== 'Identifier') {
				if (transforms.parameterDestructuring) {
					var ref = this.scope.createIdentifier('ref');
					destructure(
						code,
						id => this.scope.createIdentifier(id),
						(ref) => {
							var name = ref.name;

							return this.scope.resolveName(name);
					},
						param,
						ref,
						false,
						introStatementGenerators
					);
					code.prependRight(param.start, ref);
				}
			}
		});
	}

	transpileBlockScopedIdentifiers(code) {
		Object.keys(this.scope.blockScopedDeclarations).forEach(name => {
			var declarations = this.scope.blockScopedDeclarations[name];

			for (var i$2 = 0, list$2 = declarations; i$2 < list$2.length; i$2 += 1) {
				var declaration = list$2[i$2];

				var cont = false; // TODO implement proper continue...

				if (declaration.kind === 'for.let') {
					// special case
					var forStatement = declaration.node.findNearest('ForStatement');

					if (forStatement.shouldRewriteAsFunction) {
						var outerAlias = this.scope.createIdentifier(name);
						var innerAlias = forStatement.reassigned[name]
							? this.scope.createIdentifier(name)
							: name;

						declaration.name = outerAlias;
						code.overwrite(
							declaration.node.start,
							declaration.node.end,
							outerAlias,
							{ storeName: true }
						);

						forStatement.aliases[name] = {
							outer: outerAlias,
							inner: innerAlias
						};

						for (var i = 0, list = declaration.instances; i < list.length; i += 1) {
							var identifier = list[i];

							var alias = forStatement.body.contains(identifier)
								? innerAlias
								: outerAlias;

							if (name !== alias) {
								code.overwrite(identifier.start, identifier.end, alias, {
									storeName: true
								});
							}
						}

						cont = true;
					}
				}

				if (!cont) {
					var alias$1 = this.scope.createIdentifier(name);

					if (name !== alias$1) {
						declaration.name = alias$1;
						code.overwrite(
							declaration.node.start,
							declaration.node.end,
							alias$1,
							{ storeName: true }
						);

						for (var i$1 = 0, list$1 = declaration.instances; i$1 < list$1.length; i$1 += 1) {
							var identifier$1 = list$1[i$1];

							identifier$1.rewritten = true;
							code.overwrite(identifier$1.start, identifier$1.end, alias$1, {
								storeName: true
							});
						}
					}
				}
			}
		});
	}
}

function isArguments(node) {
	return node.type === 'Identifier' && node.name === 'arguments';
}

function spread(
	code,
	elements,
	start,
	argumentsArrayAlias,
	isNew
) {
	var i = elements.length;
	var firstSpreadIndex = -1;

	while (i--) {
		var element$1 = elements[i];
		if (element$1 && element$1.type === 'SpreadElement') {
			if (isArguments(element$1.argument)) {
				code.overwrite(
					element$1.argument.start,
					element$1.argument.end,
					argumentsArrayAlias
				);
			}

			firstSpreadIndex = i;
		}
	}

	if (firstSpreadIndex === -1) { return false; } // false indicates no spread elements

	if (isNew) {
		for (i = 0; i < elements.length; i += 1) {
			var element$2 = elements[i];
			if (element$2.type === 'SpreadElement') {
				code.remove(element$2.start, element$2.argument.start);
			} else {
				code.prependRight(element$2.start, '[');
				code.prependRight(element$2.end, ']');
			}
		}

		return true; // true indicates some spread elements
	}

	var element = elements[firstSpreadIndex];
	var previousElement = elements[firstSpreadIndex - 1];

	if (!previousElement) {
		code.remove(start, element.start);
		code.overwrite(element.end, elements[1].start, '.concat( ');
	} else {
		code.overwrite(previousElement.end, element.start, ' ].concat( ');
	}

	for (i = firstSpreadIndex; i < elements.length; i += 1) {
		element = elements[i];

		if (element) {
			if (element.type === 'SpreadElement') {
				code.remove(element.start, element.argument.start);
			} else {
				code.appendLeft(element.start, '[');
				code.appendLeft(element.end, ']');
			}
		}
	}

	return true; // true indicates some spread elements
}

class ArrayExpression extends Node {
	initialise(transforms) {
		if (transforms.spreadRest && this.elements.length) {
			var lexicalBoundary = this.findLexicalBoundary();

			var i = this.elements.length;
			while (i--) {
				var element = this.elements[i];
				if (
					element &&
					element.type === 'SpreadElement' &&
					isArguments(element.argument)
				) {
					this.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
				}
			}
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);

		if (transforms.spreadRest) {
			// erase trailing comma after last array element if not an array hole
			if (this.elements.length) {
				var lastElement = this.elements[this.elements.length - 1];
				if (
					lastElement &&
					/\s*,/.test(code.original.slice(lastElement.end, this.end))
				) {
					code.overwrite(lastElement.end, this.end - 1, ' ');
				}
			}

			if (this.elements.length === 1) {
				var element = this.elements[0];

				if (element && element.type === 'SpreadElement') {
					// special case – [ ...arguments ]
					if (isArguments(element.argument)) {
						code.overwrite(
							this.start,
							this.end,
							`[].concat( ${this.argumentsArrayAlias} )`
						); // TODO if this is the only use of argsArray, don't bother concating
					} else {
						code.overwrite(this.start, element.argument.start, '[].concat( ');
						code.overwrite(element.end, this.end, ' )');
					}
				}
			} else {
				var hasSpreadElements = spread(
					code,
					this.elements,
					this.start,
					this.argumentsArrayAlias
				);

				if (hasSpreadElements) {
					code.overwrite(this.end - 1, this.end, ')');
				}
			}
		}
	}
}

function removeTrailingComma(code, c) {
	while (code.original[c] !== ')') {
		if (code.original[c] === ',') {
			code.remove(c, c + 1);
			return;
		}

		if (code.original[c] === '/') {
			c = code.original.indexOf(code.original[c + 1] === '/' ? '\n' : '*/', c) + 1;
		}
		c += 1;
	}
}

class ArrowFunctionExpression extends Node {
	initialise(transforms) {
		this.body.createScope();
		super.initialise(transforms);
	}

	transpile(code, transforms) {
		var naked = this.params.length === 1 && this.start === this.params[0].start;

		if (transforms.arrow || this.needsArguments(transforms)) {
			// remove arrow
			var charIndex = this.body.start;
			while (code.original[charIndex] !== '=') {
				charIndex -= 1;
			}
			code.remove(charIndex, this.body.start);

			super.transpile(code, transforms);

			// wrap naked parameter
			if (naked) {
				code.prependRight(this.params[0].start, '(');
				code.appendLeft(this.params[0].end, ')');
			}

			// add function
			if (this.parent && this.parent.type === 'ExpressionStatement') {
				// standalone expression statement
				code.prependRight(this.start, '!function');
			} else {
				code.prependRight(this.start, 'function ');
			}
		} else {
			super.transpile(code, transforms);
		}

		if (transforms.trailingFunctionCommas && this.params.length && !naked) {
			removeTrailingComma(code, this.params[this.params.length - 1].end);
		}
	}

	// Returns whether any transforms that will happen use `arguments`
	needsArguments(transforms) {
		return (
			transforms.spreadRest &&
			this.params.filter(param => param.type === 'RestElement').length > 0
		);
	}
}

function checkConst(identifier, scope) {
	var declaration = scope.findDeclaration(identifier.name);
	if (declaration && declaration.kind === 'const') {
		throw new CompileError(`${identifier.name} is read-only`, identifier);
	}
}

class AssignmentExpression extends Node {
	initialise(transforms) {
		if (this.left.type === 'Identifier') {
			var declaration = this.findScope(false).findDeclaration(this.left.name);
			// special case – https://gitlab.com/Rich-Harris/buble/issues/11
			var statement = declaration && declaration.node.ancestor(3);
			if (
				statement &&
				statement.type === 'ForStatement' &&
				statement.body.contains(this)
			) {
				statement.reassigned[this.left.name] = true;
			}
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (this.left.type === 'Identifier') {
			// Do this check after everything has been initialized to find
			// shadowing declarations after this expression
			checkConst(this.left, this.findScope(false));
		}

		if (this.operator === '**=' && transforms.exponentiation) {
			this.transpileExponentiation(code, transforms);
		} else if (/Pattern/.test(this.left.type) && transforms.destructuring) {
			this.transpileDestructuring(code, transforms);
		}

		super.transpile(code, transforms);
	}

	transpileDestructuring(code) {
		var writeScope = this.findScope(true);
		var lookupScope = this.findScope(false);
		var assign = writeScope.createDeclaration('assign');
		code.appendRight(this.left.end, `(${assign}`);

		code.appendLeft(this.right.end, ', ');
		var statementGenerators = [];
		destructure(
			code,
			id => writeScope.createDeclaration(id),
			node => {
				var name = lookupScope.resolveName(node.name);
				checkConst(node, lookupScope);
				return name;
			},
			this.left,
			assign,
			true,
			statementGenerators
		);

		var suffix = ', ';
		statementGenerators.forEach((fn, j) => {
			if (j === statementGenerators.length - 1) {
				suffix = '';
			}

			fn(this.end, '', suffix);
		});

		if (this.unparenthesizedParent().type === 'ExpressionStatement') {
			// no rvalue needed for expression statement
			code.appendRight(this.end, `)`);
		} else {
			// destructuring is part of an expression - need an rvalue
			code.appendRight(this.end, `, ${assign})`);
		}
	}

	transpileExponentiation(code) {
		var scope = this.findScope(false);

		// first, the easy part – `**=` -> `=`
		var charIndex = this.left.end;
		while (code.original[charIndex] !== '*') { charIndex += 1; }
		code.remove(charIndex, charIndex + 2);

		// how we do the next part depends on a number of factors – whether
		// this is a top-level statement, and whether we're updating a
		// simple or complex reference
		var base;

		var left = this.left.unparenthesize();

		if (left.type === 'Identifier') {
			base = scope.resolveName(left.name);
		} else if (left.type === 'MemberExpression') {
			var object;
			var needsObjectVar = false;
			var property;
			var needsPropertyVar = false;

			var statement = this.findNearest(/(?:Statement|Declaration)$/);
			var i0 = statement.getIndentation();

			if (left.property.type === 'Identifier') {
				property = left.computed
					? scope.resolveName(left.property.name)
					: left.property.name;
			} else {
				property = scope.createDeclaration('property');
				needsPropertyVar = true;
			}

			if (left.object.type === 'Identifier') {
				object = scope.resolveName(left.object.name);
			} else {
				object = scope.createDeclaration('object');
				needsObjectVar = true;
			}

			if (left.start === statement.start) {
				if (needsObjectVar && needsPropertyVar) {
					code.prependRight(statement.start, `${object} = `);
					code.overwrite(
						left.object.end,
						left.property.start,
						`;\n${i0}${property} = `
					);
					code.overwrite(
						left.property.end,
						left.end,
						`;\n${i0}${object}[${property}]`
					);
				} else if (needsObjectVar) {
					code.prependRight(statement.start, `${object} = `);
					code.appendLeft(left.object.end, `;\n${i0}`);
					code.appendLeft(left.object.end, object);
				} else if (needsPropertyVar) {
					code.prependRight(left.property.start, `${property} = `);
					code.appendLeft(left.property.end, `;\n${i0}`);
					code.move(left.property.start, left.property.end, this.start);

					code.appendLeft(left.object.end, `[${property}]`);
					code.remove(left.object.end, left.property.start);
					code.remove(left.property.end, left.end);
				}
			} else {
				if (needsObjectVar && needsPropertyVar) {
					code.prependRight(left.start, `( ${object} = `);
					code.overwrite(
						left.object.end,
						left.property.start,
						`, ${property} = `
					);
					code.overwrite(
						left.property.end,
						left.end,
						`, ${object}[${property}]`
					);
				} else if (needsObjectVar) {
					code.prependRight(left.start, `( ${object} = `);
					code.appendLeft(left.object.end, `, ${object}`);
				} else if (needsPropertyVar) {
					code.prependRight(left.property.start, `( ${property} = `);
					code.appendLeft(left.property.end, `, `);
					code.move(left.property.start, left.property.end, left.start);

					code.overwrite(left.object.end, left.property.start, `[${property}]`);
					code.remove(left.property.end, left.end);
				}

				if (needsPropertyVar) {
					code.appendLeft(this.end, ` )`);
				}
			}

			base =
				object +
				(left.computed || needsPropertyVar ? `[${property}]` : `.${property}`);
		}

		code.prependRight(this.right.start, `Math.pow( ${base}, `);
		code.appendLeft(this.right.end, ` )`);
	}
}

class BinaryExpression extends Node {
	transpile(code, transforms) {
		if (this.operator === '**' && transforms.exponentiation) {
			code.prependRight(this.start, `Math.pow( `);
			code.overwrite(this.left.end, this.right.start, `, `);
			code.appendLeft(this.end, ` )`);
		}
		super.transpile(code, transforms);
	}
}

var loopStatement = /(?:For(?:In|Of)?|While)Statement/;

class BreakStatement extends Node {
	initialise() {
		var loop = this.findNearest(loopStatement);
		var switchCase = this.findNearest('SwitchCase');

		if (loop && (!switchCase || loop.depth > switchCase.depth)) {
			loop.canBreak = true;
			this.loop = loop;
		}
	}

	transpile(code) {
		if (this.loop && this.loop.shouldRewriteAsFunction) {
			if (this.label)
				{ throw new CompileError(
					'Labels are not currently supported in a loop with locally-scoped variables',
					this
				); }
			code.overwrite(this.start, this.start + 5, `return 'break'`);
		}
	}
}

class CallExpression extends Node {
	initialise(transforms) {
		if (transforms.spreadRest && this.arguments.length > 1) {
			var lexicalBoundary = this.findLexicalBoundary();

			var i = this.arguments.length;
			while (i--) {
				var arg = this.arguments[i];
				if (arg.type === 'SpreadElement' && isArguments(arg.argument)) {
					this.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
				}
			}
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (transforms.spreadRest && this.arguments.length) {
			var hasSpreadElements = false;
			var context;

			var firstArgument = this.arguments[0];

			if (this.arguments.length === 1) {
				if (firstArgument.type === 'SpreadElement') {
					code.remove(firstArgument.start, firstArgument.argument.start);
					hasSpreadElements = true;
				}
			} else {
				hasSpreadElements = spread(
					code,
					this.arguments,
					firstArgument.start,
					this.argumentsArrayAlias
				);
			}

			if (hasSpreadElements) {
				// we need to handle super() and super.method() differently
				// due to its instance
				var _super = null;
				if (this.callee.type === 'Super') {
					_super = this.callee;
				} else if (
					this.callee.type === 'MemberExpression' &&
					this.callee.object.type === 'Super'
				) {
					_super = this.callee.object;
				}

				if (!_super && this.callee.type === 'MemberExpression') {
					if (this.callee.object.type === 'Identifier') {
						context = this.callee.object.name;
					} else {
						context = this.findScope(true).createDeclaration('ref');
						var callExpression = this.callee.object;
						code.prependRight(callExpression.start, `(${context} = `);
						code.appendLeft(callExpression.end, `)`);
					}
				} else {
					context = 'void 0';
				}

				code.appendLeft(this.callee.end, '.apply');

				if (_super) {
					_super.noCall = true; // bit hacky...

					if (this.arguments.length > 1) {
						if (firstArgument.type !== 'SpreadElement') {
							code.prependRight(firstArgument.start, `[ `);
						}

						code.appendLeft(
							this.arguments[this.arguments.length - 1].end,
							' )'
						);
					}
				} else if (this.arguments.length === 1) {
					code.prependRight(firstArgument.start, `${context}, `);
				} else {
					if (firstArgument.type === 'SpreadElement') {
						code.appendLeft(firstArgument.start, `${context}, `);
					} else {
						code.appendLeft(firstArgument.start, `${context}, [ `);
					}

					code.appendLeft(this.arguments[this.arguments.length - 1].end, ' )');
				}
			}
		}

		if (transforms.trailingFunctionCommas && this.arguments.length) {
			removeTrailingComma(code, this.arguments[this.arguments.length - 1].end);
		}

		super.transpile(code, transforms);
	}
}

// TODO this code is pretty wild, tidy it up
class ClassBody extends Node {
	transpile(code, transforms, inFunctionExpression, superName) {
		if (transforms.classes) {
			var name = this.parent.name;

			var indentStr = code.getIndentString();
			var i0 =
				this.getIndentation() + (inFunctionExpression ? indentStr : '');
			var i1 = i0 + indentStr;

			var constructorIndex = findIndex(
				this.body,
				node => node.kind === 'constructor'
			);
			var constructor = this.body[constructorIndex];

			var introBlock = '';
			var outroBlock = '';

			if (this.body.length) {
				code.remove(this.start, this.body[0].start);
				code.remove(this.body[this.body.length - 1].end, this.end);
			} else {
				code.remove(this.start, this.end);
			}

			if (constructor) {
				constructor.value.body.isConstructorBody = true;

				var previousMethod = this.body[constructorIndex - 1];
				var nextMethod = this.body[constructorIndex + 1];

				// ensure constructor is first
				if (constructorIndex > 0) {
					code.remove(previousMethod.end, constructor.start);
					code.move(
						constructor.start,
						nextMethod ? nextMethod.start : this.end - 1,
						this.body[0].start
					);
				}

				if (!inFunctionExpression) { code.appendLeft(constructor.end, ';'); }
			}

			var namedFunctions =
				this.program.options.namedFunctionExpressions !== false;
			var namedConstructor =
				namedFunctions ||
				this.parent.superClass ||
				this.parent.type !== 'ClassDeclaration';
			if (this.parent.superClass) {
				var inheritanceBlock = `if ( ${superName} ) ${name}.__proto__ = ${
					superName
				};\n${i0}${name}.prototype = Object.create( ${superName} && ${
					superName
				}.prototype );\n${i0}${name}.prototype.constructor = ${name};`;

				if (constructor) {
					introBlock += `\n\n${i0}` + inheritanceBlock;
				} else {
					var fn =
						`function ${name} () {` +
						(superName
							? `\n${i1}${superName}.apply(this, arguments);\n${i0}}`
							: `}`) +
						(inFunctionExpression ? '' : ';') +
						(this.body.length ? `\n\n${i0}` : '');

					inheritanceBlock = fn + inheritanceBlock;
					introBlock += inheritanceBlock + `\n\n${i0}`;
				}
			} else if (!constructor) {
				var fn$1 = 'function ' + (namedConstructor ? name + ' ' : '') + '() {}';
				if (this.parent.type === 'ClassDeclaration') { fn$1 += ';'; }
				if (this.body.length) { fn$1 += `\n\n${i0}`; }

				introBlock += fn$1;
			}

			var scope = this.findScope(false);

			var prototypeGettersAndSetters = [];
			var staticGettersAndSetters = [];
			var prototypeAccessors;
			var staticAccessors;

			this.body.forEach((method, i) => {
				if (method.kind === 'constructor') {
					var constructorName = namedConstructor ? ' ' + name : '';
					code.overwrite(
						method.key.start,
						method.key.end,
						`function${constructorName}`
					);
					return;
				}

				if (method.static) {
					var len = code.original[method.start + 6] == ' ' ? 7 : 6;
					code.remove(method.start, method.start + len);
				}

				var isAccessor = method.kind !== 'method';
				var lhs;

				var methodName = method.key.name;
				if (
					reserved[methodName] ||
					method.value.body.scope.references[methodName]
				) {
					methodName = scope.createIdentifier(methodName);
				}

				// when method name is a string or a number let's pretend it's a computed method

				var fake_computed = false;
				if (!method.computed && method.key.type === 'Literal') {
					fake_computed = true;
					method.computed = true;
				}

				if (isAccessor) {
					if (method.computed) {
						throw new Error(
							'Computed accessor properties are not currently supported'
						);
					}

					code.remove(method.start, method.key.start);

					if (method.static) {
						if (!~staticGettersAndSetters.indexOf(method.key.name))
							{ staticGettersAndSetters.push(method.key.name); }
						if (!staticAccessors)
							{ staticAccessors = scope.createIdentifier('staticAccessors'); }

						lhs = `${staticAccessors}`;
					} else {
						if (!~prototypeGettersAndSetters.indexOf(method.key.name))
							{ prototypeGettersAndSetters.push(method.key.name); }
						if (!prototypeAccessors)
							{ prototypeAccessors = scope.createIdentifier('prototypeAccessors'); }

						lhs = `${prototypeAccessors}`;
					}
				} else {
					lhs = method.static ? `${name}` : `${name}.prototype`;
				}

				if (!method.computed) { lhs += '.'; }

				var insertNewlines =
					(constructorIndex > 0 && i === constructorIndex + 1) ||
					(i === 0 && constructorIndex === this.body.length - 1);

				if (insertNewlines) { lhs = `\n\n${i0}${lhs}`; }

				var c = method.key.end;
				if (method.computed) {
					if (fake_computed) {
						code.prependRight(method.key.start, '[');
						code.appendLeft(method.key.end, ']');
					} else {
						while (code.original[c] !== ']') { c += 1; }
						c += 1;
					}
				}

				var funcName =
					method.computed || isAccessor || !namedFunctions
						? ''
						: `${methodName} `;
				var rhs =
					(isAccessor ? `.${method.kind}` : '') +
					` = function` +
					(method.value.generator ? '* ' : ' ') +
					funcName;
				code.remove(c, method.value.start);
				code.prependRight(method.value.start, rhs);
				code.appendLeft(method.end, ';');

				if (method.value.generator) { code.remove(method.start, method.key.start); }

				code.prependRight(method.start, lhs);
			});

			if (prototypeGettersAndSetters.length || staticGettersAndSetters.length) {
				var intro = [];
				var outro = [];

				if (prototypeGettersAndSetters.length) {
					intro.push(
						`var ${prototypeAccessors} = { ${prototypeGettersAndSetters
							.map(name => `${name}: { configurable: true }`)
							.join(',')} };`
					);
					outro.push(
						`Object.defineProperties( ${name}.prototype, ${
							prototypeAccessors
						} );`
					);
				}

				if (staticGettersAndSetters.length) {
					intro.push(
						`var ${staticAccessors} = { ${staticGettersAndSetters
							.map(name => `${name}: { configurable: true }`)
							.join(',')} };`
					);
					outro.push(`Object.defineProperties( ${name}, ${staticAccessors} );`);
				}

				if (constructor) { introBlock += `\n\n${i0}`; }
				introBlock += intro.join(`\n${i0}`);
				if (!constructor) { introBlock += `\n\n${i0}`; }

				outroBlock += `\n\n${i0}` + outro.join(`\n${i0}`);
			}

			if (constructor) {
				code.appendLeft(constructor.end, introBlock);
			} else {
				code.prependRight(this.start, introBlock);
			}

			code.appendLeft(this.end, outroBlock);
		}

		super.transpile(code, transforms);
	}
}

// TODO this function is slightly flawed – it works on the original string,
// not its current edited state.
// That's not a problem for the way that it's currently used, but it could
// be in future...
function deindent(node, code) {
	var start = node.start;
	var end = node.end;

	var indentStr = code.getIndentString();
	var indentStrLen = indentStr.length;
	var indentStart = start - indentStrLen;

	if (
		!node.program.indentExclusions[indentStart] &&
		code.original.slice(indentStart, start) === indentStr
	) {
		code.remove(indentStart, start);
	}

	var pattern = new RegExp(indentStr + '\\S', 'g');
	var slice = code.original.slice(start, end);
	var match;

	while ((match = pattern.exec(slice))) {
		var removeStart = start + match.index;
		if (!node.program.indentExclusions[removeStart]) {
			code.remove(removeStart, removeStart + indentStrLen);
		}
	}
}

class ClassDeclaration extends Node {
	initialise(transforms) {
		if (this.id) {
			this.name = this.id.name;
			this.findScope(true).addDeclaration(this.id, 'class');
		} else {
			this.name = this.findScope(true).createIdentifier("defaultExport");
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (transforms.classes) {
			if (!this.superClass) { deindent(this.body, code); }

			var superName =
				this.superClass && (this.superClass.name || 'superclass');

			var i0 = this.getIndentation();
			var i1 = i0 + code.getIndentString();

			// if this is an export default statement, we have to move the export to
			// after the declaration, because `export default var Foo = ...` is illegal
			var isExportDefaultDeclaration = this.parent.type === 'ExportDefaultDeclaration';

			if (isExportDefaultDeclaration) {
				code.remove(this.parent.start, this.start);
			}

			var c = this.start;
			if (this.id) {
				code.overwrite(c, this.id.start, 'var ');
				c = this.id.end;
			} else {
				code.prependLeft(c, `var ${this.name}`);
			}

			if (this.superClass) {
				if (this.superClass.end === this.body.start) {
					code.remove(c, this.superClass.start);
					code.appendLeft(c, ` = (function (${superName}) {\n${i1}`);
				} else {
					code.overwrite(c, this.superClass.start, ' = ');
					code.overwrite(
						this.superClass.end,
						this.body.start,
						`(function (${superName}) {\n${i1}`
					);
				}
			} else {
				if (c === this.body.start) {
					code.appendLeft(c, ' = ');
				} else {
					code.overwrite(c, this.body.start, ' = ');
				}
			}

			this.body.transpile(code, transforms, !!this.superClass, superName);

			var syntheticDefaultExport =
				isExportDefaultDeclaration
					? `\n\n${i0}export default ${this.name};`
					: '';
			if (this.superClass) {
				code.appendLeft(this.end, `\n\n${i1}return ${this.name};\n${i0}}(`);
				code.move(this.superClass.start, this.superClass.end, this.end);
				code.prependRight(this.end, `));${syntheticDefaultExport}`);
			} else if (syntheticDefaultExport) {
				code.prependRight(this.end, syntheticDefaultExport);
			}
		} else {
			this.body.transpile(code, transforms, false, null);
		}
	}
}

class ClassExpression extends Node {
	initialise(transforms) {
		this.name = ( this.id
			? this.id.name
			: this.parent.type === 'VariableDeclarator'
				? this.parent.id.name
				: this.parent.type !== 'AssignmentExpression'
					? null
					: this.parent.left.type === 'Identifier'
						? this.parent.left.name
						: this.parent.left.type === 'MemberExpression'
							? this.parent.left.property.name
							: null ) || this.findScope(true).createIdentifier('anonymous');

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (transforms.classes) {
			var superName =
				this.superClass && (this.superClass.name || 'superclass');

			var i0 = this.getIndentation();
			var i1 = i0 + code.getIndentString();

			if (this.superClass) {
				code.remove(this.start, this.superClass.start);
				code.remove(this.superClass.end, this.body.start);
				code.appendLeft(this.start, `(function (${superName}) {\n${i1}`);
			} else {
				code.overwrite(this.start, this.body.start, `(function () {\n${i1}`);
			}

			this.body.transpile(code, transforms, true, superName);

			var outro = `\n\n${i1}return ${this.name};\n${i0}}(`;

			if (this.superClass) {
				code.appendLeft(this.end, outro);
				code.move(this.superClass.start, this.superClass.end, this.end);
				code.prependRight(this.end, '))');
			} else {
				code.appendLeft(this.end, `\n\n${i1}return ${this.name};\n${i0}}())`);
			}
		} else {
			this.body.transpile(code, transforms, false);
		}
	}
}

class ContinueStatement extends Node {
	transpile(code) {
		var loop = this.findNearest(loopStatement);
		if (loop.shouldRewriteAsFunction) {
			if (this.label)
				{ throw new CompileError(
					'Labels are not currently supported in a loop with locally-scoped variables',
					this
				); }
			code.overwrite(this.start, this.start + 8, 'return');
		}
	}
}

class ExportDefaultDeclaration extends Node {
	initialise(transforms) {
		if (transforms.moduleExport)
			{ throw new CompileError('export is not supported', this); }
		super.initialise(transforms);
	}
}

class ExportNamedDeclaration extends Node {
	initialise(transforms) {
		if (transforms.moduleExport)
			{ throw new CompileError('export is not supported', this); }
		super.initialise(transforms);
	}
}

class LoopStatement extends Node {
	findScope(functionScope) {
		return functionScope || !this.createdScope
			? this.parent.findScope(functionScope)
			: this.body.scope;
	}

	initialise(transforms) {
		this.body.createScope();
		this.createdScope = true;

		// this is populated as and when reassignments occur
		this.reassigned = Object.create(null);
		this.aliases = Object.create(null);

		super.initialise(transforms);

		if (transforms.letConst) {
			// see if any block-scoped declarations are referenced
			// inside function expressions
			var names = Object.keys(this.body.scope.declarations);

			var i = names.length;
			while (i--) {
				var name = names[i];
				var declaration = this.body.scope.declarations[name];

				var j = declaration.instances.length;
				while (j--) {
					var instance = declaration.instances[j];
					var nearestFunctionExpression = instance.findNearest(/Function/);

					if (
						nearestFunctionExpression &&
						nearestFunctionExpression.depth > this.depth
					) {
						this.shouldRewriteAsFunction = true;
						break;
					}
				}

				if (this.shouldRewriteAsFunction) { break; }
			}
		}
	}

	transpile(code, transforms) {
		var needsBlock =
			this.type != 'ForOfStatement' &&
			(this.body.type !== 'BlockStatement' ||
				(this.body.type === 'BlockStatement' && this.body.synthetic));

		if (this.shouldRewriteAsFunction) {
			var i0 = this.getIndentation();
			var i1 = i0 + code.getIndentString();

			var argString = this.args ? ` ${this.args.join(', ')} ` : '';
			var paramString = this.params ? ` ${this.params.join(', ')} ` : '';

			var functionScope = this.findScope(true);
			var loop = functionScope.createIdentifier('loop');

			var before =
				`var ${loop} = function (${paramString}) ` +
				(this.body.synthetic ? `{\n${i0}${code.getIndentString()}` : '');
			var after = (this.body.synthetic ? `\n${i0}}` : '') + `;\n\n${i0}`;

			code.prependRight(this.body.start, before);
			code.appendLeft(this.body.end, after);
			code.move(this.start, this.body.start, this.body.end);

			if (this.canBreak || this.canReturn) {
				var returned = functionScope.createIdentifier('returned');

				var insert = `{\n${i1}var ${returned} = ${loop}(${argString});\n`;
				if (this.canBreak)
					{ insert += `\n${i1}if ( ${returned} === 'break' ) break;`; }
				if (this.canReturn)
					{ insert += `\n${i1}if ( ${returned} ) return ${returned}.v;`; }
				insert += `\n${i0}}`;

				code.prependRight(this.body.end, insert);
			} else {
				var callExpression = `${loop}(${argString});`;

				if (this.type === 'DoWhileStatement') {
					code.overwrite(
						this.start,
						this.body.start,
						`do {\n${i1}${callExpression}\n${i0}}`
					);
				} else {
					code.prependRight(this.body.end, callExpression);
				}
			}
		} else if (needsBlock) {
			code.appendLeft(this.body.start, '{ ');
			code.prependRight(this.body.end, ' }');
		}

		super.transpile(code, transforms);
	}
}

class ForStatement extends LoopStatement {
	findScope(functionScope) {
		return functionScope || !this.createdScope
			? this.parent.findScope(functionScope)
			: this.body.scope;
	}

	transpile(code, transforms) {
		var i1 = this.getIndentation() + code.getIndentString();

		if (this.shouldRewriteAsFunction) {
			// which variables are declared in the init statement?
			var names =
				this.init.type === 'VariableDeclaration'
					? [].concat.apply(
							[],
							this.init.declarations.map(declarator =>
								extractNames(declarator.id)
							)
						)
					: [];

			var aliases = this.aliases;

			this.args = names.map(
				name => (name in this.aliases ? this.aliases[name].outer : name)
			);
			this.params = names.map(
				name => (name in this.aliases ? this.aliases[name].inner : name)
			);

			var updates = Object.keys(this.reassigned).map(
				name => `${aliases[name].outer} = ${aliases[name].inner};`
			);

			if (updates.length) {
				if (this.body.synthetic) {
					code.appendLeft(this.body.body[0].end, `; ${updates.join(` `)}`);
				} else {
					var lastStatement = this.body.body[this.body.body.length - 1];
					code.appendLeft(
						lastStatement.end,
						`\n\n${i1}${updates.join(`\n${i1}`)}`
					);
				}
			}
		}

		super.transpile(code, transforms);
	}
}

class ForInStatement extends LoopStatement {
	findScope(functionScope) {
		return functionScope || !this.createdScope
			? this.parent.findScope(functionScope)
			: this.body.scope;
	}

	transpile(code, transforms) {
		var hasDeclaration = this.left.type === 'VariableDeclaration';

		if (this.shouldRewriteAsFunction) {
			// which variables are declared in the init statement?
			var names =
				hasDeclaration
					? [].concat.apply(
							[],
							this.left.declarations.map(declarator =>
								extractNames(declarator.id)
							)
						)
					: [];

			this.args = names.map(
				name => (name in this.aliases ? this.aliases[name].outer : name)
			);
			this.params = names.map(
				name => (name in this.aliases ? this.aliases[name].inner : name)
			);
		}

		super.transpile(code, transforms);

		var maybePattern = hasDeclaration ? this.left.declarations[0].id : this.left;
		if (maybePattern.type !== 'Identifier') {
			this.destructurePattern(code, maybePattern, hasDeclaration);
		}
	}

	destructurePattern(code, pattern, isDeclaration) {
		var scope = this.findScope(true);
		var i0 = this.getIndentation();
		var i1 = i0 + code.getIndentString();

		var ref = scope.createIdentifier('ref');

		var bodyStart = this.body.body.length ? this.body.body[0].start : this.body.start + 1;

		code.move(pattern.start, pattern.end, bodyStart);

		code.prependRight(pattern.end, isDeclaration ? ref : `var ${ref}`);

		var statementGenerators = [];
		destructure(
			code,
			id => scope.createIdentifier(id),
			(ref) => {
				var name = ref.name;

				return scope.resolveName(name);
		},
			pattern,
			ref,
			false,
			statementGenerators
		);

		var suffix = `;\n${i1}`;
		statementGenerators.forEach((fn, i) => {
			if (i === statementGenerators.length - 1) {
				suffix = `;\n\n${i1}`;
			}

			fn(bodyStart, '', suffix);
		});
	}
}

class ForOfStatement extends LoopStatement {
	initialise(transforms) {
		if (transforms.forOf && !transforms.dangerousForOf)
			{ throw new CompileError(
				"for...of statements are not supported. Use `transforms: { forOf: false }` to skip transformation and disable this error, or `transforms: { dangerousForOf: true }` if you know what you're doing",
				this
			); }
		super.initialise(transforms);
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);
		if (!transforms.dangerousForOf) { return; }

		// edge case (#80)
		if (!this.body.body[0]) {
			if (
				this.left.type === 'VariableDeclaration' &&
				this.left.kind === 'var'
			) {
				code.remove(this.start, this.left.start);
				code.appendLeft(this.left.end, ';');
				code.remove(this.left.end, this.end);
			} else {
				code.remove(this.start, this.end);
			}

			return;
		}

		var scope = this.findScope(true);
		var i0 = this.getIndentation();
		var i1 = i0 + code.getIndentString();

		var key = scope.createIdentifier('i');
		var list = scope.createIdentifier('list');

		if (this.body.synthetic) {
			code.prependRight(this.left.start, `{\n${i1}`);
			code.appendLeft(this.body.body[0].end, `\n${i0}}`);
		}

		var bodyStart = this.body.body[0].start;

		code.remove(this.left.end, this.right.start);
		code.move(this.left.start, this.left.end, bodyStart);

		code.prependRight(this.right.start, `var ${key} = 0, ${list} = `);
		code.appendLeft(this.right.end, `; ${key} < ${list}.length; ${key} += 1`);

		var isDeclaration = this.left.type === 'VariableDeclaration';
		var maybeDestructuring = isDeclaration ? this.left.declarations[0].id : this.left;
		if (maybeDestructuring.type !== 'Identifier') {
			var statementGenerators = [];
			var ref = scope.createIdentifier('ref');
			destructure(
				code,
				id => scope.createIdentifier(id),
				(ref) => {
					var name = ref.name;

					return scope.resolveName(name);
			},
				maybeDestructuring,
				ref,
				!isDeclaration,
				statementGenerators
			);

			var suffix = `;\n${i1}`;
			statementGenerators.forEach((fn, i) => {
				if (i === statementGenerators.length - 1) {
					suffix = `;\n\n${i1}`;
				}

				fn(bodyStart, '', suffix);
			});

			if (isDeclaration) {
				code.appendLeft(this.left.start + this.left.kind.length + 1, ref);
				code.appendLeft(this.left.end, ` = ${list}[${key}];\n${i1}`);
			} else {
				code.appendLeft(this.left.end, `var ${ref} = ${list}[${key}];\n${i1}`);
			}
		} else {
			code.appendLeft(this.left.end, ` = ${list}[${key}];\n\n${i1}`);
		}
	}
}

class FunctionDeclaration extends Node {
	initialise(transforms) {
		if (this.generator && transforms.generator) {
			throw new CompileError('Generators are not supported', this);
		}

		this.body.createScope();

		if (this.id) {
			this.findScope(true).addDeclaration(this.id, 'function');
		}
		super.initialise(transforms);
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);
		if (transforms.trailingFunctionCommas && this.params.length) {
			removeTrailingComma(code, this.params[this.params.length - 1].end);
		}
	}
}

class FunctionExpression extends Node {
	initialise(transforms) {
		if (this.generator && transforms.generator) {
			throw new CompileError('Generators are not supported', this);
		}

		this.body.createScope();

		if (this.id) {
			// function expression IDs belong to the child scope...
			this.body.scope.addDeclaration(this.id, 'function');
		}

		super.initialise(transforms);

		var parent = this.parent;
		var methodName;

		if (
			transforms.conciseMethodProperty &&
			parent.type === 'Property' &&
			parent.kind === 'init' &&
			parent.method &&
			parent.key.type === 'Identifier'
		) {
			// object literal concise method
			methodName = parent.key.name;
		} else if (
			transforms.classes &&
			parent.type === 'MethodDefinition' &&
			parent.kind === 'method' &&
			parent.key.type === 'Identifier'
		) {
			// method definition in a class
			methodName = parent.key.name;
		} else if (this.id && this.id.type === 'Identifier') {
			// naked function expression
			methodName = this.id.alias || this.id.name;
		}

		if (methodName) {
			for (var i$1 = 0, list$1 = this.params; i$1 < list$1.length; i$1 += 1) {
				var param = list$1[i$1];

				if (param.type === 'Identifier' && methodName === param.name) {
					// workaround for Safari 9/WebKit bug:
					// https://gitlab.com/Rich-Harris/buble/issues/154
					// change parameter name when same as method name

					var scope = this.body.scope;
					var declaration = scope.declarations[methodName];

					var alias = scope.createIdentifier(methodName);
					param.alias = alias;

					for (var i = 0, list = declaration.instances; i < list.length; i += 1) {
						var identifier = list[i];

						identifier.alias = alias;
					}

					break;
				}
			}
		}
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);
		if (transforms.trailingFunctionCommas && this.params.length) {
			removeTrailingComma(code, this.params[this.params.length - 1].end);
		}
	}
}

function isReference(node, parent) {
	if (node.type === 'MemberExpression') {
		return !node.computed && isReference(node.object, node);
	}

	if (node.type === 'Identifier') {
		// the only time we could have an identifier node without a parent is
		// if it's the entire body of a function without a block statement –
		// i.e. an arrow function expression like `a => a`
		if (!parent) { return true; }

		if (/(Function|Class)Expression/.test(parent.type)) { return false; }

		if (parent.type === 'VariableDeclarator') { return node === parent.init; }

		// TODO is this right?
		if (
			parent.type === 'MemberExpression' ||
			parent.type === 'MethodDefinition'
		) {
			return parent.computed || node === parent.object;
		}

		if (parent.type === 'ArrayPattern') { return false; }

		// disregard the `bar` in `{ bar: foo }`, but keep it in `{ [bar]: foo }`
		if (parent.type === 'Property') {
			if (parent.parent.type === 'ObjectPattern') { return false; }
			return parent.computed || node === parent.value;
		}

		// disregard the `bar` in `class Foo { bar () {...} }`
		if (parent.type === 'MethodDefinition') { return false; }

		// disregard the `bar` in `export { foo as bar }`
		if (parent.type === 'ExportSpecifier' && node !== parent.local)
			{ return false; }

		return true;
	}
}

class Identifier extends Node {
	findScope(functionScope) {
		if (this.parent.params && ~this.parent.params.indexOf(this)) {
			return this.parent.body.scope;
		}

		if (this.parent.type === 'FunctionExpression' && this === this.parent.id) {
			return this.parent.body.scope;
		}

		return this.parent.findScope(functionScope);
	}

	initialise(transforms) {
		if (isReference(this, this.parent)) {
			if (
				transforms.arrow &&
				this.name === 'arguments' &&
				!this.findScope(false).contains(this.name)
			) {
				var lexicalBoundary = this.findLexicalBoundary();
				var arrowFunction = this.findNearest('ArrowFunctionExpression');
				var loop = this.findNearest(loopStatement);

				if (arrowFunction && arrowFunction.depth > lexicalBoundary.depth) {
					this.alias = lexicalBoundary.getArgumentsAlias();
				}

				if (
					loop &&
					loop.body.contains(this) &&
					loop.depth > lexicalBoundary.depth
				) {
					this.alias = lexicalBoundary.getArgumentsAlias();
				}
			}

			this.findScope(false).addReference(this);
		}
	}

	transpile(code) {
		if (this.alias) {
			code.overwrite(this.start, this.end, this.alias, {
				storeName: true,
				contentOnly: true
			});
		}
	}
}

class IfStatement extends Node {
	initialise(transforms) {
		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (
			this.consequent.type !== 'BlockStatement' ||
			(this.consequent.type === 'BlockStatement' && this.consequent.synthetic)
		) {
			code.appendLeft(this.consequent.start, '{ ');
			code.prependRight(this.consequent.end, ' }');
		}

		if (
			this.alternate &&
			this.alternate.type !== 'IfStatement' &&
			(this.alternate.type !== 'BlockStatement' ||
				(this.alternate.type === 'BlockStatement' && this.alternate.synthetic))
		) {
			code.appendLeft(this.alternate.start, '{ ');
			code.prependRight(this.alternate.end, ' }');
		}

		super.transpile(code, transforms);
	}
}

class ImportDeclaration extends Node {
	initialise(transforms) {
		if (transforms.moduleImport)
			{ throw new CompileError('import is not supported', this); }
		super.initialise(transforms);
	}
}

class ImportDefaultSpecifier extends Node {
	initialise(transforms) {
		this.findScope(true).addDeclaration(this.local, 'import');
		super.initialise(transforms);
	}
}

class ImportSpecifier extends Node {
	initialise(transforms) {
		this.findScope(true).addDeclaration(this.local, 'import');
		super.initialise(transforms);
	}
}

var hasDashes = val => /-/.test(val);

var formatKey = key => (hasDashes(key) ? `'${key}'` : key);

var formatVal = val => (val ? '' : 'true');

class JSXAttribute extends Node {
	transpile(code, transforms) {
		var ref = this.name;
		var start = ref.start;
		var name = ref.name;

		// Overwrite equals sign if value is present.
		var end = this.value ? this.value.start : this.name.end;

		code.overwrite(start, end, `${formatKey(name)}: ${formatVal(this.value)}`);

		super.transpile(code, transforms);
	}
}

function containsNewLine(node) {
	return (
		node.type === 'JSXText' && !/\S/.test(node.value) && /\n/.test(node.value)
	);
}

class JSXClosingElement extends Node {
	transpile(code) {
		var spaceBeforeParen = true;

		var lastChild = this.parent.children[this.parent.children.length - 1];

		// omit space before closing paren if
		//   a) this is on a separate line, or
		//   b) there are no children but there are attributes
		if (
			(lastChild && containsNewLine(lastChild)) ||
			this.parent.openingElement.attributes.length
		) {
			spaceBeforeParen = false;
		}

		code.overwrite(this.start, this.end, spaceBeforeParen ? ' )' : ')');
	}
}

function containsNewLine$1(node) {
	return (
		node.type === 'JSXText' && !/\S/.test(node.value) && /\n/.test(node.value)
	);
}

class JSXClosingFragment extends Node {
	transpile(code) {
		var spaceBeforeParen = true;

		var lastChild = this.parent.children[this.parent.children.length - 1];

		// omit space before closing paren if this is on a separate line
		if (lastChild && containsNewLine$1(lastChild)) {
			spaceBeforeParen = false;
		}

		code.overwrite(this.start, this.end, spaceBeforeParen ? ' )' : ')');
	}
}

function normalise(str, removeTrailingWhitespace) {

	str = str.replace(/\u00a0/g, '&nbsp;');

	if (removeTrailingWhitespace && /\n/.test(str)) {
		str = str.replace(/\s+$/, '');
	}

	str = str
		.replace(/^\n\r?\s+/, '') // remove leading newline + space
		.replace(/\s*\n\r?\s*/gm, ' '); // replace newlines with spaces

	// TODO prefer single quotes?
	return JSON.stringify(str);
}

class JSXElement extends Node {
	transpile(code, transforms) {
		super.transpile(code, transforms);

		var children = this.children.filter(child => {
			if (child.type !== 'JSXText') { return true; }

			// remove whitespace-only literals, unless on a single line
			return /\S/.test(child.raw) || !/\n/.test(child.raw);
		});

		if (children.length) {
			var c = this.openingElement.end;

			var i;
			for (i = 0; i < children.length; i += 1) {
				var child = children[i];

				if (
					child.type === 'JSXExpressionContainer' &&
					child.expression.type === 'JSXEmptyExpression'
				) {
					// empty block is a no op
				} else {
					var tail =
						code.original[c] === '\n' && child.type !== 'JSXText' ? '' : ' ';
					code.appendLeft(c, `,${tail}`);
				}

				if (child.type === 'JSXText') {
					var str = normalise(child.value, i === children.length - 1);
					code.overwrite(child.start, child.end, str);
				}

				c = child.end;
			}
		}
	}
}

class JSXExpressionContainer extends Node {
	transpile(code, transforms) {
		code.remove(this.start, this.expression.start);
		code.remove(this.expression.end, this.end);

		super.transpile(code, transforms);
	}
}

class JSXFragment extends JSXElement {
}

class JSXOpeningElement extends Node {
	transpile(code, transforms) {
		super.transpile(code, transforms);

		code.overwrite(this.start, this.name.start, `${this.program.jsx}( `);

		var html =
			this.name.type === 'JSXIdentifier' &&
			this.name.name[0] === this.name.name[0].toLowerCase();
		if (html) { code.prependRight(this.name.start, `'`); }

		var len = this.attributes.length;
		var c = this.name.end;

		if (len) {
			var i;

			var hasSpread = false;
			for (i = 0; i < len; i += 1) {
				if (this.attributes[i].type === 'JSXSpreadAttribute') {
					hasSpread = true;
					break;
				}
			}

			c = this.attributes[0].end;

			for (i = 0; i < len; i += 1) {
				var attr = this.attributes[i];

				if (i > 0) {
					if (attr.start === c) { code.prependRight(c, ', '); }
					else { code.overwrite(c, attr.start, ', '); }
				}

				if (hasSpread && attr.type !== 'JSXSpreadAttribute') {
					var lastAttr = this.attributes[i - 1];
					var nextAttr = this.attributes[i + 1];

					if (!lastAttr || lastAttr.type === 'JSXSpreadAttribute') {
						code.prependRight(attr.start, '{ ');
					}

					if (!nextAttr || nextAttr.type === 'JSXSpreadAttribute') {
						code.appendLeft(attr.end, ' }');
					}
				}

				c = attr.end;
			}

			var after;
			var before;
			if (hasSpread) {
				if (len === 1) {
					before = html ? `',` : ',';
				} else {
					if (!this.program.options.objectAssign) {
						throw new CompileError(
							"Mixed JSX attributes ending in spread requires specified objectAssign option with 'Object.assign' or polyfill helper.",
							this
						);
					}
					before = html
						? `', ${this.program.options.objectAssign}({},`
						: `, ${this.program.options.objectAssign}({},`;
					after = ')';
				}
			} else {
				before = html ? `', {` : ', {';
				after = ' }';
			}

			code.prependRight(this.name.end, before);

			if (after) {
				code.appendLeft(this.attributes[len - 1].end, after);
			}
		} else {
			code.appendLeft(this.name.end, html ? `', null` : `, null`);
			c = this.name.end;
		}

		if (this.selfClosing) {
			code.overwrite(c, this.end, this.attributes.length ? `)` : ` )`);
		} else {
			code.remove(c, this.end);
		}
	}
}

class JSXOpeningFragment extends Node {
	transpile(code, transforms) {
		code.overwrite(this.start, this.end, `${this.program.jsx}( React.Fragment, null`);
	}
}

class JSXSpreadAttribute extends Node {
	transpile(code, transforms) {
		code.remove(this.start, this.argument.start);
		code.remove(this.argument.end, this.end);

		super.transpile(code, transforms);
	}
}

var regjsgen = createCommonjsModule(function (module, exports) {
/*!
 * regjsgen 0.3.0
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Available under MIT license <https://github.com/demoneaux/regjsgen/blob/master/LICENSE>
 */
(function() {
  var objectTypes = {
    'function': true,
    'object': true
  };

  // Used as a reference to the global object.
  var root = (objectTypes[typeof window] && window) || this;

  // Detect free variable `exports`.
  var freeExports = objectTypes['object'] && exports;

  // Detect free variable `module`.
  var freeModule = objectTypes['object'] && module && !module.nodeType && module;

  // Detect free variable `global` from Node.js or Browserified code and use it as `root`.
  var freeGlobal = freeExports && freeModule && typeof commonjsGlobal == 'object' && commonjsGlobal;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Used to check objects for own properties.
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /*--------------------------------------------------------------------------*/

  // Generates strings based on the given code points.
  // Based on https://mths.be/fromcodepoint v0.2.0 by @mathias.
  var stringFromCharCode = String.fromCharCode;
  var floor = Math.floor;
  function fromCodePoint() {
    var MAX_SIZE = 0x4000;
    var codeUnits = [];
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return '';
    }
    var result = '';
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (
        !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
        codePoint < 0 || // not a valid Unicode code point
        codePoint > 0x10FFFF || // not a valid Unicode code point
        floor(codePoint) != codePoint // not an integer
      ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
      if (codePoint <= 0xFFFF) {
        // BMP code point
        codeUnits.push(codePoint);
      } else {
        // Astral code point; split in surrogate halves
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = (codePoint % 0x400) + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
      if (index + 1 == length || codeUnits.length > MAX_SIZE) {
        result += stringFromCharCode.apply(null, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  // Ensures that nodes have the correct types.
  var assertTypeRegexMap = {};
  function assertType(type, expected) {
    if (expected.indexOf('|') == -1) {
      if (type == expected) {
        return;
      }

      throw Error('Invalid node type: ' + type + '; expected type: ' + expected);
    }

    expected = hasOwnProperty.call(assertTypeRegexMap, expected)
      ? assertTypeRegexMap[expected]
      : (assertTypeRegexMap[expected] = RegExp('^(?:' + expected + ')$'));

    if (expected.test(type)) {
      return;
    }

    throw Error('Invalid node type: ' + type + '; expected types: ' + expected);
  }

  /*--------------------------------------------------------------------------*/

  // Generates a regular expression string based on an AST.
  function generate(node) {
    var type = node.type;

    if (hasOwnProperty.call(generators, type)) {
      return generators[type](node);
    }

    throw Error('Invalid node type: ' + type);
  }

  /*--------------------------------------------------------------------------*/

  function generateAlternative(node) {
    assertType(node.type, 'alternative');

    var terms = node.body,
        i = -1,
        length = terms.length,
        result = '';

    while (++i < length) {
      result += generateTerm(terms[i]);
    }

    return result;
  }

  function generateAnchor(node) {
    assertType(node.type, 'anchor');

    switch (node.kind) {
      case 'start':
        return '^';
      case 'end':
        return '$';
      case 'boundary':
        return '\\b';
      case 'not-boundary':
        return '\\B';
      default:
        throw Error('Invalid assertion');
    }
  }

  function generateAtom(node) {
    assertType(node.type, 'anchor|characterClass|characterClassEscape|dot|group|reference|value');

    return generate(node);
  }

  function generateCharacterClass(node) {
    assertType(node.type, 'characterClass');

    var classRanges = node.body,
        i = -1,
        length = classRanges.length,
        result = '';

    if (node.negative) {
      result += '^';
    }

    while (++i < length) {
      result += generateClassAtom(classRanges[i]);
    }

    return '[' + result + ']';
  }

  function generateCharacterClassEscape(node) {
    assertType(node.type, 'characterClassEscape');

    return '\\' + node.value;
  }

  function generateUnicodePropertyEscape(node) {
    assertType(node.type, 'unicodePropertyEscape');

    return '\\' + (node.negative ? 'P' : 'p') + '{' + node.value + '}';
  }

  function generateCharacterClassRange(node) {
    assertType(node.type, 'characterClassRange');

    var min = node.min,
        max = node.max;

    if (min.type == 'characterClassRange' || max.type == 'characterClassRange') {
      throw Error('Invalid character class range');
    }

    return generateClassAtom(min) + '-' + generateClassAtom(max);
  }

  function generateClassAtom(node) {
    assertType(node.type, 'anchor|characterClassEscape|characterClassRange|dot|value');

    return generate(node);
  }

  function generateDisjunction(node) {
    assertType(node.type, 'disjunction');

    var body = node.body,
        i = -1,
        length = body.length,
        result = '';

    while (++i < length) {
      if (i != 0) {
        result += '|';
      }
      result += generate(body[i]);
    }

    return result;
  }

  function generateDot(node) {
    assertType(node.type, 'dot');

    return '.';
  }

  function generateGroup(node) {
    assertType(node.type, 'group');

    var result = '';

    switch (node.behavior) {
      case 'normal':
        break;
      case 'ignore':
        result += '?:';
        break;
      case 'lookahead':
        result += '?=';
        break;
      case 'negativeLookahead':
        result += '?!';
        break;
      default:
        throw Error('Invalid behaviour: ' + node.behaviour);
    }

    var body = node.body,
        i = -1,
        length = body.length;

    while (++i < length) {
      result += generate(body[i]);
    }

    return '(' + result + ')';
  }

  function generateQuantifier(node) {
    assertType(node.type, 'quantifier');

    var quantifier = '',
        min = node.min,
        max = node.max;

    if (max == null) {
      if (min == 0) {
        quantifier = '*';
      } else if (min == 1) {
        quantifier = '+';
      } else {
        quantifier = '{' + min + ',}';
      }
    } else if (min == max) {
      quantifier = '{' + min + '}';
    } else if (min == 0 && max == 1) {
      quantifier = '?';
    } else {
      quantifier = '{' + min + ',' + max + '}';
    }

    if (!node.greedy) {
      quantifier += '?';
    }

    return generateAtom(node.body[0]) + quantifier;
  }

  function generateReference(node) {
    assertType(node.type, 'reference');

    return '\\' + node.matchIndex;
  }

  function generateTerm(node) {
    assertType(node.type, 'anchor|characterClass|characterClassEscape|empty|group|quantifier|reference|unicodePropertyEscape|value');

    return generate(node);
  }

  function generateValue(node) {
    assertType(node.type, 'value');

    var kind = node.kind,
        codePoint = node.codePoint;

    switch (kind) {
      case 'controlLetter':
        return '\\c' + fromCodePoint(codePoint + 64);
      case 'hexadecimalEscape':
        return '\\x' + ('00' + codePoint.toString(16).toUpperCase()).slice(-2);
      case 'identifier':
        return '\\' + fromCodePoint(codePoint);
      case 'null':
        return '\\' + codePoint;
      case 'octal':
        return '\\' + codePoint.toString(8);
      case 'singleEscape':
        switch (codePoint) {
          case 0x0008:
            return '\\b';
          case 0x0009:
            return '\\t';
          case 0x000A:
            return '\\n';
          case 0x000B:
            return '\\v';
          case 0x000C:
            return '\\f';
          case 0x000D:
            return '\\r';
          default:
            throw Error('Invalid codepoint: ' + codePoint);
        }
      case 'symbol':
        return fromCodePoint(codePoint);
      case 'unicodeEscape':
        return '\\u' + ('0000' + codePoint.toString(16).toUpperCase()).slice(-4);
      case 'unicodeCodePointEscape':
        return '\\u{' + codePoint.toString(16).toUpperCase() + '}';
      default:
        throw Error('Unsupported node kind: ' + kind);
    }
  }

  /*--------------------------------------------------------------------------*/

  // Used to generate strings for each node type.
  var generators = {
    'alternative': generateAlternative,
    'anchor': generateAnchor,
    'characterClass': generateCharacterClass,
    'characterClassEscape': generateCharacterClassEscape,
    'characterClassRange': generateCharacterClassRange,
    'unicodePropertyEscape': generateUnicodePropertyEscape,
    'disjunction': generateDisjunction,
    'dot': generateDot,
    'group': generateGroup,
    'quantifier': generateQuantifier,
    'reference': generateReference,
    'value': generateValue
  };

  /*--------------------------------------------------------------------------*/

  // Export regjsgen.
  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (typeof undefined == 'function' && typeof undefined.amd == 'object' && undefined.amd) {
    // Define as an anonymous module so it can be aliased through path mapping.
    undefined(function() {
      return {
        'generate': generate
      };
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for CommonJS support.
    freeExports.generate = generate;
  }
  else {
    // Export to the global object.
    root.regjsgen = {
      'generate': generate
    };
  }
}.call(commonjsGlobal));
});

var parser = createCommonjsModule(function (module) {
// regjsparser
//
// ==================================================================
//
// See ECMA-262 Standard: 15.10.1
//
// NOTE: The ECMA-262 standard uses the term "Assertion" for /^/. Here the
//   term "Anchor" is used.
//
// Pattern ::
//      Disjunction
//
// Disjunction ::
//      Alternative
//      Alternative | Disjunction
//
// Alternative ::
//      [empty]
//      Alternative Term
//
// Term ::
//      Anchor
//      Atom
//      Atom Quantifier
//
// Anchor ::
//      ^
//      $
//      \ b
//      \ B
//      ( ? = Disjunction )
//      ( ? ! Disjunction )
//
// Quantifier ::
//      QuantifierPrefix
//      QuantifierPrefix ?
//
// QuantifierPrefix ::
//      *
//      +
//      ?
//      { DecimalDigits }
//      { DecimalDigits , }
//      { DecimalDigits , DecimalDigits }
//
// Atom ::
//      PatternCharacter
//      .
//      \ AtomEscape
//      CharacterClass
//      ( Disjunction )
//      ( ? : Disjunction )
//
// PatternCharacter ::
//      SourceCharacter but not any of: ^ $ \ . * + ? ( ) [ ] { } |
//
// AtomEscape ::
//      DecimalEscape
//      CharacterEscape
//      CharacterClassEscape
//
// CharacterEscape[U] ::
//      ControlEscape
//      c ControlLetter
//      HexEscapeSequence
//      RegExpUnicodeEscapeSequence[?U] (ES6)
//      IdentityEscape[?U]
//
// ControlEscape ::
//      one of f n r t v
// ControlLetter ::
//      one of
//          a b c d e f g h i j k l m n o p q r s t u v w x y z
//          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
//
// IdentityEscape ::
//      SourceCharacter but not IdentifierPart
//      <ZWJ>
//      <ZWNJ>
//
// DecimalEscape ::
//      DecimalIntegerLiteral [lookahead ∉ DecimalDigit]
//
// CharacterClassEscape ::
//      one of d D s S w W
//
// CharacterClass ::
//      [ [lookahead ∉ {^}] ClassRanges ]
//      [ ^ ClassRanges ]
//
// ClassRanges ::
//      [empty]
//      NonemptyClassRanges
//
// NonemptyClassRanges ::
//      ClassAtom
//      ClassAtom NonemptyClassRangesNoDash
//      ClassAtom - ClassAtom ClassRanges
//
// NonemptyClassRangesNoDash ::
//      ClassAtom
//      ClassAtomNoDash NonemptyClassRangesNoDash
//      ClassAtomNoDash - ClassAtom ClassRanges
//
// ClassAtom ::
//      -
//      ClassAtomNoDash
//
// ClassAtomNoDash ::
//      SourceCharacter but not one of \ or ] or -
//      \ ClassEscape
//
// ClassEscape ::
//      DecimalEscape
//      b
//      CharacterEscape
//      CharacterClassEscape

(function() {

  function parse(str, flags, features) {
    if (!features) {
      features = {};
    }
    function addRaw(node) {
      node.raw = str.substring(node.range[0], node.range[1]);
      return node;
    }

    function updateRawStart(node, start) {
      node.range[0] = start;
      return addRaw(node);
    }

    function createAnchor(kind, rawLength) {
      return addRaw({
        type: 'anchor',
        kind: kind,
        range: [
          pos - rawLength,
          pos
        ]
      });
    }

    function createValue(kind, codePoint, from, to) {
      return addRaw({
        type: 'value',
        kind: kind,
        codePoint: codePoint,
        range: [from, to]
      });
    }

    function createEscaped(kind, codePoint, value, fromOffset) {
      fromOffset = fromOffset || 0;
      return createValue(kind, codePoint, pos - (value.length + fromOffset), pos);
    }

    function createCharacter(matches) {
      var _char = matches[0];
      var first = _char.charCodeAt(0);
      if (hasUnicodeFlag) {
        var second;
        if (_char.length === 1 && first >= 0xD800 && first <= 0xDBFF) {
          second = lookahead().charCodeAt(0);
          if (second >= 0xDC00 && second <= 0xDFFF) {
            // Unicode surrogate pair
            pos++;
            return createValue(
                'symbol',
                (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000,
                pos - 2, pos);
          }
        }
      }
      return createValue('symbol', first, pos - 1, pos);
    }

    function createDisjunction(alternatives, from, to) {
      return addRaw({
        type: 'disjunction',
        body: alternatives,
        range: [
          from,
          to
        ]
      });
    }

    function createDot() {
      return addRaw({
        type: 'dot',
        range: [
          pos - 1,
          pos
        ]
      });
    }

    function createCharacterClassEscape(value) {
      return addRaw({
        type: 'characterClassEscape',
        value: value,
        range: [
          pos - 2,
          pos
        ]
      });
    }

    function createReference(matchIndex) {
      return addRaw({
        type: 'reference',
        matchIndex: parseInt(matchIndex, 10),
        range: [
          pos - 1 - matchIndex.length,
          pos
        ]
      });
    }

    function createGroup(behavior, disjunction, from, to) {
      return addRaw({
        type: 'group',
        behavior: behavior,
        body: disjunction,
        range: [
          from,
          to
        ]
      });
    }

    function createQuantifier(min, max, from, to) {
      if (to == null) {
        from = pos - 1;
        to = pos;
      }

      return addRaw({
        type: 'quantifier',
        min: min,
        max: max,
        greedy: true,
        body: null, // set later on
        range: [
          from,
          to
        ]
      });
    }

    function createAlternative(terms, from, to) {
      return addRaw({
        type: 'alternative',
        body: terms,
        range: [
          from,
          to
        ]
      });
    }

    function createCharacterClass(classRanges, negative, from, to) {
      return addRaw({
        type: 'characterClass',
        body: classRanges,
        negative: negative,
        range: [
          from,
          to
        ]
      });
    }

    function createClassRange(min, max, from, to) {
      // See 15.10.2.15:
      if (min.codePoint > max.codePoint) {
        bail('invalid range in character class', min.raw + '-' + max.raw, from, to);
      }

      return addRaw({
        type: 'characterClassRange',
        min: min,
        max: max,
        range: [
          from,
          to
        ]
      });
    }

    function flattenBody(body) {
      if (body.type === 'alternative') {
        return body.body;
      } else {
        return [body];
      }
    }

    function incr(amount) {
      amount = (amount || 1);
      var res = str.substring(pos, pos + amount);
      pos += (amount || 1);
      return res;
    }

    function skip(value) {
      if (!match(value)) {
        bail('character', value);
      }
    }

    function match(value) {
      if (str.indexOf(value, pos) === pos) {
        return incr(value.length);
      }
    }

    function lookahead() {
      return str[pos];
    }

    function current(value) {
      return str.indexOf(value, pos) === pos;
    }

    function next(value) {
      return str[pos + 1] === value;
    }

    function matchReg(regExp) {
      var subStr = str.substring(pos);
      var res = subStr.match(regExp);
      if (res) {
        res.range = [];
        res.range[0] = pos;
        incr(res[0].length);
        res.range[1] = pos;
      }
      return res;
    }

    function parseDisjunction() {
      // Disjunction ::
      //      Alternative
      //      Alternative | Disjunction
      var res = [], from = pos;
      res.push(parseAlternative());

      while (match('|')) {
        res.push(parseAlternative());
      }

      if (res.length === 1) {
        return res[0];
      }

      return createDisjunction(res, from, pos);
    }

    function parseAlternative() {
      var res = [], from = pos;
      var term;

      // Alternative ::
      //      [empty]
      //      Alternative Term
      while (term = parseTerm()) {
        res.push(term);
      }

      if (res.length === 1) {
        return res[0];
      }

      return createAlternative(res, from, pos);
    }

    function parseTerm() {
      // Term ::
      //      Anchor
      //      Atom
      //      Atom Quantifier

      if (pos >= str.length || current('|') || current(')')) {
        return null; /* Means: The term is empty */
      }

      var anchor = parseAnchor();

      if (anchor) {
        return anchor;
      }

      var atom = parseAtom();
      if (!atom) {
        bail('Expected atom');
      }
      var quantifier = parseQuantifier() || false;
      if (quantifier) {
        quantifier.body = flattenBody(atom);
        // The quantifier contains the atom. Therefore, the beginning of the
        // quantifier range is given by the beginning of the atom.
        updateRawStart(quantifier, atom.range[0]);
        return quantifier;
      }
      return atom;
    }

    function parseGroup(matchA, typeA, matchB, typeB) {
      var type = null, from = pos;

      if (match(matchA)) {
        type = typeA;
      } else if (match(matchB)) {
        type = typeB;
      } else {
        return false;
      }

      var body = parseDisjunction();
      if (!body) {
        bail('Expected disjunction');
      }
      skip(')');
      var group = createGroup(type, flattenBody(body), from, pos);

      if (type == 'normal') {
        // Keep track of the number of closed groups. This is required for
        // parseDecimalEscape(). In case the string is parsed a second time the
        // value already holds the total count and no incrementation is required.
        if (firstIteration) {
          closedCaptureCounter++;
        }
      }
      return group;
    }

    function parseAnchor() {
      // Anchor ::
      //      ^
      //      $
      //      \ b
      //      \ B
      //      ( ? = Disjunction )
      //      ( ? ! Disjunction )
      if (match('^')) {
        return createAnchor('start', 1 /* rawLength */);
      } else if (match('$')) {
        return createAnchor('end', 1 /* rawLength */);
      } else if (match('\\b')) {
        return createAnchor('boundary', 2 /* rawLength */);
      } else if (match('\\B')) {
        return createAnchor('not-boundary', 2 /* rawLength */);
      } else {
        return parseGroup('(?=', 'lookahead', '(?!', 'negativeLookahead');
      }
    }

    function parseQuantifier() {
      // Quantifier ::
      //      QuantifierPrefix
      //      QuantifierPrefix ?
      //
      // QuantifierPrefix ::
      //      *
      //      +
      //      ?
      //      { DecimalDigits }
      //      { DecimalDigits , }
      //      { DecimalDigits , DecimalDigits }

      var res, from = pos;
      var quantifier;
      var min, max;

      if (match('*')) {
        quantifier = createQuantifier(0);
      }
      else if (match('+')) {
        quantifier = createQuantifier(1);
      }
      else if (match('?')) {
        quantifier = createQuantifier(0, 1);
      }
      else if (res = matchReg(/^\{([0-9]+)\}/)) {
        min = parseInt(res[1], 10);
        quantifier = createQuantifier(min, min, res.range[0], res.range[1]);
      }
      else if (res = matchReg(/^\{([0-9]+),\}/)) {
        min = parseInt(res[1], 10);
        quantifier = createQuantifier(min, undefined, res.range[0], res.range[1]);
      }
      else if (res = matchReg(/^\{([0-9]+),([0-9]+)\}/)) {
        min = parseInt(res[1], 10);
        max = parseInt(res[2], 10);
        if (min > max) {
          bail('numbers out of order in {} quantifier', '', from, pos);
        }
        quantifier = createQuantifier(min, max, res.range[0], res.range[1]);
      }

      if (quantifier) {
        if (match('?')) {
          quantifier.greedy = false;
          quantifier.range[1] += 1;
        }
      }

      return quantifier;
    }

    function parseAtom() {
      // Atom ::
      //      PatternCharacter
      //      .
      //      \ AtomEscape
      //      CharacterClass
      //      ( Disjunction )
      //      ( ? : Disjunction )

      var res;

      // jviereck: allow ']', '}' here as well to be compatible with browser's
      //   implementations: ']'.match(/]/);
      // if (res = matchReg(/^[^^$\\.*+?()[\]{}|]/)) {
      if (res = matchReg(/^[^^$\\.*+?(){[|]/)) {
        //      PatternCharacter
        return createCharacter(res);
      }
      else if (match('.')) {
        //      .
        return createDot();
      }
      else if (match('\\')) {
        //      \ AtomEscape
        res = parseAtomEscape();
        if (!res) {
          bail('atomEscape');
        }
        return res;
      }
      else if (res = parseCharacterClass()) {
        return res;
      }
      else {
        //      ( Disjunction )
        //      ( ? : Disjunction )
        return parseGroup('(?:', 'ignore', '(', 'normal');
      }
    }

    function parseUnicodeSurrogatePairEscape(firstEscape) {
      if (hasUnicodeFlag) {
        var first, second;
        if (firstEscape.kind == 'unicodeEscape' &&
          (first = firstEscape.codePoint) >= 0xD800 && first <= 0xDBFF &&
          current('\\') && next('u') ) {
          var prevPos = pos;
          pos++;
          var secondEscape = parseClassEscape();
          if (secondEscape.kind == 'unicodeEscape' &&
            (second = secondEscape.codePoint) >= 0xDC00 && second <= 0xDFFF) {
            // Unicode surrogate pair
            firstEscape.range[1] = secondEscape.range[1];
            firstEscape.codePoint = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
            firstEscape.type = 'value';
            firstEscape.kind = 'unicodeCodePointEscape';
            addRaw(firstEscape);
          }
          else {
            pos = prevPos;
          }
        }
      }
      return firstEscape;
    }

    function parseClassEscape() {
      return parseAtomEscape(true);
    }

    function parseAtomEscape(insideCharacterClass) {
      // AtomEscape ::
      //      DecimalEscape
      //      CharacterEscape
      //      CharacterClassEscape

      var res, from = pos;

      res = parseDecimalEscape();
      if (res) {
        return res;
      }

      // For ClassEscape
      if (insideCharacterClass) {
        if (match('b')) {
          // 15.10.2.19
          // The production ClassEscape :: b evaluates by returning the
          // CharSet containing the one character <BS> (Unicode value 0008).
          return createEscaped('singleEscape', 0x0008, '\\b');
        } else if (match('B')) {
          bail('\\B not possible inside of CharacterClass', '', from);
        }
      }

      res = parseCharacterEscape();

      return res;
    }


    function parseDecimalEscape() {
      // DecimalEscape ::
      //      DecimalIntegerLiteral [lookahead ∉ DecimalDigit]
      //      CharacterClassEscape :: one of d D s S w W

      var res, match;

      if (res = matchReg(/^(?!0)\d+/)) {
        match = res[0];
        var refIdx = parseInt(res[0], 10);
        if (refIdx <= closedCaptureCounter) {
          // If the number is smaller than the normal-groups found so
          // far, then it is a reference...
          return createReference(res[0]);
        } else {
          // ... otherwise it needs to be interpreted as a octal (if the
          // number is in an octal format). If it is NOT octal format,
          // then the slash is ignored and the number is matched later
          // as normal characters.

          // Recall the negative decision to decide if the input must be parsed
          // a second time with the total normal-groups.
          backrefDenied.push(refIdx);

          // Reset the position again, as maybe only parts of the previous
          // matched numbers are actual octal numbers. E.g. in '019' only
          // the '01' should be matched.
          incr(-res[0].length);
          if (res = matchReg(/^[0-7]{1,3}/)) {
            return createEscaped('octal', parseInt(res[0], 8), res[0], 1);
          } else {
            // If we end up here, we have a case like /\91/. Then the
            // first slash is to be ignored and the 9 & 1 to be treated
            // like ordinary characters. Create a character for the
            // first number only here - other number-characters
            // (if available) will be matched later.
            res = createCharacter(matchReg(/^[89]/));
            return updateRawStart(res, res.range[0] - 1);
          }
        }
      }
      // Only allow octal numbers in the following. All matched numbers start
      // with a zero (if the do not, the previous if-branch is executed).
      // If the number is not octal format and starts with zero (e.g. `091`)
      // then only the zeros `0` is treated here and the `91` are ordinary
      // characters.
      // Example:
      //   /\091/.exec('\091')[0].length === 3
      else if (res = matchReg(/^[0-7]{1,3}/)) {
        match = res[0];
        if (/^0{1,3}$/.test(match)) {
          // If they are all zeros, then only take the first one.
          return createEscaped('null', 0x0000, '0', match.length + 1);
        } else {
          return createEscaped('octal', parseInt(match, 8), match, 1);
        }
      } else if (res = matchReg(/^[dDsSwW]/)) {
        return createCharacterClassEscape(res[0]);
      }
      return false;
    }

    function parseCharacterEscape() {
      // CharacterEscape ::
      //      ControlEscape
      //      c ControlLetter
      //      HexEscapeSequence
      //      UnicodeEscapeSequence
      //      IdentityEscape

      var res;
      if (res = matchReg(/^[fnrtv]/)) {
        // ControlEscape
        var codePoint = 0;
        switch (res[0]) {
          case 't': codePoint = 0x009; break;
          case 'n': codePoint = 0x00A; break;
          case 'v': codePoint = 0x00B; break;
          case 'f': codePoint = 0x00C; break;
          case 'r': codePoint = 0x00D; break;
        }
        return createEscaped('singleEscape', codePoint, '\\' + res[0]);
      } else if (res = matchReg(/^c([a-zA-Z])/)) {
        // c ControlLetter
        return createEscaped('controlLetter', res[1].charCodeAt(0) % 32, res[1], 2);
      } else if (res = matchReg(/^x([0-9a-fA-F]{2})/)) {
        // HexEscapeSequence
        return createEscaped('hexadecimalEscape', parseInt(res[1], 16), res[1], 2);
      } else if (res = matchReg(/^u([0-9a-fA-F]{4})/)) {
        // UnicodeEscapeSequence
        return parseUnicodeSurrogatePairEscape(
          createEscaped('unicodeEscape', parseInt(res[1], 16), res[1], 2)
        );
      } else if (hasUnicodeFlag && (res = matchReg(/^u\{([0-9a-fA-F]+)\}/))) {
        // RegExpUnicodeEscapeSequence (ES6 Unicode code point escape)
        return createEscaped('unicodeCodePointEscape', parseInt(res[1], 16), res[1], 4);
      } else if (features.unicodePropertyEscape && hasUnicodeFlag && (res = matchReg(/^([pP])\{([^\}]+)\}/))) {
        // https://github.com/jviereck/regjsparser/issues/77
        return addRaw({
          type: 'unicodePropertyEscape',
          negative: res[1] === 'P',
          value: res[2],
          range: [res.range[0] - 1, res.range[1]],
          raw: res[0]
        });
      } else {
        // IdentityEscape
        return parseIdentityEscape();
      }
    }

    // Taken from the Esprima parser.
    function isIdentifierPart(ch) {
      // Generated by `tools/generate-identifier-regex.js`.
      var NonAsciiIdentifierPart = new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]');

      return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
        (ch >= 65 && ch <= 90) ||         // A..Z
        (ch >= 97 && ch <= 122) ||        // a..z
        (ch >= 48 && ch <= 57) ||         // 0..9
        (ch === 92) ||                    // \ (backslash)
        ((ch >= 0x80) && NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
    }

    function parseIdentityEscape() {
      // IdentityEscape ::
      //      SourceCharacter but not IdentifierPart
      //      <ZWJ>
      //      <ZWNJ>

      var ZWJ = '\u200C';
      var ZWNJ = '\u200D';

      var tmp;

      if (!isIdentifierPart(lookahead())) {
        tmp = incr();
        return createEscaped('identifier', tmp.charCodeAt(0), tmp, 1);
      }

      if (match(ZWJ)) {
        // <ZWJ>
        return createEscaped('identifier', 0x200C, ZWJ);
      } else if (match(ZWNJ)) {
        // <ZWNJ>
        return createEscaped('identifier', 0x200D, ZWNJ);
      }

      return null;
    }

    function parseCharacterClass() {
      // CharacterClass ::
      //      [ [lookahead ∉ {^}] ClassRanges ]
      //      [ ^ ClassRanges ]

      var res, from = pos;
      if (res = matchReg(/^\[\^/)) {
        res = parseClassRanges();
        skip(']');
        return createCharacterClass(res, true, from, pos);
      } else if (match('[')) {
        res = parseClassRanges();
        skip(']');
        return createCharacterClass(res, false, from, pos);
      }

      return null;
    }

    function parseClassRanges() {
      // ClassRanges ::
      //      [empty]
      //      NonemptyClassRanges

      var res;
      if (current(']')) {
        // Empty array means nothing insinde of the ClassRange.
        return [];
      } else {
        res = parseNonemptyClassRanges();
        if (!res) {
          bail('nonEmptyClassRanges');
        }
        return res;
      }
    }

    function parseHelperClassRanges(atom) {
      var from, to, res;
      if (current('-') && !next(']')) {
        // ClassAtom - ClassAtom ClassRanges
        skip('-');

        res = parseClassAtom();
        if (!res) {
          bail('classAtom');
        }
        to = pos;
        var classRanges = parseClassRanges();
        if (!classRanges) {
          bail('classRanges');
        }
        from = atom.range[0];
        if (classRanges.type === 'empty') {
          return [createClassRange(atom, res, from, to)];
        }
        return [createClassRange(atom, res, from, to)].concat(classRanges);
      }

      res = parseNonemptyClassRangesNoDash();
      if (!res) {
        bail('nonEmptyClassRangesNoDash');
      }

      return [atom].concat(res);
    }

    function parseNonemptyClassRanges() {
      // NonemptyClassRanges ::
      //      ClassAtom
      //      ClassAtom NonemptyClassRangesNoDash
      //      ClassAtom - ClassAtom ClassRanges

      var atom = parseClassAtom();
      if (!atom) {
        bail('classAtom');
      }

      if (current(']')) {
        // ClassAtom
        return [atom];
      }

      // ClassAtom NonemptyClassRangesNoDash
      // ClassAtom - ClassAtom ClassRanges
      return parseHelperClassRanges(atom);
    }

    function parseNonemptyClassRangesNoDash() {
      // NonemptyClassRangesNoDash ::
      //      ClassAtom
      //      ClassAtomNoDash NonemptyClassRangesNoDash
      //      ClassAtomNoDash - ClassAtom ClassRanges

      var res = parseClassAtom();
      if (!res) {
        bail('classAtom');
      }
      if (current(']')) {
        //      ClassAtom
        return res;
      }

      // ClassAtomNoDash NonemptyClassRangesNoDash
      // ClassAtomNoDash - ClassAtom ClassRanges
      return parseHelperClassRanges(res);
    }

    function parseClassAtom() {
      // ClassAtom ::
      //      -
      //      ClassAtomNoDash
      if (match('-')) {
        return createCharacter('-');
      } else {
        return parseClassAtomNoDash();
      }
    }

    function parseClassAtomNoDash() {
      // ClassAtomNoDash ::
      //      SourceCharacter but not one of \ or ] or -
      //      \ ClassEscape

      var res;
      if (res = matchReg(/^[^\\\]-]/)) {
        return createCharacter(res[0]);
      } else if (match('\\')) {
        res = parseClassEscape();
        if (!res) {
          bail('classEscape');
        }

        return parseUnicodeSurrogatePairEscape(res);
      }
    }

    function bail(message, details, from, to) {
      from = from == null ? pos : from;
      to = to == null ? from : to;

      var contextStart = Math.max(0, from - 10);
      var contextEnd = Math.min(to + 10, str.length);

      // Output a bit of context and a line pointing to where our error is.
      //
      // We are assuming that there are no actual newlines in the content as this is a regular expression.
      var context = '    ' + str.substring(contextStart, contextEnd);
      var pointer = '    ' + new Array(from - contextStart + 1).join(' ') + '^';

      throw SyntaxError(message + ' at position ' + from + (details ? ': ' + details : '') + '\n' + context + '\n' + pointer);
    }

    var backrefDenied = [];
    var closedCaptureCounter = 0;
    var firstIteration = true;
    var hasUnicodeFlag = (flags || "").indexOf("u") !== -1;
    var pos = 0;

    // Convert the input to a string and treat the empty string special.
    str = String(str);
    if (str === '') {
      str = '(?:)';
    }

    var result = parseDisjunction();

    if (result.range[1] !== str.length) {
      bail('Could not parse entire input - got stuck', '', result.range[1]);
    }

    // The spec requires to interpret the `\2` in `/\2()()/` as backreference.
    // As the parser collects the number of capture groups as the string is
    // parsed it is impossible to make these decisions at the point when the
    // `\2` is handled. In case the local decision turns out to be wrong after
    // the parsing has finished, the input string is parsed a second time with
    // the total number of capture groups set.
    //
    // SEE: https://github.com/jviereck/regjsparser/issues/70
    for (var i = 0; i < backrefDenied.length; i++) {
      if (backrefDenied[i] <= closedCaptureCounter) {
        // Parse the input a second time.
        pos = 0;
        firstIteration = false;
        return parseDisjunction();
      }
    }

    return result;
  }

  var regjsparser = {
    parse: parse
  };

  if ('object' !== 'undefined' && module.exports) {
    module.exports = regjsparser;
  } else {
    window.regjsparser = regjsparser;
  }

}());
});

var regenerate = createCommonjsModule(function (module, exports) {
/*! https://mths.be/regenerate v1.3.3 by @mathias | MIT license */
(function(root) {

	// Detect free variables `exports`.
	var freeExports = 'object' == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = 'object' == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js/io.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var ERRORS = {
		'rangeOrder': 'A range\u2019s `stop` value must be greater than or equal ' +
			'to the `start` value.',
		'codePointRange': 'Invalid code point value. Code points range from ' +
			'U+000000 to U+10FFFF.'
	};

	// https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs
	var HIGH_SURROGATE_MIN = 0xD800;
	var HIGH_SURROGATE_MAX = 0xDBFF;
	var LOW_SURROGATE_MIN = 0xDC00;
	var LOW_SURROGATE_MAX = 0xDFFF;

	// In Regenerate output, `\0` is never preceded by `\` because we sort by
	// code point value, so let’s keep this regular expression simple.
	var regexNull = /\\x00([^0123456789]|$)/g;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var extend = function(destination, source) {
		var key;
		for (key in source) {
			if (hasOwnProperty.call(source, key)) {
				destination[key] = source[key];
			}
		}
		return destination;
	};

	var forEach = function(array, callback) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			callback(array[index], index);
		}
	};

	var toString = object.toString;
	var isArray = function(value) {
		return toString.call(value) == '[object Array]';
	};
	var isNumber = function(value) {
		return typeof value == 'number' ||
			toString.call(value) == '[object Number]';
	};

	// This assumes that `number` is a positive integer that `toString()`s nicely
	// (which is the case for all code point values).
	var zeroes = '0000';
	var pad = function(number, totalCharacters) {
		var string = String(number);
		return string.length < totalCharacters
			? (zeroes + string).slice(-totalCharacters)
			: string;
	};

	var hex = function(number) {
		return Number(number).toString(16).toUpperCase();
	};

	var slice = [].slice;

	/*--------------------------------------------------------------------------*/

	var dataFromCodePoints = function(codePoints) {
		var index = -1;
		var length = codePoints.length;
		var max = length - 1;
		var result = [];
		var isStart = true;
		var tmp;
		var previous = 0;
		while (++index < length) {
			tmp = codePoints[index];
			if (isStart) {
				result.push(tmp);
				previous = tmp;
				isStart = false;
			} else {
				if (tmp == previous + 1) {
					if (index != max) {
						previous = tmp;
						continue;
					} else {
						isStart = true;
						result.push(tmp + 1);
					}
				} else {
					// End the previous range and start a new one.
					result.push(previous + 1, tmp);
					previous = tmp;
				}
			}
		}
		if (!isStart) {
			result.push(tmp + 1);
		}
		return result;
	};

	var dataRemove = function(data, codePoint) {
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var length = data.length;
		while (index < length) {
			start = data[index];
			end = data[index + 1];
			if (codePoint >= start && codePoint < end) {
				// Modify this pair.
				if (codePoint == start) {
					if (end == start + 1) {
						// Just remove `start` and `end`.
						data.splice(index, 2);
						return data;
					} else {
						// Just replace `start` with a new value.
						data[index] = codePoint + 1;
						return data;
					}
				} else if (codePoint == end - 1) {
					// Just replace `end` with a new value.
					data[index + 1] = codePoint;
					return data;
				} else {
					// Replace `[start, end]` with `[startA, endA, startB, endB]`.
					data.splice(index, 2, start, codePoint, codePoint + 1, end);
					return data;
				}
			}
			index += 2;
		}
		return data;
	};

	var dataRemoveRange = function(data, rangeStart, rangeEnd) {
		if (rangeEnd < rangeStart) {
			throw Error(ERRORS.rangeOrder);
		}
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		while (index < data.length) {
			start = data[index];
			end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.

			// Exit as soon as no more matching pairs can be found.
			if (start > rangeEnd) {
				return data;
			}

			// Check if this range pair is equal to, or forms a subset of, the range
			// to be removed.
			// E.g. we have `[0, 11, 40, 51]` and want to remove 0-10 → `[40, 51]`.
			// E.g. we have `[40, 51]` and want to remove 0-100 → `[]`.
			if (rangeStart <= start && rangeEnd >= end) {
				// Remove this pair.
				data.splice(index, 2);
				continue;
			}

			// Check if both `rangeStart` and `rangeEnd` are within the bounds of
			// this pair.
			// E.g. we have `[0, 11]` and want to remove 4-6 → `[0, 4, 7, 11]`.
			if (rangeStart >= start && rangeEnd < end) {
				if (rangeStart == start) {
					// Replace `[start, end]` with `[startB, endB]`.
					data[index] = rangeEnd + 1;
					data[index + 1] = end + 1;
					return data;
				}
				// Replace `[start, end]` with `[startA, endA, startB, endB]`.
				data.splice(index, 2, start, rangeStart, rangeEnd + 1, end + 1);
				return data;
			}

			// Check if only `rangeStart` is within the bounds of this pair.
			// E.g. we have `[0, 11]` and want to remove 4-20 → `[0, 4]`.
			if (rangeStart >= start && rangeStart <= end) {
				// Replace `end` with `rangeStart`.
				data[index + 1] = rangeStart;
				// Note: we cannot `return` just yet, in case any following pairs still
				// contain matching code points.
				// E.g. we have `[0, 11, 14, 31]` and want to remove 4-20
				// → `[0, 4, 21, 31]`.
			}

			// Check if only `rangeEnd` is within the bounds of this pair.
			// E.g. we have `[14, 31]` and want to remove 4-20 → `[21, 31]`.
			else if (rangeEnd >= start && rangeEnd <= end) {
				// Just replace `start`.
				data[index] = rangeEnd + 1;
				return data;
			}

			index += 2;
		}
		return data;
	};

	 var dataAdd = function(data, codePoint) {
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var lastIndex = null;
		var length = data.length;
		if (codePoint < 0x0 || codePoint > 0x10FFFF) {
			throw RangeError(ERRORS.codePointRange);
		}
		while (index < length) {
			start = data[index];
			end = data[index + 1];

			// Check if the code point is already in the set.
			if (codePoint >= start && codePoint < end) {
				return data;
			}

			if (codePoint == start - 1) {
				// Just replace `start` with a new value.
				data[index] = codePoint;
				return data;
			}

			// At this point, if `start` is `greater` than `codePoint`, insert a new
			// `[start, end]` pair before the current pair, or after the current pair
			// if there is a known `lastIndex`.
			if (start > codePoint) {
				data.splice(
					lastIndex != null ? lastIndex + 2 : 0,
					0,
					codePoint,
					codePoint + 1
				);
				return data;
			}

			if (codePoint == end) {
				// Check if adding this code point causes two separate ranges to become
				// a single range, e.g. `dataAdd([0, 4, 5, 10], 4)` → `[0, 10]`.
				if (codePoint + 1 == data[index + 2]) {
					data.splice(index, 4, start, data[index + 3]);
					return data;
				}
				// Else, just replace `end` with a new value.
				data[index + 1] = codePoint + 1;
				return data;
			}
			lastIndex = index;
			index += 2;
		}
		// The loop has finished; add the new pair to the end of the data set.
		data.push(codePoint, codePoint + 1);
		return data;
	};

	var dataAddData = function(dataA, dataB) {
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var data = dataA.slice();
		var length = dataB.length;
		while (index < length) {
			start = dataB[index];
			end = dataB[index + 1] - 1;
			if (start == end) {
				data = dataAdd(data, start);
			} else {
				data = dataAddRange(data, start, end);
			}
			index += 2;
		}
		return data;
	};

	var dataRemoveData = function(dataA, dataB) {
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var data = dataA.slice();
		var length = dataB.length;
		while (index < length) {
			start = dataB[index];
			end = dataB[index + 1] - 1;
			if (start == end) {
				data = dataRemove(data, start);
			} else {
				data = dataRemoveRange(data, start, end);
			}
			index += 2;
		}
		return data;
	};

	var dataAddRange = function(data, rangeStart, rangeEnd) {
		if (rangeEnd < rangeStart) {
			throw Error(ERRORS.rangeOrder);
		}
		if (
			rangeStart < 0x0 || rangeStart > 0x10FFFF ||
			rangeEnd < 0x0 || rangeEnd > 0x10FFFF
		) {
			throw RangeError(ERRORS.codePointRange);
		}
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var added = false;
		var length = data.length;
		while (index < length) {
			start = data[index];
			end = data[index + 1];

			if (added) {
				// The range has already been added to the set; at this point, we just
				// need to get rid of the following ranges in case they overlap.

				// Check if this range can be combined with the previous range.
				if (start == rangeEnd + 1) {
					data.splice(index - 1, 2);
					return data;
				}

				// Exit as soon as no more possibly overlapping pairs can be found.
				if (start > rangeEnd) {
					return data;
				}

				// E.g. `[0, 11, 12, 16]` and we’ve added 5-15, so we now have
				// `[0, 16, 12, 16]`. Remove the `12,16` part, as it lies within the
				// `0,16` range that was previously added.
				if (start >= rangeStart && start <= rangeEnd) {
					// `start` lies within the range that was previously added.

					if (end > rangeStart && end - 1 <= rangeEnd) {
						// `end` lies within the range that was previously added as well,
						// so remove this pair.
						data.splice(index, 2);
						index -= 2;
						// Note: we cannot `return` just yet, as there may still be other
						// overlapping pairs.
					} else {
						// `start` lies within the range that was previously added, but
						// `end` doesn’t. E.g. `[0, 11, 12, 31]` and we’ve added 5-15, so
						// now we have `[0, 16, 12, 31]`. This must be written as `[0, 31]`.
						// Remove the previously added `end` and the current `start`.
						data.splice(index - 1, 2);
						index -= 2;
					}

					// Note: we cannot return yet.
				}

			}

			else if (start == rangeEnd + 1) {
				data[index] = rangeStart;
				return data;
			}

			// Check if a new pair must be inserted *before* the current one.
			else if (start > rangeEnd) {
				data.splice(index, 0, rangeStart, rangeEnd + 1);
				return data;
			}

			else if (rangeStart >= start && rangeStart < end && rangeEnd + 1 <= end) {
				// The new range lies entirely within an existing range pair. No action
				// needed.
				return data;
			}

			else if (
				// E.g. `[0, 11]` and you add 5-15 → `[0, 16]`.
				(rangeStart >= start && rangeStart < end) ||
				// E.g. `[0, 3]` and you add 3-6 → `[0, 7]`.
				end == rangeStart
			) {
				// Replace `end` with the new value.
				data[index + 1] = rangeEnd + 1;
				// Make sure the next range pair doesn’t overlap, e.g. `[0, 11, 12, 14]`
				// and you add 5-15 → `[0, 16]`, i.e. remove the `12,14` part.
				added = true;
				// Note: we cannot `return` just yet.
			}

			else if (rangeStart <= start && rangeEnd + 1 >= end) {
				// The new range is a superset of the old range.
				data[index] = rangeStart;
				data[index + 1] = rangeEnd + 1;
				added = true;
			}

			index += 2;
		}
		// The loop has finished without doing anything; add the new pair to the end
		// of the data set.
		if (!added) {
			data.push(rangeStart, rangeEnd + 1);
		}
		return data;
	};

	var dataContains = function(data, codePoint) {
		var index = 0;
		var length = data.length;
		// Exit early if `codePoint` is not within `data`’s overall range.
		var start = data[index];
		var end = data[length - 1];
		if (length >= 2) {
			if (codePoint < start || codePoint > end) {
				return false;
			}
		}
		// Iterate over the data per `(start, end)` pair.
		while (index < length) {
			start = data[index];
			end = data[index + 1];
			if (codePoint >= start && codePoint < end) {
				return true;
			}
			index += 2;
		}
		return false;
	};

	var dataIntersection = function(data, codePoints) {
		var index = 0;
		var length = codePoints.length;
		var codePoint;
		var result = [];
		while (index < length) {
			codePoint = codePoints[index];
			if (dataContains(data, codePoint)) {
				result.push(codePoint);
			}
			++index;
		}
		return dataFromCodePoints(result);
	};

	var dataIsEmpty = function(data) {
		return !data.length;
	};

	var dataIsSingleton = function(data) {
		// Check if the set only represents a single code point.
		return data.length == 2 && data[0] + 1 == data[1];
	};

	var dataToArray = function(data) {
		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var result = [];
		var length = data.length;
		while (index < length) {
			start = data[index];
			end = data[index + 1];
			while (start < end) {
				result.push(start);
				++start;
			}
			index += 2;
		}
		return result;
	};

	/*--------------------------------------------------------------------------*/

	// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	var floor = Math.floor;
	var highSurrogate = function(codePoint) {
		return parseInt(
			floor((codePoint - 0x10000) / 0x400) + HIGH_SURROGATE_MIN,
			10
		);
	};

	var lowSurrogate = function(codePoint) {
		return parseInt(
			(codePoint - 0x10000) % 0x400 + LOW_SURROGATE_MIN,
			10
		);
	};

	var stringFromCharCode = String.fromCharCode;
	var codePointToString = function(codePoint) {
		var string;
		// https://mathiasbynens.be/notes/javascript-escapes#single
		// Note: the `\b` escape sequence for U+0008 BACKSPACE in strings has a
		// different meaning in regular expressions (word boundary), so it cannot
		// be used here.
		if (codePoint == 0x09) {
			string = '\\t';
		}
		// Note: IE < 9 treats `'\v'` as `'v'`, so avoid using it.
		// else if (codePoint == 0x0B) {
		// 	string = '\\v';
		// }
		else if (codePoint == 0x0A) {
			string = '\\n';
		}
		else if (codePoint == 0x0C) {
			string = '\\f';
		}
		else if (codePoint == 0x0D) {
			string = '\\r';
		}
		else if (codePoint == 0x5C) {
			string = '\\\\';
		}
		else if (
			codePoint == 0x24 ||
			(codePoint >= 0x28 && codePoint <= 0x2B) ||
			(codePoint >= 0x2D && codePoint <= 0x2F) ||
			codePoint == 0x3F ||
			(codePoint >= 0x5B && codePoint <= 0x5E) ||
			(codePoint >= 0x7B && codePoint <= 0x7D)
		) {
			// The code point maps to an unsafe printable ASCII character;
			// backslash-escape it. Here’s the list of those symbols:
			//
			//     $()*+-./?[\]^{|}
			//
			// See #7 for more info.
			string = '\\' + stringFromCharCode(codePoint);
		}
		else if (codePoint >= 0x20 && codePoint <= 0x7E) {
			// The code point maps to one of these printable ASCII symbols
			// (including the space character):
			//
			//      !"#%&',/0123456789:;<=>@ABCDEFGHIJKLMNO
			//     PQRSTUVWXYZ_`abcdefghijklmnopqrstuvwxyz~
			//
			// These can safely be used directly.
			string = stringFromCharCode(codePoint);
		}
		else if (codePoint <= 0xFF) {
			// https://mathiasbynens.be/notes/javascript-escapes#hexadecimal
			string = '\\x' + pad(hex(codePoint), 2);
		}
		else { // `codePoint <= 0xFFFF` holds true.
			// https://mathiasbynens.be/notes/javascript-escapes#unicode
			string = '\\u' + pad(hex(codePoint), 4);
		}

		// There’s no need to account for astral symbols / surrogate pairs here,
		// since `codePointToString` is private and only used for BMP code points.
		// But if that’s what you need, just add an `else` block with this code:
		//
		//     string = '\\u' + pad(hex(highSurrogate(codePoint)), 4)
		//     	+ '\\u' + pad(hex(lowSurrogate(codePoint)), 4);

		return string;
	};

	var codePointToStringUnicode = function(codePoint) {
		if (codePoint <= 0xFFFF) {
			return codePointToString(codePoint);
		}
		return '\\u{' + codePoint.toString(16).toUpperCase() + '}';
	};

	var symbolToCodePoint = function(symbol) {
		var length = symbol.length;
		var first = symbol.charCodeAt(0);
		var second;
		if (
			first >= HIGH_SURROGATE_MIN && first <= HIGH_SURROGATE_MAX &&
			length > 1 // There is a next code unit.
		) {
			// `first` is a high surrogate, and there is a next character. Assume
			// it’s a low surrogate (else it’s invalid usage of Regenerate anyway).
			second = symbol.charCodeAt(1);
			// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
			return (first - HIGH_SURROGATE_MIN) * 0x400 +
				second - LOW_SURROGATE_MIN + 0x10000;
		}
		return first;
	};

	var createBMPCharacterClasses = function(data) {
		// Iterate over the data per `(start, end)` pair.
		var result = '';
		var index = 0;
		var start;
		var end;
		var length = data.length;
		if (dataIsSingleton(data)) {
			return codePointToString(data[0]);
		}
		while (index < length) {
			start = data[index];
			end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.
			if (start == end) {
				result += codePointToString(start);
			} else if (start + 1 == end) {
				result += codePointToString(start) + codePointToString(end);
			} else {
				result += codePointToString(start) + '-' + codePointToString(end);
			}
			index += 2;
		}
		return '[' + result + ']';
	};

	var createUnicodeCharacterClasses = function(data) {
		// Iterate over the data per `(start, end)` pair.
		var result = '';
		var index = 0;
		var start;
		var end;
		var length = data.length;
		if (dataIsSingleton(data)) {
			return codePointToStringUnicode(data[0]);
		}
		while (index < length) {
			start = data[index];
			end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.
			if (start == end) {
				result += codePointToStringUnicode(start);
			} else if (start + 1 == end) {
				result += codePointToStringUnicode(start) + codePointToStringUnicode(end);
			} else {
				result += codePointToStringUnicode(start) + '-' + codePointToStringUnicode(end);
			}
			index += 2;
		}
		return '[' + result + ']';
	};

	var splitAtBMP = function(data) {
		// Iterate over the data per `(start, end)` pair.
		var loneHighSurrogates = [];
		var loneLowSurrogates = [];
		var bmp = [];
		var astral = [];
		var index = 0;
		var start;
		var end;
		var length = data.length;
		while (index < length) {
			start = data[index];
			end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.

			if (start < HIGH_SURROGATE_MIN) {

				// The range starts and ends before the high surrogate range.
				// E.g. (0, 0x10).
				if (end < HIGH_SURROGATE_MIN) {
					bmp.push(start, end + 1);
				}

				// The range starts before the high surrogate range and ends within it.
				// E.g. (0, 0xD855).
				if (end >= HIGH_SURROGATE_MIN && end <= HIGH_SURROGATE_MAX) {
					bmp.push(start, HIGH_SURROGATE_MIN);
					loneHighSurrogates.push(HIGH_SURROGATE_MIN, end + 1);
				}

				// The range starts before the high surrogate range and ends in the low
				// surrogate range. E.g. (0, 0xDCFF).
				if (end >= LOW_SURROGATE_MIN && end <= LOW_SURROGATE_MAX) {
					bmp.push(start, HIGH_SURROGATE_MIN);
					loneHighSurrogates.push(HIGH_SURROGATE_MIN, HIGH_SURROGATE_MAX + 1);
					loneLowSurrogates.push(LOW_SURROGATE_MIN, end + 1);
				}

				// The range starts before the high surrogate range and ends after the
				// low surrogate range. E.g. (0, 0x10FFFF).
				if (end > LOW_SURROGATE_MAX) {
					bmp.push(start, HIGH_SURROGATE_MIN);
					loneHighSurrogates.push(HIGH_SURROGATE_MIN, HIGH_SURROGATE_MAX + 1);
					loneLowSurrogates.push(LOW_SURROGATE_MIN, LOW_SURROGATE_MAX + 1);
					if (end <= 0xFFFF) {
						bmp.push(LOW_SURROGATE_MAX + 1, end + 1);
					} else {
						bmp.push(LOW_SURROGATE_MAX + 1, 0xFFFF + 1);
						astral.push(0xFFFF + 1, end + 1);
					}
				}

			} else if (start >= HIGH_SURROGATE_MIN && start <= HIGH_SURROGATE_MAX) {

				// The range starts and ends in the high surrogate range.
				// E.g. (0xD855, 0xD866).
				if (end >= HIGH_SURROGATE_MIN && end <= HIGH_SURROGATE_MAX) {
					loneHighSurrogates.push(start, end + 1);
				}

				// The range starts in the high surrogate range and ends in the low
				// surrogate range. E.g. (0xD855, 0xDCFF).
				if (end >= LOW_SURROGATE_MIN && end <= LOW_SURROGATE_MAX) {
					loneHighSurrogates.push(start, HIGH_SURROGATE_MAX + 1);
					loneLowSurrogates.push(LOW_SURROGATE_MIN, end + 1);
				}

				// The range starts in the high surrogate range and ends after the low
				// surrogate range. E.g. (0xD855, 0x10FFFF).
				if (end > LOW_SURROGATE_MAX) {
					loneHighSurrogates.push(start, HIGH_SURROGATE_MAX + 1);
					loneLowSurrogates.push(LOW_SURROGATE_MIN, LOW_SURROGATE_MAX + 1);
					if (end <= 0xFFFF) {
						bmp.push(LOW_SURROGATE_MAX + 1, end + 1);
					} else {
						bmp.push(LOW_SURROGATE_MAX + 1, 0xFFFF + 1);
						astral.push(0xFFFF + 1, end + 1);
					}
				}

			} else if (start >= LOW_SURROGATE_MIN && start <= LOW_SURROGATE_MAX) {

				// The range starts and ends in the low surrogate range.
				// E.g. (0xDCFF, 0xDDFF).
				if (end >= LOW_SURROGATE_MIN && end <= LOW_SURROGATE_MAX) {
					loneLowSurrogates.push(start, end + 1);
				}

				// The range starts in the low surrogate range and ends after the low
				// surrogate range. E.g. (0xDCFF, 0x10FFFF).
				if (end > LOW_SURROGATE_MAX) {
					loneLowSurrogates.push(start, LOW_SURROGATE_MAX + 1);
					if (end <= 0xFFFF) {
						bmp.push(LOW_SURROGATE_MAX + 1, end + 1);
					} else {
						bmp.push(LOW_SURROGATE_MAX + 1, 0xFFFF + 1);
						astral.push(0xFFFF + 1, end + 1);
					}
				}

			} else if (start > LOW_SURROGATE_MAX && start <= 0xFFFF) {

				// The range starts and ends after the low surrogate range.
				// E.g. (0xFFAA, 0x10FFFF).
				if (end <= 0xFFFF) {
					bmp.push(start, end + 1);
				} else {
					bmp.push(start, 0xFFFF + 1);
					astral.push(0xFFFF + 1, end + 1);
				}

			} else {

				// The range starts and ends in the astral range.
				astral.push(start, end + 1);

			}

			index += 2;
		}
		return {
			'loneHighSurrogates': loneHighSurrogates,
			'loneLowSurrogates': loneLowSurrogates,
			'bmp': bmp,
			'astral': astral
		};
	};

	var optimizeSurrogateMappings = function(surrogateMappings) {
		var result = [];
		var tmpLow = [];
		var addLow = false;
		var mapping;
		var nextMapping;
		var highSurrogates;
		var lowSurrogates;
		var nextHighSurrogates;
		var nextLowSurrogates;
		var index = -1;
		var length = surrogateMappings.length;
		while (++index < length) {
			mapping = surrogateMappings[index];
			nextMapping = surrogateMappings[index + 1];
			if (!nextMapping) {
				result.push(mapping);
				continue;
			}
			highSurrogates = mapping[0];
			lowSurrogates = mapping[1];
			nextHighSurrogates = nextMapping[0];
			nextLowSurrogates = nextMapping[1];

			// Check for identical high surrogate ranges.
			tmpLow = lowSurrogates;
			while (
				nextHighSurrogates &&
				highSurrogates[0] == nextHighSurrogates[0] &&
				highSurrogates[1] == nextHighSurrogates[1]
			) {
				// Merge with the next item.
				if (dataIsSingleton(nextLowSurrogates)) {
					tmpLow = dataAdd(tmpLow, nextLowSurrogates[0]);
				} else {
					tmpLow = dataAddRange(
						tmpLow,
						nextLowSurrogates[0],
						nextLowSurrogates[1] - 1
					);
				}
				++index;
				mapping = surrogateMappings[index];
				highSurrogates = mapping[0];
				lowSurrogates = mapping[1];
				nextMapping = surrogateMappings[index + 1];
				nextHighSurrogates = nextMapping && nextMapping[0];
				nextLowSurrogates = nextMapping && nextMapping[1];
				addLow = true;
			}
			result.push([
				highSurrogates,
				addLow ? tmpLow : lowSurrogates
			]);
			addLow = false;
		}
		return optimizeByLowSurrogates(result);
	};

	var optimizeByLowSurrogates = function(surrogateMappings) {
		if (surrogateMappings.length == 1) {
			return surrogateMappings;
		}
		var index = -1;
		var innerIndex = -1;
		while (++index < surrogateMappings.length) {
			var mapping = surrogateMappings[index];
			var lowSurrogates = mapping[1];
			var lowSurrogateStart = lowSurrogates[0];
			var lowSurrogateEnd = lowSurrogates[1];
			innerIndex = index; // Note: the loop starts at the next index.
			while (++innerIndex < surrogateMappings.length) {
				var otherMapping = surrogateMappings[innerIndex];
				var otherLowSurrogates = otherMapping[1];
				var otherLowSurrogateStart = otherLowSurrogates[0];
				var otherLowSurrogateEnd = otherLowSurrogates[1];
				if (
					lowSurrogateStart == otherLowSurrogateStart &&
					lowSurrogateEnd == otherLowSurrogateEnd
				) {
					// Add the code points in the other item to this one.
					if (dataIsSingleton(otherMapping[0])) {
						mapping[0] = dataAdd(mapping[0], otherMapping[0][0]);
					} else {
						mapping[0] = dataAddRange(
							mapping[0],
							otherMapping[0][0],
							otherMapping[0][1] - 1
						);
					}
					// Remove the other, now redundant, item.
					surrogateMappings.splice(innerIndex, 1);
					--innerIndex;
				}
			}
		}
		return surrogateMappings;
	};

	var surrogateSet = function(data) {
		// Exit early if `data` is an empty set.
		if (!data.length) {
			return [];
		}

		// Iterate over the data per `(start, end)` pair.
		var index = 0;
		var start;
		var end;
		var startHigh;
		var startLow;
		var endHigh;
		var endLow;
		var surrogateMappings = [];
		var length = data.length;
		while (index < length) {
			start = data[index];
			end = data[index + 1] - 1;

			startHigh = highSurrogate(start);
			startLow = lowSurrogate(start);
			endHigh = highSurrogate(end);
			endLow = lowSurrogate(end);

			var startsWithLowestLowSurrogate = startLow == LOW_SURROGATE_MIN;
			var endsWithHighestLowSurrogate = endLow == LOW_SURROGATE_MAX;
			var complete = false;

			// Append the previous high-surrogate-to-low-surrogate mappings.
			// Step 1: `(startHigh, startLow)` to `(startHigh, LOW_SURROGATE_MAX)`.
			if (
				startHigh == endHigh ||
				startsWithLowestLowSurrogate && endsWithHighestLowSurrogate
			) {
				surrogateMappings.push([
					[startHigh, endHigh + 1],
					[startLow, endLow + 1]
				]);
				complete = true;
			} else {
				surrogateMappings.push([
					[startHigh, startHigh + 1],
					[startLow, LOW_SURROGATE_MAX + 1]
				]);
			}

			// Step 2: `(startHigh + 1, LOW_SURROGATE_MIN)` to
			// `(endHigh - 1, LOW_SURROGATE_MAX)`.
			if (!complete && startHigh + 1 < endHigh) {
				if (endsWithHighestLowSurrogate) {
					// Combine step 2 and step 3.
					surrogateMappings.push([
						[startHigh + 1, endHigh + 1],
						[LOW_SURROGATE_MIN, endLow + 1]
					]);
					complete = true;
				} else {
					surrogateMappings.push([
						[startHigh + 1, endHigh],
						[LOW_SURROGATE_MIN, LOW_SURROGATE_MAX + 1]
					]);
				}
			}

			// Step 3. `(endHigh, LOW_SURROGATE_MIN)` to `(endHigh, endLow)`.
			if (!complete) {
				surrogateMappings.push([
					[endHigh, endHigh + 1],
					[LOW_SURROGATE_MIN, endLow + 1]
				]);
			}

			index += 2;
		}

		// The format of `surrogateMappings` is as follows:
		//
		//     [ surrogateMapping1, surrogateMapping2 ]
		//
		// i.e.:
		//
		//     [
		//       [ highSurrogates1, lowSurrogates1 ],
		//       [ highSurrogates2, lowSurrogates2 ]
		//     ]
		return optimizeSurrogateMappings(surrogateMappings);
	};

	var createSurrogateCharacterClasses = function(surrogateMappings) {
		var result = [];
		forEach(surrogateMappings, function(surrogateMapping) {
			var highSurrogates = surrogateMapping[0];
			var lowSurrogates = surrogateMapping[1];
			result.push(
				createBMPCharacterClasses(highSurrogates) +
				createBMPCharacterClasses(lowSurrogates)
			);
		});
		return result.join('|');
	};

	var createCharacterClassesFromData = function(data, bmpOnly, hasUnicodeFlag) {
		if (hasUnicodeFlag) {
			return createUnicodeCharacterClasses(data);
		}
		var result = [];

		var parts = splitAtBMP(data);
		var loneHighSurrogates = parts.loneHighSurrogates;
		var loneLowSurrogates = parts.loneLowSurrogates;
		var bmp = parts.bmp;
		var astral = parts.astral;
		var hasLoneHighSurrogates = !dataIsEmpty(loneHighSurrogates);
		var hasLoneLowSurrogates = !dataIsEmpty(loneLowSurrogates);

		var surrogateMappings = surrogateSet(astral);

		if (bmpOnly) {
			bmp = dataAddData(bmp, loneHighSurrogates);
			hasLoneHighSurrogates = false;
			bmp = dataAddData(bmp, loneLowSurrogates);
			hasLoneLowSurrogates = false;
		}

		if (!dataIsEmpty(bmp)) {
			// The data set contains BMP code points that are not high surrogates
			// needed for astral code points in the set.
			result.push(createBMPCharacterClasses(bmp));
		}
		if (surrogateMappings.length) {
			// The data set contains astral code points; append character classes
			// based on their surrogate pairs.
			result.push(createSurrogateCharacterClasses(surrogateMappings));
		}
		// https://gist.github.com/mathiasbynens/bbe7f870208abcfec860
		if (hasLoneHighSurrogates) {
			result.push(
				createBMPCharacterClasses(loneHighSurrogates) +
				// Make sure the high surrogates aren’t part of a surrogate pair.
				'(?![\\uDC00-\\uDFFF])'
			);
		}
		if (hasLoneLowSurrogates) {
			result.push(
				// It is not possible to accurately assert the low surrogates aren’t
				// part of a surrogate pair, since JavaScript regular expressions do
				// not support lookbehind.
				'(?:[^\\uD800-\\uDBFF]|^)' +
				createBMPCharacterClasses(loneLowSurrogates)
			);
		}
		return result.join('|');
	};

	/*--------------------------------------------------------------------------*/

	// `regenerate` can be used as a constructor (and new methods can be added to
	// its prototype) but also as a regular function, the latter of which is the
	// documented and most common usage. For that reason, it’s not capitalized.
	var regenerate = function(value) {
		if (arguments.length > 1) {
			value = slice.call(arguments);
		}
		if (this instanceof regenerate) {
			this.data = [];
			return value ? this.add(value) : this;
		}
		return (new regenerate).add(value);
	};

	regenerate.version = '1.3.3';

	var proto = regenerate.prototype;
	extend(proto, {
		'add': function(value) {
			var $this = this;
			if (value == null) {
				return $this;
			}
			if (value instanceof regenerate) {
				// Allow passing other Regenerate instances.
				$this.data = dataAddData($this.data, value.data);
				return $this;
			}
			if (arguments.length > 1) {
				value = slice.call(arguments);
			}
			if (isArray(value)) {
				forEach(value, function(item) {
					$this.add(item);
				});
				return $this;
			}
			$this.data = dataAdd(
				$this.data,
				isNumber(value) ? value : symbolToCodePoint(value)
			);
			return $this;
		},
		'remove': function(value) {
			var $this = this;
			if (value == null) {
				return $this;
			}
			if (value instanceof regenerate) {
				// Allow passing other Regenerate instances.
				$this.data = dataRemoveData($this.data, value.data);
				return $this;
			}
			if (arguments.length > 1) {
				value = slice.call(arguments);
			}
			if (isArray(value)) {
				forEach(value, function(item) {
					$this.remove(item);
				});
				return $this;
			}
			$this.data = dataRemove(
				$this.data,
				isNumber(value) ? value : symbolToCodePoint(value)
			);
			return $this;
		},
		'addRange': function(start, end) {
			var $this = this;
			$this.data = dataAddRange($this.data,
				isNumber(start) ? start : symbolToCodePoint(start),
				isNumber(end) ? end : symbolToCodePoint(end)
			);
			return $this;
		},
		'removeRange': function(start, end) {
			var $this = this;
			var startCodePoint = isNumber(start) ? start : symbolToCodePoint(start);
			var endCodePoint = isNumber(end) ? end : symbolToCodePoint(end);
			$this.data = dataRemoveRange(
				$this.data,
				startCodePoint,
				endCodePoint
			);
			return $this;
		},
		'intersection': function(argument) {
			var $this = this;
			// Allow passing other Regenerate instances.
			// TODO: Optimize this by writing and using `dataIntersectionData()`.
			var array = argument instanceof regenerate ?
				dataToArray(argument.data) :
				argument;
			$this.data = dataIntersection($this.data, array);
			return $this;
		},
		'contains': function(codePoint) {
			return dataContains(
				this.data,
				isNumber(codePoint) ? codePoint : symbolToCodePoint(codePoint)
			);
		},
		'clone': function() {
			var set = new regenerate;
			set.data = this.data.slice(0);
			return set;
		},
		'toString': function(options) {
			var result = createCharacterClassesFromData(
				this.data,
				options ? options.bmpOnly : false,
				options ? options.hasUnicodeFlag : false
			);
			if (!result) {
				// For an empty set, return something that can be inserted `/here/` to
				// form a valid regular expression. Avoid `(?:)` since that matches the
				// empty string.
				return '[]';
			}
			// Use `\0` instead of `\x00` where possible.
			return result.replace(regexNull, '\\0$1');
		},
		'toRegExp': function(flags) {
			var pattern = this.toString(
				flags && flags.indexOf('u') != -1 ?
					{ 'hasUnicodeFlag': true } :
					null
			);
			return RegExp(pattern, flags || '');
		},
		'valueOf': function() { // Note: `valueOf` is aliased as `toArray`.
			return dataToArray(this.data);
		}
	});

	proto.toArray = proto.valueOf;

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof undefined == 'function' &&
		typeof undefined.amd == 'object' &&
		undefined.amd
	) {
		undefined(function() {
			return regenerate;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = regenerate;
		} else { // in Narwhal or RingoJS v0.7.0-
			freeExports.regenerate = regenerate;
		}
	} else { // in Rhino or a web browser
		root.regenerate = regenerate;
	}

}(commonjsGlobal));
});

var unicodeCanonicalPropertyNamesEcmascript = new Set([
	// Non-binary properties:
	'General_Category',
	'Script',
	'Script_Extensions',
	// Binary properties:
	'Alphabetic',
	'Any',
	'ASCII',
	'ASCII_Hex_Digit',
	'Assigned',
	'Bidi_Control',
	'Bidi_Mirrored',
	'Case_Ignorable',
	'Cased',
	'Changes_When_Casefolded',
	'Changes_When_Casemapped',
	'Changes_When_Lowercased',
	'Changes_When_NFKC_Casefolded',
	'Changes_When_Titlecased',
	'Changes_When_Uppercased',
	'Dash',
	'Default_Ignorable_Code_Point',
	'Deprecated',
	'Diacritic',
	'Emoji',
	'Emoji_Component',
	'Emoji_Modifier',
	'Emoji_Modifier_Base',
	'Emoji_Presentation',
	'Extender',
	'Grapheme_Base',
	'Grapheme_Extend',
	'Hex_Digit',
	'ID_Continue',
	'ID_Start',
	'Ideographic',
	'IDS_Binary_Operator',
	'IDS_Trinary_Operator',
	'Join_Control',
	'Logical_Order_Exception',
	'Lowercase',
	'Math',
	'Noncharacter_Code_Point',
	'Pattern_Syntax',
	'Pattern_White_Space',
	'Quotation_Mark',
	'Radical',
	'Regional_Indicator',
	'Sentence_Terminal',
	'Soft_Dotted',
	'Terminal_Punctuation',
	'Unified_Ideograph',
	'Uppercase',
	'Variation_Selector',
	'White_Space',
	'XID_Continue',
	'XID_Start'
]);

// Generated using `npm run build`. Do not edit!
var unicodePropertyAliasesEcmascript = new Map([
	['scx', 'Script_Extensions'],
	['sc', 'Script'],
	['gc', 'General_Category'],
	['AHex', 'ASCII_Hex_Digit'],
	['Alpha', 'Alphabetic'],
	['Bidi_C', 'Bidi_Control'],
	['Bidi_M', 'Bidi_Mirrored'],
	['Cased', 'Cased'],
	['CI', 'Case_Ignorable'],
	['CWCF', 'Changes_When_Casefolded'],
	['CWCM', 'Changes_When_Casemapped'],
	['CWKCF', 'Changes_When_NFKC_Casefolded'],
	['CWL', 'Changes_When_Lowercased'],
	['CWT', 'Changes_When_Titlecased'],
	['CWU', 'Changes_When_Uppercased'],
	['Dash', 'Dash'],
	['Dep', 'Deprecated'],
	['DI', 'Default_Ignorable_Code_Point'],
	['Dia', 'Diacritic'],
	['Ext', 'Extender'],
	['Gr_Base', 'Grapheme_Base'],
	['Gr_Ext', 'Grapheme_Extend'],
	['Hex', 'Hex_Digit'],
	['IDC', 'ID_Continue'],
	['Ideo', 'Ideographic'],
	['IDS', 'ID_Start'],
	['IDSB', 'IDS_Binary_Operator'],
	['IDST', 'IDS_Trinary_Operator'],
	['Join_C', 'Join_Control'],
	['LOE', 'Logical_Order_Exception'],
	['Lower', 'Lowercase'],
	['Math', 'Math'],
	['NChar', 'Noncharacter_Code_Point'],
	['Pat_Syn', 'Pattern_Syntax'],
	['Pat_WS', 'Pattern_White_Space'],
	['QMark', 'Quotation_Mark'],
	['Radical', 'Radical'],
	['RI', 'Regional_Indicator'],
	['SD', 'Soft_Dotted'],
	['STerm', 'Sentence_Terminal'],
	['Term', 'Terminal_Punctuation'],
	['UIdeo', 'Unified_Ideograph'],
	['Upper', 'Uppercase'],
	['VS', 'Variation_Selector'],
	['WSpace', 'White_Space'],
	['space', 'White_Space'],
	['XIDC', 'XID_Continue'],
	['XIDS', 'XID_Start']
]);

var matchProperty = function(property) {
	if (unicodeCanonicalPropertyNamesEcmascript.has(property)) {
		return property;
	}
	if (unicodePropertyAliasesEcmascript.has(property)) {
		return unicodePropertyAliasesEcmascript.get(property);
	}
	throw new Error(`Unknown property: ${ property }`);
};

var unicodeMatchPropertyEcmascript = matchProperty;

var mappings = new Map([
	['General_Category', new Map([
		['C', 'Other'],
		['Cc', 'Control'],
		['cntrl', 'Control'],
		['Cf', 'Format'],
		['Cn', 'Unassigned'],
		['Co', 'Private_Use'],
		['Cs', 'Surrogate'],
		['L', 'Letter'],
		['LC', 'Cased_Letter'],
		['Ll', 'Lowercase_Letter'],
		['Lm', 'Modifier_Letter'],
		['Lo', 'Other_Letter'],
		['Lt', 'Titlecase_Letter'],
		['Lu', 'Uppercase_Letter'],
		['M', 'Mark'],
		['Combining_Mark', 'Mark'],
		['Mc', 'Spacing_Mark'],
		['Me', 'Enclosing_Mark'],
		['Mn', 'Nonspacing_Mark'],
		['N', 'Number'],
		['Nd', 'Decimal_Number'],
		['digit', 'Decimal_Number'],
		['Nl', 'Letter_Number'],
		['No', 'Other_Number'],
		['P', 'Punctuation'],
		['punct', 'Punctuation'],
		['Pc', 'Connector_Punctuation'],
		['Pd', 'Dash_Punctuation'],
		['Pe', 'Close_Punctuation'],
		['Pf', 'Final_Punctuation'],
		['Pi', 'Initial_Punctuation'],
		['Po', 'Other_Punctuation'],
		['Ps', 'Open_Punctuation'],
		['S', 'Symbol'],
		['Sc', 'Currency_Symbol'],
		['Sk', 'Modifier_Symbol'],
		['Sm', 'Math_Symbol'],
		['So', 'Other_Symbol'],
		['Z', 'Separator'],
		['Zl', 'Line_Separator'],
		['Zp', 'Paragraph_Separator'],
		['Zs', 'Space_Separator'],
		['Other', 'Other'],
		['Control', 'Control'],
		['Format', 'Format'],
		['Unassigned', 'Unassigned'],
		['Private_Use', 'Private_Use'],
		['Surrogate', 'Surrogate'],
		['Letter', 'Letter'],
		['Cased_Letter', 'Cased_Letter'],
		['Lowercase_Letter', 'Lowercase_Letter'],
		['Modifier_Letter', 'Modifier_Letter'],
		['Other_Letter', 'Other_Letter'],
		['Titlecase_Letter', 'Titlecase_Letter'],
		['Uppercase_Letter', 'Uppercase_Letter'],
		['Mark', 'Mark'],
		['Spacing_Mark', 'Spacing_Mark'],
		['Enclosing_Mark', 'Enclosing_Mark'],
		['Nonspacing_Mark', 'Nonspacing_Mark'],
		['Number', 'Number'],
		['Decimal_Number', 'Decimal_Number'],
		['Letter_Number', 'Letter_Number'],
		['Other_Number', 'Other_Number'],
		['Punctuation', 'Punctuation'],
		['Connector_Punctuation', 'Connector_Punctuation'],
		['Dash_Punctuation', 'Dash_Punctuation'],
		['Close_Punctuation', 'Close_Punctuation'],
		['Final_Punctuation', 'Final_Punctuation'],
		['Initial_Punctuation', 'Initial_Punctuation'],
		['Other_Punctuation', 'Other_Punctuation'],
		['Open_Punctuation', 'Open_Punctuation'],
		['Symbol', 'Symbol'],
		['Currency_Symbol', 'Currency_Symbol'],
		['Modifier_Symbol', 'Modifier_Symbol'],
		['Math_Symbol', 'Math_Symbol'],
		['Other_Symbol', 'Other_Symbol'],
		['Separator', 'Separator'],
		['Line_Separator', 'Line_Separator'],
		['Paragraph_Separator', 'Paragraph_Separator'],
		['Space_Separator', 'Space_Separator']
	])],
	['Script', new Map([
		['Adlm', 'Adlam'],
		['Aghb', 'Caucasian_Albanian'],
		['Ahom', 'Ahom'],
		['Arab', 'Arabic'],
		['Armi', 'Imperial_Aramaic'],
		['Armn', 'Armenian'],
		['Avst', 'Avestan'],
		['Bali', 'Balinese'],
		['Bamu', 'Bamum'],
		['Bass', 'Bassa_Vah'],
		['Batk', 'Batak'],
		['Beng', 'Bengali'],
		['Bhks', 'Bhaiksuki'],
		['Bopo', 'Bopomofo'],
		['Brah', 'Brahmi'],
		['Brai', 'Braille'],
		['Bugi', 'Buginese'],
		['Buhd', 'Buhid'],
		['Cakm', 'Chakma'],
		['Cans', 'Canadian_Aboriginal'],
		['Cari', 'Carian'],
		['Cham', 'Cham'],
		['Cher', 'Cherokee'],
		['Copt', 'Coptic'],
		['Qaac', 'Coptic'],
		['Cprt', 'Cypriot'],
		['Cyrl', 'Cyrillic'],
		['Deva', 'Devanagari'],
		['Dsrt', 'Deseret'],
		['Dupl', 'Duployan'],
		['Egyp', 'Egyptian_Hieroglyphs'],
		['Elba', 'Elbasan'],
		['Ethi', 'Ethiopic'],
		['Geor', 'Georgian'],
		['Glag', 'Glagolitic'],
		['Gonm', 'Masaram_Gondi'],
		['Goth', 'Gothic'],
		['Gran', 'Grantha'],
		['Grek', 'Greek'],
		['Gujr', 'Gujarati'],
		['Guru', 'Gurmukhi'],
		['Hang', 'Hangul'],
		['Hani', 'Han'],
		['Hano', 'Hanunoo'],
		['Hatr', 'Hatran'],
		['Hebr', 'Hebrew'],
		['Hira', 'Hiragana'],
		['Hluw', 'Anatolian_Hieroglyphs'],
		['Hmng', 'Pahawh_Hmong'],
		['Hrkt', 'Katakana_Or_Hiragana'],
		['Hung', 'Old_Hungarian'],
		['Ital', 'Old_Italic'],
		['Java', 'Javanese'],
		['Kali', 'Kayah_Li'],
		['Kana', 'Katakana'],
		['Khar', 'Kharoshthi'],
		['Khmr', 'Khmer'],
		['Khoj', 'Khojki'],
		['Knda', 'Kannada'],
		['Kthi', 'Kaithi'],
		['Lana', 'Tai_Tham'],
		['Laoo', 'Lao'],
		['Latn', 'Latin'],
		['Lepc', 'Lepcha'],
		['Limb', 'Limbu'],
		['Lina', 'Linear_A'],
		['Linb', 'Linear_B'],
		['Lisu', 'Lisu'],
		['Lyci', 'Lycian'],
		['Lydi', 'Lydian'],
		['Mahj', 'Mahajani'],
		['Mand', 'Mandaic'],
		['Mani', 'Manichaean'],
		['Marc', 'Marchen'],
		['Mend', 'Mende_Kikakui'],
		['Merc', 'Meroitic_Cursive'],
		['Mero', 'Meroitic_Hieroglyphs'],
		['Mlym', 'Malayalam'],
		['Modi', 'Modi'],
		['Mong', 'Mongolian'],
		['Mroo', 'Mro'],
		['Mtei', 'Meetei_Mayek'],
		['Mult', 'Multani'],
		['Mymr', 'Myanmar'],
		['Narb', 'Old_North_Arabian'],
		['Nbat', 'Nabataean'],
		['Newa', 'Newa'],
		['Nkoo', 'Nko'],
		['Nshu', 'Nushu'],
		['Ogam', 'Ogham'],
		['Olck', 'Ol_Chiki'],
		['Orkh', 'Old_Turkic'],
		['Orya', 'Oriya'],
		['Osge', 'Osage'],
		['Osma', 'Osmanya'],
		['Palm', 'Palmyrene'],
		['Pauc', 'Pau_Cin_Hau'],
		['Perm', 'Old_Permic'],
		['Phag', 'Phags_Pa'],
		['Phli', 'Inscriptional_Pahlavi'],
		['Phlp', 'Psalter_Pahlavi'],
		['Phnx', 'Phoenician'],
		['Plrd', 'Miao'],
		['Prti', 'Inscriptional_Parthian'],
		['Rjng', 'Rejang'],
		['Runr', 'Runic'],
		['Samr', 'Samaritan'],
		['Sarb', 'Old_South_Arabian'],
		['Saur', 'Saurashtra'],
		['Sgnw', 'SignWriting'],
		['Shaw', 'Shavian'],
		['Shrd', 'Sharada'],
		['Sidd', 'Siddham'],
		['Sind', 'Khudawadi'],
		['Sinh', 'Sinhala'],
		['Sora', 'Sora_Sompeng'],
		['Soyo', 'Soyombo'],
		['Sund', 'Sundanese'],
		['Sylo', 'Syloti_Nagri'],
		['Syrc', 'Syriac'],
		['Tagb', 'Tagbanwa'],
		['Takr', 'Takri'],
		['Tale', 'Tai_Le'],
		['Talu', 'New_Tai_Lue'],
		['Taml', 'Tamil'],
		['Tang', 'Tangut'],
		['Tavt', 'Tai_Viet'],
		['Telu', 'Telugu'],
		['Tfng', 'Tifinagh'],
		['Tglg', 'Tagalog'],
		['Thaa', 'Thaana'],
		['Thai', 'Thai'],
		['Tibt', 'Tibetan'],
		['Tirh', 'Tirhuta'],
		['Ugar', 'Ugaritic'],
		['Vaii', 'Vai'],
		['Wara', 'Warang_Citi'],
		['Xpeo', 'Old_Persian'],
		['Xsux', 'Cuneiform'],
		['Yiii', 'Yi'],
		['Zanb', 'Zanabazar_Square'],
		['Zinh', 'Inherited'],
		['Qaai', 'Inherited'],
		['Zyyy', 'Common'],
		['Zzzz', 'Unknown'],
		['Adlam', 'Adlam'],
		['Caucasian_Albanian', 'Caucasian_Albanian'],
		['Arabic', 'Arabic'],
		['Imperial_Aramaic', 'Imperial_Aramaic'],
		['Armenian', 'Armenian'],
		['Avestan', 'Avestan'],
		['Balinese', 'Balinese'],
		['Bamum', 'Bamum'],
		['Bassa_Vah', 'Bassa_Vah'],
		['Batak', 'Batak'],
		['Bengali', 'Bengali'],
		['Bhaiksuki', 'Bhaiksuki'],
		['Bopomofo', 'Bopomofo'],
		['Brahmi', 'Brahmi'],
		['Braille', 'Braille'],
		['Buginese', 'Buginese'],
		['Buhid', 'Buhid'],
		['Chakma', 'Chakma'],
		['Canadian_Aboriginal', 'Canadian_Aboriginal'],
		['Carian', 'Carian'],
		['Cherokee', 'Cherokee'],
		['Coptic', 'Coptic'],
		['Cypriot', 'Cypriot'],
		['Cyrillic', 'Cyrillic'],
		['Devanagari', 'Devanagari'],
		['Deseret', 'Deseret'],
		['Duployan', 'Duployan'],
		['Egyptian_Hieroglyphs', 'Egyptian_Hieroglyphs'],
		['Elbasan', 'Elbasan'],
		['Ethiopic', 'Ethiopic'],
		['Georgian', 'Georgian'],
		['Glagolitic', 'Glagolitic'],
		['Masaram_Gondi', 'Masaram_Gondi'],
		['Gothic', 'Gothic'],
		['Grantha', 'Grantha'],
		['Greek', 'Greek'],
		['Gujarati', 'Gujarati'],
		['Gurmukhi', 'Gurmukhi'],
		['Hangul', 'Hangul'],
		['Han', 'Han'],
		['Hanunoo', 'Hanunoo'],
		['Hatran', 'Hatran'],
		['Hebrew', 'Hebrew'],
		['Hiragana', 'Hiragana'],
		['Anatolian_Hieroglyphs', 'Anatolian_Hieroglyphs'],
		['Pahawh_Hmong', 'Pahawh_Hmong'],
		['Katakana_Or_Hiragana', 'Katakana_Or_Hiragana'],
		['Old_Hungarian', 'Old_Hungarian'],
		['Old_Italic', 'Old_Italic'],
		['Javanese', 'Javanese'],
		['Kayah_Li', 'Kayah_Li'],
		['Katakana', 'Katakana'],
		['Kharoshthi', 'Kharoshthi'],
		['Khmer', 'Khmer'],
		['Khojki', 'Khojki'],
		['Kannada', 'Kannada'],
		['Kaithi', 'Kaithi'],
		['Tai_Tham', 'Tai_Tham'],
		['Lao', 'Lao'],
		['Latin', 'Latin'],
		['Lepcha', 'Lepcha'],
		['Limbu', 'Limbu'],
		['Linear_A', 'Linear_A'],
		['Linear_B', 'Linear_B'],
		['Lycian', 'Lycian'],
		['Lydian', 'Lydian'],
		['Mahajani', 'Mahajani'],
		['Mandaic', 'Mandaic'],
		['Manichaean', 'Manichaean'],
		['Marchen', 'Marchen'],
		['Mende_Kikakui', 'Mende_Kikakui'],
		['Meroitic_Cursive', 'Meroitic_Cursive'],
		['Meroitic_Hieroglyphs', 'Meroitic_Hieroglyphs'],
		['Malayalam', 'Malayalam'],
		['Mongolian', 'Mongolian'],
		['Mro', 'Mro'],
		['Meetei_Mayek', 'Meetei_Mayek'],
		['Multani', 'Multani'],
		['Myanmar', 'Myanmar'],
		['Old_North_Arabian', 'Old_North_Arabian'],
		['Nabataean', 'Nabataean'],
		['Nko', 'Nko'],
		['Nushu', 'Nushu'],
		['Ogham', 'Ogham'],
		['Ol_Chiki', 'Ol_Chiki'],
		['Old_Turkic', 'Old_Turkic'],
		['Oriya', 'Oriya'],
		['Osage', 'Osage'],
		['Osmanya', 'Osmanya'],
		['Palmyrene', 'Palmyrene'],
		['Pau_Cin_Hau', 'Pau_Cin_Hau'],
		['Old_Permic', 'Old_Permic'],
		['Phags_Pa', 'Phags_Pa'],
		['Inscriptional_Pahlavi', 'Inscriptional_Pahlavi'],
		['Psalter_Pahlavi', 'Psalter_Pahlavi'],
		['Phoenician', 'Phoenician'],
		['Miao', 'Miao'],
		['Inscriptional_Parthian', 'Inscriptional_Parthian'],
		['Rejang', 'Rejang'],
		['Runic', 'Runic'],
		['Samaritan', 'Samaritan'],
		['Old_South_Arabian', 'Old_South_Arabian'],
		['Saurashtra', 'Saurashtra'],
		['SignWriting', 'SignWriting'],
		['Shavian', 'Shavian'],
		['Sharada', 'Sharada'],
		['Siddham', 'Siddham'],
		['Khudawadi', 'Khudawadi'],
		['Sinhala', 'Sinhala'],
		['Sora_Sompeng', 'Sora_Sompeng'],
		['Soyombo', 'Soyombo'],
		['Sundanese', 'Sundanese'],
		['Syloti_Nagri', 'Syloti_Nagri'],
		['Syriac', 'Syriac'],
		['Tagbanwa', 'Tagbanwa'],
		['Takri', 'Takri'],
		['Tai_Le', 'Tai_Le'],
		['New_Tai_Lue', 'New_Tai_Lue'],
		['Tamil', 'Tamil'],
		['Tangut', 'Tangut'],
		['Tai_Viet', 'Tai_Viet'],
		['Telugu', 'Telugu'],
		['Tifinagh', 'Tifinagh'],
		['Tagalog', 'Tagalog'],
		['Thaana', 'Thaana'],
		['Tibetan', 'Tibetan'],
		['Tirhuta', 'Tirhuta'],
		['Ugaritic', 'Ugaritic'],
		['Vai', 'Vai'],
		['Warang_Citi', 'Warang_Citi'],
		['Old_Persian', 'Old_Persian'],
		['Cuneiform', 'Cuneiform'],
		['Yi', 'Yi'],
		['Zanabazar_Square', 'Zanabazar_Square'],
		['Inherited', 'Inherited'],
		['Common', 'Common'],
		['Unknown', 'Unknown']
	])],
	['Script_Extensions', new Map([
		['Adlm', 'Adlam'],
		['Aghb', 'Caucasian_Albanian'],
		['Ahom', 'Ahom'],
		['Arab', 'Arabic'],
		['Armi', 'Imperial_Aramaic'],
		['Armn', 'Armenian'],
		['Avst', 'Avestan'],
		['Bali', 'Balinese'],
		['Bamu', 'Bamum'],
		['Bass', 'Bassa_Vah'],
		['Batk', 'Batak'],
		['Beng', 'Bengali'],
		['Bhks', 'Bhaiksuki'],
		['Bopo', 'Bopomofo'],
		['Brah', 'Brahmi'],
		['Brai', 'Braille'],
		['Bugi', 'Buginese'],
		['Buhd', 'Buhid'],
		['Cakm', 'Chakma'],
		['Cans', 'Canadian_Aboriginal'],
		['Cari', 'Carian'],
		['Cham', 'Cham'],
		['Cher', 'Cherokee'],
		['Copt', 'Coptic'],
		['Qaac', 'Coptic'],
		['Cprt', 'Cypriot'],
		['Cyrl', 'Cyrillic'],
		['Deva', 'Devanagari'],
		['Dsrt', 'Deseret'],
		['Dupl', 'Duployan'],
		['Egyp', 'Egyptian_Hieroglyphs'],
		['Elba', 'Elbasan'],
		['Ethi', 'Ethiopic'],
		['Geor', 'Georgian'],
		['Glag', 'Glagolitic'],
		['Gonm', 'Masaram_Gondi'],
		['Goth', 'Gothic'],
		['Gran', 'Grantha'],
		['Grek', 'Greek'],
		['Gujr', 'Gujarati'],
		['Guru', 'Gurmukhi'],
		['Hang', 'Hangul'],
		['Hani', 'Han'],
		['Hano', 'Hanunoo'],
		['Hatr', 'Hatran'],
		['Hebr', 'Hebrew'],
		['Hira', 'Hiragana'],
		['Hluw', 'Anatolian_Hieroglyphs'],
		['Hmng', 'Pahawh_Hmong'],
		['Hrkt', 'Katakana_Or_Hiragana'],
		['Hung', 'Old_Hungarian'],
		['Ital', 'Old_Italic'],
		['Java', 'Javanese'],
		['Kali', 'Kayah_Li'],
		['Kana', 'Katakana'],
		['Khar', 'Kharoshthi'],
		['Khmr', 'Khmer'],
		['Khoj', 'Khojki'],
		['Knda', 'Kannada'],
		['Kthi', 'Kaithi'],
		['Lana', 'Tai_Tham'],
		['Laoo', 'Lao'],
		['Latn', 'Latin'],
		['Lepc', 'Lepcha'],
		['Limb', 'Limbu'],
		['Lina', 'Linear_A'],
		['Linb', 'Linear_B'],
		['Lisu', 'Lisu'],
		['Lyci', 'Lycian'],
		['Lydi', 'Lydian'],
		['Mahj', 'Mahajani'],
		['Mand', 'Mandaic'],
		['Mani', 'Manichaean'],
		['Marc', 'Marchen'],
		['Mend', 'Mende_Kikakui'],
		['Merc', 'Meroitic_Cursive'],
		['Mero', 'Meroitic_Hieroglyphs'],
		['Mlym', 'Malayalam'],
		['Modi', 'Modi'],
		['Mong', 'Mongolian'],
		['Mroo', 'Mro'],
		['Mtei', 'Meetei_Mayek'],
		['Mult', 'Multani'],
		['Mymr', 'Myanmar'],
		['Narb', 'Old_North_Arabian'],
		['Nbat', 'Nabataean'],
		['Newa', 'Newa'],
		['Nkoo', 'Nko'],
		['Nshu', 'Nushu'],
		['Ogam', 'Ogham'],
		['Olck', 'Ol_Chiki'],
		['Orkh', 'Old_Turkic'],
		['Orya', 'Oriya'],
		['Osge', 'Osage'],
		['Osma', 'Osmanya'],
		['Palm', 'Palmyrene'],
		['Pauc', 'Pau_Cin_Hau'],
		['Perm', 'Old_Permic'],
		['Phag', 'Phags_Pa'],
		['Phli', 'Inscriptional_Pahlavi'],
		['Phlp', 'Psalter_Pahlavi'],
		['Phnx', 'Phoenician'],
		['Plrd', 'Miao'],
		['Prti', 'Inscriptional_Parthian'],
		['Rjng', 'Rejang'],
		['Runr', 'Runic'],
		['Samr', 'Samaritan'],
		['Sarb', 'Old_South_Arabian'],
		['Saur', 'Saurashtra'],
		['Sgnw', 'SignWriting'],
		['Shaw', 'Shavian'],
		['Shrd', 'Sharada'],
		['Sidd', 'Siddham'],
		['Sind', 'Khudawadi'],
		['Sinh', 'Sinhala'],
		['Sora', 'Sora_Sompeng'],
		['Soyo', 'Soyombo'],
		['Sund', 'Sundanese'],
		['Sylo', 'Syloti_Nagri'],
		['Syrc', 'Syriac'],
		['Tagb', 'Tagbanwa'],
		['Takr', 'Takri'],
		['Tale', 'Tai_Le'],
		['Talu', 'New_Tai_Lue'],
		['Taml', 'Tamil'],
		['Tang', 'Tangut'],
		['Tavt', 'Tai_Viet'],
		['Telu', 'Telugu'],
		['Tfng', 'Tifinagh'],
		['Tglg', 'Tagalog'],
		['Thaa', 'Thaana'],
		['Thai', 'Thai'],
		['Tibt', 'Tibetan'],
		['Tirh', 'Tirhuta'],
		['Ugar', 'Ugaritic'],
		['Vaii', 'Vai'],
		['Wara', 'Warang_Citi'],
		['Xpeo', 'Old_Persian'],
		['Xsux', 'Cuneiform'],
		['Yiii', 'Yi'],
		['Zanb', 'Zanabazar_Square'],
		['Zinh', 'Inherited'],
		['Qaai', 'Inherited'],
		['Zyyy', 'Common'],
		['Zzzz', 'Unknown'],
		['Adlam', 'Adlam'],
		['Caucasian_Albanian', 'Caucasian_Albanian'],
		['Arabic', 'Arabic'],
		['Imperial_Aramaic', 'Imperial_Aramaic'],
		['Armenian', 'Armenian'],
		['Avestan', 'Avestan'],
		['Balinese', 'Balinese'],
		['Bamum', 'Bamum'],
		['Bassa_Vah', 'Bassa_Vah'],
		['Batak', 'Batak'],
		['Bengali', 'Bengali'],
		['Bhaiksuki', 'Bhaiksuki'],
		['Bopomofo', 'Bopomofo'],
		['Brahmi', 'Brahmi'],
		['Braille', 'Braille'],
		['Buginese', 'Buginese'],
		['Buhid', 'Buhid'],
		['Chakma', 'Chakma'],
		['Canadian_Aboriginal', 'Canadian_Aboriginal'],
		['Carian', 'Carian'],
		['Cherokee', 'Cherokee'],
		['Coptic', 'Coptic'],
		['Cypriot', 'Cypriot'],
		['Cyrillic', 'Cyrillic'],
		['Devanagari', 'Devanagari'],
		['Deseret', 'Deseret'],
		['Duployan', 'Duployan'],
		['Egyptian_Hieroglyphs', 'Egyptian_Hieroglyphs'],
		['Elbasan', 'Elbasan'],
		['Ethiopic', 'Ethiopic'],
		['Georgian', 'Georgian'],
		['Glagolitic', 'Glagolitic'],
		['Masaram_Gondi', 'Masaram_Gondi'],
		['Gothic', 'Gothic'],
		['Grantha', 'Grantha'],
		['Greek', 'Greek'],
		['Gujarati', 'Gujarati'],
		['Gurmukhi', 'Gurmukhi'],
		['Hangul', 'Hangul'],
		['Han', 'Han'],
		['Hanunoo', 'Hanunoo'],
		['Hatran', 'Hatran'],
		['Hebrew', 'Hebrew'],
		['Hiragana', 'Hiragana'],
		['Anatolian_Hieroglyphs', 'Anatolian_Hieroglyphs'],
		['Pahawh_Hmong', 'Pahawh_Hmong'],
		['Katakana_Or_Hiragana', 'Katakana_Or_Hiragana'],
		['Old_Hungarian', 'Old_Hungarian'],
		['Old_Italic', 'Old_Italic'],
		['Javanese', 'Javanese'],
		['Kayah_Li', 'Kayah_Li'],
		['Katakana', 'Katakana'],
		['Kharoshthi', 'Kharoshthi'],
		['Khmer', 'Khmer'],
		['Khojki', 'Khojki'],
		['Kannada', 'Kannada'],
		['Kaithi', 'Kaithi'],
		['Tai_Tham', 'Tai_Tham'],
		['Lao', 'Lao'],
		['Latin', 'Latin'],
		['Lepcha', 'Lepcha'],
		['Limbu', 'Limbu'],
		['Linear_A', 'Linear_A'],
		['Linear_B', 'Linear_B'],
		['Lycian', 'Lycian'],
		['Lydian', 'Lydian'],
		['Mahajani', 'Mahajani'],
		['Mandaic', 'Mandaic'],
		['Manichaean', 'Manichaean'],
		['Marchen', 'Marchen'],
		['Mende_Kikakui', 'Mende_Kikakui'],
		['Meroitic_Cursive', 'Meroitic_Cursive'],
		['Meroitic_Hieroglyphs', 'Meroitic_Hieroglyphs'],
		['Malayalam', 'Malayalam'],
		['Mongolian', 'Mongolian'],
		['Mro', 'Mro'],
		['Meetei_Mayek', 'Meetei_Mayek'],
		['Multani', 'Multani'],
		['Myanmar', 'Myanmar'],
		['Old_North_Arabian', 'Old_North_Arabian'],
		['Nabataean', 'Nabataean'],
		['Nko', 'Nko'],
		['Nushu', 'Nushu'],
		['Ogham', 'Ogham'],
		['Ol_Chiki', 'Ol_Chiki'],
		['Old_Turkic', 'Old_Turkic'],
		['Oriya', 'Oriya'],
		['Osage', 'Osage'],
		['Osmanya', 'Osmanya'],
		['Palmyrene', 'Palmyrene'],
		['Pau_Cin_Hau', 'Pau_Cin_Hau'],
		['Old_Permic', 'Old_Permic'],
		['Phags_Pa', 'Phags_Pa'],
		['Inscriptional_Pahlavi', 'Inscriptional_Pahlavi'],
		['Psalter_Pahlavi', 'Psalter_Pahlavi'],
		['Phoenician', 'Phoenician'],
		['Miao', 'Miao'],
		['Inscriptional_Parthian', 'Inscriptional_Parthian'],
		['Rejang', 'Rejang'],
		['Runic', 'Runic'],
		['Samaritan', 'Samaritan'],
		['Old_South_Arabian', 'Old_South_Arabian'],
		['Saurashtra', 'Saurashtra'],
		['SignWriting', 'SignWriting'],
		['Shavian', 'Shavian'],
		['Sharada', 'Sharada'],
		['Siddham', 'Siddham'],
		['Khudawadi', 'Khudawadi'],
		['Sinhala', 'Sinhala'],
		['Sora_Sompeng', 'Sora_Sompeng'],
		['Soyombo', 'Soyombo'],
		['Sundanese', 'Sundanese'],
		['Syloti_Nagri', 'Syloti_Nagri'],
		['Syriac', 'Syriac'],
		['Tagbanwa', 'Tagbanwa'],
		['Takri', 'Takri'],
		['Tai_Le', 'Tai_Le'],
		['New_Tai_Lue', 'New_Tai_Lue'],
		['Tamil', 'Tamil'],
		['Tangut', 'Tangut'],
		['Tai_Viet', 'Tai_Viet'],
		['Telugu', 'Telugu'],
		['Tifinagh', 'Tifinagh'],
		['Tagalog', 'Tagalog'],
		['Thaana', 'Thaana'],
		['Tibetan', 'Tibetan'],
		['Tirhuta', 'Tirhuta'],
		['Ugaritic', 'Ugaritic'],
		['Vai', 'Vai'],
		['Warang_Citi', 'Warang_Citi'],
		['Old_Persian', 'Old_Persian'],
		['Cuneiform', 'Cuneiform'],
		['Yi', 'Yi'],
		['Zanabazar_Square', 'Zanabazar_Square'],
		['Inherited', 'Inherited'],
		['Common', 'Common'],
		['Unknown', 'Unknown']
	])]
]);

var matchPropertyValue = function(property, value) {
	var aliasToValue = mappings.get(property);
	if (!aliasToValue) {
		throw new Error(`Unknown property \`${ property }\`.`);
	}
	var canonicalValue = aliasToValue.get(value);
	if (canonicalValue) {
		return canonicalValue;
	}
	throw new Error(
		`Unknown value \`${ value }\` for property \`${ property }\`.`
	);
};

var unicodeMatchPropertyValueEcmascript = matchPropertyValue;

var iuMappings = new Map([
	[0x4B, 0x212A],
	[0x53, 0x17F],
	[0x6B, 0x212A],
	[0x73, 0x17F],
	[0xB5, 0x39C],
	[0xC5, 0x212B],
	[0xDF, 0x1E9E],
	[0xE5, 0x212B],
	[0x17F, 0x53],
	[0x1C4, 0x1C5],
	[0x1C5, 0x1C4],
	[0x1C7, 0x1C8],
	[0x1C8, 0x1C7],
	[0x1CA, 0x1CB],
	[0x1CB, 0x1CA],
	[0x1F1, 0x1F2],
	[0x1F2, 0x1F1],
	[0x26A, 0xA7AE],
	[0x29D, 0xA7B2],
	[0x345, 0x1FBE],
	[0x392, 0x3D0],
	[0x395, 0x3F5],
	[0x398, 0x3F4],
	[0x399, 0x1FBE],
	[0x39A, 0x3F0],
	[0x39C, 0xB5],
	[0x3A0, 0x3D6],
	[0x3A1, 0x3F1],
	[0x3A3, 0x3C2],
	[0x3A6, 0x3D5],
	[0x3A9, 0x2126],
	[0x3B8, 0x3F4],
	[0x3C2, 0x3A3],
	[0x3C9, 0x2126],
	[0x3D0, 0x392],
	[0x3D1, 0x3F4],
	[0x3D5, 0x3A6],
	[0x3D6, 0x3A0],
	[0x3F0, 0x39A],
	[0x3F1, 0x3A1],
	[0x3F4, [
		0x398,
		0x3D1,
		0x3B8
	]],
	[0x3F5, 0x395],
	[0x412, 0x1C80],
	[0x414, 0x1C81],
	[0x41E, 0x1C82],
	[0x421, 0x1C83],
	[0x422, 0x1C85],
	[0x42A, 0x1C86],
	[0x432, 0x1C80],
	[0x434, 0x1C81],
	[0x43E, 0x1C82],
	[0x441, 0x1C83],
	[0x442, [
		0x1C84,
		0x1C85
	]],
	[0x44A, 0x1C86],
	[0x462, 0x1C87],
	[0x463, 0x1C87],
	[0x13A0, 0xAB70],
	[0x13A1, 0xAB71],
	[0x13A2, 0xAB72],
	[0x13A3, 0xAB73],
	[0x13A4, 0xAB74],
	[0x13A5, 0xAB75],
	[0x13A6, 0xAB76],
	[0x13A7, 0xAB77],
	[0x13A8, 0xAB78],
	[0x13A9, 0xAB79],
	[0x13AA, 0xAB7A],
	[0x13AB, 0xAB7B],
	[0x13AC, 0xAB7C],
	[0x13AD, 0xAB7D],
	[0x13AE, 0xAB7E],
	[0x13AF, 0xAB7F],
	[0x13B0, 0xAB80],
	[0x13B1, 0xAB81],
	[0x13B2, 0xAB82],
	[0x13B3, 0xAB83],
	[0x13B4, 0xAB84],
	[0x13B5, 0xAB85],
	[0x13B6, 0xAB86],
	[0x13B7, 0xAB87],
	[0x13B8, 0xAB88],
	[0x13B9, 0xAB89],
	[0x13BA, 0xAB8A],
	[0x13BB, 0xAB8B],
	[0x13BC, 0xAB8C],
	[0x13BD, 0xAB8D],
	[0x13BE, 0xAB8E],
	[0x13BF, 0xAB8F],
	[0x13C0, 0xAB90],
	[0x13C1, 0xAB91],
	[0x13C2, 0xAB92],
	[0x13C3, 0xAB93],
	[0x13C4, 0xAB94],
	[0x13C5, 0xAB95],
	[0x13C6, 0xAB96],
	[0x13C7, 0xAB97],
	[0x13C8, 0xAB98],
	[0x13C9, 0xAB99],
	[0x13CA, 0xAB9A],
	[0x13CB, 0xAB9B],
	[0x13CC, 0xAB9C],
	[0x13CD, 0xAB9D],
	[0x13CE, 0xAB9E],
	[0x13CF, 0xAB9F],
	[0x13D0, 0xABA0],
	[0x13D1, 0xABA1],
	[0x13D2, 0xABA2],
	[0x13D3, 0xABA3],
	[0x13D4, 0xABA4],
	[0x13D5, 0xABA5],
	[0x13D6, 0xABA6],
	[0x13D7, 0xABA7],
	[0x13D8, 0xABA8],
	[0x13D9, 0xABA9],
	[0x13DA, 0xABAA],
	[0x13DB, 0xABAB],
	[0x13DC, 0xABAC],
	[0x13DD, 0xABAD],
	[0x13DE, 0xABAE],
	[0x13DF, 0xABAF],
	[0x13E0, 0xABB0],
	[0x13E1, 0xABB1],
	[0x13E2, 0xABB2],
	[0x13E3, 0xABB3],
	[0x13E4, 0xABB4],
	[0x13E5, 0xABB5],
	[0x13E6, 0xABB6],
	[0x13E7, 0xABB7],
	[0x13E8, 0xABB8],
	[0x13E9, 0xABB9],
	[0x13EA, 0xABBA],
	[0x13EB, 0xABBB],
	[0x13EC, 0xABBC],
	[0x13ED, 0xABBD],
	[0x13EE, 0xABBE],
	[0x13EF, 0xABBF],
	[0x13F0, 0x13F8],
	[0x13F1, 0x13F9],
	[0x13F2, 0x13FA],
	[0x13F3, 0x13FB],
	[0x13F4, 0x13FC],
	[0x13F5, 0x13FD],
	[0x13F8, 0x13F0],
	[0x13F9, 0x13F1],
	[0x13FA, 0x13F2],
	[0x13FB, 0x13F3],
	[0x13FC, 0x13F4],
	[0x13FD, 0x13F5],
	[0x1C80, [
		0x412,
		0x432
	]],
	[0x1C81, [
		0x414,
		0x434
	]],
	[0x1C82, [
		0x41E,
		0x43E
	]],
	[0x1C83, [
		0x421,
		0x441
	]],
	[0x1C84, [
		0x1C85,
		0x442
	]],
	[0x1C85, [
		0x422,
		0x1C84,
		0x442
	]],
	[0x1C86, [
		0x42A,
		0x44A
	]],
	[0x1C87, [
		0x462,
		0x463
	]],
	[0x1C88, [
		0xA64A,
		0xA64B
	]],
	[0x1E60, 0x1E9B],
	[0x1E9B, 0x1E60],
	[0x1E9E, 0xDF],
	[0x1F80, 0x1F88],
	[0x1F81, 0x1F89],
	[0x1F82, 0x1F8A],
	[0x1F83, 0x1F8B],
	[0x1F84, 0x1F8C],
	[0x1F85, 0x1F8D],
	[0x1F86, 0x1F8E],
	[0x1F87, 0x1F8F],
	[0x1F88, 0x1F80],
	[0x1F89, 0x1F81],
	[0x1F8A, 0x1F82],
	[0x1F8B, 0x1F83],
	[0x1F8C, 0x1F84],
	[0x1F8D, 0x1F85],
	[0x1F8E, 0x1F86],
	[0x1F8F, 0x1F87],
	[0x1F90, 0x1F98],
	[0x1F91, 0x1F99],
	[0x1F92, 0x1F9A],
	[0x1F93, 0x1F9B],
	[0x1F94, 0x1F9C],
	[0x1F95, 0x1F9D],
	[0x1F96, 0x1F9E],
	[0x1F97, 0x1F9F],
	[0x1F98, 0x1F90],
	[0x1F99, 0x1F91],
	[0x1F9A, 0x1F92],
	[0x1F9B, 0x1F93],
	[0x1F9C, 0x1F94],
	[0x1F9D, 0x1F95],
	[0x1F9E, 0x1F96],
	[0x1F9F, 0x1F97],
	[0x1FA0, 0x1FA8],
	[0x1FA1, 0x1FA9],
	[0x1FA2, 0x1FAA],
	[0x1FA3, 0x1FAB],
	[0x1FA4, 0x1FAC],
	[0x1FA5, 0x1FAD],
	[0x1FA6, 0x1FAE],
	[0x1FA7, 0x1FAF],
	[0x1FA8, 0x1FA0],
	[0x1FA9, 0x1FA1],
	[0x1FAA, 0x1FA2],
	[0x1FAB, 0x1FA3],
	[0x1FAC, 0x1FA4],
	[0x1FAD, 0x1FA5],
	[0x1FAE, 0x1FA6],
	[0x1FAF, 0x1FA7],
	[0x1FB3, 0x1FBC],
	[0x1FBC, 0x1FB3],
	[0x1FBE, [
		0x345,
		0x399
	]],
	[0x1FC3, 0x1FCC],
	[0x1FCC, 0x1FC3],
	[0x1FF3, 0x1FFC],
	[0x1FFC, 0x1FF3],
	[0x2126, [
		0x3A9,
		0x3C9
	]],
	[0x212A, 0x4B],
	[0x212B, [
		0xC5,
		0xE5
	]],
	[0xA64A, 0x1C88],
	[0xA64B, 0x1C88],
	[0xA7AE, 0x26A],
	[0xA7B2, 0x29D],
	[0xA7B3, 0xAB53],
	[0xA7B4, 0xA7B5],
	[0xA7B5, 0xA7B4],
	[0xA7B6, 0xA7B7],
	[0xA7B7, 0xA7B6],
	[0xAB53, 0xA7B3],
	[0xAB70, 0x13A0],
	[0xAB71, 0x13A1],
	[0xAB72, 0x13A2],
	[0xAB73, 0x13A3],
	[0xAB74, 0x13A4],
	[0xAB75, 0x13A5],
	[0xAB76, 0x13A6],
	[0xAB77, 0x13A7],
	[0xAB78, 0x13A8],
	[0xAB79, 0x13A9],
	[0xAB7A, 0x13AA],
	[0xAB7B, 0x13AB],
	[0xAB7C, 0x13AC],
	[0xAB7D, 0x13AD],
	[0xAB7E, 0x13AE],
	[0xAB7F, 0x13AF],
	[0xAB80, 0x13B0],
	[0xAB81, 0x13B1],
	[0xAB82, 0x13B2],
	[0xAB83, 0x13B3],
	[0xAB84, 0x13B4],
	[0xAB85, 0x13B5],
	[0xAB86, 0x13B6],
	[0xAB87, 0x13B7],
	[0xAB88, 0x13B8],
	[0xAB89, 0x13B9],
	[0xAB8A, 0x13BA],
	[0xAB8B, 0x13BB],
	[0xAB8C, 0x13BC],
	[0xAB8D, 0x13BD],
	[0xAB8E, 0x13BE],
	[0xAB8F, 0x13BF],
	[0xAB90, 0x13C0],
	[0xAB91, 0x13C1],
	[0xAB92, 0x13C2],
	[0xAB93, 0x13C3],
	[0xAB94, 0x13C4],
	[0xAB95, 0x13C5],
	[0xAB96, 0x13C6],
	[0xAB97, 0x13C7],
	[0xAB98, 0x13C8],
	[0xAB99, 0x13C9],
	[0xAB9A, 0x13CA],
	[0xAB9B, 0x13CB],
	[0xAB9C, 0x13CC],
	[0xAB9D, 0x13CD],
	[0xAB9E, 0x13CE],
	[0xAB9F, 0x13CF],
	[0xABA0, 0x13D0],
	[0xABA1, 0x13D1],
	[0xABA2, 0x13D2],
	[0xABA3, 0x13D3],
	[0xABA4, 0x13D4],
	[0xABA5, 0x13D5],
	[0xABA6, 0x13D6],
	[0xABA7, 0x13D7],
	[0xABA8, 0x13D8],
	[0xABA9, 0x13D9],
	[0xABAA, 0x13DA],
	[0xABAB, 0x13DB],
	[0xABAC, 0x13DC],
	[0xABAD, 0x13DD],
	[0xABAE, 0x13DE],
	[0xABAF, 0x13DF],
	[0xABB0, 0x13E0],
	[0xABB1, 0x13E1],
	[0xABB2, 0x13E2],
	[0xABB3, 0x13E3],
	[0xABB4, 0x13E4],
	[0xABB5, 0x13E5],
	[0xABB6, 0x13E6],
	[0xABB7, 0x13E7],
	[0xABB8, 0x13E8],
	[0xABB9, 0x13E9],
	[0xABBA, 0x13EA],
	[0xABBB, 0x13EB],
	[0xABBC, 0x13EC],
	[0xABBD, 0x13ED],
	[0xABBE, 0x13EE],
	[0xABBF, 0x13EF],
	[0x10400, 0x10428],
	[0x10401, 0x10429],
	[0x10402, 0x1042A],
	[0x10403, 0x1042B],
	[0x10404, 0x1042C],
	[0x10405, 0x1042D],
	[0x10406, 0x1042E],
	[0x10407, 0x1042F],
	[0x10408, 0x10430],
	[0x10409, 0x10431],
	[0x1040A, 0x10432],
	[0x1040B, 0x10433],
	[0x1040C, 0x10434],
	[0x1040D, 0x10435],
	[0x1040E, 0x10436],
	[0x1040F, 0x10437],
	[0x10410, 0x10438],
	[0x10411, 0x10439],
	[0x10412, 0x1043A],
	[0x10413, 0x1043B],
	[0x10414, 0x1043C],
	[0x10415, 0x1043D],
	[0x10416, 0x1043E],
	[0x10417, 0x1043F],
	[0x10418, 0x10440],
	[0x10419, 0x10441],
	[0x1041A, 0x10442],
	[0x1041B, 0x10443],
	[0x1041C, 0x10444],
	[0x1041D, 0x10445],
	[0x1041E, 0x10446],
	[0x1041F, 0x10447],
	[0x10420, 0x10448],
	[0x10421, 0x10449],
	[0x10422, 0x1044A],
	[0x10423, 0x1044B],
	[0x10424, 0x1044C],
	[0x10425, 0x1044D],
	[0x10426, 0x1044E],
	[0x10427, 0x1044F],
	[0x10428, 0x10400],
	[0x10429, 0x10401],
	[0x1042A, 0x10402],
	[0x1042B, 0x10403],
	[0x1042C, 0x10404],
	[0x1042D, 0x10405],
	[0x1042E, 0x10406],
	[0x1042F, 0x10407],
	[0x10430, 0x10408],
	[0x10431, 0x10409],
	[0x10432, 0x1040A],
	[0x10433, 0x1040B],
	[0x10434, 0x1040C],
	[0x10435, 0x1040D],
	[0x10436, 0x1040E],
	[0x10437, 0x1040F],
	[0x10438, 0x10410],
	[0x10439, 0x10411],
	[0x1043A, 0x10412],
	[0x1043B, 0x10413],
	[0x1043C, 0x10414],
	[0x1043D, 0x10415],
	[0x1043E, 0x10416],
	[0x1043F, 0x10417],
	[0x10440, 0x10418],
	[0x10441, 0x10419],
	[0x10442, 0x1041A],
	[0x10443, 0x1041B],
	[0x10444, 0x1041C],
	[0x10445, 0x1041D],
	[0x10446, 0x1041E],
	[0x10447, 0x1041F],
	[0x10448, 0x10420],
	[0x10449, 0x10421],
	[0x1044A, 0x10422],
	[0x1044B, 0x10423],
	[0x1044C, 0x10424],
	[0x1044D, 0x10425],
	[0x1044E, 0x10426],
	[0x1044F, 0x10427],
	[0x104B0, 0x104D8],
	[0x104B1, 0x104D9],
	[0x104B2, 0x104DA],
	[0x104B3, 0x104DB],
	[0x104B4, 0x104DC],
	[0x104B5, 0x104DD],
	[0x104B6, 0x104DE],
	[0x104B7, 0x104DF],
	[0x104B8, 0x104E0],
	[0x104B9, 0x104E1],
	[0x104BA, 0x104E2],
	[0x104BB, 0x104E3],
	[0x104BC, 0x104E4],
	[0x104BD, 0x104E5],
	[0x104BE, 0x104E6],
	[0x104BF, 0x104E7],
	[0x104C0, 0x104E8],
	[0x104C1, 0x104E9],
	[0x104C2, 0x104EA],
	[0x104C3, 0x104EB],
	[0x104C4, 0x104EC],
	[0x104C5, 0x104ED],
	[0x104C6, 0x104EE],
	[0x104C7, 0x104EF],
	[0x104C8, 0x104F0],
	[0x104C9, 0x104F1],
	[0x104CA, 0x104F2],
	[0x104CB, 0x104F3],
	[0x104CC, 0x104F4],
	[0x104CD, 0x104F5],
	[0x104CE, 0x104F6],
	[0x104CF, 0x104F7],
	[0x104D0, 0x104F8],
	[0x104D1, 0x104F9],
	[0x104D2, 0x104FA],
	[0x104D3, 0x104FB],
	[0x104D8, 0x104B0],
	[0x104D9, 0x104B1],
	[0x104DA, 0x104B2],
	[0x104DB, 0x104B3],
	[0x104DC, 0x104B4],
	[0x104DD, 0x104B5],
	[0x104DE, 0x104B6],
	[0x104DF, 0x104B7],
	[0x104E0, 0x104B8],
	[0x104E1, 0x104B9],
	[0x104E2, 0x104BA],
	[0x104E3, 0x104BB],
	[0x104E4, 0x104BC],
	[0x104E5, 0x104BD],
	[0x104E6, 0x104BE],
	[0x104E7, 0x104BF],
	[0x104E8, 0x104C0],
	[0x104E9, 0x104C1],
	[0x104EA, 0x104C2],
	[0x104EB, 0x104C3],
	[0x104EC, 0x104C4],
	[0x104ED, 0x104C5],
	[0x104EE, 0x104C6],
	[0x104EF, 0x104C7],
	[0x104F0, 0x104C8],
	[0x104F1, 0x104C9],
	[0x104F2, 0x104CA],
	[0x104F3, 0x104CB],
	[0x104F4, 0x104CC],
	[0x104F5, 0x104CD],
	[0x104F6, 0x104CE],
	[0x104F7, 0x104CF],
	[0x104F8, 0x104D0],
	[0x104F9, 0x104D1],
	[0x104FA, 0x104D2],
	[0x104FB, 0x104D3],
	[0x10C80, 0x10CC0],
	[0x10C81, 0x10CC1],
	[0x10C82, 0x10CC2],
	[0x10C83, 0x10CC3],
	[0x10C84, 0x10CC4],
	[0x10C85, 0x10CC5],
	[0x10C86, 0x10CC6],
	[0x10C87, 0x10CC7],
	[0x10C88, 0x10CC8],
	[0x10C89, 0x10CC9],
	[0x10C8A, 0x10CCA],
	[0x10C8B, 0x10CCB],
	[0x10C8C, 0x10CCC],
	[0x10C8D, 0x10CCD],
	[0x10C8E, 0x10CCE],
	[0x10C8F, 0x10CCF],
	[0x10C90, 0x10CD0],
	[0x10C91, 0x10CD1],
	[0x10C92, 0x10CD2],
	[0x10C93, 0x10CD3],
	[0x10C94, 0x10CD4],
	[0x10C95, 0x10CD5],
	[0x10C96, 0x10CD6],
	[0x10C97, 0x10CD7],
	[0x10C98, 0x10CD8],
	[0x10C99, 0x10CD9],
	[0x10C9A, 0x10CDA],
	[0x10C9B, 0x10CDB],
	[0x10C9C, 0x10CDC],
	[0x10C9D, 0x10CDD],
	[0x10C9E, 0x10CDE],
	[0x10C9F, 0x10CDF],
	[0x10CA0, 0x10CE0],
	[0x10CA1, 0x10CE1],
	[0x10CA2, 0x10CE2],
	[0x10CA3, 0x10CE3],
	[0x10CA4, 0x10CE4],
	[0x10CA5, 0x10CE5],
	[0x10CA6, 0x10CE6],
	[0x10CA7, 0x10CE7],
	[0x10CA8, 0x10CE8],
	[0x10CA9, 0x10CE9],
	[0x10CAA, 0x10CEA],
	[0x10CAB, 0x10CEB],
	[0x10CAC, 0x10CEC],
	[0x10CAD, 0x10CED],
	[0x10CAE, 0x10CEE],
	[0x10CAF, 0x10CEF],
	[0x10CB0, 0x10CF0],
	[0x10CB1, 0x10CF1],
	[0x10CB2, 0x10CF2],
	[0x10CC0, 0x10C80],
	[0x10CC1, 0x10C81],
	[0x10CC2, 0x10C82],
	[0x10CC3, 0x10C83],
	[0x10CC4, 0x10C84],
	[0x10CC5, 0x10C85],
	[0x10CC6, 0x10C86],
	[0x10CC7, 0x10C87],
	[0x10CC8, 0x10C88],
	[0x10CC9, 0x10C89],
	[0x10CCA, 0x10C8A],
	[0x10CCB, 0x10C8B],
	[0x10CCC, 0x10C8C],
	[0x10CCD, 0x10C8D],
	[0x10CCE, 0x10C8E],
	[0x10CCF, 0x10C8F],
	[0x10CD0, 0x10C90],
	[0x10CD1, 0x10C91],
	[0x10CD2, 0x10C92],
	[0x10CD3, 0x10C93],
	[0x10CD4, 0x10C94],
	[0x10CD5, 0x10C95],
	[0x10CD6, 0x10C96],
	[0x10CD7, 0x10C97],
	[0x10CD8, 0x10C98],
	[0x10CD9, 0x10C99],
	[0x10CDA, 0x10C9A],
	[0x10CDB, 0x10C9B],
	[0x10CDC, 0x10C9C],
	[0x10CDD, 0x10C9D],
	[0x10CDE, 0x10C9E],
	[0x10CDF, 0x10C9F],
	[0x10CE0, 0x10CA0],
	[0x10CE1, 0x10CA1],
	[0x10CE2, 0x10CA2],
	[0x10CE3, 0x10CA3],
	[0x10CE4, 0x10CA4],
	[0x10CE5, 0x10CA5],
	[0x10CE6, 0x10CA6],
	[0x10CE7, 0x10CA7],
	[0x10CE8, 0x10CA8],
	[0x10CE9, 0x10CA9],
	[0x10CEA, 0x10CAA],
	[0x10CEB, 0x10CAB],
	[0x10CEC, 0x10CAC],
	[0x10CED, 0x10CAD],
	[0x10CEE, 0x10CAE],
	[0x10CEF, 0x10CAF],
	[0x10CF0, 0x10CB0],
	[0x10CF1, 0x10CB1],
	[0x10CF2, 0x10CB2],
	[0x118A0, 0x118C0],
	[0x118A1, 0x118C1],
	[0x118A2, 0x118C2],
	[0x118A3, 0x118C3],
	[0x118A4, 0x118C4],
	[0x118A5, 0x118C5],
	[0x118A6, 0x118C6],
	[0x118A7, 0x118C7],
	[0x118A8, 0x118C8],
	[0x118A9, 0x118C9],
	[0x118AA, 0x118CA],
	[0x118AB, 0x118CB],
	[0x118AC, 0x118CC],
	[0x118AD, 0x118CD],
	[0x118AE, 0x118CE],
	[0x118AF, 0x118CF],
	[0x118B0, 0x118D0],
	[0x118B1, 0x118D1],
	[0x118B2, 0x118D2],
	[0x118B3, 0x118D3],
	[0x118B4, 0x118D4],
	[0x118B5, 0x118D5],
	[0x118B6, 0x118D6],
	[0x118B7, 0x118D7],
	[0x118B8, 0x118D8],
	[0x118B9, 0x118D9],
	[0x118BA, 0x118DA],
	[0x118BB, 0x118DB],
	[0x118BC, 0x118DC],
	[0x118BD, 0x118DD],
	[0x118BE, 0x118DE],
	[0x118BF, 0x118DF],
	[0x118C0, 0x118A0],
	[0x118C1, 0x118A1],
	[0x118C2, 0x118A2],
	[0x118C3, 0x118A3],
	[0x118C4, 0x118A4],
	[0x118C5, 0x118A5],
	[0x118C6, 0x118A6],
	[0x118C7, 0x118A7],
	[0x118C8, 0x118A8],
	[0x118C9, 0x118A9],
	[0x118CA, 0x118AA],
	[0x118CB, 0x118AB],
	[0x118CC, 0x118AC],
	[0x118CD, 0x118AD],
	[0x118CE, 0x118AE],
	[0x118CF, 0x118AF],
	[0x118D0, 0x118B0],
	[0x118D1, 0x118B1],
	[0x118D2, 0x118B2],
	[0x118D3, 0x118B3],
	[0x118D4, 0x118B4],
	[0x118D5, 0x118B5],
	[0x118D6, 0x118B6],
	[0x118D7, 0x118B7],
	[0x118D8, 0x118B8],
	[0x118D9, 0x118B9],
	[0x118DA, 0x118BA],
	[0x118DB, 0x118BB],
	[0x118DC, 0x118BC],
	[0x118DD, 0x118BD],
	[0x118DE, 0x118BE],
	[0x118DF, 0x118BF],
	[0x1E900, 0x1E922],
	[0x1E901, 0x1E923],
	[0x1E902, 0x1E924],
	[0x1E903, 0x1E925],
	[0x1E904, 0x1E926],
	[0x1E905, 0x1E927],
	[0x1E906, 0x1E928],
	[0x1E907, 0x1E929],
	[0x1E908, 0x1E92A],
	[0x1E909, 0x1E92B],
	[0x1E90A, 0x1E92C],
	[0x1E90B, 0x1E92D],
	[0x1E90C, 0x1E92E],
	[0x1E90D, 0x1E92F],
	[0x1E90E, 0x1E930],
	[0x1E90F, 0x1E931],
	[0x1E910, 0x1E932],
	[0x1E911, 0x1E933],
	[0x1E912, 0x1E934],
	[0x1E913, 0x1E935],
	[0x1E914, 0x1E936],
	[0x1E915, 0x1E937],
	[0x1E916, 0x1E938],
	[0x1E917, 0x1E939],
	[0x1E918, 0x1E93A],
	[0x1E919, 0x1E93B],
	[0x1E91A, 0x1E93C],
	[0x1E91B, 0x1E93D],
	[0x1E91C, 0x1E93E],
	[0x1E91D, 0x1E93F],
	[0x1E91E, 0x1E940],
	[0x1E91F, 0x1E941],
	[0x1E920, 0x1E942],
	[0x1E921, 0x1E943],
	[0x1E922, 0x1E900],
	[0x1E923, 0x1E901],
	[0x1E924, 0x1E902],
	[0x1E925, 0x1E903],
	[0x1E926, 0x1E904],
	[0x1E927, 0x1E905],
	[0x1E928, 0x1E906],
	[0x1E929, 0x1E907],
	[0x1E92A, 0x1E908],
	[0x1E92B, 0x1E909],
	[0x1E92C, 0x1E90A],
	[0x1E92D, 0x1E90B],
	[0x1E92E, 0x1E90C],
	[0x1E92F, 0x1E90D],
	[0x1E930, 0x1E90E],
	[0x1E931, 0x1E90F],
	[0x1E932, 0x1E910],
	[0x1E933, 0x1E911],
	[0x1E934, 0x1E912],
	[0x1E935, 0x1E913],
	[0x1E936, 0x1E914],
	[0x1E937, 0x1E915],
	[0x1E938, 0x1E916],
	[0x1E939, 0x1E917],
	[0x1E93A, 0x1E918],
	[0x1E93B, 0x1E919],
	[0x1E93C, 0x1E91A],
	[0x1E93D, 0x1E91B],
	[0x1E93E, 0x1E91C],
	[0x1E93F, 0x1E91D],
	[0x1E940, 0x1E91E],
	[0x1E941, 0x1E91F],
	[0x1E942, 0x1E920],
	[0x1E943, 0x1E921]
]);

var REGULAR = new Map([
	['d', regenerate()
		.addRange(0x30, 0x39)],
	['D', regenerate()
		.addRange(0x0, 0x2F)
		.addRange(0x3A, 0xFFFF)],
	['s', regenerate(0x20, 0xA0, 0x1680, 0x202F, 0x205F, 0x3000, 0xFEFF)
		.addRange(0x9, 0xD)
		.addRange(0x2000, 0x200A)
		.addRange(0x2028, 0x2029)],
	['S', regenerate()
		.addRange(0x0, 0x8)
		.addRange(0xE, 0x1F)
		.addRange(0x21, 0x9F)
		.addRange(0xA1, 0x167F)
		.addRange(0x1681, 0x1FFF)
		.addRange(0x200B, 0x2027)
		.addRange(0x202A, 0x202E)
		.addRange(0x2030, 0x205E)
		.addRange(0x2060, 0x2FFF)
		.addRange(0x3001, 0xFEFE)
		.addRange(0xFF00, 0xFFFF)],
	['w', regenerate(0x5F)
		.addRange(0x30, 0x39)
		.addRange(0x41, 0x5A)
		.addRange(0x61, 0x7A)],
	['W', regenerate(0x60)
		.addRange(0x0, 0x2F)
		.addRange(0x3A, 0x40)
		.addRange(0x5B, 0x5E)
		.addRange(0x7B, 0xFFFF)]
]);

var UNICODE = new Map([
	['d', regenerate()
		.addRange(0x30, 0x39)],
	['D', regenerate()
		.addRange(0x0, 0x2F)
		.addRange(0x3A, 0x10FFFF)],
	['s', regenerate(0x20, 0xA0, 0x1680, 0x202F, 0x205F, 0x3000, 0xFEFF)
		.addRange(0x9, 0xD)
		.addRange(0x2000, 0x200A)
		.addRange(0x2028, 0x2029)],
	['S', regenerate()
		.addRange(0x0, 0x8)
		.addRange(0xE, 0x1F)
		.addRange(0x21, 0x9F)
		.addRange(0xA1, 0x167F)
		.addRange(0x1681, 0x1FFF)
		.addRange(0x200B, 0x2027)
		.addRange(0x202A, 0x202E)
		.addRange(0x2030, 0x205E)
		.addRange(0x2060, 0x2FFF)
		.addRange(0x3001, 0xFEFE)
		.addRange(0xFF00, 0x10FFFF)],
	['w', regenerate(0x5F)
		.addRange(0x30, 0x39)
		.addRange(0x41, 0x5A)
		.addRange(0x61, 0x7A)],
	['W', regenerate(0x60)
		.addRange(0x0, 0x2F)
		.addRange(0x3A, 0x40)
		.addRange(0x5B, 0x5E)
		.addRange(0x7B, 0x10FFFF)]
]);

var UNICODE_IGNORE_CASE = new Map([
	['d', regenerate()
		.addRange(0x30, 0x39)],
	['D', regenerate()
		.addRange(0x0, 0x2F)
		.addRange(0x3A, 0x10FFFF)],
	['s', regenerate(0x20, 0xA0, 0x1680, 0x202F, 0x205F, 0x3000, 0xFEFF)
		.addRange(0x9, 0xD)
		.addRange(0x2000, 0x200A)
		.addRange(0x2028, 0x2029)],
	['S', regenerate()
		.addRange(0x0, 0x8)
		.addRange(0xE, 0x1F)
		.addRange(0x21, 0x9F)
		.addRange(0xA1, 0x167F)
		.addRange(0x1681, 0x1FFF)
		.addRange(0x200B, 0x2027)
		.addRange(0x202A, 0x202E)
		.addRange(0x2030, 0x205E)
		.addRange(0x2060, 0x2FFF)
		.addRange(0x3001, 0xFEFE)
		.addRange(0xFF00, 0x10FFFF)],
	['w', regenerate(0x5F, 0x17F, 0x212A)
		.addRange(0x30, 0x39)
		.addRange(0x41, 0x5A)
		.addRange(0x61, 0x7A)],
	['W', regenerate(0x60)
		.addRange(0x0, 0x2F)
		.addRange(0x3A, 0x40)
		.addRange(0x5B, 0x5E)
		.addRange(0x7B, 0x17E)
		.addRange(0x180, 0x2129)
		.addRange(0x212B, 0x10FFFF)]
]);

var characterClassEscapeSets = {
	REGULAR: REGULAR,
	UNICODE: UNICODE,
	UNICODE_IGNORE_CASE: UNICODE_IGNORE_CASE
};

var rewritePattern_1 = createCommonjsModule(function (module) {
var generate = regjsgen.generate;
var parse = parser.parse;






// Prepare a Regenerate set containing all code points, used for negative
// character classes (if any).
var UNICODE_SET = regenerate().addRange(0x0, 0x10FFFF);
// Without the `u` flag, the range stops at 0xFFFF.
// https://mths.be/es6#sec-pattern-semantics
var BMP_SET = regenerate().addRange(0x0, 0xFFFF);

// Prepare a Regenerate set containing all code points that are supposed to be
// matched by `/./u`. https://mths.be/es6#sec-atom
var DOT_SET_UNICODE = UNICODE_SET.clone() // all Unicode code points
	.remove(
		// minus `LineTerminator`s (https://mths.be/es6#sec-line-terminators):
		0x000A, // Line Feed <LF>
		0x000D, // Carriage Return <CR>
		0x2028, // Line Separator <LS>
		0x2029  // Paragraph Separator <PS>
	);
// Prepare a Regenerate set containing all code points that are supposed to be
// matched by `/./` (only BMP code points).
var DOT_SET = DOT_SET_UNICODE.clone()
	.intersection(BMP_SET);

var getCharacterClassEscapeSet = (character, unicode, ignoreCase) => {
	if (unicode) {
		if (ignoreCase) {
			return characterClassEscapeSets.UNICODE_IGNORE_CASE.get(character);
		}
		return characterClassEscapeSets.UNICODE.get(character);
	}
	return characterClassEscapeSets.REGULAR.get(character);
};

var getDotSet = (unicode, dotAll) => {
	if (dotAll) {
		return unicode ? UNICODE_SET : BMP_SET;
	}
	return unicode ? DOT_SET_UNICODE : DOT_SET;
};

var getUnicodePropertyValueSet = (property, value) => {
	var path = value ?
		`${ property }/${ value }` :
		`Binary_Property/${ property }`;
	try {
		return commonjsRequire(`regenerate-unicode-properties/${ path }.js`);
	} catch (exception) {
		throw new Error(
			`Failed to recognize value \`${ value }\` for property ` +
			`\`${ property }\`.`
		);
	}
};

var handleLoneUnicodePropertyNameOrValue = (value) => {
	// It could be a `General_Category` value or a binary property.
	// Note: `unicodeMatchPropertyValue` throws on invalid values.
	try {
		var property$1 = 'General_Category';
		var category = unicodeMatchPropertyValueEcmascript(property$1, value);
		return getUnicodePropertyValueSet(property$1, category);
	} catch (exception) {}
	// It’s not a `General_Category` value, so check if it’s a binary
	// property. Note: `unicodeMatchProperty` throws on invalid properties.
	var property = unicodeMatchPropertyEcmascript(value);
	return getUnicodePropertyValueSet(property);
};

var getUnicodePropertyEscapeSet = (value, isNegative) => {
	var parts = value.split('=');
	var firstPart = parts[0];
	var set;
	if (parts.length == 1) {
		set = handleLoneUnicodePropertyNameOrValue(firstPart);
	} else {
		// The pattern consists of two parts, i.e. `Property=Value`.
		var property = unicodeMatchPropertyEcmascript(firstPart);
		var value$1 = unicodeMatchPropertyValueEcmascript(property, parts[1]);
		set = getUnicodePropertyValueSet(property, value$1);
	}
	if (isNegative) {
		return UNICODE_SET.clone().remove(set);
	}
	return set.clone();
};

// Given a range of code points, add any case-folded code points in that range
// to a set.
regenerate.prototype.iuAddRange = function(min, max) {
	var $this = this;
	do {
		var folded = caseFold(min);
		if (folded) {
			$this.add(folded);
		}
	} while (++min <= max);
	return $this;
};

var update = (item, pattern) => {
	var tree = parse(pattern, config.useUnicodeFlag ? 'u' : '');
	switch (tree.type) {
		case 'characterClass':
		case 'group':
		case 'value':
			// No wrapping needed.
			break;
		default:
			// Wrap the pattern in a non-capturing group.
			tree = wrap(tree, pattern);
	}
	Object.assign(item, tree);
};

var wrap = (tree, pattern) => {
	// Wrap the pattern in a non-capturing group.
	return {
		'type': 'group',
		'behavior': 'ignore',
		'body': [tree],
		'raw': `(?:${ pattern })`
	};
};

var caseFold = (codePoint) => {
	return iuMappings.get(codePoint) || false;
};

var processCharacterClass = (characterClassItem, regenerateOptions) => {
	var set = regenerate();
	for (var i = 0, list = characterClassItem.body; i < list.length; i += 1) {
		var item = list[i];

		switch (item.type) {
			case 'value':
				set.add(item.codePoint);
				if (config.ignoreCase && config.unicode && !config.useUnicodeFlag) {
					var folded = caseFold(item.codePoint);
					if (folded) {
						set.add(folded);
					}
				}
				break;
			case 'characterClassRange':
				var min = item.min.codePoint;
				var max = item.max.codePoint;
				set.addRange(min, max);
				if (config.ignoreCase && config.unicode && !config.useUnicodeFlag) {
					set.iuAddRange(min, max);
				}
				break;
			case 'characterClassEscape':
				set.add(getCharacterClassEscapeSet(
					item.value,
					config.unicode,
					config.ignoreCase
				));
				break;
			case 'unicodePropertyEscape':
				set.add(getUnicodePropertyEscapeSet(item.value, item.negative));
				break;
			// The `default` clause is only here as a safeguard; it should never be
			// reached. Code coverage tools should ignore it.
			/* istanbul ignore next */
			default:
				throw new Error(`Unknown term type: ${ item.type }`);
		}
	}
	if (characterClassItem.negative) {
		set = (config.unicode ? UNICODE_SET : BMP_SET).clone().remove(set);
	}
	update(characterClassItem, set.toString(regenerateOptions));
	return characterClassItem;
};

var processTerm = (item, regenerateOptions) => {
	switch (item.type) {
		case 'dot':
			update(
				item,
				getDotSet(config.unicode, config.dotAll).toString(regenerateOptions)
			);
			break;
		case 'characterClass':
			item = processCharacterClass(item, regenerateOptions);
			break;
		case 'unicodePropertyEscape':
			update(
				item,
				getUnicodePropertyEscapeSet(item.value, item.negative)
					.toString(regenerateOptions)
			);
			break;
		case 'characterClassEscape':
			update(
				item,
				getCharacterClassEscapeSet(
					item.value,
					config.unicode,
					config.ignoreCase
				).toString(regenerateOptions)
			);
			break;
		case 'alternative':
		case 'disjunction':
		case 'group':
		case 'quantifier':
			item.body = item.body.map(term => {
				return processTerm(term, regenerateOptions);
			});
			break;
		case 'value':
			var codePoint = item.codePoint;
			var set = regenerate(codePoint);
			if (config.ignoreCase && config.unicode && !config.useUnicodeFlag) {
				var folded = caseFold(codePoint);
				if (folded) {
					set.add(folded);
				}
			}
			update(item, set.toString(regenerateOptions));
			break;
		case 'anchor':
		case 'empty':
		case 'group':
		case 'reference':
			// Nothing to do here.
			break;
		// The `default` clause is only here as a safeguard; it should never be
		// reached. Code coverage tools should ignore it.
		/* istanbul ignore next */
		default:
			throw new Error(`Unknown term type: ${ item.type }`);
	}
	return item;
};

var config = {
	'ignoreCase': false,
	'unicode': false,
	'dotAll': false,
	'useUnicodeFlag': false
};
var rewritePattern = (pattern, flags, options) => {
	var regjsparserFeatures = {
		'unicodePropertyEscape': options && options.unicodePropertyEscape
	};
	config.ignoreCase = flags && flags.includes('i');
	config.unicode = flags && flags.includes('u');
	var supportDotAllFlag = options && options.dotAllFlag;
	config.dotAll = supportDotAllFlag && flags && flags.includes('s');
	config.useUnicodeFlag = options && options.useUnicodeFlag;
	var regenerateOptions = {
		'hasUnicodeFlag': config.useUnicodeFlag,
		'bmpOnly': !config.unicode
	};
	var tree = parse(pattern, flags, regjsparserFeatures);
	// Note: `processTerm` mutates `tree`.
	processTerm(tree, regenerateOptions);
	return generate(tree);
};

module.exports = rewritePattern;
});

class Literal extends Node {
	initialise() {
		if (typeof this.value === 'string') {
			this.program.indentExclusionElements.push(this);
		}
	}

	transpile(code, transforms) {
		if (transforms.numericLiteral) {
			var leading = this.raw.slice(0, 2);
			if (leading === '0b' || leading === '0o') {
				code.overwrite(this.start, this.end, String(this.value), {
					storeName: true,
					contentOnly: true
				});
			}
		}

		if (this.regex) {
			var ref = this.regex;
			var pattern = ref.pattern;
			var flags = ref.flags;

			if (transforms.stickyRegExp && /y/.test(flags))
				{ throw new CompileError(
					'Regular expression sticky flag is not supported',
					this
				); }
			if (transforms.unicodeRegExp && /u/.test(flags)) {
				code.overwrite(
					this.start,
					this.end,
					`/${rewritePattern_1(pattern, flags)}/${flags.replace('u', '')}`,
					{
						contentOnly: true
					}
				);
			}
		}
	}
}

class MemberExpression extends Node {
	transpile(code, transforms) {
		if (transforms.reservedProperties && reserved[this.property.name]) {
			code.overwrite(this.object.end, this.property.start, `['`);
			code.appendLeft(this.property.end, `']`);
		}

		super.transpile(code, transforms);
	}
}

class NewExpression extends Node {
	initialise(transforms) {
		if (transforms.spreadRest && this.arguments.length) {
			var lexicalBoundary = this.findLexicalBoundary();

			var i = this.arguments.length;
			while (i--) {
				var arg = this.arguments[i];
				if (arg.type === 'SpreadElement' && isArguments(arg.argument)) {
					this.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
					break;
				}
			}
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);

		if (transforms.spreadRest && this.arguments.length) {
			var firstArgument = this.arguments[0];
			var isNew = true;
			var hasSpreadElements = spread(
				code,
				this.arguments,
				firstArgument.start,
				this.argumentsArrayAlias,
				isNew
			);

			if (hasSpreadElements) {
				code.prependRight(
					this.start + 'new'.length,
					' (Function.prototype.bind.apply('
				);
				code.overwrite(
					this.callee.end,
					firstArgument.start,
					', [ null ].concat( '
				);
				code.appendLeft(this.end, ' ))');
			}
		}

		if (this.arguments.length) {
			removeTrailingComma(code, this.arguments[this.arguments.length - 1].end);
		}
	}
}

class ObjectExpression extends Node {
	transpile(code, transforms) {
		super.transpile(code, transforms);

		var firstPropertyStart = this.start + 1;
		var regularPropertyCount = 0;
		var spreadPropertyCount = 0;
		var computedPropertyCount = 0;
		var firstSpreadProperty = null;
		var firstComputedProperty = null;

		for (var i = 0; i < this.properties.length; ++i) {
			var prop = this.properties[i];
			if (prop.type === 'SpreadElement') {
				spreadPropertyCount += 1;
				if (firstSpreadProperty === null) { firstSpreadProperty = i; }
			} else if (prop.computed) {
				computedPropertyCount += 1;
				if (firstComputedProperty === null) { firstComputedProperty = i; }
			} else if (prop.type === 'Property') {
				regularPropertyCount += 1;
			}
		}

		if (spreadPropertyCount) {
			if (!this.program.options.objectAssign) {
				throw new CompileError(
					"Object spread operator requires specified objectAssign option with 'Object.assign' or polyfill helper.",
					this
				);
			}
			// enclose run of non-spread properties in curlies
			var i$1 = this.properties.length;
			if (regularPropertyCount && !computedPropertyCount) {
				while (i$1--) {
					var prop$1 = this.properties[i$1];

					if (prop$1.type === 'Property' && !prop$1.computed) {
						var lastProp = this.properties[i$1 - 1];
						var nextProp = this.properties[i$1 + 1];

						if (
							!lastProp ||
							lastProp.type !== 'Property' ||
							lastProp.computed
						) {
							code.prependRight(prop$1.start, '{');
						}

						if (
							!nextProp ||
							nextProp.type !== 'Property' ||
							nextProp.computed
						) {
							code.appendLeft(prop$1.end, '}');
						}
					}
				}
			}

			// wrap the whole thing in Object.assign
			firstPropertyStart = this.properties[0].start;
			if (!computedPropertyCount) {
				code.overwrite(
					this.start,
					firstPropertyStart,
					`${this.program.options.objectAssign}({}, `
				);
				code.overwrite(
					this.properties[this.properties.length - 1].end,
					this.end,
					')'
				);
			} else if (this.properties[0].type === 'SpreadElement') {
				code.overwrite(
					this.start,
					firstPropertyStart,
					`${this.program.options.objectAssign}({}, `
				);
				code.remove(this.end - 1, this.end);
				code.appendRight(this.end, ')');
			} else {
				code.prependLeft(this.start, `${this.program.options.objectAssign}(`);
				code.appendRight(this.end, ')');
			}
		}

		if (computedPropertyCount && transforms.computedProperty) {
			var i0 = this.getIndentation();

			var isSimpleAssignment;
			var name;

			if (
				this.parent.type === 'VariableDeclarator' &&
				this.parent.parent.declarations.length === 1 &&
				this.parent.id.type === 'Identifier'
			) {
				isSimpleAssignment = true;
				name = this.parent.id.alias || this.parent.id.name; // TODO is this right?
			} else if (
				this.parent.type === 'AssignmentExpression' &&
				this.parent.parent.type === 'ExpressionStatement' &&
				this.parent.left.type === 'Identifier'
			) {
				isSimpleAssignment = true;
				name = this.parent.left.alias || this.parent.left.name; // TODO is this right?
			} else if (
				this.parent.type === 'AssignmentPattern' &&
				this.parent.left.type === 'Identifier'
			) {
				isSimpleAssignment = true;
				name = this.parent.left.alias || this.parent.left.name; // TODO is this right?
			}

			if (spreadPropertyCount) { isSimpleAssignment = false; }

			// handle block scoping
			name = this.findScope(false).resolveName(name);

			var start = firstPropertyStart;
			var end = this.end;

			if (isSimpleAssignment) {
				// ???
			} else {
				if (
					firstSpreadProperty === null ||
					firstComputedProperty < firstSpreadProperty
				) {
					name = this.findScope(true).createDeclaration('obj');

					code.prependRight(this.start, `( ${name} = `);
				} else { name = null; } // We don't actually need this variable
			}

			var len = this.properties.length;
			var lastComputedProp;
			var sawNonComputedProperty = false;
			var isFirst = true;

			for (var i$2 = 0; i$2 < len; i$2 += 1) {
				var prop$2 = this.properties[i$2];
				var moveStart = i$2 > 0 ? this.properties[i$2 - 1].end : start;

				if (
					prop$2.type === 'Property' &&
					(prop$2.computed || (lastComputedProp && !spreadPropertyCount))
				) {
					if (i$2 === 0) { moveStart = this.start + 1; } // Trim leading whitespace
					lastComputedProp = prop$2;

					if (!name) {
						name = this.findScope(true).createDeclaration('obj');

						var propId = name + (prop$2.computed ? '' : '.');
						code.appendRight(prop$2.start, `( ${name} = {}, ${propId}`);
					} else {
						var propId$1 =
							(isSimpleAssignment ? `;\n${i0}${name}` : `, ${name}`) +
							(prop$2.key.type === 'Literal' || prop$2.computed ? '' : '.');

						if (moveStart < prop$2.start) {
							code.overwrite(moveStart, prop$2.start, propId$1);
						} else {
							code.prependRight(prop$2.start, propId$1);
						}
					}

					var c = prop$2.key.end;
					if (prop$2.computed) {
						while (code.original[c] !== ']') { c += 1; }
						c += 1;
					}
					if (prop$2.key.type === 'Literal' && !prop$2.computed) {
						code.overwrite(
							prop$2.start,
							prop$2.key.end + 1,
							'[' + code.slice(prop$2.start, prop$2.key.end) + '] = '
						);
					} else if (prop$2.shorthand || (prop$2.method && !prop$2.computed && transforms.conciseMethodProperty)) {
						// Replace : with = if Property::transpile inserted the :
						code.overwrite(
							prop$2.key.start,
							prop$2.key.end,
							code.slice(prop$2.key.start, prop$2.key.end).replace(/:/, ' =')
						);
					} else {
						if (prop$2.value.start > c) { code.remove(c, prop$2.value.start); }
						code.prependLeft(c, ' = ');
					}

					// This duplicates behavior from Property::transpile which is disabled
					// for computed properties or if conciseMethodProperty is false
					if (prop$2.method && (prop$2.computed || !transforms.conciseMethodProperty)) {
						if (prop$2.value.generator) { code.remove(prop$2.start, prop$2.key.start); }
						code.prependRight(prop$2.value.start, `function${prop$2.value.generator ? '*' : ''} `);
					}
				} else if (prop$2.type === 'SpreadElement') {
					if (name && i$2 > 0) {
						if (!lastComputedProp) {
							lastComputedProp = this.properties[i$2 - 1];
						}
						code.appendLeft(lastComputedProp.end, `, ${name} )`);

						lastComputedProp = null;
						name = null;
					}
				} else {
					if (!isFirst && spreadPropertyCount) {
						// We are in an Object.assign context, so we need to wrap regular properties
						code.prependRight(prop$2.start, '{');
						code.appendLeft(prop$2.end, '}');
					}
					sawNonComputedProperty = true;
				}
				if (isFirst && (prop$2.type === 'SpreadElement' || prop$2.computed)) {
					var beginEnd = sawNonComputedProperty
						? this.properties[this.properties.length - 1].end
						: this.end - 1;
					// Trim trailing comma because it can easily become a leading comma which is illegal
					if (code.original[beginEnd] == ',') { ++beginEnd; }
					var closing = code.slice(beginEnd, end);
					code.prependLeft(moveStart, closing);
					code.remove(beginEnd, end);
					isFirst = false;
				}

				// Clean up some extranous whitespace
				var c$1 = prop$2.end;
				if (i$2 < len - 1 && !sawNonComputedProperty) {
					while (code.original[c$1] !== ',') { c$1 += 1; }
				} else if (i$2 == len - 1) { c$1 = this.end; }
				code.remove(prop$2.end, c$1);
			}

			// special case
			if (computedPropertyCount === len) {
				code.remove(this.properties[len - 1].end, this.end - 1);
			}

			if (!isSimpleAssignment && name) {
				code.appendLeft(lastComputedProp.end, `, ${name} )`);
			}
		}
	}
}

class Property extends Node {
	transpile(code, transforms) {
		super.transpile(code, transforms);

		if (
			transforms.conciseMethodProperty &&
			!this.computed &&
			this.parent.type !== 'ObjectPattern'
		) {
			if (this.shorthand) {
				code.prependRight(this.start, `${this.key.name}: `);
			} else if (this.method) {
				var name = '';
				if (this.program.options.namedFunctionExpressions !== false) {
					if (
						this.key.type === 'Literal' &&
						typeof this.key.value === 'number'
					) {
						name = '';
					} else if (this.key.type === 'Identifier') {
						if (
							reserved[this.key.name] ||
							!/^[a-z_$][a-z0-9_$]*$/i.test(this.key.name) ||
							this.value.body.scope.references[this.key.name]
						) {
							name = this.findScope(true).createIdentifier(this.key.name);
						} else {
							name = this.key.name;
						}
					} else {
						name = this.findScope(true).createIdentifier(this.key.value);
					}
					name = ' ' + name;
				}

				if (this.value.generator) { code.remove(this.start, this.key.start); }
				code.appendLeft(
					this.key.end,
					`: function${this.value.generator ? '*' : ''}${name}`
				);
			}
		}

		if (transforms.reservedProperties && reserved[this.key.name]) {
			code.prependRight(this.key.start, `'`);
			code.appendLeft(this.key.end, `'`);
		}
	}
}

class ReturnStatement extends Node {
	initialise(transforms) {
		this.loop = this.findNearest(loopStatement);
		this.nearestFunction = this.findNearest(/Function/);

		if (
			this.loop &&
			(!this.nearestFunction || this.loop.depth > this.nearestFunction.depth)
		) {
			this.loop.canReturn = true;
			this.shouldWrap = true;
		}

		if (this.argument) { this.argument.initialise(transforms); }
	}

	transpile(code, transforms) {
		var shouldWrap =
			this.shouldWrap && this.loop && this.loop.shouldRewriteAsFunction;

		if (this.argument) {
			if (shouldWrap) { code.prependRight(this.argument.start, `{ v: `); }
			this.argument.transpile(code, transforms);
			if (shouldWrap) { code.appendLeft(this.argument.end, ` }`); }
		} else if (shouldWrap) {
			code.appendLeft(this.start + 6, ' {}');
		}
	}
}

class SpreadElement extends Node {
	transpile(code, transforms) {
		if (this.parent.type == 'ObjectExpression') {
			code.remove(this.start, this.argument.start);
			code.remove(this.argument.end, this.end);
		}

		super.transpile(code, transforms);
	}
}

class Super extends Node {
	initialise(transforms) {
		if (transforms.classes) {
			this.method = this.findNearest('MethodDefinition');
			if (!this.method)
				{ throw new CompileError('use of super outside class method', this); }

			var parentClass = this.findNearest('ClassBody').parent;
			this.superClassName =
				parentClass.superClass && (parentClass.superClass.name || 'superclass');

			if (!this.superClassName)
				{ throw new CompileError('super used in base class', this); }

			this.isCalled =
				this.parent.type === 'CallExpression' && this === this.parent.callee;

			if (this.method.kind !== 'constructor' && this.isCalled) {
				throw new CompileError(
					'super() not allowed outside class constructor',
					this
				);
			}

			this.isMember = this.parent.type === 'MemberExpression';

			if (!this.isCalled && !this.isMember) {
				throw new CompileError(
					'Unexpected use of `super` (expected `super(...)` or `super.*`)',
					this
				);
			}
		}

		if (transforms.arrow) {
			var lexicalBoundary = this.findLexicalBoundary();
			var arrowFunction = this.findNearest('ArrowFunctionExpression');
			var loop = this.findNearest(loopStatement);

			if (arrowFunction && arrowFunction.depth > lexicalBoundary.depth) {
				this.thisAlias = lexicalBoundary.getThisAlias();
			}

			if (
				loop &&
				loop.body.contains(this) &&
				loop.depth > lexicalBoundary.depth
			) {
				this.thisAlias = lexicalBoundary.getThisAlias();
			}
		}
	}

	transpile(code, transforms) {
		if (transforms.classes) {
			var expression =
				this.isCalled || this.method.static
					? this.superClassName
					: `${this.superClassName}.prototype`;

			code.overwrite(this.start, this.end, expression, {
				storeName: true,
				contentOnly: true
			});

			var callExpression = this.isCalled ? this.parent : this.parent.parent;

			if (callExpression && callExpression.type === 'CallExpression') {
				if (!this.noCall) {
					// special case – `super( ...args )`
					code.appendLeft(callExpression.callee.end, '.call');
				}

				var thisAlias = this.thisAlias || 'this';

				if (callExpression.arguments.length) {
					code.appendLeft(callExpression.arguments[0].start, `${thisAlias}, `);
				} else {
					code.appendLeft(callExpression.end - 1, `${thisAlias}`);
				}
			}
		}
	}
}

class TaggedTemplateExpression extends Node {
	initialise(transforms) {
		if (
			transforms.templateString &&
			!transforms.dangerousTaggedTemplateString
		) {
			throw new CompileError(
				"Tagged template strings are not supported. Use `transforms: { templateString: false }` to skip transformation and disable this error, or `transforms: { dangerousTaggedTemplateString: true }` if you know what you're doing",
				this
			);
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (transforms.templateString && transforms.dangerousTaggedTemplateString) {
			var ordered = this.quasi.expressions
				.concat(this.quasi.quasis)
				.sort((a, b) => a.start - b.start);

			var program = this.program;
			var rootScope = program.body.scope;

			// insert strings at start
			var templateStrings = this.quasi.quasis.map(quasi =>
				JSON.stringify(quasi.value.cooked)
			).join(', ');

			var templateObject = this.program.templateLiteralQuasis[templateStrings];
			if (!templateObject) {
				templateObject = rootScope.createIdentifier('templateObject');
				code.prependRight(this.program.prependAt, `var ${templateObject} = Object.freeze([${templateStrings}]);\n`);

				this.program.templateLiteralQuasis[templateStrings] = templateObject;
			}

			code.overwrite(
				this.tag.end,
				ordered[0].start,
				`(${templateObject}`
			);

			var lastIndex = ordered[0].start;
			ordered.forEach(node => {
				if (node.type === 'TemplateElement') {
					code.remove(lastIndex, node.end);
				} else {
					code.overwrite(lastIndex, node.start, ', ');
				}

				lastIndex = node.end;
			});

			code.overwrite(lastIndex, this.end, ')');
		}

		super.transpile(code, transforms);
	}
}

class TemplateElement extends Node {
	initialise() {
		this.program.indentExclusionElements.push(this);
	}
}

class TemplateLiteral extends Node {
	transpile(code, transforms) {
		super.transpile(code, transforms);

		if (
			transforms.templateString &&
			this.parent.type !== 'TaggedTemplateExpression'
		) {
			var ordered = this.expressions
				.concat(this.quasis)
				.sort((a, b) => a.start - b.start || a.end - b.end)
				.filter((node, i) => {
					// include all expressions
					if (node.type !== 'TemplateElement') { return true; }

					// include all non-empty strings
					if (node.value.raw) { return true; }

					// exclude all empty strings not at the head
					return !i;
				});

			// special case – we may be able to skip the first element,
			// if it's the empty string, but only if the second and
			// third elements aren't both expressions (since they maybe
			// be numeric, and `1 + 2 + '3' === '33'`)
			if (ordered.length >= 3) {
				var first = ordered[0];
				var third = ordered[2];
				if (
					first.type === 'TemplateElement' &&
					first.value.raw === '' &&
					third.type === 'TemplateElement'
				) {
					ordered.shift();
				}
			}

			var parenthesise =
				(this.quasis.length !== 1 || this.expressions.length !== 0) &&
				this.parent.type !== 'TemplateLiteral' &&
				this.parent.type !== 'AssignmentExpression' &&
				this.parent.type !== 'AssignmentPattern' &&
				this.parent.type !== 'VariableDeclarator' &&
				(this.parent.type !== 'BinaryExpression' ||
					this.parent.operator !== '+');

			if (parenthesise) { code.appendRight(this.start, '('); }

			var lastIndex = this.start;

			ordered.forEach((node, i) => {
				var prefix = i === 0 ? (parenthesise ? '(' : '') : ' + ';

				if (node.type === 'TemplateElement') {
					code.overwrite(
						lastIndex,
						node.end,
						prefix + JSON.stringify(node.value.cooked)
					);
				} else {
					var parenthesise$1 = node.type !== 'Identifier'; // TODO other cases where it's safe

					if (parenthesise$1) { prefix += '('; }

					code.remove(lastIndex, node.start);

					if (prefix) { code.prependRight(node.start, prefix); }
					if (parenthesise$1) { code.appendLeft(node.end, ')'); }
				}

				lastIndex = node.end;
			});

			if (parenthesise) { code.appendLeft(lastIndex, ')'); }
			code.overwrite(lastIndex, this.end, "", { contentOnly: true } );
		}
	}
}

class ThisExpression extends Node {
	initialise(transforms) {
		if (transforms.arrow) {
			var lexicalBoundary = this.findLexicalBoundary();
			var arrowFunction = this.findNearest('ArrowFunctionExpression');
			var loop = this.findNearest(loopStatement);

			if (
				(arrowFunction && arrowFunction.depth > lexicalBoundary.depth) ||
				(loop &&
					loop.body.contains(this) &&
					loop.depth > lexicalBoundary.depth) ||
				(loop && loop.right && loop.right.contains(this))
			) {
				this.alias = lexicalBoundary.getThisAlias();
			}
		}
	}

	transpile(code) {
		if (this.alias) {
			code.overwrite(this.start, this.end, this.alias, {
				storeName: true,
				contentOnly: true
			});
		}
	}
}

class UpdateExpression extends Node {
	initialise(transforms) {
		if (this.argument.type === 'Identifier') {
			var declaration = this.findScope(false).findDeclaration(
				this.argument.name
			);
			// special case – https://gitlab.com/Rich-Harris/buble/issues/150
			var statement = declaration && declaration.node.ancestor(3);
			if (
				statement &&
				statement.type === 'ForStatement' &&
				statement.body.contains(this)
			) {
				statement.reassigned[this.argument.name] = true;
			}
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (this.argument.type === 'Identifier') {
			// Do this check after everything has been initialized to find
			// shadowing declarations after this expression
			checkConst(this.argument, this.findScope(false));
		}
		super.transpile(code, transforms);
	}
}

class VariableDeclaration extends Node {
	initialise(transforms) {
		this.scope = this.findScope(this.kind === 'var');
		this.declarations.forEach(declarator => declarator.initialise(transforms));
	}

	transpile(code, transforms) {
		var i0 = this.getIndentation();
		var kind = this.kind;

		if (transforms.letConst && kind !== 'var') {
			kind = 'var';
			code.overwrite(this.start, this.start + this.kind.length, kind, {
				storeName: true
			});
		}

		if (transforms.destructuring && this.parent.type !== 'ForOfStatement' && this.parent.type !== 'ForInStatement') {
			var c = this.start;
			var lastDeclaratorIsPattern;

			this.declarations.forEach((declarator, i) => {
				declarator.transpile(code, transforms);

				if (declarator.id.type === 'Identifier') {
					if (i > 0 && this.declarations[i - 1].id.type !== 'Identifier') {
						code.overwrite(c, declarator.id.start, `var `);
					}
				} else {
					var inline = loopStatement.test(this.parent.type);

					if (i === 0) {
						code.remove(c, declarator.id.start);
					} else {
						code.overwrite(c, declarator.id.start, `;\n${i0}`);
					}

					var simple =
						declarator.init.type === 'Identifier' && !declarator.init.rewritten;

					var name = simple
						? (declarator.init.alias || declarator.init.name)
						: declarator.findScope(true).createIdentifier('ref');

					c = declarator.start;

					var statementGenerators = [];

					if (simple) {
						code.remove(declarator.id.end, declarator.end);
					} else {
						statementGenerators.push((start, prefix, suffix) => {
							code.prependRight(declarator.id.end, `var ${name}`);
							code.appendLeft(declarator.init.end, `${suffix}`);
							code.move(declarator.id.end, declarator.end, start);
						});
					}

					var scope = declarator.findScope(false);
					destructure(
						code,
						id => scope.createIdentifier(id),
						(ref) => {
							var name = ref.name;

							return scope.resolveName(name);
					},
						declarator.id,
						name,
						inline,
						statementGenerators
					);

					var prefix = inline ? 'var ' : '';
					var suffix = inline ? `, ` : `;\n${i0}`;
					statementGenerators.forEach((fn, j) => {
						if (
							i === this.declarations.length - 1 &&
							j === statementGenerators.length - 1
						) {
							suffix = inline ? '' : ';';
						}

						fn(declarator.start, j === 0 ? prefix : '', suffix);
					});
				}

				c = declarator.end;
				lastDeclaratorIsPattern = declarator.id.type !== 'Identifier';
			});

			if (lastDeclaratorIsPattern && this.end > c) {
				code.overwrite(c, this.end, '', { contentOnly: true });
			}
		} else {
			this.declarations.forEach(declarator => {
				declarator.transpile(code, transforms);
			});
		}
	}
}

class VariableDeclarator extends Node {
	initialise(transforms) {
		var kind = this.parent.kind;
		if (kind === 'let' && this.parent.parent.type === 'ForStatement') {
			kind = 'for.let'; // special case...
		}

		this.parent.scope.addDeclaration(this.id, kind);
		super.initialise(transforms);
	}

	transpile(code, transforms) {
		if (!this.init && transforms.letConst && this.parent.kind !== 'var') {
			var inLoop = this.findNearest(
				/Function|^For(In|Of)?Statement|^(?:Do)?WhileStatement/
			);
			if (
				inLoop &&
				!/Function/.test(inLoop.type) &&
				!this.isLeftDeclaratorOfLoop()
			) {
				code.appendLeft(this.id.end, ' = (void 0)');
			}
		}

		if (this.id) { this.id.transpile(code, transforms); }
		if (this.init) { this.init.transpile(code, transforms); }
	}

	isLeftDeclaratorOfLoop() {
		return (
			this.parent &&
			this.parent.type === 'VariableDeclaration' &&
			this.parent.parent &&
			(this.parent.parent.type === 'ForInStatement' ||
				this.parent.parent.type === 'ForOfStatement') &&
			this.parent.parent.left &&
			this.parent.parent.left.declarations[0] === this
		);
	}
}

var types = {
	ArrayExpression,
	ArrowFunctionExpression,
	AssignmentExpression,
	BinaryExpression,
	BreakStatement,
	CallExpression,
	ClassBody,
	ClassDeclaration,
	ClassExpression,
	ContinueStatement,
	DoWhileStatement: LoopStatement,
	ExportNamedDeclaration,
	ExportDefaultDeclaration,
	ForStatement,
	ForInStatement,
	ForOfStatement,
	FunctionDeclaration,
	FunctionExpression,
	Identifier,
	IfStatement,
	ImportDeclaration,
	ImportDefaultSpecifier,
	ImportSpecifier,
	JSXAttribute,
	JSXClosingElement,
	JSXClosingFragment,
	JSXElement,
	JSXExpressionContainer,
	JSXFragment,
	JSXOpeningElement,
	JSXOpeningFragment,
	JSXSpreadAttribute,
	Literal,
	MemberExpression,
	NewExpression,
	ObjectExpression,
	Property,
	ReturnStatement,
	SpreadElement,
	Super,
	TaggedTemplateExpression,
	TemplateElement,
	TemplateLiteral,
	ThisExpression,
	UpdateExpression,
	VariableDeclaration,
	VariableDeclarator,
	WhileStatement: LoopStatement
};

var keys = {
	Program: ['body'],
	Literal: []
};

var statementsWithBlocks = {
	IfStatement: 'consequent',
	ForStatement: 'body',
	ForInStatement: 'body',
	ForOfStatement: 'body',
	WhileStatement: 'body',
	DoWhileStatement: 'body',
	ArrowFunctionExpression: 'body'
};

function wrap(raw, parent) {
	if (!raw) { return; }

	if ('length' in raw) {
		var i = raw.length;
		while (i--) { wrap(raw[i], parent); }
		return;
	}

	// with e.g. shorthand properties, key and value are
	// the same node. We don't want to wrap an object twice
	if (raw.__wrapped) { return; }
	raw.__wrapped = true;

	if (!keys[raw.type]) {
		keys[raw.type] = Object.keys(raw).filter(
			key => typeof raw[key] === 'object'
		);
	}

	// special case – body-less if/for/while statements. TODO others?
	var bodyType = statementsWithBlocks[raw.type];
	if (bodyType && raw[bodyType].type !== 'BlockStatement') {
		var expression = raw[bodyType];

		// create a synthetic block statement, otherwise all hell
		// breaks loose when it comes to block scoping
		raw[bodyType] = {
			start: expression.start,
			end: expression.end,
			type: 'BlockStatement',
			body: [expression],
			synthetic: true
		};
	}

	raw.parent = parent;
	raw.program = parent.program || parent;
	raw.depth = parent.depth + 1;
	raw.keys = keys[raw.type];
	raw.indentation = undefined;

	for (var i$1 = 0, list = keys[raw.type]; i$1 < list.length; i$1 += 1) {
		var key = list[i$1];

		wrap(raw[key], raw);
	}

	raw.program.magicString.addSourcemapLocation(raw.start);
	raw.program.magicString.addSourcemapLocation(raw.end);

	var type =
		(raw.type === 'BlockStatement' ? BlockStatement : types[raw.type]) || Node;
	raw.__proto__ = type.prototype;
}

function Program(source, ast, transforms, options) {
	this.type = 'Root';

	// options
	this.jsx = options.jsx || 'React.createElement';
	this.options = options;

	this.source = source;
	this.magicString = new MagicString(source);

	this.ast = ast;
	this.depth = 0;

	wrap((this.body = ast), this);
	this.body.__proto__ = BlockStatement.prototype;

	this.templateLiteralQuasis = Object.create(null);
	for (var i = 0; i < this.body.body.length; ++i) {
		if (!this.body.body[i].directive) {
			this.prependAt = this.body.body[i].start;
			break;
		}
	}
	this.objectWithoutPropertiesHelper = null;

	this.indentExclusionElements = [];
	this.body.initialise(transforms);

	this.indentExclusions = Object.create(null);
	for (var i$2 = 0, list = this.indentExclusionElements; i$2 < list.length; i$2 += 1) {
		var node = list[i$2];

		for (var i$1 = node.start; i$1 < node.end; i$1 += 1) {
			this.indentExclusions[i$1] = true;
		}
	}

	this.body.transpile(this.magicString, transforms);
}

Program.prototype = {
	export(options) {
		if ( options === void 0 ) options = {};

		return {
			code: this.magicString.toString(),
			map: this.magicString.generateMap({
				file: options.file,
				source: options.source,
				includeContent: options.includeContent !== false
			})
		};
	},

	findNearest() {
		return null;
	},

	findScope() {
		return null;
	},

	getObjectWithoutPropertiesHelper(code) {
		if (!this.objectWithoutPropertiesHelper) {
			this.objectWithoutPropertiesHelper = this.body.scope.createIdentifier('objectWithoutProperties');
			code.prependLeft(this.prependAt, `function ${this.objectWithoutPropertiesHelper} (obj, exclude) { ` +
				`var target = {}; for (var k in obj) ` +
				`if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) ` +
				`target[k] = obj[k]; return target; }\n`
			);
		}
		return this.objectWithoutPropertiesHelper;
	}
};

var matrix = {
	chrome: {
		    48: 0b01001010100011001101,
		    49: 0b01001111100111111111,
		    50: 0b01011111100111111111,
		    51: 0b01011111100111111111,
		    52: 0b01111111100111111111,
		    53: 0b01111111100111111111,
		    54: 0b01111111100111111111,
		    55: 0b01111111100111111111,
		    56: 0b01111111100111111111,
		    57: 0b01111111100111111111,
		    58: 0b11111111100111111111,
		    59: 0b11111111100111111111,
		    60: 0b11111111100111111111,
		    61: 0b11111111100111111111,
		    62: 0b11111111100111111111,
		    63: 0b11111111100111111111
	},
	firefox: {
		    43: 0b01001111100011011101,
		    44: 0b01001111100111011101,
		    45: 0b01001111100111011111,
		    46: 0b01011111100111011111,
		    47: 0b01011111100111111111,
		    48: 0b01011111100111111111,
		    49: 0b01011110100111111111,
		    50: 0b01011110100111111111,
		    51: 0b01011110100111111111,
		    52: 0b11111111100111111111,
		    53: 0b11111111100111111111,
		    54: 0b11111111100111111111,
		    55: 0b11111111100111111111,
		    56: 0b11111111100111111111,
		    57: 0b11111111100111111111,
		    58: 0b11111111100111111111
	},
	safari: {
		     8: 0b01000000000000000100,
		     9: 0b01001001100001101110,
		    10: 0b11011111100111111111,
		'10.1': 0b11111111100111111111,
		    11: 0b11111111100111111111
	},
	ie: {
		     8: 0b00000000000000000000,
		     9: 0b01000000000000000000,
		    10: 0b01000000000000000000,
		    11: 0b01000000000100000000
	},
	edge: {
		    12: 0b01001010100101001101,
		    13: 0b01011110100111001111,
		    14: 0b11111110100111111111,
		    15: 0b11111110100111111111,
		    16: 0b11111110100111111111
	},
	node: {
		'0.10': 0b01000000000000000000,
		'0.12': 0b01000000000001000000,
		     4: 0b01001000100011001111,
		     5: 0b01001000100011001111,
		     6: 0b01011111100111111111,
		     8: 0b11111111100111111111,
		 '8.3': 0b11111111100111111111,
		 '8.7': 0b11111111100111111111
	}
};

var features = [
	'arrow',
	'classes',
	'computedProperty',
	'conciseMethodProperty',
	'defaultParameter',
	'destructuring',
	'forOf',
	'generator',
	'letConst',
	'moduleExport',
	'moduleImport',
	'numericLiteral',
	'parameterDestructuring',
	'spreadRest',
	'stickyRegExp',
	'templateString',
	'unicodeRegExp',

	// ES2016
	'exponentiation',

	// additional transforms, not from
	// https://featuretests.io
	'reservedProperties',

	'trailingFunctionCommas'
];

var version = "0.19.3";

var ref = [inject, acornDynamicImport].reduce(
	(final, plugin) => plugin(final),
	acorn
);
var parse = ref.parse;

var dangerousTransforms = ['dangerousTaggedTemplateString', 'dangerousForOf'];

function target(target) {
	var targets = Object.keys(target);
	var bitmask = targets.length
		? 0b11111111111111111111
		: 0b01000000000000000000;

	Object.keys(target).forEach(environment => {
		var versions = matrix[environment];
		if (!versions)
			{ throw new Error(
				`Unknown environment '${environment}'. Please raise an issue at https://github.com/Rich-Harris/buble/issues`
			); }

		var targetVersion = target[environment];
		if (!(targetVersion in versions))
			{ throw new Error(
				`Support data exists for the following versions of ${environment}: ${Object.keys(
					versions
				).join(
					', '
				)}. Please raise an issue at https://github.com/Rich-Harris/buble/issues`
			); }
		var support = versions[targetVersion];

		bitmask &= support;
	});

	var transforms = Object.create(null);
	features.forEach((name, i) => {
		transforms[name] = !(bitmask & (1 << i));
	});

	dangerousTransforms.forEach(name => {
		transforms[name] = false;
	});

	return transforms;
}

function transform(source, options) {
	if ( options === void 0 ) options = {};

	var ast;
	var jsx = null;

	try {
		ast = parse(source, {
			ecmaVersion: 9,
			preserveParens: true,
			sourceType: 'module',
			onComment: (block, text) => {
				if (!jsx) {
					var match = /@jsx\s+([^\s]+)/.exec(text);
					if (match) { jsx = match[1]; }
				}
			},
			plugins: {
				jsx: true,
				dynamicImport: true
			}
		});
		options.jsx = jsx || options.jsx;
	} catch (err) {
		err.snippet = getSnippet(source, err.loc);
		err.toString = () => `${err.name}: ${err.message}\n${err.snippet}`;
		throw err;
	}

	var transforms = target(options.target || {});
	Object.keys(options.transforms || {}).forEach(name => {
		if (name === 'modules') {
			if (!('moduleImport' in options.transforms))
				{ transforms.moduleImport = options.transforms.modules; }
			if (!('moduleExport' in options.transforms))
				{ transforms.moduleExport = options.transforms.modules; }
			return;
		}

		if (!(name in transforms)) { throw new Error(`Unknown transform '${name}'`); }
		transforms[name] = options.transforms[name];
	});

	return new Program(source, ast, transforms, options).export(options);
}

export { target, transform, version as VERSION };
//# sourceMappingURL=buble.es.js.map
