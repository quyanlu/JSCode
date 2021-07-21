function StorageBase() {}
StorageBase.prototype.getItem = function(key) {
	return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function(key, val) {
	return localStorage.setItem(key, val);
};

const Storage = (function() {
	let instance = null;
	return function() {
		if (!instance) {
			instance = new StorageBase();
		}
		return instance;
	};
})();

const storage1 = new Storage();
const storage2 = new Storage();

console.log(storage1.setItem('name', '李雷'));
console.log(storage1.getItem('name'));
console.log(storage2.getItem('name'));
console.log(storage1 === storage2);
