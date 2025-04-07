//  js/js-objects.js

const user = {
  adress: {
    box: 19,
    code: 80114,
    town: "Lokoni",
  },
  isLoggedIn: false,

  getLoginStatus: function () {
    return this.isLoggedIn;
  },
};
console.log(user);
console.log("--------------------------");
// adding properties
user.name = "Mwero";
user["age"] = 57;

// function setAge(age){
//     this.age = age
// }

user.setAge = function (passedAge) {
  this.age = passedAge;
};

user.setLoginStatus = function (login) {
  this.isLoggedIn = login;
};

user.setLoginStatus(true)
user.setAge(300);

console.log(user.getLoginStatus());
console.log(user);

//
delete user.age
delete user.setAge
console.log(user);