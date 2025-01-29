for (let i = 1; i <= 100; i++) {
  let result = "";

  if (i % 3 === 0) {
    result = "Fizz";
  }

  if (i % 5 === 0 && i % 3 !== 0) {
    result = "Buzz";
  }

  if (i % 5 === 0 && i % 3 === 0) {
    result = "FizzBuzz";
  }

  console.log(result || i);
}

// for (let i = 1; i <= 100; i++) {
//   let result = "";
//   if (i % 3 == 0) result += "Fizz";
//   if (i % 5 == 0) result += "Buzz";
//   console.log(result || i);
// }
