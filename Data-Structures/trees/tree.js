'use strict';
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
}



const applesNode = new Node('apples', new Node('cucumbers'), new Node('bananas'),);


const tree = new BinaryTree(applesNode);

const results = tree.preOrder();
// const results = tree.inOrder();
// const results = tree.postOrder();



// Create a BinarySearchTree class

// define a mthod named add that accepts a value, and adds a new node with that value in the correct location in the bincary search tree.
// define a mehod named contains that accepts a value, and returns a boolean indicating whther or not the cvalue is in the tree at least once.

class BinarySearchTree extends BinaryTree {
  add(value) {
    const output = [];
    // accepts a value, and adds a new node with that value in the correct location in the binary search tree.
    let newNode = new Node(value);
    while (this.left || this.right){
      if (this.root === null) {
        this.root = newNode;
      }
      if (newNode.value < this.root) {
        this.root = this.root.left;
      }
      if (newNode.value > this.root) {
        this.root = this.root.right;
      }
    }
    output.push(newNode);
    return output;
  }




  contains(value) {

    while (this.root) {
      if( this. root === value)
        return true;
      if (value > this.root) {
        this.root = this.right;
      } else if(value < this.root){
         this.root = this.left;
      } else {
       return false; 
      }              
    }

  }
};
  //   //contains that accepts a value, and returns a boolean indicating whther or not the value is in the tree at least once.
  // }



module.exports = { BinarySearchTree, Node };