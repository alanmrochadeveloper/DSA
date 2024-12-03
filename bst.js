class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    const newNode = new BstNode(value);
    this.root = newNode;
  }

  insert(value) {
    const newNode = new BstNode(value);
    let temp = this.root;
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    while (temp != null) {
      if (newNode.value > temp.value) {
        if (temp.right == null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      if (newNode.value === temp.value) return undefined;
    }
  }

  contains(value) {
    if (this.root == null) return false;
    let temp = this.root;
    while (temp) {
      if (temp.value === value) return true;
      if (value > temp.value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
    return false;
  }

  rContains(value, node = this.root) {
    if (node === null) return false;
    if (value === node.value) return true;
    if (value < node.value) return this.rContains(value, node.left);
    if (value > node.value) return this.rContains(value, node.right);
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode == null) return new BstNode(value);
    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }
    return currentNode;
  }

  rInsert(value) {
    if (this.root == null) this.root = new BstNode(value);
    this.#rInsert(value);
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (currentNode.left == null && currentNode.right == null) {
        return null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        const minValue = this.minValue(currentNode.right);
        currentNode.value = minValue;
        currentNode.right = this.#deleteNode(minValue, currentNode.right);
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }

  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  clear() {
    this.root = null;
  }

  log(msg = "bst: ") {
    console.log(msg, JSON.stringify(this.root, undefined, 2));
  }
}

const bst = new BST(99);
bst.insert(100);
bst.insert(1);
bst.insert(99);
bst.insert(9);
bst.insert(90);
console.log("min value", bst.minValue(bst.root));
const contains2 = bst.contains(2);
const contains90 = bst.contains(90);
const contains1 = bst.contains(1);

const rContains2 = bst.contains(2);
const rContains90 = bst.contains(90);
const rContains1 = bst.contains(1);

console.log({ contains2, contains90, contains1 });
console.log({ rContains2, rContains90, rContains1 });
bst.log();
bst.clear();
bst.log("after clearing");

bst.rInsert(20);
bst.rInsert(17);
bst.rInsert(15);
bst.rInsert(18);
bst.rInsert(22);
bst.rInsert(21);
bst.rInsert(24);
bst.rInsert(33);
bst.log("after inserting ...");

bst.deleteNode(22);

bst.log("after deleting 32");
console.log("\nRoot: " + bst.root.value);
console.log("\nRoot->Left: " + bst.root.left.value);
console.log("\nRoot->Right: " + bst.root.right.value);
