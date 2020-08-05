// Search array for every element that matches regex and return all matching elements
let allMatches = (array, string) => {
  let newArray = [];
  array.forEach((item) => {
    if (string.test(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));
