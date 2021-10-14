Function.prototype.myBind = function(context, ...args) {
	if (!context || context == null) {
		context = window;
	}
	let fn = Symbol();
	context[fn] = this;
	let _this = this;

	const result = function(...innerArgs) {
		if (this instanceof _this) {
			this[fn] = _this;
			this[fn](...[...args, ...innerArgs]);
			delete this[fn];
		} else {
			context[fn](...[...args, ...innerArgs]);
			delete context[fn];
		}
	};
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
