let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// ignore all non-integer values from the input
let removeNonInteger = (array) => array.filter(Number.isInteger);
let newArray = removeNonInteger(array);
console.log(newArray);
