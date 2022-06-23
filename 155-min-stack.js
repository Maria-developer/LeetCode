var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1];
};

MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

/* 

What stacks are:

    https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=3

    https://coderbyte.com/video/introducion-to-stacks

Refresh on linked lists:

    https://coderbyte.com/video/the-basics-of-linked-lists

*/