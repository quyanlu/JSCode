function myNew(fn, ...arg) {
	let obj = Object.create(null);
	obj.__proto__ = fn.prototype;
	let res = fn.apply(obj, arg);
	return typeof res === 'object' ? res : obj;
}

function A(d) {
	this.d = d;
}

console.log(new A(5));
console.log(myNew(A, 5));
