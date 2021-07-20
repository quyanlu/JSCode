function throttle(fn, delay) {
	let last = 0, timer = null;

	return function() {
		let context = this;
		let args = arguments;
		let now = +new Date();
		if (now - last < delay) {
			clearTimeout(timer);
			timer = setTimeout(function() {
				last = now;
				fn.apply(context, args);
			}, delay);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}

const better_scroll = throttle(() => console.log('sssssssssssss'), 1000);
document.addEventListener('scroll', better_scroll);
