(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("vue-flex-table", ["lodash"], factory);
	else if(typeof exports === 'object')
		exports["vue-flex-table"] = factory(require("lodash"));
	else
		root["vue-flex-table"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/VueFlexTable.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlexTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VueFlexTable',
  props: {
    data: {
      type: Array,
      required: true
    },
    sortBy: {
      type: Array,
      required: false
    }
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data: function data() {
    return {
      sort_by: 'id',
      sort_type: 'asc',
      hasData: true,
      checkAllGroup: []
    };
  },
  computed: {
    columns: function columns() {
      return Object.keys(this.data[0]);
    }
  },
  methods: {
    finalData: function finalData() {
      var data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(this.data, [this.sort_by], [this.sort_type]);

      this.hasData = data.length > 0;
      return data;
    },
    hasSort: function hasSort(col) {
      return this.sortBy.indexOf(col) > -1;
    },
    sortList: function sortList(sortItem, sortType) {
      this.sort_by = sortItem;
      this.sort_type = sortType;
    },
    handleScroll: function handleScroll($event) {
      this.$emit('handlScroll', $event);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);", ""]);
// Module
exports.push([module.i, "\n[data-v-c0c4d2b6]::-webkit-scrollbar {\r\n  width: 10px;\n}\r\n/* Track */\n[data-v-c0c4d2b6]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n/* Handle */\n[data-v-c0c4d2b6]::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 6px;\n}\r\n/* Handle on hover */\n[data-v-c0c4d2b6]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\n.flex-table[data-v-c0c4d2b6] {\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\r\n  font-size: 16px;\n}\n.flex-table-body[data-v-c0c4d2b6] {\r\n  max-height: 40rem ;\r\n  overflow-y: auto;\r\n  border: 1px solid #e5e5e5;\n}\n.table-header[data-v-c0c4d2b6] {\r\n  background-color: #f8f8f9 !important;\r\n  border: 1px solid #e5e5e5;\r\n  padding: 10px 16px !important;\r\n  font-weight: bold;\n}\n.table-header[data-v-c0c4d2b6], .table-row[data-v-c0c4d2b6] {\r\n  table-layout: fixed;\r\n  border-collapse: collapse;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  padding: 8px 16px;\r\n  border-bottom: 1px solid #e5e5e5;\n}\n.table-col .table-sort[data-v-c0c4d2b6] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 4px;\r\n  margin-left: 6px;\n}\n.table-col .table-sort em[data-v-c0c4d2b6] {\r\n  line-height: 10px !important;\r\n  cursor: pointer;\n}\n.table-col[data-v-c0c4d2b6] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-basis: 100%;\r\n  flex: 1;\r\n  text-align: left;\r\n  word-break: break-word !important;\r\n  padding: 0 16px;\n}\n.table-row .table-col[data-v-c0c4d2b6] {\r\n  font-size: 16px !important;\n}\n.text-center[data-v-c0c4d2b6] {\r\n  text-align: center;\n}\n.ion[data-v-c0c4d2b6], .ionicons[data-v-c0c4d2b6], .ion-alert[data-v-c0c4d2b6]:before, .ion-alert-circled[data-v-c0c4d2b6]:before, .ion-android-add[data-v-c0c4d2b6]:before, .ion-android-add-circle[data-v-c0c4d2b6]:before, .ion-android-alarm-clock[data-v-c0c4d2b6]:before, .ion-android-alert[data-v-c0c4d2b6]:before, .ion-android-apps[data-v-c0c4d2b6]:before, .ion-android-archive[data-v-c0c4d2b6]:before, .ion-android-arrow-back[data-v-c0c4d2b6]:before, .ion-android-arrow-down[data-v-c0c4d2b6]:before, .ion-android-arrow-dropdown[data-v-c0c4d2b6]:before, .ion-android-arrow-dropdown-circle[data-v-c0c4d2b6]:before, .ion-android-arrow-dropleft[data-v-c0c4d2b6]:before, .ion-android-arrow-dropleft-circle[data-v-c0c4d2b6]:before, .ion-android-arrow-dropright[data-v-c0c4d2b6]:before, .ion-android-arrow-dropright-circle[data-v-c0c4d2b6]:before, .ion-android-arrow-dropup[data-v-c0c4d2b6]:before, .ion-android-arrow-dropup-circle[data-v-c0c4d2b6]:before, .ion-android-arrow-forward[data-v-c0c4d2b6]:before, .ion-android-arrow-up[data-v-c0c4d2b6]:before, .ion-android-attach[data-v-c0c4d2b6]:before, .ion-android-bar[data-v-c0c4d2b6]:before, .ion-android-bicycle[data-v-c0c4d2b6]:before, .ion-android-boat[data-v-c0c4d2b6]:before, .ion-android-bookmark[data-v-c0c4d2b6]:before, .ion-android-bulb[data-v-c0c4d2b6]:before, .ion-android-bus[data-v-c0c4d2b6]:before, .ion-android-calendar[data-v-c0c4d2b6]:before, .ion-android-call[data-v-c0c4d2b6]:before, .ion-android-camera[data-v-c0c4d2b6]:before, .ion-android-cancel[data-v-c0c4d2b6]:before, .ion-android-car[data-v-c0c4d2b6]:before, .ion-android-cart[data-v-c0c4d2b6]:before, .ion-android-chat[data-v-c0c4d2b6]:before, .ion-android-checkbox[data-v-c0c4d2b6]:before, .ion-android-checkbox-blank[data-v-c0c4d2b6]:before, .ion-android-checkbox-outline[data-v-c0c4d2b6]:before, .ion-android-checkbox-outline-blank[data-v-c0c4d2b6]:before, .ion-android-checkmark-circle[data-v-c0c4d2b6]:before, .ion-android-clipboard[data-v-c0c4d2b6]:before, .ion-android-close[data-v-c0c4d2b6]:before, .ion-android-cloud[data-v-c0c4d2b6]:before, .ion-android-cloud-circle[data-v-c0c4d2b6]:before, .ion-android-cloud-done[data-v-c0c4d2b6]:before, .ion-android-cloud-outline[data-v-c0c4d2b6]:before, .ion-android-color-palette[data-v-c0c4d2b6]:before, .ion-android-compass[data-v-c0c4d2b6]:before, .ion-android-contact[data-v-c0c4d2b6]:before, .ion-android-contacts[data-v-c0c4d2b6]:before, .ion-android-contract[data-v-c0c4d2b6]:before, .ion-android-create[data-v-c0c4d2b6]:before, .ion-android-delete[data-v-c0c4d2b6]:before, .ion-android-desktop[data-v-c0c4d2b6]:before, .ion-android-document[data-v-c0c4d2b6]:before, .ion-android-done[data-v-c0c4d2b6]:before, .ion-android-done-all[data-v-c0c4d2b6]:before, .ion-android-download[data-v-c0c4d2b6]:before, .ion-android-drafts[data-v-c0c4d2b6]:before, .ion-android-exit[data-v-c0c4d2b6]:before, .ion-android-expand[data-v-c0c4d2b6]:before, .ion-android-favorite[data-v-c0c4d2b6]:before, .ion-android-favorite-outline[data-v-c0c4d2b6]:before, .ion-android-film[data-v-c0c4d2b6]:before, .ion-android-folder[data-v-c0c4d2b6]:before, .ion-android-folder-open[data-v-c0c4d2b6]:before, .ion-android-funnel[data-v-c0c4d2b6]:before, .ion-android-globe[data-v-c0c4d2b6]:before, .ion-android-hand[data-v-c0c4d2b6]:before, .ion-android-hangout[data-v-c0c4d2b6]:before, .ion-android-happy[data-v-c0c4d2b6]:before, .ion-android-home[data-v-c0c4d2b6]:before, .ion-android-image[data-v-c0c4d2b6]:before, .ion-android-laptop[data-v-c0c4d2b6]:before, .ion-android-list[data-v-c0c4d2b6]:before, .ion-android-locate[data-v-c0c4d2b6]:before, .ion-android-lock[data-v-c0c4d2b6]:before, .ion-android-mail[data-v-c0c4d2b6]:before, .ion-android-map[data-v-c0c4d2b6]:before, .ion-android-menu[data-v-c0c4d2b6]:before, .ion-android-microphone[data-v-c0c4d2b6]:before, .ion-android-microphone-off[data-v-c0c4d2b6]:before, .ion-android-more-horizontal[data-v-c0c4d2b6]:before, .ion-android-more-vertical[data-v-c0c4d2b6]:before, .ion-android-navigate[data-v-c0c4d2b6]:before, .ion-android-notifications[data-v-c0c4d2b6]:before, .ion-android-notifications-none[data-v-c0c4d2b6]:before, .ion-android-notifications-off[data-v-c0c4d2b6]:before, .ion-android-open[data-v-c0c4d2b6]:before, .ion-android-options[data-v-c0c4d2b6]:before, .ion-android-people[data-v-c0c4d2b6]:before, .ion-android-person[data-v-c0c4d2b6]:before, .ion-android-person-add[data-v-c0c4d2b6]:before, .ion-android-phone-landscape[data-v-c0c4d2b6]:before, .ion-android-phone-portrait[data-v-c0c4d2b6]:before, .ion-android-pin[data-v-c0c4d2b6]:before, .ion-android-plane[data-v-c0c4d2b6]:before, .ion-android-playstore[data-v-c0c4d2b6]:before, .ion-android-print[data-v-c0c4d2b6]:before, .ion-android-radio-button-off[data-v-c0c4d2b6]:before, .ion-android-radio-button-on[data-v-c0c4d2b6]:before, .ion-android-refresh[data-v-c0c4d2b6]:before, .ion-android-remove[data-v-c0c4d2b6]:before, .ion-android-remove-circle[data-v-c0c4d2b6]:before, .ion-android-restaurant[data-v-c0c4d2b6]:before, .ion-android-sad[data-v-c0c4d2b6]:before, .ion-android-search[data-v-c0c4d2b6]:before, .ion-android-send[data-v-c0c4d2b6]:before, .ion-android-settings[data-v-c0c4d2b6]:before, .ion-android-share[data-v-c0c4d2b6]:before, .ion-android-share-alt[data-v-c0c4d2b6]:before, .ion-android-star[data-v-c0c4d2b6]:before, .ion-android-star-half[data-v-c0c4d2b6]:before, .ion-android-star-outline[data-v-c0c4d2b6]:before, .ion-android-stopwatch[data-v-c0c4d2b6]:before, .ion-android-subway[data-v-c0c4d2b6]:before, .ion-android-sunny[data-v-c0c4d2b6]:before, .ion-android-sync[data-v-c0c4d2b6]:before, .ion-android-textsms[data-v-c0c4d2b6]:before, .ion-android-time[data-v-c0c4d2b6]:before, .ion-android-train[data-v-c0c4d2b6]:before, .ion-android-unlock[data-v-c0c4d2b6]:before, .ion-android-upload[data-v-c0c4d2b6]:before, .ion-android-volume-down[data-v-c0c4d2b6]:before, .ion-android-volume-mute[data-v-c0c4d2b6]:before, .ion-android-volume-off[data-v-c0c4d2b6]:before, .ion-android-volume-up[data-v-c0c4d2b6]:before, .ion-android-walk[data-v-c0c4d2b6]:before, .ion-android-warning[data-v-c0c4d2b6]:before, .ion-android-watch[data-v-c0c4d2b6]:before, .ion-android-wifi[data-v-c0c4d2b6]:before, .ion-aperture[data-v-c0c4d2b6]:before, .ion-archive[data-v-c0c4d2b6]:before, .ion-arrow-down-a[data-v-c0c4d2b6]:before, .ion-arrow-down-b[data-v-c0c4d2b6]:before, .ion-arrow-down-c[data-v-c0c4d2b6]:before, .ion-arrow-expand[data-v-c0c4d2b6]:before, .ion-arrow-graph-down-left[data-v-c0c4d2b6]:before, .ion-arrow-graph-down-right[data-v-c0c4d2b6]:before, .ion-arrow-graph-up-left[data-v-c0c4d2b6]:before, .ion-arrow-graph-up-right[data-v-c0c4d2b6]:before, .ion-arrow-left-a[data-v-c0c4d2b6]:before, .ion-arrow-left-b[data-v-c0c4d2b6]:before, .ion-arrow-left-c[data-v-c0c4d2b6]:before, .ion-arrow-move[data-v-c0c4d2b6]:before, .ion-arrow-resize[data-v-c0c4d2b6]:before, .ion-arrow-return-left[data-v-c0c4d2b6]:before, .ion-arrow-return-right[data-v-c0c4d2b6]:before, .ion-arrow-right-a[data-v-c0c4d2b6]:before, .ion-arrow-right-b[data-v-c0c4d2b6]:before, .ion-arrow-right-c[data-v-c0c4d2b6]:before, .ion-arrow-shrink[data-v-c0c4d2b6]:before, .ion-arrow-swap[data-v-c0c4d2b6]:before, .ion-arrow-up-a[data-v-c0c4d2b6]:before, .ion-arrow-up-b[data-v-c0c4d2b6]:before, .ion-arrow-up-c[data-v-c0c4d2b6]:before, .ion-asterisk[data-v-c0c4d2b6]:before, .ion-at[data-v-c0c4d2b6]:before, .ion-backspace[data-v-c0c4d2b6]:before, .ion-backspace-outline[data-v-c0c4d2b6]:before, .ion-bag[data-v-c0c4d2b6]:before, .ion-battery-charging[data-v-c0c4d2b6]:before, .ion-battery-empty[data-v-c0c4d2b6]:before, .ion-battery-full[data-v-c0c4d2b6]:before, .ion-battery-half[data-v-c0c4d2b6]:before, .ion-battery-low[data-v-c0c4d2b6]:before, .ion-beaker[data-v-c0c4d2b6]:before, .ion-beer[data-v-c0c4d2b6]:before, .ion-bluetooth[data-v-c0c4d2b6]:before, .ion-bonfire[data-v-c0c4d2b6]:before, .ion-bookmark[data-v-c0c4d2b6]:before, .ion-bowtie[data-v-c0c4d2b6]:before, .ion-briefcase[data-v-c0c4d2b6]:before, .ion-bug[data-v-c0c4d2b6]:before, .ion-calculator[data-v-c0c4d2b6]:before, .ion-calendar[data-v-c0c4d2b6]:before, .ion-camera[data-v-c0c4d2b6]:before, .ion-card[data-v-c0c4d2b6]:before, .ion-cash[data-v-c0c4d2b6]:before, .ion-chatbox[data-v-c0c4d2b6]:before, .ion-chatbox-working[data-v-c0c4d2b6]:before, .ion-chatboxes[data-v-c0c4d2b6]:before, .ion-chatbubble[data-v-c0c4d2b6]:before, .ion-chatbubble-working[data-v-c0c4d2b6]:before, .ion-chatbubbles[data-v-c0c4d2b6]:before, .ion-checkmark[data-v-c0c4d2b6]:before, .ion-checkmark-circled[data-v-c0c4d2b6]:before, .ion-checkmark-round[data-v-c0c4d2b6]:before, .ion-chevron-down[data-v-c0c4d2b6]:before, .ion-chevron-left[data-v-c0c4d2b6]:before, .ion-chevron-right[data-v-c0c4d2b6]:before, .ion-chevron-up[data-v-c0c4d2b6]:before, .ion-clipboard[data-v-c0c4d2b6]:before, .ion-clock[data-v-c0c4d2b6]:before, .ion-close[data-v-c0c4d2b6]:before, .ion-close-circled[data-v-c0c4d2b6]:before, .ion-close-round[data-v-c0c4d2b6]:before, .ion-closed-captioning[data-v-c0c4d2b6]:before, .ion-cloud[data-v-c0c4d2b6]:before, .ion-code[data-v-c0c4d2b6]:before, .ion-code-download[data-v-c0c4d2b6]:before, .ion-code-working[data-v-c0c4d2b6]:before, .ion-coffee[data-v-c0c4d2b6]:before, .ion-compass[data-v-c0c4d2b6]:before, .ion-compose[data-v-c0c4d2b6]:before, .ion-connection-bars[data-v-c0c4d2b6]:before, .ion-contrast[data-v-c0c4d2b6]:before, .ion-crop[data-v-c0c4d2b6]:before, .ion-cube[data-v-c0c4d2b6]:before, .ion-disc[data-v-c0c4d2b6]:before, .ion-document[data-v-c0c4d2b6]:before, .ion-document-text[data-v-c0c4d2b6]:before, .ion-drag[data-v-c0c4d2b6]:before, .ion-earth[data-v-c0c4d2b6]:before, .ion-easel[data-v-c0c4d2b6]:before, .ion-edit[data-v-c0c4d2b6]:before, .ion-egg[data-v-c0c4d2b6]:before, .ion-eject[data-v-c0c4d2b6]:before, .ion-email[data-v-c0c4d2b6]:before, .ion-email-unread[data-v-c0c4d2b6]:before, .ion-erlenmeyer-flask[data-v-c0c4d2b6]:before, .ion-erlenmeyer-flask-bubbles[data-v-c0c4d2b6]:before, .ion-eye[data-v-c0c4d2b6]:before, .ion-eye-disabled[data-v-c0c4d2b6]:before, .ion-female[data-v-c0c4d2b6]:before, .ion-filing[data-v-c0c4d2b6]:before, .ion-film-marker[data-v-c0c4d2b6]:before, .ion-fireball[data-v-c0c4d2b6]:before, .ion-flag[data-v-c0c4d2b6]:before, .ion-flame[data-v-c0c4d2b6]:before, .ion-flash[data-v-c0c4d2b6]:before, .ion-flash-off[data-v-c0c4d2b6]:before, .ion-folder[data-v-c0c4d2b6]:before, .ion-fork[data-v-c0c4d2b6]:before, .ion-fork-repo[data-v-c0c4d2b6]:before, .ion-forward[data-v-c0c4d2b6]:before, .ion-funnel[data-v-c0c4d2b6]:before, .ion-gear-a[data-v-c0c4d2b6]:before, .ion-gear-b[data-v-c0c4d2b6]:before, .ion-grid[data-v-c0c4d2b6]:before, .ion-hammer[data-v-c0c4d2b6]:before, .ion-happy[data-v-c0c4d2b6]:before, .ion-happy-outline[data-v-c0c4d2b6]:before, .ion-headphone[data-v-c0c4d2b6]:before, .ion-heart[data-v-c0c4d2b6]:before, .ion-heart-broken[data-v-c0c4d2b6]:before, .ion-help[data-v-c0c4d2b6]:before, .ion-help-buoy[data-v-c0c4d2b6]:before, .ion-help-circled[data-v-c0c4d2b6]:before, .ion-home[data-v-c0c4d2b6]:before, .ion-icecream[data-v-c0c4d2b6]:before, .ion-image[data-v-c0c4d2b6]:before, .ion-images[data-v-c0c4d2b6]:before, .ion-information[data-v-c0c4d2b6]:before, .ion-information-circled[data-v-c0c4d2b6]:before, .ion-ionic[data-v-c0c4d2b6]:before, .ion-ios-alarm[data-v-c0c4d2b6]:before, .ion-ios-alarm-outline[data-v-c0c4d2b6]:before, .ion-ios-albums[data-v-c0c4d2b6]:before, .ion-ios-albums-outline[data-v-c0c4d2b6]:before, .ion-ios-americanfootball[data-v-c0c4d2b6]:before, .ion-ios-americanfootball-outline[data-v-c0c4d2b6]:before, .ion-ios-analytics[data-v-c0c4d2b6]:before, .ion-ios-analytics-outline[data-v-c0c4d2b6]:before, .ion-ios-arrow-back[data-v-c0c4d2b6]:before, .ion-ios-arrow-down[data-v-c0c4d2b6]:before, .ion-ios-arrow-forward[data-v-c0c4d2b6]:before, .ion-ios-arrow-left[data-v-c0c4d2b6]:before, .ion-ios-arrow-right[data-v-c0c4d2b6]:before, .ion-ios-arrow-thin-down[data-v-c0c4d2b6]:before, .ion-ios-arrow-thin-left[data-v-c0c4d2b6]:before, .ion-ios-arrow-thin-right[data-v-c0c4d2b6]:before, .ion-ios-arrow-thin-up[data-v-c0c4d2b6]:before, .ion-ios-arrow-up[data-v-c0c4d2b6]:before, .ion-ios-at[data-v-c0c4d2b6]:before, .ion-ios-at-outline[data-v-c0c4d2b6]:before, .ion-ios-barcode[data-v-c0c4d2b6]:before, .ion-ios-barcode-outline[data-v-c0c4d2b6]:before, .ion-ios-baseball[data-v-c0c4d2b6]:before, .ion-ios-baseball-outline[data-v-c0c4d2b6]:before, .ion-ios-basketball[data-v-c0c4d2b6]:before, .ion-ios-basketball-outline[data-v-c0c4d2b6]:before, .ion-ios-bell[data-v-c0c4d2b6]:before, .ion-ios-bell-outline[data-v-c0c4d2b6]:before, .ion-ios-body[data-v-c0c4d2b6]:before, .ion-ios-body-outline[data-v-c0c4d2b6]:before, .ion-ios-bolt[data-v-c0c4d2b6]:before, .ion-ios-bolt-outline[data-v-c0c4d2b6]:before, .ion-ios-book[data-v-c0c4d2b6]:before, .ion-ios-book-outline[data-v-c0c4d2b6]:before, .ion-ios-bookmarks[data-v-c0c4d2b6]:before, .ion-ios-bookmarks-outline[data-v-c0c4d2b6]:before, .ion-ios-box[data-v-c0c4d2b6]:before, .ion-ios-box-outline[data-v-c0c4d2b6]:before, .ion-ios-briefcase[data-v-c0c4d2b6]:before, .ion-ios-briefcase-outline[data-v-c0c4d2b6]:before, .ion-ios-browsers[data-v-c0c4d2b6]:before, .ion-ios-browsers-outline[data-v-c0c4d2b6]:before, .ion-ios-calculator[data-v-c0c4d2b6]:before, .ion-ios-calculator-outline[data-v-c0c4d2b6]:before, .ion-ios-calendar[data-v-c0c4d2b6]:before, .ion-ios-calendar-outline[data-v-c0c4d2b6]:before, .ion-ios-camera[data-v-c0c4d2b6]:before, .ion-ios-camera-outline[data-v-c0c4d2b6]:before, .ion-ios-cart[data-v-c0c4d2b6]:before, .ion-ios-cart-outline[data-v-c0c4d2b6]:before, .ion-ios-chatboxes[data-v-c0c4d2b6]:before, .ion-ios-chatboxes-outline[data-v-c0c4d2b6]:before, .ion-ios-chatbubble[data-v-c0c4d2b6]:before, .ion-ios-chatbubble-outline[data-v-c0c4d2b6]:before, .ion-ios-checkmark[data-v-c0c4d2b6]:before, .ion-ios-checkmark-empty[data-v-c0c4d2b6]:before, .ion-ios-checkmark-outline[data-v-c0c4d2b6]:before, .ion-ios-circle-filled[data-v-c0c4d2b6]:before, .ion-ios-circle-outline[data-v-c0c4d2b6]:before, .ion-ios-clock[data-v-c0c4d2b6]:before, .ion-ios-clock-outline[data-v-c0c4d2b6]:before, .ion-ios-close[data-v-c0c4d2b6]:before, .ion-ios-close-empty[data-v-c0c4d2b6]:before, .ion-ios-close-outline[data-v-c0c4d2b6]:before, .ion-ios-cloud[data-v-c0c4d2b6]:before, .ion-ios-cloud-download[data-v-c0c4d2b6]:before, .ion-ios-cloud-download-outline[data-v-c0c4d2b6]:before, .ion-ios-cloud-outline[data-v-c0c4d2b6]:before, .ion-ios-cloud-upload[data-v-c0c4d2b6]:before, .ion-ios-cloud-upload-outline[data-v-c0c4d2b6]:before, .ion-ios-cloudy[data-v-c0c4d2b6]:before, .ion-ios-cloudy-night[data-v-c0c4d2b6]:before, .ion-ios-cloudy-night-outline[data-v-c0c4d2b6]:before, .ion-ios-cloudy-outline[data-v-c0c4d2b6]:before, .ion-ios-cog[data-v-c0c4d2b6]:before, .ion-ios-cog-outline[data-v-c0c4d2b6]:before, .ion-ios-color-filter[data-v-c0c4d2b6]:before, .ion-ios-color-filter-outline[data-v-c0c4d2b6]:before, .ion-ios-color-wand[data-v-c0c4d2b6]:before, .ion-ios-color-wand-outline[data-v-c0c4d2b6]:before, .ion-ios-compose[data-v-c0c4d2b6]:before, .ion-ios-compose-outline[data-v-c0c4d2b6]:before, .ion-ios-contact[data-v-c0c4d2b6]:before, .ion-ios-contact-outline[data-v-c0c4d2b6]:before, .ion-ios-copy[data-v-c0c4d2b6]:before, .ion-ios-copy-outline[data-v-c0c4d2b6]:before, .ion-ios-crop[data-v-c0c4d2b6]:before, .ion-ios-crop-strong[data-v-c0c4d2b6]:before, .ion-ios-download[data-v-c0c4d2b6]:before, .ion-ios-download-outline[data-v-c0c4d2b6]:before, .ion-ios-drag[data-v-c0c4d2b6]:before, .ion-ios-email[data-v-c0c4d2b6]:before, .ion-ios-email-outline[data-v-c0c4d2b6]:before, .ion-ios-eye[data-v-c0c4d2b6]:before, .ion-ios-eye-outline[data-v-c0c4d2b6]:before, .ion-ios-fastforward[data-v-c0c4d2b6]:before, .ion-ios-fastforward-outline[data-v-c0c4d2b6]:before, .ion-ios-filing[data-v-c0c4d2b6]:before, .ion-ios-filing-outline[data-v-c0c4d2b6]:before, .ion-ios-film[data-v-c0c4d2b6]:before, .ion-ios-film-outline[data-v-c0c4d2b6]:before, .ion-ios-flag[data-v-c0c4d2b6]:before, .ion-ios-flag-outline[data-v-c0c4d2b6]:before, .ion-ios-flame[data-v-c0c4d2b6]:before, .ion-ios-flame-outline[data-v-c0c4d2b6]:before, .ion-ios-flask[data-v-c0c4d2b6]:before, .ion-ios-flask-outline[data-v-c0c4d2b6]:before, .ion-ios-flower[data-v-c0c4d2b6]:before, .ion-ios-flower-outline[data-v-c0c4d2b6]:before, .ion-ios-folder[data-v-c0c4d2b6]:before, .ion-ios-folder-outline[data-v-c0c4d2b6]:before, .ion-ios-football[data-v-c0c4d2b6]:before, .ion-ios-football-outline[data-v-c0c4d2b6]:before, .ion-ios-game-controller-a[data-v-c0c4d2b6]:before, .ion-ios-game-controller-a-outline[data-v-c0c4d2b6]:before, .ion-ios-game-controller-b[data-v-c0c4d2b6]:before, .ion-ios-game-controller-b-outline[data-v-c0c4d2b6]:before, .ion-ios-gear[data-v-c0c4d2b6]:before, .ion-ios-gear-outline[data-v-c0c4d2b6]:before, .ion-ios-glasses[data-v-c0c4d2b6]:before, .ion-ios-glasses-outline[data-v-c0c4d2b6]:before, .ion-ios-grid-view[data-v-c0c4d2b6]:before, .ion-ios-grid-view-outline[data-v-c0c4d2b6]:before, .ion-ios-heart[data-v-c0c4d2b6]:before, .ion-ios-heart-outline[data-v-c0c4d2b6]:before, .ion-ios-help[data-v-c0c4d2b6]:before, .ion-ios-help-empty[data-v-c0c4d2b6]:before, .ion-ios-help-outline[data-v-c0c4d2b6]:before, .ion-ios-home[data-v-c0c4d2b6]:before, .ion-ios-home-outline[data-v-c0c4d2b6]:before, .ion-ios-infinite[data-v-c0c4d2b6]:before, .ion-ios-infinite-outline[data-v-c0c4d2b6]:before, .ion-ios-information[data-v-c0c4d2b6]:before, .ion-ios-information-empty[data-v-c0c4d2b6]:before, .ion-ios-information-outline[data-v-c0c4d2b6]:before, .ion-ios-ionic-outline[data-v-c0c4d2b6]:before, .ion-ios-keypad[data-v-c0c4d2b6]:before, .ion-ios-keypad-outline[data-v-c0c4d2b6]:before, .ion-ios-lightbulb[data-v-c0c4d2b6]:before, .ion-ios-lightbulb-outline[data-v-c0c4d2b6]:before, .ion-ios-list[data-v-c0c4d2b6]:before, .ion-ios-list-outline[data-v-c0c4d2b6]:before, .ion-ios-location[data-v-c0c4d2b6]:before, .ion-ios-location-outline[data-v-c0c4d2b6]:before, .ion-ios-locked[data-v-c0c4d2b6]:before, .ion-ios-locked-outline[data-v-c0c4d2b6]:before, .ion-ios-loop[data-v-c0c4d2b6]:before, .ion-ios-loop-strong[data-v-c0c4d2b6]:before, .ion-ios-medical[data-v-c0c4d2b6]:before, .ion-ios-medical-outline[data-v-c0c4d2b6]:before, .ion-ios-medkit[data-v-c0c4d2b6]:before, .ion-ios-medkit-outline[data-v-c0c4d2b6]:before, .ion-ios-mic[data-v-c0c4d2b6]:before, .ion-ios-mic-off[data-v-c0c4d2b6]:before, .ion-ios-mic-outline[data-v-c0c4d2b6]:before, .ion-ios-minus[data-v-c0c4d2b6]:before, .ion-ios-minus-empty[data-v-c0c4d2b6]:before, .ion-ios-minus-outline[data-v-c0c4d2b6]:before, .ion-ios-monitor[data-v-c0c4d2b6]:before, .ion-ios-monitor-outline[data-v-c0c4d2b6]:before, .ion-ios-moon[data-v-c0c4d2b6]:before, .ion-ios-moon-outline[data-v-c0c4d2b6]:before, .ion-ios-more[data-v-c0c4d2b6]:before, .ion-ios-more-outline[data-v-c0c4d2b6]:before, .ion-ios-musical-note[data-v-c0c4d2b6]:before, .ion-ios-musical-notes[data-v-c0c4d2b6]:before, .ion-ios-navigate[data-v-c0c4d2b6]:before, .ion-ios-navigate-outline[data-v-c0c4d2b6]:before, .ion-ios-nutrition[data-v-c0c4d2b6]:before, .ion-ios-nutrition-outline[data-v-c0c4d2b6]:before, .ion-ios-paper[data-v-c0c4d2b6]:before, .ion-ios-paper-outline[data-v-c0c4d2b6]:before, .ion-ios-paperplane[data-v-c0c4d2b6]:before, .ion-ios-paperplane-outline[data-v-c0c4d2b6]:before, .ion-ios-partlysunny[data-v-c0c4d2b6]:before, .ion-ios-partlysunny-outline[data-v-c0c4d2b6]:before, .ion-ios-pause[data-v-c0c4d2b6]:before, .ion-ios-pause-outline[data-v-c0c4d2b6]:before, .ion-ios-paw[data-v-c0c4d2b6]:before, .ion-ios-paw-outline[data-v-c0c4d2b6]:before, .ion-ios-people[data-v-c0c4d2b6]:before, .ion-ios-people-outline[data-v-c0c4d2b6]:before, .ion-ios-person[data-v-c0c4d2b6]:before, .ion-ios-person-outline[data-v-c0c4d2b6]:before, .ion-ios-personadd[data-v-c0c4d2b6]:before, .ion-ios-personadd-outline[data-v-c0c4d2b6]:before, .ion-ios-photos[data-v-c0c4d2b6]:before, .ion-ios-photos-outline[data-v-c0c4d2b6]:before, .ion-ios-pie[data-v-c0c4d2b6]:before, .ion-ios-pie-outline[data-v-c0c4d2b6]:before, .ion-ios-pint[data-v-c0c4d2b6]:before, .ion-ios-pint-outline[data-v-c0c4d2b6]:before, .ion-ios-play[data-v-c0c4d2b6]:before, .ion-ios-play-outline[data-v-c0c4d2b6]:before, .ion-ios-plus[data-v-c0c4d2b6]:before, .ion-ios-plus-empty[data-v-c0c4d2b6]:before, .ion-ios-plus-outline[data-v-c0c4d2b6]:before, .ion-ios-pricetag[data-v-c0c4d2b6]:before, .ion-ios-pricetag-outline[data-v-c0c4d2b6]:before, .ion-ios-pricetags[data-v-c0c4d2b6]:before, .ion-ios-pricetags-outline[data-v-c0c4d2b6]:before, .ion-ios-printer[data-v-c0c4d2b6]:before, .ion-ios-printer-outline[data-v-c0c4d2b6]:before, .ion-ios-pulse[data-v-c0c4d2b6]:before, .ion-ios-pulse-strong[data-v-c0c4d2b6]:before, .ion-ios-rainy[data-v-c0c4d2b6]:before, .ion-ios-rainy-outline[data-v-c0c4d2b6]:before, .ion-ios-recording[data-v-c0c4d2b6]:before, .ion-ios-recording-outline[data-v-c0c4d2b6]:before, .ion-ios-redo[data-v-c0c4d2b6]:before, .ion-ios-redo-outline[data-v-c0c4d2b6]:before, .ion-ios-refresh[data-v-c0c4d2b6]:before, .ion-ios-refresh-empty[data-v-c0c4d2b6]:before, .ion-ios-refresh-outline[data-v-c0c4d2b6]:before, .ion-ios-reload[data-v-c0c4d2b6]:before, .ion-ios-reverse-camera[data-v-c0c4d2b6]:before, .ion-ios-reverse-camera-outline[data-v-c0c4d2b6]:before, .ion-ios-rewind[data-v-c0c4d2b6]:before, .ion-ios-rewind-outline[data-v-c0c4d2b6]:before, .ion-ios-rose[data-v-c0c4d2b6]:before, .ion-ios-rose-outline[data-v-c0c4d2b6]:before, .ion-ios-search[data-v-c0c4d2b6]:before, .ion-ios-search-strong[data-v-c0c4d2b6]:before, .ion-ios-settings[data-v-c0c4d2b6]:before, .ion-ios-settings-strong[data-v-c0c4d2b6]:before, .ion-ios-shuffle[data-v-c0c4d2b6]:before, .ion-ios-shuffle-strong[data-v-c0c4d2b6]:before, .ion-ios-skipbackward[data-v-c0c4d2b6]:before, .ion-ios-skipbackward-outline[data-v-c0c4d2b6]:before, .ion-ios-skipforward[data-v-c0c4d2b6]:before, .ion-ios-skipforward-outline[data-v-c0c4d2b6]:before, .ion-ios-snowy[data-v-c0c4d2b6]:before, .ion-ios-speedometer[data-v-c0c4d2b6]:before, .ion-ios-speedometer-outline[data-v-c0c4d2b6]:before, .ion-ios-star[data-v-c0c4d2b6]:before, .ion-ios-star-half[data-v-c0c4d2b6]:before, .ion-ios-star-outline[data-v-c0c4d2b6]:before, .ion-ios-stopwatch[data-v-c0c4d2b6]:before, .ion-ios-stopwatch-outline[data-v-c0c4d2b6]:before, .ion-ios-sunny[data-v-c0c4d2b6]:before, .ion-ios-sunny-outline[data-v-c0c4d2b6]:before, .ion-ios-telephone[data-v-c0c4d2b6]:before, .ion-ios-telephone-outline[data-v-c0c4d2b6]:before, .ion-ios-tennisball[data-v-c0c4d2b6]:before, .ion-ios-tennisball-outline[data-v-c0c4d2b6]:before, .ion-ios-thunderstorm[data-v-c0c4d2b6]:before, .ion-ios-thunderstorm-outline[data-v-c0c4d2b6]:before, .ion-ios-time[data-v-c0c4d2b6]:before, .ion-ios-time-outline[data-v-c0c4d2b6]:before, .ion-ios-timer[data-v-c0c4d2b6]:before, .ion-ios-timer-outline[data-v-c0c4d2b6]:before, .ion-ios-toggle[data-v-c0c4d2b6]:before, .ion-ios-toggle-outline[data-v-c0c4d2b6]:before, .ion-ios-trash[data-v-c0c4d2b6]:before, .ion-ios-trash-outline[data-v-c0c4d2b6]:before, .ion-ios-undo[data-v-c0c4d2b6]:before, .ion-ios-undo-outline[data-v-c0c4d2b6]:before, .ion-ios-unlocked[data-v-c0c4d2b6]:before, .ion-ios-unlocked-outline[data-v-c0c4d2b6]:before, .ion-ios-upload[data-v-c0c4d2b6]:before, .ion-ios-upload-outline[data-v-c0c4d2b6]:before, .ion-ios-videocam[data-v-c0c4d2b6]:before, .ion-ios-videocam-outline[data-v-c0c4d2b6]:before, .ion-ios-volume-high[data-v-c0c4d2b6]:before, .ion-ios-volume-low[data-v-c0c4d2b6]:before, .ion-ios-wineglass[data-v-c0c4d2b6]:before, .ion-ios-wineglass-outline[data-v-c0c4d2b6]:before, .ion-ios-world[data-v-c0c4d2b6]:before, .ion-ios-world-outline[data-v-c0c4d2b6]:before, .ion-ipad[data-v-c0c4d2b6]:before, .ion-iphone[data-v-c0c4d2b6]:before, .ion-ipod[data-v-c0c4d2b6]:before, .ion-jet[data-v-c0c4d2b6]:before, .ion-key[data-v-c0c4d2b6]:before, .ion-knife[data-v-c0c4d2b6]:before, .ion-laptop[data-v-c0c4d2b6]:before, .ion-leaf[data-v-c0c4d2b6]:before, .ion-levels[data-v-c0c4d2b6]:before, .ion-lightbulb[data-v-c0c4d2b6]:before, .ion-link[data-v-c0c4d2b6]:before, .ion-load-a[data-v-c0c4d2b6]:before, .ion-load-b[data-v-c0c4d2b6]:before, .ion-load-c[data-v-c0c4d2b6]:before, .ion-load-d[data-v-c0c4d2b6]:before, .ion-location[data-v-c0c4d2b6]:before, .ion-lock-combination[data-v-c0c4d2b6]:before, .ion-locked[data-v-c0c4d2b6]:before, .ion-log-in[data-v-c0c4d2b6]:before, .ion-log-out[data-v-c0c4d2b6]:before, .ion-loop[data-v-c0c4d2b6]:before, .ion-magnet[data-v-c0c4d2b6]:before, .ion-male[data-v-c0c4d2b6]:before, .ion-man[data-v-c0c4d2b6]:before, .ion-map[data-v-c0c4d2b6]:before, .ion-medkit[data-v-c0c4d2b6]:before, .ion-merge[data-v-c0c4d2b6]:before, .ion-mic-a[data-v-c0c4d2b6]:before, .ion-mic-b[data-v-c0c4d2b6]:before, .ion-mic-c[data-v-c0c4d2b6]:before, .ion-minus[data-v-c0c4d2b6]:before, .ion-minus-circled[data-v-c0c4d2b6]:before, .ion-minus-round[data-v-c0c4d2b6]:before, .ion-model-s[data-v-c0c4d2b6]:before, .ion-monitor[data-v-c0c4d2b6]:before, .ion-more[data-v-c0c4d2b6]:before, .ion-mouse[data-v-c0c4d2b6]:before, .ion-music-note[data-v-c0c4d2b6]:before, .ion-navicon[data-v-c0c4d2b6]:before, .ion-navicon-round[data-v-c0c4d2b6]:before, .ion-navigate[data-v-c0c4d2b6]:before, .ion-network[data-v-c0c4d2b6]:before, .ion-no-smoking[data-v-c0c4d2b6]:before, .ion-nuclear[data-v-c0c4d2b6]:before, .ion-outlet[data-v-c0c4d2b6]:before, .ion-paintbrush[data-v-c0c4d2b6]:before, .ion-paintbucket[data-v-c0c4d2b6]:before, .ion-paper-airplane[data-v-c0c4d2b6]:before, .ion-paperclip[data-v-c0c4d2b6]:before, .ion-pause[data-v-c0c4d2b6]:before, .ion-person[data-v-c0c4d2b6]:before, .ion-person-add[data-v-c0c4d2b6]:before, .ion-person-stalker[data-v-c0c4d2b6]:before, .ion-pie-graph[data-v-c0c4d2b6]:before, .ion-pin[data-v-c0c4d2b6]:before, .ion-pinpoint[data-v-c0c4d2b6]:before, .ion-pizza[data-v-c0c4d2b6]:before, .ion-plane[data-v-c0c4d2b6]:before, .ion-planet[data-v-c0c4d2b6]:before, .ion-play[data-v-c0c4d2b6]:before, .ion-playstation[data-v-c0c4d2b6]:before, .ion-plus[data-v-c0c4d2b6]:before, .ion-plus-circled[data-v-c0c4d2b6]:before, .ion-plus-round[data-v-c0c4d2b6]:before, .ion-podium[data-v-c0c4d2b6]:before, .ion-pound[data-v-c0c4d2b6]:before, .ion-power[data-v-c0c4d2b6]:before, .ion-pricetag[data-v-c0c4d2b6]:before, .ion-pricetags[data-v-c0c4d2b6]:before, .ion-printer[data-v-c0c4d2b6]:before, .ion-pull-request[data-v-c0c4d2b6]:before, .ion-qr-scanner[data-v-c0c4d2b6]:before, .ion-quote[data-v-c0c4d2b6]:before, .ion-radio-waves[data-v-c0c4d2b6]:before, .ion-record[data-v-c0c4d2b6]:before, .ion-refresh[data-v-c0c4d2b6]:before, .ion-reply[data-v-c0c4d2b6]:before, .ion-reply-all[data-v-c0c4d2b6]:before, .ion-ribbon-a[data-v-c0c4d2b6]:before, .ion-ribbon-b[data-v-c0c4d2b6]:before, .ion-sad[data-v-c0c4d2b6]:before, .ion-sad-outline[data-v-c0c4d2b6]:before, .ion-scissors[data-v-c0c4d2b6]:before, .ion-search[data-v-c0c4d2b6]:before, .ion-settings[data-v-c0c4d2b6]:before, .ion-share[data-v-c0c4d2b6]:before, .ion-shuffle[data-v-c0c4d2b6]:before, .ion-skip-backward[data-v-c0c4d2b6]:before, .ion-skip-forward[data-v-c0c4d2b6]:before, .ion-social-android[data-v-c0c4d2b6]:before, .ion-social-android-outline[data-v-c0c4d2b6]:before, .ion-social-angular[data-v-c0c4d2b6]:before, .ion-social-angular-outline[data-v-c0c4d2b6]:before, .ion-social-apple[data-v-c0c4d2b6]:before, .ion-social-apple-outline[data-v-c0c4d2b6]:before, .ion-social-bitcoin[data-v-c0c4d2b6]:before, .ion-social-bitcoin-outline[data-v-c0c4d2b6]:before, .ion-social-buffer[data-v-c0c4d2b6]:before, .ion-social-buffer-outline[data-v-c0c4d2b6]:before, .ion-social-chrome[data-v-c0c4d2b6]:before, .ion-social-chrome-outline[data-v-c0c4d2b6]:before, .ion-social-codepen[data-v-c0c4d2b6]:before, .ion-social-codepen-outline[data-v-c0c4d2b6]:before, .ion-social-css3[data-v-c0c4d2b6]:before, .ion-social-css3-outline[data-v-c0c4d2b6]:before, .ion-social-designernews[data-v-c0c4d2b6]:before, .ion-social-designernews-outline[data-v-c0c4d2b6]:before, .ion-social-dribbble[data-v-c0c4d2b6]:before, .ion-social-dribbble-outline[data-v-c0c4d2b6]:before, .ion-social-dropbox[data-v-c0c4d2b6]:before, .ion-social-dropbox-outline[data-v-c0c4d2b6]:before, .ion-social-euro[data-v-c0c4d2b6]:before, .ion-social-euro-outline[data-v-c0c4d2b6]:before, .ion-social-facebook[data-v-c0c4d2b6]:before, .ion-social-facebook-outline[data-v-c0c4d2b6]:before, .ion-social-foursquare[data-v-c0c4d2b6]:before, .ion-social-foursquare-outline[data-v-c0c4d2b6]:before, .ion-social-freebsd-devil[data-v-c0c4d2b6]:before, .ion-social-github[data-v-c0c4d2b6]:before, .ion-social-github-outline[data-v-c0c4d2b6]:before, .ion-social-google[data-v-c0c4d2b6]:before, .ion-social-google-outline[data-v-c0c4d2b6]:before, .ion-social-googleplus[data-v-c0c4d2b6]:before, .ion-social-googleplus-outline[data-v-c0c4d2b6]:before, .ion-social-hackernews[data-v-c0c4d2b6]:before, .ion-social-hackernews-outline[data-v-c0c4d2b6]:before, .ion-social-html5[data-v-c0c4d2b6]:before, .ion-social-html5-outline[data-v-c0c4d2b6]:before, .ion-social-instagram[data-v-c0c4d2b6]:before, .ion-social-instagram-outline[data-v-c0c4d2b6]:before, .ion-social-javascript[data-v-c0c4d2b6]:before, .ion-social-javascript-outline[data-v-c0c4d2b6]:before, .ion-social-linkedin[data-v-c0c4d2b6]:before, .ion-social-linkedin-outline[data-v-c0c4d2b6]:before, .ion-social-markdown[data-v-c0c4d2b6]:before, .ion-social-nodejs[data-v-c0c4d2b6]:before, .ion-social-octocat[data-v-c0c4d2b6]:before, .ion-social-pinterest[data-v-c0c4d2b6]:before, .ion-social-pinterest-outline[data-v-c0c4d2b6]:before, .ion-social-python[data-v-c0c4d2b6]:before, .ion-social-reddit[data-v-c0c4d2b6]:before, .ion-social-reddit-outline[data-v-c0c4d2b6]:before, .ion-social-rss[data-v-c0c4d2b6]:before, .ion-social-rss-outline[data-v-c0c4d2b6]:before, .ion-social-sass[data-v-c0c4d2b6]:before, .ion-social-skype[data-v-c0c4d2b6]:before, .ion-social-skype-outline[data-v-c0c4d2b6]:before, .ion-social-snapchat[data-v-c0c4d2b6]:before, .ion-social-snapchat-outline[data-v-c0c4d2b6]:before, .ion-social-tumblr[data-v-c0c4d2b6]:before, .ion-social-tumblr-outline[data-v-c0c4d2b6]:before, .ion-social-tux[data-v-c0c4d2b6]:before, .ion-social-twitch[data-v-c0c4d2b6]:before, .ion-social-twitch-outline[data-v-c0c4d2b6]:before, .ion-social-twitter[data-v-c0c4d2b6]:before, .ion-social-twitter-outline[data-v-c0c4d2b6]:before, .ion-social-usd[data-v-c0c4d2b6]:before, .ion-social-usd-outline[data-v-c0c4d2b6]:before, .ion-social-vimeo[data-v-c0c4d2b6]:before, .ion-social-vimeo-outline[data-v-c0c4d2b6]:before, .ion-social-whatsapp[data-v-c0c4d2b6]:before, .ion-social-whatsapp-outline[data-v-c0c4d2b6]:before, .ion-social-windows[data-v-c0c4d2b6]:before, .ion-social-windows-outline[data-v-c0c4d2b6]:before, .ion-social-wordpress[data-v-c0c4d2b6]:before, .ion-social-wordpress-outline[data-v-c0c4d2b6]:before, .ion-social-yahoo[data-v-c0c4d2b6]:before, .ion-social-yahoo-outline[data-v-c0c4d2b6]:before, .ion-social-yen[data-v-c0c4d2b6]:before, .ion-social-yen-outline[data-v-c0c4d2b6]:before, .ion-social-youtube[data-v-c0c4d2b6]:before, .ion-social-youtube-outline[data-v-c0c4d2b6]:before, .ion-soup-can[data-v-c0c4d2b6]:before, .ion-soup-can-outline[data-v-c0c4d2b6]:before, .ion-speakerphone[data-v-c0c4d2b6]:before, .ion-speedometer[data-v-c0c4d2b6]:before, .ion-spoon[data-v-c0c4d2b6]:before, .ion-star[data-v-c0c4d2b6]:before, .ion-stats-bars[data-v-c0c4d2b6]:before, .ion-steam[data-v-c0c4d2b6]:before, .ion-stop[data-v-c0c4d2b6]:before, .ion-thermometer[data-v-c0c4d2b6]:before, .ion-thumbsdown[data-v-c0c4d2b6]:before, .ion-thumbsup[data-v-c0c4d2b6]:before, .ion-toggle[data-v-c0c4d2b6]:before, .ion-toggle-filled[data-v-c0c4d2b6]:before, .ion-transgender[data-v-c0c4d2b6]:before, .ion-trash-a[data-v-c0c4d2b6]:before, .ion-trash-b[data-v-c0c4d2b6]:before, .ion-trophy[data-v-c0c4d2b6]:before, .ion-tshirt[data-v-c0c4d2b6]:before, .ion-tshirt-outline[data-v-c0c4d2b6]:before, .ion-umbrella[data-v-c0c4d2b6]:before, .ion-university[data-v-c0c4d2b6]:before, .ion-unlocked[data-v-c0c4d2b6]:before, .ion-upload[data-v-c0c4d2b6]:before, .ion-usb[data-v-c0c4d2b6]:before, .ion-videocamera[data-v-c0c4d2b6]:before, .ion-volume-high[data-v-c0c4d2b6]:before, .ion-volume-low[data-v-c0c4d2b6]:before, .ion-volume-medium[data-v-c0c4d2b6]:before, .ion-volume-mute[data-v-c0c4d2b6]:before, .ion-wand[data-v-c0c4d2b6]:before, .ion-waterdrop[data-v-c0c4d2b6]:before, .ion-wifi[data-v-c0c4d2b6]:before, .ion-wineglass[data-v-c0c4d2b6]:before, .ion-woman[data-v-c0c4d2b6]:before, .ion-wrench[data-v-c0c4d2b6]:before, .ion-xbox[data-v-c0c4d2b6]:before {\r\n  line-height: 8px;\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css&");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{staticClass:"flex-table"},[_c('div',[_c('div',{staticClass:"table-row table-header"},_vm._l((_vm.columns),function(col){return _c('div',{key:col,staticClass:"table-col"},[_c('span',[_vm._v(_vm._s(_vm._f("capitalize")(col)))]),_vm._v(" "),(_vm.hasSort(col))?_c('span',{staticClass:"table-sort"},[_c('em',{staticClass:"ion-android-arrow-dropup",on:{"click":function($event){return _vm.sortList(col, 'asc')}}}),_vm._v(" "),_c('em',{staticClass:"ion-android-arrow-dropdown",on:{"click":function($event){return _vm.sortList(col, 'desc')}}})]):_vm._e()])}),0),_vm._v(" "),(_vm.hasData)?_c('div',{staticClass:"flex-table-body"},_vm._l((_vm.finalData()),function(row,index){return _c('div',{key:index,staticClass:"table-row",on:{"&scroll":function($event){return _vm.handleScroll($event)}}},_vm._l((_vm.columns),function(col){return _c('div',{key:col,staticClass:"table-col"},[_vm._v(_vm._s(row[col]))])}),0)}),0):_c('div',{staticClass:"flex-table-body"},[_c('h3',{staticClass:"text-center"},[_vm._v("No data")])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/VueFlexTable.vue":
/*!******************************!*\
  !*** ./src/VueFlexTable.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueFlexTable_vue_vue_type_template_id_c0c4d2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true& */ "./src/VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true&");
/* harmony import */ var _VueFlexTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueFlexTable.vue?vue&type=script&lang=js& */ "./src/VueFlexTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css& */ "./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VueFlexTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueFlexTable_vue_vue_type_template_id_c0c4d2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueFlexTable_vue_vue_type_template_id_c0c4d2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c0c4d2b6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/VueFlexTable.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/VueFlexTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./VueFlexTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader/dist!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=style&index=0&id=c0c4d2b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_style_index_0_id_c0c4d2b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_template_id_c0c4d2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/VueFlexTable.vue?vue&type=template&id=c0c4d2b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_template_id_c0c4d2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlexTable_vue_vue_type_template_id_c0c4d2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ });
});
//# sourceMappingURL=vue-flex-table.js.map