// This program will verify if a text introduced is or not a palindrome

const { reverse } = require('dns');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingress the text you want to verify whether is a palindrome or not\n>', text => {
    palindrome(text);
    readline.close();
});

function palindrome(text) {
    let txt = text.toLowerCase();
    txt = txt.split("");
    txt = txt.filter(txt => txt !== " ");
    let reversed = txt.toReversed();
    txt = txt.join("");
    reversed = reversed.join("");
    // console.log(`reversed: ${reversed}`);
    // console.log(`text: ${txt}`);
    if(txt == reversed){
        console.log("The text entered is palindrome!")
    } else {
        console.log("The text entered is NOT palindrome")
    }

}