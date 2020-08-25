'use strict';

class Stack {
  constructor(){
    this.stack = [];
  }

push(value){
  this.stack.push(value);
}
pop(){
return this.stack.pop();
}
peek(){
  let top = this.stack.length - 1;
  return this.stack[top];
}
}

module.exports = Stack;