// ⁠Min Stack:
// •⁠  ⁠Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// •⁠  ⁠How would you implement the min stack using two stacks?
// •⁠  ⁠How would you handle cases where the stack is empty?
// •⁠  ⁠How would you optimize the space complexity of the min stack implementation?


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return;
        }

        const popped = this.stack.pop();

        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        if (this.stack.length === 0) {
            return null; // Stack is empty
        }

        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null; // Stack is empty
        }

        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
minStack.push(10);


console.log(minStack);


console.log(minStack.getMin()); // Output: 1
minStack.pop();
console.log(minStack);

console.log(minStack.top()); 
console.log(minStack);
// Output: 2
console.log(minStack.getMin()); 
console.log(minStack);
// Output: 2
