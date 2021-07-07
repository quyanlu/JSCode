function parseParam(url) {
	const paramsStr = url.slice(url.indexOf('?') + 1, url.length - 1);
	const paramsArr = paramsStr.split('&');
	const paramsObj = {};
	if (url.indexOf('=')) {
		for (let i = 0; i < paramsArr.length; i++) {
			let [key, val] = paramsArr[i].split('=');
			val = decodeURIComponent(val);
			paramsObj[key] = val;
		}
	} else {
		paramsObj[url] = true;
	}
	return paramsObj;
}
const url = 'https://www.baidu.com/s?wd=%E8%A7%A3%E6%9E%90%20URL%20%E5%8F%82%E6%95%B0%E4%B8%BA%E5%AF%B9%E8%B1%A1&rsv_spt=1&rsv_iqid=0x891898e80000ada7&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=88093251_95_hao_pg&rsv_enter=0&rsv_dl=tb&rsv_n=2&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_btype=i&inputT=1574&rsv_sug4=1574';
console.log(parseParam(url));
