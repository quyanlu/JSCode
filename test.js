var url = 'https://www.jianshu.com/shakespeare/jsd/exchange_rates/current';

// 封装一个get请求的方法
function getJSON(url) {
	return new Promise(function(resolve, reject) {
		var XHR = new XMLHttpRequest();
		XHR.open('GET', url, true);
		XHR.send();

		XHR.onreadystatechange = function() {
			if (XHR.readyState == 4) {
				if (XHR.status == 200) {
					try {
						var response = JSON.parse(XHR.responseText);
						resolve(response);
					} catch (e) {
						reject(e);
					}
				} else {
					reject(new Error(XHR.statusText));
				}
			}
		}
	})
}

getJSON(url).then(resp => console.log(resp));
