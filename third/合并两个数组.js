/*
* 把两个数组【A1,A2,B1,B2,C1,C2,D1,D2】和[A,B,C,D]
* 合并为【A1,A2,A,B1,B2,B.....】
* */

function merger(arr1, arr2) {
	let newArr2 = arr2.map((item) => {
		return item + item;
	});
	let arr3 = [...arr1, ...newArr2].sort();
	let result = [];
	arr3.forEach((item)=>{
		if(item.split('')[0] === item.split('')[1]) {
			result.push(item.split('')[0])
		}else {
			result.push(item)
		}
	});
	return result;
}
let arr1 = ['A1', 'A2', 'A3', 'B1', 'B2', 'D4', 'C1', 'C2', 'D1', 'D2'];
let arr2 = ['A', 'B', 'C', 'D'];
console.log(merger(arr1, arr2));
