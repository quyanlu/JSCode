function myNew(fn, ...arg) {
	let obj = Object.create(null);
	obj.__proto__ = fn.property;
	let res = fn.apply(obj, arg);
	return typeof res === 'object' ? res : obj;
}

function A(d) {
	this.d = d;
	return {
		a: 6
	}
}

console.log(new A(5));
console.log(myNew(A, 5));
