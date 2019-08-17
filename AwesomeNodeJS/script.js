const fs = require('fs');

fs.readFile('./hello.txt',(err, data) => {//asynchronous
	console.time('funchallenge'); //starts a timer
	if(err) {
		console.log('errrrrrooooorrr');
	}
	console.log('Async', data.toString('utf8'));
	console.timeEnd('funchallenge'); //ends the timer
});

const file = fs.readFileSync('./hello.txt'); //synchronous
console.log('Sync', file.toString());

//APPEND
/*fs.appendFile('./hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log(err);
	}
});*/

//WRITE
/*fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log(err);
	}
});*/

//DELETE
/*fs.unlink('./bye.txt', err => {
	if (err) {
		console.log(err);
	}
	console.log('Inception');
});*/