let a = {
	i: 1,
	toString: () => a.i++,
};
console.log(a);
if (a == 1 && a == 2 && a == 3) {
	console.log(1);
}
