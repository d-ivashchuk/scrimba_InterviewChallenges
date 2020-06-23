const nestedArray = [1, 2, [3], [4, [5]]];

const flattenArray = (array) => {
  return array.reduce(
    (accumulator, iterationValue) =>
      Array.isArray(iterationValue)
        ? [...accumulator, ...flattenArray(iterationValue)]
        : [...accumulator, iterationValue],
    []
  );
};

console.log(flattenArray(nestedArray));
