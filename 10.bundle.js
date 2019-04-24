(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{464:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "assets/brain.svg";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9icmFpbi5zdmc/M2I5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYnJhaW4uc3ZnXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///464\n')},479:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 17 modules\nvar es = __webpack_require__(27);\n\n// EXTERNAL MODULE: ./src/actions/config.js\nvar actions_config = __webpack_require__(90);\n\n// CONCATENATED MODULE: ./src/Components/AtomicComponents/SettingsItem.js\n\n\nvar SettingsItem_SettingItem = function SettingItem(props) {\n  return react_default.a.createElement("div", {\n    className: "settings__list-item"\n  }, react_default.a.createElement("span", null, props.label), props.toggle && react_default.a.createElement("div", {\n    className: "master__switch"\n  }, react_default.a.createElement("label", {\n    className: "switch",\n    htmlFor: "togBtn-".concat(props.tag)\n  }), react_default.a.createElement("input", {\n    type: "checkbox",\n    id: "togBtn-".concat(props.tag),\n    className: "check",\n    defaultChecked: props.check,\n    "data-tag": props.tag,\n    onChange: function onChange(e) {\n      props.onChange(e.target.getAttribute(\'data-tag\'), e.target.checked);\n    }\n  }), react_default.a.createElement("div", {\n    className: "slider round"\n  })), !props.toggle && react_default.a.createElement("input", {\n    className: "settings__list-item-input",\n    value: props.val,\n    "data-tag": props.tag,\n    onChange: function onChange(e) {\n      props.onChange(e.target.getAttribute(\'data-tag\'), parseInt(e.target.value, 10));\n    }\n  }));\n};\n\n/* harmony default export */ var SettingsItem = (SettingsItem_SettingItem);\n// EXTERNAL MODULE: ./src/assets/brain.svg\nvar brain = __webpack_require__(464);\nvar brain_default = /*#__PURE__*/__webpack_require__.n(brain);\n\n// CONCATENATED MODULE: ./src/Components/Settings.js\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === \'function\') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar Settings_Settings =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Settings, _Component);\n\n  function Settings(props) {\n    var _this;\n\n    _classCallCheck(this, Settings);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), "onChangeVal", function (setting, config) {\n      if (!config && typeof config !== "boolean") config = 0;\n\n      if (/^[0-9]*$/.test(config) || config === true || config === false) {\n        _this.setState(function (state) {\n          return _objectSpread({}, state, _defineProperty({}, setting, config));\n        });\n\n        _this.props.dispatch(Object(actions_config["a" /* startEditConfig */])({\n          setting: setting,\n          config: config\n        }));\n      }\n    });\n\n    _this.state = _this.props.config;\n    return _this;\n  }\n\n  _createClass(Settings, [{\n    key: "render",\n    value: function render() {\n      return react_default.a.createElement("div", {\n        className: "settings"\n      }, react_default.a.createElement("div", {\n        className: "settings__list tasks__list"\n      }, react_default.a.createElement(SettingsItem, {\n        label: "Focus Duration",\n        val: this.state.focusDuration,\n        tag: \'focusDuration\',\n        onChange: this.onChangeVal\n      }), react_default.a.createElement(SettingsItem, {\n        label: "Short-break Duration",\n        val: this.state.shortBreakDuration,\n        tag: \'shortBreakDuration\',\n        onChange: this.onChangeVal\n      }), react_default.a.createElement(SettingsItem, {\n        label: "Long-break Duration",\n        val: this.state.longBreakDuration,\n        tag: \'longBreakDuration\',\n        onChange: this.onChangeVal\n      }), react_default.a.createElement(SettingsItem, {\n        label: "Sessions Before Long-break",\n        val: this.state.sessionBeforeLongBreak,\n        tag: \'sessionBeforeLongBreak\',\n        onChange: this.onChangeVal\n      }), react_default.a.createElement(SettingsItem, {\n        label: "Notifications",\n        toggle: true,\n        check: this.state.notification,\n        tag: \'notification\',\n        onChange: this.onChangeVal\n      }), react_default.a.createElement(SettingsItem, {\n        label: "Silent",\n        toggle: true,\n        check: this.state.silent,\n        tag: \'silent\',\n        onChange: this.onChangeVal\n      })), react_default.a.createElement("div", {\n        className: "rights"\n      }, react_default.a.createElement("span", {\n        className: "rights__reserved"\n      }, "All rights reserved. \\xA9"), react_default.a.createElement("span", {\n        className: "rights__madeBy"\n      }, "Made with ", react_default.a.createElement("img", {\n        src: brain_default.a,\n        className: "rights__madeBy-img"\n      }), " by ", react_default.a.createElement("a", {\n        href: "https://github.com/zero-shubham",\n        className: "rights__madeBy-link"\n      }, "Shubham Biswas"))));\n    }\n  }]);\n\n  return Settings;\n}(react["Component"]);\n\nvar mapStateToProps = function mapStateToProps(store) {\n  return {\n    config: store.config\n  };\n};\n\nvar connectedSettings = Object(es["b" /* connect */])(mapStateToProps)(Settings_Settings);\n/* harmony default export */ var Components_Settings = __webpack_exports__["default"] = (connectedSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXRvbWljQ29tcG9uZW50cy9TZXR0aW5nc0l0ZW0uanM/ZmE1OSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXR0aW5ncy5qcz9iMWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNldHRpbmdJdGVtID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzX19saXN0LWl0ZW0nPlxuICAgIDxzcGFuPntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAge1xuICAgICAgICBwcm9wcy50b2dnbGUgJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXN0ZXJfX3N3aXRjaCc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCIgaHRtbEZvcj17YHRvZ0J0bi0ke3Byb3BzLnRhZ31gfT48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgIGlkPXtgdG9nQnRuLSR7cHJvcHMudGFnfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtwcm9wcy5jaGVja31cbiAgICAgICAgICAgICAgICBkYXRhLXRhZz17cHJvcHMudGFnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSxlLnRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIHtcbiAgICAgICAgIXByb3BzLnRvZ2dsZSAmJiBcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2V0dGluZ3NfX2xpc3QtaXRlbS1pbnB1dCdcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbH1cbiAgICAgICAgZGF0YS10YWc9e3Byb3BzLnRhZ31cbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSxwYXJzZUludChlLnRhcmdldC52YWx1ZSwxMCkpXG4gICAgICAgIH19XG4gICAgICAgID48L2lucHV0PlxuICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdJdGVtOyIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtzdGFydEVkaXRDb25maWd9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnJztcbmltcG9ydCBTZXR0aW5nSXRlbSBmcm9tICcuL0F0b21pY0NvbXBvbmVudHMvU2V0dGluZ3NJdGVtJztcblxuaW1wb3J0IGJyYWluIGZyb20gJy4uL2Fzc2V0cy9icmFpbi5zdmcnO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJvcHMuY29uZmlnO1xuICAgIH07XG5cbiAgICBvbkNoYW5nZVZhbCA9IChzZXR0aW5nLGNvbmZpZykgPT4ge1xuICAgICAgICBpZighY29uZmlnICYmIHR5cGVvZiBjb25maWcgIT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgY29uZmlnPTA7XG4gICAgICAgIGlmKC9eWzAtOV0qJC8udGVzdChjb25maWcpIHx8IGNvbmZpZyA9PT0gdHJ1ZSB8fCBjb25maWc9PT1mYWxzZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHsuLi5zdGF0ZSxbc2V0dGluZ106Y29uZmlnfSkpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzdGFydEVkaXRDb25maWcoe3NldHRpbmcsIGNvbmZpZ30pKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5ncyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzX19saXN0IHRhc2tzX19saXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJdGVtIGxhYmVsPSdGb2N1cyBEdXJhdGlvbicgdmFsPXt0aGlzLnN0YXRlLmZvY3VzRHVyYXRpb259IHRhZz17J2ZvY3VzRHVyYXRpb24nfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVZhbH0vPlxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0l0ZW0gbGFiZWw9J1Nob3J0LWJyZWFrIER1cmF0aW9uJyB2YWw9e3RoaXMuc3RhdGUuc2hvcnRCcmVha0R1cmF0aW9ufSB0YWc9eydzaG9ydEJyZWFrRHVyYXRpb24nfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVZhbH0vPlxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0l0ZW0gbGFiZWw9J0xvbmctYnJlYWsgRHVyYXRpb24nIHZhbD17dGhpcy5zdGF0ZS5sb25nQnJlYWtEdXJhdGlvbn0gdGFnPXsnbG9uZ0JyZWFrRHVyYXRpb24nfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVZhbH0vPlxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0l0ZW0gbGFiZWw9J1Nlc3Npb25zIEJlZm9yZSBMb25nLWJyZWFrJyB2YWw9e3RoaXMuc3RhdGUuc2Vzc2lvbkJlZm9yZUxvbmdCcmVha30gdGFnPXsnc2Vzc2lvbkJlZm9yZUxvbmdCcmVhayd9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVmFsfS8+XG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSXRlbSBsYWJlbD0nTm90aWZpY2F0aW9ucycgdG9nZ2xlPXt0cnVlfSBjaGVjaz17dGhpcy5zdGF0ZS5ub3RpZmljYXRpb259IHRhZz17J25vdGlmaWNhdGlvbid9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVmFsfS8+XG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSXRlbSBsYWJlbD0nU2lsZW50JyB0b2dnbGU9e3RydWV9IGNoZWNrPXt0aGlzLnN0YXRlLnNpbGVudH0gdGFnPXsnc2lsZW50J30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VWYWx9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodHMnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JpZ2h0c19fcmVzZXJ2ZWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZC4gJmNvcHk7XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyaWdodHNfX21hZGVCeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBNYWRlIHdpdGggPGltZyBzcmM9e2JyYWlufSBjbGFzc05hbWU9J3JpZ2h0c19fbWFkZUJ5LWltZycvPiBieSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVyby1zaHViaGFtJyBjbGFzc05hbWU9J3JpZ2h0c19fbWFkZUJ5LWxpbmsnPlNodWJoYW0gQmlzd2FzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnOiBzdG9yZS5jb25maWdcbiAgICB9XG59O1xuXG5jb25zdCBjb25uZWN0ZWRTZXR0aW5ncyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZXR0aW5ncylcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RlZFNldHRpbmdzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUF2QkE7QUFDQTtBQWlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBRkE7QUFHQTtBQUNBOzs7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUFyQ0E7QUFDQTtBQXVDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///479\n')}}]);