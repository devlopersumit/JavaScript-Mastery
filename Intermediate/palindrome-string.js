function reverseStr(str) {
    let left =0;
    let right = str.length-1;

    str = str.split('');

    if(left<right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
    }
    return str.join('');
}

const str = "sumit";

const reverseString = reverseStr(str);
console.log(reverseString);


if(str === reverseString) {
    console.log(str," is a palindrome string");
}
else {
    console.log(str," is not a palindrome string");
}