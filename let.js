/**
 * let 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。
 * let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与var关键字不同的是，var声明的变量只能是全局或者整个函数块的。
 * let声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。
 */
/*//alert("hello");
let v1=1, v2="a",v3=[1,2];//变量的初始值。可以是任意合法的表达式。
var x = 0;
function varTest(){
	var x = 1;
	if(true){
		var x = 2;
		console.log(x);//2
	}
	console.log(x);//2,var属于方法中的变量，方法内处处使用的该变量都为同一个。。
};
varTest();
//alert(x);//0，var修饰方法内的变量和方法外的变量互不影响，如果方法内的变量没有用var修饰，则为同一个。
function letTest(){
	let y = 3;
	if(true){
		let y = 4;
		console.log(y);//4
	}
	console.log(y);//3，let变量为当前所属域，其内和其外使用的该变量为不同的。的
};
//上面这段代码的意图是创建5个li,点击不同的li能够打印出当前li的序号。如果不用let，而改用var的话，将总是打印出 Item 5 is Clicked，
//因为 j 是函数级变量，5个内部函数都指向了同一个 j ,而 j 最后一次赋值是5。
//用了let后，j 变成块级域（也就是花括号中的块，每进入一次花括号就生成了一个块级域）,所以 5 个内部函数指向了不同的 j 。
function aa(){
	var list = document.getElementById("list");
	for(let i=0; i<=5; i++){
		var item = document.createElement("LI");
		item.appendChild(document.createTextNode("Item "+i));
		
		//var j=i;//此时所有的j都等于5
		let j= i;//此时j的值随i的值变化而变化
		item.onclick = function(ev){
			alert(j+"click");
		};
		list.appendChild(item);
	}
}

//在程序或者函数的顶层，let并不会像var一样在全局对象上创造一个属性，比如

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
*/

//在处理构造函数的时候，可以通过let声明而不是闭包来创建私有接口。
var SomeConstructor;

{
    let privateScope = {};

    SomeConstructor = function SomeConstructor () {
        this.someProperty = "foo";
        privateScope.hiddenProperty = "bar";
    }

    SomeConstructor.prototype.showPublic = function () {
        console.log(this.someProperty); // foo
    }

    SomeConstructor.prototype.showPrivate = function () {
        console.log(privateScope.hiddenProperty); // bar
    }

}

var myInstance = new SomeConstructor();

myInstance.showPublic();
myInstance.showPrivate();

console.log(privateScope.hiddenProperty); // error


//在同一个函数或同一个作用域中用let重复定义一个变量将引起 TypeError.
if (x) {
	  let foo;
	  let foo; // TypeError thrown.
	}
