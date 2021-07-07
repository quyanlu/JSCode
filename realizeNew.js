function objectFactory() {
	let obj = new Object();
	let con = Array.from(arguments).shift();
	obj.__proto__ = con.prototype;
	let result = con.apply(obj, arguments);
	return typeof result === 'onject' ? result || obj : obj;
}
function person(name, age) {
	this.name = name;
	this.age = age;
}
let p = objectFactory(person, '布兰', 12);
console.log(p);  // { name: '布兰', age: 12 }
