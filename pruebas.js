// let word = "hada";
// // word = word.replace("a","_");
// // console.log(word.replace("a","_"));
// word = word[3]
// console.log(word)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => readline.question(query, resolve));
}

async function main() {

    i= 0;
    while (i<3) {
    const inputLetter = await question('Ingresar una letra\n> ');
    guessTheWord(inputLetter);
    i++;
    }

    readline.close();
}

main();

function guessTheWord(letter) {
  console.log(`You guessed: ${letter}`);
}
