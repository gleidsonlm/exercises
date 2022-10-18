/* 
    Linear, one after other.
    LIFO = Last In, First Out.
*/

// Modeling the stack data structure
class myStack {
    constructor() {
        this.data = [];
        this.top = -1;
    }
    push(value) {
        this.data[++this.top] = value;
        return this.data;
    }
    pop() {
        if (this.top < 0) return undefined;
        const popEd = this.data[this.top];
        delete this.data[this.top];
        this.data[this.top--]
        return popEd;
    }
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined;
    }
}

// Using the stack data structure
const stack = new myStack();

// Adding items to the stack with push
stack.push('learning');
stack.push('data');
stack.push('structure');
console.log(stack.peek());

// Deleting items from the stack with pop
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());