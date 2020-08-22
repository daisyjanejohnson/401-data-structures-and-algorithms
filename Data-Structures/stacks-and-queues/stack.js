'use strict';
const Node = require('./node.js');

class Stack {

  constructor(){
    // EXAMPLE OF ARRAY WE WILL NEED LL FOR LAB
    this.stack = [];
  }
  push(value) {
    // push in new node with next being the top
    this.stack.push(value);
  }
  pop(){
    if(this.isEmpty()) {
      throw new RangeError('Cannot pop off empty stack');
    }
    // this.top = this.top-1;
    return this.stack.pop();
  }
  peek(){
    if(this.isEmpty()) {
      throw new RangeError('Cannot peek at empty stack');
    }
    let top = this.stack.length - 1;
    return this.stack[top];
  }
  isEmpty(){
    return this.stack.length === 0;
  }
  toString(){
    let str = '';
    let currentStack = this.stack.value;
    str += `{${currentStack}}->`
    return str + null;
  }
}


module.exports = Stack;