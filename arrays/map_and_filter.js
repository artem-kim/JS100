let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// Use map and filter to determine lengths of elements in array, then discard the even value 
let oddLengths = (arr) => {
  let result = arr.map((item) => {
    return item.length;
  }).filter((number) => number % 2 === 1);
  return result;
}
console.log(oddLengths(arr));
