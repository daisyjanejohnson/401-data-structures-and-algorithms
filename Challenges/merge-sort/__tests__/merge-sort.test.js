'use strict';

const mergeSort = require('../merge-sort.js')

describe('Merge Sort Tests', () => {
  it('Should return a sorted array', () => {
    let array = [8,4,23,42,16,15];
    expect(mergeSort(array)).toEqual([4,8,15,16,23,42]);
  })

})
// describe('Merge Sort Tests', () => {
//   it('should return a sorted array', () => {
//       let array = [8,4,23,42,16,15];
//       expect(mergeSort(array)).toEqual([4,8,15,16,23,42]);
//     });
//     it('should return an array originally sorted in descending order to ascending order', () => {
//       let reverseArray = [20,18,12,8,5,-2];
//       expect(mergeSort(reverseArray)).toEqual([-2,5,8,12,18,20]);
//     });
//     it('should sort an array with multiples of same number correctly', () => {
//       let multiplesArray = [5,12,7,5,5,7];
//       expect(mergeSort(multiplesArray)).toEqual([5,5,5,7,7,12]);
//     });
//     it('should correctly sort a NEARLY sorted array', () => {
//       let nearlyArray = [2,3,5,7,13,11];
//       expect(mergeSort(nearlyArray)).toEqual([2,3,5,7,11,13]);
//     });
//     it('should return empty on an empty array', () => {
//       let empty = [];
//       expect(mergeSort(empty)).toEqual([]);
//     })
//   })