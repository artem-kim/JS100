function factorial (number) {
  let result = 1;
  for (let counter = number; counter > 0; counter--) {
    result *= counter
  }
  return result;
}
