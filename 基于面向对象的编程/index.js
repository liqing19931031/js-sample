var abc = function (){
	document.body.onclick = function(e){
		console.log(this, e.currentTarget, e.target);
	}
}
abc();
var link = document.getElementsByTagName('a')
link[0].onclick = function (e) {
	e.cancelable = false;
	e.preventDefault(); //阻止默认事件
}