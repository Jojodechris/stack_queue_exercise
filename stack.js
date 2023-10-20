/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
      const newNode = new Node(val); // Create a new node with the provided value.
  
      if (!this.top) {
        this.top = newNode; // If the stack is empty, set the new node as the top.
      } else {
        newNode.next = this.top; // Link the new node to the current top node.
        this.top = newNode;      // Update the top reference to the new node.
      }
  
      this.size++; // Increment the size of the stack.
      return undefined;
    }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.top) {
      throw new Error('Stack is empty');
    } else {
      const removedValue = this.top.val; // Get the value of the top node.
      this.top = this.top.next; // Update the top reference to the next node.
      this.size--;

      return removedValue;

  }

  /** peek(): return the value of the first node in the stack. */

/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.top = null; // Changed "this.first" to "this.top"
    this.size = 0;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (!this.top) {
      throw new Error('Stack is empty');
    } else {
      const removedValue = this.top.val;
      this.top = this.top.next;
      this.size--;

      return removedValue;
    }
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (this.top === null) {
      throw new Error("Can't peek on an empty stack");
    } else {
      return this.top.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;


  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() 
  {
     return this.top === null;
  }
  }
}

module.exports = Stack;
