// One line comment

/*
This is 
    a
Multline 

comment!
*/

// to log something into the broswer console
// console.log('Hello, World!')

// write
// document.write('Hello World!')
// 1. alert
// alert("Login Successfully!")
//2. propmt
// let myName = prompt("Enter Name")
// alert('Your name is '+myName)
// 3. confirm
// let input = confirm("Are you sure you want to dlete this account!");
// console.log(input);
// if (input === true) {
//   alert("Account succcefully deleted!");
// } else {
//   alert("Thank for cancelling the delete operation!");
// }

//data types
/* - primitves : 
   1. boolean - true/false
   2. number  - form numbers
   3. string - alnumbers in single/double quotes
   4. null - nothing & it's value is null
   5. undefined - if a values hasn't been dedfined
   6. symbol

   - complex data types
    1. Object - a list of comma seperated key-value pairs enclosed in curl braces {}
    2. Array - a comma seperated list of values enclosed by square brackts []

    types of barckstes
         1. ()
         2. {}
         3. []
         4. <>


   */
//   2 + 5 = 7
let user = {
  name: "Mwero",
  age: 57,
  userName: "mwenaro",
  isAmin: false,
  adress: { town: "Mazeras", city: "Mombasa", box: 19 },
};
//  userName

let studentDetails = ["Rashid", 56, 78, 37, 90, 62];
//  let student = { name: "Rashid", mat: 56, eng: 78, swa: 37, sci: 90, ssre: 62 };
// console.log(typeof studentDetails);

// console.log(user)
// console.log(user.name)
// console.log(user['userName'])
// //add elemts
// user.code = 80114
// user['gen'] = 'm'
// // update
// user.name = 'Mwero Abdalla'
// user['age'] = 60

// //remove
// delete user.adress
// delete user['age']
// console.log(user)

console.log(studentDetails);
console.log(studentDetails.length);
console.log(studentDetails[1]);

studentDetails[6] = 5;
// uodate
studentDetails[0] = "Rashid Mwero";

// delete
delete studentDetails[2];
console.log(studentDetails[2]);
console.log(studentDetails);
