const term = 10;

let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);

for(let i =2;i<=term;i++) {
    let n3 = n1+n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
}
