const numList = [9, 10, 24, 37, 4, 29, 30, 4, 9, 24, 37, 50];

const uniqueList = numList.filter((nums, index) => {
    return numList.indexOf(nums) === index;
});

const duplicateList = numList.filter((nums, index) => {
    return numList.indexOf(nums) !== index;
});

console.log("Unique number list is: ", uniqueList);
console.log("duplicate number list is: ", duplicateList);
