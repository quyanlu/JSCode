function realizeNew() {
	let obj = {};
	let args = Array.from(arguments);
	let con = args.shift();
	obj.__proto__ = con.prototype;
	let result = con.apply(obj, args);
	return typeof result === 'object' ? result : obj;
}
function person(name, age) {
	this.name = name;
	this.age = age;
}
let p = realizeNew(person, 'aa', 12);
console.log(p);
