let a = {name: 'a'};
let array = [1, 2, 2, a, a, {age: 12}, {age: 12}];
const arr = [1, 2, 2, 3, 4, 5, 5];
function unique(arr) {
	let res = arr.filter((item, index, array) => {
		return array.indexOf(item) === index;
	});
	return res;
}

let result = unique(array);
console.log(result);

const unique2 = (arr) => [...new Set(arr)];
let res = unique2(array);
console.log(res);
