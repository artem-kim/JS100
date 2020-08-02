let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce((filteredArray, currentValue) => {
    let length = currentValue.length;
    if (length % 2 === 1) {
      filteredArray.push(length);
    }
    return filteredArray;
  }, []);
}

console.log(oddLengths(arr));
