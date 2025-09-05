const numList = [27, 2, 24, 14, 38, 17, 25];

console.log("Before Sorting:", numList);

for(let i=0;i<numList.length;i++) {
    for(let j=0;j<numList.length-i;j++) {
    if(numList[j]>numList[j+1]) {
        let temp = numList[j];
        numList[j] = numList[j+1];
        numList[j+1] = temp;
    }
    }
}

console.log("After Sorting:", numList);