var cats = [];

for (var i = 0; i < 101; i++) {
	cats.push({
		cat : true
	});
}

for (key in cats) {
	if (cats[key] === true) {
		for (var j = 0; j < cats.length; j++){
			cats[key] = false;
		}
	}
}

console.log(cats);