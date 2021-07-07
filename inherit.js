//原型链继承
//存在两个问题1.原型中包含的引用类型属性将被所有的实例共享2.子类在实例化的时候不能给父类构造函数传参
function Animal(name) {
	this.name = ['1', '2'];
}
Animal.prototype.getName = function() {
	console.log(this.name);
};
function Dog() {}
Dog.prototype = new Animal();
let dog1 = new Dog();
let dog2 = new Dog();
dog2.name.push('4');
console.log(dog1.getName());//【1,2,4】

//借用构造函数实现继承
//相当于原型链继承在子类中传参至父类
//解决原型链的两个问题，但是没错创建子实例都需要创造新的类
function Animal1(name) {
	console.log(this);
	this.name = name;
	this.getName = function() {
		console.log(this.name);
	};
}
function Dog1(name) {
	Animal1.call(this, name);
}

let dog3 = new Dog1('age');
let dog4 = new Dog1('age1');
dog3.getName();
dog4.getName();

//组合继承
//结合了原型链和构造函数将两者的优点集中起来。基本思路： 使用原型链继承原型上的属性和方法，而通过盗用构造函继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性；
function Animal2(name) {
	this.name = name;
	this.colors = [1, 2, 3];
}
Animal2.prototype.getName = function() {
	return this.name;
};
function Dog2(name, age) {
	Animal2.call(this, name);
	this.age = age;
}
Dog2.prototype = new Animal2();
Dog2.prototype.constructor = Animal2;

let dog5 = new Dog2('奶昔', 2);
dog5.colors.push('brown');
let dog6 = new Dog2('哈赤', 1);
console.log(dog5);
console.log(dog6);

//寄生组合式继承
function SuperType(name) {
	this.name = name;
	this.colors = [1, 2, 3];
}
SuperType.prototype.getName = function() {
	console.log(this.name);
	alert(this.name);
};
function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;


