// Function.prototype.myCall = function(context) {
// 	let con = context || window;
// 	con.fn = this;
// 	let args = [];
// 	for (let i = 1; i < arguments.length; i++) {
// 		args.push('arguments[' + i + ']');
// 	}
// 	console.log(args);
// 	let result = eval('context.fn(' + args + ')');
// 	delete con.fn;
// 	return result;
// };
Function.prototype.myCall = function(context) {
	let con = context || window;
	con.fn = this;
	console.log(arguments);
	console.log(Array.from(arguments));
	let args = Array.from(arguments).slice(1);
	console.log(args);
	let result = arguments.length > 1 ? context.fn(...args) : context.fn();
	delete context.fn;
	return result;
};

let name = '时间跳跃';
let obj = {
	name: '听风是风',
};

function fn(a, b, c) {
	console.log(a + b + c + this.name);
	return a + b + c + this.name;
};
const value = fn.myCall(obj, 'sdd', 'aa', 'ff');
console.log(value);
