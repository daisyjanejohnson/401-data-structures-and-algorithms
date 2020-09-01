'use strict';
const { BinaryTree, BinarySearchTree, Node } = require('../tree.js');
const tree = require('../tree.js');




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

  it('should add to root of empty tree', () => {
    const tree = new BinarySearchTree();

    tree.add(5);

    expect(tree.root.value).toBe(5);
  });

  it('should add to a 1 item tree -- go left', () => {
    const tree = new BinarySearchTree(new Node(10));

    tree.add(5);

    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right).toBe(null);
  });

  it('should add to a 1 item tree -- go right', () => {
    

    const ten = new Node(10);
    const five = new Node(5);
    const fifteen = new Node(15);

    ten.left = five;
    ten.right = fifteen;
    
    const tree = new BinarySearchTree(ten);
    tree.add(25);

    // expect(tree.root.value).toBe(10);
    // expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.right.value).toBe(25);
  });

  // it('should build from array', () => {
  //   /*     10
  //        5    15
  //     3   7  12  17
  //   */
  //  const arr = [10,5,15,3,7,12,17];
  //  const tree = new BinarySearchTree();

  //  tree.fromArray(arr);
  //  expect(tree.inOrder()).toBe([3,5,7,10,12,15,17]);
  // })

  it('Can successfully find the largest value in a tree', ()=>{
    const eight = new Node(8);
    const six = new Node(6);
    const five = new Node(5, eight, six);
    const tree = new BinarySearchTree(five);
    expect(tree.findMaximumValue()).toEqual(8);
  });
});


