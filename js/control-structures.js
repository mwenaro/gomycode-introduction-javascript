/*
 1. if
 if(age >= 18){
    console.log('can get ID')
}

 2. else
 
if (age >= 18) {
  console.log("can get ID");
} else {
  console.log("too young");
}
 3. else if
 console.log("checking your age ...");
const age = 90;
if (age < 18) {
  console.log("too young");
} else if (age === 18) {
  console.log("can get ID");
} else if (age >= 30 && age <= 40) {
  console.log("You should have a job!");
} else if (age >= 60) {
  console.log("Retired!");
} else {
  console.log("not mentioned!");
}

 4. switch
 const guess = 0;
switch (guess) {
  case 1:
    console.log("Too low! Try agin");
    break;
  case 2:
    console.log("A litle low! Try agin");
    break;
  case 3:
    console.log("Wow! Congrats you've won!");
    break;
  case 4:
    console.log("A litle higher! Try agin");
    break;
  case 5:
    console.log("Too High! Try agin");
    break;
  default:
    console.log("Out of range");
}

*/

const guess = 0;
switch (guess) {
  case 1:
    console.log("Too low! Try agin");
    break;
  case 2:
    console.log("A litle low! Try agin");
    break;
  case 3:
    console.log("Wow! Congrats you've won!");
    break;
  case 4:
    console.log("A litle higher! Try agin");
    break;
  case 5:
    console.log("Too High! Try agin");
    break;
  default:
    console.log("Out of range");
}
