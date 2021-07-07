const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
	constructor(executor) {
		this.status = PENDING;
		this.value = undefined;
		this.reason = undefined;
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];

		let resolve = (value) => {
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				this.onResolvedCallbacks.forEach(fn => fn());
			}
		};

		let reject = (reason) => {
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.reason = reason;
				this.onRejectedCallbacks.forEach(fn => fn());
			}
		};

		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}

	then(onFulFilled, onRejected) {
		onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : (v) => v;
		onRejected = typeof onRejected === 'function' ? onRejected : (err) => {throw err;};
		let promise2 = new Promise((resolve, reject) => {
			if (this.status === FULFILLED) {
				setTimeout(() => {
					try {
						let x = onFulFilled(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				}, 0);
			}

			if (this.status === REJECTED) {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				}, 0);
			}
			if (this.status === PENDING) {
				this.onResolvedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFulFilled(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});

				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});
			}

		});
		return promise2;
	}

	catch(fn) {
		return this.then(null, fn);
	}
}

const resolvePromise = (promise2, x, resolve, reject) => {
	if (promise2 === x) {
		return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
	}
	let called;
	if ((typeof x === 'object' && x != null) || typeof x === 'function') {
		try {
			let then = x.then;
			if (typeof then === 'function') {
				then.call(x, (y) => {
					if (called) return;
					called = true;
					resolvePromise(promise2, y, resolve, reject);
				}, (r) => {
					if (called) return;
					called = true;
					reject(r);
				});
			} else {
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		resolve(x);
	}
};

Promise.resolve = function(value) {
	if (value instanceof Promise) {
		return value;
	}
	return new Promise(resolve => resolve(value));
};

Promise.reject = function(reason) {
	return new Promise((resolve, reject) => reject(reason));
};

Promise.all = function(promiseArr) {
	let index = 0, result = [];
	return new Promise((resolve, reject) => {
		promiseArr.for((p, i) => {
			Promise.resolve(p).then(val => {
				index++;
				result[i] = val;
				if (index === promiseArr.lenght) {
					resolve(result);
				}
			}, err => {
				reject(err);
			});
		});
	});
};

Promise.race = function(promiseArr) {
	return new Promise((resolve, reject) => {
		promiseArr.forEach(p => {
			Promise.resolve(p).then(val => {
				resolve(val);
			}, err => {
				reject(err);
			});
		});
	});
};
Promise.allSettled = function(promiseArr) {
	let result = [];

	return new Promise((resolve, reject) => {
		promiseArr.forEach((p, i) => {
			Promise.resolve(p).then(val => {
				result.push({
					status: 'fulfilled',
					value: val,
				});
				if (result.length === promiseArr.length) {
					resolve(result);
				}
			}, err => {
				result.push({
					status: 'rejected',
					reason: err,
				});
				if (result.length === promiseArr.length) {
					resolve(result);
				}
			});
		});
	});
};
Promise.any = function(promiseArr) {
	let index = 0;
	return new Promise((resolve, reject) => {
		if (promiseArr.length === 0) return;
		promiseArr.forEach((p, i) => {
			Promise.resolve(p).then(val => {
				resolve(val);

			}, err => {
				index++;
				if (index === promiseArr.length) {
					reject(new AggregateError('All promises were rejected'));
				}
			});
		});
	});
};

function loadImg(src) {
	const p = new Promise((resole, reject) => {
		const img = document.createElement('img');
		img.onload = () => {
			resole(img);
		};
		img.onerror = () => {
			reject(new TypeError('图片加载出错'));
		};
		img.src = src;
	});
	return p;
}
loadImg('https://f11.baidu.com/it/u1=4233107542&u2=2039963766&fm=76').then((img) => {
	console.log(img);
}).catch((err) => {
	console.log(err);
});
