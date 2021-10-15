function debounce(fn, delay = 300) {
	let timer;
	return function() {
		const args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

window.addEventListener('scroll', debounce(() => {
	console.log(1111);
}, 1000));
