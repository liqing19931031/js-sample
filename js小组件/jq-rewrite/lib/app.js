/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rewrite = __webpack_require__(1);

	var $ = __webpack_require__(2);

	(0, _rewrite.reWriteForm)($('.form'), _rewrite.myData);
	$('.submit').on('click', function (e) {
		console.log(e);
		(0, _rewrite.getParam)($('.form'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $ = __webpack_require__(2);
	var myData = {
	  "name": "夜未央",
	  "job": [0, 1, 3],
	  "age": 23,
	  "state": 4,
	  "sex": 1,
	  "logo": "1.jpg"
	};
	// 基于JQ的表单数据回填
	var reWriteForm = function reWriteForm($form, data, special) {
	  $.each(data, function (k, v) {
	    var node = $form.find('[name=' + k + ']');
	    if (special && special[k]) {
	      if (typeof special[k] === 'function') {
	        special[k].call(node, d);
	      } else {
	        special[k].val(d, node);
	      }
	    } else {
	      if (node.length > 1) {
	        if ($(node[0]).attr('type') === 'checkbox' || $(node[0]).attr('type') === 'CHECKBOX') {
	          if ($.isArray(data[k])) {
	            $.each(data[k], function (j, _n) {
	              node.filter('[value=' + _n + ']').attr('checked', 'checked');
	            });
	          }
	        }
	        if ($(node[0]).attr('type') === 'radio' || $(node[0]).attr('type') === 'RADIO') {
	          node.filter('[value=' + data[k] + ']').attr('checked', 'checked');
	        }
	      } else if (node.length === 1) {
	        if (node[0].nodeName === 'input' || node[0].nodeName === 'INPUT') {
	          if (node.attr('type') === 'email' || node.attr('type') === 'text') {
	            node.val(data[k]);
	          }
	          if (node.attr('type') === 'checkbox' || node.attr('type') === 'CHECKBOX') {
	            node.attr('checked', 'checked');
	          }
	          if (node.attr('type') === 'radio' || node.attr('type') === 'RADIO') {
	            node.attr('checked', 'checked');
	          }
	        }
	        if (node[0].nodeName === 'select' || node[0].nodeName === 'SELECT') {
	          node.val(data[k]);
	        }
	        if (node[0].nodeName === 'img' || node[0].nodeName === 'IMG') {
	          node.attr('src', data[k]);
	        }
	        if (node[0].nodeName === 'textarea' || node[0].nodeName === 'TEXTAREA') {
	          node.val(k);
	        }
	      }
	    }
	  });
	};
	var unique = function unique(arr) {
	  var i;
	  var j;
	  var repeat;
	  var res = [arr[0]];
	  for (i = 1; i < arr.length; i++) {
	    repeat = false;
	    for (j = 0; j < res.length; j++) {
	      if (arr[i] === res[j]) {
	        repeat = true;
	        break;
	      }
	    }
	    if (!repeat) {
	      res.push(arr[i]);
	    }
	  }
	  return res;
	};
	var submitParam = function submitParam($form) {
	  var inputs = $form.find('input');
	  var selects = $form.find('select');
	  var textarea = $form.find('textarea');
	  var nodes = [];
	  inputs.each(function (index, value) {
	    if ($(value).attr('name')) {
	      nodes.push($(value).attr('name'));
	    }
	  });
	  selects.each(function (index, value) {
	    if ($(value).attr('name')) {
	      nodes.push($(value).attr('name'));
	    }
	  });
	  textarea.each(function (index, value) {
	    if ($(value).attr('name')) {
	      nodes.push($(value).attr('name'));
	    }
	  });
	  nodes = unique(nodes);
	  return nodes;
	};
	// 简单表单的获取方法
	var getParam = function getParam($form) {
	  var param = {};
	  var nodes = submitParam($form);
	  nodes.forEach(function (n) {
	    var node = $form.find('[name=' + n + ']');
	    if (node.length > 1) {
	      if ($(node[0]).attr('type') === 'checkbox' || $(node[0]).attr('type') === 'CHECKBOX') {
	        param[n] = [];
	        node.each(function () {
	          if (this.checked) {
	            param[n].push($(this).val());
	          }
	        });
	      }
	      if ($(node[0]).attr('type') === 'radio' || $(node[0]).attr('type') === 'RADIO') {
	        node.each(function () {
	          if (this.checked) {
	            param[n] = $(this).val();
	          }
	        });
	      }
	    } else if (node.length === 1) {
	      if (node[0].nodeName === 'input' || node[0].nodeName === 'INPUT') {
	        param[n] = node.val();
	      }
	      if (node[0].nodeName === 'select' || node[0].nodeName === 'SELECT') {
	        param[n] = node.val();
	      }
	      if (node[0].nodeName === 'textarea' || node[0].nodeName === 'TEXTAREA') {
	        param[n] = node.val();
	      }
	    }
	  });
	  console.log(param);
	  return param;
	};

	exports.myData = myData;
	exports.reWriteForm = reWriteForm;
	exports.getParam = getParam;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.$;

/***/ }
/******/ ]);