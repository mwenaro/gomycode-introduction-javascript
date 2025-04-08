//  js/for-in-and-for-of.js
const arr = [12, 3, 4, 60];
const user = {name:'Mwero', age:57, isAdmin:true}
// console.log(arr);
const name = "Mwero Abdalla"
// for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for of
// for (let num of name) {
//   console.log(num);
// }

const values = Object.values(user)
const keys = Object.keys(user)
const entries = Object.entries(user)
// {name:'Mwero', age:57, isAdmin:true}
/*
[
    ["name", "Mwero"],
    ["age", 57],
    ["isAdmin", true]
]
*/
// for (const val of  Object.values(user)) {
//     console.log(val)
// }
// for (const val of  Object.keys(user)) {
//     console.log(val)
// }

// for (const val of  Object.entries(user)) {
//     console.log(val[1])
// }


// for in -> we in to keys of objects or indexes of iterables
for (let key in user){

    console.log(key + " => "+user[key])
}

for(let k in arr){
    console.log(arr[k])
}

for(let k in name){
    console.log(name[k])
}