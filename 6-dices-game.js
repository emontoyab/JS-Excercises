function dices(){
    console.log("The dices are going to be thrown");
    const dice1 = Math.ceil(Math.random()*6);
    console.log(`\nResult of first dice:\n\n\t ${dice1}\n`);
    const dice2 = Math.ceil(Math.random()*6);
    console.log(`Result of second dice:\n\n\t ${dice2}\n`);
    console.log(`The sum of both dices is:\n\n\t ${dice1+dice2}\n`)
}

dices();