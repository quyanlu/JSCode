const addAll2 = function() {
	console.log('进行计算');
	let result = 0;
	const len = arguments.length;
	for (let i = 0; i < len; i++) {
		result += arguments[i];
	}
	return result;
};

const proxyAddAll2 = (function() {
	const resultCache = {};
	console.log(resultCache, "resultCacheresultCache");
	return function() {
		const args = Array.prototype.join.call(arguments, ',');
		if (args in resultCache) {
			return resultCache[args];
		}
		return resultCache[args] = addAll2(...arguments);
	};
})();

console.log(proxyAddAll2(1,1,2,2));
