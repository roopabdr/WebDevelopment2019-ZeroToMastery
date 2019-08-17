const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  array.reduce( (acc,max) => {
    return max > acc ? max : acc;
  },0);
}

function biggestNumberInArray2(arr) {
  const maxArray = array2.filter( (max) => {
    return Number.isInteger(max) ? max : 0;
  });

  let max = 0;
  for (item of maxArray) {
    max = max > item ? max : item;
  }
  console.log(max);
}

function biggestNumberInArray3(arr) {
  let max = 0;

  for (item in array3) {
    console.log(max > item ?  max : item);
  }
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  let got = 0;
  for (item in basket) {
    if (item === lookingFor) {
      got = 1;
      break;
    } else { got = 0;
    }
  }
  if (got === 1) {
    console.log(`Found ${lookingFor}`);
  } else {
    console.log("Not found");
  }
}


//actual and better answer::

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}