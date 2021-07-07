Array.prototype.myMap = function(callback, thisArg) {
	if (this == null) throw new TypeError('this is null or not defined');
	if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function');
	const O = Object(this);
	const len = O.length >>> 0;
	let key = 0, result = [];
	while (key < len) {
		if (key in O) {
			result[key] = callback.call(thisArg, O[key], key, O);
		}
		key++;
	}
	return result;
};

const arr = [1, 3, 5, 7];
const mapValue = arr.map((item, i) => {
	console.log(item,i);
	return item*2;
});
console.log(mapValue);
