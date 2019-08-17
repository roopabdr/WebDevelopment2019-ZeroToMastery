const app = require('http')
			.createServer((req, res) => res.send('oh hi there!'));

const PORT = process.env.PORT;
//const DATABASE_URL = process.env.DATABASE_URL;//dynamically setting up database variable 

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

console.log(PORT);