'use strict'

const Stack = require('./stack.js');

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value){
    this.stack1.push(value);
  }
  dequeue(){
    // While stack 1 has a head then push the last item into stack 2. "first in" the should be last item in stack 2  and popped out "first out"
      while(this.stack1.peek()){
        this.stack2.push(this.stack1.pop());
      };
      return this.stack2.pop();
     
   
  }
}


module.exports = PseudoQueue;