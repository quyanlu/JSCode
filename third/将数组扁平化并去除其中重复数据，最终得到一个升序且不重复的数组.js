let arr = [[1, 2, 3], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
function flatten(arr) {
	while (arr.some((item) => Array.isArray(item))) {
		arr = [].concat(...arr);
	}
	let result = [...new Set(arr)].sort((a, b) => a - b);
	return result;
}
console.log(flatten(arr));
