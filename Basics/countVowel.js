const sent = "I am a Full Stack AI Engineer";

let count = 0;

for(let i = 0; i<sent.length-1; i++) {
    if(sent[i] ==="a" || sent[i]==="e" || sent[i]==="i" || sent[i]==="o" || sent[i]=== "u" || sent[i]==="A" || sent[i]==="E" || sent[i]==="I" || sent[i]==="O" || sent[i]==="U") {
    count++;
    }
}

console.log("Total no. of vowels in: ", sent, " : ",count);


