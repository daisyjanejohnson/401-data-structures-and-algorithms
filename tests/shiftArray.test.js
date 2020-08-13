test.skip('insertShiftArray exists', () => {
  expect(insertShiftArray).toBeDefined();
})

test.skip('length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x']
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length + 1);
})

it.skip('should not modify the original', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x']
  insertShiftArray(startArray, 'y');
  expect(startArray.length).toBe(6);
})

it.skip('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
})

