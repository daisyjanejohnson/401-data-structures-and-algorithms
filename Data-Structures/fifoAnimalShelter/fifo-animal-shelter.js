'use strict';

let Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.dog = new Queue;
    this.cat = new Queue;
  }
  enqueue(animal) {
    if (animal === 'dog') {
      this.dog.enqueue(animal);
    }
    if (animal === 'cat') {
      this.cat.enqueue(animal);
    } else{
      return null;
    }
  }
  dequeue(pref) {
    if (pref === 'cat'){
      return this.cat.dequeue();
    } if(pref === 'dog'){
      return this.dog.dequeue();
    }else{
      return null;
    }
  }
}

module.exports = AnimalShelter;