function debounce(func,wait) {
	let timeout = null;
	return function() {
		let context = this;
		let args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			func.apply(context,args);
		}, wait)
	}
}

let node = document.getElementById('layout')
function getUserAction(e) {
	console.log(this, e)  // 分别打印：node 这个节点 和 MouseEvent
	// node.innerHTML = count++;
};
node.onmousemove = debounce(getUserAction, 1000)

