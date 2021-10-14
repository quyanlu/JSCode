function mySetInterval(fn, time) {
	let timer = null;
	let isClear = false;
	function interval() {
		if (isClear) {
			isClear = false;
			clearTimeout(timer);
			return;
		}
		fn();
		timer = setTimeout(interval, time);
	}
	timer = setTimeout(interval, time);
	return () => {
		isClear = true;
	};
}
let a = mySetInterval(() => {
	console.log(111);
}, 1000);
let cancel = mySetInterval(() => {
	console.log(222);
}, 1000);
cancel();
