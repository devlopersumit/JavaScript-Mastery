const term = 100;
const primeNumbers = [];
for(let i =1;i<=100;i++) {
    if(i==1) {
        console.log("1 is neither a prime number nor a composite");
        continue;
    }
    let count = 0;
       
        for(let j=1;j<=Math.floor(i/2);j++) {
            if(i%j === 0) {
                count++;
            }
        }
    if(count === 1) {
        primeNumbers.push(i);
    }
}

console.log("Prime numbers upto ", term, " = ", primeNumbers.join(','));

