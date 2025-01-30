const myArray = ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];

function reverseArray(array) {
  return array.map((_, index, arr) => arr[arr.length - 1 - index]);
}

// console.log(reverseArray(myArray)); // ["C", "B", "A"]
// console.log(myArray); // ["A", "B", "C"]

function reverseArrayInPlace(array) {
  // const reversedArray = reverseArray(array);

  // reversedArray.forEach((element, index) => (array[index] = element));

  array = [1, 2, 3];

  // reverseArray.forEach((element) => {
  //   console.log(element);
  // });
  // for (let i = 0; i < array.length; i++) {
  //   array[i] = array[array.length - 1 - i];
  // }
  return array;
}

console.log(reverseArrayInPlace(arrayValue)); // [1, 2, 3]
console.log(arrayValue); // [1, 2, 3, 4, 5]

// array[i] = array[array.length - 1 - i];
// array[array.length - 1 - i] = old;
