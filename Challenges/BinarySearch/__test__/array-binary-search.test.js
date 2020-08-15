'use strict';
const binarySearch = require('../array-binary-search.js');

describe.skip('Overall test of binary search', () => {
  it('should return the index of the array\'s element that is equal to the search key', () => {
    const testArray = [4,8,15,16,23,42];
    const result = binarySearch(testArray, 15);
    expect(result).toStrictEqual(2);
  })
  it('Should return -1 if nothing matches', () => {
    const testArray = [11,22,33,44,55,66,77];
    const result = binarySearch(testArray, 90);
    expect(result).toStrictEqual(-1);
    // expect(binarySearch([4,8,15,16,23,42],80)).toBe(-1);
  });
});