let size = 8;
let result = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) {
        result += " ";
      } else {
        result += "#";
      }
    } else {
      if (j % 2 !== 0) {
        result += "#";
      } else {
        result += " ";
      }
    }
  }

  result += "\n";
}

// Sollution 2
// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if ((i + j) % 2 === 0) {
//       result += " "
//     } else {
//       result += "#"
//     }
//   }

//   result += "\n"
// }

console.log(result);
