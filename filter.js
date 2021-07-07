Array.prototype.myFilter = function(callback,thisArg) {
	if(this == null) throw new TypeError('this is null or not defined');
	if(typeof callback != 'function') throw new TypeError(callback  + 'is not function')
	const O = Object(this);
	const len = O.length >>> 0;
	let key = 0, result = [];
	while (key < len) {
		if(key in O) {
			if(callback.call(thisArg,O[key],key,O)){
				result.push(O[key])
			}
		}
		key++;
	}
	return result;
};

const arr = [1, 3, 5, 7];
const mapValue = arr.myFilter((item, i) => {
	console.log(item,i);
	return item > 4;
});
console.log(mapValue);
