"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withBaseIcon = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'i' : _ref$tag,
      others = _objectWithoutProperties(_ref, ["style", "className", "icon", "size", "tag"]);

  return _react.default.createElement(Tag, _extends({}, others, {
    style: _objectSpread({
      display: 'inline-block'
    }, style),
    className: className
  }), _react.default.createElement(_SvgIcon.default, {
    size: size,
    icon: icon
  }));
};

exports.Icon = Icon;

var withBaseIcon = function withBaseIcon(defaultProps) {
  return function (props) {
    var propsToUse = _objectSpread({}, defaultProps);

    return _react.default.createElement(Icon, _extends({}, propsToUse, props));
  };
};

exports.withBaseIcon = withBaseIcon;
Icon.propTypes = {
  icon: _propTypes.default.object.isRequired,
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  style: _propTypes.default.object,
  tag: _propTypes.default.oneOf(['i', 'span', 'div']),
  className: _propTypes.default.string
};
var _default = Icon;
exports.default = _default;