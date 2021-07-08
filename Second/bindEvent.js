//通用事件监听函数
function bindEvent(elem, type, selector, fn) {
	if (fn == null) {
		fn = selector;
		selector = null;
	}
	elem.addEventListener(type, event => {
		const target = event.target;
		if (selector) {
			if (target.matches(selector)) {
				fn.call(target, event);
			}
		} else {
			fn.call(target, event);
		}
	});
}
