/*
1. for loop
2. while loop
3. do while loop
// 4. for of
// 5. for in 
*/

// // while loop
// let counter = 1;
// // printing 1 - 10
// while (counter <= 10) {
//   console.log(counter);
//   counter++; // counter += 1
// }
// console.log("-----------------------");

// // do while
// // printing 10 - 1
// let n = 10;
// do {
//   console.log(n);
//   n--;
// } while (n > 0);

// for loops
// 1 - 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("------");
for (let i = 10; i > 0; i--) {
    if (i % 2 === 0) continue;

  console.log(i);
  //   if(i ===9) break // quits and exit the loop
 
}

// break / continue
