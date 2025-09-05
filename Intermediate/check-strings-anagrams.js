const fisrtStr = "listen";
const secondStr = "silents";

const sortedFirstStr = fisrtStr.split('').sort().join();
const sortedSecondStr =  secondStr.split('').sort().join();

if(sortedFirstStr === sortedSecondStr) {
    console.log(fisrtStr, " and ", secondStr, " both are anagrams");
}
else {
    console.log(fisrtStr, " and ", secondStr, " both are not an anagrams");
}