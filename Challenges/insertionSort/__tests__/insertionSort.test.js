'use strict';
const insertionSort = require('../insertionSort.js');

describe('Insertion Sort Tests', () => {
  it('should return a sorted array', () => {
    expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  })
})