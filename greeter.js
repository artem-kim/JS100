function askName(prompt) {
  let rlSync = require('readline-sync');
  name = rlSync.question(prompt);
  return name;
}

let firstName = askName("What is your first name?\n");
let lastName = askName("What is your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);
