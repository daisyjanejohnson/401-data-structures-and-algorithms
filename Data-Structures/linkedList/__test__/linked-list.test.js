'use strict'
const LinkedList = require('../linked-list.js');

// instatiate = create an instance of a class
it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

// INSERT
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

it('should properly insert multiple notes into the list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('grapes');
  ll.append('lemons');
  expect(ll.head.value).toBe('apples');
  expect(ll.head.next.value).toBe('grapes');
  expect(ll.head.next.next.value).toBe('lemons');
});

//APPEND

it('should append to empty list', () => {
  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');
});
//Challenge 06 UNIT TESTS 1-2
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


it('can successfully add multiple nodes to the end of a linked list', () => {
  const ll = new LinkedList();
  ll.insert('pie');
  ll.append('cake');
  ll.append('ice cream');
  ll.append('pudding');
  expect(console.log).toString('{pie}-->{cake}-->{ice cream}-->{pudding}-->null');
})

//INCLUDES
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

// INSERT BEFORE Challenge 06 UNIT TESTS 3-4
it('can successfully insert a node before a node located in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(3);
  ll.insert(2);
  ll.insertBefore(3, 5);
  let string = ll.toString();
  expect(ll.head.next.value).toEqual(5)
})

it('Can successfully insert a node before the first node of a linked list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.append(2);
  ll.insertBefore(1, 3);
  expect(ll.head.value).toEqual(3);
});

//INSERT AFTER Challenge 06 UNIT TESTS 5-6

it('Can successfully insert after a node in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(3);
  ll.insert(2);
  ll.insertAfter(3,55);
  expect(console.log).toString('{2}-->{3}-->{55}-->{1}-->null');
})

it('Can successfully insert a node after the last node of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(16);
  ll.insert(8);
  ll.insert(4);
  ll.insertAfter(8, 15);
  expect(console.log).toString('{4}-->{8}-->{15}-->{16}-->null');

})