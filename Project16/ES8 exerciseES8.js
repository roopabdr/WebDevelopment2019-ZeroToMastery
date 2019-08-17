// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);
// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//pads 7 more where turtle takes up 2 characters out of 9

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).forEach((element, index) => {
  console.log(`${element[0]} ${element[1]} `);
});

//actual solution --> join function converts an array into a string - map, filter and reduce the best functions to use it with as they can return -- arrays unlike forEach method above which does not return anything
Object.entries(obj).map(value => value.join(" ")).join(" ");