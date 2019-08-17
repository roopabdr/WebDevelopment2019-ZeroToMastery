var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var todosImp = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];


/*for (var i=0; i<todos.length; i++) {
	todos[i] = todos[i]+"!";
}*/

/*var counter1 = 0;
while (counter1<10) {
	console.log(counter1);
	counter1++;
}*/

/*var counter2 = 10;

do {
	console.log(counter2);
	counter2--;
} while (counter2>0);*/

/*todos.forEach(function(todo,index){
	console.log(todo,index);
});*/

function logtodos(todo,index){
	console.log(todo,index);
}

todos.forEach(logtodos);
todosImp.forEach(logtodos);