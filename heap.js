class Heap {
  #heap = []

  getHeap() {
    return [...this.#heap]
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }
  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  insert(value) {
    this.#heap.push(value);
    let currentIndex = this.#heap.length - 1;
    while (currentIndex > 0 && this.#heap[currentIndex] > this.#heap[this.#parent(currentIndex)]) {
      this.#swap(currentIndex, this.#parent(currentIndex));
      currentIndex = this.#parent(currentIndex)
    }
  }

  remove() {
    if (!this.getHeap().length) return undefined;
    if (this.getHeap().length === 1) {
      return this.#heap.pop()
    }
    let currentIndex = 0;
    const removed = this.#heap[currentIndex];
    this.#heap[currentIndex] = this.#heap.pop();
    this.#sinkDown(currentIndex)
    return removed;
  }

  #sinkDown(currentIndex) {
    while (currentIndex < this.getHeap().length && (this.getHeap()[currentIndex] < this.getHeap()[this.#leftChild(currentIndex)] || this.getHeap()[currentIndex] < this.getHeap()[this.#rightChild(currentIndex)])) {
      let greatestChildIndex;
      if (this.getHeap()[this.#leftChild(currentIndex)] > this.getHeap()[this.#rightChild(currentIndex)]) {
        greatestChildIndex = this.#leftChild(currentIndex);
      }
      if (this.getHeap()[this.#leftChild(currentIndex)] < this.getHeap()[this.#rightChild(currentIndex)]) {
        greatestChildIndex = this.#rightChild(currentIndex);
      }
      if (this.getHeap()[currentIndex] < this.getHeap()[greatestChildIndex]) {
        this.#swap(currentIndex, greatestChildIndex);
        currentIndex = greatestChildIndex
      }
    }
  }

  log(msg = "log: ") {
    console.log(msg, { heap: this.getHeap() })
  }
}

const heap = new Heap();

const values = [95, 75, 80, 55, 60, 50, 65]

for (let value of values) {
  heap.log(`after insert ${value}`, heap.insert(value))
}

heap.log(`after remove`, heap.remove())
heap.log(`after remove`, heap.remove())
