function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20]));

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {},
    },
  },
};

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value ?? node);
  }
  return array;
}

console.log(listToArray(list));

function prepend(value, list) {
  return { value, rest: list };
}

console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
  console.log(list, n);
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(nth(list, 2));
