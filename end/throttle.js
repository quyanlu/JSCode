function throttle(fn, delay) {
	let timer;
	let flag = true;
	return () => {
		if (!flag) return;
		flag = false;
		timer = setTimeout(() => {
			fn();
			flag = true;
		}, delay);
	};
}

window.addEventListener('scroll', throttle(() => {console.log('sss');}, 1000));
