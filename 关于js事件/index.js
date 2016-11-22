let a = document.getElementsByClassName('dom1');
let b = document.getElementsByClassName('dom2');
let c = document.getElementsByClassName('dom3');
let d = document.getElementsByTagName('a');
a[0].addEventListener('click', function(){
	console.log('a');
});
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