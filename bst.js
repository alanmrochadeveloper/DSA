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

  rContains (value, node = this.root) {
    if(node === null) return false;
    if(value === node.value) return true;
    if(value < node.value ) return this.rContains(value, node.left);
    if(value > node.value ) return this.rContains(value, node.right);
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

const rContains2 = bst.contains(2);
const rContains90 = bst.contains(90);
const rContains1 = bst.contains(1);
console.log({ contains2, contains90, contains1 });
console.log({ rContains2, rContains90, rContains1 });
bst.log();
