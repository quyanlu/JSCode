class newJQuery {
	constructor(selector) {
		let select = document.querySelectorAll(selector);
		const length = selector.length;
		for (let i = 0; i < length; i++) {
			this[i] = select[i];
		}
		this.length = length;
	}

	get(index) {
		return this[index];
	}

	each(fn) {
		for (let i = 0; i < this.length; i++) {
			const elem = this[i];
			fn(elem);
		}
	}

	on(type, fn) {
		return this.each(elem => {
			// const target = elem.target;
			console.log(elem, 'elem');
			elem.addEventListener(type, fn, false);
		});
	}
}
class myJquery extends newJQuery{
	constructor(selector) {
		super(selector);
		console.log(selector);
	}
}
const p = new myJquery('img');
p.on('click', (ele) => {console.log(ele);});
console.log(p);
