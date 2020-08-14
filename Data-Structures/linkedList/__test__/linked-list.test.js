'use strict'
const LinkedList = require('../linked-list.js');

// instatiate = create an instance of a class
it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

it('should add to empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  // look at the linkedlist head to see if it has what we added 
  expect(ll.head.value).toBe('apples');
});

it('should add to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
});

it('should append to empty list', () => {
  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');
});

it('should append to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');

  ll.append('cucumbers');

  // something is null it is what is LEFT of the '.' ex.) "HEAD".value
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');

  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe();
});


it('should properly insert multiple notes into the list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('grapes');
  ll.append('lemons');
  expect(ll.head.value).toBe('apples');
  expect(ll.head.next.value).toBe('grapes');
  expect(ll.head.next.next.value).toBe('lemons');
});

it('should return true when finding a value within the linked list that exists', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.includes('apples')).toBe(true);
});

it('should return false when finding a value within the linked list that does NOT exist', () => {
  const ll = new LinkedList();
  ll.insert('bananas');
  expect(ll.includes('apples')).toBe(false);
});

it('should properly return a collection of all the values in the linked list', () => {
  const ll = new LinkedList();
  ll.insert('oranges');
  ll.append('grapefruits');
  ll.append('strawberries');
  expect(console.log).toString('{oranges}-->{grapefruits}-->{strawberries}-->null')
})