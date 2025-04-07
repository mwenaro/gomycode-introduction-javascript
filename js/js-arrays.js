// js/js-arrays.js
const nums = [4, 5, 6, 8, 9];

// console.log(nums);
// Array length => num of array items
const length = nums.length;
console.log(nums, length);
// accessings/updating/removing
// nums[3] = 20
// console.log(nums)
// console.log(nums.length)
// console.log(nums[5])
// remove elemnets by delete
// delete nums[2]
// delete nums[1]
// console.log(nums)
// console.log(nums.length)

// array methods
/*
    -push
    -pop
    -shift
    -unshift
    -reverse
    -join
    -forEach
     -map
*/

//1. push - addds one or more elemenets at the end of an array and returns the new length
// let result = nums.push(1)
// console.log({result})
// console.log(nums, nums.length)
// result = nums.push(25, 30)
// console.log(nums, nums.length)
// console.log({result})

//2. pop - removes an item from the end of an array and return it
// let result = nums.pop()
// console.log(nums, nums.length)
// console.log({result})

// 3.unshift - inserts an element at the start of an array and return the new length
// const result = nums.unshift(7)
// console.log(nums, nums.length)
// console.log({result})

//4. shift - removes an start from the end of an array and return it
// let result = nums.shift()
// console.log(nums, nums.length)
// console.log({result})

// 5/6. reverse and join - reverses array elememnts
// console.log(nums.reverse().join(''))

//7. forEach
// print all lements of the array

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// console.log("------------------------------------------");
// // function logNumber(num,indx, arr) {
// //   console.log(num, indx, arr);
// // }
// //use forEach elm, i, arr
// nums.forEach(function(num){
//     console.log(num)
// });
// console.log("------------------------------------------");
// const value = nums.forEach(elm=>console.log(elm, ' arraow'))

// console.log("------------------------------------------");
// //use forEach

// console.log(value)


// 8. map
// const squareOfNums = nums.map(function(item){
//     return item ** 2
// })

// console.log(squareOfNums, nums)
