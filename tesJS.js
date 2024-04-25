console.log("poulet");

const obj = {
  a: 1,
  b: 2,
};

console.log(obj);

const { a } = obj;

console.log(a);

const obj2 = {
  c: 3,
  d: 4,
};

const pouletObj = { ...obj, ...obj2 };

console.log(pouletObj);
