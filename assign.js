// Object.myAssign = function(target, ...source) {
// 	if (target == null) throw new TypeError('cannot convert undefined or null to object');
// 	let result = Object(target);
// 	source.forEach((obj) => {
// 		if (obj != null) {
// 			for (let key in obj) {
// 				if (obj.hasOwnProperty(key)) {
// 					result[key] = obj[key];
// 				}
// 			}
// 		}
// 	});
// 	return result;
// };

Object.myAssign = function(target, ...source) {
	if (target == null) throw new TypeError('cannot convert undefined or null to object');
	let result = Object(target);
	console.log(result);
	source.forEach((item) => {
		if (item != null) {
			for (let key in item) {
				if (item.hasOwnProperty(key)) {
					result[key] = item[key];
				}
			}
		}
	});
	return result;
};
console.log(Object.myAssign([], [3, 4, 5, 6]));
