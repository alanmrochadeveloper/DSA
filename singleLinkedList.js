// not complete yet, missing the insert, to be implemented
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new LinkedListNode(value)
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  size() {
    return this.length;
  }

  // INFO: could be named unshift
  prepend(value) {
    const newNode = new LinkedListNode(value)
    if (this.head == null && this.tail == null) {
      this.head = newNode
      this.tail = newNode
    }
    if (this.size() > 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  append(value) {
    const newNode = new LinkedListNode(value)
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.size() > 0) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return newNode
  }

  pop() {
    if (!this.head) return null;
    let poppedNode = null;
    if (!this.head.next) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    }
    let current = this.head;
    while (current && current.next) {
      if (current && !current.next.next) {
        poppedNode = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
      }
      current = current.next
    }
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return temp
    }
    this.head = this.head.next;
    return temp;
  }

  delete(position) {
    if (!this.size()) return undefined
    let temp = this.head;
    if (this.head === this.tail && position === 1) {
      this.head = null
      this.tail = null
      return temp;
    }
    if (position === 1) {
      this.head = this.head.next;
      return temp;
    }
    let counter = 2;
    let previous = this.head;
    let current = this.head.next;
    while (current != null && counter <= position) {
      if (position === counter) {
        temp = current;
        current = current.next;
        previous.next = current;
        return temp
      };
      previous = current;
      current = current.next
      counter++
    }
    return temp;
  }

  getNode(position) {
    if (!this.size()) return undefined
    if (this.head === this.tail && position === 1) {
      return this.head;
    }
    let counter = 2;
    let previous = this.head;
    let current = this.head.next;
    while (current != null && counter <= position) {
      if (position === counter) {
        return current;
      };
      previous = current;
      current = current.next
      counter++
    }
    return undefined
  }

  getMiddleNode() {
    if (!this.size()) return undefined;
    if (this.size() === 1) return this.head;
    const isEven = this.size() % 2 === 0;
    const position = Math.ceil(this.size() / 2) + (isEven ? 1 : 0);
    const middleNode = this.getNode(position);
    return middleNode;
  }

  getMiddleNodeV2() {
    if (!this.head) return null;
    let current = this.head;
    let counter = 1;
    let middleNode = current;
    while (current) {
      current = current.next;
      if (counter % 2 === 0) middleNode = middleNode.next;
      counter++;
    }
    return middleNode;
  }

  toString(callback = null) {
    return callback ? callback() : `${this}`
  }

  toStringify(callback) {
    return callback ? callback() : `${JSON.stringify(this)}`
  }
  listToString() {
    if (this.head == null) return console.log(`\n0 HEAD {value: null, next: null}\n0 TAIL {value: null, next: null}\n`)
    const regex = new RegExp(/(?<=\bnext":\{)\".*/)
    let current = this.head;
    let counter = 1;
    while (current != null) {
      const stringifiedCurrent = JSON.stringify(current).replace(regex, "...}}")
      console.log(this.head === current ? `${counter} HEAD` : this.tail === current ? `${counter} TAIL` : `${counter}`, stringifiedCurrent)
      current = current.next
      counter++
    }
    console.log("\n")
  }
}

const linkedList = new LinkedList(1)

for (let i = 2; i < 11; i++) {
  linkedList.append(i);
}


linkedList.listToString()

console.log("getMiddleNode = ", linkedList.getMiddleNode())
console.log("findMiddleNode = ", linkedList.getMiddleNodeV2())

linkedList.pop()

console.log("after 1 pop")

linkedList.listToString()

console.log("getMiddleNode = ", linkedList.getMiddleNode())
console.log("findMiddleNode = ", linkedList.getMiddleNodeV2())

linkedList.delete(5)

console.log("after delete at position 5")

linkedList.listToString()

linkedList.prepend(0)
console.log("after 1 prepend with the value 0")

linkedList.listToString()

linkedList.shift()

console.log("after 1 shift")

linkedList.listToString()

