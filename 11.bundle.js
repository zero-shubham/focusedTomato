(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{342:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// CONCATENATED MODULE: ./src/Components/IndicatorComponent/Indicator.js\n\n\nvar Indicator_Indicator = function Indicator(props) {\n  return react_default.a.createElement("span", {\n    className: props.class\n  });\n};\n\n/* harmony default export */ var IndicatorComponent_Indicator = (Indicator_Indicator);\n// CONCATENATED MODULE: ./src/Components/IndicatorComponent/Indicators.js\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Indicators_Indicators =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Indicators, _Component);\n\n  function Indicators(props) {\n    _classCallCheck(this, Indicators);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Indicators).call(this, props));\n  }\n\n  _createClass(Indicators, [{\n    key: "render",\n    value: function render() {\n      var key;\n      var active = [],\n          inactive = [];\n\n      for (key = 1; key <= this.props.active + this.props.inactive; key++) {\n        if (key <= this.props.active) {\n          active.push(react_default.a.createElement(IndicatorComponent_Indicator, {\n            key: key,\n            class: "active indicator"\n          }));\n        } else {\n          inactive.push(react_default.a.createElement(IndicatorComponent_Indicator, {\n            key: key,\n            class: "indicator"\n          }));\n        }\n      }\n\n      return react_default.a.createElement("div", {\n        className: "indicators"\n      }, active, inactive);\n    }\n  }]);\n\n  return Indicators;\n}(react["Component"]);\n\n/* harmony default export */ var IndicatorComponent_Indicators = __webpack_exports__["default"] = (Indicators_Indicators);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5kaWNhdG9yQ29tcG9uZW50L0luZGljYXRvci5qcz8zOWRjIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luZGljYXRvckNvbXBvbmVudC9JbmRpY2F0b3JzLmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kaWNhdG9yID0gKHByb3BzKSA9PiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc30+PC9zcGFuPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kaWNhdG9yOyIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi9JbmRpY2F0b3InO1xuXG5jbGFzcyBJbmRpY2F0b3JzIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgYWN0aXZlID0gW10sIGluYWN0aXZlID0gW107XG4gICAgICAgIGZvcihrZXk9MTsga2V5PD10aGlzLnByb3BzLmFjdGl2ZSArIHRoaXMucHJvcHMuaW5hY3RpdmUgOyBrZXkrKyl7XG4gICAgICAgICAgICBpZihrZXk8PXRoaXMucHJvcHMuYWN0aXZlKXtcbiAgICAgICAgICAgICAgICBhY3RpdmUucHVzaCg8SW5kaWNhdG9yIGtleT17a2V5fSBjbGFzcz17YGFjdGl2ZSBpbmRpY2F0b3JgfS8+KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaW5hY3RpdmUucHVzaCg8SW5kaWNhdG9yIGtleT17a2V5fSBjbGFzcz17YGluZGljYXRvcmB9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZGljYXRvcnMnPlxuICAgICAgICAgICAgICAgIHthY3RpdmV9XG4gICAgICAgICAgICAgICAge2luYWN0aXZlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kaWNhdG9yczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBOzs7O0FBdEJBO0FBQ0E7QUF5QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///342\n')}}]);