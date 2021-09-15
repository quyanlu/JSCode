/*
* 实现一个render（template，context）方法，将template中的占位符用context填充
* 示例：
* var template = "{{name}} 很厉害，才{{age}}岁"
* var context = {name： 'bottle',age:'15'}
* 输入template context
* 输出bottle很厉害，才15岁
* */

function render(template, context) {
	return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
		console.log(match, key);
		return context[key.trim()];
	});
}
let template = "{{name}} 很厉害，才{{age}}岁";
let context = {name: 'bottle', age: '15'};
let test = render(template, context);
console.log(test);
