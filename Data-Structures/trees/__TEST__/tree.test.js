'use strict';
const { BinarySearchTree, Node } = require('../tree.js');




/*
Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
Can successfully add a left child and right child to a single root node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal
*/
describe('Binary tree tests', () => {
  it('can instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree('howdy');
    expect(tree.root).toBe('howdy');
  });

  it('can successfully add a left child and right child to a single root node', () => {
    const apples = new Node('apples', 'bananas', 'cherries');
    const tree = new BinarySearchTree(apples);
    expect(apples.value).toBe('apples');
    expect(apples.left).toBe('bananas');
    expect(apples.right).toBe('cherries');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    // const apples = new Node('apples', 'bananas', 'cherries');
    const banana = new Node('banana');
    const cherries = new Node('cherries');
    const apple = new Node('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.preOrder()).toEqual(['apples', 'banana', 'cherries']);

  });
  it('can successfully return a collection from a inorder traversal', () => {
    // const apples = new Node('apples', 'bananas', 'cherries');
    const banana = new Node('banana');
    const cherries = new Node('cherries');
    const apple = new Node('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.inOrder()).toEqual(['banana', 'apples', 'cherries']);

  });

  it('can successfully return a collection from a postorder traversal', () => {
    // const apples = new Node('apples', 'bananas', 'cherries');
    const banana = new Node('banana');
    const cherries = new Node('cherries');
    const apple = new Node('apples', banana, cherries);
    const tree = new BinarySearchTree(apple);

    expect(tree.postOrder()).toEqual(['banana', 'cherries', 'apples']);
  });
});
