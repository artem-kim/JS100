function isNotANnumber(value) {
  if (value !== value) {
    return true;
  }
  return false;
}

let a = "foo";
let b = NaN;
let c = "fux";

console.log(isNotANnumber(a));
console.log(isNotANnumber(b));
console.log(isNotANnumber(c));
