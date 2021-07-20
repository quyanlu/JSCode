function easyDebounce(fn, delay) {
	let timer = null;
	return function() {
		let context = this;
		let args = arguments;
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(function() {
			fn.apply(context, args);
		}, delay);
	};
	const better_scroll = easyDebounce(() => console.log('触发了滚动事件'), 1000);

	document.addEventListener('scroll', better_scroll);
}
