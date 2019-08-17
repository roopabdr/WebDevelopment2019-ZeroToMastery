// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John"); //false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const newDragons = dragons.filter( drag => {
    return drag.includes("John");
});

console.log(newDragons);


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const expo = (x) => x**100;
expo(2);
expo(1);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//Infinity --> because the bumber is so huge it overflows the 64-bit storage
