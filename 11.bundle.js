(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{343:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Router_AppRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Canvas, _Component);\n\n  function Canvas() {\n    var _this;\n\n    _classCallCheck(this, Canvas);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), "onClickFunc", function (e) {\n      if (_this.dropdownRef.current && !e.target.classList.contains(\'header__user-dropdown-logout\')) _this.dropdownRef.current.classList.remove(\'active\');\n    });\n\n    _this.dropdownRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); //this ref was added to deactivate the dropdown on any click on the canvas can be done better\n\n    return _this;\n  }\n\n  _createClass(Canvas, [{\n    key: "render",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "canvas",\n        onClick: this.onClickFunc\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router_AppRouter__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n        ref: this.dropdownRef\n      }));\n    }\n  }]);\n\n  return Canvas;\n}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);\n\n/* harmony default export */ __webpack_exports__["default"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2FudmFzLmpzPzU5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcFJvdXRlciBmcm9tICcuLi9Sb3V0ZXIvQXBwUm91dGVyJztcblxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTsvL3RoaXMgcmVmIHdhcyBhZGRlZCB0byBkZWFjdGl2YXRlIHRoZSBkcm9wZG93biBvbiBhbnkgY2xpY2sgb24gdGhlIGNhbnZhcyBjYW4gYmUgZG9uZSBiZXR0ZXJcbiAgICB9XG5cbiAgICBvbkNsaWNrRnVuYyA9IChlKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuZHJvcGRvd25SZWYuY3VycmVudCAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX3VzZXItZHJvcGRvd24tbG9nb3V0JykpXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FudmFzJyBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tGdW5jfSA+XG4gICAgICAgICAgICAgICAgPEFwcFJvdXRlciByZWY9e3RoaXMuZHJvcGRvd25SZWZ9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQVBBO0FBQ0E7QUFIQTtBQUdBO0FBQ0E7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7Ozs7QUFqQkE7QUFDQTtBQW1CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///343\n')}}]);