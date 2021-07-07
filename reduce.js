Array.prototype.myReduce = function(callback, initialValue) {
	if (this == null) throw new TypeError('this is null or not defined');
	if (typeof callback !== 'function') {
		throw new TypeError(callback + 'is not function');
	}
	const O = Object(this);
	const len = O.length >>> 0;
	let k = 0, acc;
	//如果大于1说明有初始值，直接进行赋值
	if (arguments.length > 1) {
		acc = initialValue;
	} else {
		//参数长度不大于1，说明没有初始值，直接取O的第一个参数；
		while (k < len && !(k in O)) {
			k++;
		}
		if (k > len) {
			throw new TypeError('reduce of empty array with no initial value');
		}
		acc = O[k++];
	}
	while (k < len) {
		if (k in O) {
			acc = callback(acc, O[k], k, O);
		}
		k++;
	}
	return acc;
};

const arr = [1,3,5,];
let all = arr.myReduce((pre, item) => {
	console.log(pre, item);
	return pre + item;
});
console.log(all);
