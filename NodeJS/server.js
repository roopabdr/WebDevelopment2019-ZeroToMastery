const express = require('express');
const bodyParser = require('body-parser');

const app =  express();

app.use(express.static(__dirname + '/public')); //loading static files from the server

/*app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());*/

/*app.get('/profile', (req, res) => {	
	res.send('getting profile');
});

app.get('/', (req, res) => {
	console.log(req.query);
	console.log(erq.header);
	console.log(req.body);
	console.log(req.params);
	console.log(req.url);
	res.send('getting root');
	res.status(404).send('not found');
});

app.post('/profile', (req, res) => {
	console.log(req.body);
	res.send('Success');
});*/

app.listen(3000);