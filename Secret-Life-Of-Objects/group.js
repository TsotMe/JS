// Generates instructions object for "for of" loop.
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = {
        value: this.group.members[this.position],
        done: false,
      };
      this.position++;

      return result;
    }
  }
}

// This group acts like a set, where it can only have unique values, but uses an array to store the values.
class Group {
  constructor(collection) {
    this.members = collection;
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    return new Group(collection);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

let group = Group.from([10, 20]);

group.add(30); // Add 30 to the group
group.add(40); // Add 40 to the group
group.add(40); // 40 already exists, so it won't be added
group.has(10); // true
group.delete(30); // Remove 30 from the group
group.delete(40); // Remove 40 from the group
group.has(30); // false
group.has(40); // false

for (let value of group) {
  console.log(value);
}
