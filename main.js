/**
 * 这些函数 document.querySelector 和 alert 是浏览器内置的，你可以在任何时候使用。
 * 你需要使用事件在网页上创建真正的交互——事件是能够捕捉浏览器操作并且允许你运行代码进行响应的代码结构。
 * 最明显的事件是点击事件，它会在鼠标点击什么的时候被浏览器唤醒。
 *
 */
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myHeading.textContent = "hhhh";

function setUserName(){
	var myName = prompt("please enter your name");
	localStorage.setItem('name',myName);
	myHeading.textContent = myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storageName = localStorage.getItem('name');
	myHeading.textContent = storageName;
}
myButton.onclick = function(){
	setUserName();
}
var myImage = document.querySelector('img');
myImage.onclick = function(){
	if(myImage.getAttribute('src') === '23267036_1219442.jpg'){
		myImage.setAttribute('src','095902wlruzqhi4zhzgrlq.jpg')
	}else{
		myImage.setAttribute('src','23267036_1219442.jpg');
	}
}