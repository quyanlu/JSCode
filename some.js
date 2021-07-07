Array.prototype.meSome = function(callback, thisArg) {
	if (this == null) throw new TypeError('sss');
	if (typeof callback !== 'function') throw new TypeError('JS');
	const O = Object(this);
	const len = O.length >>> 0;
	let k = 0, result = [];
	while (k < len) {
		if (k in O) {
			if (callback.call(thisArg, O[k], k, O)) {
				return true;
			}
		}
		k++;
	}
	return false;
};
const arr = [1, 3, 5, 7];
const mapValue = arr.meSome((item, i) => {
	console.log(item, i);
	return item > 4;
});
console.log(mapValue);
