const basket = ["🍎", "🍐", "🍍", "🍎", "🍐"];

const reduceFunc = (arr) =>
  arr.reduce(
    (accumulator, value) =>
      accumulator.includes(value) ? accumulator : [...accumulator, value],
    []
  );

console.log(reduceFunc(basket));
