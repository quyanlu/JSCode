let arr = [[1, 2, 3], [3, 4, 5, [6, 7, 8]]];
console.log(arr.flat(Infinity));
console.log(arr);

function flat(arr) {
	while (arr.some(item => Array.isArray(item))) {
		console.log(arr, 'arr');
		arr = [].concat(...arr);
	}
	return arr;
}

console.log(flat(arr));
