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

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }
