/**实现一个简单的模板字符串替换
 * 实现一个render（template，context）方法，将template的占位符context填充
 *示例：
 * var template = '{{name}}很厉害，才{{age}}岁'
 * var context = {name: 'bottle', age: '15'}
 * 输入： template context
 * 输出: bottle很厉害，才15岁
 *
 * **/
let template = '{{name}}很厉害，才{{age}}岁';
let context = {name: 'bottle', age: '15'};
function render(template, context) {
	return template.replace(/{{(.*?)}}/g, (match, key) => {
		return context[key.trim()];
	});
}

let ler = render(template, context);
console.log(ler);
