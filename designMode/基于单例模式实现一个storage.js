//实现storage，使得该对象为单利，基于localstorage进行封装。实现方法setItem(key,value)和getItem(key)
class Storage {
	static getInstance() {
		if (!Storage.instance) {
			Storage.instance = new Storage();
		}
		return Storage.instance;
	}

	getItem(key) {
		return localStorage.getItem(key);
	}

	setItem(key, val) {
		return localStorage.setItem(key, val);
	}
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();
storage1.setItem('name', 'aaaaaaaaaaa');
console.log(storage1.getItem('name'));
console.log(storage2.getItem('name'));
console.log(storage1 === storage2);
