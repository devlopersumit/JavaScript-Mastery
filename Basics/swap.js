let num1 = 10;
let num2 = 20;

console.log("Before Swapping:");
console.log("num1: ", num1, " and ", "num2: ", num2);

num1 = num1 + num2; //10 +20 = 30
num2 = num1 - num2; // 30 - 20 =10
num1 = num1 - num2;  // 30 - 10 = 20

console.log("After Swapping:");
console.log("num1: ", num1, " and ", "num2: ", num2);