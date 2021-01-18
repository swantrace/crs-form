// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../mnt/c/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../mnt/c/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../mnt/c/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/bootstrap/dist/css/bootstrap.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/glyphicons-halflings-regular.eot":[["glyphicons-halflings-regular.04151f20.eot","../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot"],"../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot"],"./../fonts/glyphicons-halflings-regular.woff2":[["glyphicons-halflings-regular.253e6fd2.woff2","../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2"],"../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2"],"./../fonts/glyphicons-halflings-regular.woff":[["glyphicons-halflings-regular.ef6ff720.woff","../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff"],"../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff"],"./../fonts/glyphicons-halflings-regular.ttf":[["glyphicons-halflings-regular.1a7b212e.ttf","../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf"],"../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf"],"./../fonts/glyphicons-halflings-regular.svg":[["glyphicons-halflings-regular.0e3a849d.svg","../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg"],"../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg"],"_css_loader":"../../../../../mnt/c/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/lodash.inrange/index.js":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

module.exports = inRange;

},{}],"../node_modules/lodash.maxby/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;

},{}],"constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAN_TEST_SCORE_CLB_RELATIONS = exports.LAN_TEST_SUBJECTS = exports.FRENCH_TEST_TYPES = exports.ENGLISH_TEST_TYPES = exports.LAN_TEST_TYPES = exports.FRENCH_ADDITIONAL_SCORE = exports.OVERSEASEXP_TRANSFER_SCORE = exports.EDU_TRANSFER_SCORE = exports.SPOUSE_EXP_SCORE = exports.MARRIED_EXP_SCORE = exports.SINGLE_EXP_SCORE = exports.SPOUSE_LAN_SCORE = exports.SECOND_LAN_SCORE = exports.MARRIED_FIRST_LAN_SCORE = exports.SINGLE_FIRST_LAN_SCORE = exports.TCF_SCORE_RANGE = exports.TEF_SCORE_RANGE = exports.CELPIP_SCORE_RANGE = exports.IETLS_SCORE_RANGE = exports.PROVINCIAL_NOMINEE_SCORE = exports.SIBLING_SCORE = exports.CANADA_EDU_SCORE = exports.CANADA_EDU_DEGREES = exports.EMPLOYER_SCORE = exports.EMPLOYER_TYPES = exports.SPOUSE_EDU_SCORE = exports.MARRIED_EDU_SCORE = exports.SINGLE_EDU_SCORE = exports.EDU_LEVELS = exports.MARRIED_AGE_SCORE = exports.SINGLE_AGE_SCORE = void 0;

var _lodash = _interopRequireDefault(require("lodash.inrange"));

var _LAN_TEST_TYPES$, _LAN_TEST_TYPES$2, _LAN_TEST_TYPES$3, _LAN_TEST_TYPES$4, _LAN_TEST_SCORE_CLB_R;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SINGLE_AGE_SCORE = [[18, 99], [19, 105], [20, 110], [21, 110], [22, 110], [23, 110], [24, 110], [25, 110], [26, 110], [27, 110], [28, 110], [29, 110], [30, 105], [31, 99], [32, 94], [33, 88], [34, 83], [35, 77], [36, 72], [37, 66], [38, 61], [39, 55], [40, 50], [41, 39], [42, 28], [43, 17], [44, 6]];
exports.SINGLE_AGE_SCORE = SINGLE_AGE_SCORE;
var MARRIED_AGE_SCORE = [[18, 90], [19, 95], [20, 100], [21, 100], [22, 100], [23, 100], [24, 100], [25, 100], [26, 100], [27, 100], [28, 100], [29, 100], [30, 95], [31, 90], [32, 85], [33, 80], [34, 75], [35, 70], [36, 65], [37, 60], [38, 55], [39, 50], [40, 45], [41, 35], [42, 25], [43, 15], [44, 5]];
exports.MARRIED_AGE_SCORE = MARRIED_AGE_SCORE;
var EDU_LEVELS = ['高中以下', '高中', '1年大专', '2年大专', '3年以上大专或本科', '双专业（3年以上+1年以上）', '硕士学位或专业学位（如医学博士）', '博士学位'];
exports.EDU_LEVELS = EDU_LEVELS;
var SINGLE_EDU_SCORE = [[EDU_LEVELS[0], 0], [EDU_LEVELS[1], 30], [EDU_LEVELS[2], 90], [EDU_LEVELS[3], 98], [EDU_LEVELS[4], 120], [EDU_LEVELS[5], 128], [EDU_LEVELS[6], 135], [EDU_LEVELS[7], 150]];
exports.SINGLE_EDU_SCORE = SINGLE_EDU_SCORE;
var MARRIED_EDU_SCORE = [[EDU_LEVELS[0], 0], [EDU_LEVELS[1], 28], [EDU_LEVELS[2], 84], [EDU_LEVELS[3], 91], [EDU_LEVELS[4], 112], [EDU_LEVELS[5], 119], [EDU_LEVELS[6], 126], [EDU_LEVELS[7], 140]];
exports.MARRIED_EDU_SCORE = MARRIED_EDU_SCORE;
var SPOUSE_EDU_SCORE = [[EDU_LEVELS[0], 0], [EDU_LEVELS[1], 2], [EDU_LEVELS[2], 6], [EDU_LEVELS[3], 7], [EDU_LEVELS[4], 8], [EDU_LEVELS[5], 9], [EDU_LEVELS[6], 10], [EDU_LEVELS[7], 10]];
exports.SPOUSE_EDU_SCORE = SPOUSE_EDU_SCORE;
var EMPLOYER_TYPES = ['我有00类的雇主担保', '我有其他类的雇主担保', '没有雇主担保'];
exports.EMPLOYER_TYPES = EMPLOYER_TYPES;
var EMPLOYER_SCORE = [[EMPLOYER_TYPES[0], 200], [EMPLOYER_TYPES[1], 50], [EMPLOYER_TYPES[2], 0]];
exports.EMPLOYER_SCORE = EMPLOYER_SCORE;
var CANADA_EDU_DEGREES = ['我有学制3年以上的加拿大学历，或者加拿大的硕士、博士学历', '我有学制1-2年的的加拿大学历', '没有上述学历'];
exports.CANADA_EDU_DEGREES = CANADA_EDU_DEGREES;
var CANADA_EDU_SCORE = [[CANADA_EDU_DEGREES[0], 30], [CANADA_EDU_DEGREES[1], 15], [CANADA_EDU_DEGREES[2], 0]];
exports.CANADA_EDU_SCORE = CANADA_EDU_SCORE;
var SIBLING_SCORE = 15;
exports.SIBLING_SCORE = SIBLING_SCORE;
var PROVINCIAL_NOMINEE_SCORE = 600;
exports.PROVINCIAL_NOMINEE_SCORE = PROVINCIAL_NOMINEE_SCORE;
var IETLS_SCORE_RANGE = {
  listen: [0, 9],
  speak: [0, 9],
  read: [0, 9],
  write: [0, 9]
};
exports.IETLS_SCORE_RANGE = IETLS_SCORE_RANGE;
var CELPIP_SCORE_RANGE = {
  listen: [0, 10],
  speak: [0, 10],
  read: [0, 10],
  write: [0, 10]
};
exports.CELPIP_SCORE_RANGE = CELPIP_SCORE_RANGE;
var TEF_SCORE_RANGE = {
  listen: [0, 360],
  speak: [0, 450],
  read: [0, 300],
  write: [0, 450]
};
exports.TEF_SCORE_RANGE = TEF_SCORE_RANGE;
var TCF_SCORE_RANGE = {
  listen: [0, 699],
  speak: [0, 20],
  read: [0, 699],
  write: [0, 20]
};
exports.TCF_SCORE_RANGE = TCF_SCORE_RANGE;
var SINGLE_FIRST_LAN_SCORE = [[4, 6], [5, 6], [6, 9], [7, 17], [8, 23], [9, 31], [10, 34]];
exports.SINGLE_FIRST_LAN_SCORE = SINGLE_FIRST_LAN_SCORE;
var MARRIED_FIRST_LAN_SCORE = [[4, 6], [5, 6], [6, 8], [7, 16], [8, 22], [9, 29], [10, 32]];
exports.MARRIED_FIRST_LAN_SCORE = MARRIED_FIRST_LAN_SCORE;
var SECOND_LAN_SCORE = [[5, 1], [6, 1], [7, 3], [8, 3], [9, 6], [10, 6]];
exports.SECOND_LAN_SCORE = SECOND_LAN_SCORE;
var SPOUSE_LAN_SCORE = [[5, 1], [6, 1], [7, 3], [8, 3], [9, 5], [10, 5]];
exports.SPOUSE_LAN_SCORE = SPOUSE_LAN_SCORE;
var SINGLE_EXP_SCORE = [[1, 40], [2, 53], [3, 64], [4, 72], [5, 80]];
exports.SINGLE_EXP_SCORE = SINGLE_EXP_SCORE;
var MARRIED_EXP_SCORE = [[1, 35], [2, 46], [3, 56], [4, 63], [5, 70]];
exports.MARRIED_EXP_SCORE = MARRIED_EXP_SCORE;
var SPOUSE_EXP_SCORE = [[1, 5], [2, 7], [3, 8], [4, 9], [5, 10]];
exports.SPOUSE_EXP_SCORE = SPOUSE_EXP_SCORE;
var EDU_TRANSFER_SCORE = [[0, 0], [1, 13], [2, 25], [3, -1], [4, 50]];
exports.EDU_TRANSFER_SCORE = EDU_TRANSFER_SCORE;
var OVERSEASEXP_TRANSFER_SCORE = [[0, 0], [1, 13], [2, 25], [3, -1], [4, 50]];
exports.OVERSEASEXP_TRANSFER_SCORE = OVERSEASEXP_TRANSFER_SCORE;
var FRENCH_ADDITIONAL_SCORE = [[0, 0], [1, 25], [2, 50]];
exports.FRENCH_ADDITIONAL_SCORE = FRENCH_ADDITIONAL_SCORE;
var LAN_TEST_TYPES = ['雅思培训类', '思陪（CELPIP）', 'TEF', 'TCF'];
exports.LAN_TEST_TYPES = LAN_TEST_TYPES;
var ENGLISH_TEST_TYPES = [LAN_TEST_TYPES[0], LAN_TEST_TYPES[1]];
exports.ENGLISH_TEST_TYPES = ENGLISH_TEST_TYPES;
var FRENCH_TEST_TYPES = [LAN_TEST_TYPES[2], LAN_TEST_TYPES[3]];
exports.FRENCH_TEST_TYPES = FRENCH_TEST_TYPES;
var LAN_TEST_SUBJECTS = ['听', '说', '读', '写'];
exports.LAN_TEST_SUBJECTS = LAN_TEST_SUBJECTS;
var LAN_TEST_SCORE_CLB_RELATIONS = (_LAN_TEST_SCORE_CLB_R = {}, _defineProperty(_LAN_TEST_SCORE_CLB_R, LAN_TEST_TYPES[0], (_LAN_TEST_TYPES$ = {}, _defineProperty(_LAN_TEST_TYPES$, LAN_TEST_SUBJECTS[0], [[0, 1], [1, 2], [2, 3.5], [3.5, 4.5], [4.5, 5], [5, 5.5], [5.5, 6], [6, 7.5], [7.5, 8], [8, 8.5], [8.5, 9.001]]), _defineProperty(_LAN_TEST_TYPES$, LAN_TEST_SUBJECTS[1], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 5.5], [5.5, 6], [6, 6.5], [6.5, 7], [7, 7.5], [7.5, 9.001]]), _defineProperty(_LAN_TEST_TYPES$, LAN_TEST_SUBJECTS[2], [[0, 1], [1, 1.5], [1.5, 2.5], [2.5, 3.5], [3.5, 4.5], [4.5, 5], [5, 6], [6, 6.5], [6.5, 7], [7, 8], [8, 9.001]]), _defineProperty(_LAN_TEST_TYPES$, LAN_TEST_SUBJECTS[3], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 5.5], [5.5, 6], [6, 6.5], [6.5, 7], [7, 7.5], [7.5, 9.001]]), _LAN_TEST_TYPES$)), _defineProperty(_LAN_TEST_SCORE_CLB_R, LAN_TEST_TYPES[1], (_LAN_TEST_TYPES$2 = {}, _defineProperty(_LAN_TEST_TYPES$2, LAN_TEST_SUBJECTS[0], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 10.001]]), _defineProperty(_LAN_TEST_TYPES$2, LAN_TEST_SUBJECTS[1], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 10.001]]), _defineProperty(_LAN_TEST_TYPES$2, LAN_TEST_SUBJECTS[2], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 10.001]]), _defineProperty(_LAN_TEST_TYPES$2, LAN_TEST_SUBJECTS[3], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 10.001]]), _LAN_TEST_TYPES$2)), _defineProperty(_LAN_TEST_SCORE_CLB_R, LAN_TEST_TYPES[2], (_LAN_TEST_TYPES$3 = {}, _defineProperty(_LAN_TEST_TYPES$3, LAN_TEST_SUBJECTS[0], [[0, 0], [0, 0], [0, 0], [0, 145], [145, 181], [181, 217], [217, 249], [249, 280], [280, 298], [298, 316], [316, 360.001]]), _defineProperty(_LAN_TEST_TYPES$3, LAN_TEST_SUBJECTS[1], [[0, 0], [0, 0], [0, 0], [0, 181], [181, 226], [226, 271], [271, 310], [310, 349], [349, 371], [371, 393], [393, 450.001]]), _defineProperty(_LAN_TEST_TYPES$3, LAN_TEST_SUBJECTS[2], [[0, 0], [0, 0], [0, 0], [0, 121], [121, 151], [151, 181], [181, 207], [207, 233], [233, 248], [248, 263], [263, 300.001]]), _defineProperty(_LAN_TEST_TYPES$3, LAN_TEST_SUBJECTS[3], [[0, 0], [0, 0], [0, 0], [0, 181], [181, 226], [226, 271], [271, 310], [310, 349], [349, 371], [371, 393], [393, 450.001]]), _LAN_TEST_TYPES$3)), _defineProperty(_LAN_TEST_SCORE_CLB_R, LAN_TEST_TYPES[3], (_LAN_TEST_TYPES$4 = {}, _defineProperty(_LAN_TEST_TYPES$4, LAN_TEST_SUBJECTS[0], [[0, 0], [0, 0], [0, 0], [0, 331], [331, 369], [369, 398], [398, 458], [458, 503], [503, 523], [523, 549], [549, 699.001]]), _defineProperty(_LAN_TEST_TYPES$4, LAN_TEST_SUBJECTS[1], [[0, 0], [0, 0], [0, 0], [0, 4], [4, 6], [6, 7], [7, 10], [10, 12], [12, 14], [14, 16], [16, 20.001]]), _defineProperty(_LAN_TEST_TYPES$4, LAN_TEST_SUBJECTS[2], [[0, 0], [0, 0], [0, 0], [0, 342], [342, 375], [375, 406], [406, 453], [453, 499], [499, 524], [524, 549], [549, 699.001]]), _defineProperty(_LAN_TEST_TYPES$4, LAN_TEST_SUBJECTS[3], [[0, 0], [0, 0], [0, 0], [0, 4], [4, 6], [6, 7], [7, 10], [10, 12], [12, 14], [14, 16], [16, 20.001]]), _LAN_TEST_TYPES$4)), _LAN_TEST_SCORE_CLB_R);
exports.LAN_TEST_SCORE_CLB_RELATIONS = LAN_TEST_SCORE_CLB_RELATIONS;
},{"lodash.inrange":"../node_modules/lodash.inrange/index.js"}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFinalScore = exports.additionalToScore = exports.additionalFrenchToScore = exports.additionalSiblingToScore = exports.additionalCanadaEduToScore = exports.additionalEmployerToScore = exports.additionalProvincialNomineeToScore = exports.transferOverseasExpToScore = exports.transferEduToScore = exports.transferOverseasExpMultiplyExpToScore = exports.transferOverseasExpMultiplyLanToScore = exports.transferEduMultiplyExpToScore = exports.transferEduMultiplyLanToScore = exports.expToScore = exports.lanToScore = exports.clbToScore = exports.eduToScore = exports.ageToScore = exports.lanTestToClb = void 0;

var _lodash = _interopRequireDefault(require("lodash.inrange"));

var _lodash2 = _interopRequireDefault(require("lodash.maxby"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var lanTestToClb = function lanTestToClb(rawScore, testType, testSubject) {
  console.log(_constants.LAN_TEST_SCORE_CLB_RELATIONS);
  var clb = 0;
  var score = Number(rawScore);

  if (Number.isNaN(score)) {
    return 0;
  }

  if (!_constants.LAN_TEST_TYPES.find(function (type) {
    return type === testType;
  })) {
    return 0;
  }

  if (!_constants.LAN_TEST_SUBJECTS.find(function (subject) {
    return subject === testSubject;
  })) {
    return 0;
  }

  if (_constants.LAN_TEST_SCORE_CLB_RELATIONS[testType] && _constants.LAN_TEST_SCORE_CLB_RELATIONS[testType][testSubject]) {
    var testClbRelations = _constants.LAN_TEST_SCORE_CLB_RELATIONS[testType][testSubject];

    if (testClbRelations.findIndex(function (range) {
      return _lodash.default.apply(void 0, [score].concat(_toConsumableArray(range)));
    }) !== -1) {
      clb = testClbRelations.findIndex(function (range) {
        return _lodash.default.apply(void 0, [score].concat(_toConsumableArray(range)));
      });
    }
  }

  return clb;
};

exports.lanTestToClb = lanTestToClb;

var ageToScore = function ageToScore(rawAge) {
  var isSingle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var age = Number(rawAge);

  if (Number.isNaN(age) || age < 0) {
    return 0;
  }

  var score = 0;

  if (isSingle && _constants.SINGLE_AGE_SCORE.find(function (ageScorePair) {
    return ageScorePair[0] === age;
  })) {
    score = _constants.SINGLE_AGE_SCORE.find(function (ageScorePair) {
      return ageScorePair[0] === age;
    })[1];
  }

  if (!isSingle && _constants.MARRIED_AGE_SCORE.find(function (ageScorePair) {
    return ageScorePair[0] === age;
  })) {
    score = _constants.MARRIED_AGE_SCORE.find(function (ageScorePair) {
      return ageScorePair[0] === age;
    })[1];
  }

  return score;
};

exports.ageToScore = ageToScore;

var eduToScore = function eduToScore(eduLevel) {
  var isSingle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isSpouse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!_constants.EDU_LEVELS.find(function (level) {
    return level === eduLevel;
  })) {
    return 0;
  }

  var score = 0;

  if (isSingle && _constants.SINGLE_EDU_SCORE.find(function (eduScorePair) {
    return eduScorePair[0] === eduLevel;
  })) {
    score = _constants.SINGLE_EDU_SCORE.find(function (eduScorePair) {
      return eduScorePair[0] === eduLevel;
    })[1];
  }

  if (!isSingle && !isSpouse && _constants.MARRIED_EDU_SCORE.find(function (eduScorePair) {
    return eduScorePair[0] === eduLevel;
  })) {
    score = _constants.MARRIED_EDU_SCORE.find(function (eduScorePair) {
      return eduScorePair[0] === eduLevel;
    })[1];
  }

  if (!isSingle && isSpouse && _constants.SPOUSE_EDU_SCORE.find(function (eduScorePair) {
    return eduScorePair[0] === eduLevel;
  })) {
    score = _constants.SPOUSE_EDU_SCORE.find(function (eduScorePair) {
      return eduScorePair[0] === eduLevel;
    })[1];
  }

  return score;
};

exports.eduToScore = eduToScore;

var clbToScore = function clbToScore(rawClb) {
  var isSingle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isSpouse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isFirst = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var clb = Number(rawClb);

  if (Number.isNaN(clb) || clb > 10 || clb < 0) {
    return 0;
  }

  var score = 0;

  if (isSingle && isFirst && _constants.SINGLE_FIRST_LAN_SCORE.find(function (lanScorePair) {
    return lanScorePair[0] === clb;
  })) {
    score = _constants.SINGLE_FIRST_LAN_SCORE.find(function (lanScorePair) {
      return lanScorePair[0] === clb;
    })[1];
  }

  if (!isSingle && isFirst && _constants.MARRIED_FIRST_LAN_SCORE.find(function (lanScorePair) {
    return lanScorePair[0] === clb;
  })) {
    score = _constants.MARRIED_FIRST_LAN_SCORE.find(function (lanScorePair) {
      return lanScorePair[0] === clb;
    })[1];
  }

  if (!isFirst && !isSpouse && _constants.SECOND_LAN_SCORE.find(function (lanScorePair) {
    return lanScorePair[0] === clb;
  })) {
    score = _constants.SECOND_LAN_SCORE.find(function (lanScorePair) {
      return lanScorePair[0] === clb;
    })[1];
  }

  if (!isSingle && isSpouse && _constants.SPOUSE_LAN_SCORE.find(function (lanScorePair) {
    return lanScorePair[0] === clb;
  })) {
    score = _constants.SPOUSE_LAN_SCORE.find(function (lanScorePair) {
      return lanScorePair[0] === clb;
    })[1];
  }

  return score;
};

exports.clbToScore = clbToScore;

var lanToScore = function lanToScore(testInfo) {
  var isSingle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isSpouse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isFirst = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var score = 0;
  Object.keys(testInfo).forEach(function (testSubject) {
    score += testInfo[testSubject].score;
  });

  if (!isSingle && !isSpouse && !isFirst) {
    score = Math.min(22, score);
  }

  return score;
};

exports.lanToScore = lanToScore;

var expToScore = function expToScore(rawExp) {
  var isSingle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isSpouse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var exp = Number(rawExp);

  if (Number.isNaN(exp) || exp < 1) {
    return 0;
  }

  var score = 0;

  if (isSingle) {
    var maxKey = (0, _lodash2.default)(_constants.SINGLE_EXP_SCORE, function (expScorePair) {
      return expScorePair[0];
    })[0];
    exp = Math.min(maxKey, exp);

    if (_constants.SINGLE_EXP_SCORE.find(function (expScorePair) {
      return expScorePair[0] === exp;
    })) {
      score = _constants.SINGLE_EXP_SCORE.find(function (expScorePair) {
        return expScorePair[0] === exp;
      })[1];
    }
  }

  if (!isSingle && !isSpouse) {
    var _maxKey = (0, _lodash2.default)(_constants.MARRIED_EXP_SCORE, function (expScorePair) {
      return expScorePair[0];
    })[0];
    exp = Math.min(_maxKey, exp);

    if (_constants.MARRIED_EXP_SCORE.find(function (expScorePair) {
      return expScorePair[0] === exp;
    })) {
      score = _constants.MARRIED_EXP_SCORE.find(function (expScorePair) {
        return expScorePair[0] === exp;
      })[1];
    }
  }

  if (!isSingle && isSpouse) {
    var _maxKey2 = (0, _lodash2.default)(_constants.SPOUSE_EXP_SCORE, function (expScorePair) {
      return expScorePair[0];
    })[0];
    exp = Math.min(_maxKey2, exp);

    if (_constants.SPOUSE_EXP_SCORE.find(function (expScorePair) {
      return expScorePair[0] === exp;
    })) {
      score = _constants.SPOUSE_EXP_SCORE.find(function (expScorePair) {
        return expScorePair[0] === exp;
      })[1];
    }
  }

  return score;
};

exports.expToScore = expToScore;

var transferEduMultiplyLanToScore = function transferEduMultiplyLanToScore(eduLevel, lanTestInfo) {
  var clbs = Object.keys(lanTestInfo).map(function (testSubject) {
    return lanTestInfo[testSubject].clb;
  });
  var lanFactor = lanToLanFactor(clbs);
  var eduFactor = eduLevelToEduFactor(eduLevel);
  var multipliedFactor = lanFactor * eduFactor;
  var score = 0;

  if (_constants.EDU_TRANSFER_SCORE.find(function (factorScorePair) {
    return factorScorePair[0] === multipliedFactor;
  })) {
    score = _constants.EDU_TRANSFER_SCORE.find(function (factorScorePair) {
      return factorScorePair[0] === multipliedFactor;
    })[1];
  }

  return score;
};

exports.transferEduMultiplyLanToScore = transferEduMultiplyLanToScore;

var transferEduMultiplyExpToScore = function transferEduMultiplyExpToScore(eduLevel, exp) {
  var expFactor = expToExpFactor(exp);
  var eduFactor = eduLevelToEduFactor(eduLevel);
  var multipliedFactor = expFactor * eduFactor;
  var score = 0;

  if (_constants.EDU_TRANSFER_SCORE.find(function (factorScorePair) {
    return factorScorePair[0] === multipliedFactor;
  })) {
    score = _constants.EDU_TRANSFER_SCORE.find(function (factorScorePair) {
      return factorScorePair[0] === multipliedFactor;
    })[1];
  }

  return score;
};

exports.transferEduMultiplyExpToScore = transferEduMultiplyExpToScore;

var transferOverseasExpMultiplyLanToScore = function transferOverseasExpMultiplyLanToScore(overseasExp, lanTestInfo) {
  var clbs = Object.keys(lanTestInfo).map(function (testSubject) {
    return lanTestInfo[testSubject].clb;
  });
  var lanFactor = lanToLanFactor(clbs);
  var overseasExpFactor = overseasExpToOverseasExpFactor(overseasExp);
  var multipliedFactor = lanFactor * overseasExpFactor;
  var score = 0;

  if (_constants.OVERSEASEXP_TRANSFER_SCORE.find(function (factorScorePair) {
    return factorScorePair[0] === multipliedFactor;
  })) {
    score = _constants.OVERSEASEXP_TRANSFER_SCORE.find(function (factorScorePair) {
      return factorScorePair[0] === multipliedFactor;
    })[1];
  }

  return score;
};

exports.transferOverseasExpMultiplyLanToScore = transferOverseasExpMultiplyLanToScore;

var transferOverseasExpMultiplyExpToScore = function transferOverseasExpMultiplyExpToScore(overseasExp, exp) {
  var expFactor = expToExpFactor(exp);
  var overseasExpFactor = overseasExpToOverseasExpFactor(overseasExp);
  var multipliedFactor = expFactor * overseasExpFactor;
  var score = 0;

  if (_constants.OVERSEASEXP_TRANSFER_SCORE.find(function (factorScorePair) {
    return factorScorePair[0] === multipliedFactor;
  })) {
    score = _constants.OVERSEASEXP_TRANSFER_SCORE.find(function (factorScorePair) {
      return factorScorePair[0] === multipliedFactor;
    })[1];
  }

  return score;
};

exports.transferOverseasExpMultiplyExpToScore = transferOverseasExpMultiplyExpToScore;

var transferEduToScore = function transferEduToScore(rawEduMultiplyLanScore, rawEduMultiplyExpScore) {
  var eduMultiplyLanScore = Number(rawEduMultiplyLanScore);
  var eduMultiplyExpScore = Number(rawEduMultiplyExpScore);

  if (Number.isNaN(eduMultiplyLanScore) || Number.isNaN(eduMultiplyExpScore)) {
    return 0;
  }

  return Math.min(50, eduMultiplyLanScore + eduMultiplyExpScore);
};

exports.transferEduToScore = transferEduToScore;

var transferOverseasExpToScore = function transferOverseasExpToScore(rawOverseasExpMultiplyLanScore, rawOverseasExpMultiplyExpScore) {
  var overseasExpMultiplyLanScore = Number(rawOverseasExpMultiplyLanScore);
  var overseasExpMultiplyExpScore = Number(rawOverseasExpMultiplyExpScore);

  if (Number.isNaN(overseasExpMultiplyLanScore) || Number.isNaN(overseasExpMultiplyExpScore)) {
    return 0;
  }

  return Math.min(50, overseasExpMultiplyLanScore + overseasExpMultiplyExpScore);
};

exports.transferOverseasExpToScore = transferOverseasExpToScore;

var additionalProvincialNomineeToScore = function additionalProvincialNomineeToScore(passed) {
  if (passed) {
    return _constants.PROVINCIAL_NOMINEE_SCORE;
  }

  return 0;
};

exports.additionalProvincialNomineeToScore = additionalProvincialNomineeToScore;

var additionalEmployerToScore = function additionalEmployerToScore(employerType) {
  if (!_constants.EMPLOYER_TYPES.find(function (type) {
    return type === employerType;
  })) {
    return 0;
  }

  var score = 0;

  if (_constants.EMPLOYER_SCORE.find(function (typeScorePair) {
    return typeScorePair[0] === employerType;
  })) {
    score = _constants.EMPLOYER_SCORE.find(function (typeScorePair) {
      return typeScorePair[0] === employerType;
    })[1];
  }

  return score;
};

exports.additionalEmployerToScore = additionalEmployerToScore;

var additionalCanadaEduToScore = function additionalCanadaEduToScore(canadaEduDegree) {
  if (!_constants.CANADA_EDU_DEGREES.find(function (degree) {
    return degree === canadaEduDegree;
  })) {
    return 0;
  }

  var score = 0;

  if (_constants.CANADA_EDU_SCORE.find(function (degreeScorePair) {
    return degreeScorePair[0] === canadaEduDegree;
  })) {
    score = _constants.CANADA_EDU_SCORE.find(function (degreeScorePair) {
      return degreeScorePair[0] === canadaEduDegree;
    })[1];
  }

  return score;
};

exports.additionalCanadaEduToScore = additionalCanadaEduToScore;

var additionalSiblingToScore = function additionalSiblingToScore(hasSibling) {
  if (hasSibling) {
    return _constants.SIBLING_SCORE;
  }

  return 0;
};

exports.additionalSiblingToScore = additionalSiblingToScore;

var additionalFrenchToScore = function additionalFrenchToScore(firstLanTestType, firstLanTestInfo, secondLanTestType, secondLanTestInfo) {
  var frenchClbs = [0, 0, 0, 0];
  var englishClbs = [0, 0, 0, 0];

  if (_constants.ENGLISH_TEST_TYPES.includes(firstLanTestType)) {
    englishClbs = Object.keys(firstLanTestInfo).map(function (testSubject) {
      return firstLanTestInfo[testSubject].clb;
    });
  } else if (_constants.ENGLISH_TEST_TYPES.includes(secondLanTestType)) {
    englishClbs = Object.keys(secondLanTestInfo).map(function (testSubject) {
      return secondLanTestInfo[testSubject].clb;
    });
  }

  if (_constants.FRENCH_TEST_TYPES.includes(firstLanTestType)) {
    frenchClbs = Object.keys(firstLanTestInfo).map(function (testSubject) {
      return firstLanTestInfo[testSubject].clb;
    });
  } else if (_constants.FRENCH_TEST_TYPES.includes(secondLanTestType)) {
    frenchClbs = Object.keys(secondLanTestInfo).map(function (testSubject) {
      return secondLanTestInfo[testSubject].clb;
    });
  }

  var score = 0;
  var frenchFactor = 0;
  var englishFactor = 1;
  var multipliedFactor = 0;

  if (allClbsAbove(frenchClbs, 7)) {
    frenchFactor = 1;
  }

  if (allClbsAbove(englishClbs, 5)) {
    englishFactor = 2;
  }

  multipliedFactor = frenchFactor * englishFactor;

  if (_constants.FRENCH_ADDITIONAL_SCORE.find(function (factorScorePair) {
    return factorScorePair[0] === multipliedFactor;
  })) {
    score = _constants.FRENCH_ADDITIONAL_SCORE.find(function (factorScorePair) {
      return factorScorePair[0] === multipliedFactor;
    })[1];
  }

  return score;
};

exports.additionalFrenchToScore = additionalFrenchToScore;

var additionalToScore = function additionalToScore(provincialNomineePassed, employerType, canadaEduDegree, hasSibling, frenchScore) {
  var provincialNomineeScore = additionalProvincialNomineeToScore(provincialNomineePassed);
  var employerScore = additionalEmployerToScore(employerType);
  var canadaEduScore = additionalCanadaEduToScore(canadaEduDegree);
  var siblingScore = additionalSiblingToScore(hasSibling);

  if (Number.isNaN(provincialNomineeScore) || Number.isNaN(employerScore) || Number.isNaN(canadaEduScore) || Number.isNaN(siblingScore) || Number.isNaN(frenchScore)) {
    return 0;
  }

  return Math.min(600, provincialNomineeScore + employerScore + canadaEduScore + siblingScore + frenchScore);
};

exports.additionalToScore = additionalToScore;

var getFinalScore = function getFinalScore() {
  var rawAgeScore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var rawEduScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var rawFirstLanScore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var rawExpScore = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var rawSecondLanScore = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var rawSpouseEduScore = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var rawSpouseLanScore = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var rawSpouseExpScore = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  var rawTransferEduScore = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
  var rawTransferOverseasExpScore = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
  var rawAdditionalScore = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
  var ageScore = Number(rawAgeScore);
  var eduScore = Number(rawEduScore);
  var firstLanScore = Number(rawFirstLanScore);
  var expScore = Number(rawExpScore);
  var secondLanScore = Number(rawSecondLanScore);
  var spouseEduScore = Number(rawSpouseEduScore);
  var spouseLanScore = Number(rawSpouseLanScore);
  var spouseExpScore = Number(rawSpouseExpScore);
  var transferEduScore = Number(rawTransferEduScore);
  var transferOverseasExpScore = Number(rawTransferOverseasExpScore);
  var additionalScore = Number(rawAdditionalScore);

  if (Number.isNaN(ageScore) || Number.isNaN(eduScore) || Number.isNaN(firstLanScore) || Number.isNaN(expScore) || Number.isNaN(secondLanScore) || Number.isNaN(spouseEduScore) || Number.isNaN(spouseLanScore) || Number.isNaN(spouseExpScore) || Number.isNaN(transferEduScore) || Number.isNaN(transferOverseasExpScore) || Number.isNaN(additionalScore)) {
    return 0;
  }

  return ageScore + eduScore + firstLanScore + expScore + secondLanScore + spouseEduScore + spouseExpScore + spouseLanScore + transferEduScore + transferOverseasExpScore + additionalScore;
};

exports.getFinalScore = getFinalScore;

function allClbsAbove() {
  var clbs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 0, 0];
  var rawLevel = arguments.length > 1 ? arguments[1] : undefined;
  var level = Number(rawLevel);
  var flag = false;

  if (!Number.isNaN(level) && level <= 10 && clbs.every(function (rawClb) {
    var clb = Number(rawClb);

    if (!Number.isNaN(clb) && (0, _lodash.default)(clb, level, 10.001)) {
      return true;
    }

    return false;
  })) {
    flag = true;
  }

  return flag;
}

function lanToLanFactor() {
  var clbs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 0, 0];
  var lanFactor = 0;

  if (allClbsAbove(clbs, 7)) {
    lanFactor = 1;
  }

  if (allClbsAbove(clbs, 9)) {
    lanFactor = 2;
  }

  return lanFactor;
}

function eduLevelToEduFactor(eduLevel) {
  if (!_constants.EDU_LEVELS.find(function (level) {
    return level === eduLevel;
  })) {
    return 0;
  }

  var eduFactor = 0;

  var eduIndex = _constants.EDU_LEVELS.findIndex(function (level) {
    return level === eduLevel;
  });

  if (eduIndex > 1) {
    eduFactor = 1;
  }

  if (eduIndex > 4) {
    eduFactor = 2;
  }

  return eduFactor;
}

function expToExpFactor(rawExp) {
  var exp = Number(rawExp);

  if (Number.isNaN(exp) || exp < 1) {
    return 0;
  }

  var expFactor = 0;

  if (exp > 0) {
    expFactor = 1;
  }

  if (exp > 1) {
    expFactor = 2;
  }

  return expFactor;
}

function overseasExpToOverseasExpFactor(rawOverseasExp) {
  var overseasExp = Number(rawOverseasExp);

  if (Number.isNaN(overseasExp) || overseasExp < 1) {
    return 0;
  }

  var overseasExpFactor = 0;

  if (overseasExp > 0) {
    overseasExpFactor = 1;
  }

  if (overseasExp > 2) {
    overseasExpFactor = 2;
  }

  return overseasExpFactor;
}
},{"lodash.inrange":"../node_modules/lodash.inrange/index.js","lodash.maxby":"../node_modules/lodash.maxby/index.js","./constants":"constants.js"}],"../node_modules/lit-html/lib/directive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDirective = exports.directive = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

const directive = f => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};

exports.directive = directive;

const isDirective = o => {
  return typeof o === 'function' && directives.has(o);
};

exports.isDirective = isDirective;
},{}],"../node_modules/lit-html/lib/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNodes = exports.reparentNodes = exports.isCEPolyfill = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

exports.isCEPolyfill = isCEPolyfill;

const reparentNodes = (container, start, end = null, before = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */


exports.reparentNodes = reparentNodes;

const removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

exports.removeNodes = removeNodes;
},{}],"../node_modules/lit-html/lib/part.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nothing = exports.noChange = void 0;

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

exports.noChange = noChange;
const nothing = {};
exports.nothing = nothing;
},{}],"../node_modules/lit-html/lib/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastAttributeNameRegex = exports.createMarker = exports.isTemplatePartActive = exports.Template = exports.boundAttributeSuffix = exports.markerRegex = exports.nodeMarker = exports.marker = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

exports.marker = marker;
const nodeMarker = `<!--${marker}-->`;
exports.nodeMarker = nodeMarker;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */

exports.markerRegex = markerRegex;
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

exports.boundAttributeSuffix = boundAttributeSuffix;

class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {
      strings,
      values: {
        length
      }
    } = result;

    while (partIndex < length) {
      const node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {
              length
            } = attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            let count = 0;

            for (let i = 0; i < length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              const stringForPart = strings[partIndex]; // Find the attribute name

              const name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index,
                name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          const data = node.data;

          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings = data.split(markerRegex);
            const lastIndex = strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s = strings[i];

              if (s === '') {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            const parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            let i = -1;

            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }

}

exports.Template = Template;

const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

const isTemplatePartActive = part => part.index !== -1; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.


exports.isTemplatePartActive = isTemplatePartActive;

const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */


exports.createMarker = createMarker;
const lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
exports.lastAttributeNameRegex = lastAttributeNameRegex;
},{}],"../node_modules/lit-html/lib/template-instance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateInstance = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  update(values) {
    let i = 0;

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.setValue(values[i]);
      }

      i++;
    }

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.commit();
      }
    }
  }

  _clone() {
    // There are a number of steps in the lifecycle of a template instance's
    // DOM fragment:
    //  1. Clone - create the instance fragment
    //  2. Adopt - adopt into the main document
    //  3. Process - find part markers and create parts
    //  4. Upgrade - upgrade custom elements
    //  5. Update - set node, attribute, property, etc., values
    //  6. Connect - connect to the document. Optional and outside of this
    //     method.
    //
    // We have a few constraints on the ordering of these steps:
    //  * We need to upgrade before updating, so that property values will pass
    //    through any property setters.
    //  * We would like to process before upgrading so that we're sure that the
    //    cloned fragment is inert and not disturbed by self-modifying DOM.
    //  * We want custom elements to upgrade even in disconnected fragments.
    //
    // Given these constraints, with full custom elements support we would
    // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
    //
    // But Safari does not implement CustomElementRegistry#upgrade, so we
    // can not implement that order and still have upgrade-before-update and
    // upgrade disconnected fragments. So we instead sacrifice the
    // process-before-upgrade constraint, since in Custom Elements v1 elements
    // must not modify their light DOM in the constructor. We still have issues
    // when co-existing with CEv0 elements like Polymer 1, and with polyfills
    // that don't strictly adhere to the no-modification rule because shadow
    // DOM, which may be created in the constructor, is emulated by being placed
    // in the light DOM.
    //
    // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
    // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
    // in one step.
    //
    // The Custom Elements v1 polyfill supports upgrade(), so the order when
    // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
    // Connect.
    const fragment = _dom.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(fragment, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode(); // Loop through all the nodes and parts of a template

    while (partIndex < parts.length) {
      part = parts[partIndex];

      if (!(0, _template.isTemplatePartActive)(part)) {
        this.__parts.push(undefined);

        partIndex++;
        continue;
      } // Progress the tree walker until we find our next part's node.
      // Note that multiple parts may share the same node (attribute parts
      // on a single element), so this loop may not run at all.


      while (nodeIndex < part.index) {
        nodeIndex++;

        if (node.nodeName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }

        if ((node = walker.nextNode()) === null) {
          // We've exhausted the content inside a nested template element.
          // Because we still have parts (the outer for-loop), we know:
          // - There is a template in the stack
          // - The walker will find a nextNode outside the template
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      } // We've arrived at our part's node.


      if (part.type === 'node') {
        const part = this.processor.handleTextExpression(this.options);
        part.insertAfterNode(node.previousSibling);

        this.__parts.push(part);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }

      partIndex++;
    }

    if (_dom.isCEPolyfill) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }

    return fragment;
  }

}

exports.TemplateInstance = TemplateInstance;
},{"./dom.js":"../node_modules/lit-html/lib/dom.js","./template.js":"../node_modules/lit-html/lib/template.js"}],"../node_modules/lit-html/lib/template-result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGTemplateResult = exports.TemplateResult = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: s => s
});
const commentMarker = ` ${_template.marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  getHTML() {
    const l = this.strings.length - 1;
    let html = '';
    let isCommentBinding = false;

    for (let i = 0; i < l; i++) {
      const s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
      // into the template source before it's parsed by the browser's HTML
      // parser. The marker type is based on whether the expression is in an
      // attribute, text, or comment position.
      //   * For node-position bindings we insert a comment with the marker
      //     sentinel as its text content, like <!--{{lit-guid}}-->.
      //   * For attribute bindings we insert just the marker sentinel for the
      //     first binding, so that we support unquoted attribute bindings.
      //     Subsequent bindings can use a comment marker because multi-binding
      //     attributes must be quoted.
      //   * For comment bindings we insert just the marker sentinel so we don't
      //     close the comment.
      //
      // The following code scans the template source, but is *not* an HTML
      // parser. We don't need to track the tree structure of the HTML, only
      // whether a binding is inside a comment, and if not, if it appears to be
      // the first binding in an attribute.

      const commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
      // comment close. Because <-- can appear in an attribute value there can
      // be false positives.

      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
      // expression. This can match "name=value" like structures in text,
      // comments, and attribute values, so there can be false-positives.

      const attributeMatch = _template.lastAttributeNameRegex.exec(s);

      if (attributeMatch === null) {
        // We're only in this branch if we don't have a attribute-like
        // preceding sequence. For comments, this guards against unusual
        // attribute values like <div foo="<!--${'bar'}">. Cases like
        // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
        // below.
        html += s + (isCommentBinding ? commentMarker : _template.nodeMarker);
      } else {
        // For attributes we use just a marker sentinel, and also append a
        // $lit$ suffix to the name to opt-out of attribute-specific parsing
        // that IE and Edge do for style and certain SVG attributes.
        html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template.boundAttributeSuffix + attributeMatch[3] + _template.marker;
      }
    }

    html += this.strings[l];
    return html;
  }

  getTemplateElement() {
    const template = document.createElement('template');
    let value = this.getHTML();

    if (policy !== undefined) {
      // this is secure because `this.strings` is a TemplateStringsArray.
      // TODO: validate this when
      // https://github.com/tc39/proposal-array-is-template-object is
      // implemented.
      value = policy.createHTML(value);
    }

    template.innerHTML = value;
    return template;
  }

}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


exports.TemplateResult = TemplateResult;

class SVGTemplateResult extends TemplateResult {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }

  getTemplateElement() {
    const template = super.getTemplateElement();
    const content = template.content;
    const svgElement = content.firstChild;
    content.removeChild(svgElement);
    (0, _dom.reparentNodes)(content, svgElement.firstChild);
    return template;
  }

}

exports.SVGTemplateResult = SVGTemplateResult;
},{"./dom.js":"../node_modules/lit-html/lib/dom.js","./template.js":"../node_modules/lit-html/lib/template.js"}],"../node_modules/lit-html/lib/parts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventPart = exports.PropertyPart = exports.PropertyCommitter = exports.BooleanAttributePart = exports.NodePart = exports.AttributePart = exports.AttributeCommitter = exports.isIterable = exports.isPrimitive = void 0;

var _directive = require("./directive.js");

var _dom = require("./dom.js");

var _part = require("./part.js");

var _templateInstance = require("./template-instance.js");

var _templateResult = require("./template-result.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = value => {
  return value === null || !(typeof value === 'object' || typeof value === 'function');
};

exports.isPrimitive = isPrimitive;

const isIterable = value => {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */


exports.isIterable = isIterable;

class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createPart() {
    return new AttributePart(this);
  }

  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    const parts = this.parts; // If we're assigning an attribute via syntax like:
    //    attr="${foo}"  or  attr=${foo}
    // but not
    //    attr="${foo} ${bar}" or attr="${foo} baz"
    // then we don't want to coerce the attribute value into one long
    // string. Instead we want to just return the value itself directly,
    // so that sanitizeDOMValue can get the actual value rather than
    // String(value)
    // The exception is if v is an array, in which case we do want to smash
    // it together into a string without calling String() on the array.
    //
    // This also allows trusted values (when using TrustedTypes) being
    // assigned to DOM sinks without being stringified in the process.

    if (l === 1 && strings[0] === '' && strings[1] === '') {
      const v = parts[0].value;

      if (typeof v === 'symbol') {
        return String(v);
      }

      if (typeof v === 'string' || !isIterable(v)) {
        return v;
      }
    }

    let text = '';

    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = parts[i];

      if (part !== undefined) {
        const v = part.value;

        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === 'string' ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === 'string' ? t : String(t);
          }
        }
      }
    }

    text += strings[l];
    return text;
  }

  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }

}
/**
 * A Part that controls all or part of an attribute value.
 */


exports.AttributeCommitter = AttributeCommitter;

class AttributePart {
  constructor(committer) {
    this.value = undefined;
    this.committer = committer;
  }

  setValue(value) {
    if (value !== _part.noChange && (!isPrimitive(value) || value !== this.value)) {
      this.value = value; // If the value is a not a directive, dirty the committer so that it'll
      // call setAttribute. If the value is a directive, it'll dirty the
      // committer if it calls setValue().

      if (!(0, _directive.isDirective)(value)) {
        this.committer.dirty = true;
      }
    }
  }

  commit() {
    while ((0, _directive.isDirective)(this.value)) {
      const directive = this.value;
      this.value = _part.noChange;
      directive(this);
    }

    if (this.value === _part.noChange) {
      return;
    }

    this.committer.commit();
  }

}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */


exports.AttributePart = AttributePart;

class NodePart {
  constructor(options) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendInto(container) {
    this.startNode = container.appendChild((0, _template.createMarker)());
    this.endNode = container.appendChild((0, _template.createMarker)());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendIntoPart(part) {
    part.__insert(this.startNode = (0, _template.createMarker)());

    part.__insert(this.endNode = (0, _template.createMarker)());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterPart(ref) {
    ref.__insert(this.startNode = (0, _template.createMarker)());

    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }

    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    const value = this.__pendingValue;

    if (value === _part.noChange) {
      return;
    }

    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof _templateResult.TemplateResult) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === _part.nothing) {
      this.value = _part.nothing;
      this.clear();
    } else {
      // Fallback, will render the string representation
      this.__commitText(value);
    }
  }

  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }

  __commitNode(value) {
    if (this.value === value) {
      return;
    }

    this.clear();

    this.__insert(value);

    this.value = value;
  }

  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
    // it can't be implicitly converted - i.e. it's a symbol.

    const valueAsString = typeof value === 'string' ? value : String(value);

    if (node === this.endNode.previousSibling && node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }

    this.value = value;
  }

  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);

    if (this.value instanceof _templateInstance.TemplateInstance && this.value.template === template) {
      this.value.update(value.values);
    } else {
      // Make sure we propagate the template processor from the TemplateResult
      // so that we use its syntax extension, etc. The template factory comes
      // from the render function options so that it can control template
      // caching and preprocessing.
      const instance = new _templateInstance.TemplateInstance(template, value.processor, this.options);

      const fragment = instance._clone();

      instance.update(value.values);

      this.__commitNode(fragment);

      this.value = instance;
    }
  }

  __commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If _value is an array, then the previous render was of an
    // iterable and _value will contain the NodeParts from the previous
    // render. If _value is not an array, clear this part and make a new
    // array for NodeParts.
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      // Try to reuse an existing part
      itemPart = itemParts[partIndex]; // If no existing part, create a new one

      if (itemPart === undefined) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);

        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }

      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }

  clear(startNode = this.startNode) {
    (0, _dom.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }

}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


exports.NodePart = NodePart;

class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    if (this.__pendingValue === _part.noChange) {
      return;
    }

    const value = !!this.__pendingValue;

    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, '');
      } else {
        this.element.removeAttribute(this.name);
      }

      this.value = value;
    }

    this.__pendingValue = _part.noChange;
  }

}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


exports.BooleanAttributePart = BooleanAttributePart;

class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
  }

  _createPart() {
    return new PropertyPart(this);
  }

  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }

    return super._getValue();
  }

  commit() {
    if (this.dirty) {
      this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.element[this.name] = this._getValue();
    }
  }

}

exports.PropertyCommitter = PropertyCommitter;

class PropertyPart extends AttributePart {} // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


exports.PropertyPart = PropertyPart;
let eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    if (this.__pendingValue === _part.noChange) {
      return;
    }

    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    this.value = newListener;
    this.__pendingValue = _part.noChange;
  }

  handleEvent(event) {
    if (typeof this.value === 'function') {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }

} // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


exports.EventPart = EventPart;

const getOptions = o => o && (eventOptionsSupported ? {
  capture: o.capture,
  passive: o.passive,
  once: o.once
} : o.capture);
},{"./directive.js":"../node_modules/lit-html/lib/directive.js","./dom.js":"../node_modules/lit-html/lib/dom.js","./part.js":"../node_modules/lit-html/lib/part.js","./template-instance.js":"../node_modules/lit-html/lib/template-instance.js","./template-result.js":"../node_modules/lit-html/lib/template-result.js","./template.js":"../node_modules/lit-html/lib/template.js"}],"../node_modules/lit-html/lib/default-template-processor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = void 0;

var _parts = require("./parts.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];

    if (prefix === '.') {
      const committer = new _parts.PropertyCommitter(element, name.slice(1), strings);
      return committer.parts;
    }

    if (prefix === '@') {
      return [new _parts.EventPart(element, name.slice(1), options.eventContext)];
    }

    if (prefix === '?') {
      return [new _parts.BooleanAttributePart(element, name.slice(1), strings)];
    }

    const committer = new _parts.AttributeCommitter(element, name, strings);
    return committer.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */


  handleTextExpression(options) {
    return new _parts.NodePart(options);
  }

}

exports.DefaultTemplateProcessor = DefaultTemplateProcessor;
const defaultTemplateProcessor = new DefaultTemplateProcessor();
exports.defaultTemplateProcessor = defaultTemplateProcessor;
},{"./parts.js":"../node_modules/lit-html/lib/parts.js"}],"../node_modules/lit-html/lib/template-factory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateFactory = templateFactory;
exports.templateCaches = void 0;

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  const key = result.strings.join(_template.marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template.Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}

const templateCaches = new Map();
exports.templateCaches = templateCaches;
},{"./template.js":"../node_modules/lit-html/lib/template.js"}],"../node_modules/lit-html/lib/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.parts = void 0;

var _dom = require("./dom.js");

var _parts = require("./parts.js");

var _templateFactory = require("./template-factory.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

exports.parts = parts;

const render = (result, container, options) => {
  let part = parts.get(container);

  if (part === undefined) {
    (0, _dom.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts.NodePart(Object.assign({
      templateFactory: _templateFactory.templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

exports.render = render;
},{"./dom.js":"../node_modules/lit-html/lib/dom.js","./parts.js":"../node_modules/lit-html/lib/parts.js","./template-factory.js":"../node_modules/lit-html/lib/template-factory.js"}],"../node_modules/lit-html/lit-html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DefaultTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _defaultTemplateProcessor.DefaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "defaultTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _defaultTemplateProcessor.defaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function () {
    return _templateResult.SVGTemplateResult;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function () {
    return _templateResult.TemplateResult;
  }
});
Object.defineProperty(exports, "directive", {
  enumerable: true,
  get: function () {
    return _directive.directive;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function () {
    return _directive.isDirective;
  }
});
Object.defineProperty(exports, "removeNodes", {
  enumerable: true,
  get: function () {
    return _dom.removeNodes;
  }
});
Object.defineProperty(exports, "reparentNodes", {
  enumerable: true,
  get: function () {
    return _dom.reparentNodes;
  }
});
Object.defineProperty(exports, "noChange", {
  enumerable: true,
  get: function () {
    return _part.noChange;
  }
});
Object.defineProperty(exports, "nothing", {
  enumerable: true,
  get: function () {
    return _part.nothing;
  }
});
Object.defineProperty(exports, "AttributeCommitter", {
  enumerable: true,
  get: function () {
    return _parts.AttributeCommitter;
  }
});
Object.defineProperty(exports, "AttributePart", {
  enumerable: true,
  get: function () {
    return _parts.AttributePart;
  }
});
Object.defineProperty(exports, "BooleanAttributePart", {
  enumerable: true,
  get: function () {
    return _parts.BooleanAttributePart;
  }
});
Object.defineProperty(exports, "EventPart", {
  enumerable: true,
  get: function () {
    return _parts.EventPart;
  }
});
Object.defineProperty(exports, "isIterable", {
  enumerable: true,
  get: function () {
    return _parts.isIterable;
  }
});
Object.defineProperty(exports, "isPrimitive", {
  enumerable: true,
  get: function () {
    return _parts.isPrimitive;
  }
});
Object.defineProperty(exports, "NodePart", {
  enumerable: true,
  get: function () {
    return _parts.NodePart;
  }
});
Object.defineProperty(exports, "PropertyCommitter", {
  enumerable: true,
  get: function () {
    return _parts.PropertyCommitter;
  }
});
Object.defineProperty(exports, "PropertyPart", {
  enumerable: true,
  get: function () {
    return _parts.PropertyPart;
  }
});
Object.defineProperty(exports, "parts", {
  enumerable: true,
  get: function () {
    return _render.parts;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _render.render;
  }
});
Object.defineProperty(exports, "templateCaches", {
  enumerable: true,
  get: function () {
    return _templateFactory.templateCaches;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function () {
    return _templateFactory.templateFactory;
  }
});
Object.defineProperty(exports, "TemplateInstance", {
  enumerable: true,
  get: function () {
    return _templateInstance.TemplateInstance;
  }
});
Object.defineProperty(exports, "createMarker", {
  enumerable: true,
  get: function () {
    return _template.createMarker;
  }
});
Object.defineProperty(exports, "isTemplatePartActive", {
  enumerable: true,
  get: function () {
    return _template.isTemplatePartActive;
  }
});
Object.defineProperty(exports, "Template", {
  enumerable: true,
  get: function () {
    return _template.Template;
  }
});
exports.svg = exports.html = void 0;

var _defaultTemplateProcessor = require("./lib/default-template-processor.js");

var _templateResult = require("./lib/template-result.js");

var _directive = require("./lib/directive.js");

var _dom = require("./lib/dom.js");

var _part = require("./lib/part.js");

var _parts = require("./lib/parts.js");

var _render = require("./lib/render.js");

var _templateFactory = require("./lib/template-factory.js");

var _templateInstance = require("./lib/template-instance.js");

var _template = require("./lib/template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
// TODO(justinfagnani): remove line when we get NodePart moving methods
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


const html = (strings, ...values) => new _templateResult.TemplateResult(strings, values, 'html', _defaultTemplateProcessor.defaultTemplateProcessor);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */


exports.html = html;

const svg = (strings, ...values) => new _templateResult.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessor.defaultTemplateProcessor);

exports.svg = svg;
},{"./lib/default-template-processor.js":"../node_modules/lit-html/lib/default-template-processor.js","./lib/template-result.js":"../node_modules/lit-html/lib/template-result.js","./lib/directive.js":"../node_modules/lit-html/lib/directive.js","./lib/dom.js":"../node_modules/lit-html/lib/dom.js","./lib/part.js":"../node_modules/lit-html/lib/part.js","./lib/parts.js":"../node_modules/lit-html/lib/parts.js","./lib/render.js":"../node_modules/lit-html/lib/render.js","./lib/template-factory.js":"../node_modules/lit-html/lib/template-factory.js","./lib/template-instance.js":"../node_modules/lit-html/lib/template-instance.js","./lib/template.js":"../node_modules/lit-html/lib/template.js"}],"../node_modules/haunted/lib/interface.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.setCurrent = setCurrent;
exports.notify = notify;
exports.current = void 0;
let current;
exports.current = current;
let currentId = 0;

function setCurrent(state) {
  exports.current = current = state;
}

function clear() {
  exports.current = current = null;
  currentId = 0;
}

function notify() {
  return currentId++;
}
},{}],"../node_modules/haunted/lib/symbols.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextEvent = exports.layoutEffectsSymbol = exports.effectsSymbol = exports.commitSymbol = exports.updateSymbol = exports.hookSymbol = exports.phaseSymbol = void 0;
const phaseSymbol = Symbol('haunted.phase');
exports.phaseSymbol = phaseSymbol;
const hookSymbol = Symbol('haunted.hook');
exports.hookSymbol = hookSymbol;
const updateSymbol = Symbol('haunted.update');
exports.updateSymbol = updateSymbol;
const commitSymbol = Symbol('haunted.commit');
exports.commitSymbol = commitSymbol;
const effectsSymbol = Symbol('haunted.effects');
exports.effectsSymbol = effectsSymbol;
const layoutEffectsSymbol = Symbol('haunted.layoutEffects');
exports.layoutEffectsSymbol = layoutEffectsSymbol;
const contextEvent = 'haunted.context';
exports.contextEvent = contextEvent;
},{}],"../node_modules/haunted/lib/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = void 0;

var _interface = require("./interface");

var _symbols = require("./symbols");

class State {
  constructor(update, host) {
    this.update = update;
    this.host = host;
    this[_symbols.hookSymbol] = new Map();
    this[_symbols.effectsSymbol] = [];
    this[_symbols.layoutEffectsSymbol] = [];
  }

  run(cb) {
    (0, _interface.setCurrent)(this);
    let res = cb();
    (0, _interface.clear)();
    return res;
  }

  _runEffects(phase) {
    let effects = this[phase];
    (0, _interface.setCurrent)(this);

    for (let effect of effects) {
      effect.call(this);
    }

    (0, _interface.clear)();
  }

  runEffects() {
    this._runEffects(_symbols.effectsSymbol);
  }

  runLayoutEffects() {
    this._runEffects(_symbols.layoutEffectsSymbol);
  }

  teardown() {
    let hooks = this[_symbols.hookSymbol];
    hooks.forEach(hook => {
      if (typeof hook.teardown === 'function') {
        hook.teardown();
      }
    });
  }

}

exports.State = State;
},{"./interface":"../node_modules/haunted/lib/interface.js","./symbols":"../node_modules/haunted/lib/symbols.js"}],"../node_modules/haunted/lib/scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseScheduler = void 0;

var _state = require("./state");

var _symbols = require("./symbols");

const defer = Promise.resolve().then.bind(Promise.resolve());

function runner() {
  let tasks = [];
  let id;

  function runTasks() {
    id = null;
    let t = tasks;
    tasks = [];

    for (var i = 0, len = t.length; i < len; i++) {
      t[i]();
    }
  }

  return function (task) {
    tasks.push(task);

    if (id == null) {
      id = defer(runTasks);
    }
  };
}

const read = runner();
const write = runner();

class BaseScheduler {
  constructor(renderer, host) {
    this.renderer = renderer;
    this.host = host;
    this.state = new _state.State(this.update.bind(this), host);
    this[_symbols.phaseSymbol] = null;
    this._updateQueued = false;
  }

  update() {
    if (this._updateQueued) return;
    read(() => {
      let result = this.handlePhase(_symbols.updateSymbol);
      write(() => {
        this.handlePhase(_symbols.commitSymbol, result);
        write(() => {
          this.handlePhase(_symbols.effectsSymbol);
        });
      });
      this._updateQueued = false;
    });
    this._updateQueued = true;
  }

  handlePhase(phase, arg) {
    this[_symbols.phaseSymbol] = phase;

    switch (phase) {
      case _symbols.commitSymbol:
        this.commit(arg);
        this.runEffects(_symbols.layoutEffectsSymbol);
        return;

      case _symbols.updateSymbol:
        return this.render();

      case _symbols.effectsSymbol:
        return this.runEffects(_symbols.effectsSymbol);
    }

    this[_symbols.phaseSymbol] = null;
  }

  render() {
    return this.state.run(() => this.renderer.call(this.host, this.host));
  }

  runEffects(phase) {
    this.state._runEffects(phase);
  }

  teardown() {
    this.state.teardown();
  }

}

exports.BaseScheduler = BaseScheduler;
},{"./state":"../node_modules/haunted/lib/state.js","./symbols":"../node_modules/haunted/lib/symbols.js"}],"../node_modules/haunted/lib/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeComponent = makeComponent;

var _scheduler = require("./scheduler");

const toCamelCase = (val = '') => val.replace(/-+([a-z])?/g, (_, char) => char ? char.toUpperCase() : '');

function makeComponent(render) {
  class Scheduler extends _scheduler.BaseScheduler {
    constructor(renderer, frag, host) {
      super(renderer, host || frag);
      this.frag = frag;
    }

    commit(result) {
      render(result, this.frag);
    }

  }

  function component(renderer, baseElementOrOptions, options) {
    const BaseElement = (options || baseElementOrOptions || {}).baseElement || HTMLElement;
    const {
      observedAttributes = [],
      useShadowDOM = true,
      shadowRootInit = {}
    } = options || baseElementOrOptions || {};

    class Element extends BaseElement {
      constructor() {
        super();

        if (useShadowDOM === false) {
          this._scheduler = new Scheduler(renderer, this);
        } else {
          this.attachShadow({
            mode: 'open',
            ...shadowRootInit
          });
          this._scheduler = new Scheduler(renderer, this.shadowRoot, this);
        }
      }

      static get observedAttributes() {
        return renderer.observedAttributes || observedAttributes || [];
      }

      connectedCallback() {
        this._scheduler.update();
      }

      disconnectedCallback() {
        this._scheduler.teardown();
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
          return;
        }

        let val = newValue === '' ? true : newValue;
        Reflect.set(this, toCamelCase(name), val);
      }

    }

    ;

    function reflectiveProp(initialValue) {
      let value = initialValue;
      return Object.freeze({
        enumerable: true,
        configurable: true,

        get() {
          return value;
        },

        set(newValue) {
          value = newValue;

          this._scheduler.update();
        }

      });
    }

    const proto = new Proxy(BaseElement.prototype, {
      getPrototypeOf(target) {
        return target;
      },

      set(target, key, value, receiver) {
        let desc;

        if (key in target) {
          desc = Object.getOwnPropertyDescriptor(target, key);

          if (desc && desc.set) {
            desc.set.call(receiver, value);
            return true;
          }

          Reflect.set(target, key, value, receiver);
          return true;
        }

        if (typeof key === 'symbol' || key[0] === '_') {
          desc = {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          };
        } else {
          desc = reflectiveProp(value);
        }

        Object.defineProperty(receiver, key, desc);

        if (desc.set) {
          desc.set.call(receiver, value);
        }

        return true;
      }

    });
    Object.setPrototypeOf(Element.prototype, proto);
    return Element;
  }

  return component;
}
},{"./scheduler":"../node_modules/haunted/lib/scheduler.js"}],"../node_modules/haunted/lib/hook.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hook = hook;
exports.Hook = void 0;

var _interface = require("./interface");

var _symbols = require("./symbols");

class Hook {
  constructor(id, state) {
    this.id = id;
    this.state = state;
  }

}

exports.Hook = Hook;

function use(Hook, ...args) {
  let id = (0, _interface.notify)();
  let hooks = _interface.current[_symbols.hookSymbol];
  let hook = hooks.get(id);

  if (!hook) {
    hook = new Hook(id, _interface.current, ...args);
    hooks.set(id, hook);
  }

  return hook.update(...args);
}

function hook(Hook) {
  return use.bind(null, Hook);
}
},{"./interface":"../node_modules/haunted/lib/interface.js","./symbols":"../node_modules/haunted/lib/symbols.js"}],"../node_modules/haunted/lib/create-effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEffect = createEffect;

var _hook = require("./hook");

function createEffect(setEffects) {
  return (0, _hook.hook)(class extends _hook.Hook {
    constructor(id, state, ignored1, ignored2) {
      super(id, state);
      setEffects(state, this);
    }

    update(callback, values) {
      this.callback = callback;
      this.values = values;
    }

    call() {
      if (!this.values || this.hasChanged()) {
        this.run();
      }

      this.lastValues = this.values;
    }

    run() {
      this.teardown();
      this._teardown = this.callback.call(this.state);
    }

    teardown() {
      if (typeof this._teardown === 'function') {
        this._teardown();
      }
    }

    hasChanged() {
      return !this.lastValues || this.values.some((value, i) => this.lastValues[i] !== value);
    }

  });
}
},{"./hook":"../node_modules/haunted/lib/hook.js"}],"../node_modules/haunted/lib/use-effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEffects = setEffects;
exports.useEffect = void 0;

var _symbols = require("./symbols");

var _createEffect = require("./create-effect");

function setEffects(state, cb) {
  state[_symbols.effectsSymbol].push(cb);
}

const useEffect = (0, _createEffect.createEffect)(setEffects);
exports.useEffect = useEffect;
},{"./symbols":"../node_modules/haunted/lib/symbols.js","./create-effect":"../node_modules/haunted/lib/create-effect.js"}],"../node_modules/haunted/lib/use-context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContext = void 0;

var _hook = require("./hook");

var _symbols = require("./symbols");

var _useEffect = require("./use-effect");

const useContext = (0, _hook.hook)(class extends _hook.Hook {
  constructor(id, state, _) {
    super(id, state);
    this._updater = this._updater.bind(this);
    this._ranEffect = false;
    this._unsubscribe = null;
    (0, _useEffect.setEffects)(state, this);
  }

  update(Context) {
    if (this.state.virtual) {
      throw new Error('can\'t be used with virtual components');
    }

    if (this.Context !== Context) {
      this._subscribe(Context);

      this.Context = Context;
    }

    return this.value;
  }

  call() {
    if (!this._ranEffect) {
      this._ranEffect = true;
      if (this._unsubscribe) this._unsubscribe();

      this._subscribe(this.Context);

      this.state.update();
    }
  }

  _updater(value) {
    this.value = value;
    this.state.update();
  }

  _subscribe(Context) {
    const detail = {
      Context,
      callback: this._updater
    };
    this.state.host.dispatchEvent(new CustomEvent(_symbols.contextEvent, {
      detail,
      bubbles: true,
      cancelable: true,
      composed: true
    }));
    const {
      unsubscribe,
      value
    } = detail;
    this.value = unsubscribe ? value : Context.defaultValue;
    this._unsubscribe = unsubscribe;
  }

  teardown() {
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }

});
exports.useContext = useContext;
},{"./hook":"../node_modules/haunted/lib/hook.js","./symbols":"../node_modules/haunted/lib/symbols.js","./use-effect":"../node_modules/haunted/lib/use-effect.js"}],"../node_modules/haunted/lib/create-context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeContext = makeContext;

var _symbols = require("./symbols");

var _useContext = require("./use-context");

function makeContext(component) {
  return defaultValue => {
    const Context = {
      Provider: class extends HTMLElement {
        constructor() {
          super();
          this.listeners = new Set();
          this.addEventListener(_symbols.contextEvent, this);
        }

        disconnectedCallback() {
          this.removeEventListener(_symbols.contextEvent, this);
        }

        handleEvent(event) {
          const {
            detail
          } = event;

          if (detail.Context === Context) {
            detail.value = this.value;
            detail.unsubscribe = this.unsubscribe.bind(this, detail.callback);
            this.listeners.add(detail.callback);
            event.stopPropagation();
          }
        }

        unsubscribe(callback) {
          this.listeners.delete(callback);
        }

        set value(value) {
          this._value = value;

          for (let callback of this.listeners) {
            callback(value);
          }
        }

        get value() {
          return this._value;
        }

      },
      Consumer: component(function ({
        render
      }) {
        const context = (0, _useContext.useContext)(Context);
        return render(context);
      }),
      defaultValue
    };
    return Context;
  };
}
},{"./symbols":"../node_modules/haunted/lib/symbols.js","./use-context":"../node_modules/haunted/lib/use-context.js"}],"../node_modules/haunted/lib/use-memo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMemo = void 0;

var _hook = require("./hook");

const useMemo = (0, _hook.hook)(class extends _hook.Hook {
  constructor(id, state, fn, values) {
    super(id, state);
    this.value = fn();
    this.values = values;
  }

  update(fn, values) {
    if (this.hasChanged(values)) {
      this.values = values;
      this.value = fn();
    }

    return this.value;
  }

  hasChanged(values = []) {
    return values.some((value, i) => this.values[i] !== value);
  }

});
exports.useMemo = useMemo;
},{"./hook":"../node_modules/haunted/lib/hook.js"}],"../node_modules/haunted/lib/use-callback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = void 0;

var _useMemo = require("./use-memo");

const useCallback = (fn, inputs) => (0, _useMemo.useMemo)(() => fn, inputs);

exports.useCallback = useCallback;
},{"./use-memo":"../node_modules/haunted/lib/use-memo.js"}],"../node_modules/haunted/lib/use-layout-effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayoutEffect = void 0;

var _symbols = require("./symbols");

var _createEffect = require("./create-effect");

function setLayoutEffects(state, cb) {
  state[_symbols.layoutEffectsSymbol].push(cb);
}

const useLayoutEffect = (0, _createEffect.createEffect)(setLayoutEffects);
exports.useLayoutEffect = useLayoutEffect;
},{"./symbols":"../node_modules/haunted/lib/symbols.js","./create-effect":"../node_modules/haunted/lib/create-effect.js"}],"../node_modules/haunted/lib/use-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = void 0;

var _hook = require("./hook");

const useState = (0, _hook.hook)(class extends _hook.Hook {
  constructor(id, state, initialValue) {
    super(id, state);
    this.updater = this.updater.bind(this);

    if (typeof initialValue === 'function') {
      initialValue = initialValue();
    }

    this.makeArgs(initialValue);
  }

  update() {
    return this.args;
  }

  updater(value) {
    if (typeof value === 'function') {
      const updaterFn = value;
      const [previousValue] = this.args;
      value = updaterFn(previousValue);
    }

    this.makeArgs(value);
    this.state.update();
  }

  makeArgs(value) {
    this.args = Object.freeze([value, this.updater]);
  }

});
exports.useState = useState;
},{"./hook":"../node_modules/haunted/lib/hook.js"}],"../node_modules/haunted/lib/use-reducer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useReducer = void 0;

var _hook = require("./hook");

const useReducer = (0, _hook.hook)(class extends _hook.Hook {
  constructor(id, state, _, initialState, init) {
    super(id, state);
    this.dispatch = this.dispatch.bind(this);
    this.currentState = init !== undefined ? init(initialState) : initialState;
  }

  update(reducer) {
    this.reducer = reducer;
    return [this.currentState, this.dispatch];
  }

  dispatch(action) {
    this.currentState = this.reducer(this.currentState, action);
    this.state.update();
  }

});
exports.useReducer = useReducer;
},{"./hook":"../node_modules/haunted/lib/hook.js"}],"../node_modules/haunted/lib/use-ref.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRef = void 0;

var _useMemo = require("./use-memo");

const useRef = initialValue => (0, _useMemo.useMemo)(() => ({
  current: initialValue
}), []);

exports.useRef = useRef;
},{"./use-memo":"../node_modules/haunted/lib/use-memo.js"}],"../node_modules/haunted/lib/core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = haunted;
Object.defineProperty(exports, "useCallback", {
  enumerable: true,
  get: function () {
    return _useCallback.useCallback;
  }
});
Object.defineProperty(exports, "useEffect", {
  enumerable: true,
  get: function () {
    return _useEffect.useEffect;
  }
});
Object.defineProperty(exports, "useLayoutEffect", {
  enumerable: true,
  get: function () {
    return _useLayoutEffect.useLayoutEffect;
  }
});
Object.defineProperty(exports, "useState", {
  enumerable: true,
  get: function () {
    return _useState.useState;
  }
});
Object.defineProperty(exports, "useReducer", {
  enumerable: true,
  get: function () {
    return _useReducer.useReducer;
  }
});
Object.defineProperty(exports, "useMemo", {
  enumerable: true,
  get: function () {
    return _useMemo.useMemo;
  }
});
Object.defineProperty(exports, "useContext", {
  enumerable: true,
  get: function () {
    return _useContext.useContext;
  }
});
Object.defineProperty(exports, "useRef", {
  enumerable: true,
  get: function () {
    return _useRef.useRef;
  }
});
Object.defineProperty(exports, "hook", {
  enumerable: true,
  get: function () {
    return _hook.hook;
  }
});
Object.defineProperty(exports, "Hook", {
  enumerable: true,
  get: function () {
    return _hook.Hook;
  }
});
Object.defineProperty(exports, "BaseScheduler", {
  enumerable: true,
  get: function () {
    return _scheduler.BaseScheduler;
  }
});
Object.defineProperty(exports, "State", {
  enumerable: true,
  get: function () {
    return _state.State;
  }
});

var _component = require("./component");

var _createContext = require("./create-context");

var _useCallback = require("./use-callback");

var _useEffect = require("./use-effect");

var _useLayoutEffect = require("./use-layout-effect");

var _useState = require("./use-state");

var _useReducer = require("./use-reducer");

var _useMemo = require("./use-memo");

var _useContext = require("./use-context");

var _useRef = require("./use-ref");

var _hook = require("./hook");

var _scheduler = require("./scheduler");

var _state = require("./state");

function haunted({
  render
}) {
  const component = (0, _component.makeComponent)(render);
  const createContext = (0, _createContext.makeContext)(component);
  return {
    component,
    createContext
  };
}
},{"./component":"../node_modules/haunted/lib/component.js","./create-context":"../node_modules/haunted/lib/create-context.js","./use-callback":"../node_modules/haunted/lib/use-callback.js","./use-effect":"../node_modules/haunted/lib/use-effect.js","./use-layout-effect":"../node_modules/haunted/lib/use-layout-effect.js","./use-state":"../node_modules/haunted/lib/use-state.js","./use-reducer":"../node_modules/haunted/lib/use-reducer.js","./use-memo":"../node_modules/haunted/lib/use-memo.js","./use-context":"../node_modules/haunted/lib/use-context.js","./use-ref":"../node_modules/haunted/lib/use-ref.js","./hook":"../node_modules/haunted/lib/hook.js","./scheduler":"../node_modules/haunted/lib/scheduler.js","./state":"../node_modules/haunted/lib/state.js"}],"../node_modules/haunted/lib/virtual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeVirtual = makeVirtual;

var _litHtml = require("lit-html");

var _scheduler = require("./scheduler");

const includes = Array.prototype.includes;

function makeVirtual() {
  const partToScheduler = new WeakMap();
  const schedulerToPart = new WeakMap();

  class Scheduler extends _scheduler.BaseScheduler {
    constructor(renderer, part) {
      super(renderer, part);
      this.state.virtual = true;
    }

    render() {
      return this.state.run(() => this.renderer.apply(this.host, this.args));
    }

    commit(result) {
      this.host.setValue(result);
      this.host.commit();
    }

    teardown() {
      super.teardown();
      let part = schedulerToPart.get(this);
      partToScheduler.delete(part);
    }

  }

  function virtual(renderer) {
    function factory(...args) {
      return part => {
        let cont = partToScheduler.get(part);

        if (!cont) {
          cont = new Scheduler(renderer, part);
          partToScheduler.set(part, cont);
          schedulerToPart.set(cont, part);
          teardownOnRemove(cont, part);
        }

        cont.args = args;
        cont.update();
      };
    }

    return (0, _litHtml.directive)(factory);
  }

  return virtual;
}

function teardownOnRemove(cont, part, node = part.startNode) {
  let frag = node.parentNode;
  let mo = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      if (includes.call(mutation.removedNodes, node)) {
        mo.disconnect();

        if (node.parentNode instanceof ShadowRoot) {
          teardownOnRemove(cont, part);
        } else {
          cont.teardown();
        }

        break;
      } else if (includes.call(mutation.addedNodes, node.nextSibling)) {
        mo.disconnect();
        teardownOnRemove(cont, part, node.nextSibling || undefined);
        break;
      }
    }
  });
  mo.observe(frag, {
    childList: true
  });
}
},{"lit-html":"../node_modules/lit-html/lit-html.js","./scheduler":"../node_modules/haunted/lib/scheduler.js"}],"../node_modules/haunted/lib/lit-haunted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _litHtml.html;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _litHtml.render;
  }
});
exports.virtual = exports.createContext = exports.component = void 0;

var _litHtml = require("lit-html");

var _core = _interopRequireDefault(require("./core"));

var _virtual = require("./virtual");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  component,
  createContext
} = (0, _core.default)({
  render: _litHtml.render
});
exports.createContext = createContext;
exports.component = component;
const virtual = (0, _virtual.makeVirtual)();
exports.virtual = virtual;
},{"lit-html":"../node_modules/lit-html/lit-html.js","./core":"../node_modules/haunted/lib/core.js","./virtual":"../node_modules/haunted/lib/virtual.js"}],"../node_modules/haunted/lib/haunted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  html: true,
  render: true,
  component: true,
  createContext: true,
  virtual: true
};
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _litHaunted.html;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _litHaunted.render;
  }
});
Object.defineProperty(exports, "component", {
  enumerable: true,
  get: function () {
    return _litHaunted.component;
  }
});
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _litHaunted.createContext;
  }
});
Object.defineProperty(exports, "virtual", {
  enumerable: true,
  get: function () {
    return _litHaunted.virtual;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _core.default;
  }
});

var _litHaunted = require("./lit-haunted");

var _core = _interopRequireWildcard(require("./core"));

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _core[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./lit-haunted":"../node_modules/haunted/lib/lit-haunted.js","./core":"../node_modules/haunted/lib/core.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

var _utils = require("./utils");

var _constants = require("./constants");

var _haunted = require("haunted");

function _templateObject20() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        value=", "\n                        name=\"canadaEduDegree\"\n                        ?checked=", "\n                        @change=", "\n                      />\n                      ", "\n                    </label>\n                  </div>"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        value=", "\n                        name=\"employerType\"\n                        ?checked=", "\n                        @change=", "\n                      />\n                      ", "\n                    </label>\n                  </div>"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["<span>\n                                    CLB", "\uFF1A", "\u5206\n                                  </span>"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["<div class=\"form-group\">\n                            <label>\n                              ", "\n                              <input\n                                type=\"text\"\n                                @keyup=", "\n                              />\n                              ", "\n                            </label>\n                          </div>"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                            <label>\n                              <input\n                                type=\"radio\"\n                                value=", "\n                                name=\"spouseLanTestType\"\n                                ?checked=", "\n                                @change=", "\n                              />\n                              ", "\n                            </label>\n                          </div>"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["<tr>\n                    <td>\u914D\u5076\u7B2C\u4E00\u8BED\u8A00</td>\n                    <td class=\"left\">\n                      ", "\n                      ", "\n                    </td>\n                    <td>\n                      <span>\n                        ", "\n                      </span>\n                    </td>\n                  </tr>"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                        <label>\n                          <input\n                            type=\"radio\"\n                            value=", "\n                            name=\"spouseEduLevel\"\n                            ?checked=", "\n                            @change=", "\n                          />\n                          ", "\n                        </label>\n                      </div>"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["<tr>\n                <td>\u914D\u5076\u5B66\u5386</td>\n                <td class=\"left\">\n                  ", "\n                  <div class=\"checkbox\">\n                    <label>\n                      <input\n                        type=\"checkbox\"\n                        ?checked=", "\n                        @change=", "\n                      />\n                      \u914D\u5076\u62E5\u6709\u8BED\u8A00\u6210\u7EE9\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <span>", "</span>\n                </td>\n              </tr>\n              ", "\n\n              <tr>\n                <td>\u914D\u5076\u5DE5\u4F5C\u7ECF\u9A8C</td>\n                <td class=\"left\">\n                  <div class=\"form-group\">\n                    <label>\n                      \u52A0\u62FF\u5927\u5DE5\u4F5C\u7ECF\u9A8C\uFF08\u53EF\u4EE5\u4E0D\u8FDE\u7EED\uFF09 \u3000\u3000\n                      <input\n                        type=\"text\"\n                        placeholder=\"\u8BF7\u586B\u5199\u5E74\u6570\"\n                        width=\"120px\"\n                        @keyup=", "\n                      />\u5E74\n                    </label>\n                  </div>\n                  \u5DE5\u4F5C\u7ECF\u9A8C\u5FC5\u987B\u662FNOC\u76840\u3001A\u6216\u8005B\u7C7B\n                </td>\n                <td><span>", "</span></td>\n              </tr>"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["<span>\n                              CLB", "\uFF1A", "\u5206\n                            </span>"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["<div class=\"form-group\">\n                      <label>\n                        ", "\n                        <input\n                          type=\"text\"\n                          @keyup=", "\n                        />\n                        ", "\n                      </label>\n                    </div>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                      <label>\n                        <input\n                          type=\"radio\"\n                          value=", "\n                          name=\"secondLanTestType\"\n                          ?checked=", "\n                          @change=", "\n                        />\n                        ", "\n                      </label>\n                    </div>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<tr>\n              <td>\u7B2C\u4E8C\u8BED\u8A00</td>\n              <td class=\"left\">\n                ", "\n                ", "\n              </td>\n              <td>\n                <span\n                  >", "</span\n                >\n              </td>\n            </tr>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["<span>\n                            CLB", "\uFF1A", "\u5206\n                          </span>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<div class=\"form-group\">\n                    <label>\n                      ", "\n                      <input\n                        type=\"text\"\n                        @keyup=", "\n                      />\n                      ", "\n                    </label>\n                  </div>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["", "\n              <div class=\"checkbox\">\n                <label>\n                  <input\n                    type=\"checkbox\"\n                    ?checked=", "\n                    @change=", "\n                  />\n                  \u540C\u65F6\u62E5\u6709\u7B2C\u4E8C\u95E8\u8BED\u8A00\u6210\u7EE9\n                </label>\n              </div>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                  <label>\n                    <input\n                      type=\"radio\"\n                      value=", "\n                      name=\"firstLanTestType\"\n                      ?checked=", "\n                      @change=", "\n                    />\n                    ", "\n                  </label>\n                </div>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<div class=\"radio\">\n                  <label>\n                    <input\n                      type=\"radio\"\n                      value=", "\n                      name=\"eduLevel\"\n                      ?checked=", "\n                      @change=", "\n                    />\n                    ", "\n                  </label>\n                </div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<table class=\"table table-bordered crs-table-inner\">\n      <tbody>\n        <tr>\n          <td width=\"15%\">\u5A5A\u59FB</td>\n          <td colspan=\"2\">\n            <label>\n              <input\n                type=\"radio\"\n                name=\"maritalStatus\"\n                ?checked=", "\n                @change=", "\n              />\n              \u5355\u8EAB\u6216\u4E0D\u5E26\u4F34\u4FA3\u7533\u8BF7\n            </label>\n            <label>\n              <input\n                type=\"radio\"\n                name=\"maritalStatus\"\n                ?checked=", "\n                @change=", "\n              />\n              \u5E26\u914D\u5076\u6216\u4F34\u4FA3\u7533\u8BF7\n            </label>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">A. \u6838\u5FC3/\u4EBA\u529B\u8D44\u672C\u56E0\u7D20 Core / human capital factors</td>\n          <td>\u6EE1\u5206", "</td>\n        </tr>\n        <tr>\n          <td>\u5E74\u9F84</td>\n          <td width=\"70%\" class=\"left\">\n            <input\n              type=\"text\"\n              placeholder=\"\u8BF7\u586B\u5199\u5E74\u9F84\u6570\u5B57\"\n              width=\"120px\"\n              @keyup=", "\n            />\n          </td>\n          <td width=\"15%\"><span>", "</span></td>\n        </tr>\n        <tr>\n          <td>\u5B66\u5386</td>\n          <td class=\"left\">\n            ", "\n          </td>\n          <td><span>", "</span></td>\n        </tr>\n        <tr>\n          <td>\u7B2C\u4E00\u8BED\u8A00</td>\n          <td class=\"left\">\n            ", "\n            ", "\n          </td>\n          <td>\n            <span>", "</span>\n          </td>\n        </tr>\n        ", "\n        <tr>\n          <td>\u5DE5\u4F5C\u7ECF\u9A8C</td>\n          <td class=\"left\">\n            <div class=\"form-group\">\n              <label>\n                \u52A0\u62FF\u5927\u5DE5\u4F5C\u7ECF\u9A8C\uFF08\u53EF\u4EE5\u4E0D\u8FDE\u7EED\uFF09 \u3000\u3000\n                <input\n                  type=\"text\"\n                  placeholder=\"\u8BF7\u586B\u5199\u5E74\u6570\"\n                  width=\"120px\"\n                  @keyup=", "\n                />\u5E74\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label>\n                \u975E\u52A0\u62FF\u5927\u5DE5\u4F5C\u7ECF\u9A8C\uFF08\u53EF\u4EE5\u4E0D\u8FDE\u7EED\uFF09 \u3000\n                <input\n                  type=\"text\"\n                  placeholder=\"\u8BF7\u586B\u5199\u5E74\u6570\"\n                  width=\"120px\"\n                  @keyup=", "\n                />\u5E74\n              </label>\n            </div>\n            \u975E\u52A0\u62FF\u5927\u7684\u5DE5\u4F5C\u7ECF\u9A8C\u4E0D\u80FD\u76F4\u63A5\u4EA7\u751F\u5206\u6570\uFF0C\u4F46\u662F\u5728\u540E\u7EED\u4EA4\u53C9\u9879\u6709\u53EF\u80FD\u7B97\u5206<br />\n            \u5DE5\u4F5C\u7ECF\u9A8C\u5FC5\u987B\u662FNOC\u76840\u3001A\u6216\u8005B\u7C7B\n          </td>\n          <td><span>", "</span></td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">B. \u914D\u5076\u56E0\u7D20 Spouse factors</td>\n          <td>\u6EE1\u520640</td>\n        </tr>\n        ", "\n        <tr>\n          <td colspan=\"2\">\n            C. \u8FC1\u79FB\u80FD\u529B\u56E0\u7D20\uFF08\u4EA4\u53C9\u9879\uFF09 Skill transferability factors\n          </td>\n          <td>\u6EE1\u5206100</td>\n        </tr>\n        <tr>\n          <td>\n            \u6559\u80B2<br />\n            \u6700\u9AD850\u5206\n          </td>\n          <td class=\"left\">\n            \u672C\u680F\u81EA\u52A8\u8BA1\u7B97\u5206\u6570<br />\n            \u6559\u80B2\u80CC\u666Fx\u8BED\u8A00\u80FD\u529B \u60A8\u7684\u5F97\u5206\uFF1A<span>\n              ", "</span\n            ><br />\n            1\u5E74\u5927\u4E13\u53CA\u4EE5\u4E0A<strong>\u540C\u65F6</strong>\u7B2C\u4E00\u8BED\u8A00\u6BCF\u4E00\u9879\u90FD\u6709CLB7\u7EA7\uFF08\u542B\uFF09\u4EE5\u4E0A\uFF0C\u53EF\u4EE5\u83B7\u5F97\u5206\u6570<br />\u53CC\u5B66\u4F4D\u4EE5\u4E0A\u6216\u8005\u7B2C\u4E00\u8BED\u8A00\u6BCF\u4E00\u9879\u90FD\u6709CLB9\u7EA7\uFF08\u542B\uFF09\u4EE5\u4E0A\uFF0C\u4F1A\u6709\u66F4\u591A\u5206\u6570\n            <p></p>\n            <p>\n              \u6559\u80B2\u80CC\u666Fx\u52A0\u62FF\u5927\u5DE5\u4F5C\u7ECF\u9A8C \u60A8\u7684\u5F97\u5206\uFF1A\n              <span>", "</span><br />\n              1\u5E74\u5927\u4E13\u53CA\u4EE5\u4E0A<strong>\u540C\u65F6</strong>\u52A0\u62FF\u5927\u5DE5\u4F5C\u8FC71\u5E74\uFF0C\u53EF\u4EE5\u83B7\u5F97\u5206\u6570<br />\u53CC\u5B66\u4F4D\u4EE5\u4E0A\u6216\u8005\u52A0\u62FF\u5927\u5DE5\u4F5C\u4E24\u5E74\u4EE5\u4E0A\uFF0C\u4F1A\u6709\u66F4\u591A\u5206\u6570\n            </p>\n          </td>\n          <td>\n            <span\n              >", "</span\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            \u6D77\u5916\u5DE5\u4F5C\u7ECF\u9A8C<br />\n            \u6700\u9AD850\u5206\n          </td>\n          <td class=\"left\">\n            \u672C\u680F\u81EA\u52A8\u8BA1\u7B97\u5206\u6570<br />\n            \u6D77\u5916\uFF08\u5305\u62EC\u4E2D\u56FD\uFF09\u5DE5\u4F5C\u7ECF\u9A8Cx\u8BED\u8A00\u80FD\u529B \u60A8\u7684\u5F97\u5206\uFF1A<span\n              >", "</span\n            ><br />\n            1\u5E74\u6D77\u5916\u5DE5\u4F5C\u7ECF\u5386<strong>\u540C\u65F6</strong>\u7B2C\u4E00\u8BED\u8A00\u6BCF\u4E00\u9879\u90FD\u6709CLB7\u7EA7\uFF08\u542B\uFF09\u4EE5\u4E0A\uFF0C\u53EF\u4EE5\u83B7\u5F97\u5206\u6570<br />3\u5E74\u6D77\u5916\u5DE5\u4F5C\u7ECF\u5386\u6216\u8005\u7B2C\u4E00\u8BED\u8A00\u6BCF\u4E00\u9879\u90FD\u6709CLB9\u7EA7\uFF08\u542B\uFF09\u4EE5\u4E0A\uFF0C\u4F1A\u6709\u66F4\u591A\u5206\u6570\n            <p></p>\n            <p>\n              \u6D77\u5916\u5DE5\u4F5C\u7ECF\u9A8Cx\u52A0\u62FF\u5927\u5DE5\u4F5C\u7ECF\u9A8C \u60A8\u7684\u5F97\u5206\uFF1A\n              <span\n                >", "</span\n              ><br />\n              \u6D77\u5916\u5DE5\u4F5C1\u5E74<strong>\u540C\u65F6</strong>\u52A0\u62FF\u5927\u5DE5\u4F5C1\u5E74\uFF0C\u53EF\u4EE5\u83B7\u5F97\u5206\u6570<br />3\u5E74\u6D77\u5916\u5DE5\u4F5C\u7ECF\u5386\u6216\u8005\u52A0\u62FF\u5927\u5DE5\u4F5C\u4E24\u5E74\u4EE5\u4E0A\uFF0C\u4F1A\u6709\u66F4\u591A\u5206\u6570\n            </p>\n          </td>\n          <td>\n            <span\n              >", "</span\n            >\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">D. \u9644\u52A0\u5206 Addtional points</td>\n          <td>\u6EE1\u5206600</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" id=\"ques12\">\n            <div class=\"form-group\">\n              <h5>\u7701\u63D0\u540D</h5>\n              <div class=\"checkbox\">\n                <label>\n                  <input\n                    type=\"checkbox\"\n                    ?checked=", "\n                    @change=", "\n                  />\n                  \u6211\u6709\u7701\u63D0\u540D\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <h5>\u96C7\u4E3B\u62C5\u4FDD\uFF08LMIA\u6216\u8005\u5C01\u95ED\u5F0F\u5DE5\u7B7E\uFF09</h5>\n              ", "\n            </div>\n            <div class=\"form-group\">\n              <h5>\u5728\u52A0\u62FF\u5927\u5B66\u5386</h5>\n              ", "\n            </div>\n            <div class=\"form-group\">\n              <h5>\u6CD5\u8BED\u52A0\u5206</h5>\n              \u6CD5\u8BED\u8FBE\u5230 CLB7 \u4EE5\u4E0A\u4F1A\u81EA\u52A8\u4EA7\u751F\u9644\u52A0\u5206\u3002\u60A8\u7684\u5F97\u5206\uFF1A\n              <span\n                >", "</span\n              >\n            </div>\n            <div class=\"form-group\">\n              <h5>\u5144\u5F1F\u59D0\u59B9\u52A0\u5206</h5>\n              <div class=\"checkbox\">\n                <label>\n                  <input\n                    type=\"checkbox\"\n                    ?checked=", "\n                    @change=", "\n                  />\n                  \u7533\u8BF7\u4EBA\u6216\u914D\u5076\u6709\u52A0\u62FF\u5927\u5144\u5F1F\u59D0\u59B9\n                </label>\n              </div>\n            </div>\n          </td>\n          <td>\n            <span\n              >", "</span\n            >\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\u603B\u5206</td>\n          <td>\n            <span\n              >", "</span\n            >\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <style>\n      .crs-table-inner .radio:first-child {\n        margin-top: 0;\n      }\n      .crs-table-inner .form-group {\n        margin-bottom: 0;\n      }\n    </style>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CRSForm() {
  var initialTestInfo = {};

  _constants.LAN_TEST_SUBJECTS.forEach(function (subject) {
    initialTestInfo[subject] = {
      testScore: 0,
      clb: 0,
      score: 0
    };
  });

  var _useState = (0, _haunted.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isSingle = _useState2[0],
      setIsSingle = _useState2[1];

  var _useState3 = (0, _haunted.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      age = _useState4[0],
      setAge = _useState4[1];

  var _useState5 = (0, _haunted.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      eduLevel = _useState6[0],
      setEduLevel = _useState6[1];

  var _useState7 = (0, _haunted.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      firstLanTestType = _useState8[0],
      setFirstLanTestType = _useState8[1];

  var _useState9 = (0, _haunted.useState)(initialTestInfo),
      _useState10 = _slicedToArray(_useState9, 2),
      firstLanTestInfo = _useState10[0],
      setFirstLanTestInfo = _useState10[1];

  var _useState11 = (0, _haunted.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      secondLanEnabled = _useState12[0],
      setSecondLanEnabled = _useState12[1];

  var _useState13 = (0, _haunted.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      secondLanTestType = _useState14[0],
      setSecondLanTestType = _useState14[1];

  var _useState15 = (0, _haunted.useState)(initialTestInfo),
      _useState16 = _slicedToArray(_useState15, 2),
      secondLanTestInfo = _useState16[0],
      setSecondLanTestInfo = _useState16[1];

  var _useState17 = (0, _haunted.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      exp = _useState18[0],
      setExp = _useState18[1];

  var _useState19 = (0, _haunted.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      overseasExp = _useState20[0],
      setOverseasExp = _useState20[1];

  var _useState21 = (0, _haunted.useState)(null),
      _useState22 = _slicedToArray(_useState21, 2),
      spouseEduLevel = _useState22[0],
      setSpouseEduLevel = _useState22[1];

  var _useState23 = (0, _haunted.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      spouseLanEnabled = _useState24[0],
      setSpouseLanEnabled = _useState24[1];

  var _useState25 = (0, _haunted.useState)(null),
      _useState26 = _slicedToArray(_useState25, 2),
      spouseLanTestType = _useState26[0],
      setSpouseLanTestType = _useState26[1];

  var _useState27 = (0, _haunted.useState)(initialTestInfo),
      _useState28 = _slicedToArray(_useState27, 2),
      spouseLanTestInfo = _useState28[0],
      setSpouseLanTestInfo = _useState28[1];

  var _useState29 = (0, _haunted.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      spouseExp = _useState30[0],
      setSpouseExp = _useState30[1];

  var _useState31 = (0, _haunted.useState)(false),
      _useState32 = _slicedToArray(_useState31, 2),
      hasProvincialNominee = _useState32[0],
      setHasProvincialNominee = _useState32[1];

  var _useState33 = (0, _haunted.useState)(null),
      _useState34 = _slicedToArray(_useState33, 2),
      employerType = _useState34[0],
      setEmployerType = _useState34[1];

  var _useState35 = (0, _haunted.useState)(null),
      _useState36 = _slicedToArray(_useState35, 2),
      canadaEduDegree = _useState36[0],
      setCanadaEduDegree = _useState36[1];

  var _useState37 = (0, _haunted.useState)(false),
      _useState38 = _slicedToArray(_useState37, 2),
      hasSibling = _useState38[0],
      setHasSibling = _useState38[1];

  var onIsSingleChanged = function onIsSingleChanged(e, isSingleCheckbox) {
    console.log(isSingleCheckbox);

    if (isSingleCheckbox) {
      setIsSingle(e.target.checked);

      if (e.target.checked) {
        setSpouseEduLevel(null);
        setSpouseLanEnabled(false);
        setSpouseLanTestType(initialTestInfo);
      }
    } else {
      setIsSingle(!e.target.checked);
    }

    setFirstLanTestInfo(function (firstLanTestInfo) {
      var newFirstLanTestInfo = {};
      Object.keys(firstLanTestInfo).forEach(function (testSubject) {
        var testScore = firstLanTestInfo[testSubject].testScore;
        var clb = firstLanTestInfo[testSubject].clb;
        newFirstLanTestInfo[testSubject] = {
          testScore: testScore,
          clb: clb,
          score: (0, _utils.clbToScore)(clb, isSingleCheckbox ? e.target.checked : !e.target.checked, false, true)
        };
      });
      return newFirstLanTestInfo;
    });

    if (secondLanEnabled) {
      setSecondLanTestInfo(function (secondLanTestInfo) {
        var newSecondLanTestInfo = {};
        Object.keys(secondLanTestInfo).forEach(function (testSubject) {
          var testScore = secondLanTestInfo[testSubject].testScore;
          var clb = secondLanTestInfo[testSubject].clb;
          newSecondLanTestInfo[testSubject] = {
            testScore: testScore,
            clb: clb,
            score: (0, _utils.clbToScore)(clb, e.target.checked, false, false)
          };
        });
        return newSecondLanTestInfo;
      });
    }
  };

  var onAgeChanged = function onAgeChanged(e) {
    var rawAge = e.target.value;
    var age = Number(rawAge);

    if (!Number.isNaN(age) && age > 0 && age < 100) {
      setAge(age);
    } else {
      setAge(null);
    }
  };

  var onFirstLanTestTypeChanged = function onFirstLanTestTypeChanged(e) {
    setFirstLanTestType(e.target.value);
    setFirstLanTestInfo(function (firstLanTestInfo) {
      var newFirstLanTestInfo = {};
      Object.keys(firstLanTestInfo).forEach(function (testSubject) {
        var testScore = firstLanTestInfo[testSubject].testScore;
        newFirstLanTestInfo[testSubject] = {
          testScore: testScore,
          clb: (0, _utils.lanTestToClb)(testScore, e.target.value, testSubject),
          score: (0, _utils.clbToScore)((0, _utils.lanTestToClb)(testScore, e.target.value, testSubject), isSingle, false, true)
        };
      });
      return newFirstLanTestInfo;
    });
  };

  var onFirstLanChanged = function onFirstLanChanged(e, testSubject) {
    var rawTestScore = e.target.value;
    var testScore = Number(rawTestScore);

    if (!Number.isNaN(testScore)) {
      setFirstLanTestInfo(function (firstLanTestInfo) {
        return _objectSpread(_objectSpread({}, firstLanTestInfo), {}, _defineProperty({}, testSubject, {
          testScore: testScore,
          clb: (0, _utils.lanTestToClb)(testScore, firstLanTestType, testSubject),
          score: (0, _utils.clbToScore)((0, _utils.lanTestToClb)(testScore, firstLanTestType, testSubject), isSingle, false, true)
        }));
      });
    }
  };

  var onSecondLanEnabledChanged = function onSecondLanEnabledChanged(e) {
    setSecondLanEnabled(e.target.checked);

    if (e.target.checked === false) {
      setSecondLanTestType(null);
    }
  };

  var onSecondLanTestTypeChanged = function onSecondLanTestTypeChanged(e) {
    setSecondLanTestType(e.target.value);
    setSecondLanTestInfo(function (secondLanTestInfo) {
      var newSecondLanTestInfo = {};
      Object.keys(secondLanTestInfo).forEach(function (testSubject) {
        var testScore = secondLanTestInfo[testSubject].testScore;
        newSecondLanTestInfo[testSubject] = {
          testScore: testScore,
          clb: (0, _utils.lanTestToClb)(testScore, e.target.value, testSubject),
          score: (0, _utils.clbToScore)((0, _utils.lanTestToClb)(testScore, e.target.value, testSubject), isSingle, false, false)
        };
      });
      return newSecondLanTestInfo;
    });
  };

  var onSecondLanChanged = function onSecondLanChanged(e, testSubject) {
    var rawTestScore = e.target.value;
    var testScore = Number(rawTestScore);

    if (!Number.isNaN(testScore)) {
      setSecondLanTestInfo(function (secondLanTestInfo) {
        return _objectSpread(_objectSpread({}, secondLanTestInfo), {}, _defineProperty({}, testSubject, {
          testScore: testScore,
          clb: (0, _utils.lanTestToClb)(testScore, secondLanTestType, testSubject),
          score: (0, _utils.clbToScore)((0, _utils.lanTestToClb)(testScore, secondLanTestType, testSubject), isSingle, false, false)
        }));
      });
    }
  };

  var onExpChanged = function onExpChanged(e) {
    var rawExp = e.target.value;
    var exp = Number(rawExp);

    if (!Number.isNaN(exp) && exp > 0 && exp < 100) {
      setExp(exp);
    } else {
      setExp(null);
    }
  };

  var onOverseasExpChanged = function onOverseasExpChanged(e) {
    var rawOverseasExp = e.target.value;
    var overseasExp = Number(rawOverseasExp);

    if (!Number.isNaN(overseasExp) && overseasExp > 0 && overseasExp < 100) {
      setOverseasExp(overseasExp);
    } else {
      setOverseasExp(null);
    }
  };

  var onSpouseLanEnabledChanged = function onSpouseLanEnabledChanged(e) {
    setSpouseLanEnabled(e.target.checked);

    if (e.target.checked === false) {
      setSpouseLanTestType(null);
    }
  };

  var onSpouseLanTestTypeChanged = function onSpouseLanTestTypeChanged(e) {
    setSpouseLanTestType(e.target.value);
    setSpouseLanTestInfo(function (spouseLanTestInfo) {
      var newSpouseLanTestInfo = {};
      Object.keys(spouseLanTestInfo).forEach(function (testSubject) {
        var testScore = spouseLanTestInfo[testSubject].testScore;
        var clb = (0, _utils.lanTestToClb)(testScore, e.target.value, testSubject);
        newSpouseLanTestInfo[testSubject] = {
          testScore: testScore,
          clb: clb,
          score: (0, _utils.clbToScore)(clb, isSingle, true, false)
        };
      });
      return newSpouseLanTestInfo;
    });
  };

  var onSpouseLanChanged = function onSpouseLanChanged(e, testSubject) {
    var rawTestScore = e.target.value;
    var testScore = Number(rawTestScore);

    if (!Number.isNaN(testScore)) {
      setSpouseLanTestInfo(function (spouseLanTestInfo) {
        return _objectSpread(_objectSpread({}, spouseLanTestInfo), {}, _defineProperty({}, testSubject, {
          testScore: testScore,
          clb: (0, _utils.lanTestToClb)(testScore, spouseLanTestType, testSubject),
          score: (0, _utils.clbToScore)((0, _utils.lanTestToClb)(testScore, spouseLanTestType, testSubject), isSingle, true, false)
        }));
      });
    }
  };

  var onSpouseExpChanged = function onSpouseExpChanged(e) {
    var rawSpouseExp = e.target.value;
    var spouseExp = Number(rawSpouseExp);

    if (!Number.isNaN(spouseExp) && spouseExp > 0 && spouseExp < 100) {
      setSpouseExp(spouseExp);
    } else {
      setSpouseExp(null);
    }
  };

  var onHasProvincialNomineeChanged = function onHasProvincialNomineeChanged(e) {
    setHasProvincialNominee(e.target.checked);
  };

  var onEmployerTypeChanged = function onEmployerTypeChanged(e) {
    setEmployerType(e.target.value);
  };

  var onCanadaEduDegreeChanged = function onCanadaEduDegreeChanged(e) {
    setCanadaEduDegree(e.target.value);
  };

  var onHasSiblingChanged = function onHasSiblingChanged(e) {
    setHasSibling(e.target.checked);
  };

  return (0, _haunted.html)(_templateObject(), isSingle, function (e) {
    return onIsSingleChanged(e, true);
  }, !isSingle, function (e) {
    return onIsSingleChanged(e, false);
  }, isSingle ? 500 : 460, onAgeChanged, (0, _utils.ageToScore)(age, isSingle), _constants.EDU_LEVELS.map(function (eduLevelName) {
    return (0, _haunted.html)(_templateObject2(), eduLevelName, eduLevel === eduLevelName, function (e) {
      return setEduLevel(e.target.value);
    }, eduLevelName);
  }), (0, _utils.eduToScore)(eduLevel, isSingle, false), _constants.LAN_TEST_TYPES.map(function (testType) {
    return (0, _haunted.html)(_templateObject3(), testType, testType === firstLanTestType, onFirstLanTestTypeChanged, testType);
  }), firstLanTestType && (0, _haunted.html)(_templateObject4(), _constants.LAN_TEST_SUBJECTS.map(function (testSubject) {
    return (0, _haunted.html)(_templateObject5(), testSubject, function (e) {
      return onFirstLanChanged(e, testSubject);
    }, firstLanTestInfo[testSubject].score > 0 ? (0, _haunted.html)(_templateObject6(), firstLanTestInfo[testSubject].clb, firstLanTestInfo[testSubject].score) : null);
  }), secondLanEnabled, onSecondLanEnabledChanged), (0, _utils.lanToScore)(firstLanTestInfo, isSingle, false, true), secondLanEnabled ? (0, _haunted.html)(_templateObject7(), _constants.LAN_TEST_TYPES.filter(function (testType) {
    return _constants.ENGLISH_TEST_TYPES.includes(testType) && !_constants.ENGLISH_TEST_TYPES.includes(firstLanTestType) || _constants.FRENCH_TEST_TYPES.includes(testType) && !_constants.FRENCH_TEST_TYPES.includes(firstLanTestType);
  }).map(function (testType) {
    return (0, _haunted.html)(_templateObject8(), testType, testType === secondLanTestType, onSecondLanTestTypeChanged, testType);
  }), secondLanTestType && (0, _haunted.html)(_templateObject9(), _constants.LAN_TEST_SUBJECTS.map(function (testSubject) {
    return (0, _haunted.html)(_templateObject10(), testSubject, function (e) {
      return onSecondLanChanged(e, testSubject);
    }, secondLanTestInfo[testSubject].score > 0 ? (0, _haunted.html)(_templateObject11(), secondLanTestInfo[testSubject].clb, secondLanTestInfo[testSubject].score) : null);
  })), (0, _utils.lanToScore)(secondLanTestInfo, isSingle, false, false)) : null, onExpChanged, onOverseasExpChanged, (0, _utils.expToScore)(exp, isSingle, false), !isSingle ? (0, _haunted.html)(_templateObject12(), _constants.EDU_LEVELS.map(function (eduLevelName) {
    return (0, _haunted.html)(_templateObject13(), eduLevelName, spouseEduLevel === eduLevelName, function (e) {
      return setSpouseEduLevel(e.target.value);
    }, eduLevelName);
  }), spouseLanEnabled, onSpouseLanEnabledChanged, (0, _utils.eduToScore)(spouseEduLevel, isSingle, true), spouseLanEnabled ? (0, _haunted.html)(_templateObject14(), _constants.LAN_TEST_TYPES.map(function (testType) {
    return (0, _haunted.html)(_templateObject15(), testType, testType === spouseLanTestType, onSpouseLanTestTypeChanged, testType);
  }), spouseLanTestType && (0, _haunted.html)(_templateObject16(), _constants.LAN_TEST_SUBJECTS.map(function (testSubject) {
    return (0, _haunted.html)(_templateObject17(), testSubject, function (e) {
      return onSpouseLanChanged(e, testSubject);
    }, spouseLanTestInfo[testSubject].score > 0 ? (0, _haunted.html)(_templateObject18(), spouseLanTestInfo[testSubject].clb, spouseLanTestInfo[testSubject].score) : null);
  })), (0, _utils.lanToScore)(spouseLanTestInfo, isSingle, true, false)) : null, onSpouseExpChanged, (0, _utils.expToScore)(spouseExp, isSingle, true)) : null, (0, _utils.transferEduMultiplyLanToScore)(eduLevel, firstLanTestInfo), (0, _utils.transferEduMultiplyExpToScore)(eduLevel, exp), (0, _utils.transferEduToScore)((0, _utils.transferEduMultiplyLanToScore)(eduLevel, firstLanTestInfo), (0, _utils.transferEduMultiplyExpToScore)(eduLevel, exp)), (0, _utils.transferOverseasExpMultiplyLanToScore)(overseasExp, firstLanTestInfo), (0, _utils.transferOverseasExpMultiplyExpToScore)(overseasExp, exp), (0, _utils.transferOverseasExpToScore)((0, _utils.transferOverseasExpMultiplyLanToScore)(overseasExp, firstLanTestInfo), (0, _utils.transferOverseasExpMultiplyExpToScore)(overseasExp, exp)), hasProvincialNominee, onHasProvincialNomineeChanged, _constants.EMPLOYER_TYPES.map(function (employerTypeName) {
    return (0, _haunted.html)(_templateObject19(), employerTypeName, employerType === employerTypeName, onEmployerTypeChanged, employerTypeName);
  }), _constants.CANADA_EDU_DEGREES.map(function (canadaEduDegreeName) {
    return (0, _haunted.html)(_templateObject20(), canadaEduDegreeName, canadaEduDegree === canadaEduDegreeName, onCanadaEduDegreeChanged, canadaEduDegreeName);
  }), (0, _utils.additionalFrenchToScore)(firstLanTestType, firstLanTestInfo, secondLanTestType, secondLanTestInfo), hasSibling, onHasSiblingChanged, (0, _utils.additionalToScore)(hasProvincialNominee, employerType, canadaEduDegree, hasSibling, (0, _utils.additionalFrenchToScore)(firstLanTestType, firstLanTestInfo, secondLanTestType, secondLanTestInfo)), (0, _utils.getFinalScore)((0, _utils.ageToScore)(age, isSingle), (0, _utils.eduToScore)(eduLevel, isSingle, false), (0, _utils.lanToScore)(firstLanTestInfo, isSingle, false, true), (0, _utils.expToScore)(exp, isSingle, false), (0, _utils.lanToScore)(secondLanTestInfo, isSingle, false, false), (0, _utils.eduToScore)(spouseEduLevel, isSingle, true), (0, _utils.lanToScore)(spouseLanTestInfo, isSingle, true, false), (0, _utils.expToScore)(spouseExp, isSingle, true), (0, _utils.transferEduToScore)((0, _utils.transferEduMultiplyLanToScore)(eduLevel, firstLanTestInfo), (0, _utils.transferEduMultiplyExpToScore)(eduLevel, exp)), (0, _utils.transferOverseasExpToScore)((0, _utils.transferOverseasExpMultiplyLanToScore)(overseasExp, firstLanTestInfo), (0, _utils.transferOverseasExpMultiplyExpToScore)(overseasExp, exp)), (0, _utils.additionalToScore)(hasProvincialNominee, employerType, canadaEduDegree, hasSibling, (0, _utils.additionalFrenchToScore)(firstLanTestType, firstLanTestInfo, secondLanTestType, secondLanTestInfo))));
}

customElements.define('crs-form', (0, _haunted.component)(CRSForm, {
  observedAttributes: [],
  useShadowDOM: false
}));
},{"../node_modules/bootstrap/dist/css/bootstrap.min.css":"../node_modules/bootstrap/dist/css/bootstrap.min.css","./utils":"utils.js","./constants":"constants.js","haunted":"../node_modules/haunted/lib/haunted.js"}],"../../../../../mnt/c/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33219" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../mnt/c/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map