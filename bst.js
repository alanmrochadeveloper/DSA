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
      return temp;
    }
    while (temp != null) {
      if (newNode.value > temp.value) {
        if (temp.right == null) {
          temp.right = newNode;
          return newNode;
        }
        temp = temp.right;
      }
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode;
          return newNode;
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
const contains2 = bst.contains(2);
const contains90 = bst.contains(90);
const contains1 = bst.contains(1);
console.log({ contains2, contains90, contains1 });
bst.log();
