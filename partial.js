function partial(fn, ...args) {
	return (...arg) => {
		return fn(...args, ...arg);
	};
}
function add(a, b, c) {
	return a + b + c;
}
let partialAdd = partial(add, 2);
let all = partialAdd(1, 3);
console.log(all);
