import {myData, reWriteForm, getParam} from "rewrite";
var $ = require('jquery');

reWriteForm($('.form'), myData);
$('.submit').on('click', function(){
	getParam($('.form'))
});