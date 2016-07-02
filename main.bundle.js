webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(386);
	var common_1 = __webpack_require__(34);
	var forms_1 = __webpack_require__(468);
	var router_1 = __webpack_require__(304);
	var store_1 = __webpack_require__(42);
	var db_1 = __webpack_require__(402);
	var router_store_1 = __webpack_require__(407);
	var effects_1 = __webpack_require__(404);
	var store_devtools_1 = __webpack_require__(266);
	var store_log_monitor_1 = __webpack_require__(414);
	var app_1 = __webpack_require__(603);
	var routes_1 = __webpack_require__(612);
	var db_schema_1 = __webpack_require__(604);
	var reducers_1 = __webpack_require__(303);
	var effects_2 = __webpack_require__(606);
	var services_1 = __webpack_require__(613);
	var actions_1 = __webpack_require__(305);
	platform_browser_dynamic_1.bootstrap(app_1.default, [
	    /**
	     * provideStore is run once at application bootstrap, accepting a reducer
	     * function or object map of reducer functions. If passed an object of
	     * reducers, combineReducers will be run creating your application
	     * meta-reducer. This returns all providers for an @ngrx/store
	     * based application.
	     *
	     * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
	     */
	    store_1.provideStore(reducers_1.default),
	    /**
	     * runEffects configures all providers for @ngrx/effects. Observables decorated
	     * as an @Effect() within the supplied services will ultimately be merged,
	     * with output of relevant (registered as effects) actions being
	     * dispatched into your application store. Any side-effects in
	     * your application should be registered as effects.
	     *
	     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
	     */
	    effects_1.runEffects(effects_2.default),
	    /**
	     * provideRouter sets up all of the providers for @ngrx/router. It accepts
	     * an array of routes and a location strategy. By default, it will use
	     * `PathLocationStrategy`.
	     *
	     * Source: https://github.com/ngrx/router/blob/master/lib/index.ts#L44-L51
	     */
	    router_1.provideRouter(routes_1.default, common_1.HashLocationStrategy),
	    /**
	     * connectRouterToStore configures additional providers that synchronize
	     * router state with @ngrx/store. This lets you debug router state using
	     * ngrx/store and to change the location by dispatching actions.
	     */
	    router_store_1.connectRouterToStore(),
	    /**
	     * provideDB sets up @ngrx/db with the provided schema and makes the Database
	     * service everywhere.
	     */
	    db_1.provideDB(db_schema_1.default),
	    /**
	     * instrumentStore() sets up the @ngrx/store-devtools providers
	     */
	    store_devtools_1.instrumentStore({
	        monitor: store_log_monitor_1.useLogMonitor({
	            position: 'right',
	            visible: true
	        })
	    }),
	    /**
	     * Finall we provide additional services and action creators so they can
	     * be used by all of our components, effects, and guards.
	     */
	    services_1.default,
	    actions_1.default,
	    forms_1.disableDeprecatedForms(),
	    forms_1.provideForms()
	]);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	/**
	 * Runtime representation a type that a Component or other object is instances of.
	 *
	 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	 * the `MyCustomComponent` constructor function.
	 *
	 * @stable
	 */
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === 'string';
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf('\n');
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError('Invalid integer literal when parsing ' + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === 'function' || typeof o === 'object');
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	function escapeRegExp(s) {
	    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	exports.escapeRegExp = escapeRegExp;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var map_1 = __webpack_require__(294);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(23);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(79);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	var promise_1 = __webpack_require__(377);
	/**
	 * Providers for validators to be used for {@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * @experimental
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 *
	 * @experimental
	 */
	exports.NG_ASYNC_VALIDATORS = 
	/*@ts2dart_const*/ new core_1.OpaqueToken('NgAsyncValidators');
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * @experimental
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == '') ?
	            { 'required': true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	        };
	    };
	    /**
	     * No-op validator.
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * Compose multiple validators into a single function that returns the union
	     * of the individual error maps.
	     */
	    Validators.compose = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return promise_1.PromiseWrapper.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return lang_1.isPromise(obj) ? obj : async_1.ObservableWrapper.toPromise(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(416));
	__export(__webpack_require__(602));
	__export(__webpack_require__(417));
	__export(__webpack_require__(418));
	__export(__webpack_require__(419));
	__export(__webpack_require__(420));


/***/ },
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	/**
	 * Used to provide a {@link ControlValueAccessor} for form controls.
	 *
	 * See {@link DefaultValueAccessor} for how to implement one.
	 * @experimental
	 */
	exports.NG_VALUE_ACCESSOR = 
	/*@ts2dart_const*/ new core_1.OpaqueToken('NgValueAccessor');
	//# sourceMappingURL=control_value_accessor.js.map

/***/ },
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_control_directive_1 = __webpack_require__(233);
	/**
	 * A directive that contains multiple {@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * @experimental
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.ControlContainer = ControlContainer;
	//# sourceMappingURL=control_container.js.map

/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var filter_1 = __webpack_require__(459);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(35);
	var exceptions_1 = __webpack_require__(98);
	var lang_1 = __webpack_require__(23);
	var validators_1 = __webpack_require__(39);
	var checkbox_value_accessor_1 = __webpack_require__(157);
	var default_value_accessor_1 = __webpack_require__(158);
	var normalize_validator_1 = __webpack_require__(537);
	var number_value_accessor_1 = __webpack_require__(238);
	var radio_control_value_accessor_1 = __webpack_require__(159);
	var select_control_value_accessor_1 = __webpack_require__(160);
	var select_multiple_control_value_accessor_1 = __webpack_require__(244);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control');
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, 'No value accessor for');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.updateValue(newValue, { emitModelToViewChange: false });
	        control.markAsDirty();
	    });
	    // model -> view
	    control.registerOnChange(function (newValue) { return dir.valueAccessor.writeValue(newValue); });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpFormContainer(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpFormContainer = setUpFormContainer;
	function _throwError(dir, message) {
	    var path = dir.path.join(' -> ');
	    throw new exceptions_1.BaseException(message + " '" + path + "'");
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, 'model'))
	        return false;
	    var change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) || lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, 'More than one built-in value accessor matches');
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, 'More than one custom value accessor matches');
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for');
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(98);
	var abstract_control_directive_1 = __webpack_require__(233);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * @experimental
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(22);
	var PromiseObservable_1 = __webpack_require__(88);
	var toPromise_1 = __webpack_require__(109);
	var lang_1 = __webpack_require__(23);
	var Observable_1 = __webpack_require__(3);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(22);
	exports.Subject = Subject_2.Subject;
	var promise_1 = __webpack_require__(377);
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === 'function') && onError || lang_1.noop;
	        onComplete = (typeof onComplete === 'function') && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * The events payload can be accessed by the parameter `$event` on the components output event
	 * handler:
	 *
	 * ```
	 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	 * ```
	 *
	 * Uses Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 * @stable
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = false; }
	        _super.call(this);
	        this.__isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext.next(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(49);
	var isArray_1 = __webpack_require__(184);
	var isPromise_1 = __webpack_require__(465);
	var Observable_1 = __webpack_require__(3);
	var iterator_1 = __webpack_require__(299);
	var observable_1 = __webpack_require__(300);
	var InnerSubscriber_1 = __webpack_require__(772);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[observable_1.$$observable] === 'function') {
	        var obs = result[observable_1.$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(375);
	var exception_handler_1 = __webpack_require__(376);
	var exception_handler_2 = __webpack_require__(376);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	/**
	 * @stable
	 */
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = '--'; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 * @stable
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 99 */,
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(34);
	var platform_browser_1 = __webpack_require__(252);
	var core_1 = __webpack_require__(1);
	var query_string_1 = __webpack_require__(450);
	var SyncSubject_1 = __webpack_require__(122);
	var Router = (function (_super) {
	    __extends(Router, _super);
	    function Router(platformStrategy) {
	        var _this = this;
	        _super.call(this, { path: _path(platformStrategy), type: 'push' });
	        this.platformStrategy = platformStrategy;
	        platformStrategy.onPopState(function (event) { return _this._update('pop'); });
	        this._baseHref = _getBaseHref(platformStrategy);
	    }
	    Router.prototype._update = function (type) {
	        this.next({ path: this.path(), type: type });
	    };
	    /**
	     * Returns the normalized URL path.
	     */
	    Router.prototype.path = function () {
	        return _path(this.platformStrategy);
	    };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Router.prototype.normalize = function (url) {
	        return _normalize(this._baseHref, url);
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Router.prototype.prepareExternalUrl = function (url, query) {
	        if (query === void 0) { query = ''; }
	        if (url.length > 0 && !url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(url + _normalizeQueryParams(_normalizeQuery(query)));
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Router.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, _normalizeQuery(query));
	        this._update('push');
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and replaces
	     * the top item on the platform's history stack.
	     */
	    Router.prototype.replace = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.replaceState(null, '', path, _normalizeQuery(query));
	        this._update('replace');
	    };
	    /**
	     * Changes the browsers query parameters. Replaces the top item on the platform's
	     * history stack
	     */
	    Router.prototype.search = function (query) {
	        if (query === void 0) { query = ''; }
	        var pathname = this.path().split('?')[0];
	        this.replace(pathname, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Router.prototype.forward = function () {
	        this.platformStrategy.forward();
	    };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Router.prototype.back = function () {
	        this.platformStrategy.back();
	    };
	    Router = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [common_1.LocationStrategy])
	    ], Router);
	    return Router;
	}(SyncSubject_1.SyncSubject));
	exports.Router = Router;
	function _path(location) {
	    return _normalize(_getBaseHref(location), location.path());
	}
	function _normalize(baseHref, url) {
	    return _stripTrailingSlash(_stripBaseHref(baseHref, _stripIndexHtml(url)));
	}
	function _getBaseHref(platformStrategy) {
	    var browserBaseHref = platformStrategy.getBaseHref();
	    return _stripTrailingSlash(_stripIndexHtml(browserBaseHref));
	}
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function _stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	function _stripTrailingSlash(url) {
	    if (/\/$/g.test(url)) {
	        url = url.substring(0, url.length - 1);
	    }
	    return url;
	}
	function _normalizeQuery(query) {
	    return typeof query === 'string' ? query : query_string_1.stringify(query);
	}
	function _normalizeQueryParams(params) {
	    return (params.length > 0 && params.substring(0, 1) !== '?') ? ('?' + params) : params;
	}
	exports.ROUTER_PROVIDERS = [
	    core_1.provide(Router, { useClass: Router }),
	    core_1.provide(common_1.PlatformLocation, { useClass: platform_browser_1.BrowserPlatformLocation })
	];
	//# sourceMappingURL=router.js.map

/***/ },
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	/**
	 * Instead of passing around action string constants and manually recreating
	 * action objects at the point of dispatch, we create services encapsulating
	 * each appropriate action group. Action types are included as static
	 * members and kept next to their action creator. This promotes a
	 * uniform interface and single import for appropriate actions
	 * within your application components.
	 */
	var BookActions = (function () {
	    function BookActions() {
	    }
	    BookActions.prototype.search = function (query) {
	        return {
	            type: BookActions.SEARCH,
	            payload: query
	        };
	    };
	    BookActions.prototype.searchComplete = function (results) {
	        return {
	            type: BookActions.SEARCH_COMPLETE,
	            payload: results
	        };
	    };
	    BookActions.prototype.addToCollection = function (book) {
	        return {
	            type: BookActions.ADD_TO_COLLECTION,
	            payload: book
	        };
	    };
	    BookActions.prototype.addToCollectionSuccess = function (book) {
	        return {
	            type: BookActions.ADD_TO_COLLECTION_SUCCESS,
	            payload: book
	        };
	    };
	    BookActions.prototype.addToCollectionFail = function (book) {
	        return {
	            type: BookActions.ADD_TO_COLLECTION_FAIL,
	            payload: book
	        };
	    };
	    BookActions.prototype.removeFromCollection = function (book) {
	        return {
	            type: BookActions.REMOVE_FROM_COLLECTION,
	            payload: book
	        };
	    };
	    BookActions.prototype.removeFromCollectionSuccess = function (book) {
	        return {
	            type: BookActions.REMOVE_FROM_COLLECTION_SUCCESS,
	            payload: book
	        };
	    };
	    BookActions.prototype.removeFromCollectionFail = function (book) {
	        return {
	            type: BookActions.REMOVE_FROM_COLLECTION_FAIL,
	            payload: book
	        };
	    };
	    BookActions.prototype.loadCollection = function () {
	        return {
	            type: BookActions.LOAD_COLLECTION
	        };
	    };
	    BookActions.prototype.loadCollectionSuccess = function (books) {
	        return {
	            type: BookActions.LOAD_COLLECTION_SUCCESS,
	            payload: books
	        };
	    };
	    BookActions.prototype.loadBook = function (book) {
	        return {
	            type: BookActions.LOAD_BOOK,
	            payload: book
	        };
	    };
	    BookActions.SEARCH = '[Book] Search';
	    BookActions.SEARCH_COMPLETE = '[Book] Search Complete';
	    BookActions.ADD_TO_COLLECTION = '[Book] Add to Collection';
	    BookActions.ADD_TO_COLLECTION_SUCCESS = '[Book] Add to Collection Success';
	    BookActions.ADD_TO_COLLECTION_FAIL = '[Book] Add to Collection Fail';
	    BookActions.REMOVE_FROM_COLLECTION = '[Book] Remove from Collection';
	    BookActions.REMOVE_FROM_COLLECTION_SUCCESS = '[Book] Remove From Collection Success';
	    BookActions.REMOVE_FROM_COLLECTION_FAIL = '[Book] Remove From Collection Fail';
	    BookActions.LOAD_COLLECTION = '[Book] Load Collection';
	    BookActions.LOAD_COLLECTION_SUCCESS = '[Book] Load Collection Success';
	    BookActions.LOAD_BOOK = '[Book] Load Book';
	    BookActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BookActions);
	    return BookActions;
	}());
	exports.BookActions = BookActions;


/***/ },
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(22);
	var SyncSubject = (function (_super) {
	    __extends(SyncSubject, _super);
	    function SyncSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    SyncSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    SyncSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    SyncSubject.prototype._error = function (err) {
	        this.hasErrored = true;
	        _super.prototype._error.call(this, this.errorValue = err);
	    };
	    return SyncSubject;
	}(Subject_1.Subject));
	exports.SyncSubject = SyncSubject;
	//# sourceMappingURL=SyncSubject.js.map

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * RouteSet is a projection of the current location. It maps location changes
	 * into parsed route params and a list of components to render
	 */
	__webpack_require__(133);
	__webpack_require__(63);
	__webpack_require__(453);
	__webpack_require__(131);
	__webpack_require__(188);
	__webpack_require__(293);
	__webpack_require__(578);
	var Observable_1 = __webpack_require__(3);
	var asap_1 = __webpack_require__(823);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(101);
	var route_traverser_1 = __webpack_require__(169);
	var hooks_1 = __webpack_require__(262);
	exports.ROUTER_HOOKS = new core_1.OpaqueToken('@ngrx/router Router Hooks');
	exports.INSTRUCTION_HOOKS = new core_1.OpaqueToken('@ngrx/router Instruction Hooks');
	exports.LOCATION_CHANGES = new core_1.OpaqueToken('@ngrx/router Location Changes');
	var RouterInstruction = (function (_super) {
	    __extends(RouterInstruction, _super);
	    function RouterInstruction() {
	        _super.apply(this, arguments);
	    }
	    return RouterInstruction;
	}(Observable_1.Observable));
	exports.RouterInstruction = RouterInstruction;
	var RouterInstructionFactory = (function () {
	    function RouterInstructionFactory(_locationChanges$, _traverser, _ngZone, _routerHooks, _instructionHooks) {
	        if (_routerHooks === void 0) { _routerHooks = []; }
	        if (_instructionHooks === void 0) { _instructionHooks = []; }
	        this._locationChanges$ = _locationChanges$;
	        this._traverser = _traverser;
	        this._ngZone = _ngZone;
	        this._routerHooks = _routerHooks;
	        this._instructionHooks = _instructionHooks;
	    }
	    RouterInstructionFactory.prototype.create = function () {
	        var _this = this;
	        return this._locationChanges$
	            .observeOn(asap_1.asap)
	            .distinctUntilChanged(function (prev, next) { return prev.path === next.path; })
	            .let(hooks_1.composeHooks(this._routerHooks))
	            .switchMap(function (change) { return _this._traverser.find(change); })
	            .filter(function (match) { return !!match; })
	            .let(hooks_1.composeHooks(this._instructionHooks))
	            .enterZone(this._ngZone)
	            .publishReplay(1)
	            .refCount();
	    };
	    RouterInstructionFactory = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.LOCATION_CHANGES)),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Inject(exports.ROUTER_HOOKS)),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Inject(exports.INSTRUCTION_HOOKS)), 
	        __metadata('design:paramtypes', [Observable_1.Observable, route_traverser_1.RouteTraverser, core_1.NgZone, Array, Array])
	    ], RouterInstructionFactory);
	    return RouterInstructionFactory;
	}());
	exports.RouterInstructionFactory = RouterInstructionFactory;
	exports.ROUTER_INSTRUCTION_PROVIDERS = [
	    new core_1.Provider(RouterInstruction, {
	        deps: [RouterInstructionFactory],
	        useFactory: function (rif) {
	            return rif.create();
	        }
	    }),
	    new core_1.Provider(RouterInstructionFactory, { useClass: RouterInstructionFactory }),
	    new core_1.Provider(exports.LOCATION_CHANGES, { useExisting: router_1.Router })
	];
	//# sourceMappingURL=router-instruction.js.map

/***/ },
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var of_1 = __webpack_require__(800);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeMap_1 = __webpack_require__(461);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var let_1 = __webpack_require__(808);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var select_1 = __webpack_require__(401);
	Observable_1.Observable.prototype.select = select_1.select;
	//# sourceMappingURL=select.js.map

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMap_1 = __webpack_require__(814);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
	var CheckboxControlValueAccessor = (function () {
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(23);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.DEFAULT_VALUE_ACCESSOR = 
	/* @ts2dart_Provider */ {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(35);
	var exceptions_1 = __webpack_require__(98);
	var lang_1 = __webpack_require__(23);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(78);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        var indexToRemove = -1;
	        for (var i = 0; i < this._accessors.length; ++i) {
	            if (this._accessors[i][1] === accessor) {
	                indexToRemove = i;
	            }
	        }
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
	    };
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0].control.root === accessor._control.control.root &&
	            controlPair[1].name === accessor.name;
	    };
	    /** @nocollapse */
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        if (lang_1.isPresent(value)) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        }
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new exceptions_1.BaseException("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    /** @nocollapse */
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	        'formControlName': [{ type: core_1.Input },],
	        'value': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	var SelectControlValueAccessor = (function () {
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var valueString = _buildValueString(this._getOptionId(value), value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = valueString;
	            fn(_this._getOptionValue(valueString));
	        };
	    };
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    /** @nocollapse */
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        set: function (value) {
	            this._setElementValue(value);
	            if (lang_1.isPresent(this._select))
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var shared_1 = __webpack_require__(69);
	var async_1 = __webpack_require__(79);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = 'PENDING';
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split('/');
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path.reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof FormArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return lang_1.isPromise(r) ? async_1.ObservableWrapper.fromPromise(r) : r;
	}
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? shared_1.composeValidators(validator) : validator;
	}
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? shared_1.composeAsyncValidators(asyncValidator) : asyncValidator;
	}
	/**
	 * @experimental
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    AbstractControl.prototype.markAsTouched = function () { this._touched = true; };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            async_1.ObservableWrapper.callEmit(this._valueChanges, this._value);
	            async_1.ObservableWrapper.callEmit(this._statusChanges, this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = async_1.ObservableWrapper.subscribe(obs, function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            async_1.ObservableWrapper.dispose(this._asyncValidationSubscription);
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent);
	    };
	    AbstractControl.prototype.find = function (path) { return _find(this, path); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            async_1.ObservableWrapper.callEmit(this._statusChanges, this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
	 * and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
	 * along
	 * with {@link FormGroup} and {@link FormArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `FormControl` is created for every `<input>` or other form component.
	 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
	 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
	 * validation function.
	 *
	 * @experimental
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    function FormControl(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	        /** @internal */
	        this._onChange = [];
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     */
	    FormControl.prototype.updateValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * @internal
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    FormControl.prototype._anyControlsHaveStatus = function (status) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    return FormControl;
	}(AbstractControl));
	exports.FormControl = FormControl;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    function FormGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Register a control with the group's list of controls.
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove a control from this group.
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        collection_1.StringMapWrapper.delete(this.controls, name);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as non-optional.
	     */
	    FormGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    FormGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    /** @internal */
	    FormGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    FormGroup.prototype._anyControlsHaveStatus = function (status) {
	        var _this = this;
	        var res = false;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) {
	            res = res || (_this.contains(name) && control.status == status);
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    return FormGroup;
	}(AbstractControl));
	exports.FormGroup = FormGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    function FormArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Get the {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {@link AbstractControl} at the end of the array.
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    FormArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    FormArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    FormArray.prototype._anyControlsHaveStatus = function (status) {
	        return this.controls.some(function (c) { return c.status == status; });
	    };
	    /** @internal */
	    FormArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this.controls.forEach(function (control) { control.setParent(_this); });
	    };
	    return FormArray;
	}(AbstractControl));
	exports.FormArray = FormArray;
	//# sourceMappingURL=model.js.map

/***/ },
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	* This is a fork of react-router's MatchRoute. Instead of async callbacks, it
	* uses observables to perform async traversal of a route trie. It is expanded
	* to run route guards as part of the traversal process
	*/
	__webpack_require__(128);
	__webpack_require__(452);
	__webpack_require__(129);
	__webpack_require__(131);
	__webpack_require__(291);
	__webpack_require__(25);
	__webpack_require__(779);
	__webpack_require__(306);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var queryString = __webpack_require__(450);
	var resource_loader_1 = __webpack_require__(264);
	var match_pattern_1 = __webpack_require__(409);
	var route_1 = __webpack_require__(265);
	var hooks_1 = __webpack_require__(262);
	exports.TRAVERSAL_HOOKS = new core_1.OpaqueToken('@ngrx/router Traversal Hooks');
	;
	var RouteTraverser = (function () {
	    function RouteTraverser(_loader, _routes, _hooks) {
	        if (_hooks === void 0) { _hooks = []; }
	        this._loader = _loader;
	        this._routes = _routes;
	        this._hooks = _hooks;
	    }
	    /**
	    * Asynchronously matches the given location to a set of routes. The state
	    * object will have the following properties:
	    *
	    * - routes       An array of routes that matched, in hierarchical order
	    * - params       An object of URL parameters
	    */
	    RouteTraverser.prototype.find = function (change) {
	        var _a = change.path.split('?'), pathname = _a[0], query = _a[1];
	        var queryParams = queryString.parse(query);
	        return this._matchRoutes(queryParams, change, pathname);
	    };
	    RouteTraverser.prototype._matchRoutes = function (queryParams, locationChange, pathname, remainingPathname, routes, routeParamNames, routeParamValues) {
	        var _this = this;
	        if (remainingPathname === void 0) { remainingPathname = pathname; }
	        if (routes === void 0) { routes = this._routes; }
	        if (routeParamNames === void 0) { routeParamNames = []; }
	        if (routeParamValues === void 0) { routeParamValues = []; }
	        return Observable_1.Observable.from(routes)
	            .concatMap(function (route) { return _this._matchRouteDeep(route, queryParams, locationChange, pathname, remainingPathname, routeParamNames, routeParamValues); })
	            .catch(function (error) {
	            console.error('Error During Traversal', error);
	            return Observable_1.Observable.of(null);
	        })
	            .filter(function (match) { return !!match; })
	            .take(1);
	    };
	    RouteTraverser.prototype._matchRouteDeep = function (route, queryParams, locationChange, pathname, remainingPathname, paramNames, paramValues) {
	        var _this = this;
	        var pattern = route.path || '';
	        return Observable_1.Observable.of(route)
	            .filter(function () { return remainingPathname !== null; })
	            .do(function () {
	            var matched = match_pattern_1.matchPattern(pattern, remainingPathname);
	            remainingPathname = matched.remainingPathname;
	            paramNames = paramNames.concat(matched.paramNames);
	            paramValues = paramValues.concat(matched.paramValues);
	        })
	            .filter(function () { return remainingPathname !== null; })
	            .map(function () {
	            return {
	                route: route,
	                queryParams: queryParams,
	                locationChange: locationChange,
	                routeParams: match_pattern_1.makeParams(paramNames, paramValues),
	                isTerminal: remainingPathname === '' && !!route.path
	            };
	        })
	            .let(hooks_1.composeHooks(this._hooks))
	            .filter(function (_a) {
	            var route = _a.route;
	            return !!route;
	        })
	            .mergeMap(function (_a) {
	            var route = _a.route, routeParams = _a.routeParams, queryParams = _a.queryParams, isTerminal = _a.isTerminal;
	            if (isTerminal) {
	                var match_1 = {
	                    routes: [route],
	                    routeParams: routeParams,
	                    queryParams: queryParams,
	                    locationChange: locationChange
	                };
	                return Observable_1.Observable.of(route)
	                    .mergeMap(function (route) { return _this._loadIndex(route); })
	                    .map(function (index) {
	                    if (!!index) {
	                        match_1.routes.push(index);
	                    }
	                    return match_1;
	                });
	            }
	            return Observable_1.Observable.of(route)
	                .mergeMap(function (route) { return _this._loadChildRoutes(route); })
	                .mergeMap(function (childRoutes) { return _this._matchRoutes(queryParams, locationChange, pathname, remainingPathname, childRoutes, paramNames, paramValues); })
	                .map(function (match) {
	                if (!!match) {
	                    match.routes.unshift(route);
	                    return match;
	                }
	                return null;
	            });
	        });
	    };
	    RouteTraverser.prototype._loadChildRoutes = function (route) {
	        return this._loader.load(route.children, route.loadChildren, []);
	    };
	    RouteTraverser.prototype._loadIndex = function (route) {
	        return this._loader.load(route.index, route.loadIndex, null);
	    };
	    RouteTraverser = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Inject(route_1.ROUTES)),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject(exports.TRAVERSAL_HOOKS)), 
	        __metadata('design:paramtypes', [resource_loader_1.ResourceLoader, Array, Array])
	    ], RouteTraverser);
	    return RouteTraverser;
	}());
	exports.RouteTraverser = RouteTraverser;
	exports.MATCH_ROUTE_PROVIDERS = [
	    new core_1.Provider(RouteTraverser, { useClass: RouteTraverser })
	];
	//# sourceMappingURL=route-traverser.js.map

/***/ },
/* 170 */
/***/ function(module, exports) {

	"use strict";
	exports.ActionTypes = {
	    PERFORM_ACTION: 'PERFORM_ACTION',
	    RESET: 'RESET',
	    ROLLBACK: 'ROLLBACK',
	    COMMIT: 'COMMIT',
	    SWEEP: 'SWEEP',
	    TOGGLE_ACTION: 'TOGGLE_ACTION',
	    SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
	    JUMP_TO_STATE: 'JUMP_TO_STATE',
	    IMPORT_STATE: 'IMPORT_STATE'
	};
	/**
	* Action creators to change the History state.
	*/
	exports.StoreDevtoolActions = {
	    performAction: function (action) {
	        if (typeof action.type === 'undefined') {
	            throw new Error('Actions may not have an undefined "type" property. ' +
	                'Have you misspelled a constant?');
	        }
	        return { type: exports.ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	    },
	    reset: function () {
	        return { type: exports.ActionTypes.RESET, timestamp: Date.now() };
	    },
	    rollback: function () {
	        return { type: exports.ActionTypes.ROLLBACK, timestamp: Date.now() };
	    },
	    commit: function () {
	        return { type: exports.ActionTypes.COMMIT, timestamp: Date.now() };
	    },
	    sweep: function () {
	        return { type: exports.ActionTypes.SWEEP };
	    },
	    toggleAction: function (id) {
	        return { type: exports.ActionTypes.TOGGLE_ACTION, id: id };
	    },
	    setActionsActive: function (start, end, active) {
	        if (active === void 0) { active = true; }
	        return { type: exports.ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
	    },
	    jumpToState: function (index) {
	        return { type: exports.ActionTypes.JUMP_TO_STATE, index: index };
	    },
	    importState: function (nextLiftedState) {
	        return { type: exports.ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
	    }
	};


/***/ },
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(457);
	var EmptyObservable_1 = __webpack_require__(130);
	var isScheduler_1 = __webpack_require__(186);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var Notification_1 = __webpack_require__(773);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(49);
	var Subscription_1 = __webpack_require__(108);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            this.error = new Error('executing a cancelled action');
	        }
	        else {
	            try {
	                this.work(this.state);
	            }
	            catch (e) {
	                this.unsubscribe();
	                this.error = e;
	            }
	        }
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        // If this action has an intervalID and the specified delay matches the
	        // delay we used to create the intervalID, don't call `setInterval` again.
	        if (id != null && this.delay === delay) {
	            return this;
	        }
	        this.delay = delay;
	        // If this action has an intervalID, but was rescheduled with a different
	        // `delay` time, cancel the current intervalID and call `setInterval` with
	        // the new `delay` time.
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        //
	        // Important implementation note:
	        //
	        // By default, FutureAction only executes once. However, Actions have the
	        // ability to be rescheduled from within the scheduled callback (mimicking
	        // recursion for asynchronous methods). This allows us to implement single
	        // and repeated actions with the same code path without adding API surface
	        // area, and implement tail-call optimization over asynchronous boundaries.
	        //
	        // However, JS runtimes make a distinction between intervals scheduled by
	        // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
	        // the latter providing a better guarantee of precision.
	        //
	        // In order to accommodate both single and repeatedly rescheduled actions,
	        // use `setInterval` here for both cases. By default, the interval will be
	        // canceled after its first execution, or if the action schedules itself to
	        // run again with a different `delay` time.
	        //
	        // If the action recursively schedules itself to run again with the same
	        // `delay` time, the interval is not canceled, but allowed to loop again.
	        // The check of whether the interval should be canceled or not is run every
	        // time the interval is executed. The first time an action fails to
	        // reschedule itself, the interval is canceled.
	        //
	        this.id = root_1.root.setInterval(function () {
	            _this.pending = false;
	            var _a = _this, id = _a.id, scheduler = _a.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	            //
	            // Terminate this interval if the action didn't reschedule itself.
	            // Don't call `this.unsubscribe()` here, because the action could be
	            // rescheduled later. For example:
	            //
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling this action again */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            if (_this.pending === false && id != null) {
	                _this.id = null;
	                root_1.root.clearInterval(id);
	            }
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        this.pending = false;
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 187 */
/***/ function(module, exports) {

	// TODO(kara): Revisit why error messages are not being properly set.
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Wrapper around Error that sets the error message.
	 */
	var MdError = (function (_super) {
	    __extends(MdError, _super);
	    function MdError(value) {
	        _super.call(this);
	        this.message = value;
	    }
	    return MdError;
	}(Error));
	exports.MdError = MdError;
	//# sourceMappingURL=error.js.map

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinctUntilChanged_1 = __webpack_require__(458);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(98);
	var lang_1 = __webpack_require__(23);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * @experimental
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(23);
	var ng_control_1 = __webpack_require__(78);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formControlName],[ngModel],[formControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    /** @nocollapse */
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(79);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	var model_1 = __webpack_require__(161);
	var validators_1 = __webpack_require__(39);
	var control_container_1 = __webpack_require__(53);
	var shared_1 = __webpack_require__(69);
	exports.formDirectiveProvider = 
	/*@ts2dart_const*/ { provide: control_container_1.ControlContainer, useExisting: core_1.forwardRef(function () { return NgForm; }) };
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this._submitted = false;
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.FormGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            dir._control = container.registerControl(dir.name, dir.control);
	            shared_1.setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.find(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.FormGroup({});
	            shared_1.setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.getFormGroup = function (dir) { return this.form.find(dir.path); };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var ctrl = _this.form.find(dir.path);
	            ctrl.updateValue(value);
	        });
	    };
	    NgForm.prototype.onSubmit = function () {
	        this._submitted = true;
	        async_1.ObservableWrapper.callEmit(this.ngSubmit, null);
	        return false;
	    };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.find(path);
	    };
	    /** @nocollapse */
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                    providers: [exports.formDirectiveProvider],
	                    host: {
	                        '(submit)': 'onSubmit()',
	                    },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    NgForm.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(79);
	var exceptions_1 = __webpack_require__(98);
	var model_1 = __webpack_require__(161);
	var validators_1 = __webpack_require__(39);
	var control_container_1 = __webpack_require__(53);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(78);
	var shared_1 = __webpack_require__(69);
	exports.formControlBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.FormControl();
	        /** @internal */
	        this._registered = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkName();
	        if (!this._registered)
	            this._setUpControl();
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        get: function () {
	            return this._parent ? shared_1.controlPath(this.name, this._parent) : [];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || (this.options && this.options.standalone);
	    };
	    NgModel.prototype._setUpStandalone = function () {
	        shared_1.setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            throw new exceptions_1.BaseException("If ngModel is used within a form tag, either the name attribute must be set\n                      or the form control must be defined as 'standalone' in ngModelOptions.\n\n                      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n                      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">\n                   ");
	        }
	    };
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () { _this.control.updateValue(value); });
	    };
	    /** @nocollapse */
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([formControlName]):not([formControl])',
	                    providers: [exports.formControlBinding],
	                    exportAs: 'ngModel'
	                },] },
	    ];
	    /** @nocollapse */
	    NgModel.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    NgModel.propDecorators = {
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'name': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input, args: ['ngModelOptions',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(39);
	var abstract_form_group_directive_1 = __webpack_require__(374);
	var control_container_1 = __webpack_require__(53);
	exports.modelGroupProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgModelGroup; })
	};
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    function NgModelGroup(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @nocollapse */
	    NgModelGroup.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngModelGroup]', providers: [exports.modelGroupProvider], exportAs: 'ngModelGroup' },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['ngModelGroup',] },],
	    };
	    return NgModelGroup;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.NgModelGroup = NgModelGroup;
	//# sourceMappingURL=ng_model_group.js.map

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(23);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    providers: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(39);
	var control_container_1 = __webpack_require__(53);
	var shared_1 = __webpack_require__(69);
	exports.formArrayNameProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormArrayName; })
	};
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    function FormArrayName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    FormArrayName.prototype.ngOnInit = function () { this.formDirective.addFormArray(this); };
	    FormArrayName.prototype.ngOnDestroy = function () { this.formDirective.removeFormArray(this); };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        get: function () { return this.formDirective.getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    FormArrayName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formArrayName]', providers: [exports.formArrayNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formArrayName',] },],
	    };
	    return FormArrayName;
	}(control_container_1.ControlContainer));
	exports.FormArrayName = FormArrayName;
	//# sourceMappingURL=form_array_name.js.map

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(79);
	var collection_1 = __webpack_require__(35);
	var validators_1 = __webpack_require__(39);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(78);
	var shared_1 = __webpack_require__(69);
	exports.formControlBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlDirective; })
	};
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, 'form');
	    };
	    /** @nocollapse */
	    FormControlDirective.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControl]', providers: [exports.formControlBinding], exportAs: 'ngForm' },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formControl',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlDirective;
	}(ng_control_1.NgControl));
	exports.FormControlDirective = FormControlDirective;
	//# sourceMappingURL=form_control_directive.js.map

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(79);
	var validators_1 = __webpack_require__(39);
	var control_container_1 = __webpack_require__(53);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(78);
	var shared_1 = __webpack_require__(69);
	exports.controlNameBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlName; })
	};
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    FormControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    FormControlName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControlName]', providers: [exports.controlNameBinding] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formControlName',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlName;
	}(ng_control_1.NgControl));
	exports.FormControlName = FormControlName;
	//# sourceMappingURL=form_control_name.js.map

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(79);
	var collection_1 = __webpack_require__(35);
	var exceptions_1 = __webpack_require__(98);
	var lang_1 = __webpack_require__(23);
	var validators_1 = __webpack_require__(39);
	var control_container_1 = __webpack_require__(53);
	var shared_1 = __webpack_require__(69);
	exports.formDirectiveProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupDirective; })
	};
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    function FormGroupDirective(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._submitted = false;
	        this.directives = [];
	        this.form = null;
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, 'form')) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    FormGroupDirective.prototype.getControl = function (dir) { return this.form.find(dir.path); };
	    FormGroupDirective.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.find(dir.path); };
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.find(dir.path); };
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.find(dir.path);
	        ctrl.updateValue(value);
	    };
	    FormGroupDirective.prototype.onSubmit = function () {
	        this._submitted = true;
	        async_1.ObservableWrapper.callEmit(this.ngSubmit, null);
	        return false;
	    };
	    /** @internal */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.find(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            throw new exceptions_1.BaseException("formGroup expects a FormGroup instance. Please pass one in.\n           Example: <form [formGroup]=\"myFormGroup\">\n      ");
	        }
	    };
	    /** @nocollapse */
	    FormGroupDirective.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formGroup]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()' },
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formGroup',] },],
	        'ngSubmit': [{ type: core_1.Output },],
	    };
	    return FormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.FormGroupDirective = FormGroupDirective;
	//# sourceMappingURL=form_group_directive.js.map

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(39);
	var abstract_form_group_directive_1 = __webpack_require__(374);
	var control_container_1 = __webpack_require__(53);
	exports.formGroupNameProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupName; })
	};
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    function FormGroupName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @nocollapse */
	    FormGroupName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formGroupName]', providers: [exports.formGroupNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formGroupName',] },],
	    };
	    return FormGroupName;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.FormGroupName = FormGroupName;
	//# sourceMappingURL=form_group_name.js.map

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	var control_value_accessor_1 = __webpack_require__(44);
	var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (lang_1.isString(value))
	        value = "'" + value + "'";
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/** Mock interface for HTMLCollection */
	var HTMLCollection = (function () {
	    function HTMLCollection() {
	    }
	    return HTMLCollection;
	}());
	var SelectMultipleControlValueAccessor = (function () {
	    function SelectMultipleControlValueAccessor() {
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        if (value == null)
	            return;
	        var values = value;
	        // convert values to ids
	        var ids = values.map(function (v) { return _this._getOptionId(v); });
	        this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var options = _.selectedOptions;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    var val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var options = _.options;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    if (opt.selected) {
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            fn(selected);
	        };
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id)._value, value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var opt = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(opt) ? opt._value : valueString;
	    };
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                    host: { '(input)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.ctorParameters = [];
	    return SelectMultipleControlValueAccessor;
	}());
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	var NgSelectMultipleOption = (function () {
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select)) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        set: function (value) {
	            if (lang_1.isPresent(this._select)) {
	                this._value = value;
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /** @internal */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	    };
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectMultipleOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectMultipleOption;
	}());
	exports.NgSelectMultipleOption = NgSelectMultipleOption;
	exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
	//# sourceMappingURL=select_multiple_control_value_accessor.js.map

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(23);
	var validators_1 = __webpack_require__(39);
	var REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    /** @nocollapse */
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provivder which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['minlength',] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['maxlength',] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['pattern',] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */
/***/ function(module, exports) {

	"use strict";
	exports.compose = function () {
	    var functions = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        functions[_i - 0] = arguments[_i];
	    }
	    return function (arg) {
	        if (functions.length === 0) {
	            return arg;
	        }
	        var last = functions[functions.length - 1];
	        var rest = functions.slice(0, -1);
	        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
	    };
	};
	//# sourceMappingURL=compose.js.map

/***/ },
/* 259 */
/***/ function(module, exports) {

	"use strict";
	function flatten(list) {
	    return list.reduce(function (items, next) {
	        if (Array.isArray(next)) {
	            return items.concat(flatten(next));
	        }
	        return items.concat(next);
	    }, []);
	}
	exports.flatten = flatten;
	function toPayload(update) {
	    return update.action.payload;
	}
	exports.toPayload = toPayload;
	function all() {
	    return false;
	}
	exports.all = all;


/***/ },
/* 260 */
/***/ function(module, exports) {

	"use strict";
	exports.routerActions = {
	    GO: '[Router] Go',
	    REPLACE: '[Router] Replace',
	    SEARCH: '[Router] Search',
	    BACK: '[Router] Back',
	    FORWARD: '[Router] Forward',
	    UPDATE_LOCATION: '[Router] Update Location'
	};
	exports.routerActionTypes = Object.keys(exports.routerActions).map(function (key) { return exports.routerActions[key]; });
	function go(path, query) {
	    var payload = { path: path, query: query };
	    return { type: exports.routerActions.GO, payload: payload };
	}
	exports.go = go;
	function replace(path, query) {
	    var payload = { path: path, query: query };
	    return { type: exports.routerActions.REPLACE, payload: payload };
	}
	exports.replace = replace;
	function search(query) {
	    var payload = { query: query };
	    return { type: exports.routerActions.SEARCH, payload: payload };
	}
	exports.search = search;
	function back() {
	    var payload = {};
	    return { type: exports.routerActions.BACK, payload: payload };
	}
	exports.back = back;
	function forward() {
	    var payload = {};
	    return { type: exports.routerActions.FORWARD, payload: payload };
	}
	exports.forward = forward;
	//# sourceMappingURL=actions.js.map

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	__webpack_require__(128);
	__webpack_require__(131);
	__webpack_require__(25);
	__webpack_require__(129);
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(3);
	var resource_loader_1 = __webpack_require__(264);
	var hooks_1 = __webpack_require__(262);
	exports.PRE_RENDER_HOOKS = new core_1.OpaqueToken('@ngrx/router Pre-Render Hooks');
	exports.POST_RENDER_HOOKS = new core_1.OpaqueToken('@ngrx/router Post-Render Hooks');
	var ComponentRenderer = (function () {
	    function ComponentRenderer(_loader, _compiler, _preRenderHooks, _postRenderHooks) {
	        this._loader = _loader;
	        this._compiler = _compiler;
	        this._preRenderHooks = _preRenderHooks;
	        this._postRenderHooks = _postRenderHooks;
	    }
	    ComponentRenderer.prototype.render = function (route, components, injector, ref, providers) {
	        var _this = this;
	        return Observable_1.Observable.of(route)
	            .mergeMap(function (route) { return _this._loadComponent(components); })
	            .map(function (component) {
	            return { component: component, injector: injector, providers: providers };
	        })
	            .let(hooks_1.composeHooks(this._preRenderHooks))
	            .mergeMap(function (instruction) {
	            var instructionInjector = core_1.ReflectiveInjector.resolveAndCreate(instruction.providers, injector);
	            var component = instruction.component;
	            return _this._compiler.resolveComponent(component)
	                .then(function (comp) { return ref.createComponent(comp, null, instructionInjector); });
	        })
	            .let(hooks_1.composeHooks(this._postRenderHooks));
	    };
	    ComponentRenderer.prototype._loadComponent = function (route) {
	        return this._loader.load(route.component, route.loadComponent);
	    };
	    ComponentRenderer = __decorate([
	        core_1.Injectable(),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject(exports.PRE_RENDER_HOOKS)),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Inject(exports.POST_RENDER_HOOKS)), 
	        __metadata('design:paramtypes', [resource_loader_1.ResourceLoader, core_1.ComponentResolver, Array, Array])
	    ], ComponentRenderer);
	    return ComponentRenderer;
	}());
	exports.ComponentRenderer = ComponentRenderer;
	exports.COMPONENT_RENDERER_PROVIDERS = [
	    new core_1.Provider(ComponentRenderer, { useClass: ComponentRenderer })
	];
	//# sourceMappingURL=component-renderer.js.map

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var compose_1 = __webpack_require__(258);
	exports.identity = {
	    apply: function (input$) {
	        return input$;
	    }
	};
	function composeHooks(hooks) {
	    var allHooks = !hooks ? [exports.identity] : [exports.identity].concat(hooks);
	    var resolved = allHooks.map(function (hook) { return function (input$) { return hook.apply(input$); }; });
	    return compose_1.compose.apply(void 0, resolved);
	}
	exports.composeHooks = composeHooks;
	//# sourceMappingURL=hooks.js.map

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(101);
	/**
	 * The LinkTo directive links to routes in your app
	 *
	 * Links are pushed to the `Router` service to trigger a route change.
	 * Query params can be represented as an object or a string of names/values
	 *
	 * <a linkTo="/home/page" [queryParams]="{ id: 123 }">Home Page</a>
	 * <a [linkTo]="'/pages' + page.id">Page 1</a>
	 */
	var LinkTo = (function () {
	    function LinkTo(_router) {
	        this._router = _router;
	        this.hrefUpdated = new core_1.EventEmitter();
	    }
	    Object.defineProperty(LinkTo.prototype, "linkTo", {
	        set: function (href) {
	            this._href = href;
	            this._updateHref();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LinkTo.prototype, "queryParams", {
	        set: function (params) {
	            this._query = params;
	            this._updateHref();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Handles click events on the associated link
	     * Prevents default action for non-combination click events without a target
	     */
	    LinkTo.prototype.onClick = function (event) {
	        if (!this._comboClick(event) && !this.target) {
	            this._router.go(this._href, this._query);
	            event.preventDefault();
	        }
	    };
	    LinkTo.prototype._updateHref = function () {
	        var path = this._cleanUpHref(this._href);
	        this.linkHref = this._router.prepareExternalUrl(path, this._query);
	        this.hrefUpdated.emit(this.linkHref);
	    };
	    /**
	     * Determines whether the click event happened with a combination of other keys
	     */
	    LinkTo.prototype._comboClick = function (event) {
	        var buttonEvent = event.which || event.button;
	        return (buttonEvent > 1 || event.ctrlKey || event.metaKey || event.shiftKey);
	    };
	    LinkTo.prototype._cleanUpHref = function (href) {
	        if (href === void 0) { href = ''; }
	        // Check for trailing slashes in the path
	        while (href.length > 1 && href.substr(-1) === '/') {
	            // Remove trailing slashes
	            href = href.substring(0, href.length - 1);
	        }
	        return href;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], LinkTo.prototype, "target", void 0);
	    __decorate([
	        core_1.HostBinding('attr.href'), 
	        __metadata('design:type', Object)
	    ], LinkTo.prototype, "linkHref", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], LinkTo.prototype, "linkTo", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], LinkTo.prototype, "queryParams", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], LinkTo.prototype, "hrefUpdated", void 0);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], LinkTo.prototype, "onClick", null);
	    LinkTo = __decorate([
	        core_1.Directive({ selector: '[linkTo]' }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], LinkTo);
	    return LinkTo;
	}());
	exports.LinkTo = LinkTo;
	//# sourceMappingURL=link-to.js.map

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ResourceLoader = (function () {
	    function ResourceLoader() {
	    }
	    ResourceLoader.prototype.load = function (sync, async, defaultValue) {
	        if (!!sync) {
	            return Promise.resolve(sync);
	        }
	        else if (!!async) {
	            return Promise.resolve(async());
	        }
	        return Promise.resolve(defaultValue);
	    };
	    ResourceLoader = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ResourceLoader);
	    return ResourceLoader;
	}());
	exports.ResourceLoader = ResourceLoader;
	exports.RESOURCE_LOADER_PROVIDERS = [
	    new core_1.Provider(ResourceLoader, { useClass: ResourceLoader })
	];
	//# sourceMappingURL=resource-loader.js.map

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	exports.ROUTES = new core_1.OpaqueToken('@ngrx/router Init Routes');
	function getNamedComponents(route, name) {
	    if (!route) {
	        return { component: null, loadComponent: null };
	    }
	    if (!name) {
	        return { component: route.component, loadComponent: route.loadComponent };
	    }
	    var components = route.components || {};
	    var loadComponents = route.loadComponents || {};
	    return { component: components[name], loadComponent: loadComponents[name] };
	}
	exports.getNamedComponents = getNamedComponents;
	//# sourceMappingURL=route.js.map

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var instrument_1 = __webpack_require__(589);
	exports.instrumentStore = instrument_1.instrumentStore;
	var devtools_1 = __webpack_require__(412);
	exports.StoreDevtools = devtools_1.StoreDevtools;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1 = __webpack_require__(170);
	function difference(first, second) {
	    return first.filter(function (item) { return second.indexOf(item) < 0; });
	}
	exports.difference = difference;
	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	    var computedStates = liftedState.computedStates, currentStateIndex = liftedState.currentStateIndex;
	    var state = computedStates[currentStateIndex].state;
	    return state;
	}
	exports.unliftState = unliftState;
	function unliftAction(liftedState) {
	    return liftedState.actionsById[liftedState.nextActionId - 1];
	}
	exports.unliftAction = unliftAction;
	/**
	* Lifts an app's action into an action on the lifted store.
	*/
	function liftAction(action) {
	    return actions_1.StoreDevtoolActions.performAction(action);
	}
	exports.liftAction = liftAction;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(25);
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(162);
	var GoogleBooksService = (function () {
	    function GoogleBooksService(http) {
	        this.http = http;
	        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
	    }
	    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
	        return this.http.get(this.API_PATH + "?q=" + queryTitle)
	            .map(function (res) { return res.json().items; });
	    };
	    GoogleBooksService.prototype.retrieveBook = function (volumeId) {
	        return this.http.get(this.API_PATH + "/" + volumeId)
	            .map(function (res) { return res.json(); });
	    };
	    GoogleBooksService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], GoogleBooksService);
	    return GoogleBooksService;
	}());
	exports.GoogleBooksService = GoogleBooksService;


/***/ },
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(799);
	Observable_1.Observable.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var catch_1 = __webpack_require__(801);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var do_1 = __webpack_require__(804);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(181);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(87);
	var subscribeToResult_1 = __webpack_require__(89);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(87);
	var subscribeToResult_1 = __webpack_require__(89);
	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	    };
	    return WithLatestFromOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(822);
	var FutureAction_1 = __webpack_require__(182);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        for (var action = null; action = actions.shift();) {
	            action.execute();
	            if (action.error) {
	                this.active = false;
	                throw action.error;
	            }
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(297);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(49);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(131);
	/**
	 * The compose function is one of our most handy tools. In basic terms, you give
	 * it any number of functions and it returns a function. This new function
	 * takes a value and chains it through every composed function, returning
	 * the output.
	 *
	 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
	 */
	var compose_1 = __webpack_require__(258);
	/**
	 * storeLogger is a powerful metareducer that logs out each time we dispatch
	 * an action.
	 *
	 * A metareducer wraps a reducer function and returns a new reducer function
	 * with superpowers. They are handy for all sorts of tasks, including
	 * logging, undo/redo, and more.
	 */
	var ngrx_store_logger_1 = __webpack_require__(768);
	/**
	 * combineReducers is another useful metareducer that takes a map of reducer
	 * functions and creates a new reducer that stores the gathers the values
	 * of each reducer and stores them using the reducer's key. Think of it
	 * almost like a database, where every reducer is a table in the db.
	 *
	 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
	 */
	var store_1 = __webpack_require__(42);
	/**
	 * @ngrx/router-store keeps the router in sync with @ngrx/store. To connect the
	 * two, we need to use the routerReducer.
	 */
	var router_store_1 = __webpack_require__(407);
	/**
	 * Every reducer module's default export is the reducer function itself. In
	 * addition, each module should export a type or interface that describes
	 * the state of the reducer plus any selector functions. The `* as`
	 * notation packages up all of the exports into a single object.
	 */
	var search_1 = __webpack_require__(611), fromSearch = search_1;
	var books_1 = __webpack_require__(609), fromBooks = books_1;
	var collection_1 = __webpack_require__(610), fromCollection = collection_1;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = compose_1.compose(ngrx_store_logger_1.storeLogger(), store_1.combineReducers)({
	    router: router_store_1.routerReducer,
	    search: search_1.default,
	    books: books_1.default,
	    collection: collection_1.default
	});
	/**
	 * A selector function is a map function factory. We pass it parameters and it
	 * returns a function that maps from the larger state tree into a smaller
	 * piece of state. This selector simply selects the `books` state.
	 *
	 * Selectors are used with the `let` operator. They take an input observable
	 * and return a new observable. Here's how you would use this selector:
	 *
	 * ```ts
	 * class MyComponent {
	 * 	constructor(state$: Observable<AppState>) {
	 * 	  this.booksState$ = state$.let(getBooksState());
	 * 	}
	 * }
	 * ```
	 */
	function getBooksState() {
	    return function (state$) { return state$
	        .select(function (s) { return s.books; }); };
	}
	exports.getBooksState = getBooksState;
	/**
	 * Every reducer module exports selector functions, however child reducers
	 * have no knowledge of the overall state tree. To make them useable, we
	 * need to make new selectors that wrap them.
	 *
	 * Once again our compose function comes in handy. From right to left, we
	 * first select the books state then we pass the state to the book
	 * reducer's getBooks selector, finally returning an observable
	 * of search results.
	 */
	function getBookEntities() {
	    return compose_1.compose(fromBooks.getBookEntities(), getBooksState());
	}
	exports.getBookEntities = getBookEntities;
	function getBook(id) {
	    return compose_1.compose(fromBooks.getBook(id), getBooksState());
	}
	exports.getBook = getBook;
	function hasBook(id) {
	    return compose_1.compose(fromBooks.hasBook(id), getBooksState());
	}
	exports.hasBook = hasBook;
	function getBooks(bookIds) {
	    return compose_1.compose(fromBooks.getBooks(bookIds), getBooksState());
	}
	exports.getBooks = getBooks;
	/**
	 * Just like with the books selectors, we also have to compose the search
	 * reducer's and collection reducer's selectors.
	 */
	function getSearchState() {
	    return function (state$) { return state$
	        .select(function (s) { return s.search; }); };
	}
	exports.getSearchState = getSearchState;
	function getSearchBookIds() {
	    return compose_1.compose(fromSearch.getBookIds(), getSearchState());
	}
	exports.getSearchBookIds = getSearchBookIds;
	function getSearchStatus() {
	    return compose_1.compose(fromSearch.getStatus(), getSearchState());
	}
	exports.getSearchStatus = getSearchStatus;
	function getSearchQuery() {
	    return compose_1.compose(fromSearch.getQuery(), getSearchState());
	}
	exports.getSearchQuery = getSearchQuery;
	/**
	 * Some selector functions create joins across parts of state. This selector
	 * composes the search result IDs to return an array of books in the store.
	 */
	function getSearchResults() {
	    return function (state$) { return state$
	        .let(getSearchBookIds())
	        .switchMap(function (bookIds) { return state$.let(getBooks(bookIds)); }); };
	}
	exports.getSearchResults = getSearchResults;
	function getCollectionState() {
	    return function (state$) { return state$
	        .select(function (s) { return s.collection; }); };
	}
	exports.getCollectionState = getCollectionState;
	function getCollectionLoaded() {
	    return compose_1.compose(fromCollection.getLoaded(), getCollectionState());
	}
	exports.getCollectionLoaded = getCollectionLoaded;
	function getCollectionLoading() {
	    return compose_1.compose(fromCollection.getLoading(), getCollectionState());
	}
	exports.getCollectionLoading = getCollectionLoading;
	function getCollectionBookIds() {
	    return compose_1.compose(fromCollection.getBookIds(), getCollectionState());
	}
	exports.getCollectionBookIds = getCollectionBookIds;
	function isBookInCollection(id) {
	    return compose_1.compose(fromCollection.isBookInCollection(id), getCollectionState());
	}
	exports.isBookInCollection = isBookInCollection;
	function getBookCollection() {
	    return function (state$) { return state$
	        .let(getCollectionBookIds())
	        .switchMap(function (bookIds) { return state$.let(getBooks(bookIds)); }); };
	}
	exports.getBookCollection = getBookCollection;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(34);
	exports.LocationStrategy = common_1.LocationStrategy;
	exports.PathLocationStrategy = common_1.PathLocationStrategy;
	exports.HashLocationStrategy = common_1.HashLocationStrategy;
	// Providers
	var router_1 = __webpack_require__(101);
	var router_instruction_1 = __webpack_require__(123);
	var redirect_1 = __webpack_require__(586);
	var route_1 = __webpack_require__(265);
	exports.ROUTES = route_1.ROUTES;
	var guard_1 = __webpack_require__(585);
	var route_traverser_1 = __webpack_require__(169);
	var component_renderer_1 = __webpack_require__(261);
	var params_1 = __webpack_require__(410);
	var resource_loader_1 = __webpack_require__(264);
	// Directives
	var link_to_1 = __webpack_require__(263);
	var link_active_1 = __webpack_require__(408);
	var route_view_1 = __webpack_require__(411);
	// Export all router providers
	exports.ROUTER_PROVIDERS = [
	    component_renderer_1.COMPONENT_RENDERER_PROVIDERS,
	    guard_1.GUARD_PROVIDERS,
	    route_traverser_1.MATCH_ROUTE_PROVIDERS,
	    params_1.PARAMS_PROVIDERS,
	    redirect_1.REDIRECT_PROVIDERS,
	    resource_loader_1.RESOURCE_LOADER_PROVIDERS,
	    router_instruction_1.ROUTER_INSTRUCTION_PROVIDERS,
	    router_1.ROUTER_PROVIDERS
	];
	// Export all router directives
	exports.ROUTER_DIRECTIVES = [
	    link_to_1.LinkTo,
	    link_active_1.LinkActive,
	    route_view_1.RouteView
	];
	// Export ROUTES opaque token and location strategy services
	// Export utility function for setting up providers
	function provideRouter(routes, locationStrategy) {
	    if (locationStrategy === void 0) { locationStrategy = common_1.PathLocationStrategy; }
	    return [
	        core_1.provide(common_1.LocationStrategy, { useClass: locationStrategy }),
	        core_1.provide(route_1.ROUTES, { useValue: routes }),
	        core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: exports.ROUTER_DIRECTIVES, multi: true }),
	        exports.ROUTER_PROVIDERS
	    ];
	}
	exports.provideRouter = provideRouter;
	var router_2 = __webpack_require__(101);
	exports.Router = router_2.Router;
	var params_2 = __webpack_require__(410);
	exports.RouteParams = params_2.RouteParams;
	exports.QueryParams = params_2.QueryParams;
	var router_instruction_2 = __webpack_require__(123);
	exports.ROUTER_HOOKS = router_instruction_2.ROUTER_HOOKS;
	exports.INSTRUCTION_HOOKS = router_instruction_2.INSTRUCTION_HOOKS;
	exports.LOCATION_CHANGES = router_instruction_2.LOCATION_CHANGES;
	exports.RouterInstruction = router_instruction_2.RouterInstruction;
	var component_renderer_2 = __webpack_require__(261);
	exports.PRE_RENDER_HOOKS = component_renderer_2.PRE_RENDER_HOOKS;
	exports.POST_RENDER_HOOKS = component_renderer_2.POST_RENDER_HOOKS;
	var route_traverser_2 = __webpack_require__(169);
	exports.TRAVERSAL_HOOKS = route_traverser_2.TRAVERSAL_HOOKS;
	var link_to_2 = __webpack_require__(263);
	exports.LinkTo = link_to_2.LinkTo;
	var link_active_2 = __webpack_require__(408);
	exports.LinkActive = link_active_2.LinkActive;
	exports.LINK_ACTIVE_OPTIONS = link_active_2.LINK_ACTIVE_OPTIONS;
	var route_view_2 = __webpack_require__(411);
	exports.RouteView = route_view_2.RouteView;
	//# sourceMappingURL=index.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var book_1 = __webpack_require__(110);
	exports.BookActions = book_1.BookActions;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = [
	    book_1.BookActions
	];


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var take_1 = __webpack_require__(816);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var checkbox_value_accessor_1 = __webpack_require__(157);
	var default_value_accessor_1 = __webpack_require__(158);
	var ng_control_status_1 = __webpack_require__(234);
	var ng_form_1 = __webpack_require__(235);
	var ng_model_1 = __webpack_require__(236);
	var ng_model_group_1 = __webpack_require__(237);
	var number_value_accessor_1 = __webpack_require__(238);
	var radio_control_value_accessor_1 = __webpack_require__(159);
	var form_array_name_1 = __webpack_require__(239);
	var form_control_directive_1 = __webpack_require__(240);
	var form_control_name_1 = __webpack_require__(241);
	var form_group_directive_1 = __webpack_require__(242);
	var form_group_name_1 = __webpack_require__(243);
	var select_control_value_accessor_1 = __webpack_require__(160);
	var select_multiple_control_value_accessor_1 = __webpack_require__(244);
	var validators_1 = __webpack_require__(245);
	var checkbox_value_accessor_2 = __webpack_require__(157);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var default_value_accessor_2 = __webpack_require__(158);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(78);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_2 = __webpack_require__(234);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var ng_form_2 = __webpack_require__(235);
	exports.NgForm = ng_form_2.NgForm;
	var ng_model_2 = __webpack_require__(236);
	exports.NgModel = ng_model_2.NgModel;
	var ng_model_group_2 = __webpack_require__(237);
	exports.NgModelGroup = ng_model_group_2.NgModelGroup;
	var number_value_accessor_2 = __webpack_require__(238);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(159);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	var form_array_name_2 = __webpack_require__(239);
	exports.FormArrayName = form_array_name_2.FormArrayName;
	var form_control_directive_2 = __webpack_require__(240);
	exports.FormControlDirective = form_control_directive_2.FormControlDirective;
	var form_control_name_2 = __webpack_require__(241);
	exports.FormControlName = form_control_name_2.FormControlName;
	var form_group_directive_2 = __webpack_require__(242);
	exports.FormGroupDirective = form_group_directive_2.FormGroupDirective;
	var form_group_name_2 = __webpack_require__(243);
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_2 = __webpack_require__(160);
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_2 = __webpack_require__(244);
	exports.NgSelectMultipleOption = select_multiple_control_value_accessor_2.NgSelectMultipleOption;
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_2.SelectMultipleControlValueAccessor;
	var validators_2 = __webpack_require__(245);
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	exports.RequiredValidator = validators_2.RequiredValidator;
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 * @experimental
	 */
	exports.FORM_DIRECTIVES = [
	    ng_model_1.NgModel, ng_model_group_1.NgModelGroup, ng_form_1.NgForm,
	    select_control_value_accessor_1.NgSelectOption, select_multiple_control_value_accessor_1.NgSelectMultipleOption, default_value_accessor_1.DefaultValueAccessor, number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor, select_control_value_accessor_1.SelectControlValueAccessor, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor, ng_control_status_1.NgControlStatus,
	    validators_1.RequiredValidator, validators_1.MinLengthValidator, validators_1.MaxLengthValidator, validators_1.PatternValidator
	];
	/**
	 * @experimental
	 */
	exports.REACTIVE_FORM_DIRECTIVES = 
	/*@ts2dart_const*/ [
	    form_control_directive_1.FormControlDirective, form_group_directive_1.FormGroupDirective, form_control_name_1.FormControlName, form_group_name_1.FormGroupName, form_array_name_1.FormArrayName
	];
	//# sourceMappingURL=directives.js.map

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var control_container_1 = __webpack_require__(53);
	var shared_1 = __webpack_require__(69);
	/**
	  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        _super.apply(this, arguments);
	    }
	    AbstractFormGroupDirective.prototype.ngOnInit = function () { this.formDirective.addFormGroup(this); };
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () { this.formDirective.removeFormGroup(this); };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {@link FormGroup} backing this binding.
	         */
	        get: function () { return this.formDirective.getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         */
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractFormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	//# sourceMappingURL=abstract_form_group_directive.js.map

/***/ },
/* 375 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A base class for the WrappedException that can be used to identify
	 * a WrappedException from ExceptionHandler without adding circular
	 * dependency.
	 */
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var base_wrapped_exception_1 = __webpack_require__(375);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, {provide: ExceptionHandler, useClass: MyExceptionHandler}])
	 *
	 * ```
	 * @stable
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join('\n');
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError('STACKTRACE:');
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError('ORIGINAL STACKTRACE:');
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError('ERROR CONTEXT:');
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 377 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(23);
	var model_1 = __webpack_require__(161);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link FormGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'optionals') : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'validator') : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'asyncValidator') : null;
	        return new model_1.FormGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new model_1.FormControl(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new model_1.FormArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof model_1.FormControl || controlConfig instanceof model_1.FormGroup ||
	            controlConfig instanceof model_1.FormArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    /** @nocollapse */
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(162);
	var error_1 = __webpack_require__(187);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(778);
	__webpack_require__(128);
	__webpack_require__(25);
	__webpack_require__(63);
	__webpack_require__(292);
	__webpack_require__(454);
	__webpack_require__(781);
	__webpack_require__(291);
	/** Exception thrown when attempting to load an icon with a name that cannot be found. */
	var MdIconNameNotFoundError = (function (_super) {
	    __extends(MdIconNameNotFoundError, _super);
	    function MdIconNameNotFoundError(iconName) {
	        _super.call(this, "Unable to find icon with the name \"" + iconName + "\"");
	    }
	    return MdIconNameNotFoundError;
	}(error_1.MdError));
	exports.MdIconNameNotFoundError = MdIconNameNotFoundError;
	/**
	 * Exception thrown when attempting to load SVG content that does not contain the expected
	 * <svg> tag.
	 */
	var MdIconSvgTagNotFoundError = (function (_super) {
	    __extends(MdIconSvgTagNotFoundError, _super);
	    function MdIconSvgTagNotFoundError() {
	        _super.call(this, '<svg> tag not found');
	    }
	    return MdIconSvgTagNotFoundError;
	}(error_1.MdError));
	exports.MdIconSvgTagNotFoundError = MdIconSvgTagNotFoundError;
	/**
	  * Configuration for an icon, including the URL and possibly the cached SVG element.
	  * @internal
	  */
	var SvgIconConfig = (function () {
	    function SvgIconConfig(url) {
	        this.url = url;
	        this.svgElement = null;
	    }
	    return SvgIconConfig;
	}());
	/** Returns the cache key to use for an icon namespace and name. */
	var iconKey = function (namespace, name) { return namespace + ':' + name; };
	/**
	 * Service to register and display icons used by the <md-icon> component.
	 * - Registers icon URLs by namespace and name.
	 * - Registers icon set URLs by namespace.
	 * - Registers aliases for CSS classes, for use with icon fonts.
	 * - Loads icons from URLs and extracts individual icons from icon sets.
	 */
	var MdIconRegistry = (function () {
	    function MdIconRegistry(_http) {
	        this._http = _http;
	        /**
	         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
	         */
	        this._svgIconConfigs = new Map();
	        /**
	         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
	         * Multiple icon sets can be registered under the same namespace.
	         */
	        this._iconSetConfigs = new Map();
	        /** Cache for icons loaded by direct URLs. */
	        this._cachedIconsByUrl = new Map();
	        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
	        this._inProgressUrlFetches = new Map();
	        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
	        this._fontCssClassesByAlias = new Map();
	        /**
	         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
	         * The default 'material-icons' value assumes that the material icon font has been loaded as
	         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
	         */
	        this._defaultFontSetClass = 'material-icons';
	    }
	    /** Registers an icon by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
	        return this.addSvgIconInNamespace('', iconName, url);
	    };
	    /** Registers an icon by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
	        var key = iconKey(namespace, iconName);
	        this._svgIconConfigs.set(key, new SvgIconConfig(url));
	        return this;
	    };
	    /** Registers an icon set by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIconSet = function (url) {
	        return this.addSvgIconSetInNamespace('', url);
	    };
	    /** Registers an icon set by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
	        var config = new SvgIconConfig(url);
	        if (this._iconSetConfigs.has(namespace)) {
	            this._iconSetConfigs.get(namespace).push(config);
	        }
	        else {
	            this._iconSetConfigs.set(namespace, [config]);
	        }
	        return this;
	    };
	    /**
	     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
	     * component with the alias as the fontSet input will cause the class name to be applied
	     * to the <md-icon> element.
	     */
	    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
	        if (className === void 0) { className = alias; }
	        this._fontCssClassesByAlias.set(alias, className);
	        return this;
	    };
	    /**
	     * Returns the CSS class name associated with the alias by a previous call to
	     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
	     */
	    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
	        return this._fontCssClassesByAlias.get(alias) || alias;
	    };
	    /**
	     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
	        this._defaultFontSetClass = className;
	        return this;
	    };
	    /**
	     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
	        return this._defaultFontSetClass;
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
	     * The response from the URL may be cached so this will not always cause an HTTP request, but
	     * the produced element will always be a new copy of the originally fetched icon. (That is,
	     * it will not contain any modifications made to elements previously returned).
	     */
	    MdIconRegistry.prototype.getSvgIconFromUrl = function (url) {
	        var _this = this;
	        if (this._cachedIconsByUrl.has(url)) {
	            return Observable_1.Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
	        }
	        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
	            .do(function (svg) { return _this._cachedIconsByUrl.set(url, svg); })
	            .map(function (svg) { return cloneSvg(svg); });
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
	     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
	     * if not, the Observable will throw an MdIconNameNotFoundError.
	     */
	    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
	        if (namespace === void 0) { namespace = ''; }
	        // Return (copy of) cached icon if possible.
	        var key = iconKey(namespace, name);
	        if (this._svgIconConfigs.has(key)) {
	            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
	        }
	        // See if we have any icon sets registered for the namespace.
	        var iconSetConfigs = this._iconSetConfigs.get(namespace);
	        if (iconSetConfigs) {
	            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
	        }
	        return Observable_1.Observable.throw(new MdIconNameNotFoundError(key));
	    };
	    /**
	     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
	     */
	    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
	        if (config.svgElement) {
	            // We already have the SVG element for this icon, return a copy.
	            return Observable_1.Observable.of(cloneSvg(config.svgElement));
	        }
	        else {
	            // Fetch the icon from the config's URL, cache it, and return a copy.
	            return this._loadSvgIconFromConfig(config)
	                .do(function (svg) { return config.svgElement = svg; })
	                .map(function (svg) { return cloneSvg(svg); });
	        }
	    };
	    /**
	     * Attempts to find an icon with the specified name in any of the SVG icon sets.
	     * First searches the available cached icons for a nested element with a matching name, and
	     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
	     * that have not been cached, and searches again after all fetches are completed.
	     * The returned Observable produces the SVG element if possible, and throws
	     * MdIconNameNotFoundError if no icon with the specified name can be found.
	     */
	    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
	        var _this = this;
	        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
	        // requested name.
	        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	        if (namedIcon) {
	            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
	            // time anyway, there's probably not much advantage compared to just always extracting
	            // it from the icon set.
	            return Observable_1.Observable.of(namedIcon);
	        }
	        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
	        // fetched, fetch them now and look for iconName in the results.
	        var iconSetFetchRequests = iconSetConfigs
	            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
	            .map(function (iconSetConfig) {
	            return _this._loadSvgIconSetFromConfig(iconSetConfig)
	                .catch(function (err, caught) {
	                // Swallow errors fetching individual URLs so the combined Observable won't
	                // necessarily fail.
	                console.log("Loading icon set URL: " + iconSetConfig.url + " failed: " + err);
	                return Observable_1.Observable.of(null);
	            })
	                .do(function (svg) {
	                // Cache SVG element.
	                if (svg) {
	                    iconSetConfig.svgElement = svg;
	                }
	            });
	        });
	        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
	        // cached SVG element (unless the request failed), and we can check again for the icon.
	        return Observable_1.Observable.forkJoin(iconSetFetchRequests)
	            .map(function (ignoredResults) {
	            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	            if (!foundIcon) {
	                throw new MdIconNameNotFoundError(name);
	            }
	            return foundIcon;
	        });
	    };
	    /**
	     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
	        // Iterate backwards, so icon sets added later have precedence.
	        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
	            var config = iconSetConfigs[i];
	            if (config.svgElement) {
	                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config);
	                if (foundIcon) {
	                    return foundIcon;
	                }
	            }
	        }
	        return null;
	    };
	    /**
	     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
	        var _this = this;
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config); });
	    };
	    /**
	     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
	        var _this = this;
	        // TODO: Document that icons should only be loaded from trusted sources.
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._svgElementFromString(svgText); });
	    };
	    /**
	     * Creates a DOM element from the given SVG string, and adds default attributes.
	     */
	    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, config) {
	        var svg = this._svgElementFromString(responseText);
	        this._setSvgAttributes(svg, config);
	        return svg;
	    };
	    /**
	     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, config) {
	        var iconNode = iconSet.querySelector('#' + iconName);
	        if (!iconNode) {
	            return null;
	        }
	        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
	        // the content of a new <svg> node.
	        if (iconNode.tagName.toLowerCase() == 'svg') {
	            return this._setSvgAttributes(iconNode.cloneNode(true), config);
	        }
	        // createElement('SVG') doesn't work as expected; the DOM ends up with
	        // the correct nodes, but the SVG content doesn't render. Instead we
	        // have to create an empty SVG node using innerHTML and append its content.
	        // Elements created using DOMParser.parseFromString have the same problem.
	        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
	        var svg = this._svgElementFromString('<svg></svg>');
	        // Clone the node so we don't remove it from the parent icon set element.
	        svg.appendChild(iconNode.cloneNode(true));
	        return this._setSvgAttributes(svg, config);
	    };
	    /**
	     * Creates a DOM element from the given SVG string.
	     */
	    MdIconRegistry.prototype._svgElementFromString = function (str) {
	        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
	        // creating an element from an HTML string.
	        var div = document.createElement('DIV');
	        div.innerHTML = str;
	        var svg = div.querySelector('svg');
	        if (!svg) {
	            throw new MdIconSvgTagNotFoundError();
	        }
	        return svg;
	    };
	    /**
	     * Sets the default attributes for an SVG element to be used as an icon.
	     */
	    MdIconRegistry.prototype._setSvgAttributes = function (svg, config) {
	        if (!svg.getAttribute('xmlns')) {
	            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	        }
	        svg.setAttribute('fit', '');
	        svg.setAttribute('height', '100%');
	        svg.setAttribute('width', '100%');
	        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
	        return svg;
	    };
	    /**
	     * Returns an Observable which produces the string contents of the given URL. Results may be
	     * cached, so future calls with the same URL may not cause another HTTP request.
	     */
	    MdIconRegistry.prototype._fetchUrl = function (url) {
	        var _this = this;
	        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
	        // already a request in progress for that URL. It's necessary to call share() on the
	        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
	        if (this._inProgressUrlFetches.has(url)) {
	            return this._inProgressUrlFetches.get(url);
	        }
	        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
	        // Observable. Figure out why and fix it.
	        var req = this._http.get(url)
	            .map(function (response) { return response.text(); })
	            .finally(function () {
	            _this._inProgressUrlFetches.delete(url);
	        })
	            .share();
	        this._inProgressUrlFetches.set(url, req);
	        return req;
	    };
	    MdIconRegistry = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], MdIconRegistry);
	    return MdIconRegistry;
	}());
	exports.MdIconRegistry = MdIconRegistry;
	/** Clones an SVGElement while preserving type information. */
	function cloneSvg(svg) {
	    return svg.cloneNode(true);
	}
	//# sourceMappingURL=icon-registry.js.map

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pluck_1 = __webpack_require__(810);
	var map_1 = __webpack_require__(294);
	var distinctUntilChanged_1 = __webpack_require__(458);
	function select(pathOrMapFn) {
	    var paths = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        paths[_i - 1] = arguments[_i];
	    }
	    var mapped$;
	    if (typeof pathOrMapFn === 'string') {
	        mapped$ = pluck_1.pluck.call.apply(pluck_1.pluck, [this, pathOrMapFn].concat(paths));
	    }
	    else if (typeof pathOrMapFn === 'function') {
	        mapped$ = map_1.map.call(this, pathOrMapFn);
	    }
	    else {
	        throw new TypeError(("Unexpected type " + typeof pathOrMapFn + " in select operator,")
	            + " expected 'string' or 'function'");
	    }
	    return distinctUntilChanged_1.distinctUntilChanged.call(mapped$);
	}
	exports.select = select;
	//# sourceMappingURL=select.js.map

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(580));


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(290);
	var store_1 = __webpack_require__(42);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var metadata_1 = __webpack_require__(405);
	var util_1 = __webpack_require__(259);
	exports.BOOTSTRAP_EFFECTS = new core_1.OpaqueToken('@ngrx/effects Bootstrap Effects');
	function mergeEffects() {
	    var instances = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        instances[_i - 0] = arguments[_i];
	    }
	    var observables = util_1.flatten(instances).map(function (i) { return metadata_1.getEffectKeys(i).map(function (key) { return i[key]; }); });
	    return Observable_1.Observable.merge.apply(Observable_1.Observable, util_1.flatten(observables));
	}
	exports.mergeEffects = mergeEffects;
	function connectEffectsToStore(store, effects) {
	    return function () {
	        mergeEffects.apply(void 0, effects).subscribe(store);
	        return Promise.resolve(true);
	    };
	}
	exports.connectEffectsToStore = connectEffectsToStore;
	exports.CONNECT_EFFECTS_PROVIDER = new core_1.Provider(core_1.APP_INITIALIZER, {
	    multi: true,
	    deps: [store_1.Store, exports.BOOTSTRAP_EFFECTS],
	    useFactory: connectEffectsToStore
	});


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(405);
	exports.Effect = metadata_1.Effect;
	var effects_1 = __webpack_require__(403);
	exports.mergeEffects = effects_1.mergeEffects;
	var run_effects_1 = __webpack_require__(581);
	exports.runEffects = run_effects_1.runEffects;
	var state_updates_1 = __webpack_require__(406);
	exports.StateUpdates = state_updates_1.StateUpdates;
	var util_1 = __webpack_require__(259);
	exports.toPayload = util_1.toPayload;
	exports.all = util_1.all;


/***/ },
/* 405 */
/***/ function(module, exports) {

	"use strict";
	var METADATA_KEY = '@ngrx/effects';
	function Effect() {
	    return function (target, propertyName) {
	        if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
	            Reflect.defineMetadata(METADATA_KEY, [], target);
	        }
	        var effects = Reflect.getOwnMetadata(METADATA_KEY, target);
	        Reflect.defineMetadata(METADATA_KEY, effects.concat([propertyName]), target);
	    };
	}
	exports.Effect = Effect;
	function getEffectKeys(instance) {
	    var target = Object.getPrototypeOf(instance);
	    if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
	        return [];
	    }
	    return Reflect.getOwnMetadata(METADATA_KEY, target);
	}
	exports.getEffectKeys = getEffectKeys;


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var withLatestFrom_1 = __webpack_require__(296);
	var filter_1 = __webpack_require__(459);
	var ReplaySubject_1 = __webpack_require__(451);
	var store_1 = __webpack_require__(42);
	var core_1 = __webpack_require__(1);
	var StateUpdates = (function (_super) {
	    __extends(StateUpdates, _super);
	    function StateUpdates(actions$, state$) {
	        var _this = this;
	        _super.call(this, 1);
	        withLatestFrom_1.withLatestFrom
	            .call(actions$, state$)
	            .subscribe(function (_a) {
	            var action = _a[0], state = _a[1];
	            _super.prototype.next.call(_this, { action: action, state: state });
	        });
	    }
	    StateUpdates.prototype.next = function (update) { };
	    StateUpdates.prototype.error = function (err) { };
	    StateUpdates.prototype.complete = function () { };
	    StateUpdates.prototype.whenAction = function () {
	        var actionTypes = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            actionTypes[_i - 0] = arguments[_i];
	        }
	        return filter_1.filter.call(this, function (_a) {
	            var action = _a.action;
	            return actionTypes.indexOf(action.type) > -1;
	        });
	    };
	    StateUpdates = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [store_1.Dispatcher, store_1.State])
	    ], StateUpdates);
	    return StateUpdates;
	}(ReplaySubject_1.ReplaySubject));
	exports.StateUpdates = StateUpdates;
	exports.STATE_UPDATES_PROVIDER = new core_1.Provider(StateUpdates, {
	    useClass: StateUpdates
	});


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var location_changes_1 = __webpack_require__(583);
	function connectRouterToStore() {
	    return [
	        location_changes_1.LOCATION_CHANGES_PROVIDER
	    ];
	}
	exports.connectRouterToStore = connectRouterToStore;
	var actions_1 = __webpack_require__(260);
	exports.go = actions_1.go;
	exports.replace = actions_1.replace;
	exports.search = actions_1.search;
	exports.back = actions_1.back;
	exports.forward = actions_1.forward;
	exports.routerActions = actions_1.routerActions;
	var reducer_1 = __webpack_require__(584);
	exports.routerReducer = reducer_1.routerReducer;
	//# sourceMappingURL=index.js.map

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var link_to_1 = __webpack_require__(263);
	var router_1 = __webpack_require__(101);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(785);
	exports.LINK_ACTIVE_OPTIONS = {
	    exact: true
	};
	/**
	 * The LinkActive directive toggles classes on elements that contain an active linkTo directive
	 *
	 * <a linkActive="active" linkTo="/home/page">Home Page</a>
	 * <ol>
	 *  <li linkActive="active" *ngFor="var link of links">
	 *    <a [linkTo]="'/link/' + link.id">{{ link.title }}</a>
	 *  </li>
	 * </ol>
	 */
	var LinkActive = (function () {
	    function LinkActive(links, element, router$, renderer, defaultActiveOptions) {
	        this.links = links;
	        this.element = element;
	        this.router$ = router$;
	        this.renderer = renderer;
	        this.defaultActiveOptions = defaultActiveOptions;
	        this.activeClass = 'active';
	        this._activeOptions = { exact: true };
	    }
	    LinkActive.prototype.ngOnInit = function () {
	        var _this = this;
	        this.links.changes.subscribe(function (_) {
	            _this.subscribeLinks();
	        });
	    };
	    LinkActive.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        if (this.defaultActiveOptions && !this.activeOptions) {
	            this._activeOptions = this.defaultActiveOptions;
	        }
	        else if (this.activeOptions) {
	            this._activeOptions = this.activeOptions;
	        }
	        this._routerSub = this.router$
	            .map(function (_a) {
	            var path = _a.path;
	            return _this.router$.prepareExternalUrl(path || '/');
	        })
	            .subscribe(function (path) {
	            _this.checkActive(path);
	        });
	    };
	    LinkActive.prototype.checkActive = function (path) {
	        var _this = this;
	        var active = this.links.reduce(function (active, current) {
	            var _a = current.linkHref.split('?'), href = _a[0], query = _a[1];
	            if (_this._activeOptions.exact) {
	                return active ? active : href === path;
	            }
	            else {
	                return active ? active : path.startsWith(href);
	            }
	        }, false);
	        var activeClasses = this.activeClass.split(' ');
	        activeClasses.forEach(function (activeClass) {
	            _this.renderer.setElementClass(_this.element.nativeElement, activeClass, active);
	        });
	    };
	    LinkActive.prototype.subscribeLinks = function () {
	        var _this = this;
	        if (this._linksSub) {
	            this._linksSub.unsubscribe();
	        }
	        var observables = this.links.map(function (link) {
	            return link.hrefUpdated;
	        });
	        this._linksSub = Observable_1.Observable.from(observables)
	            .mergeAll()
	            .subscribe(function (_) {
	            _this.checkActive(_this.router$.prepareExternalUrl(_this.router$.path() || '/'));
	        });
	    };
	    LinkActive.prototype.ngOnDestroy = function () {
	        if (this._routerSub) {
	            this._routerSub.unsubscribe();
	        }
	        if (this._linksSub) {
	            this._linksSub.unsubscribe();
	        }
	    };
	    __decorate([
	        core_1.Input('linkActive'), 
	        __metadata('design:type', String)
	    ], LinkActive.prototype, "activeClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], LinkActive.prototype, "activeOptions", void 0);
	    LinkActive = __decorate([
	        core_1.Directive({ selector: '[linkActive]' }),
	        __param(0, core_1.Query(link_to_1.LinkTo)),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Inject(exports.LINK_ACTIVE_OPTIONS)), 
	        __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef, router_1.Router, core_1.Renderer, Object])
	    ], LinkActive);
	    return LinkActive;
	}());
	exports.LinkActive = LinkActive;
	//# sourceMappingURL=link-active.js.map

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pathToRegexp = __webpack_require__(770);
	var REGEXP_CACHE = new Map();
	var COMPILED_CACHE = new Map();
	function getRegexp(pattern) {
	    if (!REGEXP_CACHE.has(pattern)) {
	        var keys = [];
	        var regexp = pathToRegexp(pattern, keys, { end: false });
	        REGEXP_CACHE.set(pattern, { keys: keys, regexp: regexp });
	    }
	    return REGEXP_CACHE.get(pattern);
	}
	exports.getRegexp = getRegexp;
	function getCompiled(pattern) {
	    if (!COMPILED_CACHE.has(pattern)) {
	        COMPILED_CACHE.set(pattern, pathToRegexp.compile(pattern));
	    }
	    return COMPILED_CACHE.get(pattern);
	}
	exports.getCompiled = getCompiled;
	function matchPattern(pattern, pathname) {
	    if (pattern.charAt(0) !== '/') {
	        pattern = "/" + pattern;
	    }
	    var compiled = getRegexp(pattern);
	    var match = compiled.regexp.exec(pathname);
	    if (!match) {
	        return {
	            remainingPathname: null,
	            paramNames: [],
	            paramValues: []
	        };
	    }
	    return {
	        remainingPathname: pathname.substr(match[0].length),
	        paramNames: compiled.keys.map(function (_a) {
	            var name = _a.name;
	            return name;
	        }),
	        paramValues: match.slice(1).map(function (value) { return value && decodeURIComponent(value); })
	    };
	}
	exports.matchPattern = matchPattern;
	function getParamNames(pattern) {
	    return getRegexp(pattern).keys.map(function (_a) {
	        var name = _a.name;
	        return name;
	    });
	}
	exports.getParamNames = getParamNames;
	function makeParams(paramNames, paramValues) {
	    var params = {};
	    var lastIndex = 0;
	    paramNames.forEach(function (paramName, index) {
	        if (typeof paramName === 'number') {
	            paramName = lastIndex++;
	        }
	        params[paramName] = paramValues && paramValues[index];
	    });
	    return params;
	}
	exports.makeParams = makeParams;
	function getParams(pattern, pathname) {
	    var _a = matchPattern(pattern, pathname), remainingPathname = _a.remainingPathname, paramNames = _a.paramNames, paramValues = _a.paramValues;
	    if (remainingPathname === null) {
	        return null;
	    }
	    return makeParams(paramNames, paramValues);
	}
	exports.getParams = getParams;
	function formatPattern(pattern, params) {
	    if (params === void 0) { params = {}; }
	    return getCompiled(pattern)(params);
	}
	exports.formatPattern = formatPattern;
	//# sourceMappingURL=match-pattern.js.map

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(25);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var router_instruction_1 = __webpack_require__(123);
	var RouteParams = (function (_super) {
	    __extends(RouteParams, _super);
	    function RouteParams() {
	        _super.apply(this, arguments);
	    }
	    return RouteParams;
	}(Observable_1.Observable));
	exports.RouteParams = RouteParams;
	var QueryParams = (function (_super) {
	    __extends(QueryParams, _super);
	    function QueryParams() {
	        _super.apply(this, arguments);
	    }
	    return QueryParams;
	}(Observable_1.Observable));
	exports.QueryParams = QueryParams;
	function createRouteParams(set$) {
	    return set$.map(function (next) { return next.routeParams; });
	}
	function createQueryParams(set$) {
	    return set$.map(function (next) { return next.queryParams; });
	}
	exports.PARAMS_PROVIDERS = [
	    new core_1.Provider(RouteParams, {
	        deps: [router_instruction_1.RouterInstruction],
	        useFactory: createRouteParams
	    }),
	    new core_1.Provider(QueryParams, {
	        deps: [router_instruction_1.RouterInstruction],
	        useFactory: createQueryParams
	    })
	];
	//# sourceMappingURL=params.js.map

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * As implemented this component is fairly complex. It listens to the RouteSet
	 * and renders the first component in the set's list. When rendering the
	 * component, it re-provides RouteSet modified to include the shortened list
	 * of components. Exposes a very powerful render middleware hook that could
	 * be used in the future for data resolving.
	 */
	__webpack_require__(292);
	__webpack_require__(25);
	__webpack_require__(63);
	__webpack_require__(188);
	__webpack_require__(133);
	var core_1 = __webpack_require__(1);
	var route_1 = __webpack_require__(265);
	var router_instruction_1 = __webpack_require__(123);
	var component_renderer_1 = __webpack_require__(261);
	var RouteView = (function () {
	    function RouteView(_name, _routerInstruction$, _injector, _renderer, _ref) {
	        this._name = _name;
	        this._routerInstruction$ = _routerInstruction$;
	        this._injector = _injector;
	        this._renderer = _renderer;
	        this._ref = _ref;
	        this._routerInstructionProvider = new core_1.Provider(router_instruction_1.RouterInstruction, {
	            useValue: this._routerInstruction$.map(function (set) {
	                return {
	                    locationChange: set.locationChange,
	                    routes: set.routes.slice().slice(1),
	                    routeParams: set.routeParams,
	                    queryParams: set.queryParams
	                };
	            })
	        });
	    }
	    RouteView.prototype.ngOnInit = function () {
	        var _this = this;
	        this._sub = this._routerInstruction$
	            .map(function (set) {
	            var route = set.routes[0];
	            var components = route_1.getNamedComponents(route, _this._name);
	            return { route: route, components: components };
	        })
	            .distinctUntilChanged(function (prev, next) {
	            return prev.components.component === next.components.component
	                && prev.components.loadComponent === next.components.loadComponent;
	        })
	            .do(function (ins) { return _this._cleanPreviousRef(); })
	            .filter(function (_a) {
	            var components = _a.components;
	            return !!components.component || !!components.loadComponent;
	        })
	            .switchMap(function (_a) {
	            var route = _a.route, components = _a.components;
	            return _this._renderer.render(route, components, _this._injector, _this._ref, [_this._routerInstructionProvider]);
	        })
	            .subscribe(function (ref) { return _this._prev = ref; });
	    };
	    RouteView.prototype.ngOnDestroy = function () {
	        this._cleanPreviousRef();
	        this._sub.unsubscribe();
	    };
	    RouteView.prototype._cleanPreviousRef = function () {
	        if (this._prev) {
	            this._prev.destroy();
	            this._prev = null;
	        }
	    };
	    RouteView = __decorate([
	        core_1.Component({
	            selector: 'route-view',
	            providers: [],
	            template: ""
	        }),
	        __param(0, core_1.Attribute('name')), 
	        __metadata('design:paramtypes', [String, router_instruction_1.RouterInstruction, core_1.Injector, component_renderer_1.ComponentRenderer, core_1.ViewContainerRef])
	    ], RouteView);
	    return RouteView;
	}());
	exports.RouteView = RouteView;
	//# sourceMappingURL=route-view.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(786);
	__webpack_require__(784);
	__webpack_require__(25);
	__webpack_require__(789);
	__webpack_require__(453);
	__webpack_require__(787);
	__webpack_require__(293);
	var queue_1 = __webpack_require__(298);
	var store_1 = __webpack_require__(42);
	var reducer_1 = __webpack_require__(590);
	var actions_1 = __webpack_require__(170);
	var utils_1 = __webpack_require__(267);
	var DevtoolsDispatcher = (function (_super) {
	    __extends(DevtoolsDispatcher, _super);
	    function DevtoolsDispatcher() {
	        _super.apply(this, arguments);
	    }
	    return DevtoolsDispatcher;
	}(store_1.Dispatcher));
	exports.DevtoolsDispatcher = DevtoolsDispatcher;
	var StoreDevtools = (function () {
	    function StoreDevtools(dispatcher, actions$, reducers$, initialState, options, extension) {
	        var liftedInitialState = reducer_1.liftInitialState(initialState, options.monitor);
	        var liftReducer = reducer_1.liftReducerWith(initialState, liftedInitialState, options.monitor, {
	            maxAge: options.maxAge
	        });
	        var liftedActions$ = actions$
	            .skip(1)
	            .merge(extension.actions$)
	            .map(utils_1.liftAction)
	            .merge(dispatcher, extension.liftedActions$)
	            .observeOn(queue_1.queue);
	        var liftedReducers$ = reducers$
	            .map(liftReducer);
	        var liftedState = liftedActions$
	            .withLatestFrom(liftedReducers$)
	            .scan(function (liftedState, _a) {
	            var action = _a[0], reducer = _a[1];
	            var nextState = reducer(liftedState, action);
	            extension.notify(action, nextState);
	            return nextState;
	        }, liftedInitialState)
	            .publishReplay(1)
	            .refCount();
	        var state = liftedState
	            .map(utils_1.unliftState);
	        this.dispatcher = dispatcher;
	        this.liftedState = liftedState;
	        this.state = state;
	    }
	    StoreDevtools.prototype.dispatch = function (action) {
	        this.dispatcher.dispatch(action);
	    };
	    StoreDevtools.prototype.next = function (action) {
	        this.dispatcher.dispatch(action);
	    };
	    StoreDevtools.prototype.error = function (error) { };
	    StoreDevtools.prototype.complete = function () { };
	    StoreDevtools.prototype.performAction = function (action) {
	        this.dispatch(actions_1.StoreDevtoolActions.performAction(action));
	    };
	    StoreDevtools.prototype.reset = function () {
	        this.dispatch(actions_1.StoreDevtoolActions.reset());
	    };
	    StoreDevtools.prototype.rollback = function () {
	        this.dispatch(actions_1.StoreDevtoolActions.rollback());
	    };
	    StoreDevtools.prototype.commit = function () {
	        this.dispatch(actions_1.StoreDevtoolActions.commit());
	    };
	    StoreDevtools.prototype.sweep = function () {
	        this.dispatch(actions_1.StoreDevtoolActions.sweep());
	    };
	    StoreDevtools.prototype.toggleAction = function (id) {
	        this.dispatch(actions_1.StoreDevtoolActions.toggleAction(id));
	    };
	    StoreDevtools.prototype.jumpToState = function (index) {
	        this.dispatch(actions_1.StoreDevtoolActions.jumpToState(index));
	    };
	    StoreDevtools.prototype.importState = function (nextLiftedState) {
	        this.dispatch(actions_1.StoreDevtoolActions.importState(nextLiftedState));
	    };
	    return StoreDevtools;
	}());
	exports.StoreDevtools = StoreDevtools;


/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var DockActions = (function () {
	    function DockActions() {
	    }
	    DockActions.prototype.toggleVisibility = function () {
	        return { type: DockActions.TOGGLE_VISIBILITY };
	    };
	    DockActions.prototype.changePosition = function () {
	        return { type: DockActions.CHANGE_POSITION };
	    };
	    DockActions.prototype.changeSize = function (size) {
	        return { type: DockActions.CHANGE_SIZE, payload: size };
	    };
	    DockActions.prototype.changeMonitor = function () {
	        return { type: DockActions.CHANGE_MONITOR };
	    };
	    DockActions.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
	    DockActions.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
	    DockActions.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
	    DockActions.CHANGE_MONITOR = '@@redux-devtools-log-monitor/CHANGE_MONITOR';
	    DockActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DockActions);
	    return DockActions;
	}());
	exports.DockActions = DockActions;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var store_log_monitor_1 = __webpack_require__(601);
	exports.StoreLogMonitorComponent = store_log_monitor_1.StoreLogMonitorComponent;
	var reducer_1 = __webpack_require__(595);
	exports.useLogMonitor = reducer_1.useDockMonitor;


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var compose_1 = __webpack_require__(258);
	exports.KNOWN = {
	    Array: 'array',
	    Object: 'object',
	    Null: 'null',
	    Undefined: 'undefined',
	    Boolean: 'boolean',
	    Number: 'number',
	    String: 'string',
	    Symbol: 'symbol',
	    Function: 'function',
	    Iterable: 'iterable'
	};
	function getTypeOf(object) {
	    var literalType = typeof object;
	    if (literalType === 'object') {
	        if (Array.isArray(object)) {
	            return exports.KNOWN.Array;
	        }
	        if (object === null) {
	            return exports.KNOWN.Null;
	        }
	        if (typeof object[Symbol.iterator] === 'function') {
	            return exports.KNOWN.Iterable;
	        }
	    }
	    return literalType;
	}
	exports.getTypeOf = getTypeOf;
	var arrayLength = function (value) { return value.length; };
	var lengthLabel = function (single, plural) { return function (length) { return (length + " " + (length === 1 ? single : plural)); }; };
	var typeIndicator = function (typeIndicator) { return function (input) { return (typeIndicator + " " + input); }; };
	var typeIdentity = function (type) { return function () { return type; }; };
	var withQuotes = function (val) { return ("\"" + val + "\""); };
	var toString = function (val) { return val.toString(); };
	var iterableToArray = function (value) { return Array.from(value); };
	var labelFactoriesForTypes = (_a = {},
	    _a[exports.KNOWN.Array] = compose_1.compose(typeIndicator('[]'), lengthLabel('item', 'items'), arrayLength),
	    _a[exports.KNOWN.Object] = compose_1.compose(typeIndicator('{}'), lengthLabel('key', 'keys'), arrayLength, Object.getOwnPropertyNames),
	    _a[exports.KNOWN.Null] = typeIdentity(exports.KNOWN.Null),
	    _a[exports.KNOWN.Undefined] = typeIdentity(exports.KNOWN.Undefined),
	    _a[exports.KNOWN.Boolean] = function (val) { return val ? 'true' : 'false'; },
	    _a[exports.KNOWN.Number] = toString,
	    _a[exports.KNOWN.String] = withQuotes,
	    _a[exports.KNOWN.Symbol] = compose_1.compose(withQuotes, toString),
	    _a[exports.KNOWN.Function] = typeIdentity(exports.KNOWN.Function),
	    _a[exports.KNOWN.Iterable] = compose_1.compose(typeIndicator('()'), lengthLabel('entry', 'entries'), arrayLength, iterableToArray),
	    _a
	);
	var lookupLabelForType = function (type) { return labelFactoriesForTypes[type]; };
	exports.getLabelFor = function (object) { return labelFactoriesForTypes[getTypeOf(object)](object); };
	function getChildrenFor(object) {
	    var literalType = getTypeOf(object);
	    if (literalType === exports.KNOWN.Object) {
	        return Object.getOwnPropertyNames(object).map(function (name) {
	            return { key: name, value: object[name] };
	        });
	    }
	    else if (literalType === exports.KNOWN.Array) {
	        return object.map(function (value, index) {
	            return { key: index, value: value };
	        });
	    }
	    else if (literalType === exports.KNOWN.Iterable) {
	        return Array.from(object).map(function (value, index) {
	            return { key: index, value: value };
	        });
	    }
	    throw new TypeError("Tried to get children for non-enumerable type \"" + literalType + "\"");
	}
	exports.getChildrenFor = getChildrenFor;
	var _a;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SyncSubject_1 = __webpack_require__(122);
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        _super.call(this, { type: Dispatcher.INIT });
	    }
	    Dispatcher.prototype.dispatch = function (action) {
	        this.next(action);
	    };
	    Dispatcher.prototype.complete = function () {
	        // noop
	    };
	    Dispatcher.INIT = '@ngrx/store/init';
	    return Dispatcher;
	}(SyncSubject_1.SyncSubject));
	exports.Dispatcher = Dispatcher;


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SyncSubject_1 = __webpack_require__(122);
	var Reducer = (function (_super) {
	    __extends(Reducer, _super);
	    function Reducer(_dispatcher, initialReducer) {
	        _super.call(this, initialReducer);
	        this._dispatcher = _dispatcher;
	    }
	    Reducer.prototype.replaceReducer = function (reducer) {
	        this.next(reducer);
	        this._dispatcher.dispatch({ type: Reducer.REPLACE });
	    };
	    Reducer.REPLACE = '@ngrx/store/replace-reducer';
	    return Reducer;
	}(SyncSubject_1.SyncSubject));
	exports.Reducer = Reducer;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var withLatestFrom_1 = __webpack_require__(296);
	var scan_1 = __webpack_require__(463);
	var observeOn_1 = __webpack_require__(181);
	var queue_1 = __webpack_require__(298);
	var SyncSubject_1 = __webpack_require__(122);
	var State = (function (_super) {
	    __extends(State, _super);
	    function State(_initialState, action$, reducer$) {
	        var _this = this;
	        _super.call(this, _initialState);
	        var actionInQueue$ = observeOn_1.observeOn.call(action$, queue_1.queue);
	        var actionAndReducer$ = withLatestFrom_1.withLatestFrom.call(actionInQueue$, reducer$);
	        var state$ = scan_1.scan.call(actionAndReducer$, function (state, _a) {
	            var action = _a[0], reducer = _a[1];
	            return reducer(state, action);
	        }, _initialState);
	        state$.subscribe(function (value) { return _this.next(value); });
	    }
	    return State;
	}(SyncSubject_1.SyncSubject));
	exports.State = State;


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SyncSubject_1 = __webpack_require__(122);
	var select_1 = __webpack_require__(401);
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(_dispatcher, _reducer, state$, initialState) {
	        var _this = this;
	        _super.call(this, initialState);
	        this._dispatcher = _dispatcher;
	        this._reducer = _reducer;
	        this.select = select_1.select.bind(this);
	        state$.subscribe(function (state) { return _super.prototype.next.call(_this, state); });
	    }
	    Store.prototype.replaceReducer = function (reducer) {
	        this._reducer.replaceReducer(reducer);
	    };
	    Store.prototype.dispatch = function (action) {
	        this._dispatcher.dispatch(action);
	    };
	    Store.prototype.next = function (action) {
	        this._dispatcher.dispatch(action);
	    };
	    Store.prototype.error = function (err) {
	        this._dispatcher.error(err);
	    };
	    Store.prototype.complete = function () {
	        // noop
	    };
	    return Store;
	}(SyncSubject_1.SyncSubject));
	exports.Store = Store;


/***/ },
/* 420 */
/***/ function(module, exports) {

	"use strict";
	function combineReducers(reducers) {
	    var reducerKeys = Object.keys(reducers);
	    var finalReducers = {};
	    for (var i = 0; i < reducerKeys.length; i++) {
	        var key = reducerKeys[i];
	        if (typeof reducers[key] === 'function') {
	            finalReducers[key] = reducers[key];
	        }
	    }
	    var finalReducerKeys = Object.keys(finalReducers);
	    return function combination(state, action) {
	        if (state === void 0) { state = {}; }
	        var hasChanged = false;
	        var nextState = {};
	        for (var i = 0; i < finalReducerKeys.length; i++) {
	            var key = finalReducerKeys[i];
	            var reducer = finalReducers[key];
	            var previousStateForKey = state[key];
	            var nextStateForKey = reducer(previousStateForKey, action);
	            nextState[key] = nextStateForKey;
	            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	        }
	        return hasChanged ? nextState : state;
	    };
	}
	exports.combineReducers = combineReducers;


/***/ },
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(831);
	var objectAssign = __webpack_require__(769);

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};

		opts = objectAssign(defaults, opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(22);
	var queue_1 = __webpack_require__(298);
	var observeOn_1 = __webpack_require__(181);
	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var from_1 = __webpack_require__(798);
	Observable_1.Observable.from = from_1.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishReplay_1 = __webpack_require__(811);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var share_1 = __webpack_require__(812);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMapTo_1 = __webpack_require__(815);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var toArray_1 = __webpack_require__(818);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var tryCatch_1 = __webpack_require__(302);
	var errorObject_1 = __webpack_require__(183);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(180);
	var mergeAll_1 = __webpack_require__(295);
	var isScheduler_1 = __webpack_require__(186);
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(89);
	var OuterSubscriber_1 = __webpack_require__(87);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(791);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Applies an accumulation function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ScanOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 464 */,
/* 465 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var line_1 = __webpack_require__(573);
	var MdList = (function () {
	    function MdList() {
	    }
	    MdList = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-list, md-nav-list',
	            host: { 'role': 'list' },
	            template: '<ng-content></ng-content>',
	            styles: ["/** * This mixin provides all md-line styles, changing secondary font size * based on whether the list is in dense mode. */ /** * This mixin provides base styles for the wrapper around md-line * elements in a list. */ /** * This mixin normalizes default element styles, e.g. font weight for heading text. */ /*  Normal list variables */ /* Dense list variables */ /* This mixin provides all list-item styles, changing font size and height based on whether the list is in dense mode. */ /* This mixin provides all subheader styles, adjusting heights and padding based on whether the list is in dense mode. */ md-list, md-nav-list { padding-top: 8px; display: block; } md-list [md-subheader], md-nav-list [md-subheader] { display: block; box-sizing: border-box; height: 48px; padding: 16px; margin: 0; font-size: 14px; font-weight: 500; color: rgba(0, 0, 0, 0.54); } md-list [md-subheader]:first-child, md-nav-list [md-subheader]:first-child { margin-top: -8px; } md-list md-list-item .md-list-item, md-list a[md-list-item] .md-list-item, md-nav-list md-list-item .md-list-item, md-nav-list a[md-list-item] .md-list-item { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; font-family: Roboto, \"Helvetica Neue\", sans-serif; box-sizing: border-box; font-size: 16px; height: 48px; padding: 0 16px; color: black; } md-list md-list-item.md-list-avatar .md-list-item, md-list a[md-list-item].md-list-avatar .md-list-item, md-nav-list md-list-item.md-list-avatar .md-list-item, md-nav-list a[md-list-item].md-list-avatar .md-list-item { height: 56px; } md-list md-list-item.md-2-line .md-list-item, md-list a[md-list-item].md-2-line .md-list-item, md-nav-list md-list-item.md-2-line .md-list-item, md-nav-list a[md-list-item].md-2-line .md-list-item { height: 72px; } md-list md-list-item.md-3-line .md-list-item, md-list a[md-list-item].md-3-line .md-list-item, md-nav-list md-list-item.md-3-line .md-list-item, md-nav-list a[md-list-item].md-3-line .md-list-item { height: 88px; } md-list md-list-item .md-list-text, md-list a[md-list-item] .md-list-text, md-nav-list md-list-item .md-list-text, md-nav-list a[md-list-item] .md-list-text { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; width: 100%; box-sizing: border-box; overflow: hidden; padding: 0 16px; } md-list md-list-item .md-list-text > *, md-list a[md-list-item] .md-list-text > *, md-nav-list md-list-item .md-list-text > *, md-nav-list a[md-list-item] .md-list-text > * { margin: 0; padding: 0; font-weight: normal; font-size: inherit; } md-list md-list-item .md-list-text:empty, md-list a[md-list-item] .md-list-text:empty, md-nav-list md-list-item .md-list-text:empty, md-nav-list a[md-list-item] .md-list-text:empty { display: none; } md-list md-list-item .md-list-text:first-child, md-list a[md-list-item] .md-list-text:first-child, md-nav-list md-list-item .md-list-text:first-child, md-nav-list a[md-list-item] .md-list-text:first-child { padding: 0; } md-list md-list-item [md-list-avatar], md-list a[md-list-item] [md-list-avatar], md-nav-list md-list-item [md-list-avatar], md-nav-list a[md-list-item] [md-list-avatar] { width: 40px; height: 40px; border-radius: 50%; } md-list md-list-item [md-list-icon], md-list a[md-list-item] [md-list-icon], md-nav-list md-list-item [md-list-icon], md-nav-list a[md-list-item] [md-list-icon] { width: 24px; height: 24px; border-radius: 50%; padding: 4px; } md-list md-list-item [md-line], md-list a[md-list-item] [md-line], md-nav-list md-list-item [md-line], md-nav-list a[md-list-item] [md-line] { display: block; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; box-sizing: border-box; } md-list md-list-item [md-line]:nth-child(n+2), md-list a[md-list-item] [md-line]:nth-child(n+2), md-nav-list md-list-item [md-line]:nth-child(n+2), md-nav-list a[md-list-item] [md-line]:nth-child(n+2) { font-size: 14px; } md-list[dense], md-nav-list[dense] { padding-top: 4px; display: block; } md-list[dense] [md-subheader], md-nav-list[dense] [md-subheader] { display: block; box-sizing: border-box; height: 40px; padding: 16px; margin: 0; font-size: 13px; font-weight: 500; color: rgba(0, 0, 0, 0.54); } md-list[dense] [md-subheader]:first-child, md-nav-list[dense] [md-subheader]:first-child { margin-top: -4px; } md-list[dense] md-list-item .md-list-item, md-list[dense] a[md-list-item] .md-list-item, md-nav-list[dense] md-list-item .md-list-item, md-nav-list[dense] a[md-list-item] .md-list-item { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; font-family: Roboto, \"Helvetica Neue\", sans-serif; box-sizing: border-box; font-size: 13px; height: 40px; padding: 0 16px; color: black; } md-list[dense] md-list-item.md-list-avatar .md-list-item, md-list[dense] a[md-list-item].md-list-avatar .md-list-item, md-nav-list[dense] md-list-item.md-list-avatar .md-list-item, md-nav-list[dense] a[md-list-item].md-list-avatar .md-list-item { height: 48px; } md-list[dense] md-list-item.md-2-line .md-list-item, md-list[dense] a[md-list-item].md-2-line .md-list-item, md-nav-list[dense] md-list-item.md-2-line .md-list-item, md-nav-list[dense] a[md-list-item].md-2-line .md-list-item { height: 60px; } md-list[dense] md-list-item.md-3-line .md-list-item, md-list[dense] a[md-list-item].md-3-line .md-list-item, md-nav-list[dense] md-list-item.md-3-line .md-list-item, md-nav-list[dense] a[md-list-item].md-3-line .md-list-item { height: 76px; } md-list[dense] md-list-item .md-list-text, md-list[dense] a[md-list-item] .md-list-text, md-nav-list[dense] md-list-item .md-list-text, md-nav-list[dense] a[md-list-item] .md-list-text { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; width: 100%; box-sizing: border-box; overflow: hidden; padding: 0 16px; } md-list[dense] md-list-item .md-list-text > *, md-list[dense] a[md-list-item] .md-list-text > *, md-nav-list[dense] md-list-item .md-list-text > *, md-nav-list[dense] a[md-list-item] .md-list-text > * { margin: 0; padding: 0; font-weight: normal; font-size: inherit; } md-list[dense] md-list-item .md-list-text:empty, md-list[dense] a[md-list-item] .md-list-text:empty, md-nav-list[dense] md-list-item .md-list-text:empty, md-nav-list[dense] a[md-list-item] .md-list-text:empty { display: none; } md-list[dense] md-list-item .md-list-text:first-child, md-list[dense] a[md-list-item] .md-list-text:first-child, md-nav-list[dense] md-list-item .md-list-text:first-child, md-nav-list[dense] a[md-list-item] .md-list-text:first-child { padding: 0; } md-list[dense] md-list-item [md-list-avatar], md-list[dense] a[md-list-item] [md-list-avatar], md-nav-list[dense] md-list-item [md-list-avatar], md-nav-list[dense] a[md-list-item] [md-list-avatar] { width: 40px; height: 40px; border-radius: 50%; } md-list[dense] md-list-item [md-list-icon], md-list[dense] a[md-list-item] [md-list-icon], md-nav-list[dense] md-list-item [md-list-icon], md-nav-list[dense] a[md-list-item] [md-list-icon] { width: 24px; height: 24px; border-radius: 50%; padding: 4px; } md-list[dense] md-list-item [md-line], md-list[dense] a[md-list-item] [md-line], md-nav-list[dense] md-list-item [md-line], md-nav-list[dense] a[md-list-item] [md-line] { display: block; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; box-sizing: border-box; } md-list[dense] md-list-item [md-line]:nth-child(n+2), md-list[dense] a[md-list-item] [md-line]:nth-child(n+2), md-nav-list[dense] md-list-item [md-line]:nth-child(n+2), md-nav-list[dense] a[md-list-item] [md-line]:nth-child(n+2) { font-size: 13px; } md-divider { display: block; border-top: 1px solid rgba(0, 0, 0, 0.12); margin: 0; } md-nav-list a { text-decoration: none; color: inherit; } md-nav-list .md-list-item { cursor: pointer; } md-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus { outline: none; background: rgba(0, 0, 0, 0.04); } "],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdList);
	    return MdList;
	}());
	exports.MdList = MdList;
	/* Need directive for a ContentChild query in list-item */
	var MdListAvatar = (function () {
	    function MdListAvatar() {
	    }
	    MdListAvatar = __decorate([
	        core_1.Directive({ selector: '[md-list-avatar]' }), 
	        __metadata('design:paramtypes', [])
	    ], MdListAvatar);
	    return MdListAvatar;
	}());
	exports.MdListAvatar = MdListAvatar;
	var MdListItem = (function () {
	    function MdListItem(_renderer, _element) {
	        this._renderer = _renderer;
	        this._element = _element;
	        /** @internal */
	        this.hasFocus = false;
	    }
	    Object.defineProperty(MdListItem.prototype, "_hasAvatar", {
	        set: function (avatar) {
	            this._renderer.setElementClass(this._element.nativeElement, 'md-list-avatar', avatar != null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** TODO: internal */
	    MdListItem.prototype.ngAfterContentInit = function () {
	        this._lineSetter = new line_1.MdLineSetter(this._lines, this._renderer, this._element);
	    };
	    /** @internal */
	    MdListItem.prototype.handleFocus = function () {
	        this.hasFocus = true;
	    };
	    /** @internal */
	    MdListItem.prototype.handleBlur = function () {
	        this.hasFocus = false;
	    };
	    __decorate([
	        core_1.ContentChildren(line_1.MdLine), 
	        __metadata('design:type', core_1.QueryList)
	    ], MdListItem.prototype, "_lines", void 0);
	    __decorate([
	        core_1.ContentChild(MdListAvatar), 
	        __metadata('design:type', MdListAvatar), 
	        __metadata('design:paramtypes', [MdListAvatar])
	    ], MdListItem.prototype, "_hasAvatar", null);
	    MdListItem = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-list-item, a[md-list-item]',
	            host: {
	                'role': 'listitem',
	                '(focus)': 'handleFocus()',
	                '(blur)': 'handleBlur()',
	            },
	            template: "<div class=\"md-list-item\" [class.md-list-item-focus]=\"hasFocus\"> <ng-content select=\"[md-list-avatar],[md-list-icon]\"></ng-content> <div class=\"md-list-text\"><ng-content select=\"[md-line]\"></ng-content></div> <ng-content></ng-content> </div> ",
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
	    ], MdListItem);
	    return MdListItem;
	}());
	exports.MdListItem = MdListItem;
	exports.MD_LIST_DIRECTIVES = [MdList, MdListItem, line_1.MdLine, MdListAvatar];
	//# sourceMappingURL=list.js.map

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	// TODO(jelbourn): Ink ripples.
	// TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
	// TODO(kara): Convert attribute selectors to classes when attr maps become available
	var MdButton = (function () {
	    function MdButton(elementRef, renderer) {
	        this.elementRef = elementRef;
	        this.renderer = renderer;
	        /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
	        this.isKeyboardFocused = false;
	        /** Whether a mousedown has occurred on this element in the last 100ms. */
	        this.isMouseDown = false;
	    }
	    Object.defineProperty(MdButton.prototype, "color", {
	        get: function () {
	            return this._color;
	        },
	        set: function (value) {
	            this._updateColor(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    MdButton.prototype.setMousedown = function () {
	        var _this = this;
	        // We only *show* the focus style when focus has come to the button via the keyboard.
	        // The Material Design spec is silent on this topic, and without doing this, the
	        // button continues to look :active after clicking.
	        // @see http://marcysutton.com/button-focus-hell/
	        this.isMouseDown = true;
	        setTimeout(function () { _this.isMouseDown = false; }, 100);
	    };
	    MdButton.prototype._updateColor = function (newColor) {
	        this._setElementColor(this._color, false);
	        this._setElementColor(newColor, true);
	        this._color = newColor;
	    };
	    MdButton.prototype._setElementColor = function (color, isAdd) {
	        if (color != null && color != '') {
	            this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
	        }
	    };
	    /** @internal */
	    MdButton.prototype.setKeyboardFocus = function () {
	        this.isKeyboardFocused = !this.isMouseDown;
	    };
	    /** @internal */
	    MdButton.prototype.removeKeyboardFocus = function () {
	        this.isKeyboardFocused = false;
	    };
	    /** TODO(hansl): e2e test this function. */
	    MdButton.prototype.focus = function () {
	        this.elementRef.nativeElement.focus();
	    };
	    MdButton = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'button[md-button], button[md-raised-button], button[md-icon-button], ' +
	                'button[md-fab], button[md-mini-fab]',
	            inputs: ['color'],
	            host: {
	                '[class.md-button-focus]': 'isKeyboardFocused',
	                '(mousedown)': 'setMousedown()',
	                '(focus)': 'setKeyboardFocus()',
	                '(blur)': 'removeKeyboardFocus()',
	            },
	            template: "<span class=\"md-button-wrapper\"><ng-content></ng-content></span> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ /** Applies a property to an md-button element for each of the supported palettes. */ /** Applies a focus style to an md-button element for each of the supported palettes. */ [md-raised-button], [md-fab], [md-mini-fab], [md-button], [md-icon-button] { box-sizing: border-box; position: relative; background: transparent; text-align: center; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; outline: none; border: none; display: inline-block; white-space: nowrap; text-decoration: none; vertical-align: baseline; font-size: 14px; font-family: Roboto, \"Helvetica Neue\", sans-serif; font-weight: 500; color: currentColor; margin: 0; min-width: 88px; line-height: 36px; padding: 0 16px; border-radius: 3px; } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab], .md-primary[md-button], .md-primary[md-icon-button] { color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab], .md-accent[md-button], .md-accent[md-icon-button] { color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab], .md-warn[md-button], .md-warn[md-icon-button] { color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-primary[disabled][md-button], .md-primary[disabled][md-icon-button], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-accent[disabled][md-button], .md-accent[disabled][md-icon-button], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], .md-warn[disabled][md-button], .md-warn[disabled][md-icon-button], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab], [disabled][disabled][md-button], [disabled][disabled][md-icon-button] { color: rgba(0, 0, 0, 0.38); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab], [disabled][md-button], [disabled][md-icon-button] { cursor: default; } .md-button-focus[md-raised-button]::after, .md-button-focus[md-fab]::after, .md-button-focus[md-mini-fab]::after, .md-button-focus[md-button]::after, .md-button-focus[md-icon-button]::after { position: absolute; top: 0; left: 0; bottom: 0; right: 0; content: ''; background-color: rgba(0, 0, 0, 0.12); border-radius: inherit; pointer-events: none; } .md-button-focus.md-primary[md-raised-button]::after, .md-button-focus.md-primary[md-fab]::after, .md-button-focus.md-primary[md-mini-fab]::after, .md-button-focus.md-primary[md-button]::after, .md-button-focus.md-primary[md-icon-button]::after { background-color: rgba(0, 150, 136, 0.12); } .md-button-focus.md-accent[md-raised-button]::after, .md-button-focus.md-accent[md-fab]::after, .md-button-focus.md-accent[md-mini-fab]::after, .md-button-focus.md-accent[md-button]::after, .md-button-focus.md-accent[md-icon-button]::after { background-color: rgba(156, 39, 176, 0.12); } .md-button-focus.md-warn[md-raised-button]::after, .md-button-focus.md-warn[md-fab]::after, .md-button-focus.md-warn[md-mini-fab]::after, .md-button-focus.md-warn[md-button]::after, .md-button-focus.md-warn[md-icon-button]::after { background-color: rgba(244, 67, 54, 0.12); } [md-raised-button], [md-fab], [md-mini-fab] { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); background-color: #fafafa; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { color: white; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { color: rgba(255, 255, 255, 0.870588); } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { color: white; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { color: rgba(0, 0, 0, 0.38); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { background-color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { background-color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { background-color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } [md-raised-button]:active, [md-fab]:active, [md-mini-fab]:active { box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab] { box-shadow: none; } [md-button][disabled]:hover.md-primary, [md-button][disabled]:hover.md-accent, [md-button][disabled]:hover.md-warn, [md-button][disabled]:hover:hover { background-color: transparent; } [md-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 56px; height: 56px; padding: 0; } [md-fab] i, [md-fab] md-icon { padding: 16px 0; } [md-mini-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 40px; height: 40px; padding: 0; } [md-mini-fab] i, [md-mini-fab] md-icon { padding: 8px 0; } [md-icon-button] { min-width: 0; padding: 0; width: 40px; height: 40px; line-height: 24px; border-radius: 50%; } [md-icon-button] .md-button-wrapper > * { vertical-align: middle; } [md-button]:hover::after, [md-icon-button]:hover::after { position: absolute; top: 0; left: 0; bottom: 0; right: 0; content: ''; background-color: rgba(0, 0, 0, 0.12); border-radius: inherit; pointer-events: none; } [md-button]:hover.md-primary::after, [md-icon-button]:hover.md-primary::after { background-color: rgba(0, 150, 136, 0.12); } [md-button]:hover.md-accent::after, [md-icon-button]:hover.md-accent::after { background-color: rgba(156, 39, 176, 0.12); } [md-button]:hover.md-warn::after, [md-icon-button]:hover.md-warn::after { background-color: rgba(244, 67, 54, 0.12); } @media screen and (-ms-high-contrast: active) { .md-raised-button, .md-fab, .md-mini-fab { border: 1px solid #fff; } } "],
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], MdButton);
	    return MdButton;
	}());
	exports.MdButton = MdButton;
	var MdAnchor = (function (_super) {
	    __extends(MdAnchor, _super);
	    function MdAnchor(elementRef, renderer) {
	        _super.call(this, elementRef, renderer);
	        this._disabled = null;
	    }
	    Object.defineProperty(MdAnchor.prototype, "tabIndex", {
	        get: function () {
	            return this.disabled ? -1 : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
	        get: function () {
	            return this.disabled ? 'true' : 'false';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdAnchor.prototype, "disabled", {
	        get: function () { return this._disabled; },
	        set: function (value) {
	            // The presence of *any* disabled value makes the component disabled, *except* for false.
	            this._disabled = (value != null && value != false) ? true : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    MdAnchor.prototype.haltDisabledEvents = function (event) {
	        // A disabled button shouldn't apply any actions
	        if (this.disabled) {
	            event.preventDefault();
	            event.stopImmediatePropagation();
	        }
	    };
	    __decorate([
	        core_1.HostBinding('tabIndex'), 
	        __metadata('design:type', Number)
	    ], MdAnchor.prototype, "tabIndex", null);
	    __decorate([
	        core_1.HostBinding('attr.aria-disabled'), 
	        __metadata('design:type', String)
	    ], MdAnchor.prototype, "isAriaDisabled", null);
	    __decorate([
	        core_1.HostBinding('attr.disabled'),
	        core_1.Input('disabled'), 
	        __metadata('design:type', Object)
	    ], MdAnchor.prototype, "disabled", null);
	    MdAnchor = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab]',
	            inputs: ['color'],
	            host: {
	                '[class.md-button-focus]': 'isKeyboardFocused',
	                '(mousedown)': 'setMousedown()',
	                '(focus)': 'setKeyboardFocus()',
	                '(blur)': 'removeKeyboardFocus()',
	                '(click)': 'haltDisabledEvents($event)',
	            },
	            template: "<span class=\"md-button-wrapper\"><ng-content></ng-content></span> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ /** Applies a property to an md-button element for each of the supported palettes. */ /** Applies a focus style to an md-button element for each of the supported palettes. */ [md-raised-button], [md-fab], [md-mini-fab], [md-button], [md-icon-button] { box-sizing: border-box; position: relative; background: transparent; text-align: center; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; outline: none; border: none; display: inline-block; white-space: nowrap; text-decoration: none; vertical-align: baseline; font-size: 14px; font-family: Roboto, \"Helvetica Neue\", sans-serif; font-weight: 500; color: currentColor; margin: 0; min-width: 88px; line-height: 36px; padding: 0 16px; border-radius: 3px; } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab], .md-primary[md-button], .md-primary[md-icon-button] { color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab], .md-accent[md-button], .md-accent[md-icon-button] { color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab], .md-warn[md-button], .md-warn[md-icon-button] { color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-primary[disabled][md-button], .md-primary[disabled][md-icon-button], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-accent[disabled][md-button], .md-accent[disabled][md-icon-button], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], .md-warn[disabled][md-button], .md-warn[disabled][md-icon-button], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab], [disabled][disabled][md-button], [disabled][disabled][md-icon-button] { color: rgba(0, 0, 0, 0.38); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab], [disabled][md-button], [disabled][md-icon-button] { cursor: default; } .md-button-focus[md-raised-button]::after, .md-button-focus[md-fab]::after, .md-button-focus[md-mini-fab]::after, .md-button-focus[md-button]::after, .md-button-focus[md-icon-button]::after { position: absolute; top: 0; left: 0; bottom: 0; right: 0; content: ''; background-color: rgba(0, 0, 0, 0.12); border-radius: inherit; pointer-events: none; } .md-button-focus.md-primary[md-raised-button]::after, .md-button-focus.md-primary[md-fab]::after, .md-button-focus.md-primary[md-mini-fab]::after, .md-button-focus.md-primary[md-button]::after, .md-button-focus.md-primary[md-icon-button]::after { background-color: rgba(0, 150, 136, 0.12); } .md-button-focus.md-accent[md-raised-button]::after, .md-button-focus.md-accent[md-fab]::after, .md-button-focus.md-accent[md-mini-fab]::after, .md-button-focus.md-accent[md-button]::after, .md-button-focus.md-accent[md-icon-button]::after { background-color: rgba(156, 39, 176, 0.12); } .md-button-focus.md-warn[md-raised-button]::after, .md-button-focus.md-warn[md-fab]::after, .md-button-focus.md-warn[md-mini-fab]::after, .md-button-focus.md-warn[md-button]::after, .md-button-focus.md-warn[md-icon-button]::after { background-color: rgba(244, 67, 54, 0.12); } [md-raised-button], [md-fab], [md-mini-fab] { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); background-color: #fafafa; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { color: white; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { color: rgba(255, 255, 255, 0.870588); } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { color: white; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { color: rgba(0, 0, 0, 0.38); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { background-color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { background-color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { background-color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } [md-raised-button]:active, [md-fab]:active, [md-mini-fab]:active { box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab] { box-shadow: none; } [md-button][disabled]:hover.md-primary, [md-button][disabled]:hover.md-accent, [md-button][disabled]:hover.md-warn, [md-button][disabled]:hover:hover { background-color: transparent; } [md-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 56px; height: 56px; padding: 0; } [md-fab] i, [md-fab] md-icon { padding: 16px 0; } [md-mini-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 40px; height: 40px; padding: 0; } [md-mini-fab] i, [md-mini-fab] md-icon { padding: 8px 0; } [md-icon-button] { min-width: 0; padding: 0; width: 40px; height: 40px; line-height: 24px; border-radius: 50%; } [md-icon-button] .md-button-wrapper > * { vertical-align: middle; } [md-button]:hover::after, [md-icon-button]:hover::after { position: absolute; top: 0; left: 0; bottom: 0; right: 0; content: ''; background-color: rgba(0, 0, 0, 0.12); border-radius: inherit; pointer-events: none; } [md-button]:hover.md-primary::after, [md-icon-button]:hover.md-primary::after { background-color: rgba(0, 150, 136, 0.12); } [md-button]:hover.md-accent::after, [md-icon-button]:hover.md-accent::after { background-color: rgba(156, 39, 176, 0.12); } [md-button]:hover.md-warn::after, [md-icon-button]:hover.md-warn::after { background-color: rgba(244, 67, 54, 0.12); } @media screen and (-ms-high-contrast: active) { .md-raised-button, .md-fab, .md-mini-fab { border: 1px solid #fff; } } "],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], MdAnchor);
	    return MdAnchor;
	}(MdButton));
	exports.MdAnchor = MdAnchor;
	exports.MD_BUTTON_DIRECTIVES = [MdButton, MdAnchor];
	//# sourceMappingURL=button.js.map

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(539));
	//# sourceMappingURL=index.js.map

/***/ },
/* 469 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Annotation Factory that allows HTML style boolean attributes. For example,
	 * a field declared like this:

	 * @Directive({ selector: 'component' }) class MyComponent {
	 *   @Input() @BooleanFieldValueFactory() myField: boolean;
	 * }
	 *
	 * You could set it up this way:
	 *   <component myField>
	 * or:
	 *   <component myField="">
	 */
	function booleanFieldValueFactory() {
	    return function booleanFieldValueMetadata(target, key) {
	        var defaultValue = target[key];
	        var localKey = "__md_private_symbol_" + key;
	        target[localKey] = defaultValue;
	        Object.defineProperty(target, key, {
	            get: function () { return this[localKey]; },
	            set: function (value) {
	                this[localKey] = value != null && "" + value !== 'false';
	            }
	        });
	    };
	}
	exports.BooleanFieldValue = booleanFieldValueFactory;
	//# sourceMappingURL=field-value.js.map

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncScheduler_1 = __webpack_require__(821);
	exports.async = new AsyncScheduler_1.AsyncScheduler();
	//# sourceMappingURL=async.js.map

/***/ },
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function normalizeValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeValidator = normalizeValidator;
	function normalizeAsyncValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeAsyncValidator = normalizeAsyncValidator;
	//# sourceMappingURL=normalize_validator.js.map

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var common_1 = __webpack_require__(34);
	var compiler_1 = __webpack_require__(140);
	var core_1 = __webpack_require__(1);
	var directives_1 = __webpack_require__(373);
	var radio_control_value_accessor_1 = __webpack_require__(159);
	var collection_1 = __webpack_require__(35);
	var form_builder_1 = __webpack_require__(378);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * bootstrap(MyApp, [FORM_PROVIDERS]);
	 * ```
	 *
	 * @experimental
	 */
	exports.FORM_PROVIDERS = [form_builder_1.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	function flatten(platformDirectives) {
	    var flattenedDirectives = [];
	    platformDirectives.forEach(function (directives) {
	        if (Array.isArray(directives)) {
	            flattenedDirectives = flattenedDirectives.concat(directives);
	        }
	        else {
	            flattenedDirectives.push(directives);
	        }
	    });
	    return flattenedDirectives;
	}
	/**
	 * @experimental
	 */
	function disableDeprecatedForms() {
	    return [{
	            provide: compiler_1.CompilerConfig,
	            useFactory: function (platformDirectives, platformPipes) {
	                var flattenedDirectives = flatten(platformDirectives);
	                collection_1.ListWrapper.remove(flattenedDirectives, common_1.FORM_DIRECTIVES);
	                return new compiler_1.CompilerConfig({ platformDirectives: flattenedDirectives, platformPipes: platformPipes });
	            },
	            deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
	        }];
	}
	exports.disableDeprecatedForms = disableDeprecatedForms;
	/**
	 * @experimental
	 */
	function provideForms() {
	    return [
	        { provide: core_1.PLATFORM_DIRECTIVES, useValue: directives_1.FORM_DIRECTIVES, multi: true }, exports.FORM_PROVIDERS
	    ];
	}
	exports.provideForms = provideForms;
	//# sourceMappingURL=form_providers.js.map

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * This module is used for handling user input, by defining and building a {@link FormGroup} that
	 * consists of
	 * {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl} objects can then
	 * be used
	 * to read information
	 * from the form DOM elements.
	 *
	 * Forms providers are not included in default providers; you must import these providers
	 * explicitly.
	 */
	var directives_1 = __webpack_require__(373);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.REACTIVE_FORM_DIRECTIVES = directives_1.REACTIVE_FORM_DIRECTIVES;
	var abstract_control_directive_1 = __webpack_require__(233);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var checkbox_value_accessor_1 = __webpack_require__(157);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var control_container_1 = __webpack_require__(53);
	exports.ControlContainer = control_container_1.ControlContainer;
	var control_value_accessor_1 = __webpack_require__(44);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(158);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(78);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_1 = __webpack_require__(234);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var ng_form_1 = __webpack_require__(235);
	exports.NgForm = ng_form_1.NgForm;
	var ng_model_1 = __webpack_require__(236);
	exports.NgModel = ng_model_1.NgModel;
	var ng_model_group_1 = __webpack_require__(237);
	exports.NgModelGroup = ng_model_group_1.NgModelGroup;
	var form_array_name_1 = __webpack_require__(239);
	exports.FormArrayName = form_array_name_1.FormArrayName;
	var form_control_directive_1 = __webpack_require__(240);
	exports.FormControlDirective = form_control_directive_1.FormControlDirective;
	var form_control_name_1 = __webpack_require__(241);
	exports.FormControlName = form_control_name_1.FormControlName;
	var form_group_directive_1 = __webpack_require__(242);
	exports.FormGroupDirective = form_group_directive_1.FormGroupDirective;
	var form_group_name_1 = __webpack_require__(243);
	exports.FormGroupName = form_group_name_1.FormGroupName;
	var select_control_value_accessor_1 = __webpack_require__(160);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var validators_1 = __webpack_require__(245);
	exports.MaxLengthValidator = validators_1.MaxLengthValidator;
	exports.MinLengthValidator = validators_1.MinLengthValidator;
	exports.PatternValidator = validators_1.PatternValidator;
	exports.RequiredValidator = validators_1.RequiredValidator;
	var form_builder_1 = __webpack_require__(378);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var model_1 = __webpack_require__(161);
	exports.AbstractControl = model_1.AbstractControl;
	exports.FormArray = model_1.FormArray;
	exports.FormControl = model_1.FormControl;
	exports.FormGroup = model_1.FormGroup;
	var validators_2 = __webpack_require__(39);
	exports.NG_ASYNC_VALIDATORS = validators_2.NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = validators_2.NG_VALIDATORS;
	exports.Validators = validators_2.Validators;
	__export(__webpack_require__(538));
	//# sourceMappingURL=forms.js.map

/***/ },
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	//# sourceMappingURL=promise-completer.js.map

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * Shared directive to count lines inside a text area, such as a list item.
	 * Line elements can be extracted with a @ContentChildren(MdLine) query, then
	 * counted by checking the query list's length.
	 */
	var MdLine = (function () {
	    function MdLine() {
	    }
	    MdLine = __decorate([
	        core_1.Directive({ selector: '[md-line]' }), 
	        __metadata('design:paramtypes', [])
	    ], MdLine);
	    return MdLine;
	}());
	exports.MdLine = MdLine;
	/* Helper that takes a query list of lines and sets the correct class on the host */
	var MdLineSetter = (function () {
	    function MdLineSetter(_lines, _renderer, _element) {
	        var _this = this;
	        this._lines = _lines;
	        this._renderer = _renderer;
	        this._element = _element;
	        this._setLineClass(this._lines.length);
	        this._lines.changes.subscribe(function () {
	            _this._setLineClass(_this._lines.length);
	        });
	    }
	    MdLineSetter.prototype._setLineClass = function (count) {
	        this._resetClasses();
	        if (count === 2 || count === 3) {
	            this._setClass("md-" + count + "-line", true);
	        }
	    };
	    MdLineSetter.prototype._resetClasses = function () {
	        this._setClass('md-2-line', false);
	        this._setClass('md-3-line', false);
	    };
	    MdLineSetter.prototype._setClass = function (className, bool) {
	        this._renderer.setElementClass(this._element.nativeElement, className, bool);
	    };
	    return MdLineSetter;
	}());
	exports.MdLineSetter = MdLineSetter;
	//# sourceMappingURL=line.js.map

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * Directive to listen to changes of direction of part of the DOM.
	 *
	 * Applications should use this directive instead of the native attribute so that Material
	 * components can listen on changes of direction.
	 */
	var Dir = (function () {
	    function Dir() {
	        this._dir = 'ltr';
	        this.dirChange = new core_1.EventEmitter();
	    }
	    Object.defineProperty(Dir.prototype, "dir", {
	        get: function () {
	            return this._dir;
	        },
	        set: function (v) {
	            var old = this._dir;
	            this._dir = v;
	            if (old != this._dir) {
	                this.dirChange.emit(null);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Dir.prototype, "value", {
	        get: function () { return this.dir; },
	        set: function (v) { this.dir = v; },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input('dir'), 
	        __metadata('design:type', String)
	    ], Dir.prototype, "_dir", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Dir.prototype, "dirChange", void 0);
	    __decorate([
	        core_1.HostBinding('attr.dir'), 
	        __metadata('design:type', String)
	    ], Dir.prototype, "dir", null);
	    Dir = __decorate([
	        core_1.Directive({
	            selector: '[dir]',
	            // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
	            exportAs: '$implicit'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Dir);
	    return Dir;
	}());
	exports.Dir = Dir;
	//# sourceMappingURL=dir.js.map

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var error_1 = __webpack_require__(187);
	var icon_registry_1 = __webpack_require__(400);
	var icon_registry_2 = __webpack_require__(400);
	exports.MdIconRegistry = icon_registry_2.MdIconRegistry;
	/** Exception thrown when an invalid icon name is passed to an md-icon component. */
	var MdIconInvalidNameError = (function (_super) {
	    __extends(MdIconInvalidNameError, _super);
	    function MdIconInvalidNameError(iconName) {
	        _super.call(this, "Invalid icon name: \"" + iconName + "\"");
	    }
	    return MdIconInvalidNameError;
	}(error_1.MdError));
	exports.MdIconInvalidNameError = MdIconInvalidNameError;
	/**
	 * Component to display an icon. It can be used in the following ways:
	 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
	 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
	 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
	 *   server must be configured to allow cross-domain requests.
	 *   Example:
	 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
	 *
	 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
	 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
	 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
	 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
	 *   Examples:
	 *     <md-icon svgIcon="left-arrow"></md-icon>
	 *     <md-icon svgIcon="animals:cat"></md-icon>
	 *
	 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
	 *   component. By default the Material icons font is used as described at
	 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
	 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
	 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
	 *   Examples:
	 *     <md-icon>home</md-icon>
	 *     <md-icon fontSet="myfont">sun</md-icon>
	 *
	 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
	 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
	 *   CSS class which causes the glyph to be displayed via a :before selector, as in
	 *   https://fortawesome.github.io/Font-Awesome/examples/
	 *   Example:
	 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
	 */
	var MdIcon = (function () {
	    function MdIcon(_element, _renderer, _mdIconRegistry) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._mdIconRegistry = _mdIconRegistry;
	        this.hostAriaLabel = '';
	    }
	    /**
	     * Splits an svgIcon binding value into its icon set and icon name components.
	     * Returns a 2-element array of [(icon set), (icon name)].
	     * The separator for the two fields is ':'. If there is no separator, an empty
	     * string is returned for the icon set and the entire value is returned for
	     * the icon name. If the argument is falsy, returns an array of two empty strings.
	     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
	     * Examples:
	     *   'social:cake' -> ['social', 'cake']
	     *   'penguin' -> ['', 'penguin']
	     *   null -> ['', '']
	     *   'a:b:c' -> (throws MdIconInvalidNameError)
	     */
	    MdIcon.prototype._splitIconName = function (iconName) {
	        if (!iconName) {
	            return ['', ''];
	        }
	        var parts = iconName.split(':');
	        switch (parts.length) {
	            case 1:
	                // Use default namespace.
	                return ['', parts[0]];
	            case 2:
	                return parts;
	            default:
	                throw new MdIconInvalidNameError(iconName);
	        }
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        var changedInputs = Object.keys(changes);
	        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
	        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
	            if (this.svgIcon) {
	                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
	                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	            else if (this.svgSrc) {
	                this._mdIconRegistry.getSvgIconFromUrl(this.svgSrc).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	        }
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	        this._updateAriaLabel();
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngOnInit = function () {
	        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
	        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngAfterViewChecked = function () {
	        // Update aria label here because it may depend on the projected text content.
	        // (e.g. <md-icon>home</md-icon> should use 'home').
	        this._updateAriaLabel();
	    };
	    MdIcon.prototype._updateAriaLabel = function () {
	        var ariaLabel = this._getAriaLabel();
	        if (ariaLabel) {
	            this._renderer.setElementAttribute(this._element.nativeElement, 'aria-label', ariaLabel);
	        }
	    };
	    MdIcon.prototype._getAriaLabel = function () {
	        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
	        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
	        // the text content of the directive.
	        var label = this.hostAriaLabel ||
	            this.alt ||
	            this.fontIcon ||
	            this._splitIconName(this.svgIcon)[1];
	        if (label) {
	            return label;
	        }
	        // The "content" of an SVG icon is not a useful label.
	        if (this._usingFontIcon()) {
	            var text = this._element.nativeElement.textContent;
	            if (text) {
	                return text;
	            }
	        }
	        // TODO: Warn here in dev mode.
	        return null;
	    };
	    MdIcon.prototype._usingFontIcon = function () {
	        return !(this.svgIcon || this.svgSrc);
	    };
	    MdIcon.prototype._setSvgElement = function (svg) {
	        var layoutElement = this._element.nativeElement;
	        // Remove existing child nodes and add the new SVG element.
	        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
	        // but it fails in IE11: https://github.com/angular/angular/issues/6327
	        layoutElement.innerHTML = '';
	        this._renderer.projectNodes(layoutElement, [svg]);
	    };
	    MdIcon.prototype._updateFontIconClasses = function () {
	        if (!this._usingFontIcon()) {
	            return;
	        }
	        var elem = this._element.nativeElement;
	        var fontSetClass = this.fontSet ?
	            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
	            this._mdIconRegistry.getDefaultFontSetClass();
	        if (fontSetClass != this._previousFontSetClass) {
	            if (this._previousFontSetClass) {
	                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
	            }
	            if (fontSetClass) {
	                this._renderer.setElementClass(elem, fontSetClass, true);
	            }
	            this._previousFontSetClass = fontSetClass;
	        }
	        if (this.fontIcon != this._previousFontIconClass) {
	            if (this._previousFontIconClass) {
	                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
	            }
	            if (this.fontIcon) {
	                this._renderer.setElementClass(elem, this.fontIcon, true);
	            }
	            this._previousFontIconClass = this.fontIcon;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgSrc", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontSet", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "alt", void 0);
	    __decorate([
	        core_1.Input('aria-label'), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "hostAriaLabel", void 0);
	    MdIcon = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            template: '<ng-content></ng-content>',
	            selector: 'md-icon',
	            styles: ["/** The width/height of the icon element. */ /** This works because we're using ViewEncapsulation.None. If we used the default encapsulation, the selector would need to be \":host\". */ md-icon { background-repeat: no-repeat; display: inline-block; fill: currentColor; height: 24px; width: 24px; } "],
	            host: {
	                'role': 'img',
	            },
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, icon_registry_1.MdIconRegistry])
	    ], MdIcon);
	    return MdIcon;
	}());
	exports.MdIcon = MdIcon;
	exports.MD_ICON_DIRECTIVES = [MdIcon];
	//# sourceMappingURL=icon.js.map

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(34);
	var dir_1 = __webpack_require__(574);
	var promise_completer_1 = __webpack_require__(572);
	var error_1 = __webpack_require__(187);
	var field_value_1 = __webpack_require__(469);
	/** Exception thrown when two MdSidenav are matching the same side. */
	var MdDuplicatedSidenavError = (function (_super) {
	    __extends(MdDuplicatedSidenavError, _super);
	    function MdDuplicatedSidenavError(align) {
	        _super.call(this, "A sidenav was already declared for 'align=\"" + align + "\"'");
	    }
	    return MdDuplicatedSidenavError;
	}(error_1.MdError));
	exports.MdDuplicatedSidenavError = MdDuplicatedSidenavError;
	/**
	 * <md-sidenav> component.
	 *
	 * This component corresponds to the drawer of the sidenav.
	 *
	 * Please refer to README.md for examples on how to use it.
	 */
	var MdSidenav = (function () {
	    /**
	     * @param _elementRef The DOM element reference. Used for transition and width calculation.
	     *     If not available we do not hook on transitions.
	     */
	    function MdSidenav(_elementRef) {
	        this._elementRef = _elementRef;
	        /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
	        this.align = 'start';
	        /** Mode of the sidenav; whether 'over' or 'side'. */
	        this.mode = 'over';
	        /** Whether the sidenav is opened. */
	        this._opened = false;
	        /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
	        this.onOpenStart = new core_1.EventEmitter();
	        /** Event emitted when the sidenav is fully opened. */
	        this.onOpen = new core_1.EventEmitter();
	        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
	        this.onCloseStart = new core_1.EventEmitter();
	        /** Event emitted when the sidenav is fully closed. */
	        this.onClose = new core_1.EventEmitter();
	        this._transition = false;
	    }
	    Object.defineProperty(MdSidenav.prototype, "opened", {
	        /**
	         * Whether the sidenav is opened. We overload this because we trigger an event when it
	         * starts or end.
	         */
	        get: function () { return this._opened; },
	        set: function (v) {
	            this.toggle(v);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
	     * rejected if it didn't). */
	    MdSidenav.prototype.open = function () {
	        return this.toggle(true);
	    };
	    /**
	     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
	     * rejected if it didn't).
	     */
	    MdSidenav.prototype.close = function () {
	        return this.toggle(false);
	    };
	    /**
	     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
	     * close() when it's closed.
	     * @param isOpen
	     */
	    MdSidenav.prototype.toggle = function (isOpen) {
	        if (isOpen === void 0) { isOpen = !this.opened; }
	        // Shortcut it if we're already opened.
	        if (isOpen === this.opened) {
	            if (!this._transition) {
	                return Promise.resolve(null);
	            }
	            else {
	                return isOpen ? this._openPromise : this._closePromise;
	            }
	        }
	        this._opened = isOpen;
	        this._transition = true;
	        if (isOpen) {
	            this.onOpenStart.emit(null);
	        }
	        else {
	            this.onCloseStart.emit(null);
	        }
	        if (isOpen) {
	            if (this._openPromise == null) {
	                var completer = new promise_completer_1.PromiseCompleter();
	                this._openPromise = completer.promise;
	                this._openPromiseReject = completer.reject;
	                this._openPromiseResolve = completer.resolve;
	            }
	            return this._openPromise;
	        }
	        else {
	            if (this._closePromise == null) {
	                var completer = new promise_completer_1.PromiseCompleter();
	                this._closePromise = completer.promise;
	                this._closePromiseReject = completer.reject;
	                this._closePromiseResolve = completer.resolve;
	            }
	            return this._closePromise;
	        }
	    };
	    /**
	     * When transition has finished, set the internal state for classes and emit the proper event.
	     * The event passed is actually of type TransitionEvent, but that type is not available in
	     * Android so we use any.
	     * @internal
	     */
	    MdSidenav.prototype.onTransitionEnd = function (transitionEvent) {
	        if (transitionEvent.target == this._elementRef.nativeElement
	            && transitionEvent.propertyName.endsWith('transform')) {
	            this._transition = false;
	            if (this._opened) {
	                if (this._openPromise != null) {
	                    this._openPromiseResolve();
	                }
	                if (this._closePromise != null) {
	                    this._closePromiseReject();
	                }
	                this.onOpen.emit(null);
	            }
	            else {
	                if (this._closePromise != null) {
	                    this._closePromiseResolve();
	                }
	                if (this._openPromise != null) {
	                    this._openPromiseReject();
	                }
	                this.onClose.emit(null);
	            }
	            this._openPromise = null;
	            this._closePromise = null;
	        }
	    };
	    Object.defineProperty(MdSidenav.prototype, "_isClosing", {
	        get: function () {
	            return !this._opened && this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isOpening", {
	        get: function () {
	            return this._opened && this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isClosed", {
	        get: function () {
	            return !this._opened && !this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isOpened", {
	        get: function () {
	            return this._opened && !this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isEnd", {
	        get: function () {
	            return this.align == 'end';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_modeSide", {
	        get: function () {
	            return this.mode == 'side';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_modeOver", {
	        get: function () {
	            return this.mode == 'over';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_modePush", {
	        get: function () {
	            return this.mode == 'push';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "width", {
	        /**
	         * This is public because we need it from MdSidenavLayout, but it's undocumented and should
	         * not be used outside.
	         * @internal
	         */
	        get: function () {
	            if (this._elementRef.nativeElement) {
	                return this._elementRef.nativeElement.offsetWidth;
	            }
	            return 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "align", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "mode", void 0);
	    __decorate([
	        core_1.Input('opened'),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdSidenav.prototype, "_opened", void 0);
	    __decorate([
	        core_1.Output('open-start'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onOpenStart", void 0);
	    __decorate([
	        core_1.Output('open'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onOpen", void 0);
	    __decorate([
	        core_1.Output('close-start'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onCloseStart", void 0);
	    __decorate([
	        core_1.Output('close'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onClose", void 0);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-closing'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isClosing", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-opening'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isOpening", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-closed'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isClosed", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-opened'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isOpened", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-end'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isEnd", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-side'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_modeSide", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-over'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_modeOver", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-push'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_modePush", null);
	    MdSidenav = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-sidenav',
	            template: '<ng-content></ng-content>',
	            host: {
	                '(transitionend)': 'onTransitionEnd($event)',
	            },
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], MdSidenav);
	    return MdSidenav;
	}());
	exports.MdSidenav = MdSidenav;
	/**
	 * <md-sidenav-layout> component.
	 *
	 * This is the parent component to one or two <md-sidenav>s that validates the state internally
	 * and coordinate the backdrop and content styling.
	 */
	var MdSidenavLayout = (function () {
	    function MdSidenavLayout(_dir, _element, _renderer) {
	        var _this = this;
	        this._dir = _dir;
	        this._element = _element;
	        this._renderer = _renderer;
	        // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
	        // properties to point to the proper start/end.
	        if (_dir != null) {
	            _dir.dirChange.subscribe(function () { return _this._validateDrawers(); });
	        }
	    }
	    Object.defineProperty(MdSidenavLayout.prototype, "start", {
	        get: function () { return this._start; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenavLayout.prototype, "end", {
	        get: function () { return this._end; },
	        enumerable: true,
	        configurable: true
	    });
	    /** TODO: internal */
	    MdSidenavLayout.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        // On changes, assert on consistency.
	        this._sidenavs.changes.subscribe(function () { return _this._validateDrawers(); });
	        this._sidenavs.forEach(function (sidenav) { return _this._watchSidenavToggle(sidenav); });
	        this._validateDrawers();
	    };
	    /*
	    * Subscribes to sidenav events in order to set a class on the main layout element when the sidenav
	    * is open and the backdrop is visible. This ensures any overflow on the layout element is properly
	    * hidden.
	    * @internal
	    */
	    MdSidenavLayout.prototype._watchSidenavToggle = function (sidenav) {
	        var _this = this;
	        if (!sidenav || sidenav.mode === 'side') {
	            return;
	        }
	        sidenav.onOpen.subscribe(function () { return _this._setLayoutClass(sidenav, true); });
	        sidenav.onClose.subscribe(function () { return _this._setLayoutClass(sidenav, false); });
	    };
	    /* Toggles the 'md-sidenav-opened' class on the main 'md-sidenav-layout' element. */
	    MdSidenavLayout.prototype._setLayoutClass = function (sidenav, bool) {
	        this._renderer.setElementClass(this._element.nativeElement, 'md-sidenav-opened', bool);
	    };
	    /** Validate the state of the sidenav children components. */
	    MdSidenavLayout.prototype._validateDrawers = function () {
	        var _this = this;
	        this._start = this._end = null;
	        // Ensure that we have at most one start and one end sidenav.
	        this._sidenavs.forEach(function (sidenav) {
	            if (sidenav.align == 'end') {
	                if (_this._end != null) {
	                    throw new MdDuplicatedSidenavError('end');
	                }
	                _this._end = sidenav;
	            }
	            else {
	                if (_this._start != null) {
	                    throw new MdDuplicatedSidenavError('start');
	                }
	                _this._start = sidenav;
	            }
	        });
	        this._right = this._left = null;
	        // Detect if we're LTR or RTL.
	        if (this._dir == null || this._dir.value == 'ltr') {
	            this._left = this._start;
	            this._right = this._end;
	        }
	        else {
	            this._left = this._end;
	            this._right = this._start;
	        }
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.closeModalSidenav = function () {
	        if (this._start != null && this._start.mode != 'side') {
	            this._start.close();
	        }
	        if (this._end != null && this._end.mode != 'side') {
	            this._end.close();
	        }
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.isShowingBackdrop = function () {
	        return (this._isSidenavOpen(this._start) && this._start.mode != 'side')
	            || (this._isSidenavOpen(this._end) && this._end.mode != 'side');
	    };
	    MdSidenavLayout.prototype._isSidenavOpen = function (side) {
	        return side != null && side.opened;
	    };
	    /**
	     * Return the width of the sidenav, if it's in the proper mode and opened.
	     * This may relayout the view, so do not call this often.
	     * @param sidenav
	     * @param mode
	     */
	    MdSidenavLayout.prototype._getSidenavEffectiveWidth = function (sidenav, mode) {
	        return (this._isSidenavOpen(sidenav) && sidenav.mode == mode) ? sidenav.width : 0;
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getMarginLeft = function () {
	        return this._getSidenavEffectiveWidth(this._left, 'side');
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getMarginRight = function () {
	        return this._getSidenavEffectiveWidth(this._right, 'side');
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getPositionLeft = function () {
	        return this._getSidenavEffectiveWidth(this._left, 'push');
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getPositionRight = function () {
	        return this._getSidenavEffectiveWidth(this._right, 'push');
	    };
	    /**
	     * Returns the horizontal offset for the content area.  There should never be a value for both
	     * left and right, so by subtracting the right value from the left value, we should always get
	     * the appropriate offset.
	     * @internal
	     */
	    MdSidenavLayout.prototype.getPositionOffset = function () {
	        return this.getPositionLeft() - this.getPositionRight();
	    };
	    /**
	     * This is using [ngStyle] rather than separate [style...] properties because [style.transform]
	     * doesn't seem to work right now.
	     * @internal
	     */
	    MdSidenavLayout.prototype.getStyles = function () {
	        return {
	            marginLeft: this.getMarginLeft() + "px",
	            marginRight: this.getMarginRight() + "px",
	            transform: "translate3d(" + this.getPositionOffset() + "px, 0, 0)"
	        };
	    };
	    __decorate([
	        core_1.ContentChildren(MdSidenav), 
	        __metadata('design:type', core_1.QueryList)
	    ], MdSidenavLayout.prototype, "_sidenavs", void 0);
	    MdSidenavLayout = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-sidenav-layout',
	            // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
	            // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
	            // changes its state.
	            directives: [MdSidenav, common_1.NgStyle],
	            template: "<div class=\"md-sidenav-backdrop\" (click)=\"closeModalSidenav()\" [class.md-sidenav-shown]=\"isShowingBackdrop()\"></div> <ng-content select=\"md-sidenav\"></ng-content> <md-content [ngStyle]=\"getStyles()\"> <ng-content></ng-content> </md-content> ",
	            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ /** * This mixin hides an element visually. * That means it's still accessible for screen-readers but not visible in view. */ /** * Forces an element to grow to fit floated contents; used as as an alternative to * `overflow: hidden;` because it doesn't cut off contents. */ /** * A mixin, which generates temporary ink ripple on a given component. * When $bindToParent is set to true, it will check for the focused class on the same selector as you included * that mixin. * It is also possible to specify the color palette of the temporary ripple. By default it uses the * accent palette for its background. */ /** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ /** * Mixin to help with defining LTR/RTL 'transform: translate3d()' values. * @param $open The translation value when the sidenav is opened. * @param $close The translation value when the sidenav is closed. */ /* This mixin ensures a sidenav element spans the whole viewport.*/ :host { position: relative; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); box-sizing: border-box; -webkit-overflow-scrolling: touch; display: block; overflow: hidden; } :host[fullscreen] { position: absolute; top: 0; left: 0; right: 0; bottom: 0; } :host[fullscreen].md-sidenav-opened { overflow: hidden; } :host > .md-sidenav-backdrop { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: block; z-index: 2; visibility: hidden; } :host > .md-sidenav-backdrop.md-sidenav-shown { visibility: visible; background-color: rgba(0, 0, 0, 0.6); } :host > md-content { position: relative; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); display: block; height: 100%; overflow: auto; } :host > md-sidenav { position: relative; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); display: block; position: absolute; top: 0; bottom: 0; z-index: 3; min-width: 5%; overflow-y: auto; background-color: white; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); } :host > md-sidenav.md-sidenav-closed { visibility: hidden; } :host > md-sidenav.md-sidenav-closing { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } :host > md-sidenav.md-sidenav-push { background-color: white; } :host > md-sidenav.md-sidenav-side { z-index: 1; } :host > md-sidenav.md-sidenav-end { right: 0; -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); } :host > md-sidenav.md-sidenav-end.md-sidenav-closed { visibility: hidden; } :host > md-sidenav.md-sidenav-end.md-sidenav-closing { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-end.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-end.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } :host-context([dir='rtl']) > md-sidenav { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); } :host-context([dir='rtl']) > md-sidenav.md-sidenav-closed { visibility: hidden; } :host-context([dir='rtl']) > md-sidenav.md-sidenav-closing { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); will-change: transform; } :host-context([dir='rtl']) > md-sidenav.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host-context([dir='rtl']) > md-sidenav.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } :host-context([dir='rtl']) > md-sidenav.md-sidenav-end { left: 0; right: auto; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); } :host-context([dir='rtl']) > md-sidenav.md-sidenav-end.md-sidenav-closed { visibility: hidden; } :host-context([dir='rtl']) > md-sidenav.md-sidenav-end.md-sidenav-closing { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); will-change: transform; } :host-context([dir='rtl']) > md-sidenav.md-sidenav-end.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host-context([dir='rtl']) > md-sidenav.md-sidenav-end.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } ",
	"/** * We separate transitions to be able to disable them in unit tests, by simply not loading this file. */ :host > .md-sidenav-backdrop.md-sidenav-shown { -webkit-transition: background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } :host > md-content { -webkit-transition: -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } :host > md-sidenav { -webkit-transition: -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } "],
	        }),
	        __param(0, core_1.Optional()), 
	        __metadata('design:paramtypes', [dir_1.Dir, core_1.ElementRef, core_1.Renderer])
	    ], MdSidenavLayout);
	    return MdSidenavLayout;
	}());
	exports.MdSidenavLayout = MdSidenavLayout;
	exports.MD_SIDENAV_DIRECTIVES = [MdSidenavLayout, MdSidenav];
	//# sourceMappingURL=sidenav.js.map

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var core_2 = __webpack_require__(1);
	var core_3 = __webpack_require__(1);
	var MdToolbar = (function () {
	    function MdToolbar(elementRef, renderer) {
	        this.elementRef = elementRef;
	        this.renderer = renderer;
	    }
	    Object.defineProperty(MdToolbar.prototype, "color", {
	        get: function () {
	            return this._color;
	        },
	        set: function (value) {
	            this._updateColor(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MdToolbar.prototype._updateColor = function (newColor) {
	        this._setElementColor(this._color, false);
	        this._setElementColor(newColor, true);
	        this._color = newColor;
	    };
	    MdToolbar.prototype._setElementColor = function (color, isAdd) {
	        if (color != null && color != '') {
	            this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdToolbar.prototype, "color", null);
	    MdToolbar = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-toolbar',
	            template: "<div class=\"md-toolbar-layout\"> <md-toolbar-row> <ng-content></ng-content> </md-toolbar-row> <ng-content select=\"md-toolbar-row\"></ng-content> </div>",
	            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ /** * This mixin hides an element visually. * That means it's still accessible for screen-readers but not visible in view. */ /** * Forces an element to grow to fit floated contents; used as as an alternative to * `overflow: hidden;` because it doesn't cut off contents. */ /** * A mixin, which generates temporary ink ripple on a given component. * When $bindToParent is set to true, it will check for the focused class on the same selector as you included * that mixin. * It is also possible to specify the color palette of the temporary ripple. By default it uses the * accent palette for its background. */ md-toolbar { display: -webkit-box; display: -ms-flexbox; display: flex; box-sizing: border-box; width: 100%; min-height: 64px; font-size: 20px; font-weight: 400; font-family: Roboto, \"Helvetica Neue\", sans-serif; padding: 0 16px; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; background: whitesmoke; color: rgba(0, 0, 0, 0.87); } md-toolbar.md-primary { background: #009688; color: white; } md-toolbar.md-accent { background: #9c27b0; color: rgba(255, 255, 255, 0.870588); } md-toolbar.md-warn { background: #f44336; color: white; } md-toolbar md-toolbar-row { display: -webkit-box; display: -ms-flexbox; display: flex; box-sizing: border-box; width: 100%; height: 64px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; } "],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_3.ElementRef, core_2.Renderer])
	    ], MdToolbar);
	    return MdToolbar;
	}());
	exports.MdToolbar = MdToolbar;
	exports.MD_TOOLBAR_DIRECTIVES = [MdToolbar];
	//# sourceMappingURL=toolbar.js.map

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var enterZone_1 = __webpack_require__(579);
	Observable_1.Observable.prototype.enterZone = enterZone_1.enterZone;
	//# sourceMappingURL=enterZone.js.map

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	function enterZone(zone) {
	    return this.lift(new EnterZoneOperator(zone));
	}
	exports.enterZone = enterZone;
	var EnterZoneOperator = (function () {
	    function EnterZoneOperator(_zone) {
	        this._zone = _zone;
	    }
	    EnterZoneOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new EnterZoneSubscriber(subscriber, this._zone));
	    };
	    return EnterZoneOperator;
	}());
	exports.EnterZoneOperator = EnterZoneOperator;
	var EnterZoneSubscriber = (function (_super) {
	    __extends(EnterZoneSubscriber, _super);
	    function EnterZoneSubscriber(destination, _zone) {
	        _super.call(this, destination);
	        this._zone = _zone;
	    }
	    EnterZoneSubscriber.prototype._next = function (value) {
	        var _this = this;
	        this._zone.run(function () { return _this.destination.next(value); });
	    };
	    return EnterZoneSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=enterZone.js.map

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var Observable_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(22);
	var core_1 = __webpack_require__(1);
	__webpack_require__(129);
	__webpack_require__(25);
	__webpack_require__(292);
	__webpack_require__(456);
	__webpack_require__(452);
	var IDB_SUCCESS = 'success';
	var IDB_COMPLETE = 'complete';
	var IDB_ERROR = 'error';
	var IDB_UPGRADE_NEEDED = 'upgradeneeded';
	var IDB_TXN_READ = 'readonly';
	var IDB_TXN_READWRITE = 'readwrite';
	exports.DB_INSERT = 'DB_INSERT';
	exports.DatabaseBackend = new core_1.OpaqueToken('IndexedDBBackend');
	exports.IDB_SCHEMA = new core_1.OpaqueToken('IDB_SCHEMA');
	exports.getIDBFactory = function () { return window.indexedDB || self.indexedDB; };
	var Database = (function () {
	    function Database(idbBackend, schema) {
	        this.changes = new Subject_1.Subject();
	        this._schema = schema;
	        this._idb = idbBackend;
	    }
	    Database.prototype._mapRecord = function (objectSchema) {
	        return function (dbResponseRec) {
	            if (!objectSchema.primaryKey) {
	                dbResponseRec.record['$key'] = dbResponseRec['$key'];
	            }
	            return dbResponseRec.record;
	        };
	    };
	    Database.prototype._upgradeDB = function (observer, db) {
	        for (var storeName in this._schema.stores) {
	            if (db.objectStoreNames.contains(storeName)) {
	                db.deleteObjectStore(storeName);
	            }
	            this._createObjectStore(db, storeName, this._schema.stores[storeName]);
	        }
	        observer.next(db);
	        observer.complete();
	    };
	    Database.prototype._createObjectStore = function (db, key, schema) {
	        var objectStore = db.createObjectStore(key, { autoIncrement: true, keyPath: schema.primaryKey });
	    };
	    Database.prototype.open = function (dbName, version, upgradeHandler) {
	        var _this = this;
	        if (version === void 0) { version = 1; }
	        var idb = this._idb;
	        return Observable_1.Observable.create(function (observer) {
	            var openReq = idb.open(dbName, _this._schema.version);
	            var onSuccess = function (event) {
	                observer.next(event.target.result);
	                observer.complete();
	            };
	            var onError = function (err) {
	                console.log(err);
	                observer.error(err);
	            };
	            var onUpgradeNeeded = function (event) {
	                _this._upgradeDB(observer, event.target.result);
	            };
	            openReq.addEventListener(IDB_SUCCESS, onSuccess);
	            openReq.addEventListener(IDB_ERROR, onError);
	            openReq.addEventListener(IDB_UPGRADE_NEEDED, onUpgradeNeeded);
	            return function () {
	                openReq.removeEventListener(IDB_SUCCESS, onSuccess);
	                openReq.removeEventListener(IDB_ERROR, onError);
	                openReq.removeEventListener(IDB_UPGRADE_NEEDED, onUpgradeNeeded);
	            };
	        });
	    };
	    Database.prototype.deleteDatabase = function (dbName) {
	        var _this = this;
	        return new Observable_1.Observable(function (deletionObserver) {
	            var deleteRequest = _this._idb.deleteDatabase(dbName);
	            var onSuccess = function (event) {
	                deletionObserver.next(null);
	                deletionObserver.complete();
	            };
	            var onError = function (err) { return deletionObserver.error(err); };
	            deleteRequest.addEventListener(IDB_SUCCESS, onSuccess);
	            deleteRequest.addEventListener(IDB_ERROR, onError);
	            return function () {
	                deleteRequest.removeEventListener(IDB_SUCCESS, onSuccess);
	                deleteRequest.removeEventListener(IDB_ERROR, onError);
	            };
	        });
	    };
	    Database.prototype.insert = function (storeName, records, notify) {
	        var _this = this;
	        if (notify === void 0) { notify = true; }
	        return this.executeWrite(storeName, 'put', records)
	            .do(function (payload) { return notify ? _this.changes.next({ type: exports.DB_INSERT, payload: payload }) : ({}); });
	    };
	    Database.prototype.get = function (storeName, key) {
	        var _this = this;
	        return this.open(this._schema.name)
	            .mergeMap(function (db) {
	            return new Observable_1.Observable(function (txnObserver) {
	                var recordSchema = _this._schema.stores[storeName];
	                var mapper = _this._mapRecord(recordSchema);
	                var txn = db.transaction([storeName], IDB_TXN_READ);
	                var objectStore = txn.objectStore(storeName);
	                var getRequest = objectStore.get(key);
	                var onTxnError = function (err) { return txnObserver.error(err); };
	                var onTxnComplete = function () { return txnObserver.complete(); };
	                var onRecordFound = function (ev) { return txnObserver.next(getRequest.result); };
	                txn.addEventListener(IDB_COMPLETE, onTxnComplete);
	                txn.addEventListener(IDB_ERROR, onTxnError);
	                getRequest.addEventListener(IDB_SUCCESS, onRecordFound);
	                getRequest.addEventListener(IDB_ERROR, onTxnError);
	                return function () {
	                    getRequest.removeEventListener(IDB_SUCCESS, onRecordFound);
	                    getRequest.removeEventListener(IDB_ERROR, onTxnError);
	                    txn.removeEventListener(IDB_COMPLETE, onTxnComplete);
	                    txn.removeEventListener(IDB_ERROR, onTxnError);
	                };
	            });
	        });
	    };
	    Database.prototype.query = function (storeName, predicate) {
	        return this.open(this._schema.name)
	            .mergeMap(function (db) {
	            return new Observable_1.Observable(function (txnObserver) {
	                var txn = db.transaction([storeName], IDB_TXN_READ);
	                var objectStore = txn.objectStore(storeName);
	                var getRequest = objectStore.openCursor();
	                var onTxnError = function (err) { return txnObserver.error(err); };
	                var onRecordFound = function (ev) {
	                    var cursor = ev.target.result;
	                    if (cursor) {
	                        if (predicate) {
	                            var match = predicate(cursor.value);
	                            if (match) {
	                                txnObserver.next(cursor.value);
	                            }
	                        }
	                        else {
	                            txnObserver.next(cursor.value);
	                        }
	                        cursor.continue();
	                    }
	                    else {
	                        txnObserver.complete();
	                    }
	                };
	                txn.addEventListener(IDB_ERROR, onTxnError);
	                getRequest.addEventListener(IDB_SUCCESS, onRecordFound);
	                getRequest.addEventListener(IDB_ERROR, onTxnError);
	                return function () {
	                    getRequest.removeEventListener(IDB_SUCCESS, onRecordFound);
	                    getRequest.removeEventListener(IDB_ERROR, onTxnError);
	                    txn.removeEventListener(IDB_ERROR, onTxnError);
	                };
	            });
	        });
	    };
	    Database.prototype.executeWrite = function (storeName, actionType, records) {
	        var _this = this;
	        var changes = this.changes;
	        return this.open(this._schema.name)
	            .mergeMap(function (db) {
	            return new Observable_1.Observable(function (txnObserver) {
	                var recordSchema = _this._schema.stores[storeName];
	                var mapper = _this._mapRecord(recordSchema);
	                var txn = db.transaction([storeName], IDB_TXN_READWRITE);
	                var objectStore = txn.objectStore(storeName);
	                var onTxnError = function (err) { return txnObserver.error(err); };
	                var onTxnComplete = function () { return txnObserver.complete(); };
	                txn.addEventListener(IDB_COMPLETE, onTxnComplete);
	                txn.addEventListener(IDB_ERROR, onTxnError);
	                var makeRequest = function (record) {
	                    return new Observable_1.Observable(function (reqObserver) {
	                        var req;
	                        if (recordSchema.primaryKey) {
	                            req = objectStore[actionType](record);
	                        }
	                        else {
	                            var $key = record['$key'];
	                            var $record = Object.assign({}, record);
	                            delete $record.key;
	                            req = objectStore[actionType]($record, $key);
	                        }
	                        req.addEventListener(IDB_SUCCESS, function () {
	                            var $key = req.result;
	                            reqObserver.next(mapper({ $key: $key, record: record }));
	                        });
	                        req.addEventListener(IDB_ERROR, function (err) {
	                            reqObserver.error(err);
	                        });
	                    });
	                };
	                var requestSubscriber = Observable_1.Observable.from(records)
	                    .mergeMap(makeRequest)
	                    .subscribe(txnObserver);
	                return function () {
	                    requestSubscriber.unsubscribe();
	                    txn.removeEventListener(IDB_COMPLETE, onTxnComplete);
	                    txn.removeEventListener(IDB_ERROR, onTxnError);
	                };
	            });
	        });
	    };
	    Database.prototype.compare = function (a, b) {
	        return this._idb.cmp(a, b);
	    };
	    Database = __decorate([
	        __param(0, core_1.Inject(exports.DatabaseBackend)),
	        __param(1, core_1.Inject(exports.IDB_SCHEMA)), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], Database);
	    return Database;
	}());
	exports.Database = Database;
	exports.DB_PROVIDERS = [
	    core_1.provide(exports.DatabaseBackend, { useFactory: exports.getIDBFactory }),
	    Database
	];
	exports.provideDB = function (schema) {
	    return exports.DB_PROVIDERS.concat([core_1.provide(exports.IDB_SCHEMA, { useValue: schema })]);
	};


/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var util_1 = __webpack_require__(259);
	var effects_1 = __webpack_require__(403);
	var state_updates_1 = __webpack_require__(406);
	function runEffects() {
	    var effects = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        effects[_i - 0] = arguments[_i];
	    }
	    var allEffects = util_1.flatten(effects)
	        .map(function (effect) { return new core_1.Provider(effects_1.BOOTSTRAP_EFFECTS, {
	        useClass: effect,
	        multi: true
	    }); });
	    return allEffects.concat([
	        effects_1.CONNECT_EFFECTS_PROVIDER,
	        state_updates_1.STATE_UPDATES_PROVIDER
	    ]);
	}
	exports.runEffects = runEffects;


/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(63);
	__webpack_require__(25);
	var actions_1 = __webpack_require__(260);
	function projectLocationChanges(state$) {
	    return state$.map(function (s) { return s.router; }).filter(function (change) { return change !== null; });
	}
	exports.projectLocationChanges = projectLocationChanges;
	function listenForRouterMethodActions(router, actions$) {
	    actions$
	        .filter(function (action) { return actions_1.routerActionTypes.indexOf(action.type) > -1; })
	        .subscribe(function (action) {
	        var _a = action.payload, path = _a.path, query = _a.query;
	        switch (action.type) {
	            case actions_1.routerActions.GO:
	                router.go(path, query);
	                break;
	            case actions_1.routerActions.REPLACE:
	                router.replace(path, query);
	                break;
	            case actions_1.routerActions.SEARCH:
	                router.search(query);
	                break;
	            case actions_1.routerActions.BACK:
	                router.back();
	                break;
	            case actions_1.routerActions.FORWARD:
	                router.forward();
	                break;
	        }
	    });
	}
	exports.listenForRouterMethodActions = listenForRouterMethodActions;
	function connectRouterActions(router, store) {
	    router
	        .map(function (change) { return ({ type: actions_1.routerActions.UPDATE_LOCATION, payload: change }); })
	        .subscribe(store);
	}
	exports.connectRouterActions = connectRouterActions;
	//# sourceMappingURL=connect.js.map

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(304);
	var store_1 = __webpack_require__(42);
	var connect_1 = __webpack_require__(582);
	exports.LOCATION_CHANGES_PROVIDER = new core_1.Provider(router_1.LOCATION_CHANGES, {
	    deps: [router_1.Router, store_1.Dispatcher, store_1.Store],
	    useFactory: function (router, dispatcher, store) {
	        connect_1.listenForRouterMethodActions(router, dispatcher);
	        connect_1.connectRouterActions(router, store);
	        return connect_1.projectLocationChanges(store);
	    }
	});
	//# sourceMappingURL=location-changes.js.map

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1 = __webpack_require__(260);
	function routerReducer(state, action) {
	    if (state === void 0) { state = null; }
	    switch (action.type) {
	        case actions_1.routerActions.UPDATE_LOCATION:
	            return action.payload;
	        default:
	            return state;
	    }
	}
	exports.routerReducer = routerReducer;
	//# sourceMappingURL=reducer.js.map

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Guards are services that can protect routes from being traversed. They
	 * are implemented using traversal hooks
	 *
	 * A guard's `protectRoute` method is called when the router begins traversing a
	 * route configuration file. It returns `true` or `false` to let the router know
	 * if it should consider the route a candidate. Using guards, you can auth
	 * protect routes, run data fetching, etc.
	 *
	 * A limitation of guards is that they must be provided in the same place you
	 * provide the router.
	 */
	__webpack_require__(290);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(780);
	__webpack_require__(293);
	var async_1 = __webpack_require__(470);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var route_traverser_1 = __webpack_require__(169);
	var GuardHook = (function () {
	    function GuardHook(_injector) {
	        this._injector = _injector;
	    }
	    GuardHook.prototype.resolveGuard = function (token) {
	        var guard = this._injector.get(token, null);
	        if (guard === null) {
	            guard = this._injector.resolveAndInstantiate(token);
	        }
	        return guard;
	    };
	    GuardHook.prototype.apply = function (route$) {
	        var _this = this;
	        return route$.mergeMap(function (candidate) {
	            var route = candidate.route;
	            if (!!route.guards && Array.isArray(route.guards) && route.guards.length > 0) {
	                var guards = route.guards.map(function (token) { return _this.resolveGuard(token); });
	                var activated = guards.map(function (guard) { return guard.protectRoute(candidate); });
	                return Observable_1.Observable.merge.apply(Observable_1.Observable, activated)
	                    .observeOn(async_1.async)
	                    .every(function (value) { return !!value; })
	                    .map(function (passed) {
	                    if (passed) {
	                        return candidate;
	                    }
	                    return Object.assign({}, candidate, { route: null });
	                });
	            }
	            return Observable_1.Observable.of(candidate);
	        });
	    };
	    GuardHook = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(core_1.Injector)), 
	        __metadata('design:paramtypes', [core_1.ReflectiveInjector])
	    ], GuardHook);
	    return GuardHook;
	}());
	exports.GuardHook = GuardHook;
	exports.GUARD_PROVIDERS = [
	    new core_1.Provider(route_traverser_1.TRAVERSAL_HOOKS, { useClass: GuardHook, multi: true })
	];
	//# sourceMappingURL=guard.js.map

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Redirection happens in middleware. This is a fork of react-router's
	 * Redirect component
	 */
	__webpack_require__(63);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(101);
	var router_instruction_1 = __webpack_require__(123);
	var match_pattern_1 = __webpack_require__(409);
	var RedirectHook = (function () {
	    function RedirectHook(router) {
	        this.router = router;
	    }
	    RedirectHook.prototype.apply = function (next$) {
	        var _this = this;
	        return next$
	            .filter(function (next) {
	            var last = next.routes[next.routes.length - 1];
	            if (last.redirectTo) {
	                _this._handleRedirect(last, next);
	                return false;
	            }
	            return true;
	        });
	    };
	    RedirectHook.prototype._handleRedirect = function (route, next) {
	        var routeParams = next.routeParams, queryParams = next.queryParams;
	        var pathname;
	        if (route.redirectTo.charAt(0) === '/') {
	            pathname = match_pattern_1.formatPattern(route.redirectTo, routeParams);
	        }
	        else {
	            var routeIndex = next.routes.indexOf(route);
	            var parentPattern = this._getRoutePattern(next.routes, routeIndex - 1);
	            var pattern = parentPattern.replace(/\/*$/, '/') + route.redirectTo;
	            pathname = match_pattern_1.formatPattern(pattern, routeParams);
	        }
	        this.router.replace(pathname, queryParams);
	    };
	    RedirectHook.prototype._getRoutePattern = function (routes, routeIndex) {
	        var parentPattern = '';
	        for (var i = routeIndex; i >= 0; i--) {
	            var route = routes[i];
	            var pattern = route.path || '';
	            parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	        }
	        return parentPattern;
	    };
	    RedirectHook = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], RedirectHook);
	    return RedirectHook;
	}());
	exports.RedirectHook = RedirectHook;
	exports.REDIRECT_PROVIDERS = [
	    new core_1.Provider(router_instruction_1.INSTRUCTION_HOOKS, { useClass: RedirectHook })
	];
	//# sourceMappingURL=redirect.js.map

/***/ },
/* 587 */
/***/ function(module, exports) {

	"use strict";
	exports.OPTIONS = new String('@ngrx/devtools Options');


/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(777);
	__webpack_require__(63);
	__webpack_require__(455);
	__webpack_require__(788);
	__webpack_require__(454);
	var Observable_1 = __webpack_require__(3);
	var actions_1 = __webpack_require__(170);
	var utils_1 = __webpack_require__(267);
	exports.ExtensionActionTypes = {
	    START: 'START',
	    DISPATCH: 'DISPATCH',
	    STOP: 'STOP',
	    ACTION: 'ACTION'
	};
	exports.REDUX_DEVTOOLS_EXTENSION = new String('Redux Devtools Extension');
	var Extension = (function () {
	    function Extension(devtoolsExtension) {
	        this.devtoolsExtension = devtoolsExtension;
	        this.instanceId = "ngrx-store-" + Date.now();
	        this.createActionStreams();
	    }
	    Extension.prototype.notify = function (action, state) {
	        if (!this.devtoolsExtension || action.type !== actions_1.ActionTypes.PERFORM_ACTION) {
	            return;
	        }
	        this.devtoolsExtension.send(utils_1.unliftAction(state), utils_1.unliftState(state), false, this.instanceId);
	        this.devtoolsExtension.send(null, state, false, this.instanceId);
	    };
	    Extension.prototype.createChangesObservable = function () {
	        var _this = this;
	        if (!this.devtoolsExtension) {
	            return Observable_1.Observable.empty();
	        }
	        return new Observable_1.Observable(function (subscriber) {
	            var connection = _this.devtoolsExtension.connect({ instanceId: _this.instanceId });
	            connection.subscribe(function (change) { return subscriber.next(change); });
	            return connection.unsubscribe();
	        });
	    };
	    Extension.prototype.createActionStreams = function () {
	        // Listens to all changes based on our instanceId
	        var changes$ = this.createChangesObservable().share();
	        // Listen for the start action
	        var start$ = changes$
	            .filter(function (change) { return change.type === exports.ExtensionActionTypes.START; });
	        // Listen for the stop action
	        var stop$ = changes$
	            .filter(function (change) { return change.type === exports.ExtensionActionTypes.STOP; });
	        // Listen for lifted actions
	        var liftedActions$ = changes$
	            .filter(function (change) { return change.type === exports.ExtensionActionTypes.DISPATCH; })
	            .map(function (change) { return change.payload; });
	        // .filter(action => action.type !== 'JUMP_TO_STATE');
	        // Listen for unlifted actions
	        var actions$ = changes$
	            .filter(function (change) { return change.type === exports.ExtensionActionTypes.DISPATCH; })
	            .map(function (change) { return change.payload; });
	        // Only take the action sources between the start/stop events
	        this.actions$ = start$.switchMapTo(actions$.takeUntil(stop$));
	        this.liftedActions$ = start$.switchMapTo(liftedActions$.takeUntil(stop$));
	    };
	    return Extension;
	}());
	exports.Extension = Extension;


/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var store_1 = __webpack_require__(42);
	var devtools_1 = __webpack_require__(412);
	var config_1 = __webpack_require__(587);
	var extension_1 = __webpack_require__(588);
	var REDUX_DEVTOOLS_EXTENSION_PROVIDER = {
	    provide: extension_1.REDUX_DEVTOOLS_EXTENSION,
	    useFactory: function () {
	        if (window && window.devToolsExtension) {
	            return window.devToolsExtension;
	        }
	        return null;
	    }
	};
	var EXTENSION_PROVIDER = {
	    provide: extension_1.Extension,
	    deps: [extension_1.REDUX_DEVTOOLS_EXTENSION],
	    useFactory: function (reduxDevtoolsExtension) {
	        return new extension_1.Extension(reduxDevtoolsExtension);
	    }
	};
	var DEVTOOLS_DISPATHCER_PROVIDER = {
	    provide: devtools_1.DevtoolsDispatcher,
	    useFactory: function () { return new devtools_1.DevtoolsDispatcher(); }
	};
	var STORE_DEVTOOLS_PROVIDER = {
	    provide: devtools_1.StoreDevtools,
	    deps: [devtools_1.DevtoolsDispatcher, store_1.Dispatcher, store_1.Reducer, store_1.INITIAL_STATE, config_1.OPTIONS, extension_1.Extension],
	    useFactory: function (dispatcher, actions, reducer, initialState, options, extension) {
	        return new devtools_1.StoreDevtools(dispatcher, actions, reducer, initialState, options, extension);
	    }
	};
	var STATE_PROVIDER = {
	    provide: store_1.State,
	    deps: [devtools_1.StoreDevtools],
	    useFactory: function (devtools) {
	        return devtools.state;
	    }
	};
	var REDUCER_PROVIDER = {
	    provide: store_1.Reducer,
	    deps: [devtools_1.DevtoolsDispatcher, store_1.INITIAL_REDUCER],
	    useFactory: function (dispatcher, reducer) {
	        return new store_1.Reducer(dispatcher, reducer);
	    }
	};
	function instrumentStore(_options) {
	    if (_options === void 0) { _options = {}; }
	    var DEFAULT_OPTIONS = {
	        monitor: function () { return null; }
	    };
	    var options = Object.assign({}, DEFAULT_OPTIONS, _options);
	    if (options.maxAge < 2) {
	        throw new Error("Devtools 'maxAge' cannot be less than 2, got " + options.maxAge);
	    }
	    return [
	        {
	            provide: config_1.OPTIONS,
	            useValue: options
	        },
	        REDUX_DEVTOOLS_EXTENSION_PROVIDER,
	        EXTENSION_PROVIDER,
	        DEVTOOLS_DISPATHCER_PROVIDER,
	        STORE_DEVTOOLS_PROVIDER,
	        STATE_PROVIDER,
	        REDUCER_PROVIDER
	    ];
	}
	exports.instrumentStore = instrumentStore;


/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var store_1 = __webpack_require__(42);
	var utils_1 = __webpack_require__(267);
	var actions_1 = __webpack_require__(170);
	exports.INIT_ACTION = { type: store_1.Dispatcher.INIT };
	/**
	* Computes the next entry in the log by applying an action.
	*/
	function computeNextEntry(reducer, action, state, error) {
	    if (error) {
	        return {
	            state: state,
	            error: 'Interrupted by an error up the chain'
	        };
	    }
	    var nextState = state;
	    var nextError;
	    try {
	        nextState = reducer(state, action);
	    }
	    catch (err) {
	        nextError = err.toString();
	        console.error(err.stack || err);
	    }
	    return {
	        state: nextState,
	        error: nextError
	    };
	}
	/**
	* Runs the reducer on invalidated actions to get a fresh computation log.
	*/
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
	    // Optimization: exit early and return the same reference
	    // if we know nothing could have changed.
	    if (minInvalidatedStateIndex >= computedStates.length &&
	        computedStates.length === stagedActionIds.length) {
	        return computedStates;
	    }
	    var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	    for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	        var actionId = stagedActionIds[i];
	        var action = actionsById[actionId].action;
	        var previousEntry = nextComputedStates[i - 1];
	        var previousState = previousEntry ? previousEntry.state : committedState;
	        var previousError = previousEntry ? previousEntry.error : undefined;
	        var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	        var entry = shouldSkip ?
	            previousEntry :
	            computeNextEntry(reducer, action, previousState, previousError);
	        nextComputedStates.push(entry);
	    }
	    return nextComputedStates;
	}
	function liftInitialState(initialCommittedState, monitorReducer) {
	    return {
	        monitorState: monitorReducer(undefined, {}),
	        nextActionId: 1,
	        actionsById: { 0: utils_1.liftAction(exports.INIT_ACTION) },
	        stagedActionIds: [0],
	        skippedActionIds: [],
	        committedState: initialCommittedState,
	        currentStateIndex: 0,
	        computedStates: []
	    };
	}
	exports.liftInitialState = liftInitialState;
	/**
	* Creates a history state reducer from an app's reducer.
	*/
	function liftReducerWith(initialCommittedState, initialLiftedState, monitorReducer, options) {
	    if (options === void 0) { options = {}; }
	    /**
	    * Manages how the history actions modify the history state.
	    */
	    return function (reducer) { return function (liftedState, liftedAction) {
	        var _a = liftedState || initialLiftedState, monitorState = _a.monitorState, actionsById = _a.actionsById, nextActionId = _a.nextActionId, stagedActionIds = _a.stagedActionIds, skippedActionIds = _a.skippedActionIds, committedState = _a.committedState, currentStateIndex = _a.currentStateIndex, computedStates = _a.computedStates;
	        if (!liftedState) {
	            // Prevent mutating initialLiftedState
	            actionsById = Object.create(actionsById);
	        }
	        function commitExcessActions(n) {
	            // Auto-commits n-number of excess actions.
	            var excess = n;
	            var idsToDelete = stagedActionIds.slice(1, excess + 1);
	            for (var i = 0; i < idsToDelete.length; i++) {
	                if (computedStates[i + 1].error) {
	                    // Stop if error is found. Commit actions up to error.
	                    excess = i;
	                    idsToDelete = stagedActionIds.slice(1, excess + 1);
	                    break;
	                }
	                else {
	                    delete actionsById[idsToDelete[i]];
	                }
	            }
	            skippedActionIds = skippedActionIds.filter(function (id) { return idsToDelete.indexOf(id) === -1; });
	            stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
	            committedState = computedStates[excess].state;
	            computedStates = computedStates.slice(excess);
	            currentStateIndex = currentStateIndex > excess
	                ? currentStateIndex - excess
	                : 0;
	        }
	        // By default, agressively recompute every state whatever happens.
	        // This has O(n) performance, so we'll override this to a sensible
	        // value whenever we feel like we don't have to recompute the states.
	        var minInvalidatedStateIndex = 0;
	        switch (liftedAction.type) {
	            case actions_1.ActionTypes.RESET: {
	                // Get back to the state the store was created with.
	                actionsById = { 0: utils_1.liftAction(exports.INIT_ACTION) };
	                nextActionId = 1;
	                stagedActionIds = [0];
	                skippedActionIds = [];
	                committedState = initialCommittedState;
	                currentStateIndex = 0;
	                computedStates = [];
	                break;
	            }
	            case actions_1.ActionTypes.COMMIT: {
	                // Consider the last committed state the new starting point.
	                // Squash any staged actions into a single committed state.
	                actionsById = { 0: utils_1.liftAction(exports.INIT_ACTION) };
	                nextActionId = 1;
	                stagedActionIds = [0];
	                skippedActionIds = [];
	                committedState = computedStates[currentStateIndex].state;
	                currentStateIndex = 0;
	                computedStates = [];
	                break;
	            }
	            case actions_1.ActionTypes.ROLLBACK: {
	                // Forget about any staged actions.
	                // Start again from the last committed state.
	                actionsById = { 0: utils_1.liftAction(exports.INIT_ACTION) };
	                nextActionId = 1;
	                stagedActionIds = [0];
	                skippedActionIds = [];
	                currentStateIndex = 0;
	                computedStates = [];
	                break;
	            }
	            case actions_1.ActionTypes.TOGGLE_ACTION: {
	                // Toggle whether an action with given ID is skipped.
	                // Being skipped means it is a no-op during the computation.
	                var actionId_1 = liftedAction.id;
	                var index = skippedActionIds.indexOf(actionId_1);
	                if (index === -1) {
	                    skippedActionIds = [actionId_1].concat(skippedActionIds);
	                }
	                else {
	                    skippedActionIds = skippedActionIds.filter(function (id) { return id !== actionId_1; });
	                }
	                // Optimization: we know history before this action hasn't changed
	                minInvalidatedStateIndex = stagedActionIds.indexOf(actionId_1);
	                break;
	            }
	            case actions_1.ActionTypes.SET_ACTIONS_ACTIVE: {
	                // Toggle whether an action with given ID is skipped.
	                // Being skipped means it is a no-op during the computation.
	                var start = liftedAction.start, end = liftedAction.end, active = liftedAction.active;
	                var actionIds = [];
	                for (var i = start; i < end; i++)
	                    actionIds.push(i);
	                if (active) {
	                    skippedActionIds = utils_1.difference(skippedActionIds, actionIds);
	                }
	                else {
	                    skippedActionIds = skippedActionIds.concat(actionIds);
	                }
	                // Optimization: we know history before this action hasn't changed
	                minInvalidatedStateIndex = stagedActionIds.indexOf(start);
	                break;
	            }
	            case actions_1.ActionTypes.JUMP_TO_STATE: {
	                // Without recomputing anything, move the pointer that tell us
	                // which state is considered the current one. Useful for sliders.
	                currentStateIndex = liftedAction.index;
	                // Optimization: we know the history has not changed.
	                minInvalidatedStateIndex = Infinity;
	                break;
	            }
	            case actions_1.ActionTypes.SWEEP: {
	                // Forget any actions that are currently being skipped.
	                stagedActionIds = utils_1.difference(stagedActionIds, skippedActionIds);
	                skippedActionIds = [];
	                currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	                break;
	            }
	            case actions_1.ActionTypes.PERFORM_ACTION: {
	                // Auto-commit as new actions come in.
	                if (options.maxAge && stagedActionIds.length === options.maxAge) {
	                    commitExcessActions(1);
	                }
	                if (currentStateIndex === stagedActionIds.length - 1) {
	                    currentStateIndex++;
	                }
	                var actionId = nextActionId++;
	                // Mutation! This is the hottest path, and we optimize on purpose.
	                // It is safe because we set a new key in a cache dictionary.
	                actionsById[actionId] = liftedAction;
	                stagedActionIds = stagedActionIds.concat([actionId]);
	                // Optimization: we know that only the new action needs computing.
	                minInvalidatedStateIndex = stagedActionIds.length - 1;
	                break;
	            }
	            case actions_1.ActionTypes.IMPORT_STATE: {
	                // Completely replace everything.
	                (_b = liftedAction.nextLiftedState, monitorState = _b.monitorState, actionsById = _b.actionsById, nextActionId = _b.nextActionId, stagedActionIds = _b.stagedActionIds, skippedActionIds = _b.skippedActionIds, committedState = _b.committedState, currentStateIndex = _b.currentStateIndex, computedStates = _b.computedStates, _b);
	                break;
	            }
	            case store_1.Reducer.REPLACE:
	            case store_1.Dispatcher.INIT: {
	                // Always recompute states on hot reload and init.
	                minInvalidatedStateIndex = 0;
	                if (options.maxAge && stagedActionIds.length > options.maxAge) {
	                    // States must be recomputed before committing excess.
	                    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	                    commitExcessActions(stagedActionIds.length - options.maxAge);
	                    // Avoid double computation.
	                    minInvalidatedStateIndex = Infinity;
	                }
	                break;
	            }
	            default: {
	                // If the action is not recognized, it's a monitor action.
	                // Optimization: a monitor action can't change history.
	                minInvalidatedStateIndex = Infinity;
	                break;
	            }
	        }
	        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	        monitorState = monitorReducer(monitorState, liftedAction);
	        return {
	            monitorState: monitorState,
	            actionsById: actionsById,
	            nextActionId: nextActionId,
	            stagedActionIds: stagedActionIds,
	            skippedActionIds: skippedActionIds,
	            committedState: committedState,
	            currentStateIndex: currentStateIndex,
	            computedStates: computedStates
	        };
	        var _b;
	    }; };
	}
	exports.liftReducerWith = liftReducerWith;


/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(63);
	__webpack_require__(25);
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(22);
	var keycodes_1 = __webpack_require__(594);
	var CommanderComponent = (function () {
	    function CommanderComponent() {
	        var _this = this;
	        this.keydown$ = new Subject_1.Subject();
	        this._ignoreTags = ['INPUT', 'SELECT', 'TEXTAREA'];
	        this.command = this.keydown$
	            .filter(function (e) { return _this._ignoreTags.indexOf(e.target.tagName) < 0; })
	            .filter(function (e) { return !(e.target.isContentEditable); })
	            .filter(function (e) {
	            var command = _this.parseCommand(_this.shortcut);
	            if (!command) {
	                return false;
	            }
	            var charCode = e.keyCode || e.which;
	            var char = String.fromCharCode(charCode);
	            return command.name.toUpperCase() === char.toUpperCase() &&
	                command.alt === e.altKey &&
	                command.ctrl === e.ctrlKey &&
	                command.meta === e.metaKey &&
	                command.shift === e.shiftKey;
	        })
	            .map(function (e) {
	            e.preventDefault();
	            return { command: _this.shortcut };
	        });
	    }
	    CommanderComponent.prototype.parseCommand = function (s) {
	        var keyString = s.trim().toLowerCase();
	        if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(keyString)) {
	            throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
	        }
	        var parts = keyString.split('-');
	        var key = {
	            ctrl: false,
	            meta: false,
	            shift: false,
	            alt: false
	        };
	        var c;
	        key.name = parts.pop();
	        while ((c = parts.pop())) {
	            key[c] = true;
	        }
	        if (key.ctrl) {
	            key.sequence = keycodes_1.KEYCODES.ctrl[key.name] || key.name;
	        }
	        else {
	            key.sequence = keycodes_1.KEYCODES.nomod[key.name] || key.name;
	        }
	        if (key.shift && key.sequence && key.sequence.length === 1) {
	            key.sequence = key.sequence.toUpperCase();
	        }
	        return key;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CommanderComponent.prototype, "shortcut", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Observable_1.Observable)
	    ], CommanderComponent.prototype, "command", void 0);
	    CommanderComponent = __decorate([
	        core_1.Component({
	            selector: 'ngrx-commander',
	            template: '',
	            styles: [':host{ display: none }'],
	            host: {
	                '(document:keydown)': 'keydown$.next($event)'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CommanderComponent);
	    return CommanderComponent;
	}());
	exports.CommanderComponent = CommanderComponent;


/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(290);
	__webpack_require__(63);
	__webpack_require__(25);
	__webpack_require__(188);
	var store_devtools_1 = __webpack_require__(266);
	var core_1 = __webpack_require__(1);
	var Subject_1 = __webpack_require__(22);
	var Observable_1 = __webpack_require__(3);
	var commander_1 = __webpack_require__(591);
	var dock_1 = __webpack_require__(593);
	var actions_1 = __webpack_require__(413);
	var DockMonitorComponent = (function () {
	    function DockMonitorComponent(tools, actions) {
	        var _this = this;
	        this.tools = tools;
	        this.actions = actions;
	        this.state$ = this.tools.liftedState.map(function (s) { return s.monitorState; });
	        this.visible$ = this.state$.map(function (s) { return s.visible; }).distinctUntilChanged();
	        this.position$ = this.state$.map(function (s) { return s.position; }).distinctUntilChanged();
	        this.size$ = this.state$.map(function (s) { return s.size; }).distinctUntilChanged();
	        this.toggle$ = new Subject_1.Subject();
	        this.toggleAction$ = this.toggle$
	            .map(function () { return _this.actions.toggleVisibility(); });
	        this.changePosition$ = new Subject_1.Subject();
	        this.positionAction$ = this.changePosition$
	            .map(function () { return _this.actions.changePosition(); });
	        Observable_1.Observable
	            .merge(this.toggleAction$, this.positionAction$)
	            .subscribe(this.tools);
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DockMonitorComponent.prototype, "toggleCommand", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DockMonitorComponent.prototype, "positionCommand", void 0);
	    DockMonitorComponent = __decorate([
	        core_1.Component({
	            selector: 'dock-monitor',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            directives: [dock_1.DockComponent, commander_1.CommanderComponent],
	            providers: [actions_1.DockActions],
	            template: "\n    <ngrx-commander [shortcut]=\"toggleCommand\" (command)=\"toggle$.next($event)\"></ngrx-commander>\n    <ngrx-commander [shortcut]=\"positionCommand\" (command)=\"changePosition$.next($event)\"></ngrx-commander>\n\n    <ngrx-dock [visible]=\"visible$ | async\" [position]=\"position$ | async\" [size]=\"size$ | async\">\n      <ng-content></ng-content>\n    </ngrx-dock>\n  "
	        }), 
	        __metadata('design:paramtypes', [store_devtools_1.StoreDevtools, actions_1.DockActions])
	    ], DockMonitorComponent);
	    return DockMonitorComponent;
	}());
	exports.DockMonitorComponent = DockMonitorComponent;


/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var DockComponent = (function () {
	    function DockComponent() {
	        this.position = 'right';
	        this.size = 0.3;
	        this.visible = true;
	    }
	    Object.defineProperty(DockComponent.prototype, "absoluteSize", {
	        get: function () {
	            return 100 * this.size + "%";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DockComponent.prototype, "restSize", {
	        get: function () {
	            return (100 - (100 * this.size)) + "%";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DockComponent.prototype, "leftPosition", {
	        get: function () {
	            return this.calculatePosition('left', 'right');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DockComponent.prototype, "rightPosition", {
	        get: function () {
	            return this.calculatePosition('right', 'left');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DockComponent.prototype, "topPosition", {
	        get: function () {
	            return this.calculatePosition('top', 'bottom');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DockComponent.prototype, "bottomPosition", {
	        get: function () {
	            return this.calculatePosition('bottom', 'top');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DockComponent.prototype.calculatePosition = function (primary, secondary) {
	        if (this.visible) {
	            switch (this.position) {
	                case secondary:
	                    return this.restSize;
	                default:
	                    return '0%';
	            }
	        }
	        else {
	            switch (this.position) {
	                case primary:
	                    return "-" + this.absoluteSize;
	                case secondary:
	                    return '100%';
	                default:
	                    return '0%';
	            }
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DockComponent.prototype, "position", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DockComponent.prototype, "size", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DockComponent.prototype, "visible", void 0);
	    __decorate([
	        core_1.HostBinding('style.left'), 
	        __metadata('design:type', Object)
	    ], DockComponent.prototype, "leftPosition", null);
	    __decorate([
	        core_1.HostBinding('style.right'), 
	        __metadata('design:type', Object)
	    ], DockComponent.prototype, "rightPosition", null);
	    __decorate([
	        core_1.HostBinding('style.top'), 
	        __metadata('design:type', Object)
	    ], DockComponent.prototype, "topPosition", null);
	    __decorate([
	        core_1.HostBinding('style.bottom'), 
	        __metadata('design:type', Object)
	    ], DockComponent.prototype, "bottomPosition", null);
	    DockComponent = __decorate([
	        core_1.Component({
	            selector: 'ngrx-dock',
	            template: "\n    <div class=\"dock\">\n      <div class=\"dock-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
	            styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      transition: all 0.3s;\n      z-index: 9999;\n    }\n\n    .dock {\n      position: absolute;\n      z-index: 1;\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n      background-color: white;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n\n    .dock-content {\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DockComponent);
	    return DockComponent;
	}());
	exports.DockComponent = DockComponent;


/***/ },
/* 594 */
/***/ function(module, exports) {

	"use strict";
	// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
	// However where nodejs readline diverges, they are adjusted to conform to it
	exports.KEYCODES = {
	    nomod: {
	        escape: '\u001b',
	        space: ' ' // actually '\u0020'
	    },
	    ctrl: {
	        ' ': '\u0000',
	        'a': '\u0001',
	        'b': '\u0002',
	        'c': '\u0003',
	        'd': '\u0004',
	        'e': '\u0005',
	        'f': '\u0006',
	        'g': '\u0007',
	        'h': '\u0008',
	        'i': '\u0009',
	        'j': '\u000a',
	        'k': '\u000b',
	        'm': '\u000c',
	        'n': '\u000d',
	        'l': '\u000e',
	        'o': '\u000f',
	        'p': '\u0010',
	        'q': '\u0011',
	        'r': '\u0012',
	        's': '\u0013',
	        't': '\u0014',
	        'u': '\u0015',
	        'v': '\u0016',
	        'w': '\u0017',
	        'x': '\u0018',
	        'y': '\u0019',
	        'z': '\u001a',
	        '[': '\u001b',
	        '\\': '\u001c',
	        ']': '\u001d',
	        '^': '\u001e',
	        '_': '\u001f',
	        'space': '\u0000'
	    }
	};


/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var store_1 = __webpack_require__(42);
	var actions_1 = __webpack_require__(413);
	exports.POSITIONS = ['left', 'top', 'right', 'bottom'];
	function useDockMonitor(_options) {
	    if (_options === void 0) { _options = {}; }
	    var options = Object.assign({
	        position: 'right',
	        visible: true,
	        size: 0.3
	    }, _options);
	    function position(state, action) {
	        if (state === void 0) { state = options.position; }
	        return (action.type === actions_1.DockActions.CHANGE_POSITION) ?
	            exports.POSITIONS[(exports.POSITIONS.indexOf(state) + 1) % exports.POSITIONS.length] :
	            state;
	    }
	    function size(state, action) {
	        if (state === void 0) { state = options.size; }
	        return (action.type === actions_1.DockActions.CHANGE_SIZE) ?
	            action.size :
	            state;
	    }
	    function visible(state, action) {
	        if (state === void 0) { state = options.visible; }
	        return (action.type === actions_1.DockActions.TOGGLE_VISIBILITY) ?
	            !state :
	            state;
	    }
	    return store_1.combineReducers({
	        position: position,
	        visible: visible,
	        size: size
	    });
	}
	exports.useDockMonitor = useDockMonitor;


/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var types = __webpack_require__(415);
	var JsonNodeComponent = (function () {
	    function JsonNodeComponent() {
	        this.expanded = false;
	    }
	    Object.defineProperty(JsonNodeComponent.prototype, "value", {
	        set: function (value) {
	            this.label = types.getLabelFor(value);
	            this.type = types.getTypeOf(value);
	            if (this.type === types.KNOWN.Array || this.type === types.KNOWN.Object || this.type === types.KNOWN.Iterable) {
	                this.children = types.getChildrenFor(value);
	            }
	            else {
	                this.children = null;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonNodeComponent.prototype.toggle = function () {
	        if (this.children) {
	            this.expanded = !this.expanded;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], JsonNodeComponent.prototype, "key", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], JsonNodeComponent.prototype, "expanded", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], JsonNodeComponent.prototype, "value", null);
	    JsonNodeComponent = __decorate([
	        core_1.Component({
	            selector: 'ngrx-json-node',
	            directives: [JsonNodeComponent],
	            styles: ["\n    :host {\n      display: block;\n      padding: 2px 2px 2px 20px;\n      position: relative;\n      color: #70AFCD;\n      font-family: 'monaco', 'Consolas', 'Lucida Console', monospace;\n    }\n    .expanded-indicator {\n      position: absolute;\n      top: 7px;\n      left: 5px;\n      font-size: 10px;\n      transition: transform 200ms;\n    }\n\n    .expanded .expanded-indicator {\n      transform: rotate(90deg);\n    }\n\n    .node-key::after {\n      content: ': ';\n      display: inline;\n    }\n\n    .expanded .node-label {\n      color: #BABBBD !important;\n    }\n\n    .node-label {\n      color: #9AC05C;\n    }\n\n    .node-label.array, .node-label.null, .node-label.iterable {\n      color: #D182C0;\n    }\n\n    .node-label.number, .node-label.undefined, .node-label.boolean {\n      color: #F86936;\n    }\n  "],
	            template: "\n    <div (click)=\"toggle()\" [class.expanded]=\"expanded\">\n      <span class=\"expanded-indicator\" *ngIf=\"children\">\u25B6</span>\n      <span class=\"node-key\">{{ key }}</span>\n      <span class=\"node-label\" [ngClass]=\"type\">{{ label }}</span>\n    </div>\n    <div class=\"child-nodes\" *ngIf=\"children && expanded\">\n      <ngrx-json-node *ngFor=\"let child of children\" [value]=\"child.value\" [key]=\"child.key\"></ngrx-json-node>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], JsonNodeComponent);
	    return JsonNodeComponent;
	}());
	exports.JsonNodeComponent = JsonNodeComponent;


/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var types_1 = __webpack_require__(415);
	var json_node_1 = __webpack_require__(596);
	var JsonTreeComponent = (function () {
	    function JsonTreeComponent() {
	        this.children = [];
	        this.expanded = true;
	    }
	    Object.defineProperty(JsonTreeComponent.prototype, "value", {
	        set: function (value) {
	            this.children = types_1.getChildrenFor(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], JsonTreeComponent.prototype, "expanded", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], JsonTreeComponent.prototype, "value", null);
	    JsonTreeComponent = __decorate([
	        core_1.Component({
	            selector: 'ngrx-json-tree',
	            directives: [json_node_1.JsonNodeComponent],
	            template: "\n    <ngrx-json-node *ngFor=\"let child of children\" [expanded]=\"expanded\" [value]=\"child.value\" [key]=\"child.key\"></ngrx-json-node>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], JsonTreeComponent);
	    return JsonTreeComponent;
	}());
	exports.JsonTreeComponent = JsonTreeComponent;


/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var LogMonitorButtonComponent = (function () {
	    function LogMonitorButtonComponent() {
	        this.action = new core_1.EventEmitter();
	    }
	    LogMonitorButtonComponent.prototype.handleAction = function ($event) {
	        if (!this.disabled) {
	            this.action.next({});
	        }
	        $event.stopPropagation();
	        return false;
	    };
	    __decorate([
	        core_1.HostBinding('class.disabled'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], LogMonitorButtonComponent.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], LogMonitorButtonComponent.prototype, "action", void 0);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], LogMonitorButtonComponent.prototype, "handleAction", null);
	    LogMonitorButtonComponent = __decorate([
	        core_1.Component({
	            selector: 'log-monitor-button',
	            template: "\n    <ng-content></ng-content>\n  ",
	            styles: ["\n    :host{\n      flex-grow: 1;\n      display: inline-block;\n      font-family: 'monaco', 'Consolas', 'Lucida Console', monospace;\n      cursor: pointer;\n      font-weight: bold;\n      border-radius: 3px;\n      padding: 4px 8px;\n      margin: 5px 3px 5px 3px;\n      font-size: 0.8em;\n      color: white;\n      text-decoration: none;\n      background-color: #4F5A65;\n    }\n\n    :host.disabled{\n      opacity: 0.2;\n      cursor: text;\n      background-color: transparent;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LogMonitorButtonComponent);
	    return LogMonitorButtonComponent;
	}());
	exports.LogMonitorButtonComponent = LogMonitorButtonComponent;


/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var json_tree_1 = __webpack_require__(597);
	var LogMonitorEntryComponent = (function () {
	    function LogMonitorEntryComponent() {
	        this.expandEntries = false;
	        this.disabled = false;
	        this.toggle = new core_1.EventEmitter();
	    }
	    Object.defineProperty(LogMonitorEntryComponent.prototype, "item", {
	        get: function () {
	            return this._item;
	        },
	        set: function (value) {
	            this._item = value;
	            this.stateActionPair = {
	                state: value.state,
	                action: value.action
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LogMonitorEntryComponent.prototype.handleToggle = function () {
	        if (!this.disabled) {
	            this.toggle.next({ id: this.item.actionId });
	        }
	    };
	    LogMonitorEntryComponent.prototype.logPayload = function () {
	        console.log(this.item.action);
	    };
	    LogMonitorEntryComponent.prototype.logState = function () {
	        console.log(this.item.state);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], LogMonitorEntryComponent.prototype, "expandEntries", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], LogMonitorEntryComponent.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], LogMonitorEntryComponent.prototype, "item", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], LogMonitorEntryComponent.prototype, "toggle", void 0);
	    LogMonitorEntryComponent = __decorate([
	        core_1.Component({
	            selector: 'log-monitor-entry',
	            directives: [json_tree_1.JsonTreeComponent],
	            template: "\n    <div class=\"title-bar\" [ngClass]=\"{ collapsed: item.collapsed }\" (click)=\"handleToggle()\">\n      {{ item.action.type }}\n    </div>\n    <div class=\"action-bar\" *ngIf=\"!item.collapsed\">\n      <ngrx-json-tree [value]=\"stateActionPair\" [expanded]=\"expandEntries\"></ngrx-json-tree>\n    </div>\n  ",
	            styles: ["\n    :host{\n      color: #FFFFFF;\n      background-color: #4F5A65;\n      cursor: pointer;\n    }\n    .title-bar{\n      padding: 8px 0 7px 16px;\n      background-color: rgba(0,0,0,0.1);\n    }\n    .action-bar{\n      padding: 20px;\n    }\n    .collapsed{\n      text-decoration: line-through;\n      font-style: italic;\n      opacity: 0.5;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LogMonitorEntryComponent);
	    return LogMonitorEntryComponent;
	}());
	exports.LogMonitorEntryComponent = LogMonitorEntryComponent;


/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(25);
	var core_1 = __webpack_require__(1);
	var store_devtools_1 = __webpack_require__(266);
	var log_monitor_entry_1 = __webpack_require__(599);
	var log_monitor_button_1 = __webpack_require__(598);
	var LogMonitorComponent = (function () {
	    function LogMonitorComponent(devtools) {
	        this.devtools = devtools;
	        this.expandEntries = true;
	        this.canRevert$ = devtools.liftedState.map(function (s) { return !(s.computedStates.length > 1); });
	        this.canSweep$ = devtools.liftedState.map(function (s) { return !(s.skippedActionIds.length > 0); });
	        this.canCommit$ = devtools.liftedState.map(function (s) { return !(s.computedStates.length > 1); });
	        this.items$ = devtools.liftedState
	            .map(function (_a) {
	            var actionsById = _a.actionsById, skippedActionIds = _a.skippedActionIds, stagedActionIds = _a.stagedActionIds, computedStates = _a.computedStates;
	            var actions = [];
	            for (var i = 0; i < stagedActionIds.length; i++) {
	                var actionId = stagedActionIds[i];
	                var action = actionsById[actionId].action;
	                var _b = computedStates[i], state = _b.state, error = _b.error;
	                var previousState = void 0;
	                if (i > 0) {
	                    previousState = computedStates[i - 1].state;
	                }
	                actions.push({
	                    key: actionId,
	                    collapsed: skippedActionIds.indexOf(actionId) > -1,
	                    action: action,
	                    actionId: actionId,
	                    state: state,
	                    previousState: previousState,
	                    error: error
	                });
	            }
	            return actions;
	        });
	    }
	    LogMonitorComponent.prototype.handleToggle = function (id) {
	        this.devtools.toggleAction(id);
	    };
	    LogMonitorComponent.prototype.handleReset = function () {
	        this.devtools.reset();
	    };
	    LogMonitorComponent.prototype.handleRollback = function () {
	        this.devtools.rollback();
	    };
	    LogMonitorComponent.prototype.handleSweep = function () {
	        this.devtools.sweep();
	    };
	    LogMonitorComponent.prototype.handleCommit = function () {
	        this.devtools.commit();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], LogMonitorComponent.prototype, "expandEntries", void 0);
	    LogMonitorComponent = __decorate([
	        core_1.Component({
	            selector: 'log-monitor',
	            directives: [log_monitor_entry_1.LogMonitorEntryComponent, log_monitor_button_1.LogMonitorButtonComponent],
	            styles: ["\n    :host {\n      display: block;\n      background-color: #2A2F3A;\n      font-family: 'monaco', 'Consolas', 'Lucida Console', monospace;\n      position: relative;\n      overflow-y: hidden;\n      width: 100%;\n      height: 100%;\n      min-width: 300px;\n      direction: ltr;\n    }\n\n    .button-bar {\n      text-align: center;\n      border-bottom-width: 1px;\n      border-bottom-style: solid;\n      border-color: transparent;\n      z-index: 1;\n      display: flex;\n      flex-direction: row;\n      padding: 0 4px;\n    }\n\n    .elements {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 38px;\n      bottom: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n    }\n  "],
	            template: "\n    <div class=\"button-bar\">\n      <log-monitor-button (action)=\"handleReset()\" [disabled]=\"canReset$ | async\">\n        Reset\n      </log-monitor-button>\n\n      <log-monitor-button (action)=\"handleRollback()\">\n        Revert\n      </log-monitor-button>\n\n      <log-monitor-button (action)=\"handleSweep()\" [disabled]=\"canSweep$ | async\">\n        Sweep\n      </log-monitor-button>\n\n      <log-monitor-button (action)=\"handleCommit()\" [disabled]=\"canCommit$ | async\">\n        Commit\n      </log-monitor-button>\n    </div>\n    <div class=\"elements\">\n      <log-monitor-entry\n        *ngFor=\"let item of (items$ | async); let i = index\"\n        [item]=\"item\"\n        [disabled]=\"i === 0\"\n        [expandEntries]=\"expandEntries\"\n        (toggle)=\"handleToggle($event.id)\">\n      </log-monitor-entry>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [store_devtools_1.StoreDevtools])
	    ], LogMonitorComponent);
	    return LogMonitorComponent;
	}());
	exports.LogMonitorComponent = LogMonitorComponent;


/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var log_monitor_1 = __webpack_require__(600);
	var dock_monitor_1 = __webpack_require__(592);
	var StoreLogMonitorComponent = (function () {
	    function StoreLogMonitorComponent() {
	        this.toggleCommand = 'ctrl-h';
	        this.positionCommand = 'ctrl-m';
	        this.expandEntries = false;
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], StoreLogMonitorComponent.prototype, "toggleCommand", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], StoreLogMonitorComponent.prototype, "positionCommand", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], StoreLogMonitorComponent.prototype, "expandEntries", void 0);
	    StoreLogMonitorComponent = __decorate([
	        core_1.Component({
	            selector: 'ngrx-store-log-monitor',
	            directives: [log_monitor_1.LogMonitorComponent, dock_monitor_1.DockMonitorComponent],
	            template: "\n    <dock-monitor [toggleCommand]=\"toggleCommand\" [positionCommand]=\"positionCommand\">\n      <log-monitor [expandEntries]=\"expandEntries\"></log-monitor>\n    </dock-monitor>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StoreLogMonitorComponent);
	    return StoreLogMonitorComponent;
	}());
	exports.StoreLogMonitorComponent = StoreLogMonitorComponent;


/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reducer_1 = __webpack_require__(417);
	var dispatcher_1 = __webpack_require__(416);
	var store_1 = __webpack_require__(419);
	var state_1 = __webpack_require__(418);
	var utils_1 = __webpack_require__(420);
	exports.INITIAL_REDUCER = new String('Token ngrx/store/reducer');
	exports.INITIAL_STATE = new String('Token ngrx/store/initial-state');
	var dispatcherProvider = {
	    provide: dispatcher_1.Dispatcher,
	    useFactory: function () {
	        return new dispatcher_1.Dispatcher();
	    }
	};
	var storeProvider = {
	    provide: store_1.Store,
	    deps: [dispatcher_1.Dispatcher, reducer_1.Reducer, state_1.State, exports.INITIAL_STATE],
	    useFactory: function (dispatcher, reducer, state$, initialState) {
	        return new store_1.Store(dispatcher, reducer, state$, initialState);
	    }
	};
	var stateProvider = {
	    provide: state_1.State,
	    deps: [exports.INITIAL_STATE, dispatcher_1.Dispatcher, reducer_1.Reducer],
	    useFactory: function (initialState, dispatcher, reducer) {
	        return new state_1.State(initialState, dispatcher, reducer);
	    }
	};
	var reducerProvider = {
	    provide: reducer_1.Reducer,
	    deps: [dispatcher_1.Dispatcher, exports.INITIAL_REDUCER],
	    useFactory: function (dispatcher, reducer) {
	        return new reducer_1.Reducer(dispatcher, reducer);
	    }
	};
	function provideStore(reducer, initialState) {
	    return [
	        {
	            provide: exports.INITIAL_REDUCER,
	            useFactory: function () {
	                if (typeof reducer === 'function') {
	                    return reducer;
	                }
	                return utils_1.combineReducers(reducer);
	            }
	        },
	        {
	            provide: exports.INITIAL_STATE,
	            deps: [exports.INITIAL_REDUCER],
	            useFactory: function (reducer) {
	                if (initialState === undefined) {
	                    return reducer(undefined, { type: dispatcher_1.Dispatcher.INIT });
	                }
	                return initialState;
	            }
	        },
	        dispatcherProvider,
	        storeProvider,
	        stateProvider,
	        reducerProvider
	    ];
	}
	exports.provideStore = provideStore;


/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var button_1 = __webpack_require__(467);
	var toolbar_1 = __webpack_require__(577);
	var sidenav_1 = __webpack_require__(576);
	var icon_1 = __webpack_require__(575);
	var list_1 = __webpack_require__(466);
	var store_log_monitor_1 = __webpack_require__(414);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [
	                button_1.MdAnchor,
	                button_1.MdButton,
	                toolbar_1.MdToolbar,
	                sidenav_1.MD_SIDENAV_DIRECTIVES,
	                icon_1.MdIcon,
	                list_1.MD_LIST_DIRECTIVES,
	                store_log_monitor_1.StoreLogMonitorComponent
	            ],
	            providers: [icon_1.MdIconRegistry],
	            styles: ["\n    * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    .secondary {\n      color: rgba(0, 0, 0, .54);\n    }\n\n    md-sidenav-layout {\n      background: rgba(0, 0, 0, .03);\n      right: 30% !important; // Make space for the devtools, demo only\n    }\n\n    md-sidenav {\n      width: 300px;\n    }\n  "],
	            template: "\n    <md-sidenav-layout fullscreen>\n      <md-sidenav #sidenav>\n        <md-nav-list>\n          <a md-list-item linkTo=\"/\" (click)=\"sidenav.close()\">\n            <md-icon md-list-icon>book</md-icon>\n            <span md-line>My Collection</span>\n            <span md-line class=\"secondary\">View your book collection!</span>\n          </a>\n          <a md-list-item linkTo=\"/book/find\" (click)=\"sidenav.close()\">\n            <md-icon md-list-icon>search</md-icon>\n            <span md-line>Browse Books</span>\n            <span md-line class=\"secondary\">Find your next book!</span>\n          </a>\n        </md-nav-list>\n      </md-sidenav>\n      <md-toolbar color=\"primary\">\n        <button md-icon-button (click)=\"sidenav.open()\">\n          <md-icon>menu</md-icon>\n        </button>\n        <span>Books Sample App</span>\n      </md-toolbar>\n\n      <route-view></route-view>\n\n    </md-sidenav-layout>\n    <ngrx-store-log-monitor toggleCommand=\"ctrl-t\"></ngrx-store-log-monitor>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ },
/* 604 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
	 */
	var schema = {
	    version: 1,
	    name: 'books_app',
	    stores: {
	        books: {
	            autoIncrement: true,
	            primaryKey: 'id'
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = schema;


/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(291);
	__webpack_require__(25);
	__webpack_require__(783);
	__webpack_require__(63);
	__webpack_require__(129);
	__webpack_require__(133);
	__webpack_require__(455);
	__webpack_require__(456);
	__webpack_require__(128);
	var core_1 = __webpack_require__(1);
	var effects_1 = __webpack_require__(404);
	var Observable_1 = __webpack_require__(3);
	var db_1 = __webpack_require__(402);
	var google_books_1 = __webpack_require__(268);
	var book_1 = __webpack_require__(110);
	var BookEffects = (function () {
	    function BookEffects(updates$, googleBooks, db, bookActions) {
	        var _this = this;
	        this.updates$ = updates$;
	        this.googleBooks = googleBooks;
	        this.db = db;
	        this.bookActions = bookActions;
	        /**
	         * Effects offer a way to isolate and easily test side-effects within your
	         * application. StateUpdates is an observable of the latest state and
	         * dispatched action. The `toPayload` helper function returns just
	         * the payload of the currently dispatched action, useful in
	         * instances where the current state is not necessary.
	         *
	         * If you are unfamiliar with the operators being used in these examples, please
	         * check out the sources below:
	         *
	         * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
	         * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
	         */
	        this.openDB$ = this.db.open('books_app').filter(function () { return false; });
	        this.loadCollectionOnInit$ = Observable_1.Observable.of(this.bookActions.loadCollection());
	        this.loadCollection$ = this.updates$
	            .whenAction(book_1.BookActions.LOAD_COLLECTION)
	            .switchMapTo(this.db.query('books').toArray())
	            .map(function (books) { return _this.bookActions.loadCollectionSuccess(books); });
	        this.search$ = this.updates$
	            .whenAction(book_1.BookActions.SEARCH)
	            .map(effects_1.toPayload)
	            .filter(function (query) { return query !== ''; })
	            .switchMap(function (query) { return _this.googleBooks.searchBooks(query)
	            .map(function (books) { return _this.bookActions.searchComplete(books); })
	            .catch(function () { return Observable_1.Observable.of(_this.bookActions.searchComplete([])); }); });
	        this.clearSearch$ = this.updates$
	            .whenAction(book_1.BookActions.SEARCH)
	            .map(effects_1.toPayload)
	            .filter(function (query) { return query === ''; })
	            .mapTo(this.bookActions.searchComplete([]));
	        this.addBookToCollection$ = this.updates$
	            .whenAction(book_1.BookActions.ADD_TO_COLLECTION)
	            .map(effects_1.toPayload)
	            .mergeMap(function (book) { return _this.db.insert('books', [book])
	            .mapTo(_this.bookActions.addToCollectionSuccess(book))
	            .catch(function () { return Observable_1.Observable.of(_this.bookActions.addToCollectionFail(book)); }); });
	        this.removeBookFromCollection$ = this.updates$
	            .whenAction(book_1.BookActions.REMOVE_FROM_COLLECTION)
	            .map(effects_1.toPayload)
	            .mergeMap(function (book) { return _this.db.executeWrite('books', 'delete', [book.id])
	            .mapTo(_this.bookActions.removeFromCollectionSuccess(book))
	            .catch(function () { return Observable_1.Observable.of(_this.bookActions.removeFromCollectionFail(book)); }); });
	    }
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "openDB$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "loadCollectionOnInit$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "loadCollection$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "search$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "clearSearch$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "addBookToCollection$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "removeBookFromCollection$", void 0);
	    BookEffects = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [effects_1.StateUpdates, google_books_1.GoogleBooksService, db_1.Database, book_1.BookActions])
	    ], BookEffects);
	    return BookEffects;
	}());
	exports.BookEffects = BookEffects;


/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var book_1 = __webpack_require__(605);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = [
	    book_1.BookEffects
	];


/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(306);
	__webpack_require__(782);
	__webpack_require__(776);
	var core_1 = __webpack_require__(1);
	var store_1 = __webpack_require__(42);
	var Observable_1 = __webpack_require__(3);
	var google_books_1 = __webpack_require__(268);
	var reducers_1 = __webpack_require__(303);
	var book_1 = __webpack_require__(110);
	/**
	 * Guards are hooks into the route resolution process, providing an opportunity
	 * to inform the router's traversal process whether the route should continue
	 * to be considered a candidate route. Guards must return an observable of
	 * true or false.
	 *
	 * More on guards: https://github.com/ngrx/router/blob/master/docs/overview/guards.md
	 */
	var BookExistsGuard = (function () {
	    function BookExistsGuard(store, googleBooks, bookActions) {
	        this.store = store;
	        this.googleBooks = googleBooks;
	        this.bookActions = bookActions;
	    }
	    /**
	     * This method creates an observable that waits for the `loaded` property
	     * of the collection state to turn `true`, emitting one time once loading
	     * has finished.
	     */
	    BookExistsGuard.prototype.waitForCollectionToLoad = function () {
	        return this.store.let(reducers_1.getCollectionLoaded())
	            .filter(function (loaded) { return loaded; })
	            .take(1);
	    };
	    /**
	     * This method checks if a book with the given ID is already registered
	     * in the Store
	     */
	    BookExistsGuard.prototype.hasBookInStore = function (id) {
	        return this.store.let(reducers_1.hasBook(id)).take(1);
	    };
	    /**
	     * This method loads a book with the given ID from the API and caches
	     * it in the store, returning `true` or `false` if it was found.
	     */
	    BookExistsGuard.prototype.hasBookInApi = function (id) {
	        var _this = this;
	        return this.googleBooks.retrieveBook(id)
	            .map(function (book) { return _this.bookActions.loadBook(book); })
	            .do(function (action) { return _this.store.dispatch(action); })
	            .map(function (book) { return !!book; })
	            .catch(function () { return Observable_1.Observable.of(false); });
	    };
	    /**
	     * `hasBook` composes `hasBookInStore` and `hasBookInApi`. It first checks
	     * if the book is in store, and if not it then checks if it is in the
	     * API.
	     */
	    BookExistsGuard.prototype.hasBook = function (id) {
	        var _this = this;
	        return this.hasBookInStore(id)
	            .switchMap(function (inStore) {
	            if (inStore) {
	                return Observable_1.Observable.of(inStore);
	            }
	            return _this.hasBookInApi(id);
	        });
	    };
	    /**
	     * This is the actual method the router will call when our guard is run.
	     *
	     * Our guard waits for the collection to load, then it checks if we need
	     * to request a book from the API or if we already have it in our cache.
	     * If it finds it in the cache or in the API, it returns an Observable
	     * of `true` and the route is rendered successfully.
	     *
	     * If it was unable to find it in our cache or in the API, this guard
	     * will return an Observable of `false`, causing the router to move
	     * on to the next candidate route. In this case, it will move on
	     * to the 404 page.
	     */
	    BookExistsGuard.prototype.protectRoute = function (_a) {
	        var id = _a.routeParams.id;
	        return this.waitForCollectionToLoad()
	            .switchMapTo(this.hasBook(id));
	    };
	    BookExistsGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [store_1.Store, google_books_1.GoogleBooksService, book_1.BookActions])
	    ], BookExistsGuard);
	    return BookExistsGuard;
	}());
	exports.BookExistsGuard = BookExistsGuard;


/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var book_exists_1 = __webpack_require__(607);
	exports.BookExistsGuard = book_exists_1.BookExistsGuard;


/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(132);
	__webpack_require__(25);
	var actions_1 = __webpack_require__(305);
	;
	var initialState = {
	    ids: [],
	    entities: {}
	};
	function default_1(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case actions_1.BookActions.SEARCH_COMPLETE:
	        case actions_1.BookActions.LOAD_COLLECTION_SUCCESS: {
	            var books = action.payload;
	            var newBooks = books.filter(function (book) { return !state.entities[book.id]; });
	            var newBookIds = newBooks.map(function (book) { return book.id; });
	            var newBookEntities = newBooks.reduce(function (entities, book) {
	                return Object.assign(entities, (_a = {},
	                    _a[book.id] = book,
	                    _a
	                ));
	                var _a;
	            }, {});
	            return {
	                ids: state.ids.concat(newBookIds),
	                entities: Object.assign({}, state.entities, newBookEntities)
	            };
	        }
	        case actions_1.BookActions.LOAD_BOOK: {
	            var book = action.payload;
	            if (state.ids.includes(book.id)) {
	                return state;
	            }
	            return {
	                ids: state.ids.concat([book.id]),
	                entities: Object.assign({}, state.entities, (_a = {},
	                    _a[book.id] = book,
	                    _a
	                ))
	            };
	        }
	        default: {
	            return state;
	        }
	    }
	    var _a;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;
	/**
	 * Because the data structure is defined within the reducer it is optimal to
	 * locate our selector functions at this level. If store is to be thought of
	 * as a database, and reducers the tables, selectors can be considered the
	 * queries into said database. Remember to keep your selectors small and
	 * focused so they can be combined and composed to fit each particular
	 * use-case.
	 */
	function getBookEntities() {
	    return function (state$) { return state$
	        .select(function (s) { return s.entities; }); };
	}
	exports.getBookEntities = getBookEntities;
	;
	function getBook(id) {
	    return function (state$) { return state$
	        .select(function (s) { return s.entities[id]; }); };
	}
	exports.getBook = getBook;
	function getBooks(bookIds) {
	    return function (state$) { return state$
	        .let(getBookEntities())
	        .map(function (entities) { return bookIds.map(function (id) { return entities[id]; }); }); };
	}
	exports.getBooks = getBooks;
	function hasBook(id) {
	    return function (state$) { return state$
	        .select(function (s) { return s.ids.includes(id); }); };
	}
	exports.hasBook = hasBook;


/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(132);
	__webpack_require__(25);
	var book_1 = __webpack_require__(110);
	;
	var initialState = {
	    loaded: false,
	    loading: false,
	    ids: []
	};
	function default_1(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case book_1.BookActions.LOAD_COLLECTION: {
	            return Object.assign({}, state, {
	                loading: true
	            });
	        }
	        case book_1.BookActions.LOAD_COLLECTION_SUCCESS: {
	            var books = action.payload;
	            return {
	                loaded: true,
	                loading: false,
	                ids: books.map(function (book) { return book.id; })
	            };
	        }
	        case book_1.BookActions.ADD_TO_COLLECTION_SUCCESS:
	        case book_1.BookActions.REMOVE_FROM_COLLECTION_FAIL: {
	            var book = action.payload;
	            if (state.ids.includes(book.id)) {
	                return state;
	            }
	            return Object.assign({}, state, {
	                ids: state.ids.concat([book.id])
	            });
	        }
	        case book_1.BookActions.REMOVE_FROM_COLLECTION_SUCCESS:
	        case book_1.BookActions.ADD_TO_COLLECTION_FAIL: {
	            var book_2 = action.payload;
	            return Object.assign({}, state, {
	                ids: state.ids.filter(function (id) { return id !== book_2.id; })
	            });
	        }
	        default: {
	            return state;
	        }
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;
	function getLoaded() {
	    return function (state$) { return state$
	        .select(function (s) { return s.loaded; }); };
	}
	exports.getLoaded = getLoaded;
	function getLoading() {
	    return function (state$) { return state$
	        .select(function (s) { return s.loading; }); };
	}
	exports.getLoading = getLoading;
	function getBookIds() {
	    return function (state$) { return state$
	        .select(function (s) { return s.ids; }); };
	}
	exports.getBookIds = getBookIds;
	function isBookInCollection(id) {
	    return function (state$) { return state$
	        .let(getBookIds())
	        .map(function (ids) { return ids.includes(id); }); };
	}
	exports.isBookInCollection = isBookInCollection;


/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(132);
	var book_1 = __webpack_require__(110);
	;
	var initialState = {
	    ids: [],
	    loading: false,
	    query: ''
	};
	function default_1(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case book_1.BookActions.SEARCH: {
	            var query = action.payload;
	            return Object.assign(state, {
	                query: query,
	                loading: true
	            });
	        }
	        case book_1.BookActions.SEARCH_COMPLETE: {
	            var books = action.payload;
	            return {
	                ids: books.map(function (book) { return book.id; }),
	                loading: false,
	                query: state.query
	            };
	        }
	        default: {
	            return state;
	        }
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;
	function getStatus() {
	    return function (state$) { return state$
	        .select(function (s) { return s.loading; }); };
	}
	exports.getStatus = getStatus;
	function getBookIds() {
	    return function (state$) { return state$
	        .select(function (s) { return s.ids; }); };
	}
	exports.getBookIds = getBookIds;
	function getQuery() {
	    return function (state$) { return state$
	        .select(function (s) { return s.query; }); };
	}
	exports.getQuery = getQuery;


/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var guards_1 = __webpack_require__(608);
	var routes = [
	    {
	        path: '/',
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(2, function (require) {
	                resolve(__webpack_require__(837).CollectionPage);
	            });
	        }); }
	    },
	    {
	        path: '/book/find',
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(1, function (require) {
	                resolve(__webpack_require__(835).BookFindPage);
	            });
	        }); }
	    },
	    {
	        path: '/book/:id',
	        guards: [guards_1.BookExistsGuard],
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(3, function (require) {
	                resolve(__webpack_require__(836).BookViewPage);
	            });
	        }); }
	    },
	    {
	        path: '/*',
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(4, function (require) {
	                resolve(__webpack_require__(838).NotFoundPage);
	            });
	        }); }
	    }
	];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(162);
	var google_books_1 = __webpack_require__(268);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = [
	    http_1.HTTP_PROVIDERS,
	    google_books_1.GoogleBooksService
	];


/***/ },
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 768 */
/***/ function(module, exports) {

	"use strict";
	var logger = console;
	var INIT_ACTION = "@ngrx/store/init";
	var repeat = function (str, times) { return (new Array(times + 1)).join(str); };
	var pad = function (num, maxLength) { return repeat("0", maxLength - num.toString().length) + num; };
	var formatTime = function (time) { return ("@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3)); };
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	var getLogLevel = function (level, action, payload, type) {
	    switch (typeof level) {
	        case "object":
	            return typeof level[type] === "function" ? level[type].apply(level, payload) : level[type];
	        case "function":
	            return level(action);
	        default:
	            return level;
	    }
	};
	var printBuffer = function (options) { return function (logBuffer) {
	    var actionTransformer = options.actionTransformer, collapsed = options.collapsed, colors = options.colors, timestamp = options.timestamp, duration = options.duration, level = options.level;
	    logBuffer.forEach(function (logEntry, key) {
	        var started = logEntry.started, startedTime = logEntry.startedTime, action = logEntry.action, error = logEntry.error;
	        var prevState = logEntry.prevState.nextState ? logEntry.prevState.nextState : '(Empty)';
	        var took = logEntry.took, nextState = logEntry.nextState;
	        var nextEntry = logBuffer[key + 1];
	        if (nextEntry) {
	            nextState = nextEntry.prevState;
	            took = nextEntry.started - started;
	        }
	        var formattedAction = actionTransformer(action);
	        var isCollapsed = (typeof collapsed === "function") ? collapsed(function () { return nextState; }, action) : collapsed;
	        var formattedTime = formatTime(startedTime);
	        var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	        var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	        try {
	            if (isCollapsed) {
	                if (colors.title)
	                    logger.groupCollapsed("%c " + title, titleCSS);
	                else
	                    logger.groupCollapsed(title);
	            }
	            else {
	                if (colors.title)
	                    logger.group("%c " + title, titleCSS);
	                else
	                    logger.group(title);
	            }
	        }
	        catch (e) {
	            logger.log(title);
	        }
	        var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	        var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	        var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	        var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	        if (prevStateLevel) {
	            if (colors.prevState)
	                logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);
	            else
	                logger[prevStateLevel]("prev state", prevState);
	        }
	        if (actionLevel) {
	            if (colors.action)
	                logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);
	            else
	                logger[actionLevel]("action", formattedAction);
	        }
	        if (error && errorLevel) {
	            if (colors.error)
	                logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);
	            else
	                logger[errorLevel]("error", error);
	        }
	        if (nextStateLevel) {
	            if (colors.nextState)
	                logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);
	            else
	                logger[nextStateLevel]("next state", nextState);
	        }
	        try {
	            logger.groupEnd();
	        }
	        catch (e) {
	            logger.log("\u2014\u2014 log end \u2014\u2014");
	        }
	    });
	    logBuffer.length = 0;
	}; };
	exports.storeLogger = function (opts) {
	    if (opts === void 0) { opts = {}; }
	    return function (reducer) {
	        var log = {};
	        var ua = window && window.navigator.userAgent ? window.navigator.userAgent : '';
	        var ms_ie = false;
	        //fix for action display in IE
	        var old_ie = ua.indexOf('MSIE ');
	        var new_ie = ua.indexOf('Trident/');
	        if ((old_ie > -1) || (new_ie > -1)) {
	            ms_ie = true;
	        }
	        var defaults = {
	            level: "log",
	            collapsed: false,
	            duration: true,
	            timestamp: true,
	            stateTransformer: function (state) { return state; },
	            actionTransformer: function (actn) { return actn; },
	            colors: ms_ie ? {} : {
	                title: function () { return "#000000"; },
	                prevState: function () { return "#9E9E9E"; },
	                action: function () { return "#03A9F4"; },
	                nextState: function () { return "#4CAF50"; },
	                error: function () { return "#F20404"; },
	            }
	        };
	        var options = Object.assign({}, defaults, opts);
	        var stateTransformer = options.stateTransformer;
	        var buffer = printBuffer(options);
	        return function (state, action) {
	            var preLog = {
	                started: timer.now(),
	                startedTime: new Date(),
	                prevState: stateTransformer(log),
	                action: action
	            };
	            var nextState = reducer(state, action);
	            var postLog = {
	                took: timer.now() - preLog.started,
	                nextState: stateTransformer(nextState)
	            };
	            log = Object.assign({}, preLog, postLog);
	            //ignore init action fired by store and devtools
	            if (action.type !== INIT_ACTION) {
	                buffer([log]);
	            }
	            return nextState;
	        };
	    };
	};


/***/ },
/* 769 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 770 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(767)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ },
/* 771 */,
/* 772 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 773 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 774 */,
/* 775 */,
/* 776 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concat_1 = __webpack_require__(795);
	Observable_1.Observable.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 777 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var empty_1 = __webpack_require__(796);
	Observable_1.Observable.empty = empty_1.empty;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 778 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var forkJoin_1 = __webpack_require__(797);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 779 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatMap_1 = __webpack_require__(803);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 780 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var every_1 = __webpack_require__(805);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 781 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var finally_1 = __webpack_require__(806);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 782 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var first_1 = __webpack_require__(807);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 783 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mapTo_1 = __webpack_require__(809);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 784 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(460);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 785 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeAll_1 = __webpack_require__(295);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 786 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var scan_1 = __webpack_require__(463);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 787 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skip_1 = __webpack_require__(813);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 788 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeUntil_1 = __webpack_require__(817);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 789 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var withLatestFrom_1 = __webpack_require__(296);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 790 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(457);
	var EmptyObservable_1 = __webpack_require__(130);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 791 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(18);
	var Subscription_1 = __webpack_require__(108);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 792 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var EmptyObservable_1 = __webpack_require__(130);
	var isArray_1 = __webpack_require__(184);
	var subscribeToResult_1 = __webpack_require__(89);
	var OuterSubscriber_1 = __webpack_require__(87);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 793 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(184);
	var isFunction_1 = __webpack_require__(185);
	var isPromise_1 = __webpack_require__(465);
	var isScheduler_1 = __webpack_require__(186);
	var PromiseObservable_1 = __webpack_require__(88);
	var IteratorObservable_1 = __webpack_require__(794);
	var ArrayObservable_1 = __webpack_require__(180);
	var ArrayLikeObservable_1 = __webpack_require__(790);
	var observable_1 = __webpack_require__(300);
	var iterator_1 = __webpack_require__(299);
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(181);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[observable_1.$$observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[observable_1.$$observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 794 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(49);
	var isObject_1 = __webpack_require__(464);
	var tryCatch_1 = __webpack_require__(302);
	var Observable_1 = __webpack_require__(3);
	var isFunction_1 = __webpack_require__(185);
	var iterator_1 = __webpack_require__(299);
	var errorObject_1 = __webpack_require__(183);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[iterator_1.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[iterator_1.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 795 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var concat_1 = __webpack_require__(802);
	exports.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 796 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EmptyObservable_1 = __webpack_require__(130);
	exports.empty = EmptyObservable_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 797 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(792);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 798 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromObservable_1 = __webpack_require__(793);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 799 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var merge_1 = __webpack_require__(460);
	exports.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 800 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(180);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 801 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 802 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(186);
	var ArrayObservable_1 = __webpack_require__(180);
	var mergeAll_1 = __webpack_require__(295);
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 803 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(461);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 804 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 805 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    var source = this;
	    return source.lift(new EveryOperator(predicate, thisArg, source));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	    };
	    return EveryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 806 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var Subscription_1 = __webpack_require__(108);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 807 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var EmptyError_1 = __webpack_require__(825);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 808 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 809 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Emits the given constant value on the output Observable every time the source
	 * Observable emits a value.
	 *
	 * <span class="informal">Like {@link map}, but it maps every source value to
	 * the same output value every time.</span>
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * Takes a constant `value` as argument, and emits that whenever the source
	 * Observable emits a value. In other words, ignores the actual source value,
	 * and simply uses the emission moment to know when to emit the given `value`.
	 *
	 * @example <caption>Map every every click to the string 'Hi'</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var greetings = clicks.mapTo('Hi');
	 * greetings.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {any} value The value to map each source value to.
	 * @return {Observable} An Observable that emits the given `value` every time
	 * the source Observable emits something.
	 * @method mapTo
	 * @owner Observable
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapToSubscriber(subscriber, this.value));
	    };
	    return MapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 810 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var map_1 = __webpack_require__(294);
	/**
	 * Maps each source value (an object) to its specified nested property.
	 *
	 * <span class="informal">Like {@link map}, but meant only for picking one of
	 * the nested properties of every emitted object.</span>
	 *
	 * <img src="./img/pluck.png" width="100%">
	 *
	 * Given a list of strings describing a path to an object property, retrieves
	 * the value of a specified nested property from all values in the source
	 * Observable. If a property can't be resolved, it will return `undefined` for
	 * that value.
	 *
	 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var tagNames = clicks.pluck('target', 'tagName');
	 * tagNames.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {...string} properties The nested properties to pluck from each source
	 * value (an object).
	 * @return {Observable} Returns a new Observable of property values from the
	 * source values.
	 * @method pluck
	 * @owner Observable
	 */
	function pluck() {
	    var properties = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        properties[_i - 0] = arguments[_i];
	    }
	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('List of properties cannot be empty.');
	    }
	    return map_1.map.call(this, plucker(properties, length));
	}
	exports.pluck = pluck;
	function plucker(props, length) {
	    var mapper = function (x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            }
	            else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 811 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(451);
	var multicast_1 = __webpack_require__(462);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {ConnectableObservable<T>}
	 * @method publishReplay
	 * @owner Observable
	 */
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 812 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(462);
	var Subject_1 = __webpack_require__(22);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 813 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @return {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 * @method skip
	 * @owner Observable
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipSubscriber(subscriber, this.total));
	    };
	    return SkipOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 814 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(87);
	var subscribeToResult_1 = __webpack_require__(89);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 815 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(87);
	var subscribeToResult_1 = __webpack_require__(89);
	/**
	 * Projects each source value to the same Observable which is flattened multiple
	 * times with {@link switch} in the output Observable.
	 *
	 * <span class="informal">It's like {@link switchMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/switchMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. The output Observables
	 * emits values only from the most recently emitted instance of
	 * `innerObservable`.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link switch}
	 * @see {@link switchMap}
	 * @see {@link mergeMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` every time a value is emitted on the source Observable.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable, and taking only the values
	 * from the most recently projected inner Observable.
	 * @method switchMapTo
	 * @owner Observable
	 */
	function switchMapTo(innerObservable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
	    };
	    return SwitchMapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 816 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var ArgumentOutOfRangeError_1 = __webpack_require__(824);
	var EmptyObservable_1 = __webpack_require__(130);
	/**
	 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 * @param total
	 * @return {any}
	 * @method take
	 * @owner Observable
	 */
	function take(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(total));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 817 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(87);
	var subscribeToResult_1 = __webpack_require__(89);
	/**
	 * @param notifier
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method takeUntil
	 * @owner Observable
	 */
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
	    };
	    return TakeUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 818 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ToArraySubscriber(subscriber));
	    };
	    return ToArrayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 819 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(826);
	var FutureAction_1 = __webpack_require__(182);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 820 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(819);
	var QueueScheduler_1 = __webpack_require__(297);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 821 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(182);
	var QueueScheduler_1 = __webpack_require__(297);
	var AsyncScheduler = (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsyncScheduler.prototype.scheduleNow = function (work, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
	    };
	    return AsyncScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 822 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(182);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 823 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(820);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 824 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an element was queried at a certain index of an
	 * Observable, but no such index or position exists in that sequence.
	 *
	 * @see {@link elementAt}
	 * @see {@link take}
	 * @see {@link takeLast}
	 *
	 * @class ArgumentOutOfRangeError
	 */
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        _super.call(this, 'argument out of range');
	        this.name = 'ArgumentOutOfRangeError';
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 825 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 826 */
/***/ function(module, exports, __webpack_require__) {

	/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(49);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map

/***/ },
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ }
]);