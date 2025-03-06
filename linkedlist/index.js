// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }
  size() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let cNode = this.head.next;
    let pNode = this.head;
    while (cNode.next != null) {
      pNode = pNode.next;
      cNode = cNode.next;
    }
    pNode.next = null;
    return cNode;
  }

  insertLast(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // this.getLast().next = newNode;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
  getAt(n) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === n) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;

    // if (n > this.size() || n < 0) {
    //   return null;
    // } else {
    //   let currentNode = this.head;
    //   let count = 0;
    //   while (count < n) {
    //     currentNode = currentNode.next;
    //     count++;
    //   }
    //   return currentNode;
    // }
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }
    if (n == 0) {
      this.head = this.head.next;
    }
    let prevNode = this.getAt(n - 1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;

    // sol2
    // if (!this.head) {
    //     return;
    //   }

    // if (n === 0) {
    //   this.head = this.head.next;
    // }
    // let prevNode = this.head;
    // let counter = 1;
    // while (prevNode.next) {
    //   if (counter === n) {
    //     prevNode.next = prevNode.next.next;
    //     return;
    //   }
    //   counter++;
    //   prevNode = prevNode.next;
    // }
    // return;
  }

  insertAt(data, n) {
    let newNode = new Node(data);
    if (!this.head) {
      return (this.head = newNode);
    }
    if (n === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let prev = this.head;
    let count = 0;
    while (prev.next) {
      if (count === n - 1) {
        newNode.next = prev.next;
        prev.next = newNode;
        return;
      }
      prev = prev.next;
      count++;
    }
    prev.next = newNode;
  }

  forEach(func) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      func(currentNode, counter);
      currentNode = currentNode.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const l = new LinkedList();

l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);

l.forEach((node) => {
  node.data += 10;
});

// console.log(l.getAt(2));

module.exports = { Node, LinkedList };
