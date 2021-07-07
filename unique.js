//es5
function unique(arr) {
	var res = arr.filter(function(item, i, array) {
		return array.indexOf(item) === i;
	});
	return res;
}
var result = unique([1, 2, 2, 3, 4]);
console.log(result);
//es6
const uniq = (arr) => [...new Set(arr)];
let result1 = uniq([1, 2, 2, 3]);
console.log(result1);
