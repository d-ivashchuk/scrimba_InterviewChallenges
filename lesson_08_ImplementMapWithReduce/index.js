const array = [1, 2, 3, 4, 5];

const mappingFunction = v => v + 1;

const mappedArray = array.map(mappingFunction);

console.log(mappedArray);

const customMapping = (array, mappingFunction) => {
  return array.reduce(
    (accumulator, value) => [...accumulator, mappingFunction(value)],
    []
  );
};

console.log(customMapping(array, mappingFunction));

[1+1]
[2,3]
[...[2,3],3+1]
...