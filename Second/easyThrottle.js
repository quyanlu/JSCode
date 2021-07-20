function throttle(fn, interval) {
	let last = 0;
	return function() {
		let args = arguments;
		let context = this;
		let now = +new Date();
		if (now - last >= interval) {
			last = now;
			fn.apply(context, args);
		}
	};
}
