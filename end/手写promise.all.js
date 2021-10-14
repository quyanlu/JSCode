class MyPromise {
	static all(promiseArr) {
		let result = [];
		let count = 0;
		return new MyPromise((resolve, reject) => {
			for (let i = 0; i < promiseArr.length; i++) {
				MyPromise.resolve(promiseArr[i]).then((res) => {
					result[i] = res;
					count++;
					if (count === promiseArr.length) {
						resolve(result);
					}
				}, (err) => {
					reject(err);
				});
			}
		});
	}

	static race(promiseArr) {
		return new MyPromise((resolve, reject) => {
			for (let i = 0; i < promiseArr.length; i++) {
				MyPromise.resolve(promiseArr[i]).then((res) => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
			}
		});
	}
}
