'use strict';

const AS = require('../fifo-animal-shelter.js');

describe('FIFO animal shelter tests', () => {
  it('should be a class', () => {
    expect(AS).toBeDefined();
  });

  it('should enqueue dog into the queue', () =>{
    const animal = new AS;
    expect(animal.peek('dog')).toBe('dog');
  })
})