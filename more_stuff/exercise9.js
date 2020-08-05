function isZero(number) {
  if (5 / number === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(isZero(0));
console.log(isZero(-0));
console.log(isZero(99));
