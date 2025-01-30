function range(start, end, step = start < end ? 1 : -1) {
  let range = [];
  if (step > 0) for (var i = start; i <= end; i += step) range.push(i);
  else for (var i = start; i >= end; i += step) range.push(i);
  return range;
}

console.log(range(4, 24, -2));
