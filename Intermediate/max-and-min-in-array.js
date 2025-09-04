const numList = [9, 10, 24, 37, 4, 29, 30];

let max = numList[0];
let min = numList[0];

for(let nums of numList) {
    if(max<nums) {
        max = nums;
    }
    if(min>nums) {
        min = nums;
    }
}

console.log("Maximum no. is: ", max);
console.log("Minimum no. is: ", min);
