//深克隆
function deepClone(obj={}) {
	if(typeof obj !== 'object' || obj == null) return;
	let result = obj instanceof Array ? [] : {};
	for (let key in obj) {
		if(obj.hasOwnProperty(key)) {
			result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
		}
	}
	return result;
}
let obj = {name: 1,age: 2, eat: [1,2,3] };

let newObj = deepClone(obj);
newObj.eat.push(5);
console.log(obj)
console.log(newObj)
