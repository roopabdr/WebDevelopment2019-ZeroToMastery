// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const array2 = [];

array.forEach((obj) => {
  let object = obj;
  object.username = `${object.username}!`;
  array2.push(object);
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const array3 = array.map((obj) =>{
  let object = obj;
  object.username = `${object.username}?`;
  return object;
});

//Filter the array to only include users who are on team: red
const array4 = array.filter((obj) =>{return obj.team==="red";});

//Find out the total score of all users using reduce
const array5 = array.reduce((acc, obj) => {
  return acc + obj.score;
},0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const array6 = array.map( (user) => {
  user.items = user.items.map( (item) => {
    return item + "!";
  });
  return user;
} );