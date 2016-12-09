"use strict";
let a = document.getElementsByClassName('dom1');
let b = document.getElementsByClassName('dom2');
let c = document.getElementsByClassName('dom3');
let d = document.getElementsByTagName('a');
b[0].addEventListener('click', function(e){
	console.log(e);
	e.preventDefault();
});
c[0].addEventListener('click', function(e){
	console.log('c');
	e.stopPropagation();
});
d[0].onClick = function(e){
	e.preventDefault();
	alert(1);
}
var f = 2;
function foo(str){
	eval(str)
	var e = 2;
	console.log(f + e);
}

foo('var f = 1');
(function(){
	function abc(a){
		a.forEach(function(){
			console.log(this);
			(function(){
				console.log(this)
			})();
		})
		console.log(this, a);
	}
	abc.call(['abc', 'bcd'], ['aaa', 'bbb']);
})();

function proccess(data){
	console.log(data.name);
}
var x = true;
if(x) {
	let abc = { name: 'liqing'};
	proccess ( abc )
}