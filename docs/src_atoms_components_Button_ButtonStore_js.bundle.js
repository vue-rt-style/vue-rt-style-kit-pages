"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Button_ButtonStore_js"],{

/***/ "./src/atoms/components/Button/ButtonStore.js":
/*!****************************************************!*\
  !*** ./src/atoms/components/Button/ButtonStore.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonsStore": () => (/* binding */ buttonsStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var idsButtons = [];
var groupsButton = {};
var buttonsData = {};

var init = function init(_id) {
  var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var data = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve) {
    if (idsButtons.indexOf(_id) < 0) {
      idsButtons.push(_id);

      if (group.length > 0) {
        if (!groupsButton[group]) {
          groupsButton[group] = [_id];
        } else {
          groupsButton[group].push(_id);
        }
      }

      buttonsData[_id] = _objectSpread({}, data);
      buttonsData[_id].watchers = [];
      buttonsData[_id].triggerWatcher = [];

      if (group.length > 0) {
        buttonsData[_id].group = group;
      }

      resolve();
    } else {
      resolve();
    }
  });
};

var getStatus = function getStatus(_id) {
  return buttonsData[_id];
};

var addWatcher = function addWatcher(_id, fn, groupTriggerFn) {
  if (buttonsData[_id]) {
    var button = buttonsData[_id];
    button.watchers.push(fn);

    if (groupTriggerFn) {
      button.triggerWatcher.push(groupTriggerFn);
    }
  }
};

var runWatcher = function runWatcher(_id) {
  var watchers = buttonsData[_id].watchers;

  for (var wKey in watchers) {
    watchers[wKey]();
  }
};

var runTriggerWatcher = function runTriggerWatcher(_id) {
  var watchers = buttonsData[_id].triggerWatcher;

  for (var wKey in watchers) {
    watchers[wKey]();
  }
};

var changeStatus = function changeStatus(_id, data) {
  var notRunWatcher = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (buttonsData[_id]) {
    var button = buttonsData[_id];
    var keys = Object.keys(data);
    keys.forEach(function (key) {
      buttonsData[_id][key] = data[key];
    });

    if (!notRunWatcher) {
      runWatcher(_id);

      if (button.group) {
        groupsButton[button.group].filter(function (id) {
          return id !== _id;
        }).forEach(function (id) {
          runTriggerWatcher(id);
        });
      }
    }
  }
};

var buttonsStore = vue__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
  init: init,
  getStatus: getStatus,
  changeStatus: changeStatus,
  addWatcher: addWatcher
});

/***/ })

}]);