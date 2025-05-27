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
    this.head = new Node(data, this.head);
    // this.insertAt(data,0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
    //this.getAt(0);
  }

  getLast() {
    //this.getAt(this.size()-1);
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirstItem() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) return null;

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
  }

  removeAt(index) {
    if (!this.head) return null;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = getAt(index - 1);

    if (!prev || !prev.next) return;

    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (!this.head.next) {
      this.head = new Node(data, this.head);
      return;
    }

    let prev = this.getAt(index) || this.getLast();
    prev.next = new Node(data, prev.next);
  }
}
