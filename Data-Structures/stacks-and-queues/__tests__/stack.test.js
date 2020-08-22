const Stack = require('../stack.js');

it('should be a class', () => {
  expect(Stack).toBeDefined();
});

it('can successfully push onto a stack', () => {
  const stack = new Stack();

  stack.push('apples');
  expect(stack.peek()).toBe('apples');
});

it('can successfully push multiple values onto a stack', () => {
  const stack = new Stack();

  stack.push('apples');
  stack.push('bananas');
  stack.push('oranges');

  expect(stack).toString('{apples}->{bananas}->{oranges}->null');
})


it('can successfully pop off the stack', () => {
  const stack = new Stack();

  stack.push('apples');
  stack.push('bananas');

  const popped = stack.pop();

  expect(popped).toBe('bananas');

  stack.pop();
  expect(stack.isEmpty()).toBeTruthy();
});

it('should check if it is not empty', () => {
  const stack = new Stack();
  stack.push('apples');
  expect(stack.isEmpty()).toBeFalsy();
});

it('should check if it IS empty', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBeTruthy();
});

it('should not allow pop from empty list', () => {

  const stack = new Stack();

  expect(() => stack.pop()).toThrow(RangeError);
  expect(() => stack.pop ()).toThrow('Cannot pop off empty stack');
});

it('should not allow peek from empty list', () => {
  const stack = new Stack();

  expect(() => stack.peek()).toThrow(RangeError);
  expect(() => stack.peek ()).toThrow('Cannot peek at empty stack');
})

it('should instantiate an empty stack', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
});