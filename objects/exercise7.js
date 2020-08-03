let objToCopy = {
  foo: 1,
  bar: 2,
};

let copyObj = (objectCopy, keys) => {
  let finalObj = {};
  if (keys) {
    keys.forEach((key) => {
      finalObj[key] = objectCopy[key];
    });
    return finalObj;
  } else {
    return Object.assign(finalObj, objectCopy);
  }
}


let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2);
