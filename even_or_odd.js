function evenOrOdd (n) {
  if (Number.isInteger(n)) {
    n % 2 === 0 ? console.log("even") : console.log("odd");
  } else {
    console.log("please enter an integer");
    return 1;
  }
}
