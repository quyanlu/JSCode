//实现 JSON.parse
let json = '{"name":"小姐姐", "age":20}';
let obj = new Function('return' + json);
console.log(obj());
