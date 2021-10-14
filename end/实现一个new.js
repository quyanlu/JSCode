function myNew(fn, ...args) {
	let obj = Object.create(null);
	obj.__proto__ = fn.prototype;
	let res = fn.apply(obj, args);
	return typeof res === 'object' ? res : obj;
}
