let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperKeys = [];
Object.keys(obj).forEach((key) => {
  upperKeys.push(key.toUpperCase());
});
console.log(upperKeys);
