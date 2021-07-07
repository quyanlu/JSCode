function instanceOf(left, right) {
	let proto = left.__proto__;
	while (true) {
		if (proto == null) return false;
		if (proto === right.prototype) {
			return true;
		}
		proto = proto.__proto__;
	}
}

function Animal(name, age) {
	this.name = name;
	this.age = age;
}
function Animal1(name, age) {
	this.name = name;
	this.age = age;
}

function Dog(eat) {
	console.log(this.name + this.age + this.eat);
	Animal.call(this, eat);
}
Dog.prototype = new Animal();
let dog = new Dog('骨头');
console.log(instanceOf(dog, Animal1));
