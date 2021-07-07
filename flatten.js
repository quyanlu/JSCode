//数组扁平化
//es5
function flatten(arr) {
	var result = [];
	for (var i=0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}
console.log(flatten([1, 2, [3, 4, [5, 6]]]));
//es6
function flattenEs6(arr) {
	while (arr.some(item=>Array.isArray(item))) {
		console.log(arr);
		arr = [].concat(...arr)
	}
	return arr
}
console.log(flattenEs6([1, 2, [3, 4, [5, 6]]]));

