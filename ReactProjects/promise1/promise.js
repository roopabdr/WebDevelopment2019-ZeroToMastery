const promise = new Promise((resolve, reject) => {
	if (true) {
	resolve('Stuff Worked');
	} else {
	reject('Error, it broke');
	}
});


promise
	.then(result => result + '!')
	.then(result2 => {
		console.log(result2);
	});


return new Promise(resolve => setTimeout(resolve, ms));