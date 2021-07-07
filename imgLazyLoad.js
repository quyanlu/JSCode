const imgs = document.getElementsByTagName('img');
//获取可视区域高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight;
let num = 0;
function imgLazyLoad() {
	for (let i = num; i < imgs.length; i++) {
		let distance = viewHeight - imgs[i].getBoundingClientRect().top;
		if (distance >= 0) {
			imgs[i].src = imgs[i].getAttribute('data-src');
			num = i + 1;
		}
	}
}
imgLazyLoad();
window.addEventListener('scroll', imgLazyLoad, false);
