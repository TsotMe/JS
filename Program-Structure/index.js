// const totalRuns = 10000;
// let totalTime = 0;

// for (let run = 0; run < totalRuns; run++) {
//   const start = performance.now();

//   // Counting from 0 to 1,000,000
//   let sum = 0;
//   for (let i = 0; i <= 1000000; i++) {
//     sum += i;
//   }

//   const end = performance.now();
//   const executionTime = end - start;
//   totalTime += executionTime;

//   console.log(`Execution time for run ${run + 1}: ${executionTime} milliseconds`);
// }

// const averageTime = totalTime / totalRuns;
// console.log(`Average execution time over ${totalRuns} runs: ${averageTime} milliseconds`);

// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log("Hello " + yourName);

// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// let yourName = "";

// const askForName = () => {
//   rl.question(`What's your name? `, name => {
//     if (name) {
//       yourName = name;
//     }
//   });
// }

// askForName()

// rl.on('line', () => {
//   console.log(yourName);
//   if (yourName) {
//     console.log(`Hello ${yourName}`);
//     rl.close();
//   } else {
//     askForName()
//   }
// })

const readline = require('readline');

// Emit keypress events for the readline input stream
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press Enter to trigger the event...');

// Listen for the 'keypress' event
process.stdin.on('keypress', (str, key) => {
  if (key.name === 'return') {
    console.log('You pressed Enter');
    process.stdin.setRawMode(false); // Reset terminal mode
    process.stdin.pause(); // Stop reading from stdin
  }
});
