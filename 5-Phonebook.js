const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => readline.question(query, resolve));
}

async function main(){

  i = true;
  while (i) {
      const menu = await question('\nSelect the number of one of the following:\n\n\t1. Add a contact\n\t2. Search for a contact\n\t3. Exit.\n\nIngress your option number\n> ')
      if (menu == 1){
        const name = await question('Enter the contact name\n> ');
        const number = await question('Enter the contact number\n> ');

        phonebook(name, number);
        // console.log(`Contact was succesfully added.\n`);
      } else if (menu == 2){
        const name = await question('Enter the contact name\n> ');
        if(Object.keys(phoneBook).includes(name)){
          console.log(`\nThe phone number of the contact ${name} is ${phoneBook[name]}\n`)
        }else{
          console.log(`The contact ${name} is not currently saved in the phonebook`)
        }
        
      } else if (menu ==3){
        i = false
        console.log("\nThanks for using this Phonebook. See you soon!\n")
      }else{
        console.log("Your option is not valid. Please select a number between 1 and 3.")
      }
      
  }
  

  readline.close();
}

main();

let phoneBook = {}

function phonebook(name, number){
  phoneBook[name] = number;
  console.log ('Contact was succesfully added.\n');
  console.log (phoneBook)  
}