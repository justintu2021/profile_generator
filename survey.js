
const readline = require('readline');
const arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  arr.push(answer)

  rl.question('What\'s your name? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    arr.push(answer)

    rl.question('What\'s an activity you like doing? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      arr.push(answer)

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      arr.push(answer)

      console.log(arr.join(', '));
      rl.close();
      })
    })
  })
});

