// Function.prototype.myBind = function() {
// 	if (typeof this !== 'function') throw new TypeError('this is not function');
// 	const args = Array.from(arguments);
// 	const context = args.shift();
// 	const self = this;
// 	return function F() {
// 		if (this instanceof F) {
// 			return new F(context, args);
// 		}
// 		return self.apply(context, args);
// 	};
// };
Function.prototype.myBind = function() {
	if (typeof this !== 'function') throw new TypeError('this is not function');
	const args = Array.from(arguments);
	const context = args.shift();
	const self = this;
	return function F() {
		if (this instanceof F) {
			return new F(context, args);
		}
		return self.apply(context, args);
	};
};
let name = '时间跳跃';
let obj = {
	name: '听风是风',
};

function fn(a, b, c) {
	// console.log(a + b + c + this.name);
	return a + b + c + this.name;
};
const value = fn.myBind(obj, 'sdd', 'aa', 'ff');
console.log(value());
