'use strict';

const Node = require('./node.js');

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
    this.queue = [];
  }
enqueue(value){
  this.queue.push(value);
  this.front=this.queue[0];
  this.rear = value;
  }
  dequeue(){
    if(this.isEmpty()) {
      throw new RangeError('Exception');
    }
    return this.queue.shift();

  }
  peek(){
    if(this.isEmpty()) {
      throw new RangeError('Cannot peek at empty queue');
    }
    return this.front;
  }
  isEmpty(){
    return this.queue.length === 0;
  }
  toString(){
    let str = '';
    let currentQueue = this.queue.value;
    str += `{${currentQueue}}->`;
    return str + null;
  }

}

module.exports = Queue;