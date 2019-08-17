var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "Nice learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo coool"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pwd) {
	/*database.forEach(function(users,index){
		if (users.username===user && users.password===pwd) {
			return true;
		}
	});*/

	for (var i=0; i<database.length; i++) {
		if (database[i].username===user && database[i].password===pwd) {
			return true;
		}
	}

	return false;
}

function signIn(user, pwd) {
	if(isUserValid(user,pwd)===true) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password!");
	}

	// console.log(isUserValid(user, pwd));
	
}

signIn(userNamePrompt, passwordPrompt);