/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val); // Create a new node with the provided value.

    if (!this.first) {
      this.first = newNode; // If the queue is empty, set the new node as the first node.
      this.last = newNode;  // Also, set it as the last node since it's the only node.
    } else {
      this.last.next = newNode; // If the queue is not empty, link the last node to the new node.
      this.last = newNode;      // Update the last reference to the new node.
    }

    this.size++; // Increment the size of the queue.

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) {
      throw new Error('Queue is empty');
    } else {
      const removedValue = this.first.val;
      this.first = this.first.next; // Update the first reference to the next node.
      this.size--;

      if (this.size === 0) {
        this.last = null; // If the queue becomes empty, also update the last reference.
      }

      return removedValue;
    }
  }
  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) {
      return null;
    } else {
      return this.first.val;
  }
}

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    } else {
      return false;
    }
  }
}

  module.exports = Queue;
