function ccNumberValidator(ccNumber){
    let arr = ccNumber.split("").reverse();
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        let num = parseInt(arr[i])
        if (i%2 === 0){
            sum += num;
        } else {
            if (num*2 <= 9){
                sum += num*2;
            } else {
                sum += num*2-9;
            }
        }
    }

    if (sum%10 === 0){
        return `Your credit card is valid`;
    } else {
        return `Your credit card is not valid, try again`;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingress your credit card number (not spaces or dashes allowed)\n>', ccNumber => {
    console.log(ccNumberValidator(ccNumber));
      readline.close();
    });