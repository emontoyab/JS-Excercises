function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var userData = {};
  
  readline.question('What is your name?\n>', name => {
    userData.name = name;
    readline.question('What is your lastname?\n>', lastName => {
      userData.lastName = lastName;

      console.log(`Username created succesfully.\nYour username is ${userData.name.slice(0,3).toLowerCase()}`+
      `${userData.lastName.slice(0,3).toLowerCase()}`+`${getRandomInt(10)}`);

      readline.close();
    });
  });

  
  