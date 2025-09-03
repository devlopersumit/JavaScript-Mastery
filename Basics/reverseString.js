const stringValue = "I am a Full Stack AI Engineer";

const len = stringValue.length;

const reverseStringArray = [];

console.log("Reversed String value is: \t");

for(let i = len-1;i>=0;i--) {
    
    reverseStringArray.push(stringValue[i]);
}
console.log(reverseStringArray);

const reverseString = reverseStringArray.join("");
console.log(reverseString);


