/* 

A stack is an ordered collection of items that follows the last in,
first out (LIFO) principle. 

The addition of new items or the removal of existing items takes place 
at the same end. 

The end of the stack is known as the TOP, 
and the opposite side is known as the BASE. 

The newest elements are near the top, 
and the oldest elements are near the base.

AVERAGE BIG O

ACCESS = O(n) 

SEARCH = O(n) 

INSERTION = O(1) = Constant Time

DELETION = O(1) = Constant Time

*/

// IMPLEMENTION

class Stack {
  constructor() {
    this.items = [];
  }

  // adding items to the end (top) of the stack
  push(element) {
    this.items.push(element);
  }

  // removing items from the end (top) of the stack
  pop(element) {
    this.items.pop();
  }

  // ADDITIONAL HELPER METHODS

  // get the size of the stack or number of elements in it
  size() {
    return this.items.length;
  }

  // show the last added element from the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // check whether the stack is empty or not
  // return true if stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }

  // remove all stack items and empty the stack
  // another way - call pop method until stack is empty
  clear() {
    this.items = [];
  }
}

// USAGE
const stack = new Stack();
console.log(stack.isEmpty()); // outputs true

// add items to stack
stack.push(5);
stack.push(8);
console.log(stack.peek()); // outputs 8

stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); // outputs false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
