function printTree(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let hashes = '#'.repeat(i * 2 - 1);
    console.log(spaces + hashes + spaces);
  }
}

printTree(8);
