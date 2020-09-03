'use strict';
const Queue = require('../stacks-and-queues/queue.js');

const output = [];
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    const output = [];
    function _preOrder(root) {
      if (!root) {
        return;
      }
      //add root's value to array
      output.push(root.value);
      //since we have null check it will return when there is no root left
      // if(root.left){}
      _preOrder(root.left);
      // if(root.right){}
      _preOrder(root.right);

    }
    _preOrder(this.root);

    return output;
  }
  inOrder() {
    const output = [];
    function _inOrder(root) {

      if (!root) {
        return;
      }
      _inOrder(root.left);
      output.push(root.value);

      _inOrder(root.right);

    }

    _inOrder(this.root);
    return output;
  }
  postOrder() {
    const output = [];
    function _postOrder(root) {
      if (!root) {
        return;
      }
      _postOrder(root.left);
      _postOrder(root.right);
      output.push(root.value);


    }

    _postOrder(this.root);
    return output;
  }
  findMaximumValue(){
    let array = [];
    let max = 0;
    function _preOrder(root){
      if(!root){
        return;
      }
      console.log(root.value);
      if(root.left){
        _preOrder(root.left);
      }
      array.push(root.value);
      console.log(array);
      if(root.right){
        _preOrder(root.right);
      }
    }
    _preOrder(this.root);
    for (let i = 0; i < array.length; i++){
      if (array[i] >= max){
        max = array[i];
        return max;
      }
    }
     }
    breadthFirst(tree){
    // function _breadthFirst(tree){
      let que = new Queue();
      let arr = [];
      que.enqueue(tree.root);
      while(que.queue.length){
        let front = que.dequeue();
        arr.push(front.value);
        if(front.left){
          que.enqueue(front.left)
        }
        if(front.right){
          que.enqueue(front.right)
        }
      }
      return arr;
    }      
    };




const applesNode = new Node('apples', new Node('cucumbers'), new Node('bananas'),);


const tree = new BinaryTree(applesNode);

const results = tree.preOrder();
// const results = tree.inOrder();
// const results = tree.postOrder();



// Create a BinarySearchTree class

// define a mthod named add that accepts a value, and adds a new node with that value in the correct location in the bincary search tree.
// define a mehod named contains that accepts a value, and returns a boolean indicating whther or not the cvalue is in the tree at least once.

class BinarySearchTree extends BinaryTree {
  fromArray(arr) {
    for (let item of arr) {
      this.add.item;
    }
  }

  add(value) {
    // accepts a value, and adds a new node with that value in the correct location in the binary search tree.  
    const newNode = new Node(value);
    if (!this.root) {
      this.root = new Node(value);
      return;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else current = current.right;
        }
      }
    }
  }





  contains(value) {

    while (this.root) {
      if (this.root === value)
        return true;
      if (value > this.root) {
        this.root = this.right;
      } else if (value < this.root) {
        this.root = this.left;
      } else {
        return false;
      }
    }

  }
};
//   //contains that accepts a value, and returns a boolean indicating whther or not the value is in the tree at least once.
// }



module.exports = { BinaryTree, BinarySearchTree, Node };