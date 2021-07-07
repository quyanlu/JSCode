Array.prototype.myForEach = function(callback, thisArg) {
	if (this == null) throw new TypeError('this is null or not defined');
	if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function');
	const O = Object(this);
	const len = O.length >>> 0;
	let k = 0;
	while (k < len) {
		if (k in O) {
			callback.call(thisArg, O[k], k, O);
		}
		k++;
	}
};
// Reflect.apply(Array.prototype.myFroEach,'4',[(item)=>{
// 	return item==='4'
// }])
const arr = [5, 6, 8, 14];
arr.myForEach((item, i, arr) => {
	console.log(item, i, "item,i", arr);
}, [2, 4, 6]);
