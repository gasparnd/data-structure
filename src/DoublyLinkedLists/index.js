class Node {
  constructor(value) {
    this.value = value;
    (this.prev = null), (this.next = null);
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const pointerNode = this.getTheIndex(index - 1);

    const holdingNextPointer = pointerNode.next;
    holdingNextPointer.prev = newNode;
    pointerNode.next = newNode;
    newNode.next = holdingNextPointer;
    newNode.prev = pointerNode;
    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index <= this.length) {
      return this.prepend(value);
    }

    const node = this.getTheIndex(index);

    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;

    return this;
  }
}
