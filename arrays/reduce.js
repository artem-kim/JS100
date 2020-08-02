let numbers = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue * currentValue);
  }, 1);
}

console.log(sumOfSquares(numbers));
