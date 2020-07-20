/**
 * VueLayers
 * Web map Vue components with the power of OpenLayers
 *
 * @package vuelayers
 * @author Vladimir Vershinin <ghettovoice@gmail.com>
 * @version 0.11.27
 * @license MIT
 * @copyright (c) 2017-2020, Vladimir Vershinin <ghettovoice@gmail.com>
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('ol/extent'), require('ol/proj'), require('ol/proj/Units'), require('ol/Feature'), require('vue'), require('ol/geom/Geometry'), require('ol/geom/Circle'), require('ol/geom/GeometryCollection'), require('ol/geom/LineString'), require('ol/geom/MultiLineString'), require('ol/geom/MultiPoint'), require('ol/geom/MultiPolygon'), require('ol/geom/Point'), require('ol/geom/Polygon'), require('ol/proj/Projection'), require('ol'), require('ol/format/GeoJSON'), require('ol/format/MVT'), require('ol/format/TopoJSON'), require('ol/sphere'), require('ol/interaction/Interaction'), require('ol/layer/Base'), require('ol/loadingstrategy'), require('ol/PluggableMap'), require('ol/Overlay'), require('ol/source/Source'), require('ol/style/Circle'), require('ol/style/Fill'), require('ol/style/Icon'), require('ol/style/Image'), require('ol/style/RegularShape'), require('ol/style/Stroke'), require('ol/style/Style'), require('ol/style/Text'), require('ol/size'), require('ol/tilegrid'), require('ol/tilegrid/TileGrid'), require('ol/Collection'), require('ol/style'), require('ol/source/XYZ'), require('ol/source/TileArcGISRest'), require('ol/source/BingMaps'), require('ol/source/Cluster'), require('ol/events/condition'), require('ol/interaction'), require('ol/source'), require('ol/Geolocation'), require('ol/Graticule'), require('ol/layer/Group'), require('ol/layer/Heatmap'), require('ol/layer/Image'), require('ol/source/ImageStatic'), require('ol/source/ImageWMS'), require('ol/source/WMSServerType'), require('ol/control'), require('ol/layer/Vector'), require('ol/Map'), require('ol/WebGLMap'), require('ol/source/Vector'), require('ol/View'), require('ol/source/OSM'), require('ol/interaction/Select'), require('ol/source/Stamen'), require('ol/layer/Tile'), require('ol/layer/VectorTile'), require('ol/source/VectorTile'), require('ol/source/TileWMS'), require('ol/source/WMTS'), require('ol/tilegrid/WMTS')) :
	typeof define === 'function' && define.amd ? define('vuelayers', ['ol/extent', 'ol/proj', 'ol/proj/Units', 'ol/Feature', 'vue', 'ol/geom/Geometry', 'ol/geom/Circle', 'ol/geom/GeometryCollection', 'ol/geom/LineString', 'ol/geom/MultiLineString', 'ol/geom/MultiPoint', 'ol/geom/MultiPolygon', 'ol/geom/Point', 'ol/geom/Polygon', 'ol/proj/Projection', 'ol', 'ol/format/GeoJSON', 'ol/format/MVT', 'ol/format/TopoJSON', 'ol/sphere', 'ol/interaction/Interaction', 'ol/layer/Base', 'ol/loadingstrategy', 'ol/PluggableMap', 'ol/Overlay', 'ol/source/Source', 'ol/style/Circle', 'ol/style/Fill', 'ol/style/Icon', 'ol/style/Image', 'ol/style/RegularShape', 'ol/style/Stroke', 'ol/style/Style', 'ol/style/Text', 'ol/size', 'ol/tilegrid', 'ol/tilegrid/TileGrid', 'ol/Collection', 'ol/style', 'ol/source/XYZ', 'ol/source/TileArcGISRest', 'ol/source/BingMaps', 'ol/source/Cluster', 'ol/events/condition', 'ol/interaction', 'ol/source', 'ol/Geolocation', 'ol/Graticule', 'ol/layer/Group', 'ol/layer/Heatmap', 'ol/layer/Image', 'ol/source/ImageStatic', 'ol/source/ImageWMS', 'ol/source/WMSServerType', 'ol/control', 'ol/layer/Vector', 'ol/Map', 'ol/WebGLMap', 'ol/source/Vector', 'ol/View', 'ol/source/OSM', 'ol/interaction/Select', 'ol/source/Stamen', 'ol/layer/Tile', 'ol/layer/VectorTile', 'ol/source/VectorTile', 'ol/source/TileWMS', 'ol/source/WMTS', 'ol/tilegrid/WMTS'], factory) :
	(global.VueLayers = factory(global.ol.extent,global.ol.proj,global.ol.proj.Units,global.ol.Feature,global.Vue,global.ol.geom.Geometry,global.ol.geom.Circle,global.ol.geom.GeometryCollection,global.ol.geom.LineString,global.ol.geom.MultiLineString,global.ol.geom.MultiPoint,global.ol.geom.MultiPolygon,global.ol.geom.Point,global.ol.geom.Polygon,global.ol.proj.Projection,global.ol,global.ol.format.GeoJSON,global.ol.format.MVT,global.ol.format.TopoJSON,global.ol.sphere,global.ol.interaction.Interaction,global.ol.layer.Base,global.ol.loadingstrategy,global.ol.PluggableMap,global.ol.Overlay,global.ol.source.Source,global.ol.style.Circle,global.ol.style.Fill,global.ol.style.Icon,global.ol.style.Image,global.ol.style.RegularShape,global.ol.style.Stroke,global.ol.style.Style,global.ol.style.Text,global.ol.size,global.ol.tilegrid,global.ol.tilegrid.TileGrid,global.ol.Collection,global.ol.style,global.ol.source.XYZ,global.ol.source.TileArcGISRest,global.ol.source.BingMaps,global.ol.source.Cluster,global.ol.events.condition,global.ol.interaction,global.ol.source,global.ol.Geolocation,global.ol.Graticule,global.ol.layer.Group,global.ol.layer.Heatmap,global.ol.layer.Image,global.ol.source.ImageStatic,global.ol.source.ImageWMS,global.ol.source.WMSServerType,global.ol.control,global.ol.layer.Vector,global.ol.Map,global.ol.WebGLMap,global.ol.source.Vector,global.ol.View,global.ol.source.OSM,global.ol.interaction.Select,global.ol.source.Stamen,global.ol.layer.Tile,global.ol.layer.VectorTile,global.ol.source.VectorTile,global.ol.source.TileWMS,global.ol.source.WMTS,global.ol.tilegrid.WMTS));
}(this, (function (extent,proj,Units,Feature,Vue,Geometry,Circle,GeometryCollection,LineString,MultiLineString,MultiPoint,MultiPolygon,Point,Polygon,Projection,ol,BaseGeoJSON,MVT,TopoJSON,sphere,Interaction,BaseLayer,loadingstrategy,PluggableMap,Overlay,Source,Circle$1,Fill,Icon,ImageStyle,RegularShape,Stroke,Style,Text,size,tilegrid,TileGrid,Collection,style,XYZSource,TileArcGISRestSource,BingMapsSource,Cluster,condition,interaction,source,Geolocation,Graticule,GroupLayer,HeatmapLayer,ImageLayer,ImageStaticSource,ImageWMS,WMSServerType,control,VectorLayer,Map$1,WebGLMap,VectorSource,View,OSMSource,SelectInteraction,StamenSource,TileLayer,VectorTileLayer,VectorTileSource,TileWMSSource,WMTSSource,WMTSTileGrid) { 'use strict';

	Feature = Feature && Feature.hasOwnProperty('default') ? Feature['default'] : Feature;
	Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
	Geometry = Geometry && Geometry.hasOwnProperty('default') ? Geometry['default'] : Geometry;
	Circle = Circle && Circle.hasOwnProperty('default') ? Circle['default'] : Circle;
	GeometryCollection = GeometryCollection && GeometryCollection.hasOwnProperty('default') ? GeometryCollection['default'] : GeometryCollection;
	LineString = LineString && LineString.hasOwnProperty('default') ? LineString['default'] : LineString;
	MultiLineString = MultiLineString && MultiLineString.hasOwnProperty('default') ? MultiLineString['default'] : MultiLineString;
	MultiPoint = MultiPoint && MultiPoint.hasOwnProperty('default') ? MultiPoint['default'] : MultiPoint;
	MultiPolygon = MultiPolygon && MultiPolygon.hasOwnProperty('default') ? MultiPolygon['default'] : MultiPolygon;
	Point = Point && Point.hasOwnProperty('default') ? Point['default'] : Point;
	var Polygon__default = 'default' in Polygon ? Polygon['default'] : Polygon;
	Projection = Projection && Projection.hasOwnProperty('default') ? Projection['default'] : Projection;
	BaseGeoJSON = BaseGeoJSON && BaseGeoJSON.hasOwnProperty('default') ? BaseGeoJSON['default'] : BaseGeoJSON;
	MVT = MVT && MVT.hasOwnProperty('default') ? MVT['default'] : MVT;
	TopoJSON = TopoJSON && TopoJSON.hasOwnProperty('default') ? TopoJSON['default'] : TopoJSON;
	Interaction = Interaction && Interaction.hasOwnProperty('default') ? Interaction['default'] : Interaction;
	BaseLayer = BaseLayer && BaseLayer.hasOwnProperty('default') ? BaseLayer['default'] : BaseLayer;
	PluggableMap = PluggableMap && PluggableMap.hasOwnProperty('default') ? PluggableMap['default'] : PluggableMap;
	Overlay = Overlay && Overlay.hasOwnProperty('default') ? Overlay['default'] : Overlay;
	Source = Source && Source.hasOwnProperty('default') ? Source['default'] : Source;
	Circle$1 = Circle$1 && Circle$1.hasOwnProperty('default') ? Circle$1['default'] : Circle$1;
	Fill = Fill && Fill.hasOwnProperty('default') ? Fill['default'] : Fill;
	Icon = Icon && Icon.hasOwnProperty('default') ? Icon['default'] : Icon;
	ImageStyle = ImageStyle && ImageStyle.hasOwnProperty('default') ? ImageStyle['default'] : ImageStyle;
	RegularShape = RegularShape && RegularShape.hasOwnProperty('default') ? RegularShape['default'] : RegularShape;
	Stroke = Stroke && Stroke.hasOwnProperty('default') ? Stroke['default'] : Stroke;
	Style = Style && Style.hasOwnProperty('default') ? Style['default'] : Style;
	Text = Text && Text.hasOwnProperty('default') ? Text['default'] : Text;
	TileGrid = TileGrid && TileGrid.hasOwnProperty('default') ? TileGrid['default'] : TileGrid;
	Collection = Collection && Collection.hasOwnProperty('default') ? Collection['default'] : Collection;
	XYZSource = XYZSource && XYZSource.hasOwnProperty('default') ? XYZSource['default'] : XYZSource;
	TileArcGISRestSource = TileArcGISRestSource && TileArcGISRestSource.hasOwnProperty('default') ? TileArcGISRestSource['default'] : TileArcGISRestSource;
	BingMapsSource = BingMapsSource && BingMapsSource.hasOwnProperty('default') ? BingMapsSource['default'] : BingMapsSource;
	Cluster = Cluster && Cluster.hasOwnProperty('default') ? Cluster['default'] : Cluster;
	Geolocation = Geolocation && Geolocation.hasOwnProperty('default') ? Geolocation['default'] : Geolocation;
	Graticule = Graticule && Graticule.hasOwnProperty('default') ? Graticule['default'] : Graticule;
	GroupLayer = GroupLayer && GroupLayer.hasOwnProperty('default') ? GroupLayer['default'] : GroupLayer;
	HeatmapLayer = HeatmapLayer && HeatmapLayer.hasOwnProperty('default') ? HeatmapLayer['default'] : HeatmapLayer;
	ImageLayer = ImageLayer && ImageLayer.hasOwnProperty('default') ? ImageLayer['default'] : ImageLayer;
	ImageStaticSource = ImageStaticSource && ImageStaticSource.hasOwnProperty('default') ? ImageStaticSource['default'] : ImageStaticSource;
	ImageWMS = ImageWMS && ImageWMS.hasOwnProperty('default') ? ImageWMS['default'] : ImageWMS;
	WMSServerType = WMSServerType && WMSServerType.hasOwnProperty('default') ? WMSServerType['default'] : WMSServerType;
	VectorLayer = VectorLayer && VectorLayer.hasOwnProperty('default') ? VectorLayer['default'] : VectorLayer;
	Map$1 = Map$1 && Map$1.hasOwnProperty('default') ? Map$1['default'] : Map$1;
	WebGLMap = WebGLMap && WebGLMap.hasOwnProperty('default') ? WebGLMap['default'] : WebGLMap;
	VectorSource = VectorSource && VectorSource.hasOwnProperty('default') ? VectorSource['default'] : VectorSource;
	View = View && View.hasOwnProperty('default') ? View['default'] : View;
	OSMSource = OSMSource && OSMSource.hasOwnProperty('default') ? OSMSource['default'] : OSMSource;
	SelectInteraction = SelectInteraction && SelectInteraction.hasOwnProperty('default') ? SelectInteraction['default'] : SelectInteraction;
	StamenSource = StamenSource && StamenSource.hasOwnProperty('default') ? StamenSource['default'] : StamenSource;
	TileLayer = TileLayer && TileLayer.hasOwnProperty('default') ? TileLayer['default'] : TileLayer;
	VectorTileLayer = VectorTileLayer && VectorTileLayer.hasOwnProperty('default') ? VectorTileLayer['default'] : VectorTileLayer;
	VectorTileSource = VectorTileSource && VectorTileSource.hasOwnProperty('default') ? VectorTileSource['default'] : VectorTileSource;
	TileWMSSource = TileWMSSource && TileWMSSource.hasOwnProperty('default') ? TileWMSSource['default'] : TileWMSSource;
	WMTSSource = WMTSSource && WMTSSource.hasOwnProperty('default') ? WMTSSource['default'] : WMTSSource;
	WMTSTileGrid = WMTSTileGrid && WMTSTileGrid.hasOwnProperty('default') ? WMTSTileGrid['default'] : WMTSTileGrid;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var path = {};

	var aFunction = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof NativeConstructor) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return NativeConstructor.apply(this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source$$1) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source$$1) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source$$1[key];

	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    target[key] = resultProperty;

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!has(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
	  defineProperty: objectDefineProperty.f
	});

	var defineProperty_1 = createCommonjsModule(function (module) {
	var Object = path.Object;

	var defineProperty = module.exports = function defineProperty(it, key, desc) {
	  return Object.defineProperty(it, key, desc);
	};

	if (Object.defineProperty.sham) defineProperty.sham = true;
	});

	var defineProperty = defineProperty_1;

	var defineProperty$1 = defineProperty;

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var hiddenKeys = {};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
	  defineProperties: objectDefineProperties
	});

	var defineProperties_1 = createCommonjsModule(function (module) {
	var Object = path.Object;

	var defineProperties = module.exports = function defineProperties(T, D) {
	  return Object.defineProperties(T, D);
	};

	if (Object.defineProperties.sham) defineProperties.sham = true;
	});

	var defineProperties = defineProperties_1;

	var defineProperties$1 = defineProperties;

	var aFunction$1 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	_export({ target: 'Object', stat: true, sham: !descriptors }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var getOwnPropertyDescriptors = path.Object.getOwnPropertyDescriptors;

	var getOwnPropertyDescriptors$1 = getOwnPropertyDescriptors;

	var getOwnPropertyDescriptors$2 = getOwnPropertyDescriptors$1;

	var iterators = {};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var isPure = true;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.6.4',
	  mode: isPure ? 'pure' : 'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = new WeakMap$1();
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	var html = getBuiltIn('document', 'documentElement');

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	var objectToString = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty$2 = objectDefineProperty.f;





	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!has(target, TO_STRING_TAG$2)) {
	      defineProperty$2(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var redefine = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty(target, key, value);
	};

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$2 = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!isPure && objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
	        if (objectSetPrototypeOf) {
	          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
	          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (isPure) iterators[TO_STRING_TAG] = returnThis$2;
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ((!isPure || FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

	for (var COLLECTION_NAME in domIterables) {
	  var Collection$1 = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection$1 && Collection$1.prototype;
	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG$3) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	  }
	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var defineProperty$3 = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty$3(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};

	var $forEach = arrayIteration.forEach;



	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var forEach = entryVirtual('Array').forEach;

	var forEach$1 = forEach;

	var ArrayPrototype = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
	    // eslint-disable-next-line no-prototype-builtins
	    || DOMIterables.hasOwnProperty(classof(it)) ? forEach$1 : own;
	};

	var forEach$2 = forEach_1;

	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;


	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor$1(1); });
	var FORCED = !descriptors || FAILS_ON_PRIMITIVES;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	_export({ target: 'Object', stat: true, forced: FORCED, sham: !descriptors }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$1(toIndexedObject(it), key);
	  }
	});

	var getOwnPropertyDescriptor_1 = createCommonjsModule(function (module) {
	var Object = path.Object;

	var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object.getOwnPropertyDescriptor(it, key);
	};

	if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;
	});

	var getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor_1;

	var getOwnPropertyDescriptor$3 = getOwnPropertyDescriptor$2;

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $filter = arrayIteration.filter;



	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
	// Edge 14- issue
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('filter');

	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$1 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var filter = entryVirtual('Array').filter;

	var ArrayPrototype$1 = Array.prototype;

	var filter_1 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$1 || (it instanceof Array && own === ArrayPrototype$1.filter) ? filter : own;
	};

	var filter$1 = filter_1;

	var filter$2 = filter$1;

	var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
		f: f$5
	};

	var f$6 = wellKnownSymbol;

	var wellKnownSymbolWrapped = {
		f: f$6
	};

	var defineProperty$4 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
	    value: wellKnownSymbolWrapped.f(NAME)
	  });
	};

	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE$1];
	var $Symbol = global_1.Symbol;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty$1 = objectDefineProperty.f;
	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore$1 = shared('wks');
	var QObject = global_1.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = descriptors && fails(function () {
	  return objectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty$1(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
	  setInternalState$1(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors) symbol.description = description;
	  return symbol;
	};

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
	  if (this === ObjectPrototype$1 && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype$1, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });

	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
	  objectDefineProperty.f = $defineProperty;
	  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
	  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

	  wellKnownSymbolWrapped.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (descriptors) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$1(this).description;
	      }
	    });
	    if (!isPure) {
	      redefine(ObjectPrototype$1, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }
	}

	_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol(name);
	});

	_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return objectGetOwnPropertySymbols.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify(Object(symbol)) != '{}';
	  });

	  _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;
	      while (arguments.length > index) args.push(arguments[index++]);
	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify.apply(null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var getOwnPropertySymbols = path.Object.getOwnPropertySymbols;

	var getOwnPropertySymbols$1 = getOwnPropertySymbols;

	var getOwnPropertySymbols$2 = getOwnPropertySymbols$1;

	var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var keys$1 = path.Object.keys;

	var keys$2 = keys$1;

	var keys$3 = keys$2;

	var defineProperty$5 = defineProperty_1;

	var defineProperty$6 = defineProperty$5;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty$6(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var nativeAssign = Object.assign;
	var defineProperty$7 = Object.defineProperty;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	var objectAssign = !nativeAssign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty$7({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$7(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source$$1) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	var assign = path.Object.assign;

	var assign$1 = assign;

	var assign$2 = assign$1;

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$2 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod$2(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$2(true)
	};

	var $reduce = arrayReduce.left;



	var STRICT_METHOD$1 = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH$2 = arrayMethodUsesToLength('reduce', { 1: 0 });

	// `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$2 }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var reduce = entryVirtual('Array').reduce;

	var ArrayPrototype$2 = Array.prototype;

	var reduce_1 = function (it) {
	  var own = it.reduce;
	  return it === ArrayPrototype$2 || (it instanceof Array && own === ArrayPrototype$2.reduce) ? reduce : own;
	};

	var reduce$1 = reduce_1;

	var reduce$2 = reduce$1;

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

	var SPECIES$2 = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$3 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES$2];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var slice = entryVirtual('Array').slice;

	var ArrayPrototype$3 = Array.prototype;

	var slice_1 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$3 || (it instanceof Array && own === ArrayPrototype$3.slice) ? slice : own;
	};

	var slice$1 = slice_1;

	var slice$2 = slice$1;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED$1 }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var concat = entryVirtual('Array').concat;

	var ArrayPrototype$4 = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$4 || (it instanceof Array && own === ArrayPrototype$4.concat) ? concat : own;
	};

	var concat$1 = concat_1;

	var concat$2 = concat$1;

	var propertyIsEnumerable = objectPropertyIsEnumerable.f;

	// `Object.{ entries, values }` methods implementation
	var createMethod$3 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!descriptors || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.github.io/ecma262/#sec-object.entries
	  entries: createMethod$3(true),
	  // `Object.values` method
	  // https://tc39.github.io/ecma262/#sec-object.values
	  values: createMethod$3(false)
	};

	var $values = objectToArray.values;

	// `Object.values` method
	// https://tc39.github.io/ecma262/#sec-object.values
	_export({ target: 'Object', stat: true }, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	var values = path.Object.values;

	var values$1 = values;

	var values$2 = values$1;

	var $includes = arrayIncludes.includes;



	var USES_TO_LENGTH$4 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	_export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$4 }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var includes = entryVirtual('Array').includes;

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	var notARegexp = function (it) {
	  if (isRegexp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};

	var MATCH$1 = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (e) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (f) { /* empty */ }
	  } return false;
	};

	// `String.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.includes
	_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~String(requireObjectCoercible(this))
	      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var includes$1 = entryVirtual('String').includes;

	var ArrayPrototype$5 = Array.prototype;
	var StringPrototype = String.prototype;

	var includes$2 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype$5 || (it instanceof Array && own === ArrayPrototype$5.includes)) return includes;
	  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
	    return includes$1;
	  } return own;
	};

	var includes$3 = includes$2;

	var includes$4 = includes$3;

	var $map = arrayIteration.map;



	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH$5 = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$5 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var map = entryVirtual('Array').map;

	var ArrayPrototype$6 = Array.prototype;

	var map_1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$6 || (it instanceof Array && own === ArrayPrototype$6.map) ? map : own;
	};

	var map$1 = map_1;

	var map$2 = map$1;

	var $find = arrayIteration.find;



	var FIND = 'find';
	var SKIPS_HOLES = true;

	var USES_TO_LENGTH$6 = arrayMethodUsesToLength(FIND);

	// Shouldn't skip holes
	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

	// `Array.prototype.find` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.find
	_export({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH$6 }, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var find = entryVirtual('Array').find;

	var ArrayPrototype$7 = Array.prototype;

	var find_1 = function (it) {
	  var own = it.find;
	  return it === ArrayPrototype$7 || (it instanceof Array && own === ArrayPrototype$7.find) ? find : own;
	};

	var find$1 = find_1;

	var find$2 = find$1;

	var FAILS_ON_PRIMITIVES$2 = fails(function () { objectGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !correctPrototypeGetter }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return objectGetPrototypeOf(toObject(it));
	  }
	});

	var getPrototypeOf = path.Object.getPrototypeOf;

	var getPrototypeOf$1 = getPrototypeOf;

	var getPrototypeOf$2 = getPrototypeOf$1;

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$4 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size$$1 = S.length;
	    var first, second;
	    if (position < 0 || position >= size$$1) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size$$1
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$4(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$4(true)
	};

	var charAt = stringMultibyte.charAt;



	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$2(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var iterator = wellKnownSymbolWrapped.f('iterator');

	var iterator$1 = iterator;

	var iterator$2 = iterator$1;

	// empty

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol('asyncIterator');

	// empty

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol('hasInstance');

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol('isConcatSpreadable');

	// `Symbol.match` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.match
	defineWellKnownSymbol('match');

	// `Symbol.matchAll` well-known symbol
	defineWellKnownSymbol('matchAll');

	// `Symbol.replace` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.replace
	defineWellKnownSymbol('replace');

	// `Symbol.search` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.search
	defineWellKnownSymbol('search');

	// `Symbol.species` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.species
	defineWellKnownSymbol('species');

	// `Symbol.split` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.split
	defineWellKnownSymbol('split');

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol('toPrimitive');

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol('toStringTag');

	// `Symbol.unscopables` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol('unscopables');

	// Math[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
	setToStringTag(Math, 'Math', true);

	// JSON[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
	setToStringTag(global_1.JSON, 'JSON', true);

	var symbol = path.Symbol;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('asyncDispose');

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('dispose');

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol('observable');

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol('patternMatch');

	// TODO: remove from `core-js@4`


	defineWellKnownSymbol('replaceAll');

	// TODO: Remove from `core-js@4`


	var symbol$1 = symbol;

	var symbol$2 = symbol$1;

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof symbol$2 === "function" && typeof iterator$2 === "symbol") {
	    _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof symbol$2 === "function" && obj.constructor === symbol$2 && obj !== symbol$2.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$5 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$5(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$5(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$5(3)
	};

	var trim = stringTrim.trim;


	var $parseFloat = global_1.parseFloat;
	var FORCED$2 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

	// `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED$2 ? function parseFloat(string) {
	  var trimmedString = trim(String(string));
	  var result = $parseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	// `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string
	_export({ global: true, forced: parseFloat != numberParseFloat }, {
	  parseFloat: numberParseFloat
	});

	var _parseFloat = path.parseFloat;

	var _parseFloat$1 = _parseFloat;

	var _parseFloat$2 = _parseFloat$1;

	// `Array.isArray` method
	// https://tc39.github.io/ecma262/#sec-array.isarray
	_export({ target: 'Array', stat: true }, {
	  isArray: isArray
	});

	var isArray$1 = path.Array.isArray;

	var isArray$2 = isArray$1;

	var isArray$3 = isArray$2;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var ArrayPrototype$8 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$8[ITERATOR$2] === it);
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	// `Array.from` method implementation
	// https://tc39.github.io/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();
	    for (;!(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = toLength(O.length);
	    result = new C(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$4] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	});

	// `Array.from` method
	// https://tc39.github.io/ecma262/#sec-array.from
	_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: arrayFrom
	});

	var from_1 = path.Array.from;

	var from_1$1 = from_1;

	var from_1$2 = from_1$1;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	_export({ target: 'Object', stat: true, sham: !descriptors }, {
	  create: objectCreate
	});

	var Object$1 = path.Object;

	var create = function create(P, D) {
	  return Object$1.create(P, D);
	};

	var create$1 = create;

	var create$2 = create$1;

	var _context;

	var _marked = /*#__PURE__*/regenerator.mark(range);

	/**
	 * Mini Lodash.
	 */
	var glob = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};
	var globIsFinite = glob.isFinite || noop;
	var objectProto = Object.prototype;
	var funcProto = Object.prototype;
	var objectToString$1 = objectProto.toString;
	var funcToString = funcProto.toString;
	var objectTag = (_context = {}, objectToString$1).call(_context);
	var numberTag = (_context = 0, objectToString$1).call(_context);
	var stringTag = (_context = '', objectToString$1).call(_context);
	var booleanTag = (_context = true, objectToString$1).call(_context);
	var objectCtorString = funcToString.call(Object);
	function noop() {// do nothing
	}
	function constant(value) {
	  return function () {
	    return value;
	  };
	}
	function stubArray() {
	  return [];
	}
	function stubObject() {
	  return create$2(null);
	}
	function identity(value) {
	  return value;
	}
	function isBoolean(value) {
	  return objectToString$1.call(value) === booleanTag;
	}
	function isNumber(value) {
	  return objectToString$1.call(value) === numberTag;
	}
	function isString(value) {
	  return objectToString$1.call(value) === stringTag;
	}
	function isArray$4(value) {
	  return isArray$3(value);
	}
	function isArrayLike(value) {
	  return isObjectLike(value) && value.hasOwnProperty('length');
	}
	function isFinite(value) {
	  return typeof value === 'number' && globIsFinite(value);
	}
	function isFunction(value) {
	  return typeof value === 'function';
	}
	/**
	 * @param {*} value
	 * @return {boolean} True if value is number or numeric string.
	 */

	function isNumeric(value) {
	  return !isNaN(_parseFloat$2(value)) && globIsFinite(value);
	}
	function isObjectLike(value) {
	  return value != null && _typeof(value) === 'object';
	}
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString$1.call(value) !== objectTag) {
	    return false;
	  }

	  var proto = getPrototypeOf$2(value);

	  if (proto == null) {
	    return true;
	  }

	  var Ctor = proto.constructor;
	  return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
	}
	/**
	 * @param {...*} [args]
	 *
	 * @return {*}
	 */

	function coalesce() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return find$2(args).call(args, function (val) {
	    return val != null;
	  });
	}
	/**
	 * @param {Object} object
	 * @return {Object} Returns object only with plain properties.
	 */

	function plainProps(object) {
	  var _context2;

	  var newObject = {};

	  var isPlain = function isPlain(x) {
	    return isNumeric(x) || isString(x) || isArray$4(x) || isBoolean(x) || isPlainObject(x);
	  };

	  forEach$2(_context2 = keys$3(object)).call(_context2, function (key) {
	    if (isPlain(object[key])) {
	      newObject[key] = object[key];
	    }
	  });

	  return newObject;
	}
	/**
	 * Replaces `tokens` in the `string` by values from the `replaces`.
	 *
	 * @param {string} string
	 * @param {Object} replaces
	 *
	 * @returns {string}
	 */

	function replaceTokens(string, replaces) {
	  var _context3;

	  var regExp = new RegExp(map$2(_context3 = keys$3(replaces)).call(_context3, function (field) {
	    return '(\\{' + field + '\\})';
	  }).join('|'), 'ig');
	  return string.replace(regExp, function (match) {
	    return replaces[match.substr(1, match.length - 2)] || '';
	  });
	}
	function isEqual(value, other) {
	  if (value === other) {
	    return true;
	  }

	  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
	    // eslint-disable-next-line no-self-compare
	    return value !== value && other !== other;
	  }

	  var valueProps = keys$3(value);

	  var otherProps = keys$3(other);

	  if (valueProps.length !== otherProps.length) {
	    return false;
	  }

	  var checked = [];

	  var traverse = function traverse(valueProps, otherProps) {
	    for (var i = 0, l = valueProps.length; i < l; i++) {
	      var valueProp = valueProps[i];

	      if (includes$4(checked).call(checked, valueProp)) {
	        continue;
	      }

	      if (other.hasOwnProperty(valueProp) === false) {
	        return false;
	      }

	      var otherProp = otherProps[i];

	      if (!isEqual(value[valueProp], other[otherProp])) {
	        return false;
	      }

	      checked.push(otherProp);
	    }

	    return true;
	  };

	  if (traverse(valueProps, otherProps) === false) {
	    return false;
	  }

	  return traverse(otherProps, valueProps);
	}
	function isEmpty(value) {
	  return !value || isArrayLike(value) && value.length === 0 || isObjectLike(value) && keys$3(value).length === 0;
	}
	function isNotEmpty(value) {
	  return !isEmpty(value);
	}
	function keys$4(object) {
	  return keys$3(object);
	}
	function forEach$3(collection, iteratee) {
	  var keys = keys$3(collection);

	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    var value = collection[key];

	    if (iteratee(value, key) === false) {
	      return;
	    }
	  }
	}
	function reduce$3(collection, iteratee, initial) {
	  var result = initial;
	  forEach$3(collection, function (value, key) {
	    result = iteratee(result, value, key);
	  });
	  return result;
	}
	function filter$3(collection) {
	  var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isNotEmpty;
	  return reduce$3(collection, function (newCollection, value, key) {
	    if (iteratee(value, key)) {
	      if (isArray$4(newCollection)) {
	        newCollection.push(value);
	      } else {
	        newCollection[key] = value;
	      }
	    }

	    return newCollection;
	  }, isArray$4(collection) ? [] : {});
	}
	function map$3(collection) {
	  var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
	  return reduce$3(collection, function (newCollection, value, key) {
	    newCollection[key] = iteratee(value, key);
	    return newCollection;
	  }, isArray$4(collection) ? [] : {});
	}
	function mapValues(object) {
	  var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
	  return map$3(object, iteratee);
	}
	function firstEl(object) {
	  if (!isArrayLike(object)) return;
	  return object[0];
	}
	function pick(object, key) {
	  for (var _len2 = arguments.length, keys = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    keys[_key2 - 2] = arguments[_key2];
	  }

	  if (isArray$3(key)) {
	    keys = key;
	  } else {
	    var _context4;

	    keys = concat$2(_context4 = [key]).call(_context4, keys);
	  }

	  return reduce$3(keys, function (picked, key) {
	    picked[key] = object[key];
	    return picked;
	  }, {});
	}
	function upperFirst(string) {
	  string = String(string);

	  if (string.length === 0) {
	    return '';
	  }

	  return string[0].toUpperCase() + slice$2(string).call(string, 1);
	}
	function lowerFirst(string) {
	  string = String(string);

	  if (string.length === 0) {
	    return '';
	  }

	  return string[0].toLowerCase() + slice$2(string).call(string, 1);
	}
	function range(start, end) {
	  var step,
	      i,
	      _args = arguments;
	  return regenerator.wrap(function range$(_context6) {
	    while (1) {
	      switch (_context6.prev = _context6.next) {
	        case 0:
	          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
	          i = start;

	        case 2:
	          if (!(i < end)) {
	            _context6.next = 8;
	            break;
	          }

	          _context6.next = 5;
	          return i;

	        case 5:
	          i += step;
	          _context6.next = 2;
	          break;

	        case 8:
	        case "end":
	          return _context6.stop();
	      }
	    }
	  }, _marked);
	}
	/**
	 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
	 *
	 * @param obj
	 * @param path
	 * @param defaultValue
	 * @return {*}
	 */

	function get$1(obj, path, defaultValue) {
	  var travel = function travel(regexp) {
	    var _context7, _context8;

	    return reduce$2(_context7 = filter$2(_context8 = String.prototype.split.call(path, regexp)).call(_context8, Boolean)).call(_context7, function (res, key) {
	      return res !== null && res !== undefined ? res[key] : res;
	    }, obj);
	  };

	  var result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
	  return result === undefined || result === obj ? defaultValue : result;
	}
	function includes$5(array, value) {
	  var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isEqual;
	  var elems = filter$3(array, function (elem) {
	    return comparator(elem, value);
	  });
	  return elems.shift();
	}
	function difference(array1, array2) {
	  var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isEqual;
	  return filter$3(array1, function (value) {
	    return !includes$5(array2, value, comparator);
	  });
	}
	/**
	 * @param {string} str
	 * @return {string}
	 */

	function camelCase(str) {
	  var regExp = /([-_]\w)/g;
	  return str.replace(regExp, function (matches) {
	    return matches[1].toUpperCase();
	  });
	}
	function arrayLengthValidator(len) {
	  return function (len) {
	    return function (value) {
	      return isArray$4(value) && value.length === len;
	    };
	  };
	}

	var $stringify$1 = getBuiltIn('JSON', 'stringify');
	var re = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var fix = function (match, offset, string) {
	  var prev = string.charAt(offset - 1);
	  var next = string.charAt(offset + 1);
	  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
	    return '\\u' + match.charCodeAt(0).toString(16);
	  } return match;
	};

	var FORCED$3 = fails(function () {
	  return $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify$1('\uDEAD') !== '"\\udead"';
	});

	if ($stringify$1) {
	  // https://github.com/tc39/proposal-well-formed-stringify
	  _export({ target: 'JSON', stat: true, forced: FORCED$3 }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var result = $stringify$1.apply(null, arguments);
	      return typeof result == 'string' ? result.replace(re, fix) : result;
	    }
	  });
	}

	if (!path.JSON) path.JSON = { stringify: JSON.stringify };

	// eslint-disable-next-line no-unused-vars
	var stringify = function stringify(it, replacer, space) {
	  return path.JSON.stringify.apply(null, arguments);
	};

	var stringify$1 = stringify;

	var stringify$2 = stringify$1;

	var EPSG_4326 = 'EPSG:4326';
	var EPSG_3857 = 'EPSG:3857';
	/**
	 * @type {number} Default map max zoom
	 */

	var MAX_ZOOM = 28;
	/**
	 * @type {number} Default map min zoom
	 */

	var MIN_ZOOM = 0;
	/**
	 * @type {number} Default tile size
	 */

	var TILE_SIZE = 256;
	/**
	 * @type {string}
	 */

	var TILE_FORMAT = 'png';
	/**
	 * @type {number} Default zoom factor
	 */

	var ZOOM_FACTOR = 2;
	/**
	 * @type {number}
	 */

	var CACHE_SIZE = 2048;
	/**
	 * @type {number}
	 */

	var PIXEL_RATIO = 1;
	/**
	 * @type {string}
	 */

	var CROSS_ORIGIN = 'anonymous';
	/**
	 * @type {number}
	 */

	var REPROJ_ERR_THRESHOLD = 0.5;
	/**
	 * @type {number} Earth radius in meters
	 */

	var EARTH_RADIUS = 6378137;
	var RENDERER_TYPE = {
	  CANVAS: 'canvas',
	  WEBGL: 'webgl'
	};
	var GEOMETRY_TYPE = {
	  POINT: 'Point',
	  LINE_STRING: 'LineString',
	  POLYGON: 'Polygon',
	  MULTI_POINT: 'MultiPoint',
	  MULTI_LINE_STRING: 'MultiLineString',
	  MULTI_POLYGON: 'MultiPolygon',
	  GEOMETRY_COLLECTION: 'GeometryCollection',
	  CIRCLE: 'Circle'
	};
	var EXTENT_CORNER = {
	  BOTTOM_LEFT: 'bottom-left',
	  BOTTOM_RIGHT: 'bottom-right',
	  TOP_LEFT: 'top-left',
	  TOP_RIGHT: 'top-right'
	};
	var PROJ_UNIT = {
	  DEGREES: 'degrees',
	  FEET: 'ft',
	  METERS: 'm',
	  PIXELS: 'pixels',
	  TILE_PIXELS: 'tile-pixels',
	  USFEET: 'us-ft'
	};
	var OVERLAY_POSITIONING = {
	  BOTTOM_LEFT: 'bottom-left',
	  BOTTOM_CENTER: 'bottom-center',
	  BOTTOM_RIGHT: 'bottom-right',
	  CENTER_LEFT: 'center-left',
	  CENTER_CENTER: 'center-center',
	  CENTER_RIGHT: 'center-right',
	  TOP_LEFT: 'top-left',
	  TOP_CENTER: 'top-center',
	  TOP_RIGHT: 'top-right'
	};
	/**
	 * @type {string} Default WMS version
	 */

	var WMS_VERSION = '1.3.0';
	var WMTS_VERSION = '1.0.0';
	var WMTS_REQUEST_ENCODING = 'KVP';
	var WMTS_FORMAT = 'image/jpeg';
	var LAYER_PROP = 'layer';
	var ARCGIS_EXTRA_PARAMS = ['FORMAT', 'F', 'LAYERS', 'LAYERDEFS', 'DYNAMICLAYERS', 'DPI', 'TRANSPARENT', 'TIME', 'LAYERTIMEOPTIONS', 'GDBVERSION', 'MAPSCALE', 'ROTATION', 'DATUMTRANSFORMATIONS', 'MAPRANGEVALUES', 'LAYERRANGEVALUES', 'LAYERPARAMETERVALUES', 'HISTORICMOMENT'];

	/**
	 * Extent extensions
	 */
	/**
	 * Create a new extent or update the provided extent.
	 * @param {number} minX Minimum X.
	 * @param {number} minY Minimum Y.
	 * @param {number} maxX Maximum X.
	 * @param {number} maxY Maximum Y.
	 * @param {Extent=} extent Destination extent.
	 * @return {Extent} Extent.
	 * @see https://github.com/openlayers/openlayers/blob/master/src/ol/extent.js#L208
	 */

	function createOrUpdateExtent(minX, minY, maxX, maxY, extent$$1) {
	  if (extent$$1) {
	    extent$$1[0] = minX;
	    extent$$1[1] = minY;
	    extent$$1[2] = maxX;
	    extent$$1[3] = maxY;
	    return extent$$1;
	  } else {
	    return [minX, minY, maxX, maxY];
	  }
	}
	/**
	 * Get a corner coordinate of an extent.
	 * @param {Extent|number[]} extent Extent.
	 * @param {string} corner Corner.
	 * @return {Coordinate} Corner coordinate.
	 * @see https://github.com/openlayers/openlayers/blob/master/src/ol/extent.js#L482
	 */

	function getExtentCorner(extent$$1, corner) {
	  var coordinate;

	  if (corner === EXTENT_CORNER.BOTTOM_LEFT) {
	    coordinate = extent.getBottomLeft(extent$$1);
	  } else if (corner === EXTENT_CORNER.BOTTOM_RIGHT) {
	    coordinate = extent.getBottomRight(extent$$1);
	  } else if (corner === EXTENT_CORNER.TOP_LEFT) {
	    coordinate = extent.getTopLeft(extent$$1);
	  } else if (corner === EXTENT_CORNER.TOP_RIGHT) {
	    coordinate = extent.getTopRight(extent$$1);
	  } else {
	    throw new Error('Invalid corner');
	  }

	  return coordinate;
	}
	/**
	 * Generate a tile grid extent from a projection.  If the projection has an
	 * extent, it is used.  If not, a global extent is assumed.
	 * @param {Projection} projection Projection.
	 * @return {Extent} Extent.
	 * @see https://github.com/openlayers/openlayers/blob/master/src/ol/tilegrid.js#L148
	 */

	function createExtentFromProjection(projection) {
	  projection = proj.get(projection);
	  var extent$$1 = projection.getExtent();

	  if (!extent$$1) {
	    var half = 180 * Units.METERS_PER_UNIT[PROJ_UNIT.DEGREES] / projection.getMetersPerUnit();
	    extent$$1 = createOrUpdateExtent(-half, -half, half, half);
	  }

	  return extent$$1;
	}

	var rngBrowser = createCommonjsModule(function (module) {
	// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection

	// getRandomValues needs to be invoked in a context where "this" is a Crypto
	// implementation. Also, find the complete implementation of crypto on IE11.
	var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
	                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

	if (getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

	  module.exports = function whatwgRNG() {
	    getRandomValues(rnds8);
	    return rnds8;
	  };
	} else {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var rnds = new Array(16);

	  module.exports = function mathRNG() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}
	});

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
	  return ([
	    bth[buf[i++]], bth[buf[i++]],
	    bth[buf[i++]], bth[buf[i++]], '-',
	    bth[buf[i++]], bth[buf[i++]], '-',
	    bth[buf[i++]], bth[buf[i++]], '-',
	    bth[buf[i++]], bth[buf[i++]], '-',
	    bth[buf[i++]], bth[buf[i++]],
	    bth[buf[i++]], bth[buf[i++]],
	    bth[buf[i++]], bth[buf[i++]]
	  ]).join('');
	}

	var bytesToUuid_1 = bytesToUuid;

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options === 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || rngBrowser)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || bytesToUuid_1(rnds);
	}

	var v4_1 = v4;

	function ownKeys$1(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$1(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$1(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	/**
	 * @param {Object|Vue|Feature|string|number} feature
	 * @return {string|number}
	 * @throws {Error}
	 */

	function getFeatureId(feature) {
	  if (isPlainObject(feature) || feature instanceof Vue) {
	    return feature.id;
	  } else if (feature instanceof Feature) {
	    return feature.getId();
	  } else if (isString(feature) || isNumber(feature)) {
	    return feature;
	  }

	  throw new Error('Illegal feature format');
	}
	/**
	 * @param {Feature|Vue|Object} feature
	 * @param {string} featureId
	 * @returns {Feature|Vue|Object}
	 */

	function setFeatureId(feature, featureId) {
	  if (isPlainObject(feature) || feature instanceof Vue) {
	    feature.id = featureId;
	    return feature;
	  } else if (feature instanceof Feature) {
	    feature.setId(featureId);
	    return feature;
	  }

	  throw new Error('Illegal feature format');
	}
	/**
	 * @param {Feature} feature
	 * @param {string|undefined} defaultFeatureId
	 * @returns {Feature}
	 */

	function initializeFeature(feature, defaultFeatureId) {
	  if (getFeatureId(feature) == null) {
	    setFeatureId(feature, defaultFeatureId || v4_1());
	  }

	  return feature;
	}
	/**
	 * @param {Feature} destFeature
	 * @param {Feature} srcFeature
	 * @returns {Feature}
	 */

	function mergeFeatures(destFeature, srcFeature) {
	  destFeature.setProperties(_objectSpread({}, srcFeature.getProperties()));
	  destFeature.setGeometry(srcFeature.getGeometry().clone());
	  destFeature.setStyle(srcFeature.getStyle() != null ? srcFeature.getStyle().clone() : undefined);
	  return destFeature;
	}

	var slice$3 = [].slice;
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!(argsLength in factories)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind
	var functionBind = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = slice$3.call(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = partArgs.concat(slice$3.call(arguments));
	    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
	  };
	  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
	  return boundFunction;
	};

	var nativeConstruct = getBuiltIn('Reflect', 'construct');

	// `Reflect.construct` method
	// https://tc39.github.io/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  nativeConstruct(function () { /* empty */ });
	});
	var FORCED$4 = NEW_TARGET_BUG || ARGS_BUG;

	_export({ target: 'Reflect', stat: true, forced: FORCED$4, sham: FORCED$4 }, {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (functionBind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = objectCreate(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

	var construct$1 = path.Reflect.construct;

	var construct$2 = construct$1;

	var construct$3 = construct$2;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;

	    defineProperty$6(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var getOwnPropertyDescriptor$4 = getOwnPropertyDescriptor_1;

	var getOwnPropertyDescriptor$5 = getOwnPropertyDescriptor$4;

	// `Reflect.get` method
	// https://tc39.github.io/ecma262/#sec-reflect.get
	function get$2(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var descriptor, prototype;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (descriptor = objectGetOwnPropertyDescriptor.f(target, propertyKey)) return has(descriptor, 'value')
	    ? descriptor.value
	    : descriptor.get === undefined
	      ? undefined
	      : descriptor.get.call(receiver);
	  if (isObject(prototype = objectGetPrototypeOf(target))) return get$2(prototype, propertyKey, receiver);
	}

	_export({ target: 'Reflect', stat: true }, {
	  get: get$2
	});

	var get$3 = path.Reflect.get;

	var get$4 = get$3;

	var get$5 = get$4;

	var getPrototypeOf$3 = getPrototypeOf;

	var getPrototypeOf$4 = getPrototypeOf$3;

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	_export({ target: 'Object', stat: true }, {
	  setPrototypeOf: objectSetPrototypeOf
	});

	var setPrototypeOf = path.Object.setPrototypeOf;

	var setPrototypeOf$1 = setPrototypeOf;

	var setPrototypeOf$2 = setPrototypeOf$1;

	function _getPrototypeOf(o) {
	  _getPrototypeOf = setPrototypeOf$2 ? getPrototypeOf$4 : function _getPrototypeOf(o) {
	    return o.__proto__ || getPrototypeOf$4(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && get$5) {
	    _get = get$5;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);
	      if (!base) return;

	      var desc = getOwnPropertyDescriptor$5(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	var create$3 = create;

	var create$4 = create$3;

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = setPrototypeOf$2 || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = create$4(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	/**
	 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
	 */
	var earthRadius = 6371008.8;

	/**
	 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
	 */
	var factors = {
	    meters: earthRadius,
	    metres: earthRadius,
	    millimeters: earthRadius * 1000,
	    millimetres: earthRadius * 1000,
	    centimeters: earthRadius * 100,
	    centimetres: earthRadius * 100,
	    kilometers: earthRadius / 1000,
	    kilometres: earthRadius / 1000,
	    miles: earthRadius / 1609.344,
	    nauticalmiles: earthRadius / 1852,
	    inches: earthRadius * 39.370,
	    yards: earthRadius / 1.0936,
	    feet: earthRadius * 3.28084,
	    radians: 1,
	    degrees: earthRadius / 111325,
	};

	/**
	 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
	 *
	 * @name feature
	 * @param {Geometry} geometry input geometry
	 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
	 * @param {Object} [options={}] Optional Parameters
	 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
	 * @param {string|number} [options.id] Identifier associated with the Feature
	 * @returns {Feature} a GeoJSON Feature
	 * @example
	 * var geometry = {
	 *   "type": "Point",
	 *   "coordinates": [110, 50]
	 * };
	 *
	 * var feature = turf.feature(geometry);
	 *
	 * //=feature
	 */
	function feature(geometry, properties, options) {
	    // Optional Parameters
	    options = options || {};
	    if (!isObject$1(options)) throw new Error('options is invalid');
	    var bbox = options.bbox;
	    var id = options.id;

	    // Validation
	    if (geometry === undefined) throw new Error('geometry is required');
	    if (properties && properties.constructor !== Object) throw new Error('properties must be an Object');
	    if (bbox) validateBBox(bbox);
	    if (id) validateId(id);

	    // Main
	    var feat = {type: 'Feature'};
	    if (id) feat.id = id;
	    if (bbox) feat.bbox = bbox;
	    feat.properties = properties || {};
	    feat.geometry = geometry;
	    return feat;
	}

	/**
	 * Creates a {@link Point} {@link Feature} from a Position.
	 *
	 * @name point
	 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
	 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
	 * @param {Object} [options={}] Optional Parameters
	 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
	 * @param {string|number} [options.id] Identifier associated with the Feature
	 * @returns {Feature<Point>} a Point feature
	 * @example
	 * var point = turf.point([-75.343, 39.984]);
	 *
	 * //=point
	 */
	function point(coordinates, properties, options) {
	    if (!coordinates) throw new Error('coordinates is required');
	    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');
	    if (coordinates.length < 2) throw new Error('coordinates must be at least 2 numbers long');
	    if (!isNumber$1(coordinates[0]) || !isNumber$1(coordinates[1])) throw new Error('coordinates must contain numbers');

	    return feature({
	        type: 'Point',
	        coordinates: coordinates
	    }, properties, options);
	}

	/**
	 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
	 *
	 * @name featureCollection
	 * @param {Feature[]} features input features
	 * @param {Object} [options={}] Optional Parameters
	 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
	 * @param {string|number} [options.id] Identifier associated with the Feature
	 * @returns {FeatureCollection} FeatureCollection of Features
	 * @example
	 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
	 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
	 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
	 *
	 * var collection = turf.featureCollection([
	 *   locationA,
	 *   locationB,
	 *   locationC
	 * ]);
	 *
	 * //=collection
	 */
	function featureCollection(features, options) {
	    // Optional Parameters
	    options = options || {};
	    if (!isObject$1(options)) throw new Error('options is invalid');
	    var bbox = options.bbox;
	    var id = options.id;

	    // Validation
	    if (!features) throw new Error('No features passed');
	    if (!Array.isArray(features)) throw new Error('features must be an Array');
	    if (bbox) validateBBox(bbox);
	    if (id) validateId(id);

	    // Main
	    var fc = {type: 'FeatureCollection'};
	    if (id) fc.id = id;
	    if (bbox) fc.bbox = bbox;
	    fc.features = features;
	    return fc;
	}

	/**
	 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
	 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
	 *
	 * @name radiansToLength
	 * @param {number} radians in radians across the sphere
	 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
	 * @returns {number} distance
	 */
	function radiansToLength(radians, units) {
	    if (radians === undefined || radians === null) throw new Error('radians is required');

	    if (units && typeof units !== 'string') throw new Error('units must be a string');
	    var factor = factors[units || 'kilometers'];
	    if (!factor) throw new Error(units + ' units is invalid');
	    return radians * factor;
	}

	/**
	 * Converts an angle in degrees to radians
	 *
	 * @name degreesToRadians
	 * @param {number} degrees angle between 0 and 360 degrees
	 * @returns {number} angle in radians
	 */
	function degreesToRadians(degrees) {
	    if (degrees === null || degrees === undefined) throw new Error('degrees is required');

	    var radians = degrees % 360;
	    return radians * Math.PI / 180;
	}

	/**
	 * isNumber
	 *
	 * @param {*} num Number to validate
	 * @returns {boolean} true/false
	 * @example
	 * turf.isNumber(123)
	 * //=true
	 * turf.isNumber('foo')
	 * //=false
	 */
	function isNumber$1(num) {
	    return !isNaN(num) && num !== null && !Array.isArray(num);
	}

	/**
	 * isObject
	 *
	 * @param {*} input variable to validate
	 * @returns {boolean} true/false
	 * @example
	 * turf.isObject({elevation: 10})
	 * //=true
	 * turf.isObject('foo')
	 * //=false
	 */
	function isObject$1(input) {
	    return (!!input) && (input.constructor === Object);
	}

	/**
	 * Validate BBox
	 *
	 * @private
	 * @param {Array<number>} bbox BBox to validate
	 * @returns {void}
	 * @throws Error if BBox is not valid
	 * @example
	 * validateBBox([-180, -40, 110, 50])
	 * //=OK
	 * validateBBox([-180, -40])
	 * //=Error
	 * validateBBox('Foo')
	 * //=Error
	 * validateBBox(5)
	 * //=Error
	 * validateBBox(null)
	 * //=Error
	 * validateBBox(undefined)
	 * //=Error
	 */
	function validateBBox(bbox) {
	    if (!bbox) throw new Error('bbox is required');
	    if (!Array.isArray(bbox)) throw new Error('bbox must be an Array');
	    if (bbox.length !== 4 && bbox.length !== 6) throw new Error('bbox must be an Array of 4 or 6 numbers');
	    bbox.forEach(function (num) {
	        if (!isNumber$1(num)) throw new Error('bbox must only contain numbers');
	    });
	}

	/**
	 * Validate Id
	 *
	 * @private
	 * @param {string|number} id Id to validate
	 * @returns {void}
	 * @throws Error if Id is not valid
	 * @example
	 * validateId([-180, -40, 110, 50])
	 * //=Error
	 * validateId([-180, -40])
	 * //=Error
	 * validateId('Foo')
	 * //=OK
	 * validateId(5)
	 * //=OK
	 * validateId(null)
	 * //=Error
	 * validateId(undefined)
	 * //=Error
	 */
	function validateId(id) {
	    if (!id) throw new Error('id is required');
	    if (['string', 'number'].indexOf(typeof id) === -1) throw new Error('id must be a number or a string');
	}

	/**
	 * Callback for coordEach
	 *
	 * @callback coordEachCallback
	 * @param {Array<number>} currentCoord The current coordinate being processed.
	 * @param {number} coordIndex The current index of the coordinate being processed.
	 * @param {number} featureIndex The current index of the Feature being processed.
	 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
	 * @param {number} geometryIndex The current index of the Geometry being processed.
	 */

	/**
	 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
	 *
	 * @name coordEach
	 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
	 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
	 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @returns {void}
	 * @example
	 * var features = turf.featureCollection([
	 *   turf.point([26, 37], {"foo": "bar"}),
	 *   turf.point([36, 53], {"hello": "world"})
	 * ]);
	 *
	 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
	 *   //=currentCoord
	 *   //=coordIndex
	 *   //=featureIndex
	 *   //=multiFeatureIndex
	 *   //=geometryIndex
	 * });
	 */
	function coordEach(geojson, callback, excludeWrapCoord) {
	    // Handles null Geometry -- Skips this GeoJSON
	    if (geojson === null) return;
	    var j, k, l, geometry$$1, stopG, coords,
	        geometryMaybeCollection,
	        wrapShrink = 0,
	        coordIndex = 0,
	        isGeometryCollection,
	        type = geojson.type,
	        isFeatureCollection = type === 'FeatureCollection',
	        isFeature = type === 'Feature',
	        stop = isFeatureCollection ? geojson.features.length : 1;

	    // This logic may look a little weird. The reason why it is that way
	    // is because it's trying to be fast. GeoJSON supports multiple kinds
	    // of objects at its root: FeatureCollection, Features, Geometries.
	    // This function has the responsibility of handling all of them, and that
	    // means that some of the `for` loops you see below actually just don't apply
	    // to certain inputs. For instance, if you give this just a
	    // Point geometry, then both loops are short-circuited and all we do
	    // is gradually rename the input until it's called 'geometry'.
	    //
	    // This also aims to allocate as few resources as possible: just a
	    // few numbers and booleans, rather than any temporary arrays as would
	    // be required with the normalization approach.
	    for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
	        geometryMaybeCollection = (isFeatureCollection ? geojson.features[featureIndex].geometry :
	            (isFeature ? geojson.geometry : geojson));
	        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
	        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

	        for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
	            var multiFeatureIndex = 0;
	            var geometryIndex = 0;
	            geometry$$1 = isGeometryCollection ?
	                geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;

	            // Handles null Geometry -- Skips this geometry
	            if (geometry$$1 === null) continue;
	            coords = geometry$$1.coordinates;
	            var geomType = geometry$$1.type;

	            wrapShrink = (excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon')) ? 1 : 0;

	            switch (geomType) {
	            case null:
	                break;
	            case 'Point':
	                if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
	                coordIndex++;
	                multiFeatureIndex++;
	                break;
	            case 'LineString':
	            case 'MultiPoint':
	                for (j = 0; j < coords.length; j++) {
	                    if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
	                    coordIndex++;
	                    if (geomType === 'MultiPoint') multiFeatureIndex++;
	                }
	                if (geomType === 'LineString') multiFeatureIndex++;
	                break;
	            case 'Polygon':
	            case 'MultiLineString':
	                for (j = 0; j < coords.length; j++) {
	                    for (k = 0; k < coords[j].length - wrapShrink; k++) {
	                        if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
	                        coordIndex++;
	                    }
	                    if (geomType === 'MultiLineString') multiFeatureIndex++;
	                    if (geomType === 'Polygon') geometryIndex++;
	                }
	                if (geomType === 'Polygon') multiFeatureIndex++;
	                break;
	            case 'MultiPolygon':
	                for (j = 0; j < coords.length; j++) {
	                    if (geomType === 'MultiPolygon') geometryIndex = 0;
	                    for (k = 0; k < coords[j].length; k++) {
	                        for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
	                            if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
	                            coordIndex++;
	                        }
	                        geometryIndex++;
	                    }
	                    multiFeatureIndex++;
	                }
	                break;
	            case 'GeometryCollection':
	                for (j = 0; j < geometry$$1.geometries.length; j++)
	                    if (coordEach(geometry$$1.geometries[j], callback, excludeWrapCoord) === false) return false;
	                break;
	            default:
	                throw new Error('Unknown Geometry Type');
	            }
	        }
	    }
	}

	/**
	 * Callback for featureEach
	 *
	 * @callback featureEachCallback
	 * @param {Feature<any>} currentFeature The current Feature being processed.
	 * @param {number} featureIndex The current index of the Feature being processed.
	 */

	/**
	 * Iterate over features in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @name featureEach
	 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
	 * @param {Function} callback a method that takes (currentFeature, featureIndex)
	 * @returns {void}
	 * @example
	 * var features = turf.featureCollection([
	 *   turf.point([26, 37], {foo: 'bar'}),
	 *   turf.point([36, 53], {hello: 'world'})
	 * ]);
	 *
	 * turf.featureEach(features, function (currentFeature, featureIndex) {
	 *   //=currentFeature
	 *   //=featureIndex
	 * });
	 */
	function featureEach(geojson, callback) {
	    if (geojson.type === 'Feature') {
	        callback(geojson, 0);
	    } else if (geojson.type === 'FeatureCollection') {
	        for (var i = 0; i < geojson.features.length; i++) {
	            if (callback(geojson.features[i], i) === false) break;
	        }
	    }
	}

	/**
	 * Takes a feature or set of features and returns all positions as {@link Point|points}.
	 *
	 * @name explode
	 * @param {GeoJSON} geojson input features
	 * @returns {FeatureCollection<point>} points representing the exploded input features
	 * @throws {Error} if it encounters an unknown geometry type
	 * @example
	 * var polygon = turf.polygon([[[-81, 41], [-88, 36], [-84, 31], [-80, 33], [-77, 39], [-81, 41]]]);
	 *
	 * var explode = turf.explode(polygon);
	 *
	 * //addToMap
	 * var addToMap = [polygon, explode]
	 */
	function explode(geojson) {
	    var points$$1 = [];
	    if (geojson.type === 'FeatureCollection') {
	        featureEach(geojson, function (feature$$1) {
	            coordEach(feature$$1, function (coord) {
	                points$$1.push(point(coord, feature$$1.properties));
	            });
	        });
	    } else {
	        coordEach(geojson, function (coord) {
	            points$$1.push(point(coord, geojson.properties));
	        });
	    }
	    return featureCollection(points$$1);
	}

	/**
	 * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
	 *
	 * @name bbox
	 * @param {GeoJSON} geojson any GeoJSON object
	 * @returns {BBox} bbox extent in [minX, minY, maxX, maxY] order
	 * @example
	 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]]);
	 * var bbox = turf.bbox(line);
	 * var bboxPolygon = turf.bboxPolygon(bbox);
	 *
	 * //addToMap
	 * var addToMap = [line, bboxPolygon]
	 */
	function bbox(geojson) {
	    var BBox = [Infinity, Infinity, -Infinity, -Infinity];
	    coordEach(geojson, function (coord) {
	        if (BBox[0] > coord[0]) BBox[0] = coord[0];
	        if (BBox[1] > coord[1]) BBox[1] = coord[1];
	        if (BBox[2] < coord[0]) BBox[2] = coord[0];
	        if (BBox[3] < coord[1]) BBox[3] = coord[1];
	    });
	    return BBox;
	}

	/**
	 * Takes a {@link Feature} or {@link FeatureCollection} and returns the absolute center point of all features.
	 *
	 * @name center
	 * @param {GeoJSON} geojson GeoJSON to be centered
	 * @param {Object} [options={}] Optional parameters
	 * @param {Object} [options.properties={}] an Object that is used as the {@link Feature}'s properties
	 * @returns {Feature<Point>} a Point feature at the absolute center point of all input features
	 * @example
	 * var features = turf.featureCollection([
	 *   turf.point( [-97.522259, 35.4691]),
	 *   turf.point( [-97.502754, 35.463455]),
	 *   turf.point( [-97.508269, 35.463245])
	 * ]);
	 *
	 * var center = turf.center(features);
	 *
	 * //addToMap
	 * var addToMap = [features, center]
	 * center.properties['marker-size'] = 'large';
	 * center.properties['marker-color'] = '#000';
	 */
	function center(geojson, options) {
	    // Optional parameters
	    options = options || {};
	    if (!isObject$1(options)) throw new Error('options is invalid');
	    var properties = options.properties;

	    // Input validation
	    if (!geojson) throw new Error('geojson is required');

	    var ext = bbox(geojson);
	    var x = (ext[0] + ext[2]) / 2;
	    var y = (ext[1] + ext[3]) / 2;
	    return point([x, y], properties);
	}

	/**
	 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
	 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
	 *
	 * @name clone
	 * @param {GeoJSON} geojson GeoJSON Object
	 * @returns {GeoJSON} cloned GeoJSON Object
	 * @example
	 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
	 *
	 * var lineCloned = turf.clone(line);
	 */
	function clone(geojson) {
	    if (!geojson) throw new Error('geojson is required');

	    switch (geojson.type) {
	    case 'Feature':
	        return cloneFeature(geojson);
	    case 'FeatureCollection':
	        return cloneFeatureCollection(geojson);
	    case 'Point':
	    case 'LineString':
	    case 'Polygon':
	    case 'MultiPoint':
	    case 'MultiLineString':
	    case 'MultiPolygon':
	    case 'GeometryCollection':
	        return cloneGeometry(geojson);
	    default:
	        throw new Error('unknown GeoJSON type');
	    }
	}

	/**
	 * Clone Feature
	 *
	 * @private
	 * @param {Feature<any>} geojson GeoJSON Feature
	 * @returns {Feature<any>} cloned Feature
	 */
	function cloneFeature(geojson) {
	    var cloned = {type: 'Feature'};
	    // Preserve Foreign Members
	    Object.keys(geojson).forEach(function (key) {
	        switch (key) {
	        case 'type':
	        case 'properties':
	        case 'geometry':
	            return;
	        default:
	            cloned[key] = geojson[key];
	        }
	    });
	    // Add properties & geometry last
	    cloned.properties = cloneProperties(geojson.properties);
	    cloned.geometry = cloneGeometry(geojson.geometry);
	    return cloned;
	}

	/**
	 * Clone Properties
	 *
	 * @private
	 * @param {Object} properties GeoJSON Properties
	 * @returns {Object} cloned Properties
	 */
	function cloneProperties(properties) {
	    var cloned = {};
	    if (!properties) return cloned;
	    Object.keys(properties).forEach(function (key) {
	        var value = properties[key];
	        if (typeof value === 'object') {
	            if (value === null) {
	                // handle null
	                cloned[key] = null;
	            } else if (value.length) {
	                // handle Array
	                cloned[key] = value.map(function (item) {
	                    return item;
	                });
	            } else {
	                // handle generic Object
	                cloned[key] = cloneProperties(value);
	            }
	        } else cloned[key] = value;
	    });
	    return cloned;
	}

	/**
	 * Clone Feature Collection
	 *
	 * @private
	 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
	 * @returns {FeatureCollection<any>} cloned Feature Collection
	 */
	function cloneFeatureCollection(geojson) {
	    var cloned = {type: 'FeatureCollection'};

	    // Preserve Foreign Members
	    Object.keys(geojson).forEach(function (key) {
	        switch (key) {
	        case 'type':
	        case 'features':
	            return;
	        default:
	            cloned[key] = geojson[key];
	        }
	    });
	    // Add features
	    cloned.features = geojson.features.map(function (feature) {
	        return cloneFeature(feature);
	    });
	    return cloned;
	}

	/**
	 * Clone Geometry
	 *
	 * @private
	 * @param {Geometry<any>} geometry GeoJSON Geometry
	 * @returns {Geometry<any>} cloned Geometry
	 */
	function cloneGeometry(geometry) {
	    var geom = {type: geometry.type};
	    if (geometry.bbox) geom.bbox = geometry.bbox;

	    if (geometry.type === 'GeometryCollection') {
	        geom.geometries = geometry.geometries.map(function (geom) {
	            return cloneGeometry(geom);
	        });
	        return geom;
	    }
	    geom.coordinates = deepSlice(geometry.coordinates);
	    return geom;
	}

	/**
	 * Deep Slice coordinates
	 *
	 * @private
	 * @param {Coordinates} coords Coordinates
	 * @returns {Coordinates} all coordinates sliced
	 */
	function deepSlice(coords) {
	    if (typeof coords[0] !== 'object') { return coords.slice(); }
	    return coords.map(function (coord) {
	        return deepSlice(coord);
	    });
	}

	/**
	 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
	 *
	 * @name getCoord
	 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
	 * @returns {Array<number>} coordinates
	 * @example
	 * var pt = turf.point([10, 10]);
	 *
	 * var coord = turf.getCoord(pt);
	 * //= [10, 10]
	 */
	function getCoord(coord) {
	    if (!coord) throw new Error('coord is required');
	    if (coord.type === 'Feature' && coord.geometry !== null && coord.geometry.type === 'Point') return coord.geometry.coordinates;
	    if (coord.type === 'Point') return coord.coordinates;
	    if (Array.isArray(coord) && coord.length >= 2 && coord[0].length === undefined && coord[1].length === undefined) return coord;

	    throw new Error('coord must be GeoJSON Point or an Array of numbers');
	}

	/**
	 * Unwrap coordinates from a Feature, Geometry Object or an Array
	 *
	 * @name getCoords
	 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
	 * @returns {Array<any>} coordinates
	 * @example
	 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
	 *
	 * var coords = turf.getCoords(poly);
	 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
	 */
	function getCoords(coords) {
	    if (!coords) throw new Error('coords is required');

	    // Feature
	    if (coords.type === 'Feature' && coords.geometry !== null) return coords.geometry.coordinates;

	    // Geometry
	    if (coords.coordinates) return coords.coordinates;

	    // Array of numbers
	    if (Array.isArray(coords)) return coords;

	    throw new Error('coords must be GeoJSON Feature, Geometry Object or an Array');
	}

	//http://en.wikipedia.org/wiki/Haversine_formula
	//http://www.movable-type.co.uk/scripts/latlong.html

	/**
	 * Calculates the distance between two {@link Point|points} in degrees, radians,
	 * miles, or kilometers. This uses the
	 * [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula)
	 * to account for global curvature.
	 *
	 * @name distance
	 * @param {Coord} from origin point
	 * @param {Coord} to destination point
	 * @param {Object} [options={}] Optional parameters
	 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
	 * @returns {number} distance between the two points
	 * @example
	 * var from = turf.point([-75.343, 39.984]);
	 * var to = turf.point([-75.534, 39.123]);
	 * var options = {units: 'miles'};
	 *
	 * var distance = turf.distance(from, to, options);
	 *
	 * //addToMap
	 * var addToMap = [from, to];
	 * from.properties.distance = distance;
	 * to.properties.distance = distance;
	 */
	function distance(from, to, options) {
	    // Optional parameters
	    options = options || {};
	    if (!isObject$1(options)) throw new Error('options is invalid');
	    var units = options.units;

	    var coordinates1 = getCoord(from);
	    var coordinates2 = getCoord(to);
	    var dLat = degreesToRadians((coordinates2[1] - coordinates1[1]));
	    var dLon = degreesToRadians((coordinates2[0] - coordinates1[0]));
	    var lat1 = degreesToRadians(coordinates1[1]);
	    var lat2 = degreesToRadians(coordinates2[1]);

	    var a = Math.pow(Math.sin(dLat / 2), 2) +
	          Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);

	    return radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), units);
	}

	/**
	 * Takes a reference {@link Point|point} and a FeatureCollection of Features
	 * with Point geometries and returns the
	 * point from the FeatureCollection closest to the reference. This calculation
	 * is geodesic.
	 *
	 * @name nearestPoint
	 * @param {Coord} targetPoint the reference point
	 * @param {FeatureCollection<Point>} points against input point set
	 * @returns {Feature<Point>} the closest point in the set to the reference point
	 * @example
	 * var targetPoint = turf.point([28.965797, 41.010086], {"marker-color": "#0F0"});
	 * var points = turf.featureCollection([
	 *     turf.point([28.973865, 41.011122]),
	 *     turf.point([28.948459, 41.024204]),
	 *     turf.point([28.938674, 41.013324])
	 * ]);
	 *
	 * var nearest = turf.nearestPoint(targetPoint, points);
	 *
	 * //addToMap
	 * var addToMap = [targetPoint, points, nearest];
	 * nearest.properties['marker-color'] = '#F00';
	 */
	function nearestPoint(targetPoint, points) {
	    // Input validation
	    if (!targetPoint) throw new Error('targetPoint is required');
	    if (!points) throw new Error('points is required');

	    var nearest;
	    var minDist = Infinity;
	    featureEach(points, function (pt, featureIndex) {
	        var distanceToPoint = distance(targetPoint, pt);
	        if (distanceToPoint < minDist) {
	            nearest = clone(pt);
	            nearest.properties.featureIndex = featureIndex;
	            nearest.properties.distanceToPoint = distanceToPoint;
	            minDist = distanceToPoint;
	        }

	    });
	    return nearest;
	}

	// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
	// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
	// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

	/**
	 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point resides inside the polygon. The polygon can
	 * be convex or concave. The function accounts for holes.
	 *
	 * @name booleanPointInPolygon
	 * @param {Coord} point input point
	 * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
	 * @param {Object} [options={}] Optional parameters
	 * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if the point is inside the polygon otherwise false.
	 * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
	 * @example
	 * var pt = turf.point([-77, 44]);
	 * var poly = turf.polygon([[
	 *   [-81, 41],
	 *   [-81, 47],
	 *   [-72, 47],
	 *   [-72, 41],
	 *   [-81, 41]
	 * ]]);
	 *
	 * turf.booleanPointInPolygon(pt, poly);
	 * //= true
	 */
	function booleanPointInPolygon(point, polygon, options) {
	    // Optional parameters
	    options = options || {};
	    if (typeof options !== 'object') throw new Error('options is invalid');
	    var ignoreBoundary = options.ignoreBoundary;

	    // validation
	    if (!point) throw new Error('point is required');
	    if (!polygon) throw new Error('polygon is required');

	    var pt = getCoord(point);
	    var polys = getCoords(polygon);
	    var type = (polygon.geometry) ? polygon.geometry.type : polygon.type;
	    var bbox = polygon.bbox;

	    // Quick elimination if point is not inside bbox
	    if (bbox && inBBox(pt, bbox) === false) return false;

	    // normalize to multipolygon
	    if (type === 'Polygon') polys = [polys];

	    for (var i = 0, insidePoly = false; i < polys.length && !insidePoly; i++) {
	        // check if it is in the outer ring first
	        if (inRing(pt, polys[i][0], ignoreBoundary)) {
	            var inHole = false;
	            var k = 1;
	            // check for the point in any of the holes
	            while (k < polys[i].length && !inHole) {
	                if (inRing(pt, polys[i][k], !ignoreBoundary)) {
	                    inHole = true;
	                }
	                k++;
	            }
	            if (!inHole) insidePoly = true;
	        }
	    }
	    return insidePoly;
	}

	/**
	 * inRing
	 *
	 * @private
	 * @param {Array<number>} pt [x,y]
	 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
	 * @param {boolean} ignoreBoundary ignoreBoundary
	 * @returns {boolean} inRing
	 */
	function inRing(pt, ring, ignoreBoundary) {
	    var isInside = false;
	    if (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) ring = ring.slice(0, ring.length - 1);

	    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
	        var xi = ring[i][0], yi = ring[i][1];
	        var xj = ring[j][0], yj = ring[j][1];
	        var onBoundary = (pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0) &&
	            ((xi - pt[0]) * (xj - pt[0]) <= 0) && ((yi - pt[1]) * (yj - pt[1]) <= 0);
	        if (onBoundary) return !ignoreBoundary;
	        var intersect = ((yi > pt[1]) !== (yj > pt[1])) &&
	        (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
	        if (intersect) isInside = !isInside;
	    }
	    return isInside;
	}

	/**
	 * inBBox
	 *
	 * @private
	 * @param {Position} pt point [x,y]
	 * @param {BBox} bbox BBox [west, south, east, north]
	 * @returns {boolean} true/false if point is inside BBox
	 */
	function inBBox(pt, bbox) {
	    return bbox[0] <= pt[0] &&
	           bbox[1] <= pt[1] &&
	           bbox[2] >= pt[0] &&
	           bbox[3] >= pt[1];
	}

	/**
	 * Takes a Feature or FeatureCollection and returns a {@link Point} guaranteed to be on the surface of the feature.
	 *
	 * * Given a {@link Polygon}, the point will be in the area of the polygon
	 * * Given a {@link LineString}, the point will be along the string
	 * * Given a {@link Point}, the point will the same as the input
	 *
	 * @name pointOnFeature
	 * @param {GeoJSON} geojson any Feature or FeatureCollection
	 * @returns {Feature<Point>} a point on the surface of `input`
	 * @example
	 * var polygon = turf.polygon([[
	 *   [116, -36],
	 *   [131, -32],
	 *   [146, -43],
	 *   [155, -25],
	 *   [133, -9],
	 *   [111, -22],
	 *   [116, -36]
	 * ]]);
	 *
	 * var pointOnPolygon = turf.pointOnFeature(polygon);
	 *
	 * //addToMap
	 * var addToMap = [polygon, pointOnPolygon];
	 */
	function pointOnFeature(geojson) {
	    // normalize
	    var fc = normalize$1(geojson);

	    // get centroid
	    var cent = center(fc);

	    // check to see if centroid is on surface
	    var onSurface = false;
	    var i = 0;
	    while (!onSurface && i < fc.features.length) {
	        var geom = fc.features[i].geometry;
	        var x, y, x1, y1, x2, y2, k;
	        var onLine = false;
	        if (geom.type === 'Point') {
	            if (cent.geometry.coordinates[0] === geom.coordinates[0] &&
	                cent.geometry.coordinates[1] === geom.coordinates[1]) {
	                onSurface = true;
	            }
	        } else if (geom.type === 'MultiPoint') {
	            var onMultiPoint = false;
	            k = 0;
	            while (!onMultiPoint && k < geom.coordinates.length) {
	                if (cent.geometry.coordinates[0] === geom.coordinates[k][0] &&
	          cent.geometry.coordinates[1] === geom.coordinates[k][1]) {
	                    onSurface = true;
	                    onMultiPoint = true;
	                }
	                k++;
	            }
	        } else if (geom.type === 'LineString') {
	            k = 0;
	            while (!onLine && k < geom.coordinates.length - 1) {
	                x = cent.geometry.coordinates[0];
	                y = cent.geometry.coordinates[1];
	                x1 = geom.coordinates[k][0];
	                y1 = geom.coordinates[k][1];
	                x2 = geom.coordinates[k + 1][0];
	                y2 = geom.coordinates[k + 1][1];
	                if (pointOnSegment(x, y, x1, y1, x2, y2)) {
	                    onLine = true;
	                    onSurface = true;
	                }
	                k++;
	            }
	        } else if (geom.type === 'MultiLineString') {
	            var j = 0;
	            while (j < geom.coordinates.length) {
	                onLine = false;
	                k = 0;
	                var line = geom.coordinates[j];
	                while (!onLine && k < line.length - 1) {
	                    x = cent.geometry.coordinates[0];
	                    y = cent.geometry.coordinates[1];
	                    x1 = line[k][0];
	                    y1 = line[k][1];
	                    x2 = line[k + 1][0];
	                    y2 = line[k + 1][1];
	                    if (pointOnSegment(x, y, x1, y1, x2, y2)) {
	                        onLine = true;
	                        onSurface = true;
	                    }
	                    k++;
	                }
	                j++;
	            }
	        } else if (geom.type === 'Polygon' || geom.type === 'MultiPolygon') {
	            if (booleanPointInPolygon(cent, geom)) {
	                onSurface = true;
	            }
	        }
	        i++;
	    }
	    if (onSurface) {
	        return cent;
	    } else {
	        var vertices = featureCollection([]);
	        for (i = 0; i < fc.features.length; i++) {
	            vertices.features = vertices.features.concat(explode(fc.features[i]).features);
	        }
	        // Remove distanceToPoint properties from nearestPoint()
	        return point(nearestPoint(cent, vertices).geometry.coordinates);
	    }
	}

	/**
	 * Normalizes any GeoJSON to a FeatureCollection
	 *
	 * @private
	 * @name normalize
	 * @param {GeoJSON} geojson Any GeoJSON
	 * @returns {FeatureCollection} FeatureCollection
	 */
	function normalize$1(geojson) {
	    if (geojson.type !== 'FeatureCollection') {
	        if (geojson.type !== 'Feature') {
	            return featureCollection([feature(geojson)]);
	        }
	        return featureCollection([geojson]);
	    }
	    return geojson;
	}

	function pointOnSegment(x, y, x1, y1, x2, y2) {
	    var ab = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
	    var ap = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
	    var pb = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
	    return ab === ap + pb;
	}

	/**
	 * @param {number|number[]} lonOrCoordinates
	 * @param {number} [lat]
	 * @return {Point}
	 */

	function createPointGeom(lonOrCoordinates, lat) {
	  var coordinates = isArray$3(lonOrCoordinates) ? lonOrCoordinates : [lonOrCoordinates, lat];
	  return new Point(coordinates);
	}
	/**
	 * @param {Array<number[]>} points
	 * @returns {LineString}
	 */

	function createLineGeom(points) {
	  return new LineString(points);
	}
	/**
	 * @param {Array<Array<number[]>>} rings
	 * @returns {Polygon}
	 */

	function createPolygonGeom(rings) {
	  return new Polygon__default(rings);
	}
	/**
	 * @param {Array<number[]>} points
	 * @returns {MultiPoint}
	 */

	function createMultiPointGeom(points) {
	  return new MultiPoint(points);
	}
	/**
	 * @param {Array<Array<number[]>>} lines
	 * @returns {MultiLineString}
	 */

	function createMultiLineGeom(lines) {
	  return new MultiLineString(lines);
	}
	/**
	 * @param {Array<Array<Array<number[]>>>} polygons
	 * @returns {MultiPolygon}
	 */

	function createMultiPolygonGeom(polygons) {
	  return new MultiPolygon(polygons);
	}
	/**
	 * @param {Geometry[]} geoms
	 * @returns {GeometryCollection}
	 */

	function createGeomCollection(geoms) {
	  return new GeometryCollection(geoms);
	}
	/**
	 * @param {Coordinate|number[]} center
	 * @param {number} radius
	 * @return {Polygon}
	 */

	function createCircularPolygon(center, radius) {
	  return Polygon.circular(center, radius);
	}
	/**
	 * @param {Geometry|Object} geom
	 * @return {boolean}
	 * @throws {Error}
	 */

	function isMultiGeom(geom) {
	  var multiTypes = [GEOMETRY_TYPE.MULTI_POINT, GEOMETRY_TYPE.MULTI_LINE_STRING, GEOMETRY_TYPE.MULTI_POLYGON, GEOMETRY_TYPE.GEOMETRY_COLLECTION];
	  return includes$4(multiTypes).call(multiTypes, geom.type || geom.getType());
	}
	/**
	 * @param {Geometry|Object} geom
	 * @return {SimpleGeometry|Object}
	 * @throws {Error}
	 */

	function toSimpleGeom(geom) {
	  if (geom instanceof Circle) {
	    geom = createPointGeom(geom.getCenter());
	  }

	  var type = geom.type || geom.getType();
	  var complexTypes = [GEOMETRY_TYPE.GEOMETRY_COLLECTION];

	  if (includes$4(complexTypes).call(complexTypes, type) === false) {
	    return geom;
	  }

	  return (geom.geometries || geom.getGeometries())[0];
	}
	/**
	 * @param {Geometry|Object} geom
	 * @return {Coordinate|undefined}
	 */

	function findPointOnSurface(geom) {
	  var simpleGeom = toSimpleGeom(geom);
	  var pointFeature = pointOnFeature({
	    type: simpleGeom.type || simpleGeom.getType(),
	    coordinates: simpleGeom.coordinates || simpleGeom.getCoordinates()
	  });

	  if (pointFeature && pointFeature.geometry) {
	    return pointFeature.geometry.coordinates;
	  }
	}
	function getGeometryId(geometry) {
	  if (geometry instanceof Vue) {
	    return geometry.id;
	  } else if (geometry instanceof Geometry) {
	    return geometry.get('id');
	  }

	  throw new Error('Illegal geometry argument');
	}
	function setGeometryId(geometry, geometryId) {
	  if (geometry instanceof Vue) {
	    geometry.id = geometryId;
	    return geometry;
	  } else if (geometry instanceof Geometry) {
	    geometry.set('id', geometryId);
	    return geometry;
	  }

	  throw new Error('Illegal geometry argument');
	}
	function initializeGeometry(geometry, defaultGeometryId) {
	  if (getGeometryId(geometry) == null) {
	    setGeometryId(geometry, defaultGeometryId || v4_1());
	  }

	  return geometry;
	}

	var geomHelper = /*#__PURE__*/Object.freeze({
		createPointGeom: createPointGeom,
		createLineGeom: createLineGeom,
		createPolygonGeom: createPolygonGeom,
		createMultiPointGeom: createMultiPointGeom,
		createMultiLineGeom: createMultiLineGeom,
		createMultiPolygonGeom: createMultiPolygonGeom,
		createGeomCollection: createGeomCollection,
		createCircularPolygon: createCircularPolygon,
		isMultiGeom: isMultiGeom,
		toSimpleGeom: toSimpleGeom,
		findPointOnSurface: findPointOnSurface,
		getGeometryId: getGeometryId,
		setGeometryId: setGeometryId,
		initializeGeometry: initializeGeometry
	});

	var _transforms;
	/**
	 * @param {Object} options
	 * @return {Projection}
	 */

	function createProj(options) {
	  return new Projection(options);
	}
	/**
	 * @param {number[]} coordinate
	 * @param {ProjectionLike} [projection]
	 * @return {Coordinate|number[]}
	 */

	function pointToLonLat(coordinate) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return proj.toLonLat(coordinate, projection);
	}
	/**
	 * @param {number[]} coordinate
	 * @param {ProjectionLike} [projection]
	 * @return {number[]}
	 */

	function pointFromLonLat(coordinate) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return proj.fromLonLat(coordinate, projection);
	}
	function transformPoint(coordinate, sourceProjection, destProjection) {
	  return proj.transform(coordinate, sourceProjection, destProjection);
	}
	/**
	 * @param {Array<number[]>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<number[]>}
	 */

	function lineToLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (point) {
	    return pointToLonLat(point, projection);
	  });
	}
	/**
	 * @param {Array<number[]>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<number[]>}
	 */

	function lineFromLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (point) {
	    return pointFromLonLat(point, projection);
	  });
	}
	function transformLine(coordinates, sourceProjection, destProjection) {
	  return map$2(coordinates).call(coordinates, function (point) {
	    return proj.transform(point, sourceProjection, destProjection);
	  });
	}
	/**
	 * @param {Array<Array<number[]>>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<Array<number[]>>}
	 */

	function polygonToLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (line) {
	    return lineToLonLat(line, projection);
	  });
	}
	/**
	 * @param {Array<Array<number[]>>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<Array<number[]>>}
	 */

	function polygonFromLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (line) {
	    return lineFromLonLat(line, projection);
	  });
	}
	function transformPolygon(coordinates, sourceProjection, destProjection) {
	  return map$2(coordinates).call(coordinates, function (line) {
	    return transformLine(line, sourceProjection, destProjection);
	  });
	}
	/**
	 * @param {Array<number[]>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<number[]>}
	 */

	function multiPointToLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (point) {
	    return pointToLonLat(point, projection);
	  });
	}
	/**
	 * @param {Array<number[]>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<number[]>}
	 */

	function multiPointFromLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (point) {
	    return pointFromLonLat(point, projection);
	  });
	}
	function transformMultiPoint(coordinates, sourceProjection, destProjection) {
	  return map$2(coordinates).call(coordinates, function (point) {
	    return transformPoint(point, sourceProjection, destProjection);
	  });
	}
	/**
	 * @param {Array<Array<number[]>>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<Array<number[]>>}
	 */

	function multiLineToLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (line) {
	    return lineToLonLat(line, projection);
	  });
	}
	/**
	 * @param {Array<Array<number[]>>} coordinates
	 * @param {ProjectionLike} [projection]
	 * @return {Array<Array<number[]>>}
	 */

	function multiLineFromLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (line) {
	    return lineFromLonLat(line, projection);
	  });
	}
	function transformMultiLine(coordinates, sourceProjection, destProjection) {
	  return map$2(coordinates).call(coordinates, function (line) {
	    return transformLine(line, sourceProjection, destProjection);
	  });
	}
	/**
	 * @param {Array<Array<Array<number[]>>>} coordinates
	 * @param {ProjectionLike} projection
	 * @return {Array<Array<Array<number[]>>>}
	 */

	function multiPolygonToLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (polygon) {
	    return polygonToLonLat(polygon, projection);
	  });
	}
	/**
	 * @param {Array<Array<Array<number[]>>>} coordinates
	 * @param {ProjectionLike} projection
	 * @return {Array<Array<Array<number[]>>>}
	 */

	function multiPolygonFromLonLat(coordinates) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return map$2(coordinates).call(coordinates, function (polygon) {
	    return polygonFromLonLat(polygon, projection);
	  });
	}
	function transformMultiPolygon(coordinates, sourceProjection, destProjection) {
	  return map$2(coordinates).call(coordinates, function (polygon) {
	    return transformPolygon(polygon, sourceProjection, destProjection);
	  });
	}
	/**
	 * Transforms by geom type
	 * @type {Object<string, function>}
	 */

	var transforms = (_transforms = {}, _defineProperty(_transforms, GEOMETRY_TYPE.POINT, {
	  toLonLat: pointToLonLat,
	  fromLonLat: pointFromLonLat,
	  transform: transformPoint
	}), _defineProperty(_transforms, GEOMETRY_TYPE.LINE_STRING, {
	  toLonLat: lineToLonLat,
	  fromLonLat: lineFromLonLat,
	  transform: transformLine
	}), _defineProperty(_transforms, GEOMETRY_TYPE.POLYGON, {
	  toLonLat: polygonToLonLat,
	  fromLonLat: polygonFromLonLat,
	  transform: transformPolygon
	}), _defineProperty(_transforms, GEOMETRY_TYPE.MULTI_POINT, {
	  toLonLat: multiPointToLonLat,
	  fromLonLat: multiPointFromLonLat,
	  transform: transformMultiPoint
	}), _defineProperty(_transforms, GEOMETRY_TYPE.MULTI_LINE_STRING, {
	  toLonLat: multiLineToLonLat,
	  fromLonLat: multiLineFromLonLat,
	  transform: transformMultiLine
	}), _defineProperty(_transforms, GEOMETRY_TYPE.MULTI_POLYGON, {
	  toLonLat: multiPolygonToLonLat,
	  fromLonLat: multiPolygonFromLonLat,
	  transform: transformMultiPolygon
	}), _transforms);
	/**
	 * @param {Extent} extent
	 * @param {ProjectionLike} [projection=EPSG:3857]
	 * @return {Extent}
	 */

	function extentFromLonLat(extent$$1) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return proj.transformExtent(extent$$1, EPSG_4326, projection);
	}
	/**
	 * @param {Extent} extent
	 * @param {ProjectionLike} [projection=EPSG:3857]
	 * @return {Extent}
	 */

	function extentToLonLat(extent$$1) {
	  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  return proj.transformExtent(extent$$1, projection, EPSG_4326);
	}

	function getObjectUid(object) {
	  return ol.getUid(object);
	}
	/**
	 * heuristic check that value is ol collection
	 * @param value
	 * @return {boolean}
	 */

	function isCollection(value) {
	  return value && isFunction(value.getArray);
	}
	/**
	 * heuristic check that value is ol vector source
	 * @param value
	 * @return {*}
	 */

	function isVectorSource(value) {
	  return value && isFunction(value.getAttributions) && isFunction(value.getFeatureById);
	}
	/**
	 * @param value
	 * @return {*}
	 */

	function isCircle(value) {
	  return isFunction(value.getCenter) && isFunction(value.getRadius);
	}
	function cleanSourceExtraParams(params, filterKeys) {
	  return reduce$3(params, function (params, value, key) {
	    key = key.toUpperCase();

	    if (includes$4(filterKeys).call(filterKeys, key)) {
	      return params;
	    }

	    params[key] = value;
	    return params;
	  }, {});
	}

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct$3(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct$3) return false; if (construct$3.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct$3(Date, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * @param {Object} [options]
	 * @return {GeoJSON}
	 */

	function createGeoJsonFmt(options) {
	  return new GeoJSON(options);
	}
	/**
	 * @param {Object} [options]
	 * @return {TopoJSON}
	 */

	function createTopoJsonFmt(options) {
	  return new TopoJSON(options);
	}
	/**
	 * @param [options]
	 * @return {MVT}
	 */

	function createMvtFmt(options) {
	  return new MVT(options);
	}

	var GeoJSON = /*#__PURE__*/function (_BaseGeoJSON) {
	  _inherits(GeoJSON, _BaseGeoJSON);

	  var _super = _createSuper(GeoJSON);

	  function GeoJSON() {
	    _classCallCheck(this, GeoJSON);

	    return _super.apply(this, arguments);
	  }

	  _createClass(GeoJSON, [{
	    key: "writeGeometryObject",
	    value: function writeGeometryObject(geometry, options) {
	      if (isCircle(geometry)) {
	        var start = geometry.getCenter();
	        var end = [start[0] + geometry.getRadius(), start[1]];
	        var radius = sphere.getLength(new LineString([start, end]), options.featureProjection || this.defaultFeatureProjection);
	        geometry = createCircularPolygon(transformPoint(geometry.getCenter(), options.featureProjection || this.defaultFeatureProjection, EPSG_4326), radius);
	        options.featureProjection = EPSG_4326;
	      }

	      return _get(_getPrototypeOf(GeoJSON.prototype), "writeGeometryObject", this).call(this, geometry, options);
	    }
	  }, {
	    key: "writeFeatureObject",
	    value: function writeFeatureObject(feature, options) {
	      var object =
	      /** @type {Object} */
	      {
	        'type': 'Feature'
	      };
	      var id = feature.getId();

	      if (id !== undefined) {
	        object.id = id;
	      }

	      var geometry = feature.getGeometry();

	      if (geometry) {
	        object.geometry = this.writeGeometryObject(geometry, options);
	      } else {
	        object.geometry = null;
	      }

	      var properties = feature.getProperties();
	      delete properties[feature.getGeometryName()];

	      if (!isEmpty(properties)) {
	        object.properties = properties;
	      } else {
	        object.properties = null;
	      }

	      return object;
	    }
	  }]);

	  return GeoJSON;
	}(BaseGeoJSON);

	var geoJsonFmt = createGeoJsonFmt();
	/**
	 * @param {Feature} feature
	 * @param {ProjectionLike|undefined} [featureProjection=EPSG:3857]
	 * @param {ProjectionLike|undefined} [dataProjection=EPSG:4326]
	 * @return {Object}
	 */

	function writeGeoJsonFeature(feature) {
	  var featureProjection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  var dataProjection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG_4326;
	  var geoJsonFeature = geoJsonFmt.writeFeatureObject(feature, {
	    featureProjection: featureProjection,
	    dataProjection: dataProjection
	  });

	  if (isArray$3(get$1(geoJsonFeature, 'properties.features'))) {
	    var _context;

	    geoJsonFeature.properties.features = map$2(_context = geoJsonFeature.properties.features).call(_context, function (feature) {
	      if (feature instanceof Feature) {
	        return writeGeoJsonFeature(feature, featureProjection, dataProjection);
	      }

	      return feature;
	    });
	  }

	  return geoJsonFeature;
	}
	/**
	 * @param {Object} geoJsonFeature
	 * @param {ProjectionLike|undefined} [featureProjection=EPSG:3857]
	 * @param {ProjectionLike|undefined} [dataProjection=EPSG:4326]
	 * @return {Feature}
	 */

	function readGeoJsonFeature(geoJsonFeature) {
	  var featureProjection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  var dataProjection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG_4326;
	  var feature = geoJsonFmt.readFeature(geoJsonFeature, {
	    featureProjection: featureProjection,
	    dataProjection: dataProjection
	  });

	  if (isArray$3(feature.get('features'))) {
	    var _context2;

	    feature.set('features', map$2(_context2 = feature.get('features')).call(_context2, function (feature) {
	      if (isPlainObject(feature)) {
	        return readGeoJsonFeature(feature, featureProjection, dataProjection);
	      }

	      return feature;
	    }));
	  }

	  return feature;
	}
	/**
	 * @param {Geometry} geometry
	 * @param {ProjectionLike|undefined} [geometryProjection=EPSG:3857]
	 * @param {ProjectionLike|undefined} [dataProjection=EPSG:4326]
	 * @return {Object}
	 */

	function writeGeoJsonGeometry(geometry) {
	  var geometryProjection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  var dataProjection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG_4326;
	  return geoJsonFmt.writeGeometryObject(geometry, {
	    featureProjection: geometryProjection,
	    dataProjection: dataProjection
	  });
	}
	/**
	 * @param {Object|Object} geoJsonGeometry
	 * @param {ProjectionLike|undefined} [geometryProjection=EPSG:3857]
	 * @param {ProjectionLike|undefined} [dataProjection=EPSG:4326]
	 * @return {Geometry}
	 */

	function readGeoJsonGeometry(geoJsonGeometry) {
	  var geometryProjection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSG_3857;
	  var dataProjection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG_4326;
	  dataProjection = readProjection(geoJsonGeometry, dataProjection);
	  return geoJsonFmt.readGeometry(geoJsonGeometry, {
	    featureProjection: geometryProjection,
	    dataProjection: dataProjection
	  });
	}
	function readProjection(geoJsonObj, defaultProjection) {
	  return geoJsonFmt.readProjection(geoJsonObj) || defaultProjection;
	}

	/**
	 * @param {Interaction|Vue} interaction
	 * @returns {string|null}
	 */

	function getInteractionId(interaction$$1) {
	  if (interaction$$1 instanceof Vue) {
	    return interaction$$1.id;
	  } else if (interaction$$1 instanceof Interaction) {
	    return interaction$$1.get('id');
	  }

	  throw new Error('Illegal interaction argument');
	}
	/**
	 * @param {Interaction|Vue} interaction
	 * @param {string} interactionId
	 * @returns {Vue|Interaction}
	 */

	function setInteractionId(interaction$$1, interactionId) {
	  if (interaction$$1 instanceof Vue) {
	    interaction$$1.id = interactionId;
	    return interaction$$1;
	  } else if (interaction$$1 instanceof Interaction) {
	    interaction$$1.set('id', interactionId);
	    return interaction$$1;
	  }

	  throw new Error('Illegal interaction argument');
	}
	function getInteractionPriority(interaction$$1) {
	  if (interaction$$1 instanceof Vue) {
	    return interaction$$1.priority;
	  } else if (interaction$$1 instanceof Interaction) {
	    return interaction$$1.get('priority');
	  }

	  throw new Error('Illegal interaction argument');
	}
	function setInteractionPriority(interaction$$1, priority) {
	  if (interaction$$1 instanceof Vue) {
	    interaction$$1.id = priority;
	    return interaction$$1;
	  } else if (interaction$$1 instanceof Interaction) {
	    interaction$$1.set('priority', priority);
	    return interaction$$1;
	  }

	  throw new Error('Illegal interaction argument');
	}
	function initializeInteraction(interaction$$1, defaultInteractionId, defaultPriority) {
	  if (getInteractionId(interaction$$1) == null) {
	    setInteractionId(interaction$$1, defaultInteractionId || v4_1());
	  }

	  if (getInteractionPriority(interaction$$1) == null) {
	    setInteractionPriority(interaction$$1, defaultPriority || 0);
	  }

	  return interaction$$1;
	}

	function getLayerId(layer) {
	  if (layer instanceof Vue) {
	    return layer.id;
	  } else if (layer instanceof BaseLayer) {
	    return layer.get('id');
	  }

	  throw new Error('Illegal layer argument');
	}
	function setLayerId(layer, layerId) {
	  if (layer instanceof Vue) {
	    layer.id = layerId;
	    return layer;
	  } else if (layer instanceof BaseLayer) {
	    layer.set('id', layerId);
	    return layer;
	  }

	  throw new Error('Illegal layer argument');
	}
	function initializeLayer(layer, defaultLayerId) {
	  if (getLayerId(layer) == null) {
	    setLayerId(layer, defaultLayerId || v4_1());
	  }

	  return layer;
	}

	function getMapId(map) {
	  if (map instanceof Vue) {
	    return map.id;
	  } else if (map instanceof PluggableMap) {
	    return map.get('id');
	  }

	  throw new Error('Illegal map argument');
	}
	function setMapId(map, mapId) {
	  if (map instanceof Vue) {
	    map.id = mapId;
	    return map;
	  } else if (map instanceof PluggableMap) {
	    map.set('id', mapId);
	    return map;
	  }

	  throw new Error('Illegal map argument');
	}
	function getMapDataProjection(map) {
	  if (map instanceof Vue) {
	    return map.dataProjection;
	  } else if (map instanceof PluggableMap) {
	    return map.get('dataProjection');
	  }

	  throw new Error('Illegal map argument');
	}
	function setMapDataProjection(map, dataProjection) {
	  if (map instanceof Vue) {
	    map.dataProjection = dataProjection;
	    return map;
	  } else if (map instanceof PluggableMap) {
	    map.set('dataProjection', dataProjection);
	    return map;
	  }

	  throw new Error('Illegal map argument');
	}

	function getOverlayId(overlay) {
	  if (overlay instanceof Vue) {
	    return overlay.id;
	  } else if (overlay instanceof Overlay) {
	    return overlay.get('id');
	  }

	  throw new Error('Illegal overlay argument');
	}
	function setOverlayId(overlay, overlayId) {
	  if (overlay instanceof Vue && overlay) {
	    overlay.id = overlayId;
	    return overlay;
	  } else if (overlay instanceof Overlay) {
	    overlay.set('id', overlayId);
	    return overlay;
	  }

	  throw new Error('Illegal overlay argument');
	}
	function initializeOverlay(overlay, defaultOverlay) {
	  if (getOverlayId(overlay) == null) {
	    setOverlayId(overlay, defaultOverlay || v4_1());
	  }

	  return overlay;
	}

	function getSourceId(source$$1) {
	  if (source$$1 instanceof Vue) {
	    return source$$1.id;
	  } else if (source$$1 instanceof Source) {
	    return source$$1.get('id');
	  }

	  throw new Error('Illegal source argument');
	}
	function setSourceId(source$$1, sourceId) {
	  if (source$$1 instanceof Vue) {
	    source$$1.id = sourceId;
	    return source$$1;
	  } else if (source$$1 instanceof Source) {
	    source$$1.set('id', sourceId);
	    return source$$1;
	  }

	  throw new Error('Illegal source argument');
	}
	function initializeSource(source$$1, defaultSourceId) {
	  if (getSourceId(source$$1) == null) {
	    setSourceId(source$$1, defaultSourceId || v4_1());
	  }

	  return source$$1;
	}

	/* MIT license */

	var conversions = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,

	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,

	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,

	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,

	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,

	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,

	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,

	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,

	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	};


	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  l = (min + max) / 2;

	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;

	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  v = ((max / 255) * 1000) / 10;

	  return [h, s, v];
	}

	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

	  return [h, w * 100, b * 100];
	}

	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;

	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}

	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}

	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;

	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	  return [x * 100, y *100, z * 100];
	}

	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;

	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }

	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;

	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;

	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;

	    rgb[i] = val * 255;
	  }

	  return rgb;
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;

	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }

	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}

	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}

	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}


	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;

	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}

	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}

	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;

	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }

	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation

	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}

	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}

	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}

	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}

	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;

	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}

	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}

	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}

	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}

	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}


	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;

	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);

	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);

	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);

	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);

	  return [r * 255, g * 255, b * 255];
	}

	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}

	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;

	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }

	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

	  return [x, y, z];
	}

	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;

	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}

	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}

	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;

	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}

	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}

	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}

	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}

	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}

	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}

	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}

	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}

	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}

	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}

	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};

	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}

	var convert = function() {
	   return new Converter();
	};

	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);

	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];

	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};

	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword

	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}


	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};

	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }

	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};

	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);

	      this.convs[space] = vals;
	   }
	  return vals;
	};

	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   };
	});

	var colorConvert = convert;

	var parseColor = function (cstr) {
	    var m, conv, parts, alpha;
	    if (m = /^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
	        var name = m[1];
	        var base = name.replace(/a$/, '');
	        var size$$1 = base === 'cmyk' ? 4 : 3;
	        conv = colorConvert[base];
	        
	        parts = m[2].replace(/^\s+|\s+$/g, '')
	            .split(/\s*,\s*/)
	            .map(function (x, i) {
	                if (/%$/.test(x) && i === size$$1) {
	                    return parseFloat(x) / 100;
	                }
	                else if (/%$/.test(x)) {
	                    return parseFloat(x);
	                }
	                return parseFloat(x);
	            })
	        ;
	        if (name === base) parts.push(1);
	        alpha = parts[size$$1] === undefined ? 1 : parts[size$$1];
	        parts = parts.slice(0, size$$1);
	        
	        conv[base] = function () { return parts };
	    }
	    else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
	        var base = cstr.replace(/^#/,'');
	        var size$$1 = base.length;
	        conv = colorConvert.rgb;
	        parts = base.split(size$$1 === 3 ? /(.)/ : /(..)/);
	        parts = parts.filter(Boolean)
	            .map(function (x) {
	                if (size$$1 === 3) {
	                    return parseInt(x + x, 16);
	                }
	                else {
	                    return parseInt(x, 16)
	                }
	            })
	        ;
	        alpha = 1;
	        conv.rgb = function () { return parts };
	        if (!parts[0]) parts[0] = 0;
	        if (!parts[1]) parts[1] = 0;
	        if (!parts[2]) parts[2] = 0;
	    }
	    else {
	        conv = colorConvert.keyword;
	        conv.keyword = function () { return cstr };
	        parts = cstr;
	        alpha = 1;
	    }
	    
	    var res = {
	        rgb: undefined,
	        hsl: undefined,
	        hsv: undefined,
	        cmyk: undefined,
	        keyword: undefined,
	        hex: undefined
	    };
	    try { res.rgb = conv.rgb(parts); } catch (e) {}
	    try { res.hsl = conv.hsl(parts); } catch (e) {}
	    try { res.hsv = conv.hsv(parts); } catch (e) {}
	    try { res.cmyk = conv.cmyk(parts); } catch (e) {}
	    try { res.keyword = conv.keyword(parts); } catch (e) {}
	    
	    if (res.rgb) res.hex = '#' + res.rgb.map(function (x) {
	        var s = x.toString(16);
	        if (s.length === 1) return '0' + s;
	        return s;
	    }).join('');
	    
	    if (res.rgb) res.rgba = res.rgb.concat(alpha);
	    if (res.hsl) res.hsla = res.hsl.concat(alpha);
	    if (res.hsv) res.hsva = res.hsv.concat(alpha);
	    if (res.cmyk) res.cmyka = res.cmyk.concat(alpha);
	    
	    return res;
	};

	function ownKeys$2(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context7; forEach$2(_context7 = ownKeys$2(Object(source$$1), true)).call(_context7, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context8; forEach$2(_context8 = ownKeys$2(Object(source$$1))).call(_context8, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	function getStyleId(style$$1) {
	  if (style$$1 instanceof Vue || style$$1 instanceof Style || style$$1 instanceof ImageStyle || style$$1 instanceof Text || style$$1 instanceof Stroke || style$$1 instanceof Fill || style$$1 instanceof Function) {
	    return style$$1.id;
	  }

	  throw new Error('Illegal style argument');
	}
	function setStyleId(style$$1, styleId) {
	  if (style$$1 instanceof Vue || style$$1 instanceof Style || style$$1 instanceof ImageStyle || style$$1 instanceof Text || style$$1 instanceof Stroke || style$$1 instanceof Fill || style$$1 instanceof Function) {
	    style$$1.id = styleId;
	    return style$$1;
	  }

	  throw new Error('Illegal style argument');
	}
	function initializeStyle(style$$1, defaultStyleId) {
	  if (getStyleId(style$$1) == null) {
	    setStyleId(style$$1, defaultStyleId || v4_1());
	  }

	  return style$$1;
	}
	/**
	 * @return {VlStyle[]}
	 */

	function defaultStyle() {
	  return [{
	    fillColor: [255, 255, 255, 0.4],
	    strokeColor: '#3399cc',
	    strokeWidth: 1.25,
	    imageRadius: 5
	  }];
	}
	/**
	 * @return {Object<GEOMETRY_TYPE, VlStyle[]>}
	 */

	function defaultEditStyle() {
	  var _context, _context2, _context3;

	  /** @type {Object<GEOMETRY_TYPE, VlStyle[]>} */
	  var styles = {};
	  var white = [255, 255, 255, 1];
	  var blue = [0, 153, 255, 1];
	  var width = 3;
	  styles[GEOMETRY_TYPE.LINE_STRING] = [{
	    strokeColor: white,
	    strokeWidth: width + 2
	  }, {
	    strokeColor: blue,
	    strokeWidth: width
	  }];
	  styles[GEOMETRY_TYPE.MULTI_LINE_STRING] = styles[GEOMETRY_TYPE.LINE_STRING];
	  styles[GEOMETRY_TYPE.POLYGON] = concat$2(_context = [{
	    fillColor: [255, 255, 255, 0.5]
	  }]).call(_context, styles[GEOMETRY_TYPE.LINE_STRING]);
	  styles[GEOMETRY_TYPE.MULTI_POLYGON] = styles[GEOMETRY_TYPE.POLYGON];
	  styles[GEOMETRY_TYPE.CIRCLE] = concat$2(_context2 = styles[GEOMETRY_TYPE.POLYGON]).call(_context2, styles[GEOMETRY_TYPE.LINE_STRING]);
	  styles[GEOMETRY_TYPE.POINT] = [{
	    imageRadius: width * 2,
	    fillColor: blue,
	    strokeColor: white,
	    strokeWidth: width / 2,
	    zIndex: Infinity
	  }];
	  styles[GEOMETRY_TYPE.MULTI_POINT] = styles[GEOMETRY_TYPE.POINT];
	  styles[GEOMETRY_TYPE.GEOMETRY_COLLECTION] = concat$2(_context3 = styles[GEOMETRY_TYPE.POLYGON]).call(_context3, styles[GEOMETRY_TYPE.LINE_STRING], styles[GEOMETRY_TYPE.POINT]);
	  return styles;
	}

	var isEmpty$1 = function isEmpty$$1(x) {
	  if (x == null) return true;
	  if (typeof x === 'number') return false;
	  return (typeof x === 'string' || isArray$3(x)) && !x.length || !keys$3(x).length;
	};
	/**
	 * @param {VlStyle} vlStyle
	 * @return {Style|undefined}
	 */


	function createStyle(vlStyle) {
	  if (isEmpty$1(vlStyle)) return;
	  var olStyle = {
	    text: createTextStyle(vlStyle),
	    fill: createFillStyle(vlStyle),
	    stroke: createStrokeStyle(vlStyle),
	    image: createImageStyle(vlStyle),
	    geometry: createGeomStyle(vlStyle),
	    zIndex: vlStyle.zIndex,
	    renderer: vlStyle.renderer
	  };

	  if (!isEmpty$1(olStyle)) {
	    return new Style(olStyle);
	  }
	}

	var addPrefix = function addPrefix(prefix) {
	  return function (str) {
	    return prefix + (prefix ? upperFirst(str) : str);
	  };
	};
	/**
	 * @param {*} color
	 * @returns {*}
	 */


	function normalizeColor(color) {
	  var c = color;

	  if (typeof color === 'string') {
	    c = parseColor(color).rgba;
	  }

	  return c;
	}
	/**
	 * @param {VlStyle} vlStyle
	 * @param {string} [prefix]
	 * @returns {Fill|undefined}
	 */

	function createFillStyle(vlStyle) {
	  var _context4;

	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var prefixKey = addPrefix(prefix);

	  var keys = map$2(_context4 = ['fillColor']).call(_context4, prefixKey);

	  var compiledKey = prefixKey('fill'); // check on already compiled style existence

	  if (vlStyle[compiledKey] instanceof Fill) return vlStyle[compiledKey];
	  var fillStyle = reduce$3(vlStyle, function (style$$1, value, name) {
	    if (includes$4(keys).call(keys, name) === false) {
	      return style$$1;
	    }

	    name = lowerFirst(name.replace(new RegExp(prefixKey('fill')), ''));

	    if (name === 'color') {
	      value = normalizeColor(value);
	    }

	    style$$1[name] = value;
	    return style$$1;
	  }, {});

	  if (!isEmpty$1(fillStyle)) {
	    return new Fill(fillStyle);
	  }
	}
	/**
	 * @param {VlStyle} vlStyle
	 * @param {string} [prefix]
	 * @returns {Stroke|undefined}
	 */

	function createStrokeStyle(vlStyle) {
	  var _context5;

	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var prefixKey = addPrefix(prefix);

	  var keys = map$2(_context5 = ['strokeColor', 'strokeWidth', 'strokeMiterLimit', 'strokeCap', 'strokeJoin', 'strokeDash', 'strokeDashOffset']).call(_context5, prefixKey);

	  var compiledKey = prefixKey('stroke');
	  if (vlStyle[compiledKey] instanceof Stroke) return vlStyle[compiledKey];
	  var strokeStyle = reduce$3(vlStyle, function (style$$1, value, name) {
	    if (includes$4(keys).call(keys, name) === false) {
	      return style$$1;
	    }

	    switch (name) {
	      case prefixKey('strokeColor'):
	      case prefixKey('strokeWidth'):
	      case prefixKey('strokeMiterLimit'):
	        name = lowerFirst(name.replace(new RegExp(prefixKey('stroke')), ''));
	        break;

	      case prefixKey('strokeCap'):
	      case prefixKey('strokeJoin'):
	      case prefixKey('strokeDash'):
	      case prefixKey('strokeDashOffset'):
	        name = 'line' + name.replace(new RegExp(prefixKey('stroke')), '');
	        break;
	    }

	    if (name === 'color') {
	      value = normalizeColor(value);
	    }

	    style$$1[name] = value;
	    return style$$1;
	  }, {});

	  if (!isEmpty$1(strokeStyle)) {
	    return new Stroke(strokeStyle);
	  }
	}
	/**
	 * @param {VlStyle} vlStyle
	 * @returns {Image|undefined}
	 * @todo split to separate circle, regShape, Icon
	 */

	function createImageStyle(vlStyle) {
	  if (isEmpty$1(vlStyle.imageSrc) && isEmpty$1(vlStyle.image) && isEmpty$1(vlStyle.imagePoints) && !isNumeric(vlStyle.imageRadius)) {
	    return;
	  }

	  if (vlStyle.image instanceof ImageStyle) return vlStyle.image;
	  var imageStyle, Ctor;

	  if (!isEmpty$1(vlStyle.imageSrc) || !isEmpty$1(vlStyle.image)) {
	    // icon construction
	    Ctor = Icon; // then create Icon options

	    imageStyle = _objectSpread$1(_objectSpread$1({}, vlStyle), {}, {
	      anchor: vlStyle.imageAnchor,
	      anchorOrigin: vlStyle.imageAnchorOrigin,
	      color: vlStyle.imageColor,
	      offset: vlStyle.imageOffset,
	      offsetOrigin: vlStyle.imageOffsetOrigin,
	      opacity: vlStyle.imageOpacity,
	      scale: vlStyle.imageScale,
	      rotation: vlStyle.imageRotation,
	      size: vlStyle.imageSize,
	      img: vlStyle.image,
	      imgSize: vlStyle.imageImgSize,
	      src: vlStyle.imageSrc,
	      crossOrigin: vlStyle.imageCrossOrigin
	    });
	  } else if (vlStyle.imagePoints != null) {
	    // regular shape construction
	    Ctor = RegularShape; // create RegularShape options

	    imageStyle = _objectSpread$1(_objectSpread$1({}, vlStyle), {}, {
	      points: vlStyle.imagePoints,
	      radius: vlStyle.imageRadius,
	      radius1: vlStyle.imageRadius1,
	      radius2: vlStyle.imageRadius2,
	      angle: vlStyle.imageAngle,
	      rotation: vlStyle.imageRotation
	    });
	  } else {
	    // circle construction
	    Ctor = Circle$1; // create Circle options

	    imageStyle = _objectSpread$1(_objectSpread$1({}, vlStyle), {}, {
	      radius: vlStyle.imageRadius
	    });
	  }

	  imageStyle = _objectSpread$1(_objectSpread$1({}, imageStyle), {}, {
	    fill: createFillStyle(vlStyle, 'image') || createFillStyle(vlStyle),
	    stroke: createStrokeStyle(vlStyle, 'image') || createStrokeStyle(vlStyle),
	    snapToPixel: true
	  });

	  if (!isEmpty$1(imageStyle)) {
	    return new Ctor(imageStyle);
	  }
	}
	/**
	 * @param {VlStyle} vlStyle
	 * @returns {Text|undefined}
	 */

	function createTextStyle(vlStyle) {
	  var _context6;

	  if (vlStyle.text == null) return;
	  if (vlStyle.text instanceof Text) return vlStyle.text;
	  var textStyle = {
	    text: vlStyle.text
	  };
	  var fontSize = '10px';

	  if (vlStyle.textFontSize) {
	    fontSize = isNumber(vlStyle.textFontSize) ? vlStyle.textFontSize + 'px' : vlStyle.textFontSize;
	  }

	  var fontName = vlStyle.textFont || 'sans-serif';

	  var font = filter$2(_context6 = [vlStyle.textFontWeight, fontSize, fontName]).call(_context6, function (x) {
	    return !!x;
	  }).join(' ');

	  assign$2(textStyle, pick(vlStyle, ['textAlign', 'textBaseline']), {
	    font: font,
	    fill: createFillStyle(vlStyle, 'text') || createFillStyle(vlStyle),
	    stroke: createStrokeStyle(vlStyle, 'text') || createStrokeStyle(vlStyle),
	    scale: vlStyle.textScale,
	    rotation: vlStyle.textRotation,
	    offsetX: vlStyle.textOffsetX,
	    offsetY: vlStyle.textOffsetY,
	    rotateWithView: vlStyle.textRotateWithView,
	    padding: vlStyle.textPadding,
	    maxAngle: vlStyle.textMaxAngle,
	    overflow: vlStyle.textOverflow,
	    placement: vlStyle.textPlacement,
	    backgroundFill: createFillStyle(vlStyle, 'textBackground'),
	    backgroundStroke: createStrokeStyle(vlStyle, 'textBackground')
	  });

	  if (!isEmpty$1(textStyle)) {
	    return new Text(textStyle);
	  }
	}
	/**
	 * @param {VlStyle} vlStyle
	 * @return {Geometry|function|undefined}
	 */

	function createGeomStyle(vlStyle) {
	  if (isFunction(vlStyle.geom)) {
	    return function __styleGeomFunc(feature) {
	      return vlStyle.geom(feature, geomHelper);
	    };
	  }

	  return vlStyle.geom;
	}
	/**
	 * @typedef {Style|Image|Fill|Stroke|Text|StyleFunction} OlStyle
	 */

	/**
	 * @typedef {Object} VlStyle
	 *
	 * Shared
	 * @property {string|number[]|undefined} fillColor
	 * @property {string|number[]|undefined} strokeColor
	 * @property {number|undefined} strokeWidth
	 * @property {number|undefined} strokeMiterLimit
	 * @property {number[]|undefined} strokeDash
	 * @property {number[]|undefined} strokeDashOffset
	 * @property {string|undefined} strokeCap
	 * @property {string|undefined} strokeJoin
	 * @property {number|undefined} zIndex
	 * @property {Fill|undefined} fill
	 * @property {Stroke|undefined} stroke
	 * @property {RenderFunction|undefined} renderer
	 *
	 * Text only
	 * @property {string|Text|undefined} text
	 * @property {string|undefined} textFont
	 * @property {number|string|undefined} textFontSize
	 * @property {string|undefined} textFontWeight
	 * @property {string|number[]|undefined} textFillColor
	 * @property {string|number[]|undefined} textStrokeColor
	 * @property {number|undefined} textStrokeWidth
	 * @property {number[]|undefined} textStrokeDash
	 * @property {string|undefined} textStrokeCap
	 * @property {string|undefined} textStrokeJoin
	 * @property {number|undefined} textScale
	 * @property {string|undefined} textAlign
	 * @property {number|undefined} textRotation
	 * @property {number|undefined} textOffsetX
	 * @property {number|undefined} textOffsetY
	 * @property {Stroke|undefined} textStroke
	 * @property {Fill|undefined} textFill
	 * @property {boolean|undefined} textRotateWithView
	 * @property {number[]|undefined} textPadding
	 * @property {number|undefined} textMaxAngle
	 * @property {boolean|undefined} textOverflow
	 * @property {string|undefined} textPlacement
	 * @property {string|undefined} textBaseline
	 * @property {Fill|undefined} textBackgroundFillColor
	 * @property {Stroke|undefined} textBackgroundStrokeColor
	 * @property {Stroke|undefined} textBackgroundStrokeWidth
	 * @property {Stroke|undefined} textBackgroundStrokeDash
	 * @property {Stroke|undefined} textBackgroundStrokeCap
	 * @property {Stroke|undefined} textBackgroundStrokeJoin
	 *
	 * Image only
	 * @property {Image|undefined} image
	 * @property {string|undefined} imageSrc
	 * @property {number[]|undefined} imageSize
	 * @property {number[]|undefined} imageImgSize
	 * @property {number|undefined} imageOffset
	 * @property {number[]|undefined} imageAnchor
	 * @property {number|undefined} imageScale
	 * @property {number|undefined} imageRotation
	 * @property {number|undefined} imageRadius
	 * @property {number|undefined} imageRadius1
	 * @property {number|undefined} imageRadius2
	 * @property {number|undefined} imagePoints
	 * @property {number|undefined} imageAngle
	 * @property {number|undefined} imageOpacity
	 * @property {string|number[]|undefined} imageFillColor
	 * @property {string|number[]|undefined} imageStrokeColor
	 * @property {number|undefined} imageStrokeWidth
	 * @property {number[]|undefined} imageStrokeDash
	 * @property {string|undefined} imageStrokeCap
	 * @property {string|undefined} imageStrokeJoin
	 * @property {IconOrigin|undefined} imageAnchorOrigin
	 * @property {ColorLike|undefined} imageColor
	 * @property {IconOrigin|undefined} imageOffsetOrigin
	 * @property {Stroke|undefined} imageStroke
	 * @property {Fill|undefined} imageFill
	 * @property {string|undefined} imageCrossOrigin
	 *
	 * @property {Geometry|function|undefined} geom Coordinates should be in map projection
	 */

	/**
	 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
	 * @param {Extent} extent Extent.
	 * @param {number=} maxZoom Maximum zoom level (default is
	 *     ol.DEFAULT_MAX_ZOOM).
	 * @param {number|Size=} tileSize Tile size (default uses
	 *     ol.DEFAULT_TILE_SIZE).
	 * @return {!Array.<number>} Resolutions array.
	 * @see https://github.com/openlayers/openlayers/blob/master/src/ol/tilegrid.js#L104
	 */

	function resolutionsFromExtent(extent$$1) {
	  var maxZoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_ZOOM;
	  var tileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TILE_SIZE;
	  tileSize = size.toSize(tileSize);
	  var height = extent.getHeight(extent$$1);
	  var width = extent.getWidth(extent$$1);
	  var maxResolution = Math.max(width / tileSize[0], height / tileSize[1]);
	  var length = maxZoom + 1;
	  var resolutions = new Array(length);

	  for (var z = 0; z < length; ++z) {
	    resolutions[z] = maxResolution / Math.pow(2, z);
	  }

	  return resolutions;
	}
	/**
	 * @param {Extent} extent Extent.
	 * @param {number=} maxZoom Maximum zoom level (default is MAX_ZOOM).
	 * @param {number|Size=} tileSize Tile size (default uses TILE_SIZE).
	 * @param {string} [corner] Extent corner (default is EXTENT_CORNER.TOP_LEFT).
	 * @return {TileGrid} TileGrid instance.
	 * @see https://github.com/openlayers/openlayers/blob/master/src/ol/tilegrid.js#L58
	 */

	function createGridForExtent(extent$$1) {
	  var maxZoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_ZOOM;
	  var tileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TILE_SIZE;
	  var corner = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : EXTENT_CORNER.TOP_LEFT;
	  var resolutions = resolutionsFromExtent(extent$$1, maxZoom, tileSize);
	  return new TileGrid({
	    extent: extent$$1,
	    origin: getExtentCorner(extent$$1, corner),
	    resolutions: resolutions,
	    tileSize: tileSize
	  });
	}
	/**
	 * @param {ProjectionLike} projection Projection.
	 * @param {number=} maxZoom Maximum zoom level (default is
	 *     ol.DEFAULT_MAX_ZOOM).
	 * @param {number|Size=} tileSize Tile size (default uses ol.DEFAULT_TILE_SIZE).
	 * @param {string} corner Extent corner (default is
	 *     ol.extent.Corner.BOTTOM_LEFT).
	 * @return {TileGrid} TileGrid instance.
	 * @see https://github.com/openlayers/openlayers/blob/master/src/ol/tilegrid.js#L135
	 */

	function createGridForProjection(projection) {
	  var maxZoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_ZOOM;
	  var tileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TILE_SIZE;
	  var corner = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : EXTENT_CORNER.BOTTOM_LEFT;
	  return createGridForExtent(createExtentFromProjection(projection), maxZoom, tileSize, corner);
	}



	var olExt = /*#__PURE__*/Object.freeze({
		EPSG_4326: EPSG_4326,
		EPSG_3857: EPSG_3857,
		MAX_ZOOM: MAX_ZOOM,
		MIN_ZOOM: MIN_ZOOM,
		TILE_SIZE: TILE_SIZE,
		TILE_FORMAT: TILE_FORMAT,
		ZOOM_FACTOR: ZOOM_FACTOR,
		CACHE_SIZE: CACHE_SIZE,
		PIXEL_RATIO: PIXEL_RATIO,
		CROSS_ORIGIN: CROSS_ORIGIN,
		REPROJ_ERR_THRESHOLD: REPROJ_ERR_THRESHOLD,
		EARTH_RADIUS: EARTH_RADIUS,
		RENDERER_TYPE: RENDERER_TYPE,
		GEOMETRY_TYPE: GEOMETRY_TYPE,
		EXTENT_CORNER: EXTENT_CORNER,
		PROJ_UNIT: PROJ_UNIT,
		OVERLAY_POSITIONING: OVERLAY_POSITIONING,
		WMS_VERSION: WMS_VERSION,
		WMTS_VERSION: WMTS_VERSION,
		WMTS_REQUEST_ENCODING: WMTS_REQUEST_ENCODING,
		WMTS_FORMAT: WMTS_FORMAT,
		LAYER_PROP: LAYER_PROP,
		ARCGIS_EXTRA_PARAMS: ARCGIS_EXTRA_PARAMS,
		getExtentCenter: extent.getCenter,
		getExtentWidth: extent.getWidth,
		getExtentHeight: extent.getHeight,
		boundingExtent: extent.boundingExtent,
		createOrUpdateExtent: createOrUpdateExtent,
		getExtentCorner: getExtentCorner,
		createExtentFromProjection: createExtentFromProjection,
		getFeatureId: getFeatureId,
		setFeatureId: setFeatureId,
		initializeFeature: initializeFeature,
		mergeFeatures: mergeFeatures,
		createGeoJsonFmt: createGeoJsonFmt,
		createTopoJsonFmt: createTopoJsonFmt,
		createMvtFmt: createMvtFmt,
		writeGeoJsonFeature: writeGeoJsonFeature,
		readGeoJsonFeature: readGeoJsonFeature,
		writeGeoJsonGeometry: writeGeoJsonGeometry,
		readGeoJsonGeometry: readGeoJsonGeometry,
		readProjection: readProjection,
		createPointGeom: createPointGeom,
		createLineGeom: createLineGeom,
		createPolygonGeom: createPolygonGeom,
		createMultiPointGeom: createMultiPointGeom,
		createMultiLineGeom: createMultiLineGeom,
		createMultiPolygonGeom: createMultiPolygonGeom,
		createGeomCollection: createGeomCollection,
		createCircularPolygon: createCircularPolygon,
		isMultiGeom: isMultiGeom,
		toSimpleGeom: toSimpleGeom,
		findPointOnSurface: findPointOnSurface,
		getGeometryId: getGeometryId,
		setGeometryId: setGeometryId,
		initializeGeometry: initializeGeometry,
		getInteractionId: getInteractionId,
		setInteractionId: setInteractionId,
		getInteractionPriority: getInteractionPriority,
		setInteractionPriority: setInteractionPriority,
		initializeInteraction: initializeInteraction,
		getLayerId: getLayerId,
		setLayerId: setLayerId,
		initializeLayer: initializeLayer,
		loadingAll: loadingstrategy.all,
		loadingBBox: loadingstrategy.bbox,
		loadingTile: loadingstrategy.tile,
		getMapId: getMapId,
		setMapId: setMapId,
		getMapDataProjection: getMapDataProjection,
		setMapDataProjection: setMapDataProjection,
		getOverlayId: getOverlayId,
		setOverlayId: setOverlayId,
		initializeOverlay: initializeOverlay,
		transform: proj.transform,
		transformExtent: proj.transformExtent,
		getProj: proj.get,
		addProj: proj.addProjection,
		createProj: createProj,
		pointToLonLat: pointToLonLat,
		pointFromLonLat: pointFromLonLat,
		transformPoint: transformPoint,
		lineToLonLat: lineToLonLat,
		lineFromLonLat: lineFromLonLat,
		transformLine: transformLine,
		polygonToLonLat: polygonToLonLat,
		polygonFromLonLat: polygonFromLonLat,
		transformPolygon: transformPolygon,
		multiPointToLonLat: multiPointToLonLat,
		multiPointFromLonLat: multiPointFromLonLat,
		transformMultiPoint: transformMultiPoint,
		multiLineToLonLat: multiLineToLonLat,
		multiLineFromLonLat: multiLineFromLonLat,
		transformMultiLine: transformMultiLine,
		multiPolygonToLonLat: multiPolygonToLonLat,
		multiPolygonFromLonLat: multiPolygonFromLonLat,
		transformMultiPolygon: transformMultiPolygon,
		transforms: transforms,
		extentFromLonLat: extentFromLonLat,
		extentToLonLat: extentToLonLat,
		getSourceId: getSourceId,
		setSourceId: setSourceId,
		initializeSource: initializeSource,
		getStyleId: getStyleId,
		setStyleId: setStyleId,
		initializeStyle: initializeStyle,
		defaultStyle: defaultStyle,
		defaultEditStyle: defaultEditStyle,
		createStyle: createStyle,
		normalizeColor: normalizeColor,
		createFillStyle: createFillStyle,
		createStrokeStyle: createStrokeStyle,
		createImageStyle: createImageStyle,
		createTextStyle: createTextStyle,
		createGeomStyle: createGeomStyle,
		createXyzGrid: tilegrid.createXYZ,
		resolutionsFromExtent: resolutionsFromExtent,
		createGridForExtent: createGridForExtent,
		createGridForProjection: createGridForProjection,
		getObjectUid: getObjectUid,
		isCollection: isCollection,
		isVectorSource: isVectorSource,
		isCircle: isCircle,
		cleanSourceExtraParams: cleanSourceExtraParams
	});

	/**
	 * Constructs watch hash for multiple properties.
	 * @param {string[]} props
	 * @param {function|Object} watcherFactory
	 */
	function makeWatchers(props, watcherFactory) {
	  return reduce$2(props).call(props, function (hash, prop) {
	    hash[prop] = watcherFactory(prop);
	    return hash;
	  }, {});
	}
	function extractChildren(slots) {
	  var _context;

	  var slotNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  return reduce$2(_context = keys$3(slots)).call(_context, function (all, name) {
	    if (!slotNames.length || includes$4(slotNames).call(slotNames, name)) {
	      all = concat$2(all).call(all, slots[name]);
	    }

	    return all;
	  }, []);
	}

	function ownKeys$3(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$3(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$3(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }

	var serialize = function serialize(value) {
	  if (value == null) return value;
	  return _typeof(value) === 'object' ? stringify$2(value) : value;
	};

	var arcgisSource = {
	  props: {
	    /**
	     * Extra ArcGIS request parameters
	     * todo rename to extraParams
	     */
	    extParams: Object,
	    format: {
	      type: String,
	      default: 'PNG32'
	    },
	    layers: String,
	    layerDefs: [Object, String],
	    dynamicLayers: [Object, String],
	    dpi: Number,
	    transparent: {
	      type: Boolean,
	      default: true
	    },
	    time: String,
	    layerTimeOptions: [Object, String],
	    gdbVersion: String,
	    mapScale: String,
	    rotation: Number,
	    datumTransformations: [Array, String],
	    mapRangeValues: [Array, String],
	    layerRangeValues: [Array, String],
	    layerParameterValues: [Array, String],
	    historicMoment: Number
	  },
	  computed: {
	    // todo rename to cleanExtraParams
	    cleanExtParams: function cleanExtParams() {
	      return this.extParams ? cleanSourceExtraParams(this.extParams, ARCGIS_EXTRA_PARAMS) : undefined;
	    },
	    allParams: function allParams() {
	      return _objectSpread$2(_objectSpread$2({}, this.cleanExtParams), {}, {
	        LAYERS: this.layers,
	        FORMAT: this.format,
	        LAYERDEFS: serialize(this.layerDefs),
	        DYNAMICLAYERS: serialize(this.dynamicLayers),
	        DPI: this.dpi,
	        TRANSPARENT: this.transparent,
	        TIME: serialize(this.time),
	        LAYERTIMEOPTIONS: serialize(this.layerTimeOptions),
	        GDBVERSION: this.gdbVersion,
	        MAPSCALE: this.mapScale,
	        ROTATION: this.rotation,
	        DATUMTRANSFORMATIONS: serialize(this.datumTransformations),
	        MAPRANGEVALUES: serialize(this.mapRangeValues),
	        LAYERRANGEVALUES: serialize(this.layerRangeValues),
	        LAYERPARAMETERVALUES: serialize(this.layerParameterValues),
	        HISTORICMOMENT: serialize(this.historicMoment)
	      });
	    }
	  },
	  watch: _objectSpread$2(_objectSpread$2(_objectSpread$2({}, makeWatchers(['layers', 'format', 'dpi', 'transparent', 'gdbVersion', 'mapScale', 'rotation', 'historicMoment'], function (prop) {
	    return function (value) {
	      if (!this.$source) return;
	      prop = prop.toUpperCase();
	      var params = this.$source.getParams() || {};
	      if (isEqual(value, params[value])) return;
	      this.$source.updateParams(_defineProperty({}, prop, value));
	    };
	  })), makeWatchers(['layerDefs', 'dynamicLayers', 'time', 'layerTimeOptions', 'datumTransformations', 'mapRangeValues', 'layerRangeValues', 'layerParameterValues'], function (prop) {
	    return function (value) {
	      if (!this.$source) return;
	      prop = prop.toUpperCase();
	      value = serialize(value);
	      var params = this.$source.getParams() || {};
	      if (isEqual(value, params[value])) return;
	      this.$source.updateParams(_defineProperty({}, prop, value));
	    };
	  })), {}, {
	    extParams: function extParams(value) {
	      if (!this.$source) return;
	      var params = pick(this.$source.getParams() || {}, keys$3(value));
	      if (isEqual(value, params)) return;
	      this.$source.updateParams(value ? cleanSourceExtraParams(value) : undefined);
	    }
	  })
	};

	// `Function.prototype.bind` method
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind
	_export({ target: 'Function', proto: true }, {
	  bind: functionBind
	});

	var bind = entryVirtual('Function').bind;

	var FunctionPrototype = Function.prototype;

	var bind_1 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
	};

	var bind$1 = bind_1;

	var bind$2 = bind$1;

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isFunction$1(x) {
	    return typeof x === 'function';
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var _enable_super_gross_mode_that_will_cause_bad_things = false;
	var config = {
	    Promise: undefined,
	    set useDeprecatedSynchronousErrorHandling(value) {
	        if (value) {
	            var error = /*@__PURE__*/ new Error();
	            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
	        }
	        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
	            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
	        }
	        _enable_super_gross_mode_that_will_cause_bad_things = value;
	    },
	    get useDeprecatedSynchronousErrorHandling() {
	        return _enable_super_gross_mode_that_will_cause_bad_things;
	    },
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function hostReportError(err) {
	    setTimeout(function () { throw err; }, 0);
	}

	/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
	var empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) {
	        if (config.useDeprecatedSynchronousErrorHandling) {
	            throw err;
	        }
	        else {
	            hostReportError(err);
	        }
	    },
	    complete: function () { }
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var isArray$5 = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isObject$2(x) {
	    return x !== null && typeof x === 'object';
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
	    function UnsubscriptionErrorImpl(errors) {
	        Error.call(this);
	        this.message = errors ?
	            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
	        this.name = 'UnsubscriptionError';
	        this.errors = errors;
	        return this;
	    }
	    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return UnsubscriptionErrorImpl;
	})();
	var UnsubscriptionError = UnsubscriptionErrorImpl;

	/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
	var Subscription = /*@__PURE__*/ (function () {
	    function Subscription(unsubscribe) {
	        this.closed = false;
	        this._parentOrParents = null;
	        this._subscriptions = null;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    Subscription.prototype.unsubscribe = function () {
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this.closed = true;
	        this._parentOrParents = null;
	        this._subscriptions = null;
	        if (_parentOrParents instanceof Subscription) {
	            _parentOrParents.remove(this);
	        }
	        else if (_parentOrParents !== null) {
	            for (var index = 0; index < _parentOrParents.length; ++index) {
	                var parent_1 = _parentOrParents[index];
	                parent_1.remove(this);
	            }
	        }
	        if (isFunction$1(_unsubscribe)) {
	            try {
	                _unsubscribe.call(this);
	            }
	            catch (e) {
	                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
	            }
	        }
	        if (isArray$5(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject$2(sub)) {
	                    try {
	                        sub.unsubscribe();
	                    }
	                    catch (e) {
	                        errors = errors || [];
	                        if (e instanceof UnsubscriptionError) {
	                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
	                        }
	                        else {
	                            errors.push(e);
	                        }
	                    }
	                }
	            }
	        }
	        if (errors) {
	            throw new UnsubscriptionError(errors);
	        }
	    };
	    Subscription.prototype.add = function (teardown) {
	        var subscription = teardown;
	        if (!teardown) {
	            return Subscription.EMPTY;
	        }
	        switch (typeof teardown) {
	            case 'function':
	                subscription = new Subscription(teardown);
	            case 'object':
	                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
	                    return subscription;
	                }
	                else if (this.closed) {
	                    subscription.unsubscribe();
	                    return subscription;
	                }
	                else if (!(subscription instanceof Subscription)) {
	                    var tmp = subscription;
	                    subscription = new Subscription();
	                    subscription._subscriptions = [tmp];
	                }
	                break;
	            default: {
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	            }
	        }
	        var _parentOrParents = subscription._parentOrParents;
	        if (_parentOrParents === null) {
	            subscription._parentOrParents = this;
	        }
	        else if (_parentOrParents instanceof Subscription) {
	            if (_parentOrParents === this) {
	                return subscription;
	            }
	            subscription._parentOrParents = [_parentOrParents, this];
	        }
	        else if (_parentOrParents.indexOf(this) === -1) {
	            _parentOrParents.push(this);
	        }
	        else {
	            return subscription;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions === null) {
	            this._subscriptions = [subscription];
	        }
	        else {
	            subscriptions.push(subscription);
	        }
	        return subscription;
	    };
	    Subscription.prototype.remove = function (subscription) {
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	function flattenUnsubscriptionErrors(errors) {
	    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var rxSubscriber = /*@__PURE__*/ (function () {
	    return typeof Symbol === 'function'
	        ? /*@__PURE__*/ Symbol('rxSubscriber')
	        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
	})();

	/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
	var Subscriber = /*@__PURE__*/ (function (_super) {
	    __extends(Subscriber, _super);
	    function Subscriber(destinationOrNext, error, complete) {
	        var _this = _super.call(this) || this;
	        _this.syncErrorValue = null;
	        _this.syncErrorThrown = false;
	        _this.syncErrorThrowable = false;
	        _this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                _this.destination = empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    _this.destination = empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
	                        _this.destination = destinationOrNext;
	                        destinationOrNext.add(_this);
	                    }
	                    else {
	                        _this.syncErrorThrowable = true;
	                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                _this.syncErrorThrowable = true;
	                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
	                break;
	        }
	        return _this;
	    }
	    Subscriber.prototype[rxSubscriber] = function () { return this; };
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype._unsubscribeAndRecycle = function () {
	        var _parentOrParents = this._parentOrParents;
	        this._parentOrParents = null;
	        this.unsubscribe();
	        this.closed = false;
	        this.isStopped = false;
	        this._parentOrParents = _parentOrParents;
	        return this;
	    };
	    return Subscriber;
	}(Subscription));
	var SafeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
	        var _this = _super.call(this) || this;
	        _this._parentSubscriber = _parentSubscriber;
	        var next;
	        var context = _this;
	        if (isFunction$1(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (observerOrNext !== empty) {
	                context = Object.create(observerOrNext);
	                if (isFunction$1(context.unsubscribe)) {
	                    _this.add(context.unsubscribe.bind(context));
	                }
	                context.unsubscribe = _this.unsubscribe.bind(_this);
	            }
	        }
	        _this._context = context;
	        _this._next = next;
	        _this._error = error;
	        _this._complete = complete;
	        return _this;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
	            if (this._error) {
	                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parentSubscriber, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parentSubscriber.syncErrorThrowable) {
	                this.unsubscribe();
	                if (useDeprecatedSynchronousErrorHandling) {
	                    throw err;
	                }
	                hostReportError(err);
	            }
	            else {
	                if (useDeprecatedSynchronousErrorHandling) {
	                    _parentSubscriber.syncErrorValue = err;
	                    _parentSubscriber.syncErrorThrown = true;
	                }
	                else {
	                    hostReportError(err);
	                }
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        var _this = this;
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (this._complete) {
	                var wrappedComplete = function () { return _this._complete.call(_this._context); };
	                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(wrappedComplete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            if (config.useDeprecatedSynchronousErrorHandling) {
	                throw err;
	            }
	            else {
	                hostReportError(err);
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        if (!config.useDeprecatedSynchronousErrorHandling) {
	            throw new Error('bad call');
	        }
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            if (config.useDeprecatedSynchronousErrorHandling) {
	                parent.syncErrorValue = err;
	                parent.syncErrorThrown = true;
	                return true;
	            }
	            else {
	                hostReportError(err);
	                return true;
	            }
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parentSubscriber = this._parentSubscriber;
	        this._context = null;
	        this._parentSubscriber = null;
	        _parentSubscriber.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
	function canReportError(observer) {
	    while (observer) {
	        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
	        if (closed_1 || isStopped) {
	            return false;
	        }
	        else if (destination && destination instanceof Subscriber) {
	            observer = destination;
	        }
	        else {
	            observer = null;
	        }
	    }
	    return true;
	}

	/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber]) {
	            return nextOrObserver[rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber(empty);
	    }
	    return new Subscriber(nextOrObserver, error, complete);
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function identity$1(x) {
	    return x;
	}

	/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
	function pipeFromArray(fns) {
	    if (fns.length === 0) {
	        return identity$1;
	    }
	    if (fns.length === 1) {
	        return fns[0];
	    }
	    return function piped(input) {
	        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
	    };
	}

	/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
	var Observable = /*@__PURE__*/ (function () {
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    Observable.prototype.lift = function (operator) {
	        var observable$$1 = new Observable();
	        observable$$1.source = this;
	        observable$$1.operator = operator;
	        return observable$$1;
	    };
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            sink.add(operator.call(sink, this.source));
	        }
	        else {
	            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
	                this._subscribe(sink) :
	                this._trySubscribe(sink));
	        }
	        if (config.useDeprecatedSynchronousErrorHandling) {
	            if (sink.syncErrorThrowable) {
	                sink.syncErrorThrowable = false;
	                if (sink.syncErrorThrown) {
	                    throw sink.syncErrorValue;
	                }
	            }
	        }
	        return sink;
	    };
	    Observable.prototype._trySubscribe = function (sink) {
	        try {
	            return this._subscribe(sink);
	        }
	        catch (err) {
	            if (config.useDeprecatedSynchronousErrorHandling) {
	                sink.syncErrorThrown = true;
	                sink.syncErrorValue = err;
	            }
	            if (canReportError(sink)) {
	                sink.error(err);
	            }
	            else {
	                console.warn(err);
	            }
	        }
	    };
	    Observable.prototype.forEach = function (next, promiseCtor) {
	        var _this = this;
	        promiseCtor = getPromiseCtor(promiseCtor);
	        return new promiseCtor(function (resolve, reject) {
	            var subscription;
	            subscription = _this.subscribe(function (value) {
	                try {
	                    next(value);
	                }
	                catch (err) {
	                    reject(err);
	                    if (subscription) {
	                        subscription.unsubscribe();
	                    }
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        var source$$1 = this.source;
	        return source$$1 && source$$1.subscribe(subscriber);
	    };
	    Observable.prototype[observable] = function () {
	        return this;
	    };
	    Observable.prototype.pipe = function () {
	        var operations = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            operations[_i] = arguments[_i];
	        }
	        if (operations.length === 0) {
	            return this;
	        }
	        return pipeFromArray(operations)(this);
	    };
	    Observable.prototype.toPromise = function (promiseCtor) {
	        var _this = this;
	        promiseCtor = getPromiseCtor(promiseCtor);
	        return new promiseCtor(function (resolve, reject) {
	            var value;
	            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	        });
	    };
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	function getPromiseCtor(promiseCtor) {
	    if (!promiseCtor) {
	        promiseCtor = config.Promise || Promise;
	    }
	    if (!promiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return promiseCtor;
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	var InnerSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        var _this = _super.call(this) || this;
	        _this.parent = parent;
	        _this.outerValue = outerValue;
	        _this.outerIndex = outerIndex;
	        _this.index = 0;
	        return _this;
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
	}(Subscriber));

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var subscribeToArray = function (array) {
	    return function (subscriber) {
	        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
	            subscriber.next(array[i]);
	        }
	        subscriber.complete();
	    };
	};

	/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
	var subscribeToPromise = function (promise) {
	    return function (subscriber) {
	        promise.then(function (value) {
	            if (!subscriber.closed) {
	                subscriber.next(value);
	                subscriber.complete();
	            }
	        }, function (err) { return subscriber.error(err); })
	            .then(null, hostReportError);
	        return subscriber;
	    };
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function getSymbolIterator() {
	    if (typeof Symbol !== 'function' || !Symbol.iterator) {
	        return '@@iterator';
	    }
	    return Symbol.iterator;
	}
	var iterator$3 = /*@__PURE__*/ getSymbolIterator();

	/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
	var subscribeToIterable = function (iterable) {
	    return function (subscriber) {
	        var iterator$$1 = iterable[iterator$3]();
	        do {
	            var item = void 0;
	            try {
	                item = iterator$$1.next();
	            }
	            catch (err) {
	                subscriber.error(err);
	                return subscriber;
	            }
	            if (item.done) {
	                subscriber.complete();
	                break;
	            }
	            subscriber.next(item.value);
	            if (subscriber.closed) {
	                break;
	            }
	        } while (true);
	        if (typeof iterator$$1.return === 'function') {
	            subscriber.add(function () {
	                if (iterator$$1.return) {
	                    iterator$$1.return();
	                }
	            });
	        }
	        return subscriber;
	    };
	};

	/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
	var subscribeToObservable = function (obj) {
	    return function (subscriber) {
	        var obs = obj[observable]();
	        if (typeof obs.subscribe !== 'function') {
	            throw new TypeError('Provided object does not correctly implement Symbol.observable');
	        }
	        else {
	            return obs.subscribe(subscriber);
	        }
	    };
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var isArrayLike$1 = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isPromise(value) {
	    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}

	/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
	var subscribeTo = function (result) {
	    if (!!result && typeof result[observable] === 'function') {
	        return subscribeToObservable(result);
	    }
	    else if (isArrayLike$1(result)) {
	        return subscribeToArray(result);
	    }
	    else if (isPromise(result)) {
	        return subscribeToPromise(result);
	    }
	    else if (!!result && typeof result[iterator$3] === 'function') {
	        return subscribeToIterable(result);
	    }
	    else {
	        var value = isObject$2(result) ? 'an invalid object' : "'" + result + "'";
	        var msg = "You provided " + value + " where a stream was expected."
	            + ' You can provide an Observable, Promise, Array, or Iterable.';
	        throw new TypeError(msg);
	    }
	};

	/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
	    if (innerSubscriber === void 0) {
	        innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    }
	    if (innerSubscriber.closed) {
	        return undefined;
	    }
	    if (result instanceof Observable) {
	        return result.subscribe(innerSubscriber);
	    }
	    return subscribeTo(result)(innerSubscriber);
	}

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	var OuterSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        return _super !== null && _super.apply(this, arguments) || this;
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
	}(Subscriber));

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function map$4(project, thisArg) {
	    return function mapOperation(source$$1) {
	        if (typeof project !== 'function') {
	            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	        }
	        return source$$1.lift(new MapOperator(project, thisArg));
	    };
	}
	var MapOperator = /*@__PURE__*/ (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	var MapSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        var _this = _super.call(this, destination) || this;
	        _this.project = project;
	        _this.count = 0;
	        _this.thisArg = thisArg || _this;
	        return _this;
	    }
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
	}(Subscriber));

	/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
	function scheduleObservable(input, scheduler) {
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        sub.add(scheduler.schedule(function () {
	            var observable$$1 = input[observable]();
	            sub.add(observable$$1.subscribe({
	                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
	                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
	                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
	            }));
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
	function schedulePromise(input, scheduler) {
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        sub.add(scheduler.schedule(function () {
	            return input.then(function (value) {
	                sub.add(scheduler.schedule(function () {
	                    subscriber.next(value);
	                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
	                }));
	            }, function (err) {
	                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
	            });
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
	function scheduleArray(input, scheduler) {
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        var i = 0;
	        sub.add(scheduler.schedule(function () {
	            if (i === input.length) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(input[i++]);
	            if (!subscriber.closed) {
	                sub.add(this.schedule());
	            }
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
	function scheduleIterable(input, scheduler) {
	    if (!input) {
	        throw new Error('Iterable cannot be null');
	    }
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        var iterator$$1;
	        sub.add(function () {
	            if (iterator$$1 && typeof iterator$$1.return === 'function') {
	                iterator$$1.return();
	            }
	        });
	        sub.add(scheduler.schedule(function () {
	            iterator$$1 = input[iterator$3]();
	            sub.add(scheduler.schedule(function () {
	                if (subscriber.closed) {
	                    return;
	                }
	                var value;
	                var done;
	                try {
	                    var result = iterator$$1.next();
	                    value = result.value;
	                    done = result.done;
	                }
	                catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	                if (done) {
	                    subscriber.complete();
	                }
	                else {
	                    subscriber.next(value);
	                    this.schedule();
	                }
	            }));
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
	function isInteropObservable(input) {
	    return input && typeof input[observable] === 'function';
	}

	/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
	function isIterable(input) {
	    return input && typeof input[iterator$3] === 'function';
	}

	/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
	function scheduled(input, scheduler) {
	    if (input != null) {
	        if (isInteropObservable(input)) {
	            return scheduleObservable(input, scheduler);
	        }
	        else if (isPromise(input)) {
	            return schedulePromise(input, scheduler);
	        }
	        else if (isArrayLike$1(input)) {
	            return scheduleArray(input, scheduler);
	        }
	        else if (isIterable(input) || typeof input === 'string') {
	            return scheduleIterable(input, scheduler);
	        }
	    }
	    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
	}

	/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
	function from$1(input, scheduler) {
	    if (!scheduler) {
	        if (input instanceof Observable) {
	            return input;
	        }
	        return new Observable(subscribeTo(input));
	    }
	    else {
	        return scheduled(input, scheduler);
	    }
	}

	/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) {
	        concurrent = Number.POSITIVE_INFINITY;
	    }
	    if (typeof resultSelector === 'function') {
	        return function (source$$1) { return source$$1.pipe(mergeMap(function (a, i) { return from$1(project(a, i)).pipe(map$4(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
	    }
	    else if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	    }
	    return function (source$$1) { return source$$1.lift(new MergeMapOperator(project, concurrent)); };
	}
	var MergeMapOperator = /*@__PURE__*/ (function () {
	    function MergeMapOperator(project, concurrent) {
	        if (concurrent === void 0) {
	            concurrent = Number.POSITIVE_INFINITY;
	        }
	        this.project = project;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source$$1) {
	        return source$$1.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, concurrent) {
	        if (concurrent === void 0) {
	            concurrent = Number.POSITIVE_INFINITY;
	        }
	        var _this = _super.call(this, destination) || this;
	        _this.project = project;
	        _this.concurrent = concurrent;
	        _this.hasCompleted = false;
	        _this.buffer = [];
	        _this.active = 0;
	        _this.index = 0;
	        return _this;
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
	        var innerSubscriber = new InnerSubscriber(this, value, index);
	        var destination = this.destination;
	        destination.add(innerSubscriber);
	        var innerSubscription = subscribeToResult(this, ish, undefined, undefined, innerSubscriber);
	        if (innerSubscription !== innerSubscriber) {
	            destination.add(innerSubscription);
	        }
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	        this.unsubscribe();
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
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
	}(OuterSubscriber));

	/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) {
	        concurrent = Number.POSITIVE_INFINITY;
	    }
	    return mergeMap(identity$1, concurrent);
	}

	/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
	function fromArray(input, scheduler) {
	    if (!scheduler) {
	        return new Observable(subscribeToArray(input));
	    }
	    else {
	        return scheduleArray(input, scheduler);
	    }
	}

	/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
	        return observables[0];
	    }
	    return mergeAll(concurrent)(fromArray(observables, scheduler));
	}

	/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
	var Action = /*@__PURE__*/ (function (_super) {
	    __extends(Action, _super);
	    function Action(scheduler, work) {
	        return _super.call(this) || this;
	    }
	    Action.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return this;
	    };
	    return Action;
	}(Subscription));

	/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
	var AsyncAction = /*@__PURE__*/ (function (_super) {
	    __extends(AsyncAction, _super);
	    function AsyncAction(scheduler, work) {
	        var _this = _super.call(this, scheduler, work) || this;
	        _this.scheduler = scheduler;
	        _this.work = work;
	        _this.pending = false;
	        return _this;
	    }
	    AsyncAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (this.closed) {
	            return this;
	        }
	        this.state = state;
	        var id = this.id;
	        var scheduler = this.scheduler;
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, delay);
	        }
	        this.pending = true;
	        this.delay = delay;
	        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
	        return this;
	    };
	    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return setInterval(scheduler.flush.bind(scheduler, this), delay);
	    };
	    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (delay !== null && this.delay === delay && this.pending === false) {
	            return id;
	        }
	        clearInterval(id);
	        return undefined;
	    };
	    AsyncAction.prototype.execute = function (state, delay) {
	        if (this.closed) {
	            return new Error('executing a cancelled action');
	        }
	        this.pending = false;
	        var error = this._execute(state, delay);
	        if (error) {
	            return error;
	        }
	        else if (this.pending === false && this.id != null) {
	            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	        }
	    };
	    AsyncAction.prototype._execute = function (state, delay) {
	        var errored = false;
	        var errorValue = undefined;
	        try {
	            this.work(state);
	        }
	        catch (e) {
	            errored = true;
	            errorValue = !!e && e || new Error(e);
	        }
	        if (errored) {
	            this.unsubscribe();
	            return errorValue;
	        }
	    };
	    AsyncAction.prototype._unsubscribe = function () {
	        var id = this.id;
	        var scheduler = this.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        this.work = null;
	        this.state = null;
	        this.pending = false;
	        this.scheduler = null;
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, null);
	        }
	        this.delay = null;
	    };
	    return AsyncAction;
	}(Action));

	var Scheduler = /*@__PURE__*/ (function () {
	    function Scheduler(SchedulerAction, now) {
	        if (now === void 0) {
	            now = Scheduler.now;
	        }
	        this.SchedulerAction = SchedulerAction;
	        this.now = now;
	    }
	    Scheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return new this.SchedulerAction(this, work).schedule(state, delay);
	    };
	    Scheduler.now = function () { return Date.now(); };
	    return Scheduler;
	}());

	/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
	var AsyncScheduler = /*@__PURE__*/ (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler(SchedulerAction, now) {
	        if (now === void 0) {
	            now = Scheduler.now;
	        }
	        var _this = _super.call(this, SchedulerAction, function () {
	            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
	                return AsyncScheduler.delegate.now();
	            }
	            else {
	                return now();
	            }
	        }) || this;
	        _this.actions = [];
	        _this.active = false;
	        _this.scheduled = undefined;
	        return _this;
	    }
	    AsyncScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
	            return AsyncScheduler.delegate.schedule(work, delay, state);
	        }
	        else {
	            return _super.prototype.schedule.call(this, work, delay, state);
	        }
	    };
	    AsyncScheduler.prototype.flush = function (action) {
	        var actions = this.actions;
	        if (this.active) {
	            actions.push(action);
	            return;
	        }
	        var error;
	        this.active = true;
	        do {
	            if (error = action.execute(action.state, action.delay)) {
	                break;
	            }
	        } while (action = actions.shift());
	        this.active = false;
	        if (error) {
	            while (action = actions.shift()) {
	                action.unsubscribe();
	            }
	            throw error;
	        }
	    };
	    return AsyncScheduler;
	}(Scheduler));

	/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
	var asyncScheduler = /*@__PURE__*/ new AsyncScheduler(AsyncAction);
	var async = asyncScheduler;

	/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) {
	        scheduler = async;
	    }
	    return function (source$$1) { return source$$1.lift(new DebounceTimeOperator(dueTime, scheduler)); };
	}
	var DebounceTimeOperator = /*@__PURE__*/ (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	var DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        var _this = _super.call(this, destination) || this;
	        _this.dueTime = dueTime;
	        _this.scheduler = scheduler;
	        _this.debouncedSubscription = null;
	        _this.lastValue = null;
	        _this.hasValue = false;
	        return _this;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            var lastValue = this.lastValue;
	            this.lastValue = null;
	            this.hasValue = false;
	            this.destination.next(lastValue);
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}

	var freezing = !fails(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = createCommonjsModule(function (module) {
	var defineProperty = objectDefineProperty.f;



	var METADATA = uid('meta');
	var id = 0;

	var isExtensible = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + ++id, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
	  return it;
	};

	var meta = module.exports = {
	  REQUIRED: false,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;
	});
	var internalMetadata_1 = internalMetadata.REQUIRED;
	var internalMetadata_2 = internalMetadata.fastKey;
	var internalMetadata_3 = internalMetadata.getWeakData;
	var internalMetadata_4 = internalMetadata.onFreeze;

	var iterate_1 = createCommonjsModule(function (module) {
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
	  var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
	  var iterator, iterFn, index, length, result, next, step;

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = AS_ENTRIES
	          ? boundFunction(anObject(step = iterable[index])[0], step[1])
	          : boundFunction(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	iterate.stop = function (result) {
	  return new Result(true, result);
	};
	});

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var defineProperty$8 = objectDefineProperty.f;
	var forEach$4 = arrayIteration.forEach;



	var setInternalState$3 = internalState.set;
	var internalStateGetterFor = internalState.getterFor;

	var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;

	  if (!descriptors || typeof NativeConstructor != 'function'
	    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
	  ) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    internalMetadata.REQUIRED = true;
	  } else {
	    Constructor = wrapper(function (target, iterable) {
	      setInternalState$3(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
	        type: CONSTRUCTOR_NAME,
	        collection: new NativeConstructor()
	      });
	      if (iterable != undefined) iterate_1(iterable, target[ADDER], target, IS_MAP);
	    });

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    forEach$4(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
	        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });

	    IS_WEAK || defineProperty$8(Constructor.prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }

	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  _export({ global: true, forced: true }, exported);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var redefineAll = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else redefine(target, key, src[key], options);
	  } return target;
	};

	var SPECIES$3 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
	    defineProperty(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var defineProperty$9 = objectDefineProperty.f;








	var fastKey = internalMetadata.fastKey;


	var setInternalState$4 = internalState.set;
	var internalStateGetterFor$1 = internalState.getterFor;

	var collectionStrong = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState$4(that, {
	        type: CONSTRUCTOR_NAME,
	        index: objectCreate(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!descriptors) that.size = 0;
	      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
	    });

	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (descriptors) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };

	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        if (descriptors) state.size = 0;
	        else that.size = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (descriptors) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    redefineAll(C.prototype, IS_MAP ? {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (descriptors) defineProperty$9(C.prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return C;
	  },
	  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$4(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return { value: undefined, done: true };
	      }
	      // return step by kind
	      if (kind == 'keys') return { value: entry.key, done: false };
	      if (kind == 'values') return { value: entry.value, done: false };
	      return { value: [entry.key, entry.value], done: false };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	// `Map` constructor
	// https://tc39.github.io/ecma262/#sec-map-objects
	var es_map = collection('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var map$5 = path.Map;

	// https://tc39.github.io/proposal-setmap-offrom/




	var collectionFrom = function from(source$$1 /* , mapFn, thisArg */) {
	  var length = arguments.length;
	  var mapFn = length > 1 ? arguments[1] : undefined;
	  var mapping, A, n, boundFunction;
	  aFunction(this);
	  mapping = mapFn !== undefined;
	  if (mapping) aFunction(mapFn);
	  if (source$$1 == undefined) return new this();
	  A = [];
	  if (mapping) {
	    n = 0;
	    boundFunction = functionBindContext(mapFn, length > 2 ? arguments[2] : undefined, 2);
	    iterate_1(source$$1, function (nextItem) {
	      A.push(boundFunction(nextItem, n++));
	    });
	  } else {
	    iterate_1(source$$1, A.push, A);
	  }
	  return new this(A);
	};

	// `Map.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	_export({ target: 'Map', stat: true }, {
	  from: collectionFrom
	});

	// https://tc39.github.io/proposal-setmap-offrom/
	var collectionOf$1 = function of() {
	  var length = arguments.length;
	  var A = new Array(length);
	  while (length--) A[length] = arguments[length];
	  return new this(A);
	};

	// `Map.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	_export({ target: 'Map', stat: true }, {
	  of: collectionOf$1
	});

	// https://github.com/tc39/collection-methods
	var collectionDeleteAll = function (/* ...elements */) {
	  var collection = anObject(this);
	  var remover = aFunction(collection['delete']);
	  var allDeleted = true;
	  var wasDeleted;
	  for (var k = 0, len = arguments.length; k < len; k++) {
	    wasDeleted = remover.call(collection, arguments[k]);
	    allDeleted = allDeleted && wasDeleted;
	  }
	  return !!allDeleted;
	};

	// `Map.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  deleteAll: function deleteAll(/* ...elements */) {
	    return collectionDeleteAll.apply(this, arguments);
	  }
	});

	var getIterator = function (it) {
	  var iteratorMethod = getIteratorMethod(it);
	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  } return anObject(iteratorMethod.call(it));
	};

	var getMapIterator = getIterator;

	// `Map.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  every: function every(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    return !iterate_1(iterator, function (key, value) {
	      if (!boundFunction(value, key, map)) return iterate_1.stop();
	    }, undefined, true, true).stopped;
	  }
	});

	var SPECIES$4 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction(S);
	};

	// `Map.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
	    var setter = aFunction(newMap.set);
	    iterate_1(iterator, function (key, value) {
	      if (boundFunction(value, key, map)) setter.call(newMap, key, value);
	    }, undefined, true, true);
	    return newMap;
	  }
	});

	// `Map.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  find: function find(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    return iterate_1(iterator, function (key, value) {
	      if (boundFunction(value, key, map)) return iterate_1.stop(value);
	    }, undefined, true, true).result;
	  }
	});

	// `Map.prototype.findKey` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  findKey: function findKey(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    return iterate_1(iterator, function (key, value) {
	      if (boundFunction(value, key, map)) return iterate_1.stop(key);
	    }, undefined, true, true).result;
	  }
	});

	// `Map.groupBy` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', stat: true }, {
	  groupBy: function groupBy(iterable, keyDerivative) {
	    var newMap = new this();
	    aFunction(keyDerivative);
	    var has = aFunction(newMap.has);
	    var get = aFunction(newMap.get);
	    var set = aFunction(newMap.set);
	    iterate_1(iterable, function (element) {
	      var derivedKey = keyDerivative(element);
	      if (!has.call(newMap, derivedKey)) set.call(newMap, derivedKey, [element]);
	      else get.call(newMap, derivedKey).push(element);
	    });
	    return newMap;
	  }
	});

	// `SameValueZero` abstract operation
	// https://tc39.github.io/ecma262/#sec-samevaluezero
	var sameValueZero = function (x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y || x != x && y != y;
	};

	// `Map.prototype.includes` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  includes: function includes(searchElement) {
	    return iterate_1(getMapIterator(anObject(this)), function (key, value) {
	      if (sameValueZero(value, searchElement)) return iterate_1.stop();
	    }, undefined, true, true).stopped;
	  }
	});

	// `Map.keyBy` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', stat: true }, {
	  keyBy: function keyBy(iterable, keyDerivative) {
	    var newMap = new this();
	    aFunction(keyDerivative);
	    var setter = aFunction(newMap.set);
	    iterate_1(iterable, function (element) {
	      setter.call(newMap, keyDerivative(element), element);
	    });
	    return newMap;
	  }
	});

	// `Map.prototype.includes` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  keyOf: function keyOf(searchElement) {
	    return iterate_1(getMapIterator(anObject(this)), function (key, value) {
	      if (value === searchElement) return iterate_1.stop(key);
	    }, undefined, true, true).result;
	  }
	});

	// `Map.prototype.mapKeys` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
	    var setter = aFunction(newMap.set);
	    iterate_1(iterator, function (key, value) {
	      setter.call(newMap, boundFunction(value, key, map), value);
	    }, undefined, true, true);
	    return newMap;
	  }
	});

	// `Map.prototype.mapValues` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  mapValues: function mapValues(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
	    var setter = aFunction(newMap.set);
	    iterate_1(iterator, function (key, value) {
	      setter.call(newMap, key, boundFunction(value, key, map));
	    }, undefined, true, true);
	    return newMap;
	  }
	});

	// `Map.prototype.merge` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  // eslint-disable-next-line no-unused-vars
	  merge: function merge(iterable /* ...iterbles */) {
	    var map = anObject(this);
	    var setter = aFunction(map.set);
	    var i = 0;
	    while (i < arguments.length) {
	      iterate_1(arguments[i++], setter, map, true);
	    }
	    return map;
	  }
	});

	// `Map.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aFunction(callbackfn);
	    iterate_1(iterator, function (key, value) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, key, map);
	      }
	    }, undefined, true, true);
	    if (noInitial) throw TypeError('Reduce of empty map with no initial value');
	    return accumulator;
	  }
	});

	// `Set.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  some: function some(callbackfn /* , thisArg */) {
	    var map = anObject(this);
	    var iterator = getMapIterator(map);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	    return iterate_1(iterator, function (key, value) {
	      if (boundFunction(value, key, map)) return iterate_1.stop();
	    }, undefined, true, true).stopped;
	  }
	});

	// `Set.prototype.update` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  update: function update(key, callback /* , thunk */) {
	    var map = anObject(this);
	    var length = arguments.length;
	    aFunction(callback);
	    var isPresentInMap = map.has(key);
	    if (!isPresentInMap && length < 3) {
	      throw TypeError('Updating absent value');
	    }
	    var value = isPresentInMap ? map.get(key) : aFunction(length > 2 ? arguments[2] : undefined)(key, map);
	    map.set(key, callback(value, key, map));
	    return map;
	  }
	});

	// `Map.prototype.upsert` method
	// https://github.com/thumbsupep/proposal-upsert
	var mapUpsert = function upsert(key, updateFn /* , insertFn */) {
	  var map = anObject(this);
	  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
	  var value;
	  if (typeof updateFn != 'function' && typeof insertFn != 'function') {
	    throw TypeError('At least one callback required');
	  }
	  if (map.has(key)) {
	    value = map.get(key);
	    if (typeof updateFn == 'function') {
	      value = updateFn(value);
	      map.set(key, value);
	    }
	  } else if (typeof insertFn == 'function') {
	    value = insertFn();
	    map.set(key, value);
	  } return value;
	};

	// `Map.prototype.upsert` method
	// https://github.com/thumbsupep/proposal-upsert
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  upsert: mapUpsert
	});

	// TODO: remove from `core-js@4`




	// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.upsert`)
	// https://github.com/thumbsupep/proposal-upsert
	_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
	  updateOrInsert: mapUpsert
	});

	// TODO: remove from `core-js@4`


	var map$6 = map$5;

	var map$7 = map$6;

	var $indexOf = arrayIncludes.indexOf;



	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$2 = arrayMethodIsStrict('indexOf');
	var USES_TO_LENGTH$7 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$2 || !USES_TO_LENGTH$7 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var indexOf$1 = entryVirtual('Array').indexOf;

	var ArrayPrototype$9 = Array.prototype;

	var indexOf_1 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$9 || (it instanceof Array && own === ArrayPrototype$9.indexOf) ? indexOf$1 : own;
	};

	var indexOf$2 = indexOf_1;

	var indexOf$3 = indexOf$2;

	function _isNativeFunction(fn) {
	  var _context;

	  return indexOf$3(_context = Function.toString.call(fn)).call(_context, "[native code]") !== -1;
	}

	var bind$3 = bind_1;

	var bind$4 = bind$3;

	var construct$4 = construct$1;

	var construct$5 = construct$4;

	function _isNativeReflectConstruct$1() {
	  if (typeof Reflect === "undefined" || !construct$5) return false;
	  if (construct$5.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(construct$5(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct$1()) {
	    _construct = construct$5;
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);

	      var Constructor = bind$4(Function).apply(Parent, a);

	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	function _wrapNativeSuper(Class) {
	  var _cache = typeof map$7 === "function" ? new map$7() : undefined;

	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = create$4(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct$3(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !construct$3) return false; if (construct$3.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct$3(Date, [], function () {})); return true; } catch (e) { return false; } }
	var AssertionError = /*#__PURE__*/function (_Error) {
	  _inherits(AssertionError, _Error);

	  var _super = _createSuper$1(AssertionError);

	  function AssertionError(message) {
	    var _this;

	    _classCallCheck(this, AssertionError);

	    _this = _super.call(this, message);
	    _this.name = _this.constructor.name;

	    if (typeof Error.captureStackTrace === 'function') {
	      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
	    } else {
	      _this.stack = new Error(message).stack;
	    }

	    return _this;
	  }

	  return AssertionError;
	}( /*#__PURE__*/_wrapNativeSuper(Error));
	/**
	 * @param {*} value
	 * @param {string} message
	 * @throws AssertionError
	 */

	function assert(value, message) {
	  if (!value) {
	    throw new AssertionError(message || "Assertion failed");
	  }
	}
	/**
	 * Alias of `assert` function.
	 * @param value
	 * @param message
	 */

	function ok(value, message) {
	  return assert(value, message);
	}
	/**
	 * @param {*} value
	 * @param {Function} Ctor
	 * @param {string|undefined} [msg]
	 * @throws {AssertionError}
	 */

	function instanceOf(value, Ctor, msg) {
	  assert(value instanceof Ctor, msg || "value is an instance of ".concat(Ctor.name));
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasMap(vm) {
	  assert(vm.$map, 'component has "$map" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasView(vm) {
	  assert(vm.$view, 'component has "$view" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasGeolocation(vm) {
	  assert(vm.$geolocation, 'component has "$geolocation" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasFeature(vm) {
	  assert(vm.$feature, 'component has "$feature" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasLayer(vm) {
	  assert(vm.$layer, 'component has "$layer" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasSource(vm) {
	  assert(vm.$source, 'component has "$source" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasGeometry(vm) {
	  assert(vm.$geometry, 'component has "$geometry" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasInteraction(vm) {
	  assert(vm.$interaction, 'component has "$interaction" property');
	}
	/**
	 * @param {Object} vm
	 * @return {void}
	 * @throws {AssertionError}
	 */

	function hasOverlay(vm) {
	  assert(vm.$overlay, 'component has "$overlay" property');
	}
	function hasGraticule(vm) {
	  assert(vm.$graticule, 'component has "$graticule" property');
	}

	/**
	 * Mixin with helpers for projection transforms between current view projection and global defined projection.
	 */

	var projTransforms = {
	  computed: {
	    /**
	     * @return {module:ol/proj~ProjectionLike}
	     */
	    viewProjection: function viewProjection() {
	      if (this.rev && this.$view) {
	        return this.$view.getProjection().getCode();
	      }

	      return this.projection || EPSG_3857;
	    },

	    /**
	     * @return {module:ol/proj~ProjectionLike}
	     */
	    resolvedDataProjection: function resolvedDataProjection() {
	      return coalesce(this.dataProjection, // may or may not be present
	      this.projection, // may or may not be present
	      this.$map && getMapDataProjection(this.$map), this.$options.dataProjection, this.viewProjection);
	    }
	  },
	  methods: {
	    pointToViewProj: function pointToViewProj(point) {
	      return transformPoint(point, this.resolvedDataProjection, this.viewProjection);
	    },
	    pointToDataProj: function pointToDataProj(point) {
	      return transformPoint(point, this.viewProjection, this.resolvedDataProjection);
	    },
	    lineToViewProj: function lineToViewProj(line) {
	      return transformLine(line, this.resolvedDataProjection, this.viewProjection);
	    },
	    lineToDataProj: function lineToDataProj(line) {
	      return transformLine(line, this.viewProjection, this.resolvedDataProjection);
	    },
	    polygonToViewProj: function polygonToViewProj(polygon) {
	      return transformPolygon(polygon, this.resolvedDataProjection, this.viewProjection);
	    },
	    polygonToDataProj: function polygonToDataProj(polygon) {
	      return transformPolygon(polygon, this.viewProjection, this.resolvedDataProjection);
	    },
	    multiPointToViewProj: function multiPointToViewProj(multiPoint) {
	      return transformMultiPoint(multiPoint, this.resolvedDataProjection, this.viewProjection);
	    },
	    multiPointToDataProj: function multiPointToDataProj(multiPoint) {
	      return transformMultiPoint(multiPoint, this.viewProjection, this.resolvedDataProjection);
	    },
	    multiLineToViewProj: function multiLineToViewProj(multiLine) {
	      return transformMultiLine(multiLine, this.resolvedDataProjection, this.viewProjection);
	    },
	    multiLineToDataProj: function multiLineToDataProj(multiLine) {
	      return transformMultiLine(multiLine, this.viewProjection, this.resolvedDataProjection);
	    },
	    multiPolygonToViewProj: function multiPolygonToViewProj(multiPolygon) {
	      return transformMultiPolygon(multiPolygon, this.resolvedDataProjection, this.viewProjection);
	    },
	    multiPolygonToDataProj: function multiPolygonToDataProj(multiPolygon) {
	      return transformMultiPolygon(multiPolygon, this.viewProjection, this.resolvedDataProjection);
	    },
	    extentToViewProj: function extentToViewProj(extent$$1) {
	      return proj.transformExtent(extent$$1, this.resolvedDataProjection, this.viewProjection);
	    },
	    extentToDataProj: function extentToDataProj(extent$$1) {
	      return proj.transformExtent(extent$$1, this.viewProjection, this.resolvedDataProjection);
	    },
	    writeGeometryInDataProj: function writeGeometryInDataProj(geometry) {
	      return writeGeoJsonGeometry(geometry, this.viewProjection, this.resolvedDataProjection);
	    },
	    writeGeometryInViewProj: function writeGeometryInViewProj(geometry) {
	      return writeGeoJsonGeometry(geometry);
	    },
	    readGeometryInDataProj: function readGeometryInDataProj(geometry) {
	      return readGeoJsonGeometry(geometry, this.viewProjection, this.resolvedDataProjection);
	    },
	    writeFeatureInDataProj: function writeFeatureInDataProj(feature) {
	      return writeGeoJsonFeature(feature, this.viewProjection, this.resolvedDataProjection);
	    },
	    writeFeatureInViewProj: function writeFeatureInViewProj(feature) {
	      return writeGeoJsonFeature(feature);
	    },
	    readFeatureInDataProj: function readFeatureInDataProj(feature) {
	      return readGeoJsonFeature(feature, this.viewProjection, this.resolvedDataProjection);
	    }
	  }
	};

	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH$8 = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

	var max$2 = Math.max;
	var min$2 = Math.min;
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 || !USES_TO_LENGTH$8 }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$2(max$2(toInteger(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var splice = entryVirtual('Array').splice;

	var ArrayPrototype$a = Array.prototype;

	var splice_1 = function (it) {
	  var own = it.splice;
	  return it === ArrayPrototype$a || (it instanceof Array && own === ArrayPrototype$a.splice) ? splice : own;
	};

	var splice$1 = splice_1;

	var splice$2 = splice$1;

	var indexOf$4 = indexOf_1;

	var indexOf$5 = indexOf$4;

	/**
	 * RxJS subscriptions manager.
	 */

	var rxSubs = {
	  methods: {
	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {},

	    /**
	     * @return {void}
	     * @protected
	     */
	    unsubscribeAll: function unsubscribeAll() {
	      var _context;

	      forEach$2(_context = this._rxSubs).call(_context, function (x) {
	        return x.unsubscribe();
	      });

	      this._rxSubs = [];
	    },

	    /**
	     * @param {Observable<T>} observable
	     * @param {function} [next] Next handler or Observer object.
	     * @param {function} [error] Error handler.
	     * @param {function} [complete] Complete handler.
	     * @return {Subscription}
	     * @protected
	     */
	    subscribeTo: function subscribeTo(observable) {
	      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

	      var _error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;

	      var complete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

	      _error = function error$$1(err) {

	        _error(err);
	      };

	      var subs = observable.subscribe(next, _error, complete);

	      this._rxSubs.push(subs);

	      return subs;
	    },
	    unsubscribe: function unsubscribe(subs) {
	      var _context2, _context3;

	      var idx = indexOf$5(_context2 = this._rxSubs).call(_context2, subs);

	      if (idx === -1) return;
	      subs.unsubscribe();

	      splice$2(_context3 = this._rxSubs).call(_context3, idx, 1);
	    }
	  },
	  beforeCreate: function beforeCreate() {
	    /**
	     * @type {Subscription[]}
	     * @private
	     */
	    this._rxSubs = [];
	  },
	  destroyed: function destroyed() {
	    this.unsubscribeAll();
	  }
	};

	/**
	 * Simple Identity map with refs count
	 */
	var IdentityMap = /*#__PURE__*/function () {
	  function IdentityMap() {
	    _classCallCheck(this, IdentityMap);

	    _defineProperty(this, "_pools", create$2(null));
	  }

	  _createClass(IdentityMap, [{
	    key: "_preparePool",

	    /**
	     * @param {string} pool
	     * @private
	     */
	    value: function _preparePool(pool) {
	      this._pools[pool] || (this._pools[pool] = create$2(null));
	    }
	    /**
	     * @param {string} id
	     * @param {*} value
	     * @param {string} pool
	     */

	  }, {
	    key: "set",
	    value: function set(id, value) {
	      var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
	      if (value == null) return;

	      this._preparePool(pool);

	      this._pools[pool][id] = {
	        value: value,
	        refs: 1
	      };
	    }
	    /**
	     * @param {string} id
	     * @param {string} pool
	     */

	  }, {
	    key: "get",
	    value: function get(id) {
	      var pool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

	      this._preparePool(pool);

	      var rec = this._pools[pool][id];
	      if (!rec || rec.value == null) return;
	      rec.refs++;
	      this._pools[pool][id] = rec;
	      return rec.value;
	    }
	    /**
	     * @param {string} id
	     * @param {string} pool
	     */

	  }, {
	    key: "unset",
	    value: function unset(id) {
	      var pool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

	      this._preparePool(pool);

	      var rec = this._pools[pool][id];
	      if (!rec || rec.value == null) return;
	      rec.refs--;

	      if (rec.refs === 0) {
	        delete this._pools[pool][id];
	      }
	    }
	    /**
	     * @param {string} id
	     * @param {string} pool
	     * @return {boolean}
	     */

	  }, {
	    key: "has",
	    value: function has(id) {
	      var pool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

	      this._preparePool(pool);

	      return !!this._pools[pool][id];
	    }
	    /**
	     * @param {string} pool
	     * @return {string[]}
	     */

	  }, {
	    key: "ids",
	    value: function ids() {
	      var pool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

	      this._preparePool(pool);

	      return keys$3(this._pools[pool]);
	    }
	    /**
	     * @param {string} id
	     * @param {string} pool
	     * @return {*}
	     */

	  }, {
	    key: "refs",
	    value: function refs(id) {
	      var pool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

	      this._preparePool(pool);

	      return this.has(id, pool) ? this._pools[pool][id].refs : undefined;
	    }
	  }]);

	  return IdentityMap;
	}();

	var INSTANCES_POOL = 'instances';
	var identMap = {
	  INSTANCES_POOL: INSTANCES_POOL,
	  props: {
	    /**
	     * Unique key for saving to identity map
	     * @type {string|number}
	     * @experimental
	     */
	    ident: [String, Number]
	  },
	  data: function data() {
	    return {
	      idents: stubObject()
	    };
	  },
	  computed: {
	    selfIdent: function selfIdent() {
	      return this.makeSelfIdent();
	    }
	  },
	  watch: {
	    ident: function ident(value, prev) {
	      if (prev && this.$identityMap.has(prev)) {
	        this.$identityMap.unset(prev);
	      }

	      if (value && !this.$identityMap.has(value)) {
	        this.$identityMap.set(value);
	      }
	    }
	  },
	  beforeCreate: function beforeCreate() {
	    initIdentityMap();
	  },
	  destroyed: function destroyed() {
	    this.unsetInstances();
	  },
	  methods: {
	    /**
	     * @param parts
	     * @return {string|undefined}
	     * @protected
	     */
	    makeSelfIdent: function makeSelfIdent() {
	      var _context;

	      if (!this.ident) return;

	      for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
	        parts[_key] = arguments[_key];
	      }

	      return this.makeIdent.apply(this, concat$2(_context = [this.ident]).call(_context, parts));
	    },

	    /**
	     * @param parts
	     * @return {string}
	     */
	    makeIdent: function makeIdent() {
	      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        parts[_key2] = arguments[_key2];
	      }

	      return filter$2(parts).call(parts, identity).join('.');
	    },

	    /**
	     * Caches or reuse factory result in the identity map
	     * and returns result.
	     *
	     * @param {string|undefined} ident
	     * @param {function} factory
	     * @returns {*}
	     */
	    instanceFactoryCall: function instanceFactoryCall(ident, factory) {
	      if (ident && this.$identityMap.has(ident, INSTANCES_POOL)) {
	        this.idents[ident] = true;
	        return this.$identityMap.get(ident, INSTANCES_POOL);
	      }

	      var inst = factory();

	      if (ident) {
	        this.idents[ident] = true;
	        this.$identityMap.set(ident, inst, INSTANCES_POOL);
	      }

	      return inst;
	    },

	    /**
	     * @param {string|undefined} ident
	     * @returns {*}
	     */
	    getInstance: function getInstance(ident) {
	      if (!ident) return;
	      if (!this.hasInstance(ident)) return;
	      this.idents[ident] = true;
	      return this.$identityMap.get(ident, INSTANCES_POOL);
	    },

	    /**
	     * @param {string|undefined} ident
	     * @returns {*}
	     */
	    hasInstance: function hasInstance(ident) {
	      if (!ident) return false;
	      return this.$identityMap.has(ident, INSTANCES_POOL);
	    },

	    /**
	     * @param {string|undefined} ident
	     */
	    unsetInstance: function unsetInstance(ident) {
	      if (!ident) return;
	      delete this.idents[ident];
	      this.$identityMap.unset(ident, INSTANCES_POOL);
	    },

	    /**
	     * Unsets all self indets
	     * @return {void}
	     */
	    unsetInstances: function unsetInstances() {
	      var _context2, _context3;

	      forEach$2(_context2 = keys$4(this.idents)).call(_context2, bind$2(_context3 = this.unsetInstance).call(_context3, this));
	    }
	  }
	};

	function initIdentityMap() {
	  var imap = new IdentityMap();

	  if (!('$identityMap' in Vue)) {
	    defineProperties$1(Vue, {
	      $identityMap: {
	        enumerable: true,
	        get: function get() {
	          return imap;
	        }
	      }
	    });
	  }

	  if (!('$identityMap' in Vue.prototype)) {
	    defineProperties$1(Vue.prototype, {
	      $identityMap: {
	        enumerable: true,
	        get: function get() {
	          return imap;
	        }
	      }
	    });
	  }
	}

	var isArray$6 = isArray$1;

	var isArray$7 = isArray$6;

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _arrayWithoutHoles(arr) {
	  if (isArray$7(arr)) return _arrayLikeToArray(arr);
	}

	var from_1$3 = from_1;

	var from_1$4 = from_1$3;

	var ITERATOR$5 = wellKnownSymbol('iterator');

	var isIterable$1 = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$5] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || iterators.hasOwnProperty(classof(O));
	};

	var isIterable_1 = isIterable$1;

	var isIterable$2 = isIterable_1;

	function _iterableToArray(iter) {
	  if (typeof symbol$2 !== "undefined" && isIterable$2(Object(iter))) return from_1$4(iter);
	}

	var slice$4 = slice_1;

	var slice$5 = slice$4;

	function _unsupportedIterableToArray(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

	  var n = slice$5(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from_1$4(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function distinctUntilChanged(compare, keySelector) {
	    return function (source$$1) { return source$$1.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
	}
	var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        var _this = _super.call(this, destination) || this;
	        _this.keySelector = keySelector;
	        _this.hasKey = false;
	        if (typeof compare === 'function') {
	            _this.compare = compare;
	        }
	        return _this;
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            var keySelector = this.keySelector;
	            key = keySelector ? keySelector(value) : value;
	        }
	        catch (err) {
	            return this.destination.error(err);
	        }
	        var result = false;
	        if (this.hasKey) {
	            try {
	                var compare = this.compare;
	                result = compare(this.key, key);
	            }
	            catch (err) {
	                return this.destination.error(err);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (!result) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
	function fromEventPattern(addHandler, removeHandler, resultSelector) {
	    if (resultSelector) {
	        return fromEventPattern(addHandler, removeHandler).pipe(map$4(function (args) { return isArray$5(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
	    }
	    return new Observable(function (subscriber) {
	        var handler = function () {
	            var e = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                e[_i] = arguments[_i];
	            }
	            return subscriber.next(e.length === 1 ? e[0] : e);
	        };
	        var retValue;
	        try {
	            retValue = addHandler(handler);
	        }
	        catch (err) {
	            subscriber.error(err);
	            return undefined;
	        }
	        if (!isFunction$1(removeHandler)) {
	            return undefined;
	        }
	        return function () { return removeHandler(handler, retValue); };
	    });
	}

	/**
	 * Creates an Observable using OpenLayers event pattern that emits events coming from the given event target.
	 *
	 * @example **Subscribe on view center change events**
	 * const map = ol.Map({ ... })
	 * const changes = Observable.fromOlEvent(map.getView(), 'change:center')
	 *
	 * changes.subscribe(({ coordinate }) => console.log(coordinate))
	 *
	 * @param {module:ol/Observable~Observable} target OpenLayers event target.
	 * @param {string|Object[]} eventName The event name of interest, being emitted by the `target`
	 *                          or an array of events/selectors like `[{ event: 'event1', selector?: x => x }, ...]`.
	 * @param {function(...*): *} [selector] An optional function to post-process results. It takes the arguments
	 *    from the event handler and should return a single value.
	 * @return {Observable<T>}
	 * @memberOf {Observable}
	 */

	function fromOlEvent(target, eventName, selector) {
	  if (isArray$3(eventName)) {
	    return merge.apply(void 0, _toConsumableArray(map$2(eventName).call(eventName, function (elem) {
	      var eventName, selector;

	      if (_typeof(elem) === 'object') {
	        eventName = elem.event;
	        selector = elem.selector;
	      } else {
	        eventName = elem;
	      }

	      return fromOlEvent(target, eventName, selector);
	    })));
	  }

	  return fromEventPattern(function (handler) {
	    return target.on(eventName, handler);
	  }, function (handler) {
	    return target.un(eventName, handler);
	  }, selector);
	}

	/**
	 * Creates Observable from OpenLayers change:* event
	 * @param {module:ol/Observable~Observable} target
	 * @param {string|string[]} [prop]
	 * @param {boolean|function(a, b):boolean|undefined} [distinct] Distinct values by isEqual fn or by custom comparator
	 * @param {number|undefined} [debounce] Debounce values by passed amount of ms.
	 * @param {function|undefined} [selector] Custom selector
	 * @return {Observable<{prop: string, value: *}>}
	 */

	function fromOlChangeEvent(target, prop, distinct, debounce, selector) {
	  if (isArray$3(prop)) {
	    return merge.apply(void 0, _toConsumableArray(map$2(prop).call(prop, function (p) {
	      return fromOlChangeEvent(target, p);
	    })));
	  }

	  selector = selector || function (target, prop) {
	    return target.get(prop);
	  };

	  var event = "change:".concat(prop);
	  var observable = fromOlEvent(target, event, function () {
	    return selector(target, prop);
	  });
	  var operations = [];

	  if (debounce != null) {
	    operations.push(debounceTime(debounce));
	  }

	  if (distinct) {
	    isFunction(distinct) || (distinct = isEqual);
	    operations.push(distinctUntilChanged(distinct));
	  }

	  operations.push(map$4(function (value) {
	    return {
	      prop: prop,
	      value: value
	    };
	  }));
	  return observable.pipe.apply(observable, operations);
	}



	var rxExt = /*#__PURE__*/Object.freeze({
		observableFromOlChangeEvent: fromOlChangeEvent,
		observableFromOlEvent: fromOlEvent
	});

	var featuresContainer = {
	  mixins: [identMap, rxSubs, projTransforms],
	  computed: {
	    featureIds: function featureIds() {
	      var _context;

	      if (!this.rev) return [];
	      return map$2(_context = this.getFeatures()).call(_context, getFeatureId);
	    },
	    featuresViewProj: function featuresViewProj() {
	      var _context2, _context3;

	      if (!this.rev) return [];
	      return map$2(_context2 = this.getFeatures()).call(_context2, bind$2(_context3 = this.writeFeatureInViewProj).call(_context3, this));
	    },
	    featuresDataProj: function featuresDataProj() {
	      var _context4, _context5;

	      if (!this.rev) return [];
	      return map$2(_context4 = this.getFeatures()).call(_context4, bind$2(_context5 = this.writeFeatureInDataProj).call(_context5, this));
	    },
	    featuresCollectionIdent: function featuresCollectionIdent() {
	      if (!this.olObjIdent) return;
	      return this.makeIdent(this.olObjIdent, 'features_collection');
	    }
	  },
	  methods: {
	    /**
	     * @param {Array<(Feature|Vue|Object)>} features
	     * @return {void}
	     */
	    addFeatures: function addFeatures(features) {
	      var _context6;

	      forEach$3(features, bind$2(_context6 = this.addFeature).call(_context6, this));
	    },

	    /**
	     * @param {Feature|Vue|Object} feature
	     * @return {void}
	     */
	    addFeature: function addFeature(feature) {
	      if (feature instanceof Vue) {
	        feature = feature.$feature;
	      } else if (isPlainObject(feature)) {
	        feature = this.readFeatureInDataProj(feature);
	      }

	      instanceOf(feature, Feature);
	      initializeFeature(feature);
	      var foundFeature = this.getFeatureById(getFeatureId(feature));

	      if (foundFeature == null) {
	        this.$featuresCollection.push(feature);
	      } else {
	        mergeFeatures(foundFeature, feature);
	      }
	    },

	    /**
	     * @param {Array<(Feature|Vue|Object)>} features
	     * @return {void}
	     */
	    removeFeatures: function removeFeatures(features) {
	      var _context7;

	      forEach$3(features, bind$2(_context7 = this.removeFeature).call(_context7, this));
	    },

	    /**
	     * @param {Feature|Vue|Object} feature
	     * @return {void}
	     */
	    removeFeature: function removeFeature(feature) {
	      feature = this.getFeatureById(getFeatureId(feature));
	      if (!feature) return;
	      initializeFeature(feature);
	      this.$featuresCollection.remove(feature);
	    },

	    /**
	     * @return {void}
	     */
	    clearFeatures: function clearFeatures() {
	      this.$featuresCollection.clear();
	    },

	    /**
	     * @param {string|number} featureId
	     * @return {Feature|undefined}
	     */
	    getFeatureById: function getFeatureById(featureId) {
	      var _context8;

	      // todo add hash {featureId => featureIdx, ....}
	      return find$2(_context8 = this.$featuresCollection.getArray()).call(_context8, function (feature) {
	        return getFeatureId(feature) === featureId;
	      });
	    },

	    /**
	     * @return {Feature[]}
	     */
	    getFeatures: function getFeatures() {
	      return this.$featuresCollection.getArray();
	    },

	    /**
	     * @return {Collection<Feature>>}
	     */
	    getFeaturesCollection: function getFeaturesCollection() {
	      return this._featuresCollection;
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get featuresContainer() {
	          return vm;
	        }

	      };
	    }
	  },
	  created: function created() {
	    this._featuresCollection = this.instanceFactoryCall(this.featuresCollectionIdent, function () {
	      return new Collection();
	    });
	    this._featureSubs = {};
	    defineServices.call(this);
	    subscribeToCollectionEvents.call(this);
	  }
	};

	function defineServices() {
	  defineProperties$1(this, {
	    $featuresCollection: {
	      enumerable: true,
	      get: this.getFeaturesCollection
	    }
	  });
	}

	function subscribeToCollectionEvents() {
	  var _this = this;

	  var adds = fromOlEvent(this.$featuresCollection, 'add');
	  this.subscribeTo(adds, function (_ref) {
	    var element = _ref.element;
	    var elementUid = getObjectUid(element);
	    var propChanges = fromOlEvent(element, 'propertychange');
	    var otherChanges = fromOlEvent(element, 'change');
	    var featureChanges = merge(propChanges, otherChanges).pipe(debounceTime(1000 / 60));
	    _this._featureSubs[elementUid] = _this.subscribeTo(featureChanges, function () {
	      ++_this.rev;
	    });
	    ++_this.rev;

	    _this.$nextTick(function () {
	      _this.$emit('add:feature', element);
	    });
	  });
	  var removes = fromOlEvent(this.$featuresCollection, 'remove');
	  this.subscribeTo(removes, function (_ref2) {
	    var element = _ref2.element;
	    var elementUid = getObjectUid(element);

	    if (_this._featureSubs[elementUid]) {
	      _this.unsubscribe(_this._featureSubs[elementUid]);

	      delete _this._featureSubs[elementUid];
	    }

	    ++_this.rev;

	    _this.$nextTick(function () {
	      _this.$emit('remove:feature', element);
	    });
	  });
	}

	var nativePromiseConstructor = global_1.Promise;

	var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

	var location = global_1.location;
	var set$1 = global_1.setImmediate;
	var clear = global_1.clearImmediate;
	var process$1 = global_1.process;
	var MessageChannel = global_1.MessageChannel;
	var Dispatch = global_1.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global_1.postMessage(id + '', location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set$1 || !clear) {
	  set$1 = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (classofRaw(process$1) == 'process') {
	    defer = function (id) {
	      process$1.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !engineIsIos) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = functionBindContext(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global_1.addEventListener &&
	    typeof postMessage == 'function' &&
	    !global_1.importScripts &&
	    !fails(post) &&
	    location.protocol !== 'file:'
	  ) {
	    defer = post;
	    global_1.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
	    defer = function (id) {
	      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task = {
	  set: set$1,
	  clear: clear
	};

	var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;

	var macrotask = task.set;


	var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
	var process$2 = global_1.process;
	var Promise$1 = global_1.Promise;
	var IS_NODE = classofRaw(process$2) == 'process';
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$6(global_1, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE && (parent = process$2.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (IS_NODE) {
	    notify = function () {
	      process$2.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  } else if (MutationObserver && !engineIsIos) {
	    toggle = true;
	    node = document.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    then = promise.then;
	    notify = function () {
	      then.call(promise, flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global_1, flush);
	    };
	  }
	}

	var microtask = queueMicrotask || function (fn) {
	  var task$$1 = { fn: fn, next: undefined };
	  if (last) last.next = task$$1;
	  if (!head) {
	    head = task$$1;
	    notify();
	  } last = task$$1;
	};

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};

	// 25.4.1.5 NewPromiseCapability(C)
	var f$7 = function (C) {
	  return new PromiseCapability(C);
	};

	var newPromiseCapability = {
		f: f$7
	};

	var promiseResolve = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var hostReportErrors = function (a, b) {
	  var console = global_1.console;
	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var task$1 = task.set;










	var SPECIES$5 = wellKnownSymbol('species');
	var PROMISE = 'Promise';
	var getInternalState$3 = internalState.get;
	var setInternalState$5 = internalState.set;
	var getInternalPromiseState = internalState.getterFor(PROMISE);
	var PromiseConstructor = nativePromiseConstructor;
	var TypeError$1 = global_1.TypeError;
	var document$2 = global_1.document;
	var process$3 = global_1.process;
	var $fetch = getBuiltIn('fetch');
	var newPromiseCapability$1 = newPromiseCapability.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var IS_NODE$1 = classofRaw(process$3) == 'process';
	var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper;

	var FORCED$5 = isForced_1(PROMISE, function () {
	  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
	  if (!GLOBAL_CORE_JS_PROMISE) {
	    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	    // We can't detect it synchronously, so just check versions
	    if (engineV8Version === 66) return true;
	    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    if (!IS_NODE$1 && typeof PromiseRejectionEvent != 'function') return true;
	  }
	  // We need Promise#finally in the pure version for preventing prototype pollution
	  if (!PromiseConstructor.prototype['finally']) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = PromiseConstructor.resolve(1);
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES$5] = FakePromise;
	  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
	});

	var INCORRECT_ITERATION$1 = FORCED$5 || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify$1 = function (promise, state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(promise, state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$2.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global_1.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (handler = global_1['on' + name]) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (promise, state) {
	  task$1.call(global_1, function () {
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (IS_NODE$1) {
	          process$3.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (promise, state) {
	  task$1.call(global_1, function () {
	    if (IS_NODE$1) {
	      process$3.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$5 = function (fn, promise, state, unwrap) {
	  return function (value) {
	    fn(promise, state, value, unwrap);
	  };
	};

	var internalReject = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify$1(promise, state, true);
	};

	var internalResolve = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          then.call(value,
	            bind$5(internalResolve, promise, wrapper, state),
	            bind$5(internalReject, promise, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(promise, wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify$1(promise, state, false);
	    }
	  } catch (error) {
	    internalReject(promise, { done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED$5) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromiseConstructor, PROMISE);
	    aFunction(executor);
	    Internal.call(this);
	    var state = getInternalState$3(this);
	    try {
	      executor(bind$5(internalResolve, this, state), bind$5(internalReject, this, state));
	    } catch (error) {
	      internalReject(this, state, error);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    setInternalState$5(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = IS_NODE$1 ? process$3.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify$1(this, state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$3(promise);
	    this.promise = promise;
	    this.resolve = bind$5(internalResolve, promise, state);
	    this.reject = bind$5(internalReject, promise, state);
	  };
	  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export({ global: true, wrap: true, forced: FORCED$5 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn(PROMISE);

	// statics
	_export({ target: PROMISE, stat: true, forced: FORCED$5 }, {
	  // `Promise.reject` method
	  // https://tc39.github.io/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability$1(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});

	_export({ target: PROMISE, stat: true, forced: isPure }, {
	  // `Promise.resolve` method
	  // https://tc39.github.io/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve(this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});

	_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1 }, {
	  // `Promise.all` method
	  // https://tc39.github.io/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate_1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.github.io/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      iterate_1(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// `Promise.allSettled` method
	// https://github.com/tc39/proposal-promise-allSettled
	_export({ target: 'Promise', stat: true }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapability.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate_1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (e) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: e };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
	  nativePromiseConstructor.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
	_export({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn('Promise'));
	    var isFunction = typeof onFinally == 'function';
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var promise$1 = path.Promise;

	var setInternalState$6 = internalState.set;
	var getInternalAggregateErrorState = internalState.getterFor('AggregateError');

	var $AggregateError = function AggregateError(errors, message) {
	  var that = this;
	  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
	  if (objectSetPrototypeOf) {
	    that = objectSetPrototypeOf(new Error(message), objectGetPrototypeOf(that));
	  }
	  var errorsArray = [];
	  iterate_1(errors, errorsArray.push, errorsArray);
	  if (descriptors) setInternalState$6(that, { errors: errorsArray, type: 'AggregateError' });
	  else that.errors = errorsArray;
	  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
	  return that;
	};

	$AggregateError.prototype = objectCreate(Error.prototype, {
	  constructor: createPropertyDescriptor(5, $AggregateError),
	  message: createPropertyDescriptor(5, ''),
	  name: createPropertyDescriptor(5, 'AggregateError')
	});

	if (descriptors) objectDefineProperty.f($AggregateError.prototype, 'errors', {
	  get: function () {
	    return getInternalAggregateErrorState(this).errors;
	  },
	  configurable: true
	});

	_export({ global: true }, {
	  AggregateError: $AggregateError
	});

	// `Promise.try` method
	// https://github.com/tc39/proposal-promise-try
	_export({ target: 'Promise', stat: true }, {
	  'try': function (callbackfn) {
	    var promiseCapability = newPromiseCapability.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://github.com/tc39/proposal-promise-any
	_export({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var capability = newPromiseCapability.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate_1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        errors.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (e) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = e;
	          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// TODO: Remove from `core-js@4`




	var promise$2 = promise$1;

	var promise$3 = promise$2;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    promise$3.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new promise$3(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
	var defaultThrottleConfig = {
	    leading: true,
	    trailing: false
	};
	var ThrottleSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
	        var _this = _super.call(this, destination) || this;
	        _this.destination = destination;
	        _this.durationSelector = durationSelector;
	        _this._leading = _leading;
	        _this._trailing = _trailing;
	        _this._hasValue = false;
	        return _this;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        this._hasValue = true;
	        this._sendValue = value;
	        if (!this._throttled) {
	            if (this._leading) {
	                this.send();
	            }
	            else {
	                this.throttle(value);
	            }
	        }
	    };
	    ThrottleSubscriber.prototype.send = function () {
	        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
	        if (_hasValue) {
	            this.destination.next(_sendValue);
	            this.throttle(_sendValue);
	        }
	        this._hasValue = false;
	        this._sendValue = null;
	    };
	    ThrottleSubscriber.prototype.throttle = function (value) {
	        var duration = this.tryDurationSelector(value);
	        if (!!duration) {
	            this.add(this._throttled = subscribeToResult(this, duration));
	        }
	    };
	    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
	        try {
	            return this.durationSelector(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return null;
	        }
	    };
	    ThrottleSubscriber.prototype.throttlingDone = function () {
	        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
	        if (_throttled) {
	            _throttled.unsubscribe();
	        }
	        this._throttled = null;
	        if (_trailing) {
	            this.send();
	        }
	    };
	    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.throttlingDone();
	    };
	    ThrottleSubscriber.prototype.notifyComplete = function () {
	        this.throttlingDone();
	    };
	    return ThrottleSubscriber;
	}(OuterSubscriber));

	/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */
	function throttleTime(duration, scheduler, config) {
	    if (scheduler === void 0) {
	        scheduler = async;
	    }
	    if (config === void 0) {
	        config = defaultThrottleConfig;
	    }
	    return function (source$$1) { return source$$1.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
	}
	var ThrottleTimeOperator = /*@__PURE__*/ (function () {
	    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
	        this.duration = duration;
	        this.scheduler = scheduler;
	        this.leading = leading;
	        this.trailing = trailing;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
	    };
	    return ThrottleTimeOperator;
	}());
	var ThrottleTimeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
	        var _this = _super.call(this, destination) || this;
	        _this.duration = duration;
	        _this.scheduler = scheduler;
	        _this.leading = leading;
	        _this.trailing = trailing;
	        _this._hasTrailingValue = false;
	        _this._trailingValue = null;
	        return _this;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (this.throttled) {
	            if (this.trailing) {
	                this._trailingValue = value;
	                this._hasTrailingValue = true;
	            }
	        }
	        else {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext$1, this.duration, { subscriber: this }));
	            if (this.leading) {
	                this.destination.next(value);
	            }
	            else if (this.trailing) {
	                this._trailingValue = value;
	                this._hasTrailingValue = true;
	            }
	        }
	    };
	    ThrottleTimeSubscriber.prototype._complete = function () {
	        if (this._hasTrailingValue) {
	            this.destination.next(this._trailingValue);
	            this.destination.complete();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            if (this.trailing && this._hasTrailingValue) {
	                this.destination.next(this._trailingValue);
	                this._trailingValue = null;
	                this._hasTrailingValue = false;
	            }
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	}(Subscriber));
	function dispatchNext$1(arg) {
	    var subscriber = arg.subscriber;
	    subscriber.clearThrottle();
	}

	/*!
	 * merge-descriptors
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * Module exports.
	 * @public
	 */

	var mergeDescriptors = merge$1;

	/**
	 * Module variables.
	 * @private
	 */

	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	/**
	 * Merge the property descriptors of `src` into `dest`
	 *
	 * @param {object} dest Object to add descriptors to
	 * @param {object} src Object to clone descriptors from
	 * @param {boolean} [redefine=true] Redefine `dest` properties with `src` properties
	 * @returns {object} Reference to dest
	 * @public
	 */

	function merge$1(dest, src, redefine) {
	  if (!dest) {
	    throw new TypeError('argument dest is required')
	  }

	  if (!src) {
	    throw new TypeError('argument src is required')
	  }

	  if (redefine === undefined) {
	    // Default to true
	    redefine = true;
	  }

	  Object.getOwnPropertyNames(src).forEach(function forEachOwnPropertyName(name) {
	    if (!redefine && hasOwnProperty$1.call(dest, name)) {
	      // Skip desriptor
	      return
	    }

	    // Copy descriptor
	    var descriptor = Object.getOwnPropertyDescriptor(src, name);
	    Object.defineProperty(dest, name, descriptor);
	  });

	  return dest
	}

	/**
	 * @param {...Object} args
	 * @returns {Object}
	 */

	function multiMergeDescriptors() {
	  var _context;

	  var redefine;

	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (_typeof(args[args.length - 1]) !== 'object') {
	    redefine = args.pop();
	  }

	  return reduce$2(_context = slice$2(args).call(args, 1)).call(_context, function (dest, src, i) {
	    return mergeDescriptors(dest, src, redefine);
	  }, args[0]);
	}

	var promise$4 = promise$1;

	var promise$5 = promise$4;

	/* global setTimeout, clearTimeout */

	var dist = function debounce(fn) {
	  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var lastCallAt = void 0;
	  var deferred = void 0;
	  var timer = void 0;
	  var pendingArgs = [];
	  return function debounced() {
	    var currentWait = getWait(wait);
	    var currentTime = new Date().getTime();

	    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

	    lastCallAt = currentTime;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (isCold && options.leading) {
	      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
	        return result[0];
	      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
	    }

	    if (deferred) {
	      clearTimeout(timer);
	    } else {
	      deferred = defer$1();
	    }

	    pendingArgs.push(args);
	    timer = setTimeout(flush.bind(this), currentWait);

	    if (options.accumulate) {
	      var argsIndex = pendingArgs.length - 1;
	      return deferred.promise.then(function (results) {
	        return results[argsIndex];
	      });
	    }

	    return deferred.promise;
	  };

	  function flush() {
	    var thisDeferred = deferred;
	    clearTimeout(timer);

	    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

	    pendingArgs = [];
	    deferred = null;
	  }
	};

	function getWait(wait) {
	  return typeof wait === 'function' ? wait() : wait;
	}

	function defer$1() {
	  var deferred = {};
	  deferred.promise = new Promise(function (resolve, reject) {
	    deferred.resolve = resolve;
	    deferred.reject = reject;
	  });
	  return deferred;
	}

	/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
	function isNumeric$1(val) {
	    return !isArray$5(val) && (val - parseFloat(val) + 1) >= 0;
	}

	/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
	function interval(period, scheduler) {
	    if (period === void 0) {
	        period = 0;
	    }
	    if (scheduler === void 0) {
	        scheduler = async;
	    }
	    if (!isNumeric$1(period) || period < 0) {
	        period = 0;
	    }
	    if (!scheduler || typeof scheduler.schedule !== 'function') {
	        scheduler = async;
	    }
	    return new Observable(function (subscriber) {
	        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
	        return subscriber;
	    });
	}
	function dispatch(state) {
	    var subscriber = state.subscriber, counter = state.counter, period = state.period;
	    subscriber.next(counter);
	    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var EmptyErrorImpl = /*@__PURE__*/ (function () {
	    function EmptyErrorImpl() {
	        Error.call(this);
	        this.message = 'no elements in sequence';
	        this.name = 'EmptyError';
	        return this;
	    }
	    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return EmptyErrorImpl;
	})();
	var EmptyError = EmptyErrorImpl;

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function filter$4(predicate, thisArg) {
	    return function filterOperatorFunction(source$$1) {
	        return source$$1.lift(new FilterOperator(predicate, thisArg));
	    };
	}
	var FilterOperator = /*@__PURE__*/ (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	var FilterSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        var _this = _super.call(this, destination) || this;
	        _this.predicate = predicate;
	        _this.thisArg = thisArg;
	        _this.count = 0;
	        return _this;
	    }
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
	}(Subscriber));

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ (function () {
	    function ArgumentOutOfRangeErrorImpl() {
	        Error.call(this);
	        this.message = 'argument out of range';
	        this.name = 'ArgumentOutOfRangeError';
	        return this;
	    }
	    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return ArgumentOutOfRangeErrorImpl;
	})();
	var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

	/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
	var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
	function empty$1(scheduler) {
	    return scheduler ? emptyScheduled(scheduler) : EMPTY;
	}
	function emptyScheduled(scheduler) {
	    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
	}

	/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
	function take(count) {
	    return function (source$$1) {
	        if (count === 0) {
	            return empty$1();
	        }
	        else {
	            return source$$1.lift(new TakeOperator(count));
	        }
	    };
	}
	var TakeOperator = /*@__PURE__*/ (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	var TakeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        var _this = _super.call(this, destination) || this;
	        _this.total = total;
	        _this.count = 0;
	        return _this;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        var count = ++this.count;
	        if (count <= total) {
	            this.destination.next(value);
	            if (count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) {
	        defaultValue = null;
	    }
	    return function (source$$1) { return source$$1.lift(new DefaultIfEmptyOperator(defaultValue)); };
	}
	var DefaultIfEmptyOperator = /*@__PURE__*/ (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
	    };
	    return DefaultIfEmptyOperator;
	}());
	var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        var _this = _super.call(this, destination) || this;
	        _this.defaultValue = defaultValue;
	        _this.isEmpty = true;
	        return _this;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */
	function throwIfEmpty(errorFactory) {
	    if (errorFactory === void 0) {
	        errorFactory = defaultErrorFactory;
	    }
	    return function (source$$1) {
	        return source$$1.lift(new ThrowIfEmptyOperator(errorFactory));
	    };
	}
	var ThrowIfEmptyOperator = /*@__PURE__*/ (function () {
	    function ThrowIfEmptyOperator(errorFactory) {
	        this.errorFactory = errorFactory;
	    }
	    ThrowIfEmptyOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
	    };
	    return ThrowIfEmptyOperator;
	}());
	var ThrowIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(ThrowIfEmptySubscriber, _super);
	    function ThrowIfEmptySubscriber(destination, errorFactory) {
	        var _this = _super.call(this, destination) || this;
	        _this.errorFactory = errorFactory;
	        _this.hasValue = false;
	        return _this;
	    }
	    ThrowIfEmptySubscriber.prototype._next = function (value) {
	        this.hasValue = true;
	        this.destination.next(value);
	    };
	    ThrowIfEmptySubscriber.prototype._complete = function () {
	        if (!this.hasValue) {
	            var err = void 0;
	            try {
	                err = this.errorFactory();
	            }
	            catch (e) {
	                err = e;
	            }
	            this.destination.error(err);
	        }
	        else {
	            return this.destination.complete();
	        }
	    };
	    return ThrowIfEmptySubscriber;
	}(Subscriber));
	function defaultErrorFactory() {
	    return new EmptyError();
	}

	/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
	function first(predicate, defaultValue) {
	    var hasDefaultValue = arguments.length >= 2;
	    return function (source$$1) { return source$$1.pipe(predicate ? filter$4(function (v, i) { return predicate(v, i, source$$1); }) : identity$1, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
	}

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function skipWhile(predicate) {
	    return function (source$$1) { return source$$1.lift(new SkipWhileOperator(predicate)); };
	}
	var SkipWhileOperator = /*@__PURE__*/ (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
	    };
	    return SkipWhileOperator;
	}());
	var SkipWhileSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        var _this = _super.call(this, destination) || this;
	        _this.predicate = predicate;
	        _this.skipping = true;
	        _this.index = 0;
	        return _this;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping) {
	            this.tryCallPredicate(value);
	        }
	        if (!this.skipping) {
	            destination.next(value);
	        }
	    };
	    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
	        try {
	            var result = this.predicate(value, this.index++);
	            this.skipping = Boolean(result);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    return SkipWhileSubscriber;
	}(Subscriber));

	// const SERVICES_PROP = Symbol('services')

	var SERVICES_PROP = 'services';
	/**
	 * Service container mixin
	 */

	var services = {
	  inject: {
	    $services: SERVICES_PROP // todo works only in Vue 2.5.x
	    // $services: {from: SERVICES_PROP, default: Object.create(null)},

	  },
	  provide: function provide() {
	    return _defineProperty({}, SERVICES_PROP, this.getServices());
	  },
	  methods: {
	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors({}, this.$services || {});
	    }
	  },
	  beforeCreate: function beforeCreate() {
	    var source$$1 = this.$parent;

	    while (source$$1) {
	      if (source$$1._provided != null && source$$1._provided[SERVICES_PROP] != null) {
	        break;
	      }

	      source$$1 = source$$1.$parent;
	    }

	    if (source$$1 == null || source$$1._provided[SERVICES_PROP] == null) {
	      delete this.$options.inject.$services;
	    }
	  }
	};

	var VM_PROP = 'vm';
	/**
	 * Basic ol component mixin.
	 * todo try to subscribe to generic change event here and update rev according to internal ol counter
	 */

	var cmp = {
	  VM_PROP: VM_PROP,
	  mixins: [identMap, rxSubs, services],
	  props: {
	    id: {
	      type: [String, Number],
	      default: function _default() {
	        return v4_1();
	      }
	    }
	  },
	  data: function data() {
	    return {
	      rev: 0
	    };
	  },
	  computed: {
	    cmpName: function cmpName() {
	      return this.$options.name;
	    },
	    vmId: function vmId() {
	      var _context;

	      return filter$2(_context = [this.cmpName, this.id]).call(_context, identity).join('-');
	    },
	    vmName: function vmName() {
	      var _context2;

	      return filter$2(_context2 = [this.cmpName, this.id]).call(_context2, identity).join(' ');
	    },
	    olObjIdent: function olObjIdent() {
	      return this.selfIdent;
	    }
	  },
	  methods: {
	    /**
	     * @return {Promise<void>}
	     * @protected
	     */
	    beforeInit: function beforeInit() {},

	    /**
	     * @return {Promise<void>} Resolves when initialization completes
	     * @protected
	     */
	    init: function init() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var _context3, _context4;

	        return regenerator.wrap(function _callee$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                _context5.next = 2;
	                return _this.instanceFactoryCall(_this.olObjIdent, bind$2(_context3 = _this.createOlObject).call(_context3, _this));

	              case 2:
	                _this._olObject = _context5.sent;
	                _this._olObject[VM_PROP] || (_this._olObject[VM_PROP] = []);

	                if (!includes$4(_context4 = _this._olObject[VM_PROP]).call(_context4, _this)) {
	                  // for loaded from IdentityMap
	                  _this._olObject[VM_PROP].push(_this);
	                }

	                ++_this.rev;

	              case 6:
	              case "end":
	                return _context5.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {module:ol/Object~BaseObject|Promise<module:ol/Object~BaseObject>}
	     * @protected
	     * @abstract
	     */
	    createOlObject: function createOlObject() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      var _this2 = this;

	      this.unsetInstances();

	      if (this._olObject) {
	        var _context6;

	        this._olObject[VM_PROP] = filter$2(_context6 = this._olObject[VM_PROP]).call(_context6, function (vm) {
	          return vm !== _this2;
	        });
	        this._olObject = undefined;
	      }
	    },

	    /**
	     * Redefine for easy call in child components
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return services.methods.getServices.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    mount: function mount() {
	      this.subscribeAll();
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unsubscribeAll();
	    },

	    /**
	     * Refresh internal ol objects
	     * @return {Promise<void>}
	     */
	    refresh: function refresh() {
	      var _this3 = this;

	      if (this.$olObject == null) return promise$5.resolve();
	      return new promise$5(function (resolve) {
	        if (_this3.$olObject && isFunction(_this3.$olObject.changed)) {
	          _this3.$olObject.once('change', function () {
	            return resolve();
	          });

	          _this3.$olObject.changed();
	        } else {
	          resolve();
	        }
	      });
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise<void>}
	     * @protected
	     */
	    remount: function remount() {
	      var _this4 = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	        return regenerator.wrap(function _callee2$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                if (!(_this4.$olObject == null)) {
	                  _context7.next = 2;
	                  break;
	                }

	                return _context7.abrupt("return");

	              case 2:
	                _context7.next = 4;
	                return _this4.unmount();

	              case 4:
	                _context7.next = 6;
	                return _this4.mount();

	              case 6:
	              case "end":
	                return _context7.stop();
	            }
	          }
	        }, _callee2);
	      }))();
	    },

	    /**
	     * Only for internal purpose to support watching for properties
	     * for which OpenLayers doesn't provide setters.
	     * @return {Promise}
	     * @protected
	     */
	    recreate: function recreate() {
	      var _this5 = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
	        return regenerator.wrap(function _callee3$(_context8) {
	          while (1) {
	            switch (_context8.prev = _context8.next) {
	              case 0:
	                if (!(_this5.$olObject == null)) {
	                  _context8.next = 2;
	                  break;
	                }

	                return _context8.abrupt("return");

	              case 2:
	                _context8.next = 4;
	                return _this5.unmount();

	              case 4:
	                _context8.next = 6;
	                return _this5.deinit();

	              case 6:
	                _context8.next = 8;
	                return _this5.init();

	              case 8:
	                _context8.next = 10;
	                return _this5.mount();

	              case 10:
	              case "end":
	                return _context8.stop();
	            }
	          }
	        }, _callee3);
	      }))();
	    },
	    subscribeAll: function subscribeAll() {}
	  },
	  created: function created() {
	    var _this6 = this;

	    /**
	     * @type {module:ol/Object~BaseObject}
	     * @private
	     */
	    this._olObject = undefined;

	    defineProperties$1(this, {
	      $olObject: {
	        enumerable: true,
	        get: function get() {
	          return _this6._olObject;
	        }
	      }
	    });

	    defineLifeCyclePromises.call(this);
	    defineDebouncedHelpers.call(this);
	  },
	  mounted: function mounted() {
	    var _this7 = this;

	    return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
	      return regenerator.wrap(function _callee4$(_context9) {
	        while (1) {
	          switch (_context9.prev = _context9.next) {
	            case 0:
	              _context9.next = 2;
	              return _this7.$createPromise;

	            case 2:
	              _this7._mounted = true;

	            case 3:
	            case "end":
	              return _context9.stop();
	          }
	        }
	      }, _callee4);
	    }))();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this8 = this;

	    return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5() {
	      return regenerator.wrap(function _callee5$(_context10) {
	        while (1) {
	          switch (_context10.prev = _context10.next) {
	            case 0:
	              _context10.next = 2;
	              return _this8.$mountPromise;

	            case 2:
	              _this8._mounted = false;

	            case 3:
	            case "end":
	              return _context10.stop();
	          }
	        }
	      }, _callee5);
	    }))();
	  },
	  destroyed: function destroyed() {
	    var _this9 = this;

	    return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6() {
	      return regenerator.wrap(function _callee6$(_context11) {
	        while (1) {
	          switch (_context11.prev = _context11.next) {
	            case 0:
	              _context11.next = 2;
	              return _this9.$unmountPromise;

	            case 2:
	              _this9._destroyed = true;

	            case 3:
	            case "end":
	              return _context11.stop();
	          }
	        }
	      }, _callee6);
	    }))();
	  }
	};

	function defineLifeCyclePromises() {
	  var _this10 = this;

	  var makeEventEmitter = function makeEventEmitter(event) {
	    return function () {
	      _this10.$emit(event, _this10);

	      return _this10;
	    };
	  }; // create


	  this._createPromise = promise$5.resolve(this.beforeInit()).then(function () {
	    return _this10.init();
	  }).then(makeEventEmitter('created')); // mount

	  var mountObs = interval(1000 / 60).pipe(skipWhile(function () {
	    return _this10._mounted !== true;
	  }), first());
	  this._mountPromise = mountObs.toPromise(promise$5).then(function () {
	    return _this10.mount();
	  }).then(makeEventEmitter('mounted')); // unmount

	  var unmountObs = interval(1000 / 60).pipe(skipWhile(function () {
	    return _this10._mounted !== false;
	  }), first());
	  this._unmountPromise = unmountObs.toPromise(promise$5).then(function () {
	    return _this10.unmount();
	  }).then(makeEventEmitter('unmounted')); // destroy

	  var destroyObs = interval(1000 / 60).pipe(skipWhile(function () {
	    return _this10._destroyed !== true;
	  }), first());
	  this._destroyPromise = destroyObs.toPromise(promise$5).then(function () {
	    return _this10.deinit();
	  }).then(makeEventEmitter('destroyed'));

	  defineProperties$1(this, {
	    $createPromise: {
	      enumerable: true,
	      get: function get() {
	        return _this10._createPromise;
	      }
	    },
	    $mountPromise: {
	      enumerable: true,
	      get: function get() {
	        return _this10._mountPromise;
	      }
	    },
	    $unmountPromise: {
	      enumerable: true,
	      get: function get() {
	        return _this10._unmountPromise;
	      }
	    },
	    $destroyPromise: {
	      enumerable: true,
	      get: function get() {
	        return _this10._destroyPromise;
	      }
	    }
	  });
	}

	function defineDebouncedHelpers() {
	  var t = 1000 / 10; // bind debounced functions at runtime
	  // for each instance to avoid interfering between
	  // different instances

	  this.scheduleRefresh = dist(function () {
	    return this.refresh();
	  }, t);
	  this.scheduleRemount = dist(function () {
	    return this.remount();
	  }, t);
	  this.scheduleRecreate = dist(function () {
	    return this.recreate();
	  }, t);
	}

	/**
	 * Renders stub VNode for component.
	 */

	var stubVNode = {
	  /**
	   * @param {function} h
	   * @returns {VNode}
	   */
	  render: function render(h) {
	    var options = this.$options.stubVNode || {}; // render as HTML comment

	    if (options.empty) {
	      var vnode = h();

	      if (typeof options.empty === 'string') {
	        vnode.text = options.empty;
	      } else if (typeof options.empty === 'function') {
	        vnode.text = options.empty.call(this);
	      }

	      return vnode;
	    }

	    var children;

	    if (options.slots === false) {
	      children = undefined;
	    } else {
	      children = extractChildren(this.$slots, options.slots);
	    }

	    var attrs = typeof options.attrs === 'function' ? options.attrs.call(this) : options.attrs;
	    var data = {
	      attrs: attrs,
	      style: {
	        display: 'none !important'
	      }
	    };
	    return h(options.tag || 'i', data, children);
	  }
	};

	/**
	 * Basic ol component with stub VNode, i.e. virtual component
	 */

	var cmp$1 = {
	  mixins: [stubVNode, cmp],
	  methods: {
	    /**
	     * @return {Promise}
	     * @protected
	     */
	    init: function init() {
	      return cmp.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp.methods.deinit.call(this);
	    },

	    /**
	     * @return {*}
	     * @protected
	     * @abstract
	     */
	    createOlObject: function createOlObject() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    mount: function mount() {
	      return cmp.methods.mount.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    unmount: function unmount() {
	      return cmp.methods.unmount.call(this);
	    },

	    /**
	     * Redefine for easy call in child components
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return cmp.methods.getServices.call(this);
	    },

	    /**
	     * Refresh internal ol objects
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      return cmp.methods.refresh.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise<void>}
	     * @protected
	     */
	    remount: function remount() {
	      return cmp.methods.remount.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise<void>}
	     * @protected
	     */
	    recreate: function recreate() {
	      return cmp.methods.recreate.call(this);
	    },

	    /**
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      cmp.methods.subscribeAll.call(this);
	    }
	  },
	  stubVNode: {
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  }
	};

	/**
	 * Basic mixin for ol components that depends on map instance
	 */

	var useMapCmp = {
	  methods: {
	    /**
	     * @return {Promise<void>}
	     * @protected
	     */
	    beforeInit: function beforeInit() {
	      var _this = this;

	      // waits while $map service will be injected
	      return interval(100).pipe(skipWhile(function () {
	        return !_this.$map;
	      }), first(), map$4(function () {
	        return _this;
	      })).toPromise(promise$5);
	    }
	  }
	};

	var geometry$1 = {
	  mixins: [cmp$1, useMapCmp, projTransforms],
	  props: {
	    /**
	     * Coordinates in the map view projection.
	     * @type {number[]}
	     */
	    coordinates: {
	      type: Array,
	      required: true,
	      validator: function validator(val) {
	        return val.length;
	      }
	    }
	  },
	  computed: {
	    /**
	     * @type {string}
	     * @abstract
	     * @readonly
	     */
	    type: function type() {
	      throw new Error('Not implemented computed property');
	    },

	    /**
	     * @type {number[]|undefined}
	     */
	    extent: function extent$$1() {
	      if (this.extentViewProj && this.resolvedDataProjection) {
	        return this.extentToDataProj(this.extentViewProj);
	      }
	    },

	    /**
	     * @type {number[]|undefined}
	     */
	    extentViewProj: function extentViewProj() {
	      if (this.rev && this.$geometry) {
	        return this.$geometry.getExtent();
	      }
	    },

	    /**
	     * @type {number[]|undefined}
	     */
	    point: function point() {
	      if (this.pointViewProj && this.resolvedDataProjection) {
	        return this.pointToDataProj(this.pointViewProj);
	      }
	    },

	    /**
	     * @type {number[]}
	     */
	    pointViewProj: function pointViewProj() {
	      if (this.rev && this.$geometry) {
	        return findPointOnSurface(this.$geometry);
	      }
	    },

	    /**
	     * @type {number[]|undefined}
	     */
	    coordinatesViewProj: function coordinatesViewProj() {
	      if (this.rev && this.$geometry) {
	        return this.$geometry.getCoordinates();
	      }
	    }
	  },
	  methods: {
	    /**
	     * @return {module:ol/geom/Geometry~Geometry|Promise<module:ol/geom/Geometry~Geometry>}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var geometry;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.createGeometry();

	              case 2:
	                geometry = _context.sent;
	                initializeGeometry(geometry, _this.id);
	                return _context.abrupt("return", geometry);

	              case 5:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {module:ol/geom/Geometry~Geometry|Promise<module:ol/geom/Geometry~Geometry>}
	     * @protected
	     * @abstract
	     */
	    createGeometry: function createGeometry() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {number[]}
	     */
	    getCoordinates: function getCoordinates() {
	      hasGeometry(this);
	      return this.toDataProj(this.$geometry.getCoordinates());
	    },

	    /**
	     * @param {number[]} coordinates
	     */
	    setCoordinates: function setCoordinates(coordinates) {
	      hasGeometry(this);
	      this.$geometry.setCoordinates(this.toViewProj(coordinates));
	    },

	    /**
	     * @return {Promise}
	     * @throws {AssertionError}
	     * @protected
	     */
	    init: function init() {
	      this.setupTransformFunctions();
	      return cmp$1.methods.init.call(this);
	    },

	    /**
	     * @protected
	     */
	    setupTransformFunctions: function setupTransformFunctions() {
	      var _this2 = this;

	      // define helper methods based on geometry type
	      var transform = transforms[this.type].transform;
	      /**
	       * @method
	       * @param {number[]} coordinates
	       * @return {number[]}
	       * @protected
	       */

	      this.toDataProj = function (coordinates) {
	        return transform(coordinates, _this2.viewProjection, _this2.resolvedDataProjection);
	      };
	      /**
	       * @method
	       * @param {number[]} coordinates
	       * @return {number[]}
	       * @protected
	       */


	      this.toViewProj = function (coordinates) {
	        return transform(coordinates, _this2.resolvedDataProjection, _this2.viewProjection);
	      };
	    },

	    /**
	     * @return {void|Promise}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      return cmp$1.methods.refresh.call(this);
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp$1.methods.getServices.call(this), {
	        get geometry() {
	          return vm.$geometry;
	        }

	      });
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$geometryContainer && this.$geometryContainer.setGeometry(this);
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unsubscribeAll();
	      this.$geometryContainer && this.$geometryContainer.setGeometry(undefined);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      subscribeToGeomChanges.call(this);
	    }
	  },
	  watch: {
	    id: function id(value) {
	      if (!this.$geometry || value === getGeometryId(this.$geometry)) {
	        return;
	      }

	      setGeometryId(this.$geometry, value);
	    },
	    coordinates: function coordinates(value) {
	      if (!this.$geometry || !this.$view) return; // compares in data projection

	      var isEq = isEqualGeom({
	        coordinates: value,
	        extent: extent.boundingExtent(value)
	      }, {
	        coordinates: this.getCoordinates(),
	        extent: this.extent
	      });
	      if (isEq) return;
	      this.setCoordinates(value);
	    },
	    resolvedDataProjection: function resolvedDataProjection() {
	      if (!this.$geometry) return;
	      this.setupTransformFunctions();
	      this.setCoordinates(this.coordinates);
	    }
	  },
	  stubVNode: {
	    empty: function empty() {
	      return this.vmId;
	    }
	  },
	  created: function created() {
	    defineServices$1.call(this);
	  }
	};

	function defineServices$1() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    /**
	     * @type {module:ol/geom/Geometry~Geometry|undefined}
	     */
	    $geometry: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },

	    /**
	     * @type {module:ol/PluggableMap~PluggableMap|undefined}
	     */
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && map$2(_this3.$services);
	      }
	    },

	    /**
	     * @type {module:ol/View~View|undefined}
	     */
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.view;
	      }
	    },

	    /**
	     * @type {Object|undefined}
	     */
	    $geometryContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.geometryContainer;
	      }
	    }
	  });
	}
	/**
	 * @return {void}
	 * @private
	 */


	function subscribeToGeomChanges() {
	  var _this4 = this;

	  hasGeometry(this);
	  var ft = 1000 / 60;
	  var changes = fromOlEvent(this.$geometry, 'change', function () {
	    return {
	      coordinates: _this4.getCoordinates(),
	      extent: _this4.extent
	    };
	  }).pipe(throttleTime(ft), distinctUntilChanged(isEqualGeom), map$4(function (_ref) {
	    var coordinates = _ref.coordinates;
	    return {
	      prop: 'coordinates',
	      value: coordinates
	    };
	  }));
	  this.subscribeTo(changes, function (_ref2) {
	    var prop = _ref2.prop,
	        value = _ref2.value;
	    ++_this4.rev;

	    _this4.$nextTick(function () {
	      _this4.$emit("update:".concat(prop), value);
	    });
	  });
	}
	/**
	 * @param {{coordinates: number[], extent: number[]}} a
	 * @param {{coordinates: number[], extent: number[]}} b
	 * @returns {boolean}
	 */


	function isEqualGeom(a, b) {
	  return isEqual(a.extent, b.extent) ? isEqual(a.coordinates, b.coordinates) : false;
	}

	var geometryContainer = {
	  mixins: [projTransforms],
	  methods: {
	    /**
	     * @return {{
	     *     getGeometry: function(): module:ol/geom/Geometry~Geometry|undefined,
	     *     setGeometry: function(module:ol/geom/Geometry~Geometry|undefined)
	     *   }|undefined}
	     * @protected
	     */
	    getGeometryTarget: function getGeometryTarget() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {module:ol/geom/Geometry~Geometry|undefined}
	     */
	    getGeometry: function getGeometry() {
	      return this._geometry;
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get geometryContainer() {
	          return vm;
	        }

	      };
	    },

	    /**
	     * @param {module:ol/geom/Geometry~Geometry|Vue|Object|undefined} geom
	     * @return {void}
	     * @throws {AssertionError}
	     */
	    setGeometry: function setGeometry(geom) {
	      if (geom instanceof Vue) {
	        geom = geom.$geometry;
	      } else if (isPlainObject(geom)) {
	        geom = this.readGeometryInDataProj(geom);
	      }

	      if (geom !== this._geometry) {
	        /**
	         * @type {module:ol/geom/Geometry~Geometry|undefined}
	         * @private
	         */
	        this._geometry = geom;
	      }

	      var geomTarget = this.getGeometryTarget();

	      if (geomTarget && geom !== geomTarget.getGeometry()) {
	        geomTarget.setGeometry(geom);
	      }
	    }
	  }
	};

	var $every = arrayIteration.every;



	var STRICT_METHOD$3 = arrayMethodIsStrict('every');
	var USES_TO_LENGTH$9 = arrayMethodUsesToLength('every');

	// `Array.prototype.every` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.every
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$3 || !USES_TO_LENGTH$9 }, {
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var every = entryVirtual('Array').every;

	var ArrayPrototype$b = Array.prototype;

	var every_1 = function (it) {
	  var own = it.every;
	  return it === ArrayPrototype$b || (it instanceof Array && own === ArrayPrototype$b.every) ? every : own;
	};

	var every$1 = every_1;

	var every$2 = every$1;

	var source$1 = {
	  mixins: [cmp$1, useMapCmp],
	  props: {
	    attributions: {
	      type: [String, Array],
	      validator: function validator(value) {
	        return isString(value) || isArray$4(value) && every$2(value).call(value, isString);
	      }
	    },
	    attributionsCollapsible: {
	      type: Boolean,
	      default: true
	    },
	    projection: String,
	    wrapX: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    state: function state() {
	      if (!this.rev || !this.$source) {
	        return;
	      }

	      return this.$source.getState();
	    }
	  },
	  methods: {
	    /**
	     * @return {module:ol/source/Source~Source|Promise<module:ol/source/Source~Source>}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var source$$1;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.createSource();

	              case 2:
	                source$$1 = _context.sent;
	                initializeSource(source$$1, _this.id);
	                return _context.abrupt("return", source$$1);

	              case 5:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {module:ol/source/Source~Source|Promise<module:ol/source/Source~Source>}
	     * @protected
	     * @abstract
	     */
	    createSource: function createSource() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {Promise|void}
	     * @protected
	     */
	    init: function init() {
	      return cmp$1.methods.init.call(this);
	    },

	    /**
	     * @return {Promise|void}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp$1.methods.getServices.call(this), {
	        get source() {
	          return vm.$source;
	        }

	      });
	    },

	    /**
	     * @return {Promise|void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$sourceContainer && this.$sourceContainer.setSource(this);
	      return cmp$1.methods.mount.call(this);
	    },

	    /**
	     * @return {Promise|void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.$sourceContainer && this.$sourceContainer.setSource(undefined);
	      return cmp$1.methods.unmount.call(this);
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      var _this2 = this;

	      if (!this.$source) return promise$5.resolve();
	      return new promise$5(function (resolve) {
	        if (_this2.$source) {
	          _this2.$source.once('change', function () {
	            return resolve;
	          });

	          _this2.$source.refresh();
	        } else {
	          resolve();
	        }
	      });
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise}
	     * @protected
	     */
	    remount: function remount() {
	      return cmp$1.methods.remount.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise}
	     * @protected
	     */
	    recreate: function recreate() {
	      return cmp$1.methods.recreate.call(this);
	    },

	    /**
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      cmp$1.methods.subscribeAll.call(this);
	    }
	  },
	  watch: {
	    id: function id(value) {
	      if (!this.$source || value === getSourceId(this.$source)) {
	        return;
	      }

	      setSourceId(this.$source, value);
	    },
	    attributions: function attributions(value) {
	      if (!this.$source || isEqual(value, this.$source.getAttributions())) {
	        return;
	      }

	      this.$source.setAttributions(value);
	    },
	    attributionsCollapsible: function attributionsCollapsible(value) {
	      if (!this.$source || value === this.$source.getAttributionsCollapsible()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    projection: function projection(value) {
	      if (!this.$source || this.$source.getProjection() && value === this.$source.getProjection().getCode()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    wrapX: function wrapX(value) {
	      if (!this.$source || value === this.$source.getWrapX()) {
	        return;
	      }

	      this.scheduleRecreate();
	    }
	  },
	  stubVNode: {
	    empty: function empty() {
	      return this.vmId;
	    }
	  },
	  created: function created() {
	    defineServices$2.call(this);
	  }
	};

	function defineServices$2() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    /**
	     * @type {module:ol/source/Source~Source|undefined}
	     */
	    $source: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && map$2(_this3.$services);
	      }
	    },
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.view;
	      }
	    },
	    $sourceContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.sourceContainer;
	      }
	    }
	  });
	}

	function ownKeys$4(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$4(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$4(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var imageSource = {
	  mixins: [source$1],
	  props: {
	    crossOrigin: String,
	    projection: {
	      type: String,
	      default: EPSG_3857
	    }
	  },
	  methods: {
	    /**
	     * @return {Promise}
	     * @protected
	     */
	    init: function init() {
	      return source$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return source$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      source$1.methods.mount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      source$1.methods.unmount.call(this);
	    },
	    subscribeAll: function subscribeAll() {
	      source$1.methods.subscribeAll.call(this);
	      subscribeToSourceEvents.call(this);
	    }
	  },
	  watch: _objectSpread$3({}, makeWatchers(['crossOrigin'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};

	function subscribeToSourceEvents() {
	  var _this = this;

	  hasSource(this);
	  var events = fromOlEvent(this.$source, ['imageloadend', 'imageloaderror', 'imageloadstart']);
	  this.subscribeTo(events, function (evt) {
	    _this.$emit(evt.type, evt);
	  });
	}

	/**
	 * Basic style mixin.
	 */

	var style$1 = {
	  mixins: [cmp$1, useMapCmp],
	  methods: {
	    /**
	     * @return {OlStyle|Promise<OlStyle>}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var style$$1;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.createStyle();

	              case 2:
	                style$$1 = _context.sent;
	                initializeStyle(style$$1);
	                return _context.abrupt("return", style$$1);

	              case 5:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {OlStyle|Promise<OlStyle>}
	     * @protected
	     * @abstract
	     */
	    createStyle: function createStyle$$1() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {Promise}
	     * @protected
	     */
	    init: function init() {
	      return cmp$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp$1.methods.getServices.call(this), {
	        get style() {
	          return vm.$style;
	        }

	      });
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      var _this2 = this;

	      if (this.$olObject == null) return promise$5.resolve();
	      return this.remount().then(function () {
	        if (!_this2.$map) {
	          return;
	        }

	        _this2.$map.render();

	        return fromOlEvent(_this2.$map, 'postcompose').pipe(first()).toPromise();
	      });
	    }
	  },
	  stubVNode: {
	    empty: function empty() {
	      return this.vmId;
	    }
	  },
	  created: function created() {
	    defineServices$3.call(this);
	  },
	  watch: {
	    id: function id(value) {
	      if (!this.$style || value === getStyleId(this.$style)) {
	        return;
	      }

	      setStyleId(this.$style, value);
	    }
	  }
	};

	function defineServices$3() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    $style: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && map$2(_this3.$services);
	      }
	    },
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.view;
	      }
	    },
	    $stylesContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.stylesContainer;
	      }
	    }
	  });
	}

	var imageStyle = {
	  mixins: [style$1],
	  methods: {
	    /**
	     * @return {Promise}
	     * @protected
	     */
	    init: function init() {
	      return style$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return style$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$stylesContainer && this.$stylesContainer.setImage(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.$stylesContainer && this.$stylesContainer.setImage(undefined);
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return style$1.methods.getServices.call(this);
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      // recreate style
	      return this.recreate();
	    }
	  },
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  }
	};

	var interaction$1 = {
	  mixins: [cmp$1, useMapCmp],
	  props: {
	    active: {
	      type: Boolean,
	      default: true
	    },

	    /**
	     * Priority of interactions in the event handling stream.
	     * The higher the value, the sooner it will handle map event.
	     * @type {number}
	     */
	    priority: {
	      type: Number,
	      default: 0
	    }
	  },
	  methods: {
	    /**
	     * @return {Promise<module:ol/interaction/Interaction~Interaction>}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var interaction$$1;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.createInteraction();

	              case 2:
	                interaction$$1 = _context.sent;
	                initializeInteraction(interaction$$1, _this.id, _this.priority);
	                interaction$$1.setActive(_this.active);
	                return _context.abrupt("return", interaction$$1);

	              case 6:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {module:ol/interaction/Interaction~Interaction|Promise<module:ol/interaction/Interaction~Interaction>}
	     * @protected
	     * @abstract
	     */
	    createInteraction: function createInteraction() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp$1.methods.getServices.call(this), {
	        get interaction() {
	          return vm.$interaction;
	        }

	      });
	    },

	    /**
	     * @return {Promise} Resolves when initialization completes
	     * @protected
	     */
	    init: function init() {
	      return cmp$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$interactionsContainer && this.$interactionsContainer.addInteraction(this);
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unsubscribeAll();
	      this.$interactionsContainer && this.$interactionsContainer.removeInteraction(this);
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      return cmp$1.methods.refresh.call(this);
	    },

	    /**
	     * @return {Promise}
	     */
	    recreate: function recreate() {
	      return cmp$1.methods.recreate.call(this);
	    },

	    /**
	     * @return {Promise}
	     */
	    remount: function remount() {
	      return cmp$1.methods.remount.call(this);
	    },

	    /**
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {}
	  },
	  watch: {
	    id: function id(value) {
	      if (!this.$interaction || isEqual(value, getInteractionId(this.$interaction))) {
	        return;
	      }

	      setInteractionId(this.$interaction, value);
	    },
	    active: function active(value) {
	      if (!this.$interaction || value === this.$interaction.getActive()) {
	        return;
	      }

	      this.$interaction.setActive(value);
	    },
	    priority: function priority(value) {
	      if (!this.$interaction || !this.$interactionsContainer || value === getInteractionPriority(this.$interaction)) {
	        return;
	      }

	      setInteractionPriority(this.$interaction, value); // todo replace with event

	      this.$interactionsContainer.sortInteractions();
	    }
	  },
	  stubVNode: {
	    empty: function empty() {
	      return this.vmId;
	    }
	  },
	  created: function created() {
	    defineServices$4.call(this);
	  }
	};

	function defineServices$4() {
	  var _this2 = this;

	  defineProperties$1(this, {
	    /**
	     * @type {module:ol/interaction/Interaction~Interaction|undefined}
	     */
	    $interaction: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$olObject;
	      }
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && map$2(_this2.$services);
	      }
	    },
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && _this2.$services.view;
	      }
	    },
	    $interactionsContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && _this2.$services.interactionsContainer;
	      }
	    }
	  });
	}

	var test$1 = [];
	var nativeSort = test$1.sort;

	// IE8-
	var FAILS_ON_UNDEFINED = fails(function () {
	  test$1.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails(function () {
	  test$1.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD$4 = arrayMethodIsStrict('sort');

	var FORCED$6 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$4;

	// `Array.prototype.sort` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.sort
	_export({ target: 'Array', proto: true, forced: FORCED$6 }, {
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? nativeSort.call(toObject(this))
	      : nativeSort.call(toObject(this), aFunction(comparefn));
	  }
	});

	var sort = entryVirtual('Array').sort;

	var ArrayPrototype$c = Array.prototype;

	var sort_1 = function (it) {
	  var own = it.sort;
	  return it === ArrayPrototype$c || (it instanceof Array && own === ArrayPrototype$c.sort) ? sort : own;
	};

	var sort$1 = sort_1;

	var sort$2 = sort$1;

	var interactionsContainer = {
	  mixins: [identMap, rxSubs],
	  computed: {
	    interactionIds: function interactionIds() {
	      var _context;

	      if (!this.rev) return [];
	      return map$2(_context = this.getInteractions()).call(_context, getInteractionId);
	    },
	    interactionsCollectionIdent: function interactionsCollectionIdent() {
	      if (!this.olObjIdent) return;
	      return this.makeIdent(this.olObjIdent, 'interactions_collection');
	    }
	  },
	  methods: {
	    /**
	     * @param {Interaction|Vue} interaction
	     * @return {void}
	     */
	    addInteraction: function addInteraction(interaction$$1) {
	      interaction$$1 = interaction$$1 instanceof Vue ? interaction$$1.$interaction : interaction$$1;
	      instanceOf(interaction$$1, Interaction);

	      if (this.getInteractionById(getInteractionId(interaction$$1)) == null) {
	        initializeInteraction(interaction$$1);
	        this.$interactionsCollection.push(interaction$$1);
	        this.sortInteractions();
	      }
	    },

	    /**
	     * @param {Interaction|Vue} interaction
	     * @return {void}
	     */
	    removeInteraction: function removeInteraction(interaction$$1) {
	      interaction$$1 = this.getInteractionById(getInteractionId(interaction$$1));
	      if (!interaction$$1) return;
	      this.$interactionsCollection.remove(interaction$$1);
	      this.sortInteractions();
	    },

	    /**
	     * @return {Interaction[]}
	     */
	    getInteractions: function getInteractions() {
	      return this.$interactionsCollection.getArray();
	    },

	    /**
	     * @return {Collection<Interaction>>}
	     */
	    getInteractionsCollection: function getInteractionsCollection() {
	      return this._interactionsCollection;
	    },

	    /**
	     * @param {string|number} interactionId
	     * @return {Interaction|undefined}
	     */
	    getInteractionById: function getInteractionById(interactionId) {
	      var _context2;

	      return find$2(_context2 = this.$interactionsCollection.getArray()).call(_context2, function (interaction$$1) {
	        return getInteractionId(interaction$$1) === interactionId;
	      });
	    },

	    /**
	     * @return {void}
	     */
	    sortInteractions: function sortInteractions(sorter) {
	      var _context3;

	      sorter || (sorter = this.getDefaultInteractionsSorter());

	      sort$2(_context3 = this.$interactionsCollection.getArray()).call(_context3, sorter);
	    },

	    /**
	     * @return {function}
	     * @protected
	     */
	    getDefaultInteractionsSorter: function getDefaultInteractionsSorter() {
	      // sort interactions by priority in asc order
	      // the higher the priority, the earlier the interaction handles the event
	      return function (a, b) {
	        var ap = getInteractionPriority(a) || 0;
	        var bp = getInteractionPriority(b) || 0;
	        return ap === bp ? 0 : ap - bp;
	      };
	    },

	    /**
	     * @return {void}
	     */
	    clearInteractions: function clearInteractions() {
	      this.$interactionsCollection.clear();
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get interactionsContainer() {
	          return vm;
	        }

	      };
	    }
	  },
	  created: function created() {
	    this._interactionsCollection = this.instanceFactoryCall(this.interactionsCollectionIdent, function () {
	      return new Collection();
	    });
	    defineServices$5.call(this);
	    subscribeToCollectionEvents$1.call(this);
	  }
	};

	function defineServices$5() {
	  defineProperties$1(this, {
	    $interactionsCollection: {
	      enumerable: true,
	      get: this.getInteractionsCollection
	    }
	  });
	}

	function subscribeToCollectionEvents$1() {
	  var _this = this;

	  var adds = fromOlEvent(this.$interactionsCollection, 'add');
	  var removes = fromOlEvent(this.$interactionsCollection, 'remove');
	  this.subscribeTo(merge(adds, removes), function (_ref) {
	    var type = _ref.type,
	        element = _ref.element;
	    ++_this.rev;

	    _this.$nextTick(function () {
	      _this.$emit(type + ':interaction', element);
	    });
	  });
	}

	var sourceContainer = {
	  methods: {
	    /**
	     * @return {{
	     *     setSource: function(module:ol/source/Source~Source): void,
	     *     getSource: function(): module:ol/source/Source~Source
	     *   }|undefined}
	     * @protected
	     */
	    getSourceTarget: function getSourceTarget() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {module:ol/source/Source~Source|undefined}
	     */
	    getSource: function getSource() {
	      return this._source;
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get sourceContainer() {
	          return vm;
	        }

	      };
	    },

	    /**
	     * @param {module:ol/source/Source~Source|Vue|undefined} source
	     * @return {void}
	     */
	    setSource: function setSource(source$$1) {
	      source$$1 = source$$1 instanceof Vue ? source$$1.$source : source$$1;

	      if (source$$1 !== this._source) {
	        this._source = source$$1;
	      }
	      /**
	       * @type {module:ol/layer/Layer~Layer|Builder}
	       */


	      var sourceTarget = this.getSourceTarget();

	      if (sourceTarget && source$$1 !== sourceTarget.getSource()) {
	        sourceTarget.setSource(source$$1);
	      }
	    }
	  }
	};

	function ownKeys$5(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; forEach$2(_context2 = ownKeys$5(Object(source$$1), true)).call(_context2, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context3; forEach$2(_context3 = ownKeys$5(Object(source$$1))).call(_context3, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var layer = {
	  mixins: [cmp$1, useMapCmp, sourceContainer],
	  props: {
	    /**
	     * The bounding extent for layer rendering defined in the map view projection.
	     * The layer will not be rendered outside of this extent.
	     * @default undefined
	     * @type {number[]|undefined}
	     */
	    extent: {
	      type: Array,
	      validator: function validator(value) {
	        return value.length === 4;
	      }
	    },
	    minResolution: Number,
	    maxResolution: Number,
	    opacity: {
	      type: Number,
	      default: 1
	    },
	    overlay: {
	      type: Boolean,
	      default: false
	    },
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    zIndex: Number
	  },
	  methods: {
	    /**
	     * @return {Promise<module:ol/layer/BaseLayer~BaseLayer>}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var layer;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.createLayer();

	              case 2:
	                layer = _context.sent;
	                initializeLayer(layer, _this.id);
	                return _context.abrupt("return", layer);

	              case 5:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {module:ol/layer/BaseLayer~BaseLayer|Promise<module:ol/layer/BaseLayer~BaseLayer>}
	     * @protected
	     * @abstract
	     */
	    createLayer: function createLayer() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * @return {Promise<Vue<module:ol/layer/BaseLayer~BaseLayer>>}
	     * @protected
	     */
	    init: function init() {
	      return cmp$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp$1.methods.deinit.call(this);
	    },

	    /**
	     * @param {number[]} pixel
	     * @return {boolean}
	     */
	    isAtPixel: function isAtPixel(pixel) {
	      var _this2 = this;

	      hasMap(this);
	      return this.$map.forEachLayerAtPixel(pixel, function (layer) {
	        return layer === _this2.$layer;
	      });
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp$1.methods.getServices.call(this), sourceContainer.methods.getServices.call(this), {
	        get layer() {
	          return vm.$layer;
	        }

	      });
	    },

	    /**
	     * @return {{
	     *     setSource: function(module:ol/source/Source~Source): void,
	     *     getSource: function(): module:ol/source/Source~Source
	     *   }|undefined}
	     * @protected
	     */
	    getSourceTarget: function getSourceTarget() {
	      return this.$layer;
	    },

	    /**
	     * @return {Promise}
	     * @protected
	     */
	    mount: function mount() {
	      if (this.overlay && this.$map) {
	        this.setMap(this.$map);
	      } else if (this.$layersContainer) {
	        this.$layersContainer.addLayer(this);
	      }

	      return cmp$1.methods.mount.call(this);
	    },

	    /**
	     * @return {Promise}
	     * @protected
	     */
	    unmount: function unmount() {
	      if (this.overlay) {
	        this.setMap(undefined);
	      } else if (this.$layersContainer) {
	        this.$layersContainer.removeLayer(this);
	      }

	      return cmp$1.methods.unmount.call(this);
	    },

	    /**
	     * Updates layer state
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      return cmp$1.methods.refresh.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise}
	     * @protected
	     */
	    remount: function remount() {
	      return cmp$1.methods.remount.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise}
	     * @protected
	     */
	    recreate: function recreate() {
	      return cmp$1.methods.remount.call(this);
	    },

	    /**
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      cmp$1.methods.subscribeAll.call(this);
	      subscribeToLayerEvents.call(this);
	    },

	    /**
	     * @param {module:ol/Map~Map|Vue|undefined} map
	     */
	    setMap: function setMap(map) {
	      hasLayer(this);
	      map = map instanceof Vue ? map.$map : map;
	      this.$layer.setMap(map);
	    }
	  },
	  watch: _objectSpread$4({
	    id: function id(value) {
	      if (!this.$layer || value === getLayerId(this.$layer)) {
	        return;
	      }

	      setLayerId(this.$layer, value);
	    },
	    maxResolution: function maxResolution(value) {
	      if (!this.$layer || value === this.$layer.getMaxResolution()) {
	        return;
	      }

	      this.$layer.setMaxResolution(value);
	    },
	    minResolution: function minResolution(value) {
	      if (!this.$layer || value === this.$layer.getMinResolution()) {
	        return;
	      }

	      this.$layer.setMinResolution(value);
	    },
	    opacity: function opacity(value) {
	      if (!this.$layer || value === this.$layer.getOpacity()) {
	        return;
	      }

	      this.$layer.setOpacity(value);
	    },
	    visible: function visible(value) {
	      if (!this.$layer || value === this.$layer.getVisible()) {
	        return;
	      }

	      this.$layer.setVisible(value);
	    },
	    zIndex: function zIndex(value) {
	      if (!this.$layer || value === this.$layer.getZIndex()) {
	        return;
	      }

	      this.$layer.setZIndex(value);
	    },
	    extent: function extent$$1(value) {
	      if (!this.$layer || isEqual(value, this.$layer.getExtent())) {
	        return;
	      }

	      this.$layer.setExtent(value);
	    }
	  }, makeWatchers(['overlay'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  })),
	  stubVNode: {
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  },
	  created: function created() {
	    defineServices$6.call(this);
	  }
	};

	function defineServices$6() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    $layer: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },
	    $source: {
	      enumerable: true,
	      get: this.getSource
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && map$2(_this3.$services);
	      }
	    },
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.view;
	      }
	    },
	    $layersContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.layersContainer;
	      }
	    }
	  });
	}

	function subscribeToLayerEvents() {
	  var _this4 = this;

	  hasLayer(this);
	  var events = fromOlEvent(this.$layer, ['postcompose', 'precompose', 'render']);
	  this.subscribeTo(events, function (evt) {
	    _this4.$emit(evt.type, evt);
	  });
	}

	var layersContainer = {
	  mixins: [identMap, rxSubs],
	  computed: {
	    layerIds: function layerIds() {
	      var _context;

	      if (!this.rev) return [];
	      return map$2(_context = this.getLayers()).call(_context, getLayerId);
	    },
	    layersCollectionIdent: function layersCollectionIdent() {
	      if (!this.olObjIdent) return;
	      return this.makeIdent(this.olObjIdent, 'layers_collection');
	    }
	  },
	  methods: {
	    /**
	     * @param {BaseLayer|Vue} layer
	     * @return {void}
	     */
	    addLayer: function addLayer(layer) {
	      layer = layer instanceof Vue ? layer.$layer : layer;
	      instanceOf(layer, BaseLayer);

	      if (this.getLayerById(getLayerId(layer)) == null) {
	        initializeLayer(layer);
	        this.$layersCollection.push(layer);
	      }
	    },

	    /**
	     * @param {BaseLayer|Vue} layer
	     * @return {void}
	     */
	    removeLayer: function removeLayer(layer) {
	      layer = this.getLayerById(getLayerId(layer));
	      if (!layer) return;
	      this.$layersCollection.remove(layer);
	    },

	    /**
	     * @return {BaseLayer[]}
	     */
	    getLayers: function getLayers() {
	      return this.$layersCollection.getArray();
	    },

	    /**
	     * @return {module:ol/Collection~Collection<BaseLayer>}
	     */
	    getLayersCollection: function getLayersCollection() {
	      return this._layersCollection;
	    },

	    /**
	     * @param {string|number} layerId
	     * @return {BaseLayer|undefined}
	     */
	    getLayerById: function getLayerById(layerId) {
	      var _context2;

	      return find$2(_context2 = this.$layersCollection.getArray()).call(_context2, function (layer) {
	        return getLayerId(layer) === layerId;
	      });
	    },

	    /**
	     * @return {void}
	     */
	    clearLayers: function clearLayers() {
	      this.$layersCollection.clear();
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get layersContainer() {
	          return vm;
	        }

	      };
	    }
	  },
	  created: function created() {
	    this._layersCollection = this.instanceFactoryCall(this.layersCollectionIdent, function () {
	      return new Collection();
	    });
	    defineServices$7.call(this);
	    subscribeToCollectionEvents$2.call(this);
	  }
	};

	function defineServices$7() {
	  defineProperties$1(this, {
	    $layersCollection: {
	      enumerable: true,
	      get: this.getLayersCollection
	    }
	  });
	}

	function subscribeToCollectionEvents$2() {
	  var _this = this;

	  var adds = fromOlEvent(this.$layersCollection, 'add');
	  var removes = fromOlEvent(this.$layersCollection, 'remove');
	  this.subscribeTo(merge(adds, removes), function (_ref) {
	    var type = _ref.type,
	        element = _ref.element;
	    ++_this.rev;

	    _this.$nextTick(function () {
	      _this.$emit(type + ':layer', element);
	    });
	  });
	}

	var overlaysContainer = {
	  mixins: [identMap, rxSubs],
	  computed: {
	    overlayIds: function overlayIds() {
	      var _context;

	      if (!this.rev) return [];
	      return map$2(_context = this.getOverlays()).call(_context, getOverlayId);
	    },
	    overlaysCollectionIdent: function overlaysCollectionIdent() {
	      if (!this.olObjIdent) return;
	      return this.makeIdent(this.olObjIdent, 'overlays_collection');
	    }
	  },
	  methods: {
	    /**
	     * @param {Overlay|Vue} overlay
	     * @return {void}
	     */
	    addOverlay: function addOverlay(overlay) {
	      overlay = overlay instanceof Vue ? overlay.$overlay : overlay;
	      instanceOf(overlay, Overlay);

	      if (this.getOverlayById(getOverlayId(overlay)) == null) {
	        initializeOverlay(overlay);
	        this.$overlaysCollection.push(overlay);
	      }
	    },

	    /**
	     * @param {Overlay|Vue} overlay
	     * @return {void}
	     */
	    removeOverlay: function removeOverlay(overlay) {
	      overlay = this.getOverlayById(getOverlayId(overlay));
	      if (!overlay) return;
	      this.$overlaysCollection.remove(overlay);
	    },

	    /**
	     * @return {Overlay[]}
	     */
	    getOverlays: function getOverlays() {
	      return this.$overlaysCollection.getArray();
	    },

	    /**
	     * @return {Collection<Overlay>}
	     */
	    getOverlaysCollection: function getOverlaysCollection() {
	      return this._overlaysCollection;
	    },

	    /**
	     * @param {string|number} overlayId
	     * @return {Overlay|undefined}
	     */
	    getOverlayById: function getOverlayById(overlayId) {
	      var _context2;

	      return find$2(_context2 = this.$overlaysCollection.getArray()).call(_context2, function (overlay) {
	        return getOverlayId(overlay) === overlayId;
	      });
	    },

	    /**
	     * @return {void}
	     */
	    clearOverlays: function clearOverlays() {
	      this.$overlaysCollection.clear();
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get overlaysContainer() {
	          return vm;
	        }

	      };
	    }
	  },
	  created: function created() {
	    this._overlaysCollection = this.instanceFactoryCall(this.overlaysCollectionIdent, function () {
	      return new Collection();
	    });
	    defineServices$8.call(this);
	    subscribeToCollectionEvents$3.call(this);
	  }
	};

	function defineServices$8() {
	  defineProperties$1(this, {
	    $overlaysCollection: {
	      enumerable: true,
	      get: this.getOverlaysCollection
	    }
	  });
	}

	function subscribeToCollectionEvents$3() {
	  var _this = this;

	  var adds = fromOlEvent(this.$overlaysCollection, 'add');
	  var removes = fromOlEvent(this.$overlaysCollection, 'remove');
	  this.subscribeTo(merge(adds, removes), function (_ref) {
	    var type = _ref.type,
	        element = _ref.element;
	    ++_this.rev;

	    _this.$nextTick(function () {
	      _this.$emit(type + ':overlay', element);
	    });
	  });
	}

	var stylesContainer = {
	  created: function created() {
	    /**
	     * @type {module:ol/style/Style~Style[]|module:ol/style/Style~StyleFunction|Vue|undefined}
	     * @private
	     */
	    this._styles = undefined;
	  },
	  methods: {
	    /**
	     * Default style factory
	     * @return {module:ol/style/Style~Style[]|module:ol/style/Style~StyleFunction|undefined}
	     * @protected
	     */
	    getDefaultStyles: function getDefaultStyles() {},

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return {
	        get stylesContainer() {
	          return vm;
	        }

	      };
	    },

	    /**
	     * @return {module:ol/style/Style~Style[]|module:ol/style/Style~StyleFunction|Vue|undefined}
	     */
	    getStyles: function getStyles() {
	      return this._styles;
	    },

	    /**
	     * @param {module:ol/style/Style~Style|module:ol/style/Style~StyleFunction|Vue|undefined} style
	     * @return {void}
	     */
	    addStyle: function addStyle(style$$1) {
	      var currentStyles = this.getStyles();
	      var olStyle = style$$1 instanceof Vue ? style$$1.$style : style$$1;

	      if (isFunction(olStyle)) {

	        currentStyles = style$$1;
	      } else {
	        if (!isArray$3(currentStyles)) {

	          currentStyles = [];
	        }

	        style$$1 = style$$1 instanceof Vue ? style$$1 : {
	          $style: style$$1,
	          condition: true
	        };

	        if (!includes$4(currentStyles).call(currentStyles, style$$1)) {
	          currentStyles.push(style$$1);
	        }
	      }

	      this.setStyle(currentStyles);
	    },

	    /**
	     * @param {Array<{style: module:ol/style/Style~Style, condition: (function|boolean|undefined)}>|module:ol/style/Style~StyleFunction|Vue|undefined} styles
	     * @return {void}
	     */
	    setStyle: function setStyle(styles) {
	      if (styles === this._styles) return;
	      this._styles = styles;
	      var styleTarget = this.getStyleTarget();
	      if (!styleTarget) return;

	      if (this._styles === null || this._styles) {
	        styleTarget.setStyle(this.createStyleFunc());
	      } else {
	        styleTarget.setStyle(undefined);
	      }
	    },

	    /**
	     * @param {module:ol/style/Style~Style|module:ol/style/Style~StyleFunction|Vue|undefined} style
	     * @return {void}
	     */
	    removeStyle: function removeStyle(style$$1) {
	      var currentStyles = this.getStyles();

	      if (currentStyles === style$$1) {
	        currentStyles = undefined;
	      } else if (isArray$3(currentStyles)) {
	        currentStyles = filter$2(currentStyles).call(currentStyles, function (s) {
	          return style$$1 instanceof Vue ? s !== style$$1 : s.$style !== style$$1;
	        });
	        currentStyles.length || (currentStyles = undefined);
	      }

	      this.setStyle(currentStyles);
	    },

	    /**
	     * Returns OL object that can be styled (i.e. has setStyle/getStyle methods) or undefined
	     * @return {*}
	     * @protected
	     * @abstract
	     */
	    getStyleTarget: function getStyleTarget() {
	      throw new Error('Not implemented method');
	    },

	    /**
	     * Style function factory
	     * @returns {module:ol/style/Style~StyleFunction}
	     * @protected
	     */
	    createStyleFunc: function createStyleFunc() {
	      var vm = this;
	      var defaultStyles = this.getDefaultStyles();
	      return function __styleTargetStyleFunc(feature, resolution) {
	        if (!feature.getGeometry()) return;
	        var styles = vm.getStyles();
	        /* eslint-disable brace-style */
	        // handle provided styles
	        // styles - StyleFunction or vl-style-func

	        if (styles && (isFunction(styles) || isFunction(styles.$style))) {
	          var styleFunc = isFunction(styles) ? styles : styles.$style;
	          styles = styleFunc(feature, resolution);
	        } // styles is array of { $style: Style, condition: (bool|function():bool) }
	        else if (isArray$3(styles)) {
	            styles = reduce$3(styles, function (newStyles, _ref) {
	              var $style = _ref.$style,
	                  condition$$1 = _ref.condition;

	              if (condition$$1 == null || condition$$1 === true || isFunction(condition$$1) && condition$$1(feature, resolution)) {
	                newStyles.push($style);
	              }

	              return newStyles;
	            }, []);
	          }
	        /* eslint-enable brace-style */
	        // not empty or null style


	        if (styles === null || isArray$3(styles) && styles.length || styles instanceof style.Style) {
	          return styles;
	        } // fallback to default style


	        styles = defaultStyles;

	        if (styles) {
	          return isFunction(styles) ? styles(feature, resolution) : styles;
	        }
	      };
	    }
	  }
	};

	/*!
	OpenLayers tile url function to load tile seeded with TileCache url scheme

	@package ol-tilecache
	@author Vladimir Vershinin <ghettovoice@gmail.com>
	@version 3.0.2
	@licence MIT
	@copyright (c) 2016-2019, Vladimir Vershinin <ghettovoice@gmail.com>
	*/
	/**
	 * This file is part of ol-tilecache package.
	 * @module ol-tilecache
	 * @license MIT
	 * @author Vladimir Vershinin
	 */

	/**
	 * Left zero pad.
	 *
	 * @param {string | number} num
	 * @param {number} places
	 * @returns {string}
	 */

	function zeroPad(num, places) {
	  var zero = places - num.toString().length + 1;
	  return (new Array(parseInt(zero > 0 && zero, 10)).join("0") + num).toString().slice(-places);
	}
	/**
	 * The % operator in JavaScript returns the remainder of a / b, but differs from
	 * some other languages in that the result will have the same sign as the
	 * dividend. For example, -1 % 8 == -1, whereas in some other languages
	 * (such as Python) the result would be 7. This function emulates the more
	 * correct modulo behavior, which is useful for certain applications such as
	 * calculating an offset index in a circular list.
	 *
	 * @param {number} a The dividend.
	 * @param {number} b The divisor.
	 * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
	 *     or b < x <= 0, depending on the sign of b).
	 * @link https://closure-library.googlecode.com/git-history/docs/local_closure_goog_math_math.js.source.html#line73
	 */


	function modulo(a, b) {
	  var m = a % b;
	  return m * b < 0 ? m + b : m;
	}

	function isArray$8(value) {
	  return Object.prototype.toString.call(value) === '[object Array]';
	}

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();
	/**
	 * This file is part of ol-tilecache package.
	 * @module ol-tilecache
	 * @license MIT
	 * @author Vladimir Vershinin
	 */

	/**
	 * @param {TileGrid} tileGrid
	 * @param {number[]} extent
	 * @param {number} z
	 * @return {{minX, minY, maxX, maxY}}
	 */


	function calculateTileRangeForZ(tileGrid, extent$$1, z) {
	  var resolution = tileGrid.getResolution(z);

	  var _getTileCoordForXYAnd = getTileCoordForXYAndResolution(tileGrid, extent$$1[0], extent$$1[1], resolution, false),
	      _getTileCoordForXYAnd2 = slicedToArray(_getTileCoordForXYAnd, 2),
	      minX = _getTileCoordForXYAnd2[0],
	      minY = _getTileCoordForXYAnd2[1];

	  var _getTileCoordForXYAnd3 = getTileCoordForXYAndResolution(tileGrid, extent$$1[2], extent$$1[3], resolution, true),
	      _getTileCoordForXYAnd4 = slicedToArray(_getTileCoordForXYAnd3, 2),
	      maxX = _getTileCoordForXYAnd4[0],
	      maxY = _getTileCoordForXYAnd4[1];

	  return {
	    minX: minX,
	    minY: minY,
	    maxX: maxX,
	    maxY: maxY
	  };
	}
	/**
	 * @param {TileGrid} tileGrid
	 * @param {number} x
	 * @param {number} y
	 * @param {number} resolution
	 * @param {boolean} reverseIntersectionPolicy
	 * @return {number[]}
	 */


	function getTileCoordForXYAndResolution(tileGrid, x, y, resolution, reverseIntersectionPolicy) {
	  var z = tileGrid.getZForResolution(resolution);
	  var scale = resolution / tileGrid.getResolution(z);
	  var origin = tileGrid.getOrigin(z);
	  var tileSize = tileGrid.getTileSize(z);

	  if (!isArray$8(tileSize)) {
	    tileSize = [tileSize, tileSize];
	  }

	  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
	  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
	  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
	  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
	  var tileCoordX = scale * xFromOrigin / tileSize[0];
	  var tileCoordY = scale * yFromOrigin / tileSize[1];

	  if (reverseIntersectionPolicy) {
	    tileCoordX = Math.ceil(tileCoordX) - 1;
	    tileCoordY = Math.ceil(tileCoordY) - 1;
	  } else {
	    tileCoordX = Math.floor(tileCoordX);
	    tileCoordY = Math.floor(tileCoordY);
	  }

	  return [tileCoordX, tileCoordY];
	}
	/**
	 * @param {{minX, minY, maxX, maxY}} tileRange
	 * @return {number}
	 */


	function getTileRangeHeight(tileRange) {
	  return tileRange.maxY - tileRange.minY + 1;
	}
	/**
	 * This file is part of ol-tilecache package.
	 * @module ol-tilecache
	 * @license MIT
	 * @author Vladimir Vershinin
	 */


	var zRegEx = /{z}/g;
	var zPadRegEx = /{0z}/g;
	var xRegEx = /{x\d?}/g;
	var yRegEx = /{y\d?}/g;
	var dashYRegEx = /{-y\d?}/g;
	var EPSG3857_EXTENT = [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244];
	/**
	 * Basic create factory.
	 *
	 * @param {string} url Url template
	 * @param {TileGrid} [tileGrid] Tile grid.
	 * @param {Extent|number[]} [extent] Tile grid extent.
	 * @returns {function(tileCoord: TileCoord)}
	 * @static
	 * @public
	 */

	function createTileUrlFunction(url) {
	  var tileGrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tilegrid.createXYZ();
	  var extent$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG3857_EXTENT;
	  return createTileUrlFunctionFromTemplates(expandUrl(url), tileGrid, extent$$1);
	}
	/**
	 * Creates tile URL function from single template.
	 *
	 * @param {string} template Source url
	 * @param {TileGrid} [tileGrid] Tile grid.
	 * @param {Extent|number[]} [extent] Tile grid extent.
	 * @returns {function(tileCoord: TileCoord)}
	 * @private
	 */


	function createTileUrlFunctionFromTemplate(template) {
	  var tileGrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tilegrid.createXYZ();
	  var extent$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG3857_EXTENT;
	  return (
	    /**
	     * @param {TileCoord} tileCoord Tile Coordinate.
	     * @return {string | undefined} Tile URL.
	     */
	    function (tileCoord) {
	      if (tileCoord != null) {
	        return template.replace(zRegEx, zoomReplacer(tileCoord[0])).replace(zPadRegEx, zoomReplacer(tileCoord[0], true)).replace(xRegEx, coordReplacer(tileCoord[1])).replace(yRegEx, function (part) {
	          var y = -tileCoord[2] - 1;
	          return coordReplacer(y)(part);
	        }).replace(dashYRegEx, function (part) {
	          var z = tileCoord[0]; // The {-y} placeholder requires a tile grid with extent

	          var range = calculateTileRangeForZ(tileGrid, extent$$1, z);
	          var y = getTileRangeHeight(range) + tileCoord[2];
	          return coordReplacer(y)(part);
	        });
	      }
	    }
	  );
	}
	/**
	 * Creates tile URL function from multiple templates.
	 *
	 * @param {string[]} templates Url templates
	 * @param {TileGrid} [tileGrid] Tile grid.
	 * @param {Extent | number[]} [extent] Tile grid extent.
	 * @returns {function(tileCoord: TileCoord)}
	 * @private
	 */


	function createTileUrlFunctionFromTemplates(templates) {
	  var tileGrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tilegrid.createXYZ();
	  var extent$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSG3857_EXTENT;
	  return createTileUrlFunctionFromTileUrlFunctions(templates.map(function (tileUrlFunction) {
	    return createTileUrlFunctionFromTemplate(tileUrlFunction, tileGrid, extent$$1);
	  }));
	}
	/**
	 * @param zoom
	 * @param pad
	 * @returns {function}
	 * @private
	 */


	function zoomReplacer(zoom, pad) {
	  return function () {
	    return pad ? zeroPad(zoom, 2) : zoom.toString();
	  };
	}
	/**
	 * @param coord
	 * @returns {function}
	 * @private
	 */


	function coordReplacer(coord) {
	  return function (part) {
	    var match = part.match(/\d/);

	    if (match) {
	      return zeroPad(coord, 9).slice((match[0] - 1) * 3, match[0] * 3);
	    }

	    return coord.toString();
	  };
	}
	/**
	 * @param {string} url
	 * @returns {Array.<string>}
	 * @private
	 */


	function expandUrl(url) {
	  var urls = [];
	  var match = /{(\d)-(\d)}/.exec(url) || /{([a-z])-([a-z])}/.exec(url);

	  if (match) {
	    var startCharCode = match[1].charCodeAt(0);
	    var stopCharCode = match[2].charCodeAt(0);

	    for (var charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
	      urls.push(url.replace(match[0], String.fromCharCode(charCode)));
	    }
	  } else {
	    urls.push(url);
	  }

	  return urls;
	}
	/**
	 * @param {Array.<function(tileCoord: TileCoord)>} tileUrlFunctions
	 * @returns {function(tileCoord: TileCoord)}
	 * @private
	 */


	function createTileUrlFunctionFromTileUrlFunctions(tileUrlFunctions) {
	  if (tileUrlFunctions.length === 1) {
	    return tileUrlFunctions[0];
	  }

	  return (
	    /**
	     * @param {TileCoord} tileCoord Tile Coordinate.
	     * @param {number} pixelRatio Pixel ratio.
	     * @param {Projection} projection Projection.
	     * @return {string | undefined} Tile URL.
	     */
	    function (tileCoord, pixelRatio, projection) {
	      if (tileCoord != null) {
	        var h = (tileCoord[1] << tileCoord[0]) + tileCoord[2];
	        var index = modulo(h, tileUrlFunctions.length);
	        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
	      }
	    }
	  );
	}
	/**
	 * This file is part of ol-tilecache package.
	 * @module ol-tilecache
	 * @license MIT
	 * @author Vladimir Vershinin
	 */
	// for backward compatibility


	if (typeof window !== 'undefined' && window.ol) {
	  window.ol.tileCacheUrlFn = {
	    createTileUrlFunction: createTileUrlFunction,
	    createTileUrlFunctionFromTemplate: createTileUrlFunctionFromTemplate,
	    createTileUrlFunctionFromTemplates: createTileUrlFunctionFromTemplates
	  };
	}

	var withUrl = {
	  props: {
	    url: {
	      type: String
	    }
	  },
	  computed: {
	    /**
	     * @type {string}
	     */
	    urlTmpl: function urlTmpl() {
	      return replaceTokens(this.url, pick(this, this.urlTokens));
	    },

	    /**
	     * @type {string[]}
	     */
	    urlTokens: function urlTokens() {
	      return [];
	    }
	  }
	};

	function ownKeys$6(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; forEach$2(_context2 = ownKeys$6(Object(source$$1), true)).call(_context2, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context3; forEach$2(_context3 = ownKeys$6(Object(source$$1))).call(_context3, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var tileSource = {
	  mixins: [source$1, withUrl],
	  props: {
	    cacheSize: {
	      type: Number,
	      default: CACHE_SIZE
	    },
	    crossOrigin: String,
	    maxZoom: {
	      type: Number,
	      default: MAX_ZOOM
	    },
	    minZoom: {
	      type: Number,
	      default: MIN_ZOOM
	    },
	    opaque: Boolean,
	    projection: {
	      type: String,
	      default: EPSG_3857
	    },
	    reprojectionErrorThreshold: {
	      type: Number,
	      default: REPROJ_ERR_THRESHOLD
	    },
	    tilePixelRatio: {
	      type: Number,
	      default: PIXEL_RATIO
	    },
	    tileSize: {
	      type: Array,
	      default: function _default() {
	        return [TILE_SIZE, TILE_SIZE];
	      },
	      validator: function validator(value) {
	        return value.length === 2;
	      }
	    },

	    /**
	     * @type {module:ol/Tile~LoadFunction}
	     */
	    tileLoadFunction: Function,
	    tileKey: String,

	    /**
	     * URL template or custom tile URL function.
	     * @type {string|module:ol/Tile~UrlFunction}
	     */
	    url: {
	      type: [String, Function],
	      required: true
	    },

	    /**
	     * Duration of the opacity transition for rendering. To disable the opacity transition, pass `0`.
	     * @type {number}
	     */
	    transition: Number
	  },
	  computed: {
	    /**
	     * @type {string|undefined}
	     */
	    urlTmpl: function urlTmpl() {
	      if (!isString(this.url)) {
	        return;
	      }

	      return replaceTokens(this.url, pick(this, this.urlTokens));
	    },

	    /**
	     * @returns {function}
	     */
	    urlFunc: function urlFunc() {
	      if (!this.url) {
	        return;
	      }

	      var url;

	      if (this.urlTmpl != null) {
	        var extent$$1 = createExtentFromProjection(this.projection);
	        url = createTileUrlFunction(this.urlTmpl, this._tileGrid, extent$$1);
	      } else {
	        url = this.url;
	      }

	      return url;
	    },
	    tileGridIdent: function tileGridIdent() {
	      if (!this.olObjIdent) return;
	      return this.makeIdent(this.olObjIdent, 'tile_grid');
	    }
	  },
	  methods: {
	    createTileGrid: function createTileGrid() {
	      return tilegrid.createXYZ({
	        extent: createExtentFromProjection(this.projection),
	        maxZoom: this.maxZoom,
	        minZoom: this.minZoom,
	        tileSize: this.tileSize
	      });
	    },

	    /**
	     * @return {Promise}
	     * @protected
	     */
	    init: function init() {
	      var _context;

	      /**
	       * @type {module:ol/Tile~UrlFunction}
	       * @protected
	       */
	      this._tileGrid = this.instanceFactoryCall(this.tileGridIdent, bind$2(_context = this.createTileGrid).call(_context, this));
	      return source$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      this._tileGrid = undefined;
	      return source$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      source$1.methods.mount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      source$1.methods.unmount.call(this);
	    },
	    subscribeAll: function subscribeAll() {
	      source$1.methods.subscribeAll.call(this);
	      subscribeToSourceEvents$1.call(this);
	    }
	  },
	  watch: _objectSpread$5({
	    opaque: function opaque(value) {
	      if (!this.$source || value === this.$source.getOpaque()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    tilePixelRatio: function tilePixelRatio(value) {
	      if (!this.$source || value === this.$source.getOpaque()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    tileKey: function tileKey(value) {
	      if (!this.$source || value === this.$source.getKey()) {
	        return;
	      }

	      this.$source.setKey(value);
	    },
	    tileLoadFunction: function tileLoadFunction(value, prevValue) {
	      if (!this.$source || isEqual(value, prevValue)) return;
	      this.$source.setTileLoadFunction(value);
	    },
	    urlFunc: function urlFunc(value) {
	      if (!this.$source) return;
	      this.$source.setTileUrlFunction(value);
	      this.scheduleRefresh();
	    }
	  }, makeWatchers(['cacheSize', 'crossOrigin', 'reprojectionErrorThreshold', 'transition', 'maxZoom', 'minZoom', 'tileSize'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};

	function subscribeToSourceEvents$1() {
	  var _this = this;

	  hasSource(this);
	  var events = fromOlEvent(this.$source, ['tileloadstart', 'tileloadend', 'tileloaderror']);
	  this.subscribeTo(events, function (evt) {
	    _this.$emit(evt.type, evt);
	  });
	}

	var vectorLayer = {
	  mixins: [layer, stylesContainer],
	  props: {
	    /**
	     * When set to `true`, feature batches will be recreated during animations.
	     * @type {boolean}
	     * @default false
	     */
	    updateWhileAnimating: Boolean,

	    /**
	     * When set to `true`, feature batches will be recreated during interactions.
	     * @type {boolean}
	     * @default false
	     */
	    updateWhileInteracting: Boolean,

	    /**
	     * @type {number|undefined}
	     */
	    renderBuffer: {
	      type: Number,
	      default: 100
	    },
	    renderOrder: Function,
	    renderMode: {
	      type: String,
	      default: 'vector',
	      validator: function validator(value) {
	        var _context;

	        return includes$4(_context = ['vector', 'image']).call(_context, value);
	      }
	    },

	    /**
	     * @type {boolean}
	     */
	    declutter: Boolean
	  },
	  methods: {
	    /**
	     * @return {Promise<Vue<Layer>>}
	     * @protected
	     */
	    init: function init() {
	      return layer.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return layer.methods.deinit.call(this);
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors(layer.methods.getServices.call(this), stylesContainer.methods.getServices.call(this));
	    },

	    /**
	     * @return {Vector|undefined}
	     * @protected
	     */
	    getStyleTarget: function getStyleTarget() {
	      return this.$layer;
	    },

	    /**
	     * @return {Promise|void}
	     * @protected
	     */
	    mount: function mount() {
	      return layer.methods.mount.call(this);
	    },

	    /**
	     * @return {Promise|void}
	     * @protected
	     */
	    unmount: function unmount() {
	      return layer.methods.unmount.call(this);
	    },

	    /**
	     * Updates layer state
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      return layer.methods.refresh.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise<void>}
	     * @protected
	     */
	    remount: function remount() {
	      return layer.methods.remount.call(this);
	    },

	    /**
	     * Internal usage only in components that doesn't support refreshing.
	     * @return {Promise<void>}
	     * @protected
	     */
	    recreate: function recreate() {
	      return layer.methods.remount.call(this);
	    },

	    /**
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      layer.methods.subscribeAll.call(this);
	    }
	  },
	  watch: {
	    updateWhileAnimating: function updateWhileAnimating(value) {
	      if (!this.$layer || value === this.$layer.getUpdateWhileAnimating()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    updateWhileInteracting: function updateWhileInteracting(value) {
	      if (!this.$layer || value === this.$layer.getUpdateWhileInteracting()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    renderBuffer: function renderBuffer(value) {
	      if (!this.$layer || value === this.$layer.getRenderBuffer()) {
	        return;
	      }

	      this.scheduleRecreate();
	    },
	    renderOrder: function renderOrder(value) {
	      if (!this.$layer || isEqual(value, this.$layer.getRenderOrder())) {
	        return;
	      }

	      this.$layer.setRenderOrder(value);
	    },
	    declutter: function declutter(value) {
	      if (!this.$layer || value === this.$layer.getDeclutter()) {
	        return;
	      }

	      this.$layer.setDeclutter(value);
	    }
	  }
	};

	function ownKeys$7(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$7(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$7(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var vectorSource = {
	  mixins: [source$1, featuresContainer, projTransforms],
	  props: {
	    useSpatialIndex: {
	      type: Boolean,
	      default: true
	    }
	  },
	  methods: {
	    /**
	     * @return {void}
	     */
	    clear: function clear() {
	      featuresContainer.methods.clearFeatures.call(this);
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors(source$1.methods.getServices.call(this), featuresContainer.methods.getServices.call(this));
	    },

	    /**
	     * @return {Promise}
	     * @protected
	     */
	    init: function init() {
	      return source$1.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return source$1.methods.deinit.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      return source$1.methods.mount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      return source$1.methods.unmount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      source$1.methods.subscribeAll.call(this);
	    },

	    /**
	     * @param feature
	     * @return {ReadonlyArray<any>}
	     * @protected
	     */
	    writeFeatureInDataProj: function writeFeatureInDataProj(feature) {
	      return projTransforms.methods.writeFeatureInDataProj.call(this, feature);
	    },

	    /**
	     * @param feature
	     * @return {ReadonlyArray<any>}
	     * @protected
	     */
	    writeGeometryInViewProj: function writeGeometryInViewProj(feature) {
	      return projTransforms.methods.writeFeatureInViewProj.call(this, feature);
	    }
	  },
	  watch: _objectSpread$6({
	    featuresDataProj: {
	      deep: true,
	      handler: dist(function (features) {
	        this.$emit('update:features', slice$2(features).call(features));
	      }, 1000 / 60)
	    }
	  }, makeWatchers(['useSpatialIndex'], function () {
	    return function () {
	      return this.scheduleRecreate();
	    };
	  })),
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  }
	};

	var withFillStrokeStyle = {
	  methods: {
	    /**
	     * @param {Fill|Vue|undefined} fill
	     * @return {void}
	     * @protected
	     */
	    setFill: function setFill(fill) {
	      fill = fill instanceof Vue ? fill.$style : fill;

	      if (fill !== this._fill) {
	        /**
	         * @type {Fill|undefined}
	         * @private
	         */
	        this._fill = fill;
	      }

	      if (this.$style && fill !== this.$style.getFill()) {
	        this.$style.setFill(fill);
	        this.scheduleRefresh();
	      }
	    },

	    /**
	     * @param {Stroke|Vue|undefined} stroke
	     * @return {void}
	     * @protected
	     */
	    setStroke: function setStroke(stroke) {
	      stroke = stroke instanceof Vue ? stroke.$style : stroke;

	      if (stroke !== this._stroke) {
	        /**
	         * @type {Stroke|undefined}
	         * @private
	         */
	        this._stroke = stroke;
	      }

	      if (this.$style && stroke !== this.$style.getStroke()) {
	        this.$style.setStroke(stroke);
	        this.scheduleRefresh();
	      }
	    }
	  },
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  }
	};

	function ownKeys$8(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$8(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$8(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }

	var _cleanExtParams = function cleanExtParams(params) {
	  return reduce$3(params, function (params, value, key) {
	    var filterKeys = ['LAYERS', 'VERSION', 'STYLES', 'FORMAT', 'TRANSPARENT', 'BGCOLOR', 'TIME'];
	    key = key.toUpperCase();

	    if (includes$4(filterKeys).call(filterKeys, key)) {
	      return params;
	    }

	    params[key] = value;
	    return params;
	  }, {});
	};

	var props = {
	  /**
	   * Extra WMS request parameters
	   */
	  extParams: Object,
	  layers: {
	    type: String,
	    required: true
	  },
	  styles: String,
	  // WMS Request styles
	  version: {
	    type: String,
	    default: WMS_VERSION
	  },
	  transparent: {
	    type: Boolean,
	    default: true
	  },
	  format: {
	    type: String,
	    default: 'image/png'
	  },
	  bgColor: String,
	  time: String
	};
	var computed = {
	  cleanExtParams: function cleanExtParams() {
	    return this.extParams ? _cleanExtParams(this.extParams) : undefined;
	  },
	  allParams: function allParams() {
	    return _objectSpread$7(_objectSpread$7({}, this.cleanExtParams), {}, {
	      LAYERS: this.layers,
	      STYLES: this.styles,
	      VERSION: this.version,
	      FORMAT: this.format,
	      TRANSPARENT: this.transparent,
	      BGCOLOR: this.bgColor,
	      TIME: this.time
	    });
	  }
	};
	var methods = {
	  /**
	   * @param {number[]} coordinate
	   * @param {number} [resolution]
	   * @param {string} [projection]
	   * @param {Object} [params] GetFeatureInfo params. `info_format` at least should be provided.
	   *                          If `query_layers` is not provided then the layers specified in the `layers` prop will be used.
	   *                          `version` should not be specified here (value from `version` prop will be used).
	   * @return {string|undefined}
	   */
	  getFeatureInfoUrl: function getFeatureInfoUrl(coordinate, resolution, projection) {
	    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    hasView(this);
	    hasSource(this);
	    resolution || (resolution = this.$view.getResolution());
	    projection || (projection = this.projection);
	    params = _objectSpread$7(_objectSpread$7({}, this.allParams), params);
	    return this.$source.getGetFeatureInfoUrl(coordinate, resolution, projection, params);
	  }
	};

	var watch = _objectSpread$7(_objectSpread$7({}, makeWatchers(['layers', 'version', 'styles', 'transparent', 'format', 'bgColor', 'time'], function (prop) {
	  return function (value) {
	    prop = prop.toUpperCase();
	    this.$source && this.$source.updateParams(_defineProperty({}, prop, value));
	  };
	})), {}, {
	  extParams: function extParams(value) {
	    this.$source && this.$source.updateParams(value ? _cleanExtParams(value) : undefined);
	  }
	});

	var wmsSource = {
	  props: props,
	  computed: computed,
	  methods: methods,
	  watch: watch
	};

	var xyzSource = {
	  mixins: [tileSource],
	  methods: {
	    /**
	     * @return {XYZ}
	     * @protected
	     */
	    createSource: function createSource() {
	      return new XYZSource({
	        attributions: this.attributions,
	        attributionsCollapsible: this.attributionsCollapsible,
	        cacheSize: this.cacheSize,
	        crossOrigin: this.crossOrigin,
	        maxZoom: this.maxZoom,
	        minZoom: this.minZoom,
	        opaque: this.opaque,
	        projection: this.projection,
	        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	        tileGrid: this._tileGrid,
	        tilePixelRatio: this.tilePixelRatio,
	        tileUrlFunction: this.urlFunc,
	        tileLoadFunction: this.tileLoadFunction,
	        wrapX: this.wrapX,
	        transition: this.transition
	      });
	    }
	  }
	};

	var script = {
	  name: 'vl-source-arcgis-rest',
	  mixins: [tileSource, arcgisSource],
	  props: {
	    url: {
	      type: String,
	      required: true,
	      validator: function validator(value) {
	        return !!value.length;
	      }
	    }
	  },
	  methods: {
	    createSource: function createSource() {
	      return new TileArcGISRestSource({
	        attributions: this.attributions,
	        cacheSize: this.cacheSize,
	        crossOrigin: this.crossOrigin,
	        params: this.allParams,
	        tileGrid: this._tileGrid,
	        projection: this.projection,
	        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	        tileLoadFunction: this.tileLoadFunction,
	        url: this.urlTmpl,
	        wrapX: this.wrapX,
	        transition: this.transition
	      });
	    }
	  }
	};

	var __vue_script__ = script;
	/* template */

	/* style */

	var __vue_inject_styles__ = undefined;
	/* scoped */

	var __vue_scope_id__ = undefined;
	/* module identifier */

	var __vue_module_identifier__ = undefined;
	/* functional template */

	var __vue_is_functional_template__ = undefined;
	/* component normalizer */

	function __vue_normalize__(template, style$$1, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$1 = __vue_normalize__({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

	function plugin(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin.installed) {
	    return;
	  }

	  plugin.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$1, options);

	  Vue$$1.component(Source$1.name, Source$1);
	}

	var ArcgisRestSource = /*#__PURE__*/Object.freeze({
		default: plugin,
		Source: Source$1,
		install: plugin
	});

	function ownKeys$9(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$9(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$9(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var BINGMAPS_MAX_ZOOM = 21;
	var BINGMAPS_CULTURE = 'en-us';
	var script$1 = {
	  name: 'vl-source-bingmaps',
	  mixins: [tileSource],
	  props: {
	    /**
	     * Enables hidpi tiles.
	     * @type {boolean}
	     */
	    hidpi: {
	      type: Boolean,
	      default: false
	    },

	    /**
	     * Culture code.
	     * @type {string}
	     */
	    culture: {
	      type: String,
	      default: BINGMAPS_CULTURE
	    },

	    /**
	     * Bing Maps API key.
	     * @type {string}
	     */
	    apiKey: {
	      type: String,
	      required: true
	    },

	    /**
	     * Type of imagery.
	     * @type {string}
	     */
	    imagerySet: {
	      type: String,
	      required: true
	    },
	    maxZoom: {
	      type: Number,
	      default: BINGMAPS_MAX_ZOOM
	    },
	    url: String
	  },
	  methods: {
	    /**
	     * @return {BingMaps}
	     * @protected
	     */
	    createSource: function createSource() {
	      return new BingMapsSource({
	        cacheSize: this.cacheSize,
	        hidpi: this.hidpi,
	        culture: this.culture,
	        key: this.apiKey,
	        imagerySet: this.imagerySet,
	        maxZoom: this.maxZoom,
	        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	        wrapX: this.wrapX,
	        transition: this.transition,
	        tileLoadFunction: this.tileLoadFunction
	      });
	    }
	  },
	  watch: _objectSpread$8({}, makeWatchers(['apiKey', 'imagerySet'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};

	var __vue_script__$1 = script$1;
	/* template */

	/* style */

	var __vue_inject_styles__$1 = undefined;
	/* scoped */

	var __vue_scope_id__$1 = undefined;
	/* module identifier */

	var __vue_module_identifier__$1 = undefined;
	/* functional template */

	var __vue_is_functional_template__$1 = undefined;
	/* component normalizer */

	function __vue_normalize__$1(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$2 = __vue_normalize__$1({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

	/**
	 * @param {Vue} Vue
	 * @param {VueLayersOptions} [options]
	 */

	function plugin$1(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$1.installed) {
	    return;
	  }

	  plugin$1.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$2, options);

	  Vue$$1.component(Source$2.name, Source$2);
	}

	var BingmapsSource = /*#__PURE__*/Object.freeze({
		default: plugin$1,
		Source: Source$2,
		install: plugin$1
	});

	/**
	 * @alias module:circle-geom/geom
	 * @title vl-geom-circle
	 * @vueProto
	 */

	var script$2 = {
	  name: 'vl-geom-circle',
	  mixins: [geometry$1],
	  props: {
	    coordinates: {
	      type: Array,
	      required: true,
	      validator: function validator(value) {
	        return value.length === 2;
	      }
	    },
	    radius: {
	      type: Number,
	      default: 0
	    }
	  },
	  computed: {
	    type: constant(GEOMETRY_TYPE.POINT),

	    /**
	     * @type {Array|undefined}
	     */
	    coordinatesViewProj: function coordinatesViewProj() {
	      if (this.rev && this.$geometry) {
	        return this.$geometry.getCenter();
	      }
	    }
	  },
	  methods: {
	    /**
	     * @return {Circle}
	     * @protected
	     */
	    createGeometry: function createGeometry() {
	      return new Circle(this.toViewProj(this.coordinates), this.radius);
	    },

	    /**
	     * @return {Coordinate}
	     */
	    getCoordinates: function getCoordinates() {
	      hasGeometry(this);
	      return this.toDataProj(this.$geometry.getCenter());
	    },

	    /**
	     * @param {Coordinate} coordinate
	     */
	    setCoordinates: function setCoordinates(coordinate) {
	      hasGeometry(this);
	      this.$geometry.setCenter(this.toViewProj(coordinate));
	    }
	  },
	  watch: {
	    radius: function radius(value) {
	      if (!this.$geometry) return;

	      if (value !== this.$geometry.getRadius()) {
	        this.$geometry.setRadius(value);
	      }
	    }
	  }
	};

	var __vue_script__$2 = script$2;
	/* template */

	/* style */

	var __vue_inject_styles__$2 = undefined;
	/* scoped */

	var __vue_scope_id__$2 = undefined;
	/* module identifier */

	var __vue_module_identifier__$2 = undefined;
	/* functional template */

	var __vue_is_functional_template__$2 = undefined;
	/* component normalizer */

	function __vue_normalize__$2(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom = __vue_normalize__$2({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

	function plugin$2(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$2.installed) {
	    return;
	  }

	  plugin$2.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom, options);

	  Vue$$1.component(Geom.name, Geom);
	}

	var CircleGeom = /*#__PURE__*/Object.freeze({
		default: plugin$2,
		Geom: Geom,
		install: plugin$2
	});

	var props$1 = {
	  radius: {
	    type: Number,
	    default: 5
	  }
	};
	var methods$1 = {
	  /**
	   * @return {ol.style.Circle}
	   * @protected
	   */
	  createStyle: function createStyle() {
	    return new Circle$1({
	      radius: this.radius,
	      fill: this._fill,
	      stroke: this._stroke
	    });
	  },

	  /**
	   * @returns {Object}
	   * @protected
	   */
	  getServices: function getServices() {
	    var vm = this;
	    return multiMergeDescriptors(imageStyle.methods.getServices.call(this), {
	      get stylesContainer() {
	        return vm;
	      }

	    });
	  },

	  /**
	   * @param {ol.style.Fill|Vue|undefined} fill
	   * @return {void}
	   */
	  setFill: function setFill(fill) {
	    fill = fill instanceof Vue ? fill.$style : fill;

	    if (fill !== this._fill) {
	      this._fill = fill;
	      this.scheduleRefresh();
	    }
	  },

	  /**
	   * @param {ol.style.Stroke|Vue|undefined} stroke
	   * @return {void}
	   */
	  setStroke: function setStroke(stroke) {
	    stroke = stroke instanceof Vue ? stroke.$style : stroke;

	    if (stroke !== this._stroke) {
	      this._stroke = stroke;
	      this.scheduleRefresh();
	    }
	  }
	};
	var watch$1 = {
	  radius: function radius(value) {
	    if (this.$style && !isEqual(value, this.$style.getRadius())) {
	      this.scheduleRefresh();
	    }
	  }
	};
	var script$3 = {
	  name: 'vl-style-circle',
	  mixins: [imageStyle, withFillStrokeStyle],
	  props: props$1,
	  methods: methods$1,
	  watch: watch$1
	};

	var __vue_script__$3 = script$3;
	/* template */

	/* style */

	var __vue_inject_styles__$3 = undefined;
	/* scoped */

	var __vue_scope_id__$3 = undefined;
	/* module identifier */

	var __vue_module_identifier__$3 = undefined;
	/* functional template */

	var __vue_is_functional_template__$3 = undefined;
	/* component normalizer */

	function __vue_normalize__$3(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$1 = __vue_normalize__$3({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

	function plugin$3(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$3.installed) {
	    return;
	  }

	  plugin$3.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$1, options);

	  Vue$$1.component(Style$1.name, Style$1);
	}

	var CircleStyle = /*#__PURE__*/Object.freeze({
		default: plugin$3,
		Style: Style$1,
		install: plugin$3
	});

	var values$4 = entryVirtual('Array').values;

	var values$5 = values$4;

	var ArrayPrototype$d = Array.prototype;

	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var values_1 = function (it) {
	  var own = it.values;
	  return it === ArrayPrototype$d || (it instanceof Array && own === ArrayPrototype$d.values)
	    // eslint-disable-next-line no-prototype-builtins
	    || DOMIterables$1.hasOwnProperty(classof(it)) ? values$5 : own;
	};

	var values$6 = values_1;

	var Builder = /*#__PURE__*/function () {
	  function Builder() {
	    _classCallCheck(this, Builder);
	  }

	  _createClass(Builder, [{
	    key: "getSource",
	    value: function getSource() {
	      return this.source;
	    }
	    /**
	     * @param {Vector|undefined} value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setSource",
	    value: function setSource(value) {
	      this.source = value;
	      return this;
	    }
	    /**
	     * @param value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setAttributions",
	    value: function setAttributions(value) {
	      this.attributions = value;
	      return this;
	    }
	    /**
	     * @param value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setDistance",
	    value: function setDistance(value) {
	      this.distance = value;
	      return this;
	    }
	    /**
	     * @param value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setGeometryFunction",
	    value: function setGeometryFunction(value) {
	      this.geometryFunction = value;
	      return this;
	    }
	    /**
	     * @param value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setLogo",
	    value: function setLogo(value) {
	      this.logo = value;
	      return this;
	    }
	    /**
	     * @param value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setProjection",
	    value: function setProjection(value) {
	      this.projection = value;
	      return this;
	    }
	    /**
	     * @param value
	     * @returns {Builder}
	     */

	  }, {
	    key: "setWrapX",
	    value: function setWrapX(value) {
	      this.wrapX = value;
	      return this;
	    }
	    /**
	     * @param key
	     * @param value
	     * @return {void}
	     */

	  }, {
	    key: "set",
	    value: function set(key, value) {
	      values$6(this) || (this.values = {});
	      values$6(this)[key] = value;
	    }
	    /**
	     * @return {Cluster}
	     */

	  }, {
	    key: "build",
	    value: function build() {
	      ok(this.source, 'source is provided');
	      var source$$1 = new Cluster({
	        attributions: this.attributions,
	        distance: this.distance,
	        geometryFunction: this.geometryFunction,
	        logo: this.logo,
	        projection: this.projection,
	        source: this.source,
	        wrapX: this.wrapX
	      });
	      source$$1.setProperties(values$6(this));
	      return source$$1;
	    }
	    /**
	     * @return {Promise<Cluster>}
	     */

	  }, {
	    key: "promise",
	    value: function promise() {
	      var _this = this,
	          _context;

	      return interval(100).pipe(skipWhile(function () {
	        return !_this.source;
	      }), first(), map$4(bind$2(_context = this.build).call(_context, this))).toPromise(promise$5);
	    }
	  }]);

	  return Builder;
	}();

	function ownKeys$a(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$a(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$a(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$4 = {
	  name: 'vl-source-cluster',
	  mixins: [vectorSource, sourceContainer],
	  props: {
	    distance: {
	      type: Number,
	      default: 20
	    },

	    /**
	     * Geometry function factory
	     * @type {function(): (function(f: ol.Feature): ol.geom.SimpleGeometry|undefined)} geomFuncFactory
	     */
	    geomFuncFactory: {
	      type: Function,
	      default: defaultGeomFuncFactory
	    }
	  },
	  computed: {
	    geomFunc: function geomFunc() {
	      return this.geomFuncFactory();
	    }
	  },
	  methods: {
	    /**
	     * @return {Promise<ol.source.Cluster>}
	     * @protected
	     */
	    createSource: function createSource() {
	      // partial setup of ol.source.Cluster with the help of SourceBuilder class

	      /**
	       * @type {SourceBuilder}
	       * @private
	       */
	      this._sourceBuilder.setAttributions(this.attributions).setDistance(this.distance).setGeometryFunction(this.geomFunc).setLogo(this.logo).setProjection(this.projection).setWrapX(this.wrapX);

	      return this._sourceBuilder.promise();
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors(vectorSource.methods.getServices.call(this), sourceContainer.methods.getServices.call(this));
	    },

	    /**
	     * @return {{
	     *     setSource: function(ol.source.Source): void,
	     *     getSource: function(): ol.source.Source
	     *   }|undefined}
	     * @protected
	     */
	    getSourceTarget: function getSourceTarget() {
	      return this._sourceBuilder;
	    },
	    subscribeAll: function subscribeAll() {
	      vectorSource.methods.subscribeAll.call(this);
	      subscribeToSourceChanges.call(this);
	    }
	  },
	  watch: _objectSpread$9({
	    distance: function distance(value) {
	      if (this.$source && value !== this.$source.getDistance()) {
	        this.$source.setDistance(value);
	      }
	    }
	  }, makeWatchers(['geomFunc'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  })),
	  created: function created() {
	    /**
	     * @type {SourceBuilder}
	     * @private
	     */
	    this._sourceBuilder = new Builder();

	    defineProperties$1(this, {
	      $innerSource: {
	        enumerable: true,
	        get: this.getSource
	      }
	    });
	  }
	};
	/**
	 * @returns {function(f: ol.Feature): ol.geom.SimpleGeometry|undefined}
	 */

	function defaultGeomFuncFactory() {
	  return function (feature) {
	    var geometry = feature.getGeometry();
	    if (!geometry) return;
	    var coordinate = findPointOnSurface(geometry);

	    if (coordinate) {
	      return createPointGeom(coordinate);
	    }
	  };
	}

	function subscribeToSourceChanges() {
	  var _this = this;

	  hasSource(this);
	  var adds = fromOlEvent(this.$source, 'addfeature');
	  this.subscribeTo(adds, function (_ref) {
	    var feature = _ref.feature;

	    _this.addFeature(feature);
	  });
	  var removes = fromOlEvent(this.$source, 'removefeature');
	  this.subscribeTo(removes, function (_ref2) {
	    var feature = _ref2.feature;

	    _this.removeFeature(feature);
	  });
	}

	var __vue_script__$4 = script$4;
	/* template */

	/* style */

	var __vue_inject_styles__$4 = undefined;
	/* scoped */

	var __vue_scope_id__$4 = undefined;
	/* module identifier */

	var __vue_module_identifier__$4 = undefined;
	/* functional template */

	var __vue_is_functional_template__$4 = undefined;
	/* component normalizer */

	function __vue_normalize__$4(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$3 = __vue_normalize__$4({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

	function plugin$4(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$4.installed) {
	    return;
	  }

	  plugin$4.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$3, options);

	  Vue$$1.component(Source$3.name, Source$3);
	}

	var ClusterSource = /*#__PURE__*/Object.freeze({
		default: plugin$4,
		Source: Source$3,
		install: plugin$4
	});

	var slice$6 = [].slice;
	var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

	var wrap$1 = function (scheduler) {
	  return function (handler, timeout /* , ...arguments */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice$6.call(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
	    } : handler, timeout);
	  };
	};

	// ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	_export({ global: true, bind: true, forced: MSIE }, {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap$1(global_1.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap$1(global_1.setInterval)
	});

	var setTimeout$1 = path.setTimeout;

	var setTimeout$2 = setTimeout$1;

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function mapTo(value) {
	    return function (source$$1) { return source$$1.lift(new MapToOperator(value)); };
	}
	var MapToOperator = /*@__PURE__*/ (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber, source$$1) {
	        return source$$1.subscribe(new MapToSubscriber(subscriber, this.value));
	    };
	    return MapToOperator;
	}());
	var MapToSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        var _this = _super.call(this, destination) || this;
	        _this.value = value;
	        return _this;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber));

	function ownKeys$b(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; forEach$2(_context3 = ownKeys$b(Object(source$$1), true)).call(_context3, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context4; forEach$2(_context4 = ownKeys$b(Object(source$$1))).call(_context4, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }

	var transformType = function transformType(type) {
	  return upperFirst(camelCase(type));
	};
	/**
	 * @alias module:draw-interaction/interaction
	 * @title vl-interaction-draw
	 * @vueProto
	 */


	var script$5 = {
	  name: 'vl-interaction-draw',
	  mixins: [interaction$1, stylesContainer],
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  },
	  props: {
	    /**
	     * Target source or collection identifier from IdentityMap.
	     * @type {String}
	     */
	    source: {
	      type: String,
	      required: true
	    },

	    /**
	     * The maximum distance in pixels between "down" and "up" for a "up" event to be considered a "click" event and
	     * actually add a point/vertex to the geometry being drawn. Default is 6 pixels. That value was chosen for the
	     * draw interaction to behave correctly on mouse as well as on touch devices.
	     * @type {number}
	     */
	    clickTolerance: {
	      type: Number,
	      default: 6
	    },

	    /**
	     * Pixel distance for snapping to the drawing finish.
	     * @type {number}
	     */
	    snapTolerance: {
	      type: Number,
	      default: 12
	    },

	    /**
	     * Drawing type ('Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon' or 'Circle').
	     * @type {string}
	     */
	    type: {
	      type: String,
	      required: true,
	      validator: function validator(value) {
	        var _context;

	        return includes$4(_context = values$2(GEOMETRY_TYPE)).call(_context, transformType(value));
	      }
	    },

	    /**
	     * Stop click, singleclick, and doubleclick events from firing during drawing.
	     * @type {boolean}
	     */
	    stopClick: {
	      type: Boolean,
	      default: false
	    },

	    /**
	     * The number of points that can be drawn before a polygon ring or line string is finished.
	     * @type {number|undefined}
	     */
	    maxPoints: Number,

	    /**
	     * The number of points that must be drawn before a polygon ring or line string can be finished.
	     * Default is `3` for polygon rings and `2` for line strings.
	     * @type {number|undefined}
	     */
	    minPoints: Number,

	    /**
	     * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether the drawing can be finished.
	     * @type {function|undefined}
	     */
	    finishCondition: Function,

	    /**
	     * Function that is called when a geometry's coordinates are updated.
	     * @type {function|undefined}
	     */
	    geometryFunction: Function,

	    /**
	     * Name of the geometry attribute for newly created features.
	     * @type {string}
	     */
	    geometryName: {
	      type: String,
	      default: 'geometry'
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event should be handled.
	     * By default `ol.events.condition.noModifierKeys`, i.e. a click, adds a vertex or deactivates freehand drawing.
	     * @type {function|undefined}
	     */
	    condition: {
	      type: Function,
	      default: condition.noModifierKeys
	    },

	    /**
	     * Operate in freehand mode for lines, polygons, and circles. This makes the interaction always operate in
	     * freehand mode and takes precedence over any `freehandCondition` option.
	     * @type {boolean}
	     */
	    freehand: {
	      type: Boolean,
	      default: false
	    },

	    /**
	     * Condition that activates freehand drawing for lines and polygons. This function takes an `ol.MapBrowserEvent` and
	     * returns a boolean to indicate whether that event should be handled. The default is `ol.events.condition.shiftKeyOnly`,
	     * meaning that the Shift key activates freehand drawing.
	     * @type {function|undefined}
	     */
	    freehandCondition: {
	      type: Function,
	      default: condition.shiftKeyOnly
	    },

	    /**
	     * Wrap the world horizontally on the sketch overlay.
	     * @type {boolean}
	     */
	    wrapX: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    /**
	     * @return {Promise<Draw>}
	     * @protected
	     */
	    createInteraction: function createInteraction() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var source$$1, features;
	        return regenerator.wrap(function _callee$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return _this.getInstance(_this.source);

	              case 2:
	                source$$1 = _context2.sent;
	                assert(!!source$$1, "Source \"".concat(_this.source, "\" not found in identity map."));

	                if (!(source$$1 instanceof source.Vector)) {
	                  if (isFunction(source$$1.getFeaturesCollection)) {
	                    features = source$$1.getFeaturesCollection();
	                  } else if (isFunction(source$$1.getFeatures)) {
	                    features = source$$1.getFeatures();
	                  }

	                  instanceOf(features, ol.Collection, "Source \"".concat(_this.source, "\" doesn't provide features collection."));
	                  source$$1 = null;
	                }

	                return _context2.abrupt("return", new interaction.Draw({
	                  source: source$$1,
	                  features: features,
	                  clickTolerance: _this.clickTolerance,
	                  snapTolerance: _this.snapTolerance,
	                  type: transformType(_this.type),
	                  stopClick: _this.stopClick,
	                  maxPoints: _this.maxPoints,
	                  minPoints: _this.minPoints,
	                  finishCondition: _this.finishCondition,
	                  style: _this.createStyleFunc(),
	                  geometryFunction: _this.geometryFunction,
	                  geometryName: _this.geometryName,
	                  condition: _this.condition,
	                  freehand: _this.freehand,
	                  freehandCondition: _this.freehandCondition,
	                  wrapX: _this.wrapX
	                }));

	              case 6:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {function(feature: Feature): Style}
	     * @protected
	     */
	    getDefaultStyles: function getDefaultStyles() {
	      var defaultStyles = mapValues(defaultEditStyle(), function (styles) {
	        return map$2(styles).call(styles, createStyle);
	      });
	      return function __selectDefaultStyleFunc(feature) {
	        if (feature.getGeometry()) {
	          return defaultStyles[feature.getGeometry().getType()];
	        }
	      };
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors(interaction$1.methods.getServices.call(this), stylesContainer.methods.getServices.call(this));
	    },

	    /**
	     * @return {Interaction|undefined}
	     * @protected
	     */
	    getStyleTarget: function getStyleTarget() {
	      return this.$interaction;
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      interaction$1.methods.mount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      interaction$1.methods.unmount.call(this);
	    },

	    /**
	     * @param {Array<{style: Style, condition: (function|boolean|undefined)}>|function(feature: Feature): Style|Vue|undefined} styles
	     * @return {void}
	     * @protected
	     */
	    setStyle: function setStyle(styles) {
	      if (styles !== this._styles) {
	        this._styles = styles;
	        this.scheduleRecreate();
	      }
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      interaction$1.methods.subscribeAll.call(this);
	      subscribeToInteractionChanges.call(this);
	    }
	  },
	  watch: _objectSpread$a({}, makeWatchers(['source', 'clickTolerance', 'snapTolerance', 'type', 'stopClick', 'maxPoints', 'minPoints', 'finishCondition', 'geometryFunction', 'geometryName', 'condition', 'freehand', 'freehandCondition', 'wrapX'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};
	/**
	 * @return {void}
	 * @private
	 */

	function subscribeToInteractionChanges() {
	  var _this2 = this;

	  hasInteraction(this);
	  var drawEvents = merge(fromOlEvent(this.$interaction, 'drawstart').pipe(map$4(function (evt) {
	    initializeFeature(evt.feature);
	    return evt;
	  })), fromOlEvent(this.$interaction, 'drawend').pipe( // FIXME blood patch, wait for vl-vector-source featuresDataProj watcher to trigger
	  mergeMap(function (evt) {
	    return from$1(promise$5.resolve(_this2.getInstance(_this2.source))).pipe(mergeMap(function (source$$1) {
	      return from$1(new promise$5(function (resolve) {
	        setTimeout$2(resolve, 1000 / 60);
	      }));
	    }), mapTo(evt));
	  })));
	  this.subscribeTo(drawEvents, function (evt) {
	    ++_this2.rev;

	    _this2.$nextTick(function () {
	      _this2.$emit(evt.type, evt);
	    });
	  });
	}

	var __vue_script__$5 = script$5;
	/* template */

	/* style */

	var __vue_inject_styles__$5 = undefined;
	/* scoped */

	var __vue_scope_id__$5 = undefined;
	/* module identifier */

	var __vue_module_identifier__$5 = undefined;
	/* functional template */

	var __vue_is_functional_template__$5 = undefined;
	/* component normalizer */

	function __vue_normalize__$5(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "interaction.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Interaction$1 = __vue_normalize__$5({}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

	function plugin$5(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$5.installed) {
	    return;
	  }

	  plugin$5.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Interaction$1, options);

	  Vue$$1.component(Interaction$1.name, Interaction$1);
	}

	var DrawInteraction = /*#__PURE__*/Object.freeze({
		default: plugin$5,
		Interaction: Interaction$1,
		install: plugin$5
	});

	function ownKeys$c(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$c(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$c(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	/**
	 * A vector object for geographic features with a geometry and other attribute properties,
	 * similar to the features in vector file formats like **GeoJSON**.
	 */

	var script$6 = {
	  name: 'vl-feature',
	  mixins: [cmp, useMapCmp, geometryContainer, stylesContainer, projTransforms],
	  props: {
	    /**
	     * All feature properties.
	     * @type {Object}
	     * @default {}
	     */
	    properties: {
	      type: Object,
	      default: function _default() {
	        return create$2(null);
	      }
	    }
	  },
	  computed: {
	    /**
	     * **GeoJSON** encoded geometry.
	     * @type {Object|undefined}
	     */
	    geometry: function geometry() {
	      if (this.rev && this.resolvedDataProjection && this.$geometry) {
	        return this.writeGeometryInDataProj(this.$geometry);
	      }
	    },

	    /**
	     * @return {number[]|undefined}
	     */
	    point: function point() {
	      if (this.pointViewProj && this.resolvedDataProjection) {
	        return this.pointToDataProj(this.pointViewProj);
	      }
	    },
	    geometryViewProj: function geometryViewProj() {
	      if (this.rev && this.resolvedDataProjection && this.$geometry) {
	        return this.writeGeometryInViewProj(this.$geometry);
	      }
	    },
	    pointViewProj: function pointViewProj() {
	      if (this.rev && this.$geometry) {
	        return findPointOnSurface(this.$geometry);
	      }
	    }
	  },
	  methods: {
	    /**
	     * Create feature without inner style applying, feature level style
	     * will be applied in the layer level style function.
	     * @return {module:ol/Feature~Feature}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var feature = new Feature(this.properties);
	      initializeFeature(feature, this.id);
	      feature.setGeometry(this.$geometry);
	      return feature;
	    },

	    /**
	     * @return {{
	     *     getGeometry: function(): (module:ol/geom/Geometry~Geometry|undefined),
	     *     setGeometry: function((module:ol/geom/Geometry~Geometry|undefined)): void
	     *   }|Feature|undefined}
	     * @protected
	     */
	    getGeometryTarget: function getGeometryTarget() {
	      return this.$feature;
	    },

	    /**
	     * @return {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp.methods.getServices.call(this), geometryContainer.methods.getServices.call(this), stylesContainer.methods.getServices.call(this), {
	        get feature() {
	          return vm.$feature;
	        }

	      });
	    },

	    /**
	     * @return {module:ol/Feature~Feature|undefined}
	     * @protected
	     */
	    getStyleTarget: function getStyleTarget() {
	      return this.$feature;
	    },

	    /**
	     * Checks if feature lies at `pixel`.
	     * @param {number[]} pixel
	     * @return {boolean}
	     */
	    isAtPixel: function isAtPixel(pixel) {
	      var _this = this;

	      hasMap(this);
	      return this.$map.forEachFeatureAtPixel(pixel, function (f) {
	        return f === _this.$feature;
	      }, {
	        layerFilter: function layerFilter(l) {
	          return l === _this.$layer;
	        }
	      });
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$featuresContainer && this.$featuresContainer.addFeature(this);
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unsubscribeAll();
	      this.$featuresContainer && this.$featuresContainer.removeFeature(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      subscribeToEvents.call(this);
	    }
	  },
	  watch: {
	    /**
	     * @param {string|number} value
	     */
	    id: function id(value) {
	      if (this.$feature && value !== getFeatureId(this.$feature)) {
	        setFeatureId(this.$feature, value);
	      }
	    },

	    /**
	     * @param {Object} value
	     */
	    properties: function properties(value) {
	      value = plainProps(value);

	      if (this.$feature && !isEqual(value, plainProps(this.$feature.getProperties()))) {
	        this.$feature.setProperties(value);
	      }
	    }
	  },
	  created: function created() {
	    defineServices$9.call(this);
	  }
	};

	function defineServices$9() {
	  var _this2 = this;

	  defineProperties$1(this, {
	    $feature: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$olObject;
	      }
	    },
	    $geometry: {
	      enumerable: true,
	      get: this.getGeometry
	    },
	    $layer: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && _this2.$services.layer;
	      }
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && map$2(_this2.$services);
	      }
	    },
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && _this2.$services.view;
	      }
	    },
	    $featuresContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this2.$services && _this2.$services.featuresContainer;
	      }
	    }
	  });
	}
	/**
	 * @return {void}
	 * @private
	 */


	function subscribeToEvents() {
	  var _this3 = this;

	  hasFeature(this);

	  var getPropValue = function getPropValue(prop) {
	    return _this3.$feature.get(prop);
	  }; // all plain properties + geometry


	  var propChanges = fromOlEvent(this.$feature, 'propertychange', function (_ref) {
	    var key = _ref.key;
	    return {
	      prop: key,
	      value: getPropValue(key)
	    };
	  }); // id, style and other generic changes

	  var changes = fromOlEvent(this.$feature, 'change').pipe(map$4(function () {
	    return Observable.create(function (obs) {
	      if (_this3.$feature.getId() !== _this3.id) {
	        obs.next({
	          prop: 'id',
	          value: _this3.$feature.getId()
	        });
	      } // todo style?

	    });
	  }), mergeAll()); // all changes

	  var allChanges = merge(propChanges, changes).pipe(distinctUntilChanged(isEqual));
	  this.subscribeTo(allChanges, function (_ref2) {
	    var prop = _ref2.prop,
	        value = _ref2.value;
	    ++_this3.rev;

	    _this3.$nextTick(function () {
	      if (prop === 'id') {
	        _this3.$emit("update:".concat(prop), value);
	      } else if (prop !== _this3.$feature.getGeometryName()) {
	        _this3.$emit('update:properties', _objectSpread$b(_objectSpread$b({}, _this3.properties), {}, _defineProperty({}, prop, value)));
	      }
	    });
	  });
	}

	var __vue_script__$6 = script$6;
	/* template */

	var __vue_render__ = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('i', {
	    class: _vm.cmpName,
	    staticStyle: {
	      "display": "none !important"
	    },
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("default", null, {
	    "id": _vm.id,
	    "properties": _vm.properties,
	    "geometry": _vm.geometry,
	    "point": _vm.point
	  })], 2);
	};

	var __vue_staticRenderFns__ = [];
	/* style */

	var __vue_inject_styles__$6 = undefined;
	/* scoped */

	var __vue_scope_id__$6 = undefined;
	/* module identifier */

	var __vue_module_identifier__$6 = undefined;
	/* functional template */

	var __vue_is_functional_template__$6 = false;
	/* component normalizer */

	function __vue_normalize__$6(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "feature.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Feature$1 = __vue_normalize__$6({
	  render: __vue_render__,
	  staticRenderFns: __vue_staticRenderFns__
	}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);

	function plugin$6(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$6.installed) {
	    return;
	  }

	  plugin$6.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Feature$1, options);

	  Vue$$1.component(Feature$1.name, Feature$1);
	}

	var Feature$2 = /*#__PURE__*/Object.freeze({
		default: plugin$6,
		Feature: Feature$1,
		install: plugin$6
	});

	var props$2 = {
	  color: [String, Array]
	};
	var methods$2 = {
	  /**
	   * @return {Fill}
	   * @protected
	   */
	  createStyle: function createStyle() {
	    return new Fill({
	      color: this.color
	    });
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  mount: function mount() {
	    this.$stylesContainer && this.$stylesContainer.setFill(this);
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  unmount: function unmount() {
	    this.$stylesContainer && this.$stylesContainer.setFill(undefined);
	  }
	};
	var watch$2 = {
	  color: function color(value) {
	    if (this.$style && !isEqual(value, this.$style.getColor())) {
	      this.$style.setColor(value);
	      this.scheduleRefresh();
	    }
	  }
	};
	var script$7 = {
	  name: 'vl-style-fill',
	  mixins: [style$1],
	  props: props$2,
	  methods: methods$2,
	  watch: watch$2
	};

	var __vue_script__$7 = script$7;
	/* template */

	/* style */

	var __vue_inject_styles__$7 = undefined;
	/* scoped */

	var __vue_scope_id__$7 = undefined;
	/* module identifier */

	var __vue_module_identifier__$7 = undefined;
	/* functional template */

	var __vue_is_functional_template__$7 = undefined;
	/* component normalizer */

	function __vue_normalize__$7(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$2 = __vue_normalize__$7({}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, undefined, undefined);

	function plugin$7(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$7.installed) {
	    return;
	  }

	  plugin$7.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$2, options);

	  Vue$$1.component(Style$2.name, Style$2);
	}

	var FillStyle = /*#__PURE__*/Object.freeze({
		default: plugin$7,
		Style: Style$2,
		install: plugin$7
	});

	var script$8 = {
	  name: 'vl-geoloc',
	  mixins: [cmp, useMapCmp, projTransforms],
	  props: {
	    tracking: {
	      type: Boolean,
	      default: true
	    },
	    trackingOptions: Object,

	    /**
	     * @type {string}
	     */
	    projection: String
	  },
	  computed: {
	    accuracy: function accuracy() {
	      if (this.rev && this.$geolocation) {
	        return this.$geolocation.getAccuracy();
	      }
	    },
	    altitude: function altitude() {
	      if (this.rev && this.$geolocation) {
	        return this.$geolocation.getAltitude();
	      }
	    },
	    altitudeAccuracy: function altitudeAccuracy() {
	      if (this.rev && this.$geolocation) {
	        return this.$geolocation.getAltitudeAccuracy();
	      }
	    },
	    heading: function heading() {
	      if (this.rev && this.$geolocation) {
	        return this.$geolocation.getHeading();
	      }
	    },
	    speed: function speed() {
	      if (this.rev && this.$geolocation) {
	        return this.$geolocation.getSpeed();
	      }
	    },
	    position: function position() {
	      if (this.rev && this.$geolocation) {
	        return this.$geolocation.getPosition();
	      }
	    },
	    positionViewProj: function positionViewProj() {
	      if (this.position && this.viewProjection) {
	        return this.pointToViewProj(this.position);
	      }
	    }
	  },
	  methods: {
	    /**
	     * @return {ol/Geolocation~Geolocation}
	     * @private
	     */
	    createOlObject: function createOlObject() {
	      var geoloc = new Geolocation({
	        tracking: this.tracking,
	        trackingOptions: this.trackingOptions,
	        projection: this.resolvedDataProjection
	      });
	      geoloc.set('id', this.id);
	      return geoloc;
	    },

	    /**
	     * @return {void}
	     * @private
	     */
	    mount: function mount() {
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @private
	     */
	    unmount: function unmount() {
	      hasGeolocation(this);
	      this.unsubscribeAll();
	      this.$geolocation.setTracking(false);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      subscribeToGeolocation.call(this);
	    }
	  },
	  watch: {
	    id: function id(value) {
	      if (!this.$geolocation || value === this.geolocation.get('id')) {
	        return;
	      }

	      this.$geolocation.set('id', value);
	    },

	    /**
	     * @param {boolean} value
	     */
	    tracking: function tracking(value) {
	      if (!this.$geolocation && value === this.$geolocation.getTracking()) {
	        return;
	      }

	      this.$geolocation.setTracking(value);
	    },
	    tracingOptions: function tracingOptions(value, prevValue) {
	      if (isEqual(value, prevValue) || !this.$geolocation) return;
	      this.$geolocation.setTrackingOptions(value);
	    },
	    resolvedDataProjection: function resolvedDataProjection(value) {
	      if (!this.$geolocation) return;
	      this.$geolocation.setProjection(value);
	    }
	  },
	  stubVNode: {
	    empty: function empty() {
	      return this.vmId;
	    }
	  },
	  created: function created() {
	    defineServices$a.call(this);
	  }
	};

	function defineServices$a() {
	  var _this = this;

	  defineProperties$1(this, {
	    /**
	     * @type {ol/Geolocation~Geolocation|undefined}
	     */
	    $geolocation: {
	      enumerable: true,
	      get: function get() {
	        return _this.$olObject;
	      }
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this.$services && map$2(_this.$services);
	      }
	    },

	    /**
	     * Reference to `ol.View` instance.
	     * @type {module:ol/View~View|undefined}
	     */
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this.$services && _this.$services.view;
	      }
	    }
	  });
	}
	/**
	 * @return {void}
	 * @private
	 */


	function subscribeToGeolocation() {
	  var _this2 = this;

	  hasGeolocation(this);
	  var ft = 1000 / 60;
	  var changes = merge(fromOlChangeEvent(this.$geolocation, ['accuracy', 'altitude', 'altitudeaccuracy', 'heading', 'speed'], true, ft), fromOlChangeEvent(this.$geolocation, 'position', true, ft));
	  this.subscribeTo(changes, function (_ref) {
	    var prop = _ref.prop,
	        value = _ref.value;
	    ++_this2.rev;

	    _this2.$nextTick(function () {
	      _this2.$emit("update:".concat(prop), value);
	    });
	  });
	}

	var __vue_script__$8 = script$8;
	/* template */

	var __vue_render__$1 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('i', {
	    class: _vm.cmpName,
	    staticStyle: {
	      "display": "none !important"
	    },
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("default", null, {
	    "accuracy": _vm.accuracy,
	    "altitude": _vm.altitude,
	    "altitudeAccuracy": _vm.altitudeAccuracy,
	    "heading": _vm.heading,
	    "position": _vm.position,
	    "speed": _vm.speed
	  })], 2);
	};

	var __vue_staticRenderFns__$1 = [];
	/* style */

	var __vue_inject_styles__$8 = undefined;
	/* scoped */

	var __vue_scope_id__$8 = undefined;
	/* module identifier */

	var __vue_module_identifier__$8 = undefined;
	/* functional template */

	var __vue_is_functional_template__$8 = false;
	/* component normalizer */

	function __vue_normalize__$8(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geoloc.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geoloc = __vue_normalize__$8({
	  render: __vue_render__$1,
	  staticRenderFns: __vue_staticRenderFns__$1
	}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, undefined, undefined);

	function plugin$8(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$8.installed) {
	    return;
	  }

	  plugin$8.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geoloc, options);

	  Vue$$1.component(Geoloc.name, Geoloc);
	}

	var Geoloc$1 = /*#__PURE__*/Object.freeze({
		default: plugin$8,
		Geoloc: Geoloc,
		install: plugin$8
	});

	var $some = arrayIteration.some;



	var STRICT_METHOD$5 = arrayMethodIsStrict('some');
	var USES_TO_LENGTH$a = arrayMethodUsesToLength('some');

	// `Array.prototype.some` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.some
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$5 || !USES_TO_LENGTH$a }, {
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var some = entryVirtual('Array').some;

	var ArrayPrototype$e = Array.prototype;

	var some_1 = function (it) {
	  var own = it.some;
	  return it === ArrayPrototype$e || (it instanceof Array && own === ArrayPrototype$e.some) ? some : own;
	};

	var some$1 = some_1;

	var some$2 = some$1;

	function ownKeys$d(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; forEach$2(_context3 = ownKeys$d(Object(source$$1), true)).call(_context3, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context4; forEach$2(_context4 = ownKeys$d(Object(source$$1))).call(_context4, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$9 = {
	  name: 'vl-graticule',
	  mixins: [cmp, useMapCmp, projTransforms],
	  props: {
	    maxLines: {
	      type: Number,
	      default: 100
	    },
	    targetSize: {
	      type: Number,
	      default: 100
	    },
	    showLabels: {
	      type: Boolean,
	      default: false
	    },
	    lonLabelFormatter: Function,
	    latLabelFormatter: Function,
	    lonLabelPosition: {
	      type: Number,
	      default: 0
	    },
	    latLabelPosition: {
	      type: Number,
	      default: 1
	    },
	    intervals: {
	      type: Array,
	      default: function _default() {
	        return [90, 45, 30, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.01, 0.005, 0.002, 0.001];
	      }
	    }
	  },
	  computed: {
	    meridians: function meridians() {
	      var _this = this;

	      if (this.$graticule && this.rev) {
	        return map$3(this.getMeridians(), function (meridian) {
	          return _this.lineToDataProj(meridian.getCoordinates());
	        });
	      }

	      return [];
	    },
	    parallels: function parallels() {
	      var _this2 = this;

	      if (this.$graticule && this.rev) {
	        return map$3(this.getParallels(), function (parallel) {
	          return _this2.lineToDataProj(parallel.getCoordinates());
	        });
	      }

	      return [];
	    }
	  },
	  methods: {
	    createOlObject: function createOlObject() {
	      var graticule = new Graticule({
	        maxLines: this.maxLines,
	        targetSize: this.targetSize,
	        showLabels: this.showLabels,
	        strokeStyle: this._strokeStyle,
	        lonLabelFormatter: this.lonLabelFormatter,
	        latLabelFormatter: this.latLabelFormatter,
	        lonLabelPosition: this.lonLabelPosition,
	        latLabelPosition: this.latLabelPosition,
	        lonLabelStyle: this._lonLabelStyle,
	        latLabelStyle: this._latLabelStyle,
	        intervals: this.intervals
	      });
	      graticule.id = this.id;
	      return graticule;
	    },

	    /**
	     * @return {Promise} Resolves when initialization completes
	     * @protected
	     */
	    init: function init() {
	      return cmp.methods.init.call(this);
	    },

	    /**
	     * @return {void|Promise<void>}
	     * @protected
	     */
	    deinit: function deinit() {
	      return cmp.methods.deinit.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$map && this.$graticule.setMap(this.$map);
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unsubscribeAll();
	      this.$graticule.setMap(undefined);
	    },
	    getMeridians: function getMeridians() {
	      hasGraticule(this);
	      return this.$graticule.getMeridians();
	    },
	    getParallels: function getParallels() {
	      hasGraticule(this);
	      return this.$graticule.getParallels();
	    },
	    setStroke: function setStroke(stroke) {
	      stroke = stroke instanceof Vue ? stroke.$style : stroke;

	      if (stroke !== this._strokeStyle) {
	        this._strokeStyle = stroke;
	        this.scheduleRefresh();
	      }
	    },
	    setText: function setText(text) {
	      var _context, _context2;

	      text = text instanceof Vue ? text.$style : text;
	      var vm;

	      if (text) {
	        vm = firstEl(text[this.$options.VM_PROP]);
	      }

	      var vmMatcher = function vmMatcher(vnode) {
	        return vnode.componentInstance && vnode.componentInstance === vm;
	      };

	      if (text == null && this.$slots.lon == null || isArray$3(this.$slots.lon) && some$2(_context = this.$slots.lon).call(_context, vmMatcher)) {
	        if (text !== this._lonLabelStyle) {
	          this._lonLabelStyle = text;
	          this.scheduleRefresh();
	        }
	      } else if (text == null && this.$slots.lat == null || isArray$3(this.$slots.lat) && some$2(_context2 = this.$slots.lat).call(_context2, vmMatcher)) {
	        if (text !== this._latLabelStyle) {
	          this._latLabelStyle = text;
	          this.scheduleRefresh();
	        }
	      }
	    },
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp.methods.getServices.call(this), {
	        get stylesContainer() {
	          return vm;
	        }

	      });
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      return this.recreate();
	    },
	    subscribeAll: function subscribeAll() {
	      subscribeToEvents$1.call(this);
	    }
	  },
	  watch: _objectSpread$c({
	    id: function id(value) {
	      if (!this.$graticule || value === this.$graticule.id) {
	        return;
	      }

	      this.$graticule.id = value;
	    }
	  }, makeWatchers(['maxLines', 'targetSize', 'showLabels', 'lonLabelFormatter', 'latLabelFormatter', 'lonLabelPosition', 'latLabelPosition', 'intervals'], function () {
	    return function () {
	      this.scheduleRefresh();
	    };
	  })),
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  },
	  created: function created() {
	    defineServices$b.call(this);
	  }
	};

	function defineServices$b() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    $graticule: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && map$2(_this3.$services);
	      }
	    },
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.view;
	      }
	    }
	  });
	}

	function subscribeToEvents$1() {
	  var _this4 = this;

	  hasMap(this);
	  var ft = 1000 / 60;
	  var postcompose = fromOlEvent(this.$map, 'postcompose').pipe(throttleTime(ft));
	  this.subscribeTo(postcompose, function () {
	    ++_this4.rev;
	  });
	}

	var __vue_script__$9 = script$9;
	/* template */

	var __vue_render__$2 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('i', {
	    class: _vm.cmpName,
	    staticStyle: {
	      "display": "none !important"
	    },
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("lon"), _vm._v(" "), _vm._t("lat"), _vm._v(" "), _vm._t("stroke")], 2);
	};

	var __vue_staticRenderFns__$2 = [];
	/* style */

	var __vue_inject_styles__$9 = undefined;
	/* scoped */

	var __vue_scope_id__$9 = undefined;
	/* module identifier */

	var __vue_module_identifier__$9 = undefined;
	/* functional template */

	var __vue_is_functional_template__$9 = false;
	/* component normalizer */

	function __vue_normalize__$9(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "graticule.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Graticule$1 = __vue_normalize__$9({
	  render: __vue_render__$2,
	  staticRenderFns: __vue_staticRenderFns__$2
	}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, undefined, undefined);

	function plugin$9(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$9.installed) {
	    return;
	  }

	  plugin$9.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Graticule$1, options);

	  Vue$$1.component(Graticule$1.name, Graticule$1);
	}

	var Graticule$2 = /*#__PURE__*/Object.freeze({
		default: plugin$9,
		Graticule: Graticule$1,
		install: plugin$9
	});

	var script$a = {
	  name: 'vl-layer-group',
	  mixins: [layer, layersContainer],
	  methods: {
	    createLayer: function createLayer() {
	      return new GroupLayer({
	        id: this.id,
	        minResolution: this.minResolution,
	        maxResolution: this.maxResolution,
	        opacity: this.opacity,
	        visible: this.visible,
	        extent: this.extent,
	        zIndex: this.zIndex,
	        layers: this._layersCollection
	      });
	    },
	    getServices: function getServices() {
	      return multiMergeDescriptors(layer.methods.getServices.call(this), layersContainer.methods.getServices.call(this));
	    }
	  }
	};

	var __vue_script__$a = script$a;
	/* template */

	/* style */

	var __vue_inject_styles__$a = undefined;
	/* scoped */

	var __vue_scope_id__$a = undefined;
	/* module identifier */

	var __vue_module_identifier__$a = undefined;
	/* functional template */

	var __vue_is_functional_template__$a = undefined;
	/* component normalizer */

	function __vue_normalize__$a(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "layer.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Layer = __vue_normalize__$a({}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, undefined, undefined);

	function plugin$a(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$a.installed) {
	    return;
	  }

	  plugin$a.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Layer, options);

	  Vue$$1.component(Layer.name, Layer);
	}

	var GroupLayer$1 = /*#__PURE__*/Object.freeze({
		default: plugin$a,
		Layer: Layer,
		install: plugin$a
	});

	function ownKeys$e(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$e(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$e(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$b = {
	  name: 'vl-layer-heatmap',
	  mixins: [vectorLayer],
	  props: {
	    gradient: {
	      type: Array,
	      default: function _default() {
	        return ['#0000ff', '#00ffff', '#00ff00', '#ffff00', '#f00'];
	      }
	    },
	    radius: {
	      type: Number,
	      default: 8
	    },
	    blur: {
	      type: Number,
	      default: 15
	    },
	    shadow: {
	      type: Number,
	      default: 250
	    },
	    weight: {
	      type: String,
	      default: 'weight'
	    }
	  },
	  methods: {
	    createLayer: function createLayer() {
	      return new HeatmapLayer({
	        id: this.id,
	        minResolution: this.minResolution,
	        maxResolution: this.maxResolution,
	        opacity: this.opacity,
	        visible: this.visible,
	        extent: this.extent,
	        zIndex: this.zIndex,
	        renderMode: this.renderMode,
	        gradient: this.gradient,
	        radius: this.radius,
	        blur: this.blur,
	        shadow: this.shadow,
	        weight: this.weight
	      });
	    }
	  },
	  watch: _objectSpread$d({
	    blur: function blur(value) {
	      if (!this.$layer || this.$layer.getBlur() === value) return;
	      this.$layer.setBlur(value);
	    },
	    gradient: function gradient(value) {
	      if (!this.$layer || isEqual(this.$layer.getGradient(), value)) return;
	      this.$layer.setGradient(value);
	    },
	    radius: function radius(value) {
	      if (!this.$layer || this.$layer.getRadius() === value) return;
	      this.$layer.setRadius(value);
	    }
	  }, makeWatchers(['shadow', 'weight'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};

	var __vue_script__$b = script$b;
	/* template */

	/* style */

	var __vue_inject_styles__$b = undefined;
	/* scoped */

	var __vue_scope_id__$b = undefined;
	/* module identifier */

	var __vue_module_identifier__$b = undefined;
	/* functional template */

	var __vue_is_functional_template__$b = undefined;
	/* component normalizer */

	function __vue_normalize__$b(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "layer.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Layer$1 = __vue_normalize__$b({}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, undefined, undefined);

	function plugin$b(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$b.installed) {
	    return;
	  }

	  plugin$b.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Layer$1, options);

	  Vue$$1.component(Layer$1.name, Layer$1);
	}

	var HeatmapLayer$1 = /*#__PURE__*/Object.freeze({
		default: plugin$b,
		Layer: Layer$1,
		install: plugin$b
	});

	function ownKeys$f(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$f(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$f(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$c = {
	  name: 'vl-style-icon',
	  mixins: [imageStyle],
	  props: {
	    src: String,
	    size: {
	      type: Array,
	      validator: arrayLengthValidator(2)
	    },
	    img: Image,
	    imgSize: {
	      type: Array,
	      validator: arrayLengthValidator(2)
	    },
	    anchor: {
	      type: Array,
	      default: function _default() {
	        return [0.5, 0.5];
	      },
	      validator: arrayLengthValidator(2)
	    },
	    anchorOrigin: {
	      type: String,
	      default: 'top-left' // bottom-left, bottom-right, top-left or top-right

	    },
	    anchorXUnits: {
	      type: String,
	      default: 'fraction' // pixels, fraction

	    },
	    anchorYUnits: {
	      type: String,
	      default: 'fraction' // pixels, fraction

	    },
	    color: [Array, String],
	    crossOrigin: String,
	    offset: {
	      type: Array,
	      default: function _default() {
	        return [0, 0];
	      },
	      validator: arrayLengthValidator(2)
	    },
	    offsetOrigin: {
	      type: String,
	      default: 'top-left' // bottom-left, bottom-right, top-left or top-right

	    },
	    opacity: {
	      type: Number,
	      default: 1
	    },
	    scale: {
	      type: Number,
	      default: 1
	    },
	    rotateWithView: {
	      type: Boolean,
	      default: false
	    },
	    rotation: {
	      type: Number,
	      default: 0
	    }
	  },
	  methods: {
	    /**
	     * @return {Icon}
	     * @protected
	     */
	    createStyle: function createStyle() {
	      assert(this.src && !this.img || !this.src && this.img, "vl-style-icon one of 'image' or 'src' prop must be provided.");
	      assert(!this.img || this.img && !isEmpty(this.imgSize), "vl-style-icon 'imgSize' must be set when image is provided.");
	      return new Icon({
	        anchor: this.anchor,
	        anchorOrigin: this.anchorOrigin,
	        anchorXUnits: this.anchorXUnits,
	        anchorYUnits: this.anchorYUnits,
	        color: this.color,
	        crossOrigin: this.crossOrigin,
	        offset: this.offset,
	        offsetOrigin: this.offsetOrigin,
	        opacity: this.opacity,
	        scale: this.scale,
	        rotateWithView: this.rotateWithView,
	        rotation: this.rotation,
	        size: this.size,
	        src: this.src,
	        img: this.img,
	        imgSize: this.imgSize
	      });
	    }
	  },
	  watch: _objectSpread$e({
	    src: function src(value) {
	      if (this.$style && !isEqual(value, this.$style.getSrc())) {
	        this.scheduleRefresh();
	      }
	    },
	    size: function size$$1(value) {
	      if (this.$style && !isEqual(value, this.$style.getSize())) {
	        this.scheduleRefresh();
	      }
	    },
	    anchor: function anchor(value) {
	      if (this.$style && !isEqual(value, this.$style.getAnchor())) {
	        this.scheduleRefresh();
	      }
	    },
	    color: function color(value) {
	      if (this.$style && !isEqual(value, this.$style.getColor())) {
	        this.scheduleRefresh();
	      }
	    },
	    opacity: function opacity(value) {
	      if (this.$style && !isEqual(value, this.$style.getOpacity())) {
	        this.scheduleRefresh();
	      }
	    },
	    scale: function scale(value) {
	      if (this.$style && !isEqual(value, this.$style.getScale())) {
	        this.scheduleRefresh();
	      }
	    },
	    rotateWithView: function rotateWithView(value) {
	      if (this.$style && !isEqual(value, this.$style.getRotateWithView())) {
	        this.scheduleRefresh();
	      }
	    },
	    rotation: function rotation(value) {
	      if (this.$style && !isEqual(value, this.$style.getRotation())) {
	        this.scheduleRefresh();
	      }
	    }
	  }, makeWatchers(['anchorOrigin', 'anchorXUnits', 'anchorYUnits', 'crossOrigin', 'offset', 'offsetOrigin', 'img', 'imgSize'], function () {
	    return function () {
	      this.scheduleRefresh();
	    };
	  }))
	};

	var __vue_script__$c = script$c;
	/* template */

	/* style */

	var __vue_inject_styles__$c = undefined;
	/* scoped */

	var __vue_scope_id__$c = undefined;
	/* module identifier */

	var __vue_module_identifier__$c = undefined;
	/* functional template */

	var __vue_is_functional_template__$c = undefined;
	/* component normalizer */

	function __vue_normalize__$c(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$3 = __vue_normalize__$c({}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, undefined, undefined);

	function plugin$c(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$c.installed) {
	    return;
	  }

	  plugin$c.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$3, options);

	  Vue$$1.component(Style$3.name, Style$3);
	}

	var IconStyle = /*#__PURE__*/Object.freeze({
		default: plugin$c,
		Style: Style$3,
		install: plugin$c
	});

	/**
	 * @vueProps
	 */

	var props$3 =
	/** @lends module:image-layer/layer# */
	{};
	/**
	 * @vueMethods
	 */

	var methods$3 =
	/** @lends module:image-layer/layer# */
	{
	  /**
	   * @return {Image}
	   * @protected
	   */
	  createLayer: function createLayer() {
	    return new ImageLayer({
	      id: this.id,
	      minResolution: this.minResolution,
	      maxResolution: this.maxResolution,
	      opacity: this.opacity,
	      visible: this.visible,
	      extent: this.extent,
	      zIndex: this.zIndex,
	      source: this._source
	    });
	  }
	};
	/**
	 * Layer for server-rendered images that are available for arbitrary extents and resolutions.
	 *
	 * @title vl-layer-image
	 * @alias module:image-layer/layer
	 * @vueProto
	 *
	 * @vueSlot default Default slot for `vl-source-*` (image-like only) components.
	 */

	var script$d = {
	  name: 'vl-layer-image',
	  mixins: [layer],
	  props: props$3,
	  methods: methods$3
	};

	var __vue_script__$d = script$d;
	/* template */

	/* style */

	var __vue_inject_styles__$d = undefined;
	/* scoped */

	var __vue_scope_id__$d = undefined;
	/* module identifier */

	var __vue_module_identifier__$d = undefined;
	/* functional template */

	var __vue_is_functional_template__$d = undefined;
	/* component normalizer */

	function __vue_normalize__$d(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "layer.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Layer$2 = __vue_normalize__$d({}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, undefined, undefined);

	function plugin$d(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$d.installed) {
	    return;
	  }

	  plugin$d.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Layer$2, options);

	  Vue$$1.component(Layer$2.name, Layer$2);
	}

	var ImageLayer$1 = /*#__PURE__*/Object.freeze({
		default: plugin$d,
		Layer: Layer$2,
		install: plugin$d
	});

	/**
	 * @vueProps
	 */

	var props$4 =
	/** @lends module:image-static-source/source# */
	{
	  /**
	   * Image extent in the source projection.
	   * @type {number[]}
	   */
	  extent: {
	    type: Array,
	    required: true,
	    validator: function validator(value) {
	      return value.length === 4;
	    }
	  },

	  /**
	   * Optional function to load an image given a URL.
	   * @type {function|undefined}
	   */
	  loadFunc: Function,

	  /**
	   * Image size in pixels.
	   * @type {number[]}
	   */
	  size: {
	    type: Array,
	    validator: function validator(value) {
	      return value.length === 2;
	    }
	  },

	  /**
	   * Image URL.
	   * @type {string}
	   */
	  url: {
	    type: String,
	    required: true,
	    validator: function validator(value) {
	      return !!value.length;
	    }
	  }
	};
	/**
	 * @vueMethods
	 */

	var methods$4 =
	/** @lends module:image-static-source/source# */
	{
	  /**
	   * @return {ImageStatic}
	   * @protected
	   */
	  createSource: function createSource() {
	    return new ImageStaticSource({
	      attributions: this.attributions,
	      crossOrigin: this.crossOrigin,
	      imageExtent: this.extent,
	      imageLoadFunction: this.loadFunc,
	      logo: this.logo,
	      projection: this.projection,
	      imageSize: this.size,
	      url: this.urlTmpl
	    });
	  }
	};
	var watch$3 = makeWatchers(keys$3(props$4), function () {
	  return function () {
	    this.scheduleRecreate();
	  };
	});
	/**
	 * A layer source for displaying a single, static image.
	 *
	 * @vueProto
	 * @title vl-source-image-static
	 * @alias module:image-static-source/source
	 */

	var script$e = {
	  name: 'vl-source-image-static',
	  mixins: [imageSource, withUrl],
	  props: props$4,
	  methods: methods$4,
	  watch: watch$3
	};

	var __vue_script__$e = script$e;
	/* template */

	/* style */

	var __vue_inject_styles__$e = undefined;
	/* scoped */

	var __vue_scope_id__$e = undefined;
	/* module identifier */

	var __vue_module_identifier__$e = undefined;
	/* functional template */

	var __vue_is_functional_template__$e = undefined;
	/* component normalizer */

	function __vue_normalize__$e(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$4 = __vue_normalize__$e({}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, undefined, undefined);

	function plugin$e(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$e.installed) {
	    return;
	  }

	  plugin$e.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$4, options);

	  Vue$$1.component(Source$4.name, Source$4);
	}

	var ImageStaticSource$1 = /*#__PURE__*/Object.freeze({
		default: plugin$e,
		Source: Source$4,
		install: plugin$e
	});

	var props$5 = {
	  hidpi: {
	    type: Boolean,
	    default: true
	  },
	  serverType: {
	    type: String,
	    validator: function validator(value) {
	      var _context;

	      return !value || includes$4(_context = values$2(WMSServerType)).call(_context, value);
	    }
	  },
	  imageLoadFunction: Function,
	  ratio: {
	    type: Number,
	    default: 1.5
	  },
	  resolutions: Array,
	  url: {
	    type: String,
	    required: true,
	    validator: function validator(value) {
	      return !!value.length;
	    }
	  }
	};
	var methods$5 = {
	  createOlObject: function createOlObject() {
	    return new ImageWMS({
	      attributions: this.attributions,
	      crossOrigin: this.crossOrigin,
	      hidpi: this.hidpi,
	      serverType: this.serverType,
	      imageLoadFunction: this.imageLoadFunction,
	      params: this.allParams,
	      projection: this.projection,
	      ratio: this.ratio,
	      resolutions: this.resolutions,
	      url: this.urlTmpl
	    });
	  }
	};
	var script$f = {
	  name: 'vl-source-image-wms',
	  mixins: [imageSource, withUrl, wmsSource],
	  props: props$5,
	  methods: methods$5
	};

	var __vue_script__$f = script$f;
	/* template */

	/* style */

	var __vue_inject_styles__$f = undefined;
	/* scoped */

	var __vue_scope_id__$f = undefined;
	/* module identifier */

	var __vue_module_identifier__$f = undefined;
	/* functional template */

	var __vue_is_functional_template__$f = undefined;
	/* component normalizer */

	function __vue_normalize__$f(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$5 = __vue_normalize__$f({}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, undefined, undefined);

	function plugin$f(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$f.installed) {
	    return;
	  }

	  plugin$f.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$5, options);

	  Vue$$1.component(Source$5.name, Source$5);
	}

	var ImageWmsSource = /*#__PURE__*/Object.freeze({
		default: plugin$f,
		Source: Source$5,
		install: plugin$f
	});

	var props$6 = {};
	var computed$1 = {
	  type: constant(GEOMETRY_TYPE.LINE_STRING)
	};
	var methods$6 = {
	  /**
	   * @returns {LineString}
	   * @protected
	   */
	  createGeometry: function createGeometry() {
	    return new LineString(this.toViewProj(this.coordinates));
	  }
	};
	var script$g = {
	  name: 'vl-geom-line-string',
	  mixins: [geometry$1],
	  props: props$6,
	  computed: computed$1,
	  methods: methods$6
	};

	var __vue_script__$g = script$g;
	/* template */

	/* style */

	var __vue_inject_styles__$g = undefined;
	/* scoped */

	var __vue_scope_id__$g = undefined;
	/* module identifier */

	var __vue_module_identifier__$g = undefined;
	/* functional template */

	var __vue_is_functional_template__$g = undefined;
	/* component normalizer */

	function __vue_normalize__$g(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom$1 = __vue_normalize__$g({}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, undefined, undefined);

	function plugin$g(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$g.installed) {
	    return;
	  }

	  plugin$g.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom$1, options);

	  Vue$$1.component(Geom$1.name, Geom$1);
	}

	var LineStringGeom = /*#__PURE__*/Object.freeze({
		default: plugin$g,
		Geom: Geom$1,
		install: plugin$g
	});

	function ownKeys$g(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; forEach$2(_context4 = ownKeys$g(Object(source$$1), true)).call(_context4, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context5; forEach$2(_context5 = ownKeys$g(Object(source$$1))).call(_context5, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	/**
	 * Container for **layers**, **interactions**, **controls** and **overlays**. It responsible for viewport
	 * rendering and low level interaction events.
	 */

	var script$h = {
	  name: 'vl-map',
	  mixins: [cmp, layersContainer, interactionsContainer, overlaysContainer, featuresContainer, projTransforms],
	  props: {
	    /**
	     * Options for default controls added to the map by default. Set to `false` to disable all map controls. Object
	     * value is used to configure controls.
	     * @type {Object|boolean|Collection}
	     * @todo remove when vl-control-* components will be ready
	     */
	    defaultControls: {
	      type: [Object, Boolean, Collection],
	      default: true
	    },

	    /**
	     * Options for default interactions added to the map by default. Object
	     * value is used to configure default interactions.
	     * @type {Object|boolean|Collection}
	     */
	    defaultInteractions: {
	      type: [Object, Boolean, Collection],
	      default: true
	    },

	    /**
	     * The element to listen to keyboard events on. For example, if this option is set to `document` the keyboard
	     * interactions will always trigger. If this option is not specified, the element the library listens to keyboard
	     * events on is the component root element.
	     * @type {string|Element|Document}
	     */
	    keyboardEventTarget: [String, Element, Document],

	    /**
	     * When set to `true`, tiles will be loaded during animations.
	     * @type {boolean}
	     */
	    loadTilesWhileAnimating: {
	      type: Boolean,
	      default: false
	    },

	    /**
	     * When set to `true`, tiles will be loaded while interacting with the map.
	     * @type {boolean}
	     */
	    loadTilesWhileInteracting: {
	      type: Boolean,
	      default: false
	    },

	    /**
	     * The minimum distance in pixels the cursor must move to be detected as a map move event instead of a click.
	     * Increasing this value can make it easier to click on the map.
	     * @type {Number}
	     */
	    moveTolerance: {
	      type: Number,
	      default: 1
	    },

	    /**
	     * The ratio between physical pixels and device-independent pixels (dips) on the device.
	     * @type {number}
	     */
	    pixelRatio: {
	      type: Number,
	      default: function _default() {
	        return window.devicePixelRatio || 1;
	      }
	    },

	    /**
	     * Maximum number tiles to load simultaneously.
	     * @type {number}
	     */
	    maxTilesLoading: {
	      type: Number,
	      default: 16
	    },

	    /**
	     * Root element `tabindex` attribute value. Value should be provided to allow keyboard events on map.
	     * @type {number|string}
	     */
	    tabindex: [String, Number],

	    /**
	     * Projection for input/output coordinates in plain data.
	     * @type {string}
	     */
	    dataProjection: String,

	    /**
	     * @type {boolean}
	     */
	    wrapX: {
	      type: Boolean,
	      default: true
	    },
	    renderer: {
	      type: String,
	      default: 'canvas',
	      validator: function validator(val) {
	        var _context;

	        return includes$4(_context = ['canvas', 'webgl']).call(_context, val);
	      }
	    }
	  },
	  methods: {
	    /**
	     * @return {module:ol/PluggableMap~PluggableMap}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var Ctor;

	      switch (this.renderer) {
	        case 'webgl':
	          Ctor = WebGLMap;
	          break;

	        case 'canvas':
	        default:
	          Ctor = Map$1;
	      }

	      var map$$1 = new Ctor({
	        loadTilesWhileAnimating: this.loadTilesWhileAnimating,
	        loadTilesWhileInteracting: this.loadTilesWhileInteracting,
	        pixelRatio: this.pixelRatio,
	        moveTolerance: this.moveTolerance,
	        keyboardEventTarget: this.keyboardEventTarget,
	        maxTilesLoading: this.maxTilesLoading,
	        controls: this._controlsCollection,
	        interactions: this.$interactionsCollection,
	        layers: this.$layersCollection,
	        overlays: this.$overlaysCollection,
	        view: this.$view
	      });
	      setMapId(map$$1, this.id);
	      setMapDataProjection(map$$1, this.dataProjection);

	      this._featuresOverlay.setMap(map$$1);

	      return map$$1;
	    },

	    /**
	     * @param {number[]} pixel
	     * @return {number[]} Coordinates in the map data projection.
	     */
	    getCoordinateFromPixel: function getCoordinateFromPixel(pixel) {
	      hasMap(this);
	      var coordinate = this.$map.getCoordinateFromPixel(pixel);
	      return this.pointToDataProj(coordinate);
	    },

	    /**
	     * @param {number[]} coordinate Coordinates in map data projection
	     * @return {number[]}
	     */
	    getPixelFromCoordinate: function getPixelFromCoordinate(coordinate) {
	      hasMap(this);
	      return this.$map.getPixelFromCoordinate(this.pointToViewProj(coordinate));
	    },

	    /**
	     * Triggers focus on map container.
	     * @return {void}
	     */
	    focus: function focus() {
	      this.$el.focus();
	    },

	    /**
	     * @param {number[]} pixel
	     * @param {function} callback
	     * @param {Object} [opts]
	     * @return {*|undefined}
	     */
	    forEachFeatureAtPixel: function forEachFeatureAtPixel(pixel, callback) {
	      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      hasMap(this);
	      return this.$map.forEachFeatureAtPixel(pixel, callback, opts);
	    },

	    /**
	     * @param {number[]} pixel
	     * @param {function} callback
	     * @param {Object} [opts]
	     * @return {*|undefined}
	     */
	    forEachLayerAtPixel: function forEachLayerAtPixel(pixel, callback) {
	      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      hasMap(this);
	      return this.$map.forEachLayerAtPixel(pixel, callback, opts);
	    },

	    /**
	     * @param {number[]} pixel
	     * @param {Object} [opts]
	     */
	    getFeaturesAtPixel: function getFeaturesAtPixel(pixel) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      hasMap(this);
	      return this.$map.getFeaturesAtPixel(pixel, opts);
	    },

	    /**
	     * Updates map size and re-renders map.
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      var _this = this;

	      this.updateSize();
	      return this.render().then(function () {
	        return cmp.methods.refresh.call(_this);
	      });
	    },

	    /**
	     * @return {Promise}
	     */
	    render: function render() {
	      var _this2 = this;

	      return new promise$5(function (resolve) {
	        hasMap(_this2);

	        _this2.$map.once('postrender', function () {
	          return resolve();
	        });

	        _this2.$map.render();
	      });
	    },

	    /**
	     * Updates map size.
	     * @return {void}
	     */
	    updateSize: function updateSize() {
	      hasMap(this);
	      this.$map.updateSize();
	    },

	    /**
	     * @param {module:ol/View~View|Vue|undefined} view
	     * @return {void}
	     * @protected
	     */
	    setView: function setView(view) {
	      view = view instanceof Vue ? view.$view : view;
	      view || (view = new View());

	      if (view !== this._view) {
	        this._view = view;
	      }

	      if (this.$map && view !== this.$map.getView()) {
	        this.$map.setView(view);
	      }
	    },

	    /**
	     * @return {module:ol/View~View}
	     */
	    getView: function getView() {
	      return this._view;
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      var _context2;

	      hasMap(this);
	      this.$map.setTarget(this.$el);
	      this.$nextTick(bind$2(_context2 = this.updateSize).call(_context2, this));
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      hasMap(this);
	      this.unsubscribeAll();
	      this.$map.setTarget(null);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      subscribeToEvents$2.call(this);
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(cmp.methods.getServices.call(this), layersContainer.methods.getServices.call(this), interactionsContainer.methods.getServices.call(this), overlaysContainer.methods.getServices.call(this), featuresContainer.methods.getServices.call(this), {
	        get map() {
	          return vm.$map;
	        },

	        get view() {
	          return vm.$view;
	        },

	        get viewContainer() {
	          return vm;
	        }

	      });
	    }
	  },
	  watch: _objectSpread$f(_objectSpread$f({}, makeWatchers(['keyboardEventTarget', 'loadTilesWhileAnimating', 'loadTilesWhileInteracting', 'moveTolerance', 'pixelRatio', 'renderer', 'maxTilesLoading'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  })), {}, {
	    id: function id(value) {
	      if (!this.$map || value === getMapId(this.$map)) {
	        return;
	      }

	      setMapId(this.$map, value);
	    },
	    controls: function controls(value) {
	      if (value === false) {
	        this._controlsCollection.clear();

	        return;
	      }

	      value = _typeof(value) === 'object' ? value : undefined;

	      this._controlsCollection.clear();

	      this._controlsCollection.extend(control.defaults(value).getArray());
	    },
	    wrapX: function wrapX(value) {
	      if (this._featuresOverlay == null) return;

	      this._featuresOverlay.setSource(new VectorSource({
	        features: this.$featuresCollection,
	        wrapX: value
	      }));
	    },
	    dataProjection: function dataProjection(value) {
	      if (!this.$map) return;
	      setMapDataProjection(this.$map, value);
	      this.scheduleRefresh();
	    }
	  }),
	  created: function created() {
	    var _context3;

	    this._view = new View({
	      center: [0, 0],
	      zoom: 0
	    }); // todo make controls handling like with interactions

	    if (this.defaultControls instanceof Collection) {
	      this._controlsCollection = this.defaultControls;
	    } else if (this.defaultControls !== false) {
	      this._controlsCollection = control.defaults(isPlainObject(this.defaultControls) ? this.defaultControls : undefined);
	    } // todo initialize without interactions and provide vl-interaction-default component


	    if (this.defaultInteractions instanceof Collection) {
	      this._interactionsCollection = this.defaultInteractions;
	    } else if (this.defaultInteractions !== false) {
	      this._interactionsCollection = interaction.defaults(isPlainObject(this.defaultInteractions) ? this.defaultInteractions : undefined);
	    }

	    forEach$2(_context3 = this._interactionsCollection).call(_context3, function (interaction$$1) {
	      return initializeInteraction(interaction$$1);
	    }); // prepare default overlay


	    this._featuresOverlay = new VectorLayer({
	      source: new VectorSource({
	        features: this.$featuresCollection,
	        wrapX: this.wrapX
	      })
	    });
	    defineServices$c.call(this);
	  }
	};

	function defineServices$c() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    /**
	     * OpenLayers map instance.
	     * @type {module:ol/PluggableMap~PluggableMap|undefined}
	     */
	    $map: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },

	    /**
	     * OpenLayers view instance.
	     * @type {module:ol/View~View}
	     */
	    $view: {
	      enumerable: true,
	      get: this.getView
	    }
	  });
	}
	/**
	 * Subscribe to OL map events.
	 *
	 * @return {void}
	 * @private
	 */


	function subscribeToEvents$2() {
	  var _this4 = this;

	  hasMap(this);
	  hasView(this);
	  var ft = 1000 / 60; // pointer

	  var pointerEvents = merge(fromOlEvent(this.$map, ['click', 'dblclick', 'singleclick']), fromOlEvent(this.$map, ['pointerdrag', 'pointermove']).pipe(throttleTime(ft), distinctUntilChanged(function (a, b) {
	    return isEqual(a.coordinate, b.coordinate);
	  }))).pipe(map$4(function (evt) {
	    return _objectSpread$f(_objectSpread$f({}, evt), {}, {
	      coordinate: _this4.pointToDataProj(evt.coordinate)
	    });
	  })); // other

	  var otherEvents = fromOlEvent(this.$map, ['movestart', 'moveend', 'postrender', 'rendercomplete', 'precompose', 'postcompose', 'rendercomplete']);
	  var events = merge(pointerEvents, otherEvents);
	  this.subscribeTo(events, function (evt) {
	    _this4.$emit(evt.type, evt);
	  });
	}

	var __vue_script__$h = script$h;
	/* template */

	var __vue_render__$3 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('div', {
	    class: _vm.cmpName,
	    attrs: {
	      "id": _vm.vmId,
	      "tabindex": _vm.tabindex
	    }
	  }, [_vm._t("default")], 2);
	};

	var __vue_staticRenderFns__$3 = [];
	/* style */

	var __vue_inject_styles__$h = undefined;
	/* scoped */

	var __vue_scope_id__$h = undefined;
	/* module identifier */

	var __vue_module_identifier__$h = undefined;
	/* functional template */

	var __vue_is_functional_template__$h = false;
	/* component normalizer */

	function __vue_normalize__$h(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "map.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Map$2 = __vue_normalize__$h({
	  render: __vue_render__$3,
	  staticRenderFns: __vue_staticRenderFns__$3
	}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, undefined, undefined);

	/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */
	function distinctUntilKeyChanged(key, compare) {
	    return distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
	}

	function ownKeys$h(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; forEach$2(_context2 = ownKeys$h(Object(source$$1), true)).call(_context2, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context3; forEach$2(_context3 = ownKeys$h(Object(source$$1))).call(_context3, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	/**
	 * Represents a simple **2D view** of the map. This is the component to act upon to change the **center**,
	 * **resolution**, and **rotation** of the map.
	 */

	var script$i = {
	  name: 'vl-view',
	  mixins: [cmp, projTransforms],
	  props: {
	    /**
	     * The center coordinate in the view projection.
	     * @type {number[]}
	     * @default [0, 0]
	     */
	    center: {
	      type: Array,
	      default: function _default() {
	        return [0, 0];
	      },
	      validator: arrayLengthValidator(2)
	    },
	    constrainRotation: {
	      type: [Boolean, Number],
	      default: true
	    },
	    enableRotation: {
	      type: Boolean,
	      default: true
	    },

	    /**
	     * The extent that constrains the center defined in the view projection,
	     * in other words, center cannot be set outside this extent.
	     * @default undefined
	     */
	    extent: {
	      type: Array,
	      validator: arrayLengthValidator(4)
	    },
	    maxResolution: Number,
	    minResolution: Number,

	    /**
	     * @default 28
	     */
	    maxZoom: {
	      type: Number,
	      default: MAX_ZOOM
	    },

	    /**
	     * @default 0
	     */
	    minZoom: {
	      type: Number,
	      default: MIN_ZOOM
	    },

	    /**
	     * @type {string}
	     * @default EPSG:3857
	     */
	    projection: {
	      type: String,
	      default: EPSG_3857
	    },
	    resolution: Number,
	    resolutions: Array,

	    /**
	     * The initial rotation for the view in **radians** (positive rotation clockwise).
	     * @type {number}
	     * @vueSync
	     */
	    rotation: {
	      type: Number,
	      default: 0
	    },

	    /**
	     * Zoom level used to calculate the resolution for the view as `int` value. Only used if `resolution` is not defined.
	     * @type {number}
	     * @default 0
	     * @vueSync
	     */
	    zoom: {
	      type: Number,
	      default: MIN_ZOOM
	    },

	    /**
	     * @default 2
	     */
	    zoomFactor: {
	      type: Number,
	      default: ZOOM_FACTOR
	    }
	  },
	  computed: {
	    currentZoom: function currentZoom() {
	      if (this.rev && this.$view) {
	        return this.$view.getZoom();
	      }

	      return this.zoom;
	    },
	    currentRotation: function currentRotation() {
	      if (this.rev && this.$view) {
	        return this.$view.getRotation();
	      }

	      return this.rotation;
	    },
	    currentResolution: function currentResolution() {
	      if (this.rev && this.$view) {
	        return this.$view.getResolution();
	      }

	      return this.resolution;
	    },
	    currentCenter: function currentCenter() {
	      if (this.rev && this.$view) {
	        return this.pointToDataProj(this.$view.getCenter());
	      }
	    },
	    currentCenterViewProj: function currentCenterViewProj() {
	      if (this.rev && this.$view) {
	        return this.$view.getCenter();
	      }
	    },

	    /**
	     * @return {ProjectionLike}
	     */
	    resolvedDataProjection: function resolvedDataProjection() {
	      // exclude this.projection from lookup to allow view rendering in projection
	      // that differs from data projection
	      return coalesce(this.$viewContainer && this.$viewContainer.resolvedDataProjection, this.$options.dataProjection, this.viewProjection);
	    }
	  },
	  methods: {
	    /**
	     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_View-View.html#animate}
	     * @param {...(AnimationOptions|function(boolean))} args
	     * @return {Promise} Resolves when animation completes
	     */
	    animate: function animate() {
	      var _this = this;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      hasView(this);
	      var cb = noop;

	      if (isFunction(args[args.length - 1])) {
	        cb = args[args.length - 1];
	        args = slice$2(args).call(args, 0, args.length - 1);
	      }

	      forEach$2(args).call(args, function (opts) {
	        if (!isArray$3(opts.center)) return;
	        opts.center = _this.pointToViewProj(opts.center);
	      });

	      return new promise$5(function (resolve) {
	        var _this$$view, _context;

	        return (_this$$view = _this.$view).animate.apply(_this$$view, concat$2(_context = _toConsumableArray(args)).call(_context, [function (complete) {
	          cb(complete);
	          resolve(complete);
	        }]));
	      });
	    },

	    /**
	     * @return {ol/View~View}
	     * @protected
	     */
	    createOlObject: function createOlObject() {
	      var view = new View({
	        center: this.pointToViewProj(this.center),
	        constrainRotation: this.constrainRotation,
	        enableRotation: this.enableRotation,
	        extent: this.extent ? this.extentToViewProj(this.extent) : undefined,
	        maxResolution: this.maxResolution,
	        minResolution: this.minResolution,
	        maxZoom: this.maxZoom,
	        minZoom: this.minZoom,
	        projection: this.projection,
	        resolution: this.resolution,
	        resolutions: this.resolutions,
	        rotation: this.rotation,
	        zoom: this.zoom,
	        zoomFactor: this.zoomFactor
	      });
	      view.set('id', this.id);
	      return view;
	    },

	    /**
	     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_View-View.html#fit}
	     * @param {Object|module:ol/geom/SimpleGeometry~SimpleGeometry|module:ol/extent~Extent|Vue} geometryOrExtent
	     * @param {FitOptions} [options]
	     * @return {Promise} Resolves when view changes
	     */
	    fit: function fit(geometryOrExtent) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      hasView(this); // transform from GeoJSON, vl-feature to ol.Feature

	      if (isPlainObject(geometryOrExtent)) {
	        geometryOrExtent = this.readGeometryInDataProj(geometryOrExtent);
	      } else if (geometryOrExtent instanceof Vue) {
	        geometryOrExtent = geometryOrExtent.$geometry;
	      }

	      var cb = options.callback || noop;
	      return new promise$5(function (resolve) {
	        _this2.$view.fit(geometryOrExtent, _objectSpread$g(_objectSpread$g({}, options), {}, {
	          callback: function callback(complete) {
	            cb(complete);
	            resolve(complete);
	          }
	        }));
	      });
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$viewContainer && this.$viewContainer.setView(this);
	      this.subscribeAll();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unsubscribeAll();
	      this.$viewContainer && this.$viewContainer.setView(undefined);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      subscribeToEvents$3.call(this);
	    }
	  },
	  watch: _objectSpread$g({
	    id: function id(value) {
	      if (!this.$view || value === this.$view.get('id')) {
	        return;
	      }

	      this.$view.set('id', value);
	    },
	    center: function center(value) {
	      if (!this.$view || this.$view.getAnimating()) return;
	      value = this.pointToViewProj(value);

	      if (!isEqual(value, this.currentCenterViewProj)) {
	        this.$view.setCenter(value);
	      }
	    },
	    resolution: function resolution(value) {
	      if (!this.$view || this.$view.getAnimating()) return;

	      if (value !== this.currentResolution) {
	        this.$view.setResolution(value);
	      }
	    },
	    zoom: function zoom(value) {
	      if (!this.$view || this.$view.getAnimating()) return;

	      if (value !== this.currentZoom) {
	        this.$view.setZoom(value);
	      }
	    },
	    rotation: function rotation(value) {
	      if (!this.$view || this.$view.getAnimating()) return;

	      if (value !== this.currentRotation) {
	        this.$view.setRotation(value);
	      }
	    },
	    minZoom: function minZoom(value) {
	      if (!this.$view) return;

	      if (value !== this.$view.getMinZoom()) {
	        this.$view.setMinZoom(value);
	      }
	    },
	    maxZoom: function maxZoom(value) {
	      if (!this.$view) return;

	      if (value !== this.$view.getMaxZoom()) {
	        this.$view.setMaxZoom(value);
	      }
	    }
	  }, makeWatchers(['resolvedDataProjection', 'constrainRotation', 'enableRotation', 'extent', 'maxResolution', 'minResolution', 'projection', 'resolutions', 'zoomFactor'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  })),
	  stubVNode: {
	    empty: function empty() {
	      return this.vmId;
	    }
	  },
	  created: function created() {
	    defineServices$d.call(this);
	  }
	};

	function defineServices$d() {
	  var _this3 = this;

	  defineProperties$1(this, {
	    /**
	     * @type {ol/View~View|undefined}
	     */
	    $view: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$olObject;
	      }
	    },
	    $viewContainer: {
	      enumerable: true,
	      get: function get() {
	        return _this3.$services && _this3.$services.viewContainer;
	      }
	    }
	  });
	}
	/**
	 * Subscribe to OpenLayers significant events
	 * @return {void}
	 * @private
	 */


	function subscribeToEvents$3() {
	  var _this4 = this;

	  hasView(this);
	  var ft = 1000 / 60;
	  var resolution = fromOlChangeEvent(this.$view, 'resolution', true, ft);
	  var zoom = resolution.pipe(map$4(function () {
	    return {
	      prop: 'zoom',
	      value: _this4.$view.getZoom()
	    };
	  }), distinctUntilKeyChanged('value'));
	  var changes = merge(fromOlChangeEvent(this.$view, 'center', true, ft, function () {
	    return _this4.pointToDataProj(_this4.$view.getCenter());
	  }), fromOlChangeEvent(this.$view, 'rotation', true, ft), resolution, zoom);
	  this.subscribeTo(changes, function (_ref) {
	    var prop = _ref.prop,
	        value = _ref.value;
	    ++_this4.rev;

	    _this4.$nextTick(function () {
	      _this4.$emit("update:".concat(prop), value);
	    });
	  });
	}

	var __vue_script__$i = script$i;
	/* template */

	var __vue_render__$4 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('i', {
	    class: _vm.cmpName,
	    staticStyle: {
	      "display": "none !important"
	    },
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("default", null, {
	    "center": _vm.currentCenter,
	    "zoom": _vm.currentZoom,
	    "resolution": _vm.currentResolution,
	    "rotation": _vm.currentRotation
	  })], 2);
	};

	var __vue_staticRenderFns__$4 = [];
	/* style */

	var __vue_inject_styles__$i = undefined;
	/* scoped */

	var __vue_scope_id__$i = undefined;
	/* module identifier */

	var __vue_module_identifier__$i = undefined;
	/* functional template */

	var __vue_is_functional_template__$i = false;
	/* component normalizer */

	function __vue_normalize__$i(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "view.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var View$1 = __vue_normalize__$i({
	  render: __vue_render__$4,
	  staticRenderFns: __vue_staticRenderFns__$4
	}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, undefined, undefined);

	function plugin$h(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$h.installed) {
	    return;
	  }

	  plugin$h.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Map$2, options);

	  assign$2(View$1, options);

	  Vue$$1.component(Map$2.name, Map$2);
	  Vue$$1.component(View$1.name, View$1);
	}

	var Map$3 = /*#__PURE__*/Object.freeze({
		default: plugin$h,
		Map: Map$2,
		View: View$1,
		install: plugin$h
	});

	var MAPBOX_URL_TEMPLATE = 'https://{a-c}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}{tileNameSuffix}.{tileFormat}?access_token={accessToken}';
	var MAPBOX_ATTRIBUTIONS = '&copy; <a href="https://www.mapbox.com/" target="_blank">MapBox</a>, ' + new Date().getFullYear();
	var props$7 = {
	  accessToken: {
	    type: String,
	    required: true
	  },
	  attributions: {
	    type: [String, Array],
	    default: MAPBOX_ATTRIBUTIONS
	  },
	  mapId: {
	    type: String,
	    required: true
	  },
	  projection: {
	    type: String,
	    default: EPSG_3857
	  },
	  tileFormat: {
	    type: String,
	    default: TILE_FORMAT
	  },
	  url: {
	    type: String,
	    default: MAPBOX_URL_TEMPLATE,
	    required: false
	  }
	};
	var computed$2 = {
	  /**
	   * @type {string}
	   */
	  tileNameSuffix: function tileNameSuffix() {
	    return _tileNameSuffix(this.tilePixelRatio);
	  },

	  /**
	   * @type {string[]}
	   */
	  urlTokens: function urlTokens() {
	    return ['mapId', 'accessToken', 'tileNameSuffix', 'tileFormat'];
	  }
	};
	var script$j = {
	  name: 'vl-source-mapbox',
	  mixins: [xyzSource],
	  props: props$7,
	  computed: computed$2
	};
	/**
	 * @param {number} [ratio]
	 * @returns {number}
	 * @private
	 */

	function tileRatio(ratio) {
	  ratio = coalesce(ratio, 1);
	  return ratio > 1 ? 2 : 1;
	}
	/**
	 * @param {number} [ratio]
	 * @returns {string}
	 * @private
	 */


	function _tileNameSuffix(ratio) {
	  ratio = tileRatio(ratio);
	  return ratio > 1 ? ['@', ratio, 'x'].join('') : '';
	}

	var __vue_script__$j = script$j;
	/* template */

	/* style */

	var __vue_inject_styles__$j = undefined;
	/* scoped */

	var __vue_scope_id__$j = undefined;
	/* module identifier */

	var __vue_module_identifier__$j = undefined;
	/* functional template */

	var __vue_is_functional_template__$j = undefined;
	/* component normalizer */

	function __vue_normalize__$j(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$6 = __vue_normalize__$j({}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, undefined, undefined);

	function plugin$i(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$i.installed) {
	    return;
	  }

	  plugin$i.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$6, options);

	  Vue$$1.component(Source$6.name, Source$6);
	}

	var MapboxSource = /*#__PURE__*/Object.freeze({
		default: plugin$i,
		Source: Source$6,
		install: plugin$i
	});

	function ownKeys$i(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; forEach$2(_context2 = ownKeys$i(Object(source$$1), true)).call(_context2, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context3; forEach$2(_context3 = ownKeys$i(Object(source$$1))).call(_context3, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	/**
	 * @vueProto
	 * @alias module:modify-interaction/interaction
	 * @title vl-interaction-modify
	 */

	var script$k = {
	  name: 'vl-interaction-modify',
	  mixins: [interaction$1, stylesContainer],
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  },
	  props: {
	    /**
	     * Source or collection identifier from IdentityMap.
	     * @type {String}
	     */
	    source: {
	      type: String,
	      required: true
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event will be
	     * considered to add or move a vertex to the sketch. Default is `ol.events.condition.primaryAction`.
	     * @type {function|undefined}
	     */
	    condition: {
	      type: Function,
	      default: condition.primaryAction
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event should be handled.
	     * By default, `ol.events.condition.singleClick` with `ol.events.condition.altKeyOnly` results in a vertex deletion.
	     * @type {function|undefined}
	     */
	    deleteCondition: {
	      type: Function,
	      default: condition.altKeyOnly
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether a new vertex can be added
	     * to the sketch features. Default is `ol.events.condition.always`.
	     * @type {function|undefined}
	     */
	    insertVertexCondition: {
	      type: Function,
	      default: condition.always
	    },

	    /**
	     * Pixel tolerance for considering the pointer close enough to a segment or vertex for editing.
	     * @type {number}
	     */
	    pixelTolerance: {
	      type: Number,
	      default: 10
	    },

	    /**
	     * Wrap the world horizontally on the sketch overlay.
	     * @type {boolean}
	     */
	    wrapX: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    /**
	     * @return {Promise<Modify>}
	     * @protected
	     */
	    createInteraction: function createInteraction() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var source$$1, features;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.getInstance(_this.source);

	              case 2:
	                source$$1 = _context.sent;
	                assert(!!source$$1, "Source \"".concat(_this.source, "\" not found in identity map."));

	                if (source$$1 instanceof source.Vector) {
	                  features = source$$1.getFeaturesCollection();

	                  if (features) {
	                    instanceOf(features, ol.Collection, "Source \"".concat(_this.source, "\" doesn't provide features collection."));
	                    source$$1 = null;
	                  }
	                } else {
	                  if (isFunction(source$$1.getFeaturesCollection)) {
	                    features = source$$1.getFeaturesCollection();
	                  } else if (isFunction(source$$1.getFeatures)) {
	                    features = source$$1.getFeatures();
	                  }

	                  instanceOf(features, ol.Collection, "Source \"".concat(_this.source, "\" doesn't provide features collection."));
	                  source$$1 = null;
	                }

	                return _context.abrupt("return", new interaction.Modify({
	                  source: source$$1,
	                  features: features,
	                  deleteCondition: _this.deleteCondition,
	                  insertVertexCondition: _this.insertVertexCondition,
	                  pixelTolerance: _this.pixelTolerance,
	                  style: _this.createStyleFunc(),
	                  wrapX: _this.wrapX
	                }));

	              case 6:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {function(feature: Feature): Style}
	     * @protected
	     */
	    getDefaultStyles: function getDefaultStyles() {
	      var defaultStyles = mapValues(defaultEditStyle(), function (styles) {
	        return map$2(styles).call(styles, createStyle);
	      });
	      return function __selectDefaultStyleFunc(feature) {
	        if (feature.getGeometry()) {
	          return defaultStyles[feature.getGeometry().getType()];
	        }
	      };
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors(interaction$1.methods.getServices.call(this), stylesContainer.methods.getServices.call(this));
	    },

	    /**
	     * @return {Interaction|undefined}
	     * @protected
	     */
	    getStyleTarget: function getStyleTarget() {
	      return this.$interaction;
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      interaction$1.methods.mount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      interaction$1.methods.unmount.call(this);
	    },

	    /**
	     * @param {Array<{style: Style, condition: (function|boolean|undefined)}>|function(feature: Feature): Style|Vue|undefined} styles
	     * @return {void}
	     * @protected
	     */
	    setStyle: function setStyle(styles) {
	      if (styles !== this._styles) {
	        this._styles = styles;
	        this.scheduleRecreate();
	      }
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      interaction$1.methods.subscribeAll.call(this);
	      subscribeToInteractionChanges$1.call(this);
	    }
	  },
	  watch: _objectSpread$h({}, makeWatchers(['source', 'condition', 'deleteCondition', 'insertVertexCondition', 'pixelTolerance', 'wrapX'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};
	/**
	 * @private
	 */

	function subscribeToInteractionChanges$1() {
	  var _this2 = this;

	  hasInteraction(this);
	  var modifyEvents = fromOlEvent(this.$interaction, ['modifystart', 'modifyend']);
	  this.subscribeTo(modifyEvents, function (evt) {
	    ++_this2.rev;

	    _this2.$nextTick(function () {
	      _this2.$emit(evt.type, evt);
	    });
	  });
	}

	var __vue_script__$k = script$k;
	/* template */

	/* style */

	var __vue_inject_styles__$k = undefined;
	/* scoped */

	var __vue_scope_id__$k = undefined;
	/* module identifier */

	var __vue_module_identifier__$k = undefined;
	/* functional template */

	var __vue_is_functional_template__$k = undefined;
	/* component normalizer */

	function __vue_normalize__$k(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "interaction.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Interaction$2 = __vue_normalize__$k({}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, undefined, undefined);

	function plugin$j(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$j.installed) {
	    return;
	  }

	  plugin$j.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Interaction$2, options);

	  Vue$$1.component(Interaction$2.name, Interaction$2);
	}

	var ModifyInteraction = /*#__PURE__*/Object.freeze({
		default: plugin$j,
		Interaction: Interaction$2,
		install: plugin$j
	});

	var props$8 = {};
	var computed$3 = {
	  type: constant(GEOMETRY_TYPE.MULTI_LINE_STRING)
	};
	var methods$7 = {
	  /**
	   * @returns {MultiLineString}
	   * @protected
	   */
	  createGeometry: function createGeometry() {
	    return new MultiLineString(this.toViewProj(this.coordinates));
	  }
	};
	var script$l = {
	  name: 'vl-geom-multi-line-string',
	  mixins: [geometry$1],
	  props: props$8,
	  computed: computed$3,
	  methods: methods$7
	};

	var __vue_script__$l = script$l;
	/* template */

	/* style */

	var __vue_inject_styles__$l = undefined;
	/* scoped */

	var __vue_scope_id__$l = undefined;
	/* module identifier */

	var __vue_module_identifier__$l = undefined;
	/* functional template */

	var __vue_is_functional_template__$l = undefined;
	/* component normalizer */

	function __vue_normalize__$l(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom$2 = __vue_normalize__$l({}, __vue_inject_styles__$l, __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, undefined, undefined);

	function plugin$k(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$k.installed) {
	    return;
	  }

	  plugin$k.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom$2, options);

	  Vue$$1.component(Geom$2.name, Geom$2);
	}

	var MultiLineStringGeom = /*#__PURE__*/Object.freeze({
		default: plugin$k,
		Geom: Geom$2,
		install: plugin$k
	});

	var props$9 = {};
	var computed$4 = {
	  type: constant(GEOMETRY_TYPE.MULTI_POINT)
	};
	var methods$8 = {
	  /**
	   * @returns {MultiPoint}
	   * @protected
	   */
	  createGeometry: function createGeometry() {
	    return new MultiPoint(this.toViewProj(this.coordinates));
	  }
	};
	var script$m = {
	  name: 'vl-geom-multi-point',
	  mixins: [geometry$1],
	  props: props$9,
	  computed: computed$4,
	  methods: methods$8
	};

	var __vue_script__$m = script$m;
	/* template */

	/* style */

	var __vue_inject_styles__$m = undefined;
	/* scoped */

	var __vue_scope_id__$m = undefined;
	/* module identifier */

	var __vue_module_identifier__$m = undefined;
	/* functional template */

	var __vue_is_functional_template__$m = undefined;
	/* component normalizer */

	function __vue_normalize__$m(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom$3 = __vue_normalize__$m({}, __vue_inject_styles__$m, __vue_script__$m, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, undefined, undefined);

	function plugin$l(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$l.installed) {
	    return;
	  }

	  plugin$l.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom$3, options);

	  Vue$$1.component(Geom$3.name, Geom$3);
	}

	var MultiPointGeom = /*#__PURE__*/Object.freeze({
		default: plugin$l,
		Geom: Geom$3,
		install: plugin$l
	});

	var props$a = {};
	var computed$5 = {
	  type: constant(GEOMETRY_TYPE.MULTI_POLYGON)
	};
	var methods$9 = {
	  /**
	   * @returns {MultiPolygon}
	   * @protected
	   */
	  createGeometry: function createGeometry() {
	    return new MultiPolygon(this.toViewProj(this.coordinates));
	  }
	};
	var script$n = {
	  name: 'vl-geom-multi-polygon',
	  mixins: [geometry$1],
	  props: props$a,
	  computed: computed$5,
	  methods: methods$9
	};

	var __vue_script__$n = script$n;
	/* template */

	/* style */

	var __vue_inject_styles__$n = undefined;
	/* scoped */

	var __vue_scope_id__$n = undefined;
	/* module identifier */

	var __vue_module_identifier__$n = undefined;
	/* functional template */

	var __vue_is_functional_template__$n = undefined;
	/* component normalizer */

	function __vue_normalize__$n(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom$4 = __vue_normalize__$n({}, __vue_inject_styles__$n, __vue_script__$n, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, undefined, undefined);

	function plugin$m(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$m.installed) {
	    return;
	  }

	  plugin$m.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom$4, options);

	  Vue$$1.component(Geom$4.name, Geom$4);
	}

	var MultiPolygonGeom = /*#__PURE__*/Object.freeze({
		default: plugin$m,
		Geom: Geom$4,
		install: plugin$m
	});

	var OSM_ATTRIBUTIONS = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
	var OSM_URL_TEMPLATE = 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var OSM_MAX_ZOOM = 19;
	var props$b = {
	  attributions: {
	    type: [String, Array],
	    default: OSM_ATTRIBUTIONS
	  },
	  maxZoom: {
	    type: Number,
	    default: OSM_MAX_ZOOM
	  },
	  url: {
	    type: String,
	    default: OSM_URL_TEMPLATE,
	    required: false
	  }
	};
	var methods$a = {
	  createSource: function createSource() {
	    // always EPSG:3857, size: 256x256, format png
	    return new OSMSource({
	      url: this.urlTmpl,
	      attributions: this.attributions,
	      crossOrigin: this.crossOrigin,
	      maxZoom: this.maxZoom,
	      cacheSize: this.cacheSize,
	      opaque: this.opaque,
	      reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	      wrapX: this.wrapX,
	      transition: this.transition
	    });
	  }
	};
	var script$o = {
	  name: 'vl-source-osm',
	  mixins: [xyzSource],
	  props: props$b,
	  methods: methods$a
	};

	var __vue_script__$o = script$o;
	/* template */

	/* style */

	var __vue_inject_styles__$o = undefined;
	/* scoped */

	var __vue_scope_id__$o = undefined;
	/* module identifier */

	var __vue_module_identifier__$o = undefined;
	/* functional template */

	var __vue_is_functional_template__$o = undefined;
	/* component normalizer */

	function __vue_normalize__$o(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$7 = __vue_normalize__$o({}, __vue_inject_styles__$o, __vue_script__$o, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, undefined, undefined);

	function plugin$n(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$n.installed) {
	    return;
	  }

	  plugin$n.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$7, options);

	  Vue$$1.component(Source$7.name, Source$7);
	}

	var OsmSource = /*#__PURE__*/Object.freeze({
		default: plugin$n,
		Source: Source$7,
		install: plugin$n
	});

	var props$c = {
	  offset: {
	    type: Array,
	    default: function _default() {
	      return [0, 0];
	    },
	    validator: function validator(value) {
	      return value.length === 2;
	    }
	  },

	  /**
	   * Coordinates in the map view projection.
	   * @type {number[]}
	   */
	  position: {
	    type: Array,
	    validator: function validator(value) {
	      return value.length === 2;
	    },
	    required: true
	  },
	  positioning: {
	    type: String,
	    default: OVERLAY_POSITIONING.TOP_LEFT,
	    validator: function validator(value) {
	      var _context;

	      return includes$4(_context = values$2(OVERLAY_POSITIONING)).call(_context, value);
	    }
	  },
	  stopEvent: {
	    type: Boolean,
	    default: true
	  },
	  insertFirst: {
	    type: Boolean,
	    default: true
	  },
	  autoPan: {
	    type: Boolean,
	    default: false
	  },
	  autoPanMargin: {
	    type: Number,
	    default: 20
	  },
	  autoPanAnimation: Object,
	  className: String
	};
	var computed$6 = {
	  positionViewProj: function positionViewProj() {
	    if (this.rev && this.$overlay) {
	      return this.$overlay.getPosition();
	    }
	  },
	  positionDataProj: function positionDataProj() {
	    if (this.rev && this.$overlay) {
	      return this.pointToDataProj(this.$overlay.getPosition());
	    }
	  },
	  classes: function classes() {
	    var _context2;

	    return filter$2(_context2 = [this.cmpName, this.visible ? 'visible' : undefined]).call(_context2, identity);
	  }
	};
	var methods$b = {
	  /**
	   * @return {module:ol/Overlay~Overlay}
	   * @protected
	   */
	  createOlObject: function createOlObject() {
	    var overlay = new Overlay({
	      id: this.id,
	      offset: this.offset,
	      position: this.pointToViewProj(this.position),
	      positioning: this.positioning,
	      stopEvent: this.stopEvent,
	      insertFirst: this.insertFirst,
	      autoPan: this.autoPan,
	      autoPanMargin: this.autoPanMargin,
	      autoPanAnimation: this.autoPanAnimation,
	      className: this.className
	    });
	    initializeOverlay(overlay, this.id);
	    return overlay;
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  mount: function mount() {
	    var _this = this;

	    hasOverlay(this);
	    this.$overlay.setElement(this.$el);
	    this.$overlaysContainer && this.$overlaysContainer.addOverlay(this.$overlay); // reset position to trigger panIntoView

	    this.$nextTick(function () {
	      var _context3;

	      _this.$overlay.setPosition(slice$2(_context3 = _this.positionViewProj).call(_context3));

	      _this.visible = true;
	    });
	    this.subscribeAll();
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  unmount: function unmount() {
	    hasOverlay(this);
	    this.unsubscribeAll();
	    this.$overlay.setElement(undefined);
	    this.$overlaysContainer && this.$overlaysContainer.removeOverlay(this.$overlay);
	    this.visible = false;
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  subscribeAll: function subscribeAll() {
	    subscribeToOverlayChanges.call(this);
	  }
	};
	var watch$4 = {
	  id: function id(value) {
	    if (!this.$overlay || value === getOverlayId(this.$overlay)) return;
	    setOverlayId(this.$overlay, value);
	  },
	  offset: function offset(value) {
	    if (this.$overlay && !isEqual(value, this.$overlay.getOffset())) {
	      this.$overlay.setOffset(value);
	    }
	  },
	  position: function position(value) {
	    value = this.pointToViewProj(value);

	    if (this.$overlay && !isEqual(value, this.$overlay.getPosition())) {
	      this.$overlay.setPosition(value);
	    }
	  },
	  positioning: function positioning(value) {
	    if (this.$overlay && value !== this.$overlay.getPositioning()) {
	      this.$overlay.setPositioning(value);
	    }
	  },
	  resolvedDataProjection: function resolvedDataProjection() {
	    if (this.$overlay) {
	      this.$overlay.setPosition(this.pointToViewProj(this.position));
	    }
	  }
	};
	var script$p = {
	  name: 'vl-overlay',
	  mixins: [cmp, useMapCmp, projTransforms],
	  props: props$c,
	  computed: computed$6,
	  methods: methods$b,
	  watch: watch$4,
	  created: function created() {
	    var _this2 = this;

	    defineProperties$1(this, {
	      /**
	       * @type {module:ol/Overlay~Overlay|undefined}
	       */
	      $overlay: {
	        enumerable: true,
	        get: function get() {
	          return _this2.$olObject;
	        }
	      },
	      $map: {
	        enumerable: true,
	        get: function get() {
	          return _this2.$services && map$2(_this2.$services);
	        }
	      },
	      $view: {
	        enumerable: true,
	        get: function get() {
	          return _this2.$services && _this2.$services.view;
	        }
	      },
	      $overlaysContainer: {
	        enumerable: true,
	        get: function get() {
	          return _this2.$services && _this2.$services.overlaysContainer;
	        }
	      }
	    });
	  },
	  data: function data() {
	    return {
	      visible: false
	    };
	  }
	};
	/**
	 * @return {void}
	 * @private
	 */

	function subscribeToOverlayChanges() {
	  var _this3 = this;

	  hasOverlay(this);
	  var changes = merge(fromOlChangeEvent(this.$overlay, 'position', true, undefined, function () {
	    return _this3.pointToDataProj(_this3.$overlay.getPosition());
	  }), fromOlChangeEvent(this.$overlay, ['offset', 'positioning'], true));
	  this.subscribeTo(changes, function (_ref) {
	    var prop = _ref.prop,
	        value = _ref.value;
	    ++_this3.rev;

	    _this3.$nextTick(function () {
	      _this3.$emit("update:".concat(prop), value);
	    });
	  });
	}

	var __vue_script__$p = script$p;
	/* template */

	var __vue_render__$5 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('div', {
	    class: _vm.classes,
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("default", null, {
	    "id": _vm.id,
	    "position": _vm.position,
	    "offset": _vm.offset,
	    "positioning": _vm.positioning
	  })], 2);
	};

	var __vue_staticRenderFns__$5 = [];
	/* style */

	var __vue_inject_styles__$p = undefined;
	/* scoped */

	var __vue_scope_id__$p = undefined;
	/* module identifier */

	var __vue_module_identifier__$p = undefined;
	/* functional template */

	var __vue_is_functional_template__$p = false;
	/* component normalizer */

	function __vue_normalize__$p(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "overlay.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Overlay$1 = __vue_normalize__$p({
	  render: __vue_render__$5,
	  staticRenderFns: __vue_staticRenderFns__$5
	}, __vue_inject_styles__$p, __vue_script__$p, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, undefined, undefined);

	function plugin$o(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$o.installed) {
	    return;
	  }

	  plugin$o.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Overlay$1, options);

	  Vue$$1.component(Overlay$1.name, Overlay$1);
	}

	var Overlay$2 = /*#__PURE__*/Object.freeze({
		default: plugin$o,
		Overlay: Overlay$1,
		install: plugin$o
	});

	var props$d = {
	  coordinates: {
	    type: Array,
	    required: true,
	    validator: function validator(value) {
	      return value.length >= 2;
	    }
	  }
	};
	var computed$7 = {
	  type: constant(GEOMETRY_TYPE.POINT)
	};
	var methods$c = {
	  /**
	   * @return {Point}
	   * @protected
	   */
	  createGeometry: function createGeometry() {
	    return new Point(this.toViewProj(this.coordinates));
	  }
	};
	var script$q = {
	  name: 'vl-geom-point',
	  mixins: [geometry$1],
	  props: props$d,
	  computed: computed$7,
	  methods: methods$c
	};

	var __vue_script__$q = script$q;
	/* template */

	/* style */

	var __vue_inject_styles__$q = undefined;
	/* scoped */

	var __vue_scope_id__$q = undefined;
	/* module identifier */

	var __vue_module_identifier__$q = undefined;
	/* functional template */

	var __vue_is_functional_template__$q = undefined;
	/* component normalizer */

	function __vue_normalize__$q(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom$5 = __vue_normalize__$q({}, __vue_inject_styles__$q, __vue_script__$q, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, undefined, undefined);

	function plugin$p(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$p.installed) {
	    return;
	  }

	  plugin$p.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom$5, options);

	  Vue$$1.component(Geom$5.name, Geom$5);
	}

	var PointGeom = /*#__PURE__*/Object.freeze({
		default: plugin$p,
		Geom: Geom$5,
		install: plugin$p
	});

	var props$e = {};
	var computed$8 = {
	  type: constant(GEOMETRY_TYPE.POLYGON)
	};
	var methods$d = {
	  /**
	   * @returns {Polygon}
	   * @protected
	   */
	  createGeometry: function createGeometry() {
	    return new Polygon__default(this.toViewProj(this.coordinates));
	  }
	};
	var script$r = {
	  name: 'vl-geom-polygon',
	  mixins: [geometry$1],
	  props: props$e,
	  computed: computed$8,
	  methods: methods$d
	};

	var __vue_script__$r = script$r;
	/* template */

	/* style */

	var __vue_inject_styles__$r = undefined;
	/* scoped */

	var __vue_scope_id__$r = undefined;
	/* module identifier */

	var __vue_module_identifier__$r = undefined;
	/* functional template */

	var __vue_is_functional_template__$r = undefined;
	/* component normalizer */

	function __vue_normalize__$r(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "geom.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Geom$6 = __vue_normalize__$r({}, __vue_inject_styles__$r, __vue_script__$r, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, undefined, undefined);

	function plugin$q(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$q.installed) {
	    return;
	  }

	  plugin$q.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Geom$6, options);

	  Vue$$1.component(Geom$6.name, Geom$6);
	}

	var PolygonGeom = /*#__PURE__*/Object.freeze({
		default: plugin$q,
		Geom: Geom$6,
		install: plugin$q
	});

	var props$f = {
	  points: {
	    type: Number,
	    required: true
	  },
	  radius: Number,
	  radius1: Number,
	  radius2: Number,
	  angle: {
	    type: Number,
	    default: 0
	  },
	  rotation: {
	    type: Number,
	    default: 0
	  },
	  rotateWithView: {
	    type: Boolean,
	    default: false
	  }
	};
	var methods$e = {
	  /**
	   * @return {RegularShape}
	   * @protected
	   */
	  createStyle: function createStyle() {
	    return RegularShape({
	      points: this.points,
	      radius: this.radius,
	      radius1: this.radius1,
	      radius2: this.radius2,
	      angle: this.angle,
	      rotation: this.rotation,
	      rotateWithView: this.rotateWithView,
	      fill: this._fill,
	      stroke: this._stroke
	    });
	  },

	  /**
	   * @returns {Object}
	   * @protected
	   */
	  getServices: function getServices() {
	    var vm = this;
	    return multiMergeDescriptors(imageStyle.methods.getServices.call(this), {
	      get stylesContainer() {
	        return vm;
	      }

	    });
	  },

	  /**
	   * @param {Fill|Vue|undefined} fill
	   * @return {void}
	   */
	  setFill: function setFill(fill) {
	    fill = fill instanceof Vue ? fill.$style : fill;

	    if (fill !== this._fill) {
	      this._fill = fill;
	      this.scheduleRefresh();
	    }
	  },

	  /**
	   * @param {Stroke|Vue|undefined} stroke
	   * @return {void}
	   */
	  setStroke: function setStroke(stroke) {
	    stroke = stroke instanceof Vue ? stroke.$style : stroke;

	    if (stroke !== this._stroke) {
	      this._stroke = stroke;
	      this.scheduleRefresh();
	    }
	  }
	};
	var watch$5 = {
	  points: function points(value) {
	    if (this.$style && !isEqual(value, this.$style.getPoints())) {
	      this.scheduleRefresh();
	    }
	  },
	  radius: function radius(value) {
	    if (this.$style && !isEqual(value, this.$style.getRadius())) {
	      this.scheduleRefresh();
	    }
	  },
	  radius1: function radius1(value) {
	    if (this.$style && !isEqual(value, this.$style.getRadius())) {
	      this.scheduleRefresh();
	    }
	  },
	  radius2: function radius2(value) {
	    if (this.$style && !isEqual(value, this.$style.getRadius2())) {
	      this.scheduleRefresh();
	    }
	  },
	  angle: function angle(value) {
	    if (this.$style && !isEqual(value, this.$style.getAngle())) {
	      this.scheduleRefresh();
	    }
	  },
	  rotation: function rotation(value) {
	    if (this.$style && !isEqual(value, this.$style.getRotation())) {
	      this.scheduleRefresh();
	    }
	  },
	  rotateWithView: function rotateWithView(value) {
	    if (this.$style && !isEqual(value, this.$style.getRotateWithView())) {
	      this.scheduleRefresh();
	    }
	  }
	};
	var script$s = {
	  name: 'vl-style-reg-shape',
	  mixins: [imageStyle, withFillStrokeStyle],
	  props: props$f,
	  methods: methods$e,
	  watch: watch$5
	};

	var __vue_script__$s = script$s;
	/* template */

	/* style */

	var __vue_inject_styles__$s = undefined;
	/* scoped */

	var __vue_scope_id__$s = undefined;
	/* module identifier */

	var __vue_module_identifier__$s = undefined;
	/* functional template */

	var __vue_is_functional_template__$s = undefined;
	/* component normalizer */

	function __vue_normalize__$s(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$4 = __vue_normalize__$s({}, __vue_inject_styles__$s, __vue_script__$s, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, undefined, undefined);

	function plugin$r(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$r.installed) {
	    return;
	  }

	  plugin$r.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$4, options);

	  Vue$$1.component(Style$4.name, Style$4);
	}

	var RegShapeStyle = /*#__PURE__*/Object.freeze({
		default: plugin$r,
		Style: Style$4,
		install: plugin$r
	});

	function ownKeys$j(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context7; forEach$2(_context7 = ownKeys$j(Object(source$$1), true)).call(_context7, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context8; forEach$2(_context8 = ownKeys$j(Object(source$$1))).call(_context8, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$t = {
	  name: 'vl-interaction-select',
	  mixins: [interaction$1, featuresContainer, stylesContainer, projTransforms],
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  },
	  props: {
	    /**
	     * A function that takes an `ol.Feature` and an `ol.layer.Layer` and returns `true` if the feature may be selected or `false` otherwise.
	     * @type {function|undefined}
	     */
	    filter: {
	      type: Function,
	      default: constant(true)
	    },

	    /**
	     * A list of layers from which features should be selected. Alternatively, a filter function can be provided.
	     * @type {string[]|function|undefined}
	     */
	    layers: {
	      type: [Array, Function],
	      default: undefined
	    },

	    /**
	     * Hit-detection tolerance. Pixels inside the radius around the given position will be checked for features.
	     * This only works for the canvas renderer and not for WebGL.
	     * @type {number}
	     */
	    hitTolerance: {
	      type: Number,
	      default: 0
	    },

	    /**
	     * A boolean that determines if the default behaviour should select only single features or all (overlapping)
	     * features at the clicked map position.
	     * @type {boolean}
	     */
	    multi: {
	      type: Boolean,
	      default: false
	    },

	    /**
	     * Selected features as array of GeoJSON features with coordinates in the map view projection.
	     * @type {string[]|number[]|Object[]}
	     */
	    features: {
	      type: Array,
	      default: stubArray
	    },

	    /**
	     * Wrap the world horizontally on the selection overlay.
	     * @type {boolean}
	     */
	    wrapX: {
	      type: Boolean,
	      default: true
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event should
	     * be handled. By default, this is `ol.events.condition.never`. Use this if you want to use different events
	     * for `add` and `remove` instead of `toggle`.
	     * @type {function|undefined}
	     */
	    addCondition: {
	      type: Function,
	      default: condition.never
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event should be handled.
	     * This is the event for the selected features as a whole. By default, this is `ol.events.condition.singleClick`.
	     * Clicking on a feature selects that feature and removes any that were in the selection. Clicking outside any feature
	     * removes all from the selection.
	     * @type {function|undefined}
	     */
	    condition: {
	      type: Function,
	      default: condition.singleClick
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event should be handled.
	     * By default, this is `ol.events.condition.never`. Use this if you want to use different events for `add` and `remove`
	     * instead of `toggle`.
	     * @type {function|undefined}
	     */
	    removeCondition: {
	      type: Function,
	      default: condition.never
	    },

	    /**
	     * A function that takes an `ol.MapBrowserEvent` and returns a boolean to indicate whether that event should be handled.
	     * This is in addition to the `condition` event. By default, `ol.events.condition.shiftKeyOnly`, i.e. pressing `shift`
	     * as well as the `condition` event, adds that feature to the current selection if it is not currently selected,
	     * and removes it if it is.
	     * @type {function|undefined}
	     */
	    toggleCondition: {
	      type: Function,
	      default: condition.shiftKeyOnly
	    }
	  },
	  computed: {
	    initializedFeature: function initializedFeature() {
	      var _context;

	      return map$2(_context = this.features).call(_context, function (feature) {
	        return initializeFeature(_objectSpread$i({}, feature));
	      });
	    },
	    layerFilter: function layerFilter() {
	      var _this = this;

	      return isArray$3(this.layers) ? function (layer$$1) {
	        var _context2;

	        return includes$4(_context2 = _this.layers).call(_context2, getLayerId(layer$$1));
	      } : this.layers;
	    }
	  },
	  methods: {
	    /**
	     * @return {Select}
	     * @protected
	     */
	    createInteraction: function createInteraction() {
	      return new SelectInteraction({
	        features: this.$featuresCollection,
	        multi: this.multi,
	        wrapX: this.wrapX,
	        filter: filter$2(this),
	        layers: this.layerFilter,
	        hitTolerance: this.hitTolerance,
	        style: this.createStyleFunc(),
	        addCondition: this.addCondition,
	        condition: this.condition,
	        removeCondition: this.removeCondition,
	        toggleCondition: this.toggleCondition
	      });
	    },

	    /**
	     * @return {function(feature: Feature): Style}
	     * @protected
	     */
	    getDefaultStyles: function getDefaultStyles() {
	      var defaultStyles = mapValues(defaultEditStyle(), function (styles) {
	        return map$2(styles).call(styles, createStyle);
	      });
	      return function __selectDefaultStyleFunc(feature) {
	        if (feature.getGeometry()) {
	          return defaultStyles[feature.getGeometry().getType()];
	        }
	      };
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      return multiMergeDescriptors(interaction$1.methods.getServices.call(this), stylesContainer.methods.getServices.call(this));
	    },

	    /**
	     * @return {Interaction|undefined}
	     * @protected
	     */
	    getStyleTarget: function getStyleTarget() {
	      return this.$interaction;
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      var _context3;

	      interaction$1.methods.mount.call(this);

	      forEach$2(_context3 = this.features).call(_context3, this.select);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.unselectAll();
	      interaction$1.methods.unmount.call(this);
	    },

	    /**
	     * @param {Object|Vue|Feature|string|number} feature
	     * @return {void}
	     * @throws {Error}
	     */
	    select: function select(feature) {
	      feature = this.resolveFeature(feature);
	      if (!feature) return;
	      this.addFeature(feature);
	    },

	    /**
	     * @param {Object|Vue|Feature|string|number} feature
	     * @return {void}
	     */
	    unselect: function unselect(feature) {
	      feature = this.resolveFeature(feature);
	      if (!feature) return;
	      this.removeFeature(feature);
	    },

	    /**
	     * Removes all features from selection.
	     * @return {void}
	     */
	    unselectAll: function unselectAll() {
	      this.clearFeatures();
	    },

	    /**
	     * @param {Array<{style: Style, condition: (function|boolean|undefined)}>|function(feature: Feature): Style|Vue|undefined} styles
	     * @return {void}
	     * @protected
	     */
	    setStyle: function setStyle(styles) {
	      if (styles !== this._styles) {
	        this._styles = styles;
	        this.scheduleRecreate();
	      }
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {
	      interaction$1.methods.subscribeAll.call(this);
	      subscribeToInteractionChanges$2.call(this);
	    },

	    /**
	     * @param {Object|Vue|Feature|string|number} feature
	     * @return {Feature}
	     */
	    resolveFeature: function resolveFeature(feature) {
	      var _this2 = this;

	      hasMap(this);

	      if (feature instanceof Vue) {
	        feature = feature.$feature;
	      }

	      if (feature instanceof Feature) {
	        return feature;
	      }

	      var featureId = getFeatureId(feature);

	      if (!featureId) {
	        throw new Error('Undefined feature id');
	      }

	      feature = undefined;
	      forEach$3(this.$map.getLayers().getArray(), function (layer$$1) {
	        if (_this2.layerFilter && !_this2.layerFilter(layer$$1)) {
	          return;
	        }

	        var source$$1 = layer$$1.getSource();

	        if (source$$1 && isFunction(source$$1.getFeatureById)) {
	          feature = source$$1.getFeatureById(featureId);
	        }

	        return !feature;
	      });
	      return feature;
	    }
	  },
	  watch: _objectSpread$i({
	    initializedFeature: {
	      deep: true,
	      handler: function handler(features) {
	        var _context4, _context5, _context6;

	        if (!this.$interaction || isEqual(features, this.featuresDataProj)) return; // select new features

	        forEach$2(features).call(features, bind$2(_context4 = this.select).call(_context4, this)); // unselect non-matched features


	        forEach$2(_context5 = difference(this.getFeatures(), features, function (a, b) {
	          return getFeatureId(a) === getFeatureId(b);
	        })).call(_context5, bind$2(_context6 = this.unselect).call(_context6, this));
	      }
	    },
	    featuresDataProj: {
	      deep: true,
	      handler: dist(function (features) {
	        this.$emit('update:features', slice$2(features).call(features));
	      }, 1000 / 60)
	    }
	  }, makeWatchers(['filter', 'hitTolerance', 'multi', 'wrapX', 'addCondition', 'condition', 'removeCondition', 'toggleCondition'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};
	/**
	 * @return {void}
	 * @private
	 */

	function subscribeToInteractionChanges$2() {
	  var _this3 = this;

	  hasInteraction(this);
	  var select = fromOlEvent(this.$featuresCollection, 'add').pipe(map$4(function (_ref) {
	    var element = _ref.element;
	    return {
	      type: 'select',
	      feature: element
	    };
	  }));
	  var unselect = fromOlEvent(this.$featuresCollection, 'remove').pipe(map$4(function (_ref2) {
	    var element = _ref2.element;
	    return {
	      type: 'unselect',
	      feature: element
	    };
	  }));
	  var events = merge(select, unselect);
	  this.subscribeTo(events, function (evt) {
	    ++_this3.rev;

	    _this3.$nextTick(function () {
	      _this3.$emit(evt.type, evt.feature);
	    });
	  });
	}

	var __vue_script__$t = script$t;
	/* template */

	var __vue_render__$6 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('i', {
	    class: _vm.cmpName,
	    staticStyle: {
	      "display": "none !important"
	    },
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("default", null, {
	    "features": _vm.featuresDataProj
	  })], 2);
	};

	var __vue_staticRenderFns__$6 = [];
	/* style */

	var __vue_inject_styles__$t = undefined;
	/* scoped */

	var __vue_scope_id__$t = undefined;
	/* module identifier */

	var __vue_module_identifier__$t = undefined;
	/* functional template */

	var __vue_is_functional_template__$t = false;
	/* component normalizer */

	function __vue_normalize__$t(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "interaction.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Interaction$3 = __vue_normalize__$t({
	  render: __vue_render__$6,
	  staticRenderFns: __vue_staticRenderFns__$6
	}, __vue_inject_styles__$t, __vue_script__$t, __vue_scope_id__$t, __vue_is_functional_template__$t, __vue_module_identifier__$t, undefined, undefined);

	function plugin$s(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$s.installed) {
	    return;
	  }

	  plugin$s.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Interaction$3, options);

	  Vue$$1.component(Interaction$3.name, Interaction$3);
	}

	var SelectInteraction$1 = /*#__PURE__*/Object.freeze({
		default: plugin$s,
		Interaction: Interaction$3,
		install: plugin$s
	});

	function ownKeys$k(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; forEach$2(_context2 = ownKeys$k(Object(source$$1), true)).call(_context2, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context3; forEach$2(_context3 = ownKeys$k(Object(source$$1))).call(_context3, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	/**
	 * @alias module:snap-interaction/interaction
	 * @title vl-interaction-snap
	 * @vueProto
	 */

	var script$u = {
	  name: 'vl-interaction-snap',
	  mixins: [interaction$1],
	  props: {
	    /**
	     * Target source identifier from IdentityMap.
	     * @type {string}
	     */
	    source: {
	      type: String,
	      required: true
	    },

	    /**
	     * Snap to edges
	     * @type {boolean}
	     */
	    edge: {
	      type: Boolean,
	      default: true
	    },

	    /**
	     * Snap to vertices.
	     * @type {boolean}
	     */
	    vertex: {
	      type: Boolean,
	      default: true
	    },

	    /**
	     * Pixel tolerance for considering the pointer close enough to a segment or vertex for snapping.
	     * @type {number}
	     */
	    pixelTolerance: {
	      type: Number,
	      default: 10
	    }
	  },
	  watch: _objectSpread$j({}, makeWatchers(['source'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  })),
	  methods: {
	    /**
	     * @return {Promise<Snap>}
	     * @protected
	     */
	    createInteraction: function createInteraction() {
	      var _this = this;

	      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var source$$1;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.getInstance(_this.source);

	              case 2:
	                source$$1 = _context.sent;
	                instanceOf(source$$1, source.Source, "Source \"".concat(_this.source, "\" doesn't exists in the identity map."));
	                return _context.abrupt("return", new interaction.Snap({
	                  source: source$$1
	                }));

	              case 5:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }))();
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      interaction$1.methods.mount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      interaction$1.methods.unmount.call(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    subscribeAll: function subscribeAll() {}
	  }
	};

	var __vue_script__$u = script$u;
	/* template */

	/* style */

	var __vue_inject_styles__$u = undefined;
	/* scoped */

	var __vue_scope_id__$u = undefined;
	/* module identifier */

	var __vue_module_identifier__$u = undefined;
	/* functional template */

	var __vue_is_functional_template__$u = undefined;
	/* component normalizer */

	function __vue_normalize__$u(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "interaction.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Interaction$4 = __vue_normalize__$u({}, __vue_inject_styles__$u, __vue_script__$u, __vue_scope_id__$u, __vue_is_functional_template__$u, __vue_module_identifier__$u, undefined, undefined);

	function plugin$t(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$t.installed) {
	    return;
	  }

	  plugin$t.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Interaction$4, options);

	  Vue$$1.component(Interaction$4.name, Interaction$4);
	}

	var SnapInteraction = /*#__PURE__*/Object.freeze({
		default: plugin$t,
		Interaction: Interaction$4,
		install: plugin$t
	});

	/**
	 * Layer source to work with Sputnik.ru tile server.
	 */

	var SPUTNIK_URL_TEMPLATE = 'http://tiles.maps.sputnik.ru/{z}/{x}/{y}.png?apikey={apikey}';
	var SPUTNIK_ATTRIBUTIONS = '<a href="http://maps.sputnik.ru/" target="_blank">Спутник</a> ' + '&copy; <a href="http://rt.ru/" target="_blank">Ростелеком</a>, ' + new Date().getFullYear();
	var props$g = {
	  url: {
	    type: String,
	    default: SPUTNIK_URL_TEMPLATE
	  },
	  apiKey: {
	    type: String
	  },
	  attributions: {
	    type: String,
	    default: SPUTNIK_ATTRIBUTIONS
	  }
	};
	var computed$9 = {
	  /**
	   * @type {string[]}
	   */
	  urlTokens: function urlTokens() {
	    return ['apiKey'];
	  }
	};
	var script$v = {
	  name: 'vl-source-sputnik',
	  mixins: [xyzSource],
	  props: props$g,
	  computed: computed$9
	};

	var __vue_script__$v = script$v;
	/* template */

	/* style */

	var __vue_inject_styles__$v = undefined;
	/* scoped */

	var __vue_scope_id__$v = undefined;
	/* module identifier */

	var __vue_module_identifier__$v = undefined;
	/* functional template */

	var __vue_is_functional_template__$v = undefined;
	/* component normalizer */

	function __vue_normalize__$v(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$8 = __vue_normalize__$v({}, __vue_inject_styles__$v, __vue_script__$v, __vue_scope_id__$v, __vue_is_functional_template__$v, __vue_module_identifier__$v, undefined, undefined);

	function plugin$u(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$u.installed) {
	    return;
	  }

	  plugin$u.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$8, options);

	  Vue$$1.component(Source$8.name, Source$8);
	}

	var SputnikSource = /*#__PURE__*/Object.freeze({
		default: plugin$u,
		Source: Source$8,
		install: plugin$u
	});

	var props$h = {
	  /**
	   * Stamen layer name
	   *
	   * @type {string}
	   */
	  layer: {
	    type: String,
	    required: true
	  },

	  /**
	   * If nothing provided then default url resolved
	   * with current layer params will be used.
	   * @see {ol.source.Stamen}
	   *
	   * @type {string}
	   */
	  url: String
	};
	var methods$f = {
	  createSource: function createSource() {
	    return new StamenSource({
	      cacheSize: this.cacheSize,
	      layer: this.layer,
	      minZoom: this.minZoom,
	      maxZoom: this.maxZoom,
	      opaque: this.opaque,
	      reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	      tileLoadFunction: this.tileLoadFunction,
	      url: this.urlTmpl || undefined,
	      wrapX: this.wrapX
	    });
	  }
	};
	var script$w = {
	  name: 'vl-source-stamen',
	  mixins: [xyzSource],
	  props: props$h,
	  methods: methods$f
	};

	var __vue_script__$w = script$w;
	/* template */

	/* style */

	var __vue_inject_styles__$w = undefined;
	/* scoped */

	var __vue_scope_id__$w = undefined;
	/* module identifier */

	var __vue_module_identifier__$w = undefined;
	/* functional template */

	var __vue_is_functional_template__$w = undefined;
	/* component normalizer */

	function __vue_normalize__$w(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$9 = __vue_normalize__$w({}, __vue_inject_styles__$w, __vue_script__$w, __vue_scope_id__$w, __vue_is_functional_template__$w, __vue_module_identifier__$w, undefined, undefined);

	function plugin$v(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$v.installed) {
	    return;
	  }

	  plugin$v.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$9, options);

	  Vue$$1.component(Source$9.name, Source$9);
	}

	var StamenSource$1 = /*#__PURE__*/Object.freeze({
		default: plugin$v,
		Source: Source$9,
		install: plugin$v
	});

	var props$i = {
	  color: [Array, String],
	  lineCap: {
	    type: String,
	    default: 'round' // round, butt, square

	  },
	  lineJoin: {
	    type: String,
	    default: 'round' // round, bevel, miter

	  },
	  lineDash: Array,
	  lineDashOffset: {
	    type: Number,
	    default: 0
	  },
	  miterLimit: {
	    type: Number,
	    default: 10
	  },
	  width: {
	    type: Number,
	    default: 1.25
	  }
	};
	var methods$g = {
	  /**
	   * @return {Stroke}
	   * @protected
	   */
	  createStyle: function createStyle() {
	    return new Stroke({
	      color: this.color,
	      lineCap: this.lineCap,
	      lineJoin: this.lineJoin,
	      lineDash: this.lineDash,
	      lineDashOffset: this.lineDashOffset,
	      miterLimit: this.miterLimit,
	      width: this.width
	    });
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  mount: function mount() {
	    this.$stylesContainer && this.$stylesContainer.setStroke(this);
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  unmount: function unmount() {
	    this.$stylesContainer && this.$stylesContainer.setStroke(undefined);
	  }
	};
	var watch$6 = {
	  color: function color(value) {
	    if (this.$style && !isEqual(value, this.$style.getColor())) {
	      this.$style.setColor(value);
	      this.scheduleRefresh();
	    }
	  },
	  lineCap: function lineCap(value) {
	    if (this.$style && !isEqual(value, this.$style.getLineCap())) {
	      this.$style.setLineCap(value);
	      this.scheduleRefresh();
	    }
	  },
	  lineDash: function lineDash(value) {
	    if (this.$style && !isEqual(value, this.$style.getLineDash())) {
	      this.$style.setLineDash(value);
	      this.scheduleRefresh();
	    }
	  },
	  lineJoin: function lineJoin(value) {
	    if (this.$style && !isEqual(value, this.$style.getLineJoin())) {
	      this.$style.setLineJoin(value);
	      this.scheduleRefresh();
	    }
	  },
	  width: function width(value) {
	    if (this.$style && !isEqual(value, this.$style.getWidth())) {
	      this.$style.setWidth(value);
	      this.scheduleRefresh();
	    }
	  }
	};
	var script$x = {
	  name: 'vl-style-stroke',
	  mixins: [style$1],
	  props: props$i,
	  watch: watch$6,
	  methods: methods$g
	};

	var __vue_script__$x = script$x;
	/* template */

	/* style */

	var __vue_inject_styles__$x = undefined;
	/* scoped */

	var __vue_scope_id__$x = undefined;
	/* module identifier */

	var __vue_module_identifier__$x = undefined;
	/* functional template */

	var __vue_is_functional_template__$x = undefined;
	/* component normalizer */

	function __vue_normalize__$x(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$5 = __vue_normalize__$x({}, __vue_inject_styles__$x, __vue_script__$x, __vue_scope_id__$x, __vue_is_functional_template__$x, __vue_module_identifier__$x, undefined, undefined);

	function plugin$w(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$w.installed) {
	    return;
	  }

	  plugin$w.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$5, options);

	  Vue$$1.component(Style$5.name, Style$5);
	}

	var StrokeStyle = /*#__PURE__*/Object.freeze({
		default: plugin$w,
		Style: Style$5,
		install: plugin$w
	});

	/**
	 * Style box component.
	 * Wrapper for Style class. Can be inserted into component with setStyle/getStyle methods (vl-layer-vector, vl-feature & etc.)
	 * and acts as a box for inner style components (vl-style-fill, vl-style-stroke, icon ...)
	 */

	var props$j = {
	  zIndex: {
	    type: Number,
	    default: 0
	  },
	  condition: {
	    type: [Function, Boolean],
	    default: true
	  }
	};
	var methods$h = {
	  /**
	   * @return {Style}
	   * @protected
	   */
	  createStyle: function createStyle() {
	    return new Style({
	      zIndex: this.zIndex,
	      image: this._image,
	      stroke: this._stroke,
	      fill: this._fill,
	      text: this._text,
	      geometry: this._geometry
	    });
	  },

	  /**
	   * @returns {Object}
	   * @protected
	   */
	  getServices: function getServices() {
	    var vm = this;
	    return multiMergeDescriptors(style$1.methods.getServices.call(this), {
	      get stylesContainer() {
	        return vm;
	      }

	    });
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  mount: function mount() {
	    this.$stylesContainer && this.$stylesContainer.addStyle(this);
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  unmount: function unmount() {
	    this.$stylesContainer && this.$stylesContainer.removeStyle(this);
	  },

	  /**
	   * @param {Image|Vue|undefined} image
	   * @return {void}
	   */
	  setImage: function setImage(image) {
	    image = image instanceof Vue ? image.$style : image;

	    if (image !== this._image) {
	      this._image = image;
	    }

	    if (this.$style && image !== this.$style.getImage()) {
	      this.$style.setImage(image);
	      this.scheduleRefresh();
	    }
	  },

	  /**
	   * @param {Geometry|Vue|undefined} geom
	   * @return {void}
	   */
	  setGeometry: function setGeometry(geom) {
	    geom = geom instanceof Vue ? geom.$geometry : geom;

	    if (geom !== this._geometry) {
	      this._geometry = geom;
	    }

	    if (this.$style && geom !== this.$style.getGeometry()) {
	      this.$style.setGeometry(geom);
	      this.scheduleRefresh();
	    }
	  },

	  /**
	   * @param {Text|undefined} text
	   * @return {void}
	   */
	  setText: function setText(text) {
	    text = text instanceof Vue ? text.$style : text;

	    if (text !== this._text) {
	      this._text = text;
	    }

	    if (this.$style && text !== this.$style.getText()) {
	      this.$style.setText(text);
	      this.scheduleRefresh();
	    }
	  }
	};
	var watch$7 = {
	  zIndex: function zIndex(value) {
	    if (this.$style && !isEqual(value, this.$style.getZIndex())) {
	      this.$style.setZIndex(value);
	      this.scheduleRefresh();
	    }
	  }
	};
	var script$y = {
	  name: 'vl-style-box',
	  mixins: [style$1, withFillStrokeStyle],
	  props: props$j,
	  methods: methods$h,
	  watch: watch$7
	};

	var __vue_script__$y = script$y;
	/* template */

	/* style */

	var __vue_inject_styles__$y = undefined;
	/* scoped */

	var __vue_scope_id__$y = undefined;
	/* module identifier */

	var __vue_module_identifier__$y = undefined;
	/* functional template */

	var __vue_is_functional_template__$y = undefined;
	/* component normalizer */

	function __vue_normalize__$y(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$6 = __vue_normalize__$y({}, __vue_inject_styles__$y, __vue_script__$y, __vue_scope_id__$y, __vue_is_functional_template__$y, __vue_module_identifier__$y, undefined, undefined);

	function plugin$x(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$x.installed) {
	    return;
	  }

	  plugin$x.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$6, options);

	  Vue$$1.component(Style$6.name, Style$6);
	}

	var StyleBox = /*#__PURE__*/Object.freeze({
		default: plugin$x,
		Style: Style$6,
		install: plugin$x
	});

	/**
	 * Style function component for advanced styling.
	 * Plays the role of both a style that mounts itself to style target component (vl-layer-vector, vl-feature & etc.)
	 * and style target for inner style containers (vl-style-box) as fallback style.
	 */

	var script$z = {
	  name: 'vl-style-func',
	  mixins: [style$1, stylesContainer],
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  },
	  props: {
	    /**
	     * @type {function(): function(feature: Feature): Style}
	     */
	    factory: {
	      type: Function,
	      required: true
	    }
	  },
	  computed: {
	    styleFunc: function styleFunc() {
	      var func = this.factory();

	      if (!isFunction(func)) {

	        func = noop;
	      }

	      return func;
	    }
	  },
	  methods: {
	    /**
	     * @return {function(feature: Feature): Style}
	     * @protected
	     */
	    createStyle: function createStyle() {
	      hasMap(this); // user provided style function

	      var providedStyleFunc = this.styleFunc; // fallback style function made from inner style containers

	      var fallbackStyleFunc = this.createStyleFunc();
	      return function __styleFunc(feature, resolution) {
	        var styles = providedStyleFunc(feature, resolution); // not empty or null style

	        if (styles === null || isArray$3(styles) && styles.length || styles instanceof style.Style) {
	          return styles;
	        }

	        return fallbackStyleFunc(feature, resolution);
	      };
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      this.$stylesContainer && this.$stylesContainer.addStyle(this);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.$stylesContainer && this.$stylesContainer.removeStyle(this);
	    },

	    /**
	     * @returns {Object}
	     * @protected
	     */
	    getServices: function getServices() {
	      var vm = this;
	      return multiMergeDescriptors(style$1.methods.getServices.call(this), {
	        get stylesContainer() {
	          return vm;
	        }

	      });
	    },

	    /**
	     * Overrides stylesContainer `setStyle` method
	     * @param {Array<{ style: Style, condition: (function|boolean|undefined) }>|function(feature: Feature): Style|Vue|undefined} styles
	     * @return {void}
	     */
	    setStyle: function setStyle(styles) {
	      if (styles !== this._styles) {
	        // simply save all inner styles and
	        // use them later in style function as fallback
	        this._styles = styles;
	        this.scheduleRefresh();
	      }
	    },

	    /**
	     * @return {Promise}
	     */
	    refresh: function refresh() {
	      // recreate style
	      return this.recreate();
	    }
	  },
	  watch: {
	    factory: function factory() {
	      this.scheduleRefresh();
	    }
	  }
	};

	var __vue_script__$z = script$z;
	/* template */

	/* style */

	var __vue_inject_styles__$z = undefined;
	/* scoped */

	var __vue_scope_id__$z = undefined;
	/* module identifier */

	var __vue_module_identifier__$z = undefined;
	/* functional template */

	var __vue_is_functional_template__$z = undefined;
	/* component normalizer */

	function __vue_normalize__$z(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$7 = __vue_normalize__$z({}, __vue_inject_styles__$z, __vue_script__$z, __vue_scope_id__$z, __vue_is_functional_template__$z, __vue_module_identifier__$z, undefined, undefined);

	function plugin$y(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$y.installed) {
	    return;
	  }

	  plugin$y.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$7, options);

	  Vue$$1.component(Style$7.name, Style$7);
	}

	var StyleFunc = /*#__PURE__*/Object.freeze({
		default: plugin$y,
		Style: Style$7,
		install: plugin$y
	});

	var props$k = {
	  font: {
	    type: String,
	    default: '10px sans-serif' // css font format https://developer.mozilla.org/en-US/docs/Web/CSS/font?v=control

	  },
	  maxAngle: Number,
	  placement: String,
	  offsetX: {
	    type: Number,
	    default: 0
	  },
	  offsetY: {
	    type: Number,
	    default: 0
	  },
	  overflow: Boolean,
	  rotateWithView: {
	    type: Boolean,
	    default: false
	  },
	  rotation: {
	    type: Number,
	    default: 0
	  },
	  scale: {
	    type: Number,
	    default: 1
	  },
	  text: String,
	  textAlign: String,
	  // left, right, center, end, start
	  textBaseline: String,
	  // bottom, top, middle, alphabetic, hanging, ideographic
	  padding: {
	    type: Array,
	    default: function _default() {
	      return [0, 0, 0, 0];
	    },
	    validate: function validate(val) {
	      return val.length && val.length === 4;
	    }
	  }
	};
	var methods$i = {
	  /**
	   * @returns {Text}
	   * @protected
	   */
	  createStyle: function createStyle() {
	    return new Text({
	      font: this.font,
	      maxAngle: this.maxAngle,
	      placement: this.placement,
	      offsetX: this.offsetX,
	      offsetY: this.offsetY,
	      overflow: this.overflow,
	      rotateWithView: this.rotateWithView,
	      rotation: this.rotation,
	      scale: this.scale,
	      text: this.text,
	      textAlign: this.textAlign,
	      textBaseline: this.textBaseline,
	      fill: this._fill,
	      stroke: this._stroke,
	      padding: this.padding
	    });
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  mount: function mount() {
	    this.$stylesContainer && this.$stylesContainer.setText(this);
	  },

	  /**
	   * @return {void}
	   * @protected
	   */
	  unmount: function unmount() {
	    this.$stylesContainer && this.$stylesContainer.setText(undefined);
	  },

	  /**
	   * @returns {Object}
	   * @protected
	   */
	  getServices: function getServices() {
	    var vm = this;
	    return multiMergeDescriptors(style$1.methods.getServices.call(this), {
	      get stylesContainer() {
	        return vm;
	      }

	    });
	  },

	  /**
	   * @param {Fill|Vue|undefined} fill
	   * @return {void}
	   * @protected
	   */
	  setFill: function setFill(fill) {
	    var _context;

	    if (!(fill instanceof Vue)) {
	      withFillStrokeStyle.methods.setFill.call(this, fill);
	    }

	    var isBg = find$2(_context = this.$slots.background || []).call(_context, function (vnode) {
	      return vnode.componentInstance && vnode.componentInstance === fill;
	    });

	    if (!isBg) {
	      withFillStrokeStyle.methods.setFill.call(this, fill);
	      return;
	    }

	    fill = fill.$style;

	    if (this.$style && fill !== this.$style.getBackgroundFill()) {
	      this.$style.setBackgroundFill(fill);
	      this.scheduleRefresh();
	    }
	  },

	  /**
	   * @param {Stroke|Vue|undefined} stroke
	   * @return {void}
	   * @protected
	   */
	  setStroke: function setStroke(stroke) {
	    var _context2;

	    if (!(stroke instanceof Vue)) {
	      withFillStrokeStyle.methods.setStroke.call(this, stroke);
	    }

	    var isBg = find$2(_context2 = this.$slots.background || []).call(_context2, function (vnode) {
	      return vnode.componentInstance && vnode.componentInstance === stroke;
	    });

	    if (!isBg) {
	      withFillStrokeStyle.methods.setStroke.call(this, stroke);
	      return;
	    }

	    stroke = stroke.$style;

	    if (this.$style && stroke !== this.$style.getBackgroundStroke()) {
	      this.$style.setBackgroundStroke(stroke);
	      this.scheduleRefresh();
	    }
	  }
	};
	var watch$8 = {
	  font: function font(value) {
	    if (this.$style && !isEqual(value, this.$style.getFont())) {
	      this.$style.setFont(value);
	      this.scheduleRefresh();
	    }
	  },
	  maxAngle: function maxAngle(value) {
	    if (this.$style && !isEqual(value, this.$style.getMaxAngle())) {
	      this.$style.setMaxAngle(value);
	      this.scheduleRefresh();
	    }
	  },
	  placement: function placement(value) {
	    if (this.$style && !isEqual(value, this.$style.getPlacement())) {
	      this.$style.setFont(value);
	      this.scheduleRefresh();
	    }
	  },
	  offsetX: function offsetX(value) {
	    if (this.$style && !isEqual(value, this.$style.getOffsetX())) {
	      this.$style.setOffsetX(value);
	      this.scheduleRefresh();
	    }
	  },
	  offsetY: function offsetY(value) {
	    if (this.$style && !isEqual(value, this.$style.getOffsetY())) {
	      this.$style.setOffsetY(value);
	      this.scheduleRefresh();
	    }
	  },
	  overflow: function overflow(value) {
	    if (this.$style && !isEqual(value, this.$style.getOverflow())) {
	      this.$style.setOverflow(value);
	      this.scheduleRefresh();
	    }
	  },
	  rotation: function rotation(value) {
	    if (this.$style && !isEqual(value, this.$style.getRotation())) {
	      this.$style.setRotation(value);
	      this.scheduleRefresh();
	    }
	  },
	  rotateWithView: function rotateWithView(value) {
	    if (this.$style && !isEqual(value, this.$style.getRotateWithView())) {
	      this.$style.setRotation(value);
	      this.scheduleRefresh();
	    }
	  },
	  scale: function scale(value) {
	    if (this.$style && !isEqual(value, this.$style.getScale())) {
	      this.$style.setScale(value);
	      this.scheduleRefresh();
	    }
	  },
	  text: function text(value) {
	    if (this.$style && !isEqual(value, this.$style.getText())) {
	      this.$style.setText(value);
	      this.scheduleRefresh();
	    }
	  },
	  textAlign: function textAlign(value) {
	    if (this.$style && !isEqual(value, this.$style.getTextAlign())) {
	      this.$style.setTextAlign(value);
	      this.scheduleRefresh();
	    }
	  },
	  textBaseline: function textBaseline(value) {
	    if (this.$style && !isEqual(value, this.$style.getTextBaseline())) {
	      this.$style.setTextBaseline(value);
	      this.scheduleRefresh();
	    }
	  },
	  padding: function padding(value) {
	    if (this.$style && !isEqual(value, this.$style.getPadding())) {
	      this.$style.setPadding(value);
	      this.scheduleRefresh();
	    }
	  }
	};
	var script$A = {
	  name: 'vl-style-text',
	  mixins: [style$1, withFillStrokeStyle],
	  props: props$k,
	  methods: methods$i,
	  watch: watch$8,
	  stubVNode: {
	    empty: false,
	    attrs: function attrs() {
	      return {
	        id: this.vmId,
	        class: this.cmpName
	      };
	    }
	  }
	};

	var __vue_script__$A = script$A;
	/* template */

	var __vue_render__$7 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('i', {
	    class: _vm.cmpName,
	    staticStyle: {
	      "display": "none !important"
	    },
	    attrs: {
	      "id": _vm.vmId
	    }
	  }, [_vm._t("default"), _vm._v(" "), _vm._t("background")], 2);
	};

	var __vue_staticRenderFns__$7 = [];
	/* style */

	var __vue_inject_styles__$A = undefined;
	/* scoped */

	var __vue_scope_id__$A = undefined;
	/* module identifier */

	var __vue_module_identifier__$A = undefined;
	/* functional template */

	var __vue_is_functional_template__$A = false;
	/* component normalizer */

	function __vue_normalize__$A(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "style.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Style$8 = __vue_normalize__$A({
	  render: __vue_render__$7,
	  staticRenderFns: __vue_staticRenderFns__$7
	}, __vue_inject_styles__$A, __vue_script__$A, __vue_scope_id__$A, __vue_is_functional_template__$A, __vue_module_identifier__$A, undefined, undefined);

	function plugin$z(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$z.installed) {
	    return;
	  }

	  plugin$z.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Style$8, options);

	  Vue$$1.component(Style$8.name, Style$8);
	}

	var TextStyle = /*#__PURE__*/Object.freeze({
		default: plugin$z,
		Style: Style$8,
		install: plugin$z
	});

	/**
	 * @vueProps
	 */

	var props$l =
	/** @lends module:tile-layer/layer# */
	{
	  /**
	   * Load low-resolution tiles up to `preload` levels.
	   * @type {number}
	   * @default 0
	   */
	  preload: {
	    type: Number,
	    default: 0
	  }
	};
	/**
	 * @vueMethods
	 */

	var methods$j =
	/** @lends module:tile-layer/layer# */
	{
	  /**
	   * @return {Tile}
	   * @protected
	   */
	  createLayer: function createLayer() {
	    return new TileLayer({
	      id: this.id,
	      minResolution: this.minResolution,
	      maxResolution: this.maxResolution,
	      opacity: this.opacity,
	      visible: this.visible,
	      preload: this.preload,
	      extent: this.extent,
	      zIndex: this.zIndex,
	      source: this._source
	    });
	  }
	};
	/**
	 * Layer that provide pre-rendered, tiled images in grid that are organized by zoom levels for
	 * specific resolutions. `vl-tile-layer` component implements a **source container** interface, so it should be
	 * used together with tile-like `vl-source-*` components.
	 *
	 * @title vl-layer-tile
	 * @alias module:tile-layer/layer
	 * @vueProto
	 *
	 * @vueSlot default Default slot for `vl-source-*` (tile-like only) components.
	 */

	var script$B = {
	  name: 'vl-layer-tile',
	  mixins: [layer],
	  props: props$l,
	  methods: methods$j
	};

	var __vue_script__$B = script$B;
	/* template */

	/* style */

	var __vue_inject_styles__$B = undefined;
	/* scoped */

	var __vue_scope_id__$B = undefined;
	/* module identifier */

	var __vue_module_identifier__$B = undefined;
	/* functional template */

	var __vue_is_functional_template__$B = undefined;
	/* component normalizer */

	function __vue_normalize__$B(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "layer.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Layer$3 = __vue_normalize__$B({}, __vue_inject_styles__$B, __vue_script__$B, __vue_scope_id__$B, __vue_is_functional_template__$B, __vue_module_identifier__$B, undefined, undefined);

	function plugin$A(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$A.installed) {
	    return;
	  }

	  plugin$A.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Layer$3, options);

	  Vue$$1.component(Layer$3.name, Layer$3);
	}

	var TileLayer$1 = /*#__PURE__*/Object.freeze({
		default: plugin$A,
		Layer: Layer$3,
		install: plugin$A
	});

	var RENDER_MODES = ['vector', 'image'];
	/**
	 * @vueProps
	 */

	var props$m = {
	  /**
	   * Render mode for vector layers. Available values:
	   * - `image` - vector layers are rendered as images
	   * - `vector` - vector layers are rendered as vectors
	   * @type {string}
	   * @default vector
	   */
	  renderMode: {
	    type: String,
	    default: 'vector',
	    validator: function validator(val) {
	      return includes$4(RENDER_MODES).call(RENDER_MODES, val);
	    }
	  }
	};
	/**
	 * @vueMethods
	 */

	var methods$k = {
	  /**
	   * @return {Vector}
	   * @protected
	   */
	  createLayer: function createLayer() {
	    return new VectorLayer({
	      id: this.id,
	      minResolution: this.minResolution,
	      maxResolution: this.maxResolution,
	      opacity: this.opacity,
	      visible: this.visible,
	      extent: this.extent,
	      zIndex: this.zIndex,
	      updateWhileAnimating: this.updateWhileAnimating,
	      updateWhileInteracting: this.updateWhileInteracting,
	      source: this._source,
	      renderMode: this.renderMode,
	      renderBuffer: this.renderBuffer,
	      renderOrder: this.renderOrder,
	      declutter: this.declutter
	    });
	  }
	};
	/**
	 * Layer for data that is rendered client-side.
	 *
	 * @vueProto
	 * @title vl-layer-vector
	 * @alias module:vector-layer/layer
	 *
	 * @vueSlot default Default slot for `vl-source-*` (vector-like only) components.
	 */

	var script$C = {
	  name: 'vl-layer-vector',
	  mixins: [vectorLayer],
	  props: props$m,
	  methods: methods$k
	};

	var __vue_script__$C = script$C;
	/* template */

	/* style */

	var __vue_inject_styles__$C = undefined;
	/* scoped */

	var __vue_scope_id__$C = undefined;
	/* module identifier */

	var __vue_module_identifier__$C = undefined;
	/* functional template */

	var __vue_is_functional_template__$C = undefined;
	/* component normalizer */

	function __vue_normalize__$C(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "layer.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Layer$4 = __vue_normalize__$C({}, __vue_inject_styles__$C, __vue_script__$C, __vue_scope_id__$C, __vue_is_functional_template__$C, __vue_module_identifier__$C, undefined, undefined);

	function plugin$B(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$B.installed) {
	    return;
	  }

	  plugin$B.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Layer$4, options);

	  Vue$$1.component(Layer$4.name, Layer$4);
	}

	var VectorLayer$1 = /*#__PURE__*/Object.freeze({
		default: plugin$B,
		Layer: Layer$4,
		install: plugin$B
	});

	function _arrayWithHoles(arr) {
	  if (isArray$7(arr)) return arr;
	}

	var getIterator_1 = getIterator;

	var getIterator$1 = getIterator_1;

	function _iterableToArrayLimit(arr, i) {
	  if (typeof symbol$2 === "undefined" || !isIterable$2(Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = getIterator$1(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function ownKeys$l(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; forEach$2(_context4 = ownKeys$l(Object(source$$1), true)).call(_context4, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context5; forEach$2(_context5 = ownKeys$l(Object(source$$1))).call(_context5, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$D = {
	  name: 'vl-source-vector',
	  mixins: [vectorSource],
	  props: {
	    /**
	     * Array of GeoJSON features with coordinates in the map view projection.
	     * @type {Object[]} features
	     */
	    features: {
	      type: Array,
	      default: stubArray
	    },

	    /**
	     * Source loader factory.
	     * Source loader should load features from some remote service, decode them and pas to `features` prop to render.
	     * @type {(function(): FeatureLoader|undefined)} loaderFactory
	     */
	    loaderFactory: {
	      type: Function
	    },

	    /**
	     * Source format factory
	     * @type {(function(): Feature|undefined)} formatFactory
	     */
	    formatFactory: {
	      type: Function,
	      default: defaultFormatFactory
	    },

	    /**
	     * String or url factory
	     * @type {(string|function(): string|FeatureUrlFunction|undefined)} url
	     */
	    url: [String, Function],

	    /**
	     * Loading strategy factory.
	     * Extent here in map view projection.
	     * @type {(function(): LoadingStrategy|undefined)} strategyFactory
	     */
	    strategyFactory: {
	      type: Function,
	      default: defaultStrategyFactory
	    },
	    overlaps: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    initializedFeatures: function initializedFeatures() {
	      var _context;

	      return map$2(_context = this.features).call(_context, function (feature) {
	        return initializeFeature(_objectSpread$k({}, feature));
	      });
	    },
	    urlFunc: function urlFunc() {
	      var _this = this;

	      if (!this.url) return;
	      var url = this.url;

	      if (!isFunction(url)) {
	        url = constant(this.url);
	      }

	      return function (extent$$1, resolution, projection) {
	        extent$$1 = transformExtent(extent$$1, projection, _this.resolvedDataProjection);
	        projection = _this.resolvedDataProjection;
	        return url(extent$$1, resolution, projection);
	      };
	    },
	    loaderFunc: function loaderFunc() {
	      var _this2 = this;

	      if (!this.loaderFactory) return;
	      var loader = this.loaderFactory();
	      return /*#__PURE__*/function () {
	        var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(extent$$1, resolution, projection) {
	          var features;
	          return regenerator.wrap(function _callee$(_context2) {
	            while (1) {
	              switch (_context2.prev = _context2.next) {
	                case 0:
	                  _context2.next = 2;
	                  return loader(transformExtent(extent$$1, projection, _this2.resolvedDataProjection), resolution, _this2.resolvedDataProjection);

	                case 2:
	                  features = _context2.sent;

	                  if (isString(features) && features !== '') {
	                    features = _this2.readSourceData(features);
	                  }

	                  if (isArray$4(features)) {
	                    _this2.addFeatures(features);
	                  }

	                case 5:
	                case "end":
	                  return _context2.stop();
	              }
	            }
	          }, _callee);
	        }));

	        return function (_x, _x2, _x3) {
	          return _ref.apply(this, arguments);
	        };
	      }();
	    },
	    loadingStrategy: function loadingStrategy() {
	      return this.strategyFactory();
	    },
	    dataFormatIdent: function dataFormatIdent() {
	      if (!this.olObjIdent) return;
	      return this.makeIdent(this.olObjIdent, 'data_format');
	    },
	    dataFormat: function dataFormat() {
	      var _context3;

	      return this.instanceFactoryCall(this.dataFormatIdent, bind$2(_context3 = this.formatFactory).call(_context3, this));
	    }
	  },
	  methods: {
	    /**
	     * @return {VectorSource}
	     * @protected
	     */
	    createSource: function createSource() {
	      return new VectorSource({
	        attributions: this.attributions,
	        features: this.$featuresCollection,
	        projection: this.resolvedDataProjection,
	        loader: this.loaderFunc,
	        useSpatialIndex: this.useSpatialIndex,
	        wrapX: this.wrapX,
	        logo: this.logo,
	        strategy: this.loadingStrategy,
	        format: this.dataFormat,
	        url: this.urlFunc,
	        overlaps: this.overlaps
	      });
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    mount: function mount() {
	      vectorSource.methods.mount.call(this);
	      this.addFeatures(this.features);
	    },

	    /**
	     * @return {void}
	     * @protected
	     */
	    unmount: function unmount() {
	      this.clear();
	      vectorSource.methods.unmount.call(this);
	    },

	    /**
	     * @param {mixed} data
	     * @returns {Array<FeatureLike>|Array<Feature>}
	     */
	    readSourceData: function readSourceData(data) {
	      return this.dataFormat.readFeatures(data, {
	        featureProjection: this.viewProjection,
	        dataProjection: this.resolvedDataProjection
	      });
	    }
	  },
	  watch: _objectSpread$k({
	    initializedFeatures: {
	      deep: true,
	      handler: function handler(features) {
	        if (!this.$source || isEqual(features, this.featuresDataProj)) return; // add new features

	        this.addFeatures(features); // remove non-matched features

	        this.removeFeatures(difference(this.getFeatures(), features, function (a, b) {
	          return getFeatureId(a) === getFeatureId(b);
	        }));
	      }
	    }
	  }, makeWatchers(['loadingStrategy', 'dataFormat', 'urlFunc', 'loaderFactory', 'formatFactory', 'strategyFactory', 'overlaps'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};
	/**
	 * @return {LoadingStrategy}
	 */

	function defaultStrategyFactory() {
	  return loadingstrategy.all;
	}
	/**
	 * @return {GeoJSON}
	 */


	function defaultFormatFactory() {
	  return createGeoJsonFmt();
	}

	function transformExtent(extent$$1, sourceProj, destProj) {
	  extent$$1 = slice$2(extent$$1).call(extent$$1);

	  if (isFinite(extent$$1[0]) && isFinite(extent$$1[1])) {
	    var _transform = proj.transform([extent$$1[0], extent$$1[1]], sourceProj, destProj);

	    var _transform2 = _slicedToArray(_transform, 2);

	    extent$$1[0] = _transform2[0];
	    extent$$1[1] = _transform2[1];
	  }

	  if (isFinite(extent$$1[2]) && isFinite(extent$$1[3])) {
	    var _transform3 = proj.transform([extent$$1[2], extent$$1[3]], sourceProj, destProj);

	    var _transform4 = _slicedToArray(_transform3, 2);

	    extent$$1[2] = _transform4[0];
	    extent$$1[3] = _transform4[1];
	  }

	  return extent$$1;
	}

	var __vue_script__$D = script$D;
	/* template */

	/* style */

	var __vue_inject_styles__$D = undefined;
	/* scoped */

	var __vue_scope_id__$D = undefined;
	/* module identifier */

	var __vue_module_identifier__$D = undefined;
	/* functional template */

	var __vue_is_functional_template__$D = undefined;
	/* component normalizer */

	function __vue_normalize__$D(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$a = __vue_normalize__$D({}, __vue_inject_styles__$D, __vue_script__$D, __vue_scope_id__$D, __vue_is_functional_template__$D, __vue_module_identifier__$D, undefined, undefined);

	function plugin$C(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$C.installed) {
	    return;
	  }

	  plugin$C.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$a, options);

	  Vue$$1.component(Source$a.name, Source$a);
	}

	var VectorSource$1 = /*#__PURE__*/Object.freeze({
		default: plugin$C,
		Source: Source$a,
		install: plugin$C
	});

	var RENDER_MODES$1 = ['vector', 'image', 'hybrid'];
	var props$n = {
	  renderMode: {
	    type: String,
	    default: 'hybrid',
	    validator: function validator(val) {
	      return includes$4(RENDER_MODES$1).call(RENDER_MODES$1, val);
	    }
	  },
	  preload: {
	    type: Number,
	    default: 0
	  }
	};
	var methods$l = {
	  /**
	   * @return {VectorTileLayer}
	   * @protected
	   */
	  createLayer: function createLayer() {
	    return new VectorTileLayer({
	      id: this.id,
	      minResolution: this.minResolution,
	      maxResolution: this.maxResolution,
	      opacity: this.opacity,
	      visible: this.visible,
	      preload: this.preload,
	      extent: this.extent,
	      zIndex: this.zIndex,
	      updateWhileAnimating: this.updateWhileAnimating,
	      updateWhileInteracting: this.updateWhileInteracting,
	      source: this._source,
	      renderMode: this.renderMode,
	      renderBuffer: this.renderBuffer,
	      renderOrder: this.renderOrder,
	      declutter: this.declutter
	    });
	  }
	};
	var script$E = {
	  name: 'vl-layer-vector-tile',
	  mixins: [vectorLayer],
	  props: props$n,
	  methods: methods$l
	};

	var __vue_script__$E = script$E;
	/* template */

	/* style */

	var __vue_inject_styles__$E = undefined;
	/* scoped */

	var __vue_scope_id__$E = undefined;
	/* module identifier */

	var __vue_module_identifier__$E = undefined;
	/* functional template */

	var __vue_is_functional_template__$E = undefined;
	/* component normalizer */

	function __vue_normalize__$E(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "layer.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Layer$5 = __vue_normalize__$E({}, __vue_inject_styles__$E, __vue_script__$E, __vue_scope_id__$E, __vue_is_functional_template__$E, __vue_module_identifier__$E, undefined, undefined);

	function plugin$D(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$D.installed) {
	    return;
	  }

	  plugin$D.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Layer$5, options);

	  Vue$$1.component(Layer$5.name, Layer$5);
	}

	var VectorTileLayer$1 = /*#__PURE__*/Object.freeze({
		default: plugin$D,
		Layer: Layer$5,
		install: plugin$D
	});

	var script$F = {
	  name: 'vl-source-vector-tile',
	  mixins: [tileSource],
	  props: {
	    cacheSize: {
	      type: Number,
	      default: 128
	    },

	    /**
	     * Source format factory
	     * @type {(function(): Feature|undefined)} formatFactory
	     */
	    formatFactory: {
	      type: Function,
	      default: defaultFormatFactory$1
	    },
	    overlaps: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    dataFormat: function dataFormat() {
	      return this.formatFactory();
	    }
	  },
	  methods: {
	    /**
	     * @return {VectorTileSource}
	     */
	    createSource: function createSource() {
	      return new VectorTileSource({
	        attributions: this.attributions,
	        cacheSize: this.cacheSize,
	        format: this.dataFormat,
	        logo: this.logo,
	        overlaps: this.overlaps,
	        projection: this.projection,
	        tileGrid: this._tileGrid,
	        tileLoadFunction: this.tileLoadFunction,
	        tileUrlFunction: this.urlFunc,
	        wrapX: this.wrapX,
	        transition: this.transition
	      });
	    }
	  }
	};
	/**
	 * @return {TopoJSON}
	 */

	function defaultFormatFactory$1() {
	  return createMvtFmt();
	}

	var __vue_script__$F = script$F;
	/* template */

	/* style */

	var __vue_inject_styles__$F = undefined;
	/* scoped */

	var __vue_scope_id__$F = undefined;
	/* module identifier */

	var __vue_module_identifier__$F = undefined;
	/* functional template */

	var __vue_is_functional_template__$F = undefined;
	/* component normalizer */

	function __vue_normalize__$F(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$b = __vue_normalize__$F({}, __vue_inject_styles__$F, __vue_script__$F, __vue_scope_id__$F, __vue_is_functional_template__$F, __vue_module_identifier__$F, undefined, undefined);

	function plugin$E(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$E.installed) {
	    return;
	  }

	  plugin$E.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$b, options);

	  Vue$$1.component(Source$b.name, Source$b);
	}

	var VectorTileSource$1 = /*#__PURE__*/Object.freeze({
		default: plugin$E,
		Source: Source$b,
		install: plugin$E
	});

	function ownKeys$m(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; forEach$2(_context2 = ownKeys$m(Object(source$$1), true)).call(_context2, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context3; forEach$2(_context3 = ownKeys$m(Object(source$$1))).call(_context3, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$G = {
	  name: 'vl-source-wms',
	  mixins: [tileSource, wmsSource],
	  props: {
	    gutter: Number,
	    hidpi: {
	      type: Boolean,
	      default: true
	    },
	    serverType: {
	      type: String,
	      validator: function validator(value) {
	        var _context;

	        return !value || includes$4(_context = values$2(WMSServerType)).call(_context, value);
	      }
	    },
	    url: {
	      type: String,
	      required: true,
	      validator: function validator(value) {
	        return !!value.length;
	      }
	    }
	  },
	  methods: {
	    /**
	     * @returns {TileWMS}
	     * @protected
	     */
	    createSource: function createSource() {
	      return new TileWMSSource({
	        attributions: this.attributions,
	        cacheSize: this.cacheSize,
	        params: this.allParams,
	        crossOrigin: this.crossOrigin,
	        gutter: this.gutter,
	        hidpi: this.hidpi,
	        logo: this.logo,
	        tileGrid: this._tileGrid,
	        projection: this.projection,
	        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	        serverType: this.serverType,
	        wrapX: this.wrapX,
	        url: this.urlTmpl,
	        transition: this.transition,
	        tileLoadFunction: this.tileLoadFunction
	      });
	    }
	  },
	  watch: _objectSpread$l({}, makeWatchers(['gutter', 'hidpi', 'serverType'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};

	var __vue_script__$G = script$G;
	/* template */

	/* style */

	var __vue_inject_styles__$G = undefined;
	/* scoped */

	var __vue_scope_id__$G = undefined;
	/* module identifier */

	var __vue_module_identifier__$G = undefined;
	/* functional template */

	var __vue_is_functional_template__$G = undefined;
	/* component normalizer */

	function __vue_normalize__$G(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$c = __vue_normalize__$G({}, __vue_inject_styles__$G, __vue_script__$G, __vue_scope_id__$G, __vue_is_functional_template__$G, __vue_module_identifier__$G, undefined, undefined);

	function plugin$F(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$F.installed) {
	    return;
	  }

	  plugin$F.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$c, options);

	  Vue$$1.component(Source$c.name, Source$c);
	}

	var WmsSource = /*#__PURE__*/Object.freeze({
		default: plugin$F,
		Source: Source$c,
		install: plugin$F
	});

	function ownKeys$n(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$n(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$n(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var script$H = {
	  name: 'vl-source-wmts',
	  mixins: [tileSource],
	  props: {
	    dimensions: Object,
	    format: {
	      type: String,
	      default: WMTS_FORMAT
	    },
	    layerName: {
	      type: String,
	      required: true
	    },
	    matrixSet: {
	      type: String,
	      required: true
	    },
	    matrixIds: {
	      type: Array
	    },
	    requestEncoding: {
	      type: String,
	      default: WMTS_REQUEST_ENCODING
	    },
	    styleName: {
	      type: String,
	      required: true
	    },
	    version: {
	      type: String,
	      default: WMTS_VERSION
	    },
	    url: {
	      type: String,
	      required: true
	    },
	    origin: {
	      type: Array
	    },
	    resolutions: {
	      type: Array
	    }
	  },
	  methods: {
	    /**
	     * @returns {WMTS}
	     * @protected
	     */
	    createSource: function createSource() {
	      return new WMTSSource({
	        attributions: this.attributions,
	        cacheSize: this.cacheSize,
	        crossOrigin: this.crossOrigin,
	        dimensions: this.dimensions,
	        format: this.format,
	        layer: this.layerName,
	        logo: this.logo,
	        matrixSet: this.matrixSet,
	        origin: this.origin,
	        projection: this.projection,
	        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
	        requestEncoding: this.requestEncoding,
	        resolutions: this.resolutions,
	        tileGrid: this._tileGrid,
	        tilePixelRatio: this.tilePixelRatio,
	        style: this.styleName,
	        version: this.version,
	        url: this.urlTmpl,
	        wrapX: this.wrapX,
	        transition: this.transition,
	        tileLoadFunction: this.tileLoadFunction
	      });
	    },
	    createTileGrid: function createTileGrid() {
	      var extent$$1 = createExtentFromProjection(this.projection);
	      var resolutions = this.resolutions ? this.resolutions : resolutionsFromExtent(extent$$1, this.maxZoom, this.tileSize);
	      var origin = this.origin ? this.origin : getExtentCorner(extent$$1, EXTENT_CORNER.TOP_LEFT);

	      var matrixIds = this.matrixIds || from_1$2(range(this.minZoom, resolutions.length));

	      return new WMTSTileGrid({
	        extent: extent$$1,
	        origin: origin,
	        resolutions: resolutions,
	        tileSize: this.tileSize,
	        minZoom: this.minZoom,
	        matrixIds: matrixIds
	      });
	    }
	  },
	  watch: _objectSpread$m({}, makeWatchers(['dimensions', 'format', 'layerName', 'matrixSet', 'requestEncoding', 'styleName', 'version', 'resolutions', 'origin'], function () {
	    return function () {
	      this.scheduleRecreate();
	    };
	  }))
	};

	var __vue_script__$H = script$H;
	/* template */

	/* style */

	var __vue_inject_styles__$H = undefined;
	/* scoped */

	var __vue_scope_id__$H = undefined;
	/* module identifier */

	var __vue_module_identifier__$H = undefined;
	/* functional template */

	var __vue_is_functional_template__$H = undefined;
	/* component normalizer */

	function __vue_normalize__$H(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$d = __vue_normalize__$H({}, __vue_inject_styles__$H, __vue_script__$H, __vue_scope_id__$H, __vue_is_functional_template__$H, __vue_module_identifier__$H, undefined, undefined);

	function plugin$G(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$G.installed) {
	    return;
	  }

	  plugin$G.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$d, options);

	  Vue$$1.component(Source$d.name, Source$d);
	}

	var WmtsSource = /*#__PURE__*/Object.freeze({
		default: plugin$G,
		Source: Source$d,
		install: plugin$G
	});

	var script$I = {
	  name: 'vl-source-xyz',
	  mixins: [xyzSource]
	};

	var __vue_script__$I = script$I;
	/* template */

	/* style */

	var __vue_inject_styles__$I = undefined;
	/* scoped */

	var __vue_scope_id__$I = undefined;
	/* module identifier */

	var __vue_module_identifier__$I = undefined;
	/* functional template */

	var __vue_is_functional_template__$I = undefined;
	/* component normalizer */

	function __vue_normalize__$I(template, style$$1, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

	  component.__file = "source.vue";

	  if (!component.render) {
	    component.render = template.render;
	    component.staticRenderFns = template.staticRenderFns;
	    component._compiled = true;
	    if (functional) component.functional = true;
	  }

	  component._scopeId = scope;

	  return component;
	}
	/* style inject */

	/* style inject SSR */


	var Source$e = __vue_normalize__$I({}, __vue_inject_styles__$I, __vue_script__$I, __vue_scope_id__$I, __vue_is_functional_template__$I, __vue_module_identifier__$I, undefined, undefined);

	function plugin$H(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$H.installed) {
	    return;
	  }

	  plugin$H.installed = true;
	  options = pick(options, 'dataProjection');

	  assign$2(Source$e, options);

	  Vue$$1.component(Source$e.name, Source$e);
	}

	var XyzSource = /*#__PURE__*/Object.freeze({
		default: plugin$H,
		Source: Source$e,
		install: plugin$H
	});

	/**
	 * @const {string} VueLayers version.
	 */

	var VERSION = '0.11.27';
	/**
	 * Registers all VueLayers components.
	 * @param {Vue|VueConstructor} Vue
	 * @param {VueLayersOptions} [options]
	 */

	function plugin$I(Vue$$1) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (plugin$I.installed) {
	    return;
	  }

	  plugin$I.installed = true; // install components

	  Vue$$1.use(ArcgisRestSource, options);
	  Vue$$1.use(BingmapsSource, options);
	  Vue$$1.use(CircleGeom, options);
	  Vue$$1.use(CircleStyle, options);
	  Vue$$1.use(ClusterSource, options);
	  Vue$$1.use(DrawInteraction, options);
	  Vue$$1.use(Feature$2, options);
	  Vue$$1.use(FillStyle, options);
	  Vue$$1.use(Geoloc$1, options);
	  Vue$$1.use(Graticule$2, options);
	  Vue$$1.use(GroupLayer$1, options);
	  Vue$$1.use(HeatmapLayer$1, options);
	  Vue$$1.use(IconStyle, options);
	  Vue$$1.use(ImageLayer$1, options);
	  Vue$$1.use(ImageStaticSource$1, options);
	  Vue$$1.use(ImageWmsSource, options);
	  Vue$$1.use(LineStringGeom, options);
	  Vue$$1.use(Map$3, options);
	  Vue$$1.use(MapboxSource, options);
	  Vue$$1.use(ModifyInteraction, options);
	  Vue$$1.use(MultiLineStringGeom, options);
	  Vue$$1.use(MultiPointGeom, options);
	  Vue$$1.use(MultiPolygonGeom, options);
	  Vue$$1.use(OsmSource, options);
	  Vue$$1.use(Overlay$2, options);
	  Vue$$1.use(PointGeom, options);
	  Vue$$1.use(PolygonGeom, options);
	  Vue$$1.use(RegShapeStyle, options);
	  Vue$$1.use(SelectInteraction$1, options);
	  Vue$$1.use(SnapInteraction, options);
	  Vue$$1.use(SputnikSource, options);
	  Vue$$1.use(StamenSource$1, options);
	  Vue$$1.use(StrokeStyle, options);
	  Vue$$1.use(StyleBox, options);
	  Vue$$1.use(StyleFunc, options);
	  Vue$$1.use(TextStyle, options);
	  Vue$$1.use(TileLayer$1, options);
	  Vue$$1.use(VectorLayer$1, options);
	  Vue$$1.use(VectorSource$1, options);
	  Vue$$1.use(VectorTileLayer$1, options);
	  Vue$$1.use(VectorTileSource$1, options);
	  Vue$$1.use(WmsSource, options);
	  Vue$$1.use(WmtsSource, options);
	  Vue$$1.use(XyzSource, options);
	}
	/**
	 * @typedef {Object} VueLayersOptions
	 * @property {string} [dataProjection] Projection for all properties, events and other plain values.
	 */

	var VueLayers = /*#__PURE__*/Object.freeze({
		default: plugin$I,
		VERSION: VERSION,
		install: plugin$I,
		ArcgisRestSource: ArcgisRestSource,
		BingmapsSource: BingmapsSource,
		CircleGeom: CircleGeom,
		CircleStyle: CircleStyle,
		ClusterSource: ClusterSource,
		DrawInteraction: DrawInteraction,
		Feature: Feature$2,
		FillStyle: FillStyle,
		Geoloc: Geoloc$1,
		Graticule: Graticule$2,
		GroupLayer: GroupLayer$1,
		HeatmapLayer: HeatmapLayer$1,
		IconStyle: IconStyle,
		ImageLayer: ImageLayer$1,
		ImageStaticSource: ImageStaticSource$1,
		ImageWmsSource: ImageWmsSource,
		LineStringGeom: LineStringGeom,
		Map: Map$3,
		MapboxSource: MapboxSource,
		ModifyInteraction: ModifyInteraction,
		MultiLineStringGeom: MultiLineStringGeom,
		MultiPointGeom: MultiPointGeom,
		MultiPolygonGeom: MultiPolygonGeom,
		OsmSource: OsmSource,
		Overlay: Overlay$2,
		PointGeom: PointGeom,
		PolygonGeom: PolygonGeom,
		RegShapeStyle: RegShapeStyle,
		SelectInteraction: SelectInteraction$1,
		SnapInteraction: SnapInteraction,
		SputnikSource: SputnikSource,
		StamenSource: StamenSource$1,
		StrokeStyle: StrokeStyle,
		StyleBox: StyleBox,
		StyleFunc: StyleFunc,
		TextStyle: TextStyle,
		TileLayer: TileLayer$1,
		VectorLayer: VectorLayer$1,
		VectorSource: VectorSource$1,
		VectorTileLayer: VectorTileLayer$1,
		VectorTileSource: VectorTileSource$1,
		WmsSource: WmsSource,
		WmtsSource: WmtsSource,
		XyzSource: XyzSource
	});

	function ownKeys$o(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$n(target) { for (var i = 1; i < arguments.length; i++) { var source$$1 = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; forEach$2(_context = ownKeys$o(Object(source$$1), true)).call(_context, function (key) { _defineProperty(target, key, source$$1[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source$$1)); } else { var _context2; forEach$2(_context2 = ownKeys$o(Object(source$$1))).call(_context2, function (key) { defineProperty$1(target, key, getOwnPropertyDescriptor$3(source$$1, key)); }); } } return target; }
	var index_umd = _objectSpread$n(_objectSpread$n({}, VueLayers), {}, {
	  olExt: olExt,
	  rxExt: rxExt
	});

	if (typeof window.Vue !== 'undefined') {
	  window.Vue.use(VueLayers);
	}

	return index_umd;

})));