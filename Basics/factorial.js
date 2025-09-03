const number = 7;

// //Using Loop
// let fact = 1;
// for(let i=1;i<=number;i++) {
//     fact = fact*i;
// }

// console.log("Factorial of ", number, " = ", fact);


function factorial(number) {
    if(number == 0) return 1;

    return (number*factorial(number-1));
}

console.log("Factorial of ", number, " = ", factorial(number));
