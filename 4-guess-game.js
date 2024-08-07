const { isNumberObject } = require('util/types');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

async function main() {

    i = 0;
    while (i < 3) {
        const inputNumber = parseInt(await question('Enter a number:\n> '));
        if (1 <= inputNumber && inputNumber <= 10) {
            guessTheNumber(inputNumber);
            if (inputNumber === rand ){
                break
            }
            i++;
        } else {
            console.log("Your input must be a number between 1 and 10")
        }
        if (i === 3){
        console.log("\n------------------------------YOU LOST! :C TRY AGAIN------------------------------\n")
        }
    }
    

    readline.close();
}

main();

const rand = Math.ceil(Math.random() * 10)

function guessTheNumber(number) {
    if (number === rand){
        console.log(`----------------------CONGRATULATIONS! YOU GUESSED THE NUMBER: ${number}. YOU WON! :D---------------------------`);
    } else if (number > rand){
        console.log("Your number is greater than the searched one")
    }else{
        console.log("Your number is lower than the searched one")
    }
    return rand
}