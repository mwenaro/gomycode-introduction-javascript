// greet()

const username = "mwenaro"; // global var

greet();
// hoisting
const sayHi = () => {
  console.log("Hi!");
  // console.log(isAdmin)
  console.log(age)
};

// console.log(username, 17)
// call/ invoke

sayHi();
function greet() {
  let isAdmin = false; //local var
  var age = 56;
  console.log("Hello from greet ", username);
  // console.log(isAdmin)
}
