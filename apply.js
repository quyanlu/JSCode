// Function.prototype.myApply = function(context, arr) {
// 	let con = context || window;
// 	con.fn = this;
// 	if (!arr) {
// 		result = con.fn();
// 	} else {
// 		let args = [];
// 		for (let i = 0; i < arr.length; i++) {
// 			args.push('arr[' + i + ']');
// 		}
// 		result = eval('con.fn(' + args + ')');
// 	}
// 	return result;
// };
Function.prototype.myApply = function(context) {
	if (typeof this !== 'function') throw new TypeError('sss');
	let con = context || window;
	con.fn = this;
	const res = arguments[1] ? con.fn(...arguments[1]) : con.fn();
	delete con.fn;
	return res;
};

let name = '时间跳跃';
let obj = {
	name: '听风是风',
};

function fn(a, b, c) {
	// console.log(a + b + c + this.name);
	return a + b + c + this.name;
};
const value = fn.myApply(obj, ['sdd', 'aa', 'ff']);
console.log(value);
