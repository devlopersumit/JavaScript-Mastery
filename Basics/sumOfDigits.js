let number = 12345;

let sum = 0;

while(number!==0) {
    let rem = number%10;
    sum = sum + rem;
    number = Math.floor(number/10);
}

console.log("Sum of digits: ", sum);
