// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray(arr, item){
  let firstArray = arr.splice(0, Math.ceil(arr.length / 2));

  firstArray.push(item);

  let putArraysTogether = (firstArray.concat(arr))

  return putArraysTogether;

}
module.exports = insertShiftArray;

//TESTS

test('insertShiftArray exists', () => {
  expect(insertShiftArray).toBeDefined();
})

test('length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x']
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length + 1);
})

it('should not modify the original', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x']
  insertShiftArray(startArray, 'y');
  expect(startArray.length).toBe(6);
})

it('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
})