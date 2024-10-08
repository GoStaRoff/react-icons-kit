"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SvgIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _camelCase = _interopRequireDefault(require("camel-case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function notNullOrUndef(val) {
  return val !== null && val !== undefined;
}

function expandStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return style.split(';').reduce(function (partial, next) {
    var _next$split = next.split(':'),
        _next$split2 = _slicedToArray(_next$split, 2),
        key = _next$split2[0],
        val = _next$split2[1];

    if (notNullOrUndef(key) && notNullOrUndef(val)) {
      partial[(0, _camelCase.default)(key)] = val;
    }

    return partial;
  }, {});
}

var walkChildren = function walkChildren(children) {
  return children.map(function (child, idx) {
    var name = child.name,
        attribsMap = child.attribs,
        _child$children = child.children,
        gchildren = _child$children === void 0 ? null : _child$children;
    var attribs = Object.keys(attribsMap).filter(function (key) {
      return key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none';
    }).reduce(function (partial, key) {
      if (key === 'style') {
        partial.style = expandStyle(attribsMap[key]);
      } else {
        partial[(0, _camelCase.default)(key)] = attribsMap[key];
      }

      return partial;
    }, {});
    var merge = {};

    if (attribsMap.fill === 'none' && attribsMap.stroke) {
      merge = {
        fill: 'none',
        stroke: 'currentColor'
      };
    } else if (attribsMap.fill === 'none') {
      merge = {
        fill: 'none'
      };
    }

    return (0, _react.createElement)(name, _objectSpread({
      key: idx
    }, attribs, merge), gchildren === null ? gchildren : walkChildren(gchildren));
  });
};

var SvgIcon = function SvgIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      icon = _ref.icon,
      title = _ref.title;
  var children = icon.children,
      viewBox = icon.viewBox,
      _icon$attribs = icon.attribs,
      svgAttribs = _icon$attribs === void 0 ? {} : _icon$attribs;
  var camelCasedAttribs = Object.keys(svgAttribs).reduce(function (partial, key) {
    partial[(0, _camelCase.default)(key)] = svgAttribs[key];
    return partial;
  }, {});
  return _react.default.createElement("svg", _extends({
    fill: "currentColor",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    height: size,
    width: size,
    viewBox: viewBox
  }, camelCasedAttribs), title ? _react.default.createElement("title", null, title) : null, walkChildren(children));
};

exports.SvgIcon = SvgIcon;
SvgIcon.propTypes = {
  icon: _propTypes.default.object.isRequired,
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  title: _propTypes.default.string
};
var _default = SvgIcon;
exports.default = _default;