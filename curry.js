//函数柯里化
function  curry(fn) {
	let judge = (...args) => {
		if(args.length === fn.length) return fn(...args);
		return (...arg) => judge(...args,...arg)
	};
	return judge;
}
function add(a, b, c) {
	return a + b + c;
}
add(1, 2, 3);
let addCurry = curry(add);
console.log(addCurry(1), '11111111111111111');
console.log(addCurry(1)(2), '2222222222222222222222');
console.log(addCurry(1, 2,3), '3333333333333333333333333');
// addCurry(1)(2)(3);
