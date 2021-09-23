/*
* 实现一个sleep函数，比如sleep（1000）意味着等待1000毫秒，可从Promise、Generator、Async/Await等角度实现
* */

//Promise
const sleep = timer => {
	return new Promise(resolve => {
			return setTimeout(resolve, timer);
		},
	);
};
sleep(1000).then(() => {
	console.log(111);
});

