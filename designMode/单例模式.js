class SingleDog {
	show() {
		console.log('这是一个单例模式');
	}

	//静态方法实现
	static getInstance() {
		if (!SingleDog.instance) {
			SingleDog.instance = new SingleDog();
		}
		return SingleDog.instance;
	}
}
const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
s1 === s2;
//或者闭包形式
SingleDog.getInstance = (function() {
	let instance = null;
	if (!instance) {
		instance = new SingleDog();
	}
	return instance;
})();
