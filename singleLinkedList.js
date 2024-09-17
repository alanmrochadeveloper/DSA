// not complete yet, missing the delete, and insert, to be implemented
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

  }

  toString(callback = null) {
    return callback ? callback() : `${this}`
  }

  toStringify(callback) {
    return callback ? callback() : `${JSON.stringify(this)}`
  }
  listToString() {
    const regex = new RegExp(/(?<=\bnext":\{)\".*/)
    regex.test()
    let current = this.head;
    let counter = 1;
    while (current != null) {
      const stringifiedCurrent = JSON.stringify(current).replace(regex, "...}}")
      console.log(this.head === current ? `${counter} HEAD` : this.tail === current ? `${counter} TAIL` : `${counter}`, stringifiedCurrent)
      current = current.next
      counter++
    }
  }
}

const linkedList = new LinkedList(-1)

linkedList.prepend(1)

linkedList.prepend(0)

linkedList.append(10)

linkedList.append(11)

linkedList.prepend(12)

linkedList.listToString()
linkedList.pop()
console.log("after 1 pop", linkedList.size())
linkedList.listToString()
linkedList.pop()
linkedList.pop()
console.log("after 2 pops", linkedList.size())
linkedList.listToString()
