class EventEmitter {
	constructor() {
		this.events = {};
	}

	on(type, callBack) {
		if (!this.events[type]) {
			this.events[type] = [callBack];
		} else {
			this.events[type].push(callBack);
		}
	}

	off(type, callBack) {
		if (!this.events[type]) return;
		this.events[type] = this.events[type].filter((item) => {
			return item !== callBack;
		});
	}

	emit(type, ...rest) {
		this.events[type] && this.events[type].forEach((fn) => {
			fn.apply(this, rest);
		});
	}

	once(type, callBack) {
		function fn() {
			callBack();
			this.off(type, fn);
		}
		this.on(type, fn);
	}
}

const event = new EventEmitter();
const handle = (...rest) => {
	console.log(...rest);
};
const handle1 = (...rest) => {
	console.log(rest);
};

event.on("click", handle);
event.on("click", handle1);
console.log(event.events);
event.off("click", handle1);
console.log(event.events);
event.emit("click", 1, 2, 3, 4);
event.once("dbClick", () => {
	console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
