var a = {
	i: 1,
	valueOf: function() {
		return a.i++;
	},
};

if (a == 1 && a == 2 && a == 3) {
	console.log(1);
}
