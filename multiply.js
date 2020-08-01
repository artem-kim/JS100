let multiply = () => {
  let rlSync = require('readline-sync');
  let firstN = rlSync.question("Enter the first number: \n");
  let secondN = rlSync.question("Enter the second number: \n");
  console.log(`${firstN} * ${secondN} = ${firstN * secondN}`);
}
multiply();
