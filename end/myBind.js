//bind实现要复杂一些，因为它需要考虑的情况比较多，还要涉及到参数合并。

Function.prototype.myBind = function(context, ...args) {
	console.log(context, ...args, args);
	if (!context || context === null) {
		context = window;
	}
	//创建唯一key值，作为context的内部方法名
	let fn = Symbol();
	context[fn] = this;
	let _this = this;
	const result = function(...innerArgs) {
		/*
		* 第一种情况：若是将bind绑定之后的函数作为构造函数，通过new操作符使用，则不绑定传入的this，而是将this指向实例化出来的对象
		* 此时由于new操作符作用this指向result实例对象， 而result又继承自传入的_this根据原型链知识可以得出以下结论
		* this.__proto__ === result.prototype   //this instanceof result =>true
		* this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype
		* */
		if (this instanceof _this === true) {
			//此时this指向指向result的实例，这时不需要改变this指向
			this[fn] = _this;
			this[fn](...[...args, ...innerArgs]); //这里使用es6的方法让bind支持参数合并
			delete this[fn];
		} else {
			/*
			* 第二种情况只是作为普通函数调用，直接改变this指向为传入的context
			* */
			context[fn](...[...args, ...innerArgs]);
			delete context[fn];
		}
	};
	//如果绑定的是构造函数，那么需要继承构造函数原型属性和方法，实现继承的方法，使用Object.create;
	result.prototype = Object.create(this.prototype);
	return result;
};

function Person(name, age) {
	console.log(name);
	console.log(age);
	console.log(this);
}

Person.prototype.say = function() {
	console.log(123);
};

let obj = {
	objName: '我是object传进来的name',
	objAge: '我是object传进来的age',
};

function normalFun(name, age) {
	console.log(name);
	console.log(age);
	console.log(this);
	console.log(this.objName);
	console.log(this.objAge);
}

// let bindFun = Person.myBind(obj,'我是参数传进来的name');
// let a = new bindFun('我是参数传进来的age');
// a.say();

let bindFun = normalFun.myBind(obj, '我是参数传进来的name');
bindFun('w我是参数传进来的age');


