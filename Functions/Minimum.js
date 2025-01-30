// Function which finds minimum of two numbers
function min(a, b) {
  if (a < b) return a;
  else return b;
}

// Function like Math.min
function min(...args) {
  let min = Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}
