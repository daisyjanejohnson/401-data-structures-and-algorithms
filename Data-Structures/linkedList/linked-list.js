'use strict';

class Node { 

  constructor(value, next=undefined){
    this.value = value;
    this.next = next; 
    // set to the value that came in on the next parameter
    // next usually gets swet to null at the beginning
  }
}

class LinkedList {

  constructor(){
    // needs to have a head
    this.head = null;
  }
/*
Empty Linked List (aka head = null)
Insert apples (value argument = apples)
  - create a new Node('apples', null)
    -{value:'apples', next:null} Node
  -this.head = that new Node instance
  - return undefined

Not Empty Linked List {head = {value: 'apples', next:null}}
Insert bananas (value arg = 'bananas')
  - create a new Node('bananas', {value:'apples', next:null})
  - this.head = the new Node instance
  -return undefined
  // there is no return and in JS when you don't return anything by default it is undefined.
*/
  insert(value) { //"apples"
    // create a new node
    //const node = new Node(value);
    // Your next is whatever the head is at the moment
    // node.next = this.head;
    // then reset the head to the new node
    //this.head = node; 
    this.head = new Node(value, this.head);
    
  }

  // { a } -> { b } -> { c } -> null
                    //add d ^^^
  // { a } -> { b } -> { c } -> { d } -> null        
  //                              ^   -> { e } -> null 
//     ^ loop through asking each if their next is null, when it is null you have come to the end of the list and that is where it can append new values
// value is ANY type
  append(value){
    const newNode = new Node(value);
    if(!this.head){
    // add to the tail(end) of the Linked List 
      this.head = newNode;
      return;
    }
  // while loop looking for a node with a next of null
  let currentNode = this.head;
  // while the current node is not equal to null( It is truthy)
  while(currentNode.next) {
    //move up in the line by reassigning current node to the next one
    currentNode = currentNode.next;

  }
  currentNode.next = newNode;

  // we KNOW that currentNode is a node, in fact the LAST node


  }
  includes(target){
    // if the value of the first node is equal to the target we are searching for than return true, then do the same for following nodes
    if (this.head.value === target){return true}

    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next
      if (currentNode.value === target) {return true}
    }
    return false;

  }
  toString(){
    // find the nodes and format them correctly to output {node}-->{node}--> null
    let currentNode = this.head;
    let nodeOutput = `{${currentNode.value}}-->`
    while(currentNode.next){
      currentNode = currentNode.next;
      nodeOutput;
    }
    console.log(`${nodeOutput} null`);
  }
};

module.exports = LinkedList;