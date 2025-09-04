const numList = [-9, -10, -24, -37, -4, -29, -30];

let max = numList[0];
let secondMax = null;

for (let nums of numList) {
  if (nums > max) {
    secondMax = max;
    max = nums;
  } else if (secondMax === null || (nums > secondMax && nums < max)) {
    secondMax = nums;
  }
}

console.log("Maximum no. is:", max);
console.log("Second maximum no. is:", secondMax);
