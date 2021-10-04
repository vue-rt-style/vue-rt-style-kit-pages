"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Select_SelectStore_js"],{

/***/ "./src/atoms/components/Select/SelectStore.js":
/*!****************************************************!*\
  !*** ./src/atoms/components/Select/SelectStore.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectStore": () => (/* binding */ SelectStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _stores_storePrototype_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stores/storePrototype.class */ "./src/atoms/stores/storePrototype.class.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SelectStoreClass = /*#__PURE__*/function (_StorePrototype) {
  _inherits(SelectStoreClass, _StorePrototype);

  var _super = _createSuper(SelectStoreClass);

  function SelectStoreClass(props) {
    var _this;

    _classCallCheck(this, SelectStoreClass);

    _this = _super.call(this, props);
    _this.selectors = {};
    _this.selectorsTypes = {};
    _this.selectorsValue = {};
    _this.selectorsActiveValue = {};
    _this.isFirstActive = {};
    _this.defaultValue = {};
    _this.selectorsOpenStatus = {};
    _this.focusIndex = {};
    _this.autocompleteText = {};
    _this.selectorsClickValue = {};
    return _this;
  }

  _createClass(SelectStoreClass, [{
    key: "setOpen",
    value: function setOpen(id) {
      if (!this.selectorsOpenStatus[id]) {
        this.selectorsOpenStatus[id] = true;
        this.runWatchersById(id);
      }
    }
  }, {
    key: "setClose",
    value: function setClose(id) {
      if (this.selectorsOpenStatus[id]) {
        this.selectorsOpenStatus[id] = false;
        this.runWatchersById(id);
      }
    }
  }, {
    key: "getOpenStatus",
    value: function getOpenStatus(id) {
      return this.selectorsOpenStatus[id];
    }
  }, {
    key: "setSelectorType",
    value: function setSelectorType(id, type) {
      var _this$selectorsActive;

      this.selectorsTypes[id] = type;
      this.createSelectorDefaultProps(id);
      this.runWatchersById(id); // if (type == 'simple') {

      if (((_this$selectorsActive = this.selectorsActiveValue[id]) === null || _this$selectorsActive === void 0 ? void 0 : _this$selectorsActive.length) > 1) {
        var firstValue = this.selectorsActiveValue[id][0];
        this.removeAllActiveValue(id);
        this.setActiveValue(id, firstValue);
      } // }

    }
  }, {
    key: "clear",
    value: function clear(id) {
      delete this.selectors[id];
      delete this.selectorsTypes[id];
      delete this.selectorsValue[id];
      delete this.selectorsActiveValue[id];
      delete this.selectorsOpenStatus[id];
      delete this.focusIndex[id];
    }
  }, {
    key: "getSelectorType",
    value: function getSelectorType(id, type) {
      var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.selectorsTypes[id] = {
        type: type,
        multiple: multiple
      };
    }
  }, {
    key: "getSelectorsClickValue",
    value: function getSelectorsClickValue(id) {
      return this.selectorsClickValue[id];
    }
  }, {
    key: "getSelectorOptions",
    value: function getSelectorOptions(id) {
      return this.selectors[id];
    }
  }, {
    key: "setActiveValue",
    value: function setActiveValue(id, value) {
      var _this2 = this;

      var isOnClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(value)) {
        value.forEach(function (val) {
          return _this2.setActiveValue(id, val);
        });
      } else {
        var _this$selectorsActive2;

        if (((_this$selectorsActive2 = this.selectorsActiveValue[id]) === null || _this$selectorsActive2 === void 0 ? void 0 : _this$selectorsActive2.indexOf(value)) < 0) {
          var _this$selectorsTypes$, _this$selectorsTypes$2;

          if (!((_this$selectorsTypes$ = this.selectorsTypes[id]) !== null && _this$selectorsTypes$ !== void 0 && _this$selectorsTypes$.multiple)) {
            this.removeAllActiveValue(id);
            this.setClose(id);
          }

          this.selectorsActiveValue[id].push(value);

          if (isOnClick) {
            this.selectorsClickValue[id] = this.selectorsValue[id][value];
          }

          if ((_this$selectorsTypes$2 = this.selectorsTypes[id]) !== null && _this$selectorsTypes$2 !== void 0 && _this$selectorsTypes$2.multiple) {
            var values = Object.keys(this.selectorsValue[id]);
            this.selectorsActiveValue[id].sort(function (a, b) {
              return values.indexOf(a) <= values.indexOf(b) ? -1 : 1;
            });
          }

          this.runWatchersById(id);
          this.setActiveFocusEl(id);
        }
      }
    }
  }, {
    key: "removeActiveValue",
    value: function removeActiveValue(id, value) {
      var _this$selectorsActive3;

      var index = (_this$selectorsActive3 = this.selectorsActiveValue[id]) === null || _this$selectorsActive3 === void 0 ? void 0 : _this$selectorsActive3.indexOf(value);

      if (this.selectorsTypes[id].multiple) {
        if (index >= 0) {
          this.selectorsActiveValue[id].splice(index, 1);
          this.runWatchersById(id);
        }
      } else {
        this.setClose(id);
      }
    }
  }, {
    key: "removeAllActiveValue",
    value: function removeAllActiveValue(id) {
      if (this.selectorsActiveValue[id] && this.selectorsActiveValue[id].length > 0) {
        this.selectorsActiveValue[id] = [];
        this.runWatchersById(id);
      }
    }
  }, {
    key: "getActiveValue",
    value: function getActiveValue(id) {
      return this.selectorsActiveValue[id];
    }
  }, {
    key: "getActiveLabels",
    value: function getActiveLabels(id) {
      var _this$selectorsActive4,
          _this3 = this;

      if (((_this$selectorsActive4 = this.selectorsActiveValue[id]) === null || _this$selectorsActive4 === void 0 ? void 0 : _this$selectorsActive4.length) > 0) {
        var _this$selectorsActive5;

        return (_this$selectorsActive5 = this.selectorsActiveValue[id]) === null || _this$selectorsActive5 === void 0 ? void 0 : _this$selectorsActive5.map(function (value) {
          var _this3$selectors$id$f;

          return (_this3$selectors$id$f = _this3.selectors[id].find(function (item) {
            return _this3.selectorsTypes[id].type == 'autocomplete' ? item.label == value : item.value == value;
          })) === null || _this3$selectors$id$f === void 0 ? void 0 : _this3$selectors$id$f.label;
        }).filter(function (i) {
          return i;
        });
      }

      return this.selectorsActiveValue[id];
    }
  }, {
    key: "getActiveIndex",
    value: function getActiveIndex(id) {
      var _this4 = this;

      var activeIndexes = {};

      if (this.selectorsTypes[id] && this.selectors[id]) {
        if (!this.selectorsTypes[id].multiple) {
          activeIndexes[this.selectors[id].findIndex(function (i) {
            return i.value == _this4.selectorsActiveValue[id][0];
          })] = 1;
        } else {
          var _this$selectorsActive6;

          (_this$selectorsActive6 = this.selectorsActiveValue[id]) === null || _this$selectorsActive6 === void 0 ? void 0 : _this$selectorsActive6.map(function (activeVal) {
            return _this4.selectors[id].findIndex(function (i) {
              return i.value == activeVal;
            });
          }).forEach(function (activeKey) {
            activeIndexes[activeKey] = 1;
          });
        }
      }

      return activeIndexes;
    }
  }, {
    key: "getFocusIndex",
    value: function getFocusIndex(id) {
      return this.focusIndex[id];
    }
  }, {
    key: "setFocusIndex",
    value: function setFocusIndex(id, index) {
      if (index > this.selectors[id].length) {
        index = 0;
      }

      if (this.focusIndex[id] != index) {
        this.focusIndex[id] = index;
        this.runWatchersById(id);
      }
    }
  }, {
    key: "setNextFocus",
    value: function setNextFocus(id) {
      var size = this.selectors[id].length;

      if (this.focusIndex[id] == -1) {
        this.setFocusIndex(id, 0);
      } else {
        this.setFocusIndex(id, (this.focusIndex[id] + 1) % size);
      }
    }
  }, {
    key: "setPreviousFocus",
    value: function setPreviousFocus(id) {
      var size = this.selectors[id].length;

      if (this.focusIndex[id] == -1) {
        this.setFocusIndex(id, this.selectors[id].length - 1);
      } else {
        this.setFocusIndex(id, (this.focusIndex[id] - 1 + size) % size);
      }
    }
  }, {
    key: "setActiveFocusEl",
    value: function setActiveFocusEl(id) {
      var _this$selectorsTypes$3,
          _this5 = this;

      if (!((_this$selectorsTypes$3 = this.selectorsTypes[id]) !== null && _this$selectorsTypes$3 !== void 0 && _this$selectorsTypes$3.multiple) && this.selectors[id]) {
        this.setFocusIndex(id, this.selectors[id].findIndex(function (i) {
          return i.value == _this5.selectorsActiveValue[id][0];
        }));
      }
    }
  }, {
    key: "addJson",
    value: function addJson(id, json) {
      var _this6 = this;

      if (json.length == 0) {
        this.selectors[id] = [];
      } else {
        this.clearSelectorProps(id);
        json.forEach(function (obj) {
          _this6.setSelectorOption(id, obj);
        });
      }
    }
  }, {
    key: "createSelectorDefaultProps",
    value: function createSelectorDefaultProps(id) {
      if (!this.selectors[id]) {
        var _this$selectorsTypes$4;

        this.selectors[id] = [];
        this.selectorsValue[id] = {};
        this.selectorsActiveValue[id] = [];
        this.selectorsOpenStatus[id] = false;

        if (!((_this$selectorsTypes$4 = this.selectorsTypes[id]) !== null && _this$selectorsTypes$4 !== void 0 && _this$selectorsTypes$4.multiple)) {
          this.focusIndex[id] = -1;
        }
      }
    }
  }, {
    key: "clearSelectorProps",
    value: function clearSelectorProps(id) {
      if (this.selectors[id]) {
        this.selectors[id] = [];
        this.selectorsValue[id] = {};
        this.selectorsActiveValue[id] = [];
      }
    }
  }, {
    key: "setSelectorOption",
    value: function setSelectorOption(id, data) {
      this.createSelectorDefaultProps(id);

      if (!this.selectorsValue[id][data.value]) {
        this.selectorsValue[id][data.value] = data;
        this.selectors[id].push(data);

        if (this.selectors[id].length == 1 && this.isFirstActive[id]) {
          this.setActiveValue(id, data.value);
        }
      }

      this.runWatchersById(id);
    }
  }, {
    key: "removeSelectorOption",
    value: function removeSelectorOption(id, data) {
      if (this.selectors[id]) {
        var _this$selectors$id;

        delete this.selectorsValue[id][data.value];
        var index = (_this$selectors$id = this.selectors[id]) === null || _this$selectors$id === void 0 ? void 0 : _this$selectors$id.indexOf(data);
        this.selectors[id].splice(index, 1);
        this.runWatchersById(id);
        this.removeActiveValue(data.value);
      }
    } // setFirstActive(id, value) {
    //   this.isFirstActive[id] = true;
    //   if (!!this.selectorsValue[id] && !(this.selectorsActiveValue[id]?.length > 0)) {
    //     this.setActiveValue(id, value);
    //   }
    // }

  }, {
    key: "setDefaultValue",
    value: function setDefaultValue(id, data) {
      this.defaultValue[id] = {
        label: data.label,
        value: data.value
      };
    }
  }, {
    key: "setInputText",
    value: function setInputText(id, str) {
      this.autocompleteText[id] = str;
      this.runWatchersById(id);
    }
  }, {
    key: "getInputText",
    value: function getInputText(id) {
      return this.autocompleteText[id];
    }
  }]);

  return SelectStoreClass;
}(_stores_storePrototype_class__WEBPACK_IMPORTED_MODULE_0__.StorePrototype);

var selectStoreObject = new SelectStoreClass();
var SelectStore = vue__WEBPACK_IMPORTED_MODULE_1__["default"].observable(selectStoreObject);

/***/ })

}]);