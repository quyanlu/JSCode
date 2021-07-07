function instanceOF(left,right) {
	let rp = right.prototype;
	while (true) {
		if(left == null) {
			return false
		}
		if(left === rp) {
			return true
		}
		left = left.__proto__
	}
}
function Dog() {

}
const a = new Dog()
const b = {};
const arr = [1,2]
console.log(instanceOF(b,Array));
