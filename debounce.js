function debounce(func,wait,immediate) {
	let timeout,result;
	let debounce = function() {
		let context = this;
		let args = arguments;
		if (timeout) clearTimeout(timeout);
		if(immediate) {
			let callNow = !timeout;
			timeout = setTimeout(function(){
				timeout = null
			},wait);
			if(callNow) result = func.apply(context,args);
		}else {
			timeout = setTimeout(function(){
				func.apply(context,args);
			},wait)
		}
		return result
	}
	debounce.cancel = function () {
		clearTimeout(timeout);
		timeout = null;
	};
	return debounce;
}

// function debounce(func, wait, immediate) {
// 	let timeout, result;
// 	let debounce = function() {
// 		let context = this;
// 		let args = arguments;
// 		if (timeout) clearTimeout(timeout);
// 		if (immediate) {
// 			let callNow = !timeout;
// 			timeout = setTimeout(function() {
// 				timeout = null;
// 			}, wait);
// 			if (callNow) result = func.apply(context, args);
// 		} else {
// 			timeout = setTimeout(function() {
// 				func.apply(context, args);
// 			}, wait);
// 		}
// 		return result;
// 	};
// 	debounce.cancel = function() {
// 		clearTimeout(timeout);
// 		timeout = null;
// 	};
// 	return debounce;
// }
