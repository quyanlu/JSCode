//字符串模板
function render(template,data) {
	const reg = /\{\{(\w+)\}\}/;
	if(reg.test(template)) {
		const name = reg.exec(template)[1];
		const param = data[name] ?  data[name] : '未知';
		template = template.replace(reg,param);
		return render(template,data);
	}
	return template;
}

let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let person = {
	name: '不烂',
	age: 12
};
console.log(render(template,person));
