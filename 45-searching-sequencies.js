function buscarSecuencias(seq, val){

    let totalArr = [];
    let seq2 = [].concat(seq);

    for(let n of seq){
        let sum = 0;
        let sumArr = [];

        for (let i of seq2){

            if (sum > val){
                
                break

            } else {
                sum += i;
                sumArr.push(i);

                if (sum === val){
                    totalArr.push(sumArr);
                    break
                }
            }
        }
        seq2.shift();
    }
    return totalArr
}


// buscarSecuencias([1,2,3,4,5,6,7,8,9,10], 15)

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Ingress your credit card number (not spaces or dashes allowed)\n>', ccNumber => {
//     console.log(buscarSecuencias(ccNumber));
//       readline.close();
//     });

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Enter a sequence (you must enter it in array format, including the square brackets. e.g. [1,2,3])\n>', seq => {
    seq = JSON.parse(seq);
    readline.question('Enter the value you want to validate\n>', val => {
      val = parseInt(val);

        console.log(buscarSecuencias(seq,val));

      readline.close();
    });
  });

