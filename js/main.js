// One line comment

/*
This is 
    a
Multline 

comment!
*/

// to log something into the broswer console
console.log('Hello, World!')

// write
document.write('Hello World!')
// 1. alert
// alert("Login Successfully!")
//2. propmt
// let myName = prompt("Enter Name")
// alert('Your name is '+myName)
// 3. confirm
let input = confirm('Are you sure you want to dlete this account!')
console.log(input)
if(input === true) alert("Account succcefully deleted!")
else alert("Thank for cancelling the delete operation!")