// variables
let surname; //declaration
const DISCOUNT_RATE = 0.09;

const numbers = [12, 45];

surname = "Mwero"; // assignmemt -> Initiolization

let isAdmin = false;

//key worsd used for declaration in js -
// var,
//  let, const

console.log(surname);
surname = "Rashid";
console.log(surname);

// functions
function greet() {
  console.log("Hello ");
  console.log("How old are you?");
  console.log("------------------------");
}

function greetPeople(name) {
  console.log("Hello " + name);
  console.log("How old are you?");
  console.log("------------------------");
}

// greetPeople('Mwero')

// greetPeople('John')

// greetPeople('Jane')

function add(num1, num2) {
  // let result = num1 + num2
  // // console.log(result)
  return num1 + num2;
}

const sum = add(5, 2);
console.log(sum);

// default params
function area(len, wid = 0) {
  if (wid === 0) return len ** 2;

  return len * wid;
}

console.log(area(10, 3));

//similarities
//  - const/let
//  1. blocked scoped
