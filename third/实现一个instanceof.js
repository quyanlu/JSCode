/*
* instanceof 原理 判断构造函数的prototype属性是否出现在其实例对象原型链中的任意位置
* A instanceof B
* 首先A必须是个对象，B必须是函数
* 判断A的__proto__是否等于B的prototype
* 等于返回ture，否则返回false
* */

function myInstanceof(left, right) {
	if (left == null || typeof left !== 'object') return false;
	if (typeof right !== 'function') throw Error('right must be a function');
	let leftProto = left.__proto__;
	let rightPrototype = right.prototype;
	while (leftProto != null) {
		if (leftProto === rightPrototype) return true;
		leftProto = leftProto.__proto__;
	}
	return false;
}

console.log({name: 'aa'} instanceof Function);
console.log(myInstanceof({name: 'aa'}, Function));
