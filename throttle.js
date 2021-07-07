function throttle(func, wait, options = {}) {
	let timeout, context, args, result;
	let previous = 0;
	let throttled = function() {
		let now = +new Date();
		if (!previous && options.leading === false) previous = now;
		let remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(function() {
				previous = options.leading === false ? 0 : +new Date();
				timeout = null;
				func.apply(context, args);
				if (!timeout) context = args = null;
			}, remaining);
		}
	};

	throttled.cancle = function() {
		clearTimeout(timeout);
		previous = 0;
		timeout = null;
	};
	return throttled;
}
