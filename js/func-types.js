// functions
// 1. function declaration
/*
    function add(n, m){
    return n +m
    }

2. function expression
const cube = function (n){
return n * n * n
}

3. callback function
    - a func that is received by another function as an argument

4. H.O.F 
  - A function that accepts/retuens another function.

5. IIFE - Imediately Invoked Function Exprress
  - Is an automatically invoked function
*/

// funcion express
const cube = function (n) {
  return n * n * n;
};

console.log(cube(1));

//callback
function gradingSystem(mark, cb) {
  const grade = cb(mark);

  console.log(`You scored ${mark}% which is grade ${grade}`);
}

function getGrade(score) {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
}

// gradingSystem(30, getGrade);

// IIFE
(
    (val) => {

  console.log("Hello from IIFE");
  console.log(val);
}
)(45);
