'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('../tree.js');
const fizzBuzz = require('../fizzbuzz.js');
const { isMainThread } = require('worker_threads');
const { hasUncaughtExceptionCaptureCallback } = require('process');

function 


describe('Fizz Buzz Tests', () => {
  it('should return null on an empty node', () => {
    let tree = new BinaryTree();
    hasUncaughtExceptionCaptureCallback(fizzBuzz(tree)).toBe(null);
});
it('should')

})