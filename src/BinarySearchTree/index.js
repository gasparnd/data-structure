class Node {
  constructor(value) {
    this.left = null;
    this.rigth = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.rigth) {
            currentNode.rigth = newNode;
            return this;
          }

          currentNode = currentNode.rigth;
        }
      }
    }
  }

  search(value) {
    if (!this.root) {
      return "Empty tree";
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (value === currentNode.left.value) {
          return { exist: true, node: currentNode.left };
        }

        currentNode = currentNode.left;
      } else {
        if (value > currentNode.value) {
          if (value === currentNode.rigth.value) {
            return { exist: true, node: currentNode.rigth };
          }

          currentNode = currentNode.rigth;
        }
      }
    }
  }

  remove(value) {
    const node = this.search(value);
  }
}
