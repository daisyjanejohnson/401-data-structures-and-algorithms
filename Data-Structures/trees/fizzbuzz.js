const { BinaryTree, BinarySearchTree, Node } = require('../tree.js');
const tree = require('./tree.js');

let fizzBuzzTree = function(tree){
  lookThroughFizzBuzz = this.root;
  function lookThroughFizzBuzz(node){
    if(!node){
      return null;
    }
    else if(node.value % 3 && node.value % 5){
      return 'FizzBuzz';
    }
    else if(node.value  % 3){
      return 'Fizz';
    }
    else if(node.value % 5){
      return 'Buzz';
    }
  }
  lookThroughFizzBuzz(node.right);
  lookThroughFizzBuzz(node.left);
}


module.exports = fizzBuzzTree;