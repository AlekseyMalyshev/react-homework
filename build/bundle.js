/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var container = document.getElementById('container');
	
	ReactDOM.render(React.createElement(_app2.default, null), container);

/***/ },
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _table = __webpack_require__(/*! ./table */ 2);
	
	var _table2 = _interopRequireDefault(_table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var data1 = [{ "domain": "mongodb.info", "ip": "82.192.74.35", "country": "NL" }, { "domain": "udemy.com", "ip": "190.93.242.22", "country": "CR" }, { "domain": "coursereport.com", "ip": "204.236.232.83", "country": "US" }];
	
	var data2 = [{ "rank": 1, "name": "China", "population": 1373420000, "percent": 18.9 }, { "rank": 2, "name": "India", "population": 1280670000, "percent": 17.6 }, { "rank": 3, "name": "United States", "population": 322317000, "percent": 4.42 }, { "rank": 4, "name": "Indonesia", "population": 255461700, "percent": 3.51 }, { "rank": 5, "name": "Brazil", "population": 205252000, "percent": 2.82 }];
	
	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_table2.default, { data: data1 }),
	        React.createElement(_table2.default, { data: data2 })
	      );
	    }
	  }]);
	
	  return App;
	})(React.Component);
	
	exports.default = App;

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactTable = (function (_React$Component) {
	  _inherits(ReactTable, _React$Component);
	
	  function ReactTable() {
	    _classCallCheck(this, ReactTable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactTable).apply(this, arguments));
	  }
	
	  _createClass(ReactTable, [{
	    key: "getHeaders",
	    value: function getHeaders(obj) {
	      var ths = [];
	      if (obj && obj.length > 0) {
	        for (var key in obj[0]) {
	          ths.push(React.createElement(
	            "th",
	            { key: key },
	            key
	          ));
	        }
	      }
	      return React.createElement(
	        "tr",
	        null,
	        ths
	      );
	    }
	  }, {
	    key: "getRow",
	    value: function getRow(obj) {
	      var tds = [];
	      var i = 0;
	      for (var key in obj) {
	        tds.push(React.createElement(
	          "td",
	          { key: key },
	          obj[key]
	        ));
	      }
	      return tds;
	    }
	  }, {
	    key: "getBody",
	    value: function getBody(tbl_data) {
	      var _this2 = this;
	
	      var key = 0;
	      return tbl_data.map(function (obj) {
	        return React.createElement(
	          "tr",
	          { key: key++ },
	          _this2.getRow(obj)
	        );
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "table",
	        { className: "table table-striped" },
	        React.createElement(
	          "thead",
	          null,
	          this.getHeaders(this.props.data)
	        ),
	        React.createElement(
	          "tbody",
	          null,
	          this.getBody(this.props.data)
	        )
	      );
	    }
	  }]);
	
	  return ReactTable;
	})(React.Component);
	
	exports.default = ReactTable;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map