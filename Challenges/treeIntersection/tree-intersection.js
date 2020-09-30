// Traverse one tree and create a hash table based on the value of each node
// Traverese second tree, hash each value and check if the hash exists in table. 
// If value is in table, push into array
// return array

const Hashtable = require("../../Data-Structures/hashTables/hashtable");

// Create Node Class
//Create Binary Tree Class
/*
inOrder(){
        const output= [];
        function _inOrder(root){
            if(!root){
                return;
            }
            if(root.left){
                _inOrder(root.left);
            }
            output.push(root.value);
            if(root.right){
                _inOrder(root.right);
            }
        }
        _inOrder(this.root);
        return output;
*/

/* traverseOne = (node) => {
  if(node.left){
    traverseOne(node.left)
  }
  hash.add(node.value, SOMETHING);
  if(node.right){
    traverse(node.right)
  }
}
traverseOne(tree1.root)

if(node.left){
  traverseTwo(node.left)
}
if(hash.contains(node.value)){
  result.push(node.value)
}
if(node.right){
  traverse(node.right)
}

traverse(tree2.root);
return result
*/

Class Node{
  Constructor (val) {
  This.val = value;
  this.left=null;
  this.right=null;
  }
  Class BinaryTree{
  constructor(){
  this.root = null
  }
  preOrder() {
    const hash = new Hashtable();
    function _preOrder(root){
      if(!root){
        return;
      }
      if(root.left){
        _preOrder(root.left);
      }
      hash.add(root.value);
      if(root.right){
        _preOrder(root.right);
      }
    }
    _preOrder(tree1.root);

  }




  
  Funtion tree_intersection(tree1, tree 2){
  
  Let returnArray = [ ];
  Let hash = new Hashtable();
  
  