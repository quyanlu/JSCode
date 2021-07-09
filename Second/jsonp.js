const jsonp = ({url, params, callbackName}) => {
	const generateUrl = () => {
		let dataStr = '';
		for (let key in params) {
			dataStr += `${key}=${params[key]}&`;
		}
		dataStr += `callbackName=${callbackName}`;
		return `${url}?${dataStr}`;
	};

	return new Promise((resolve, reject) => {
		callbackName = callbackName || Math.random().toString().replace(',', '');
		let scriptEle = document.createElement('script');
		scriptEle.src = generateUrl();
		document.body.appendChild(scriptEle);
		window[callbackName] = (data) => {
			resolve(data);
			document.body.removeChild(scriptEle);
		};
	});
};

jsonp({
	url: 'http://localhost:3030',
	params: {
		a: 1,
		b: 2,
	},
}).then(data => {
	// 拿到数据进行处理
	console.log(data); // 数据包
});
