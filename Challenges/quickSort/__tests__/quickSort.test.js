const {quickSort, partition, swap} = require('../quicksort.js')

describe('quickSort testing', () => {
  it('Should return a sorted array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    expect(quickSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});