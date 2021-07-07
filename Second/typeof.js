function typeOf(val) {
	let res = Object.prototype.toString.call(val).split(' ')[1];
	//substring 方法用于提取字符串中介于两个指定下标之间的字符
	//语法
	// stringObject.substring(start,stop)
	res = res.substring(0, res.length - 1).toLocaleLowerCase();
	console.log(res, "resres");
	return res;
}
console.log(typeOf([]));
