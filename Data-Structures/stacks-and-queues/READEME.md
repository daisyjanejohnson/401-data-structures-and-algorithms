# Stacks and Queues
Create a stack and queue and all the methods necessary to be fully functional.

## Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Should raise exception when called on empty stack
* Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* Should raise exception when called on empty stack
* Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
* Create a Queue class that has a front property. It creates an empty Queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Should raise exception when called on empty queue
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
* Should raise exception when called on empty queue
* Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
* Be sure to follow your languages best practices for naming conventions.

## Approach & Efficiency
I took the approach of writing tests and the nformulating code from that. Once I had Stack and its tests finsished Queue was easy to figure out. the BIG O of tome for eahc method should be )(n) beacause it takes the same amount of time regardless of nodes. the Big O of space would be )(1) as it takes the same amount of space regardless of nodes
## API
<!-- Description of each method publicly available to your Stack and Queue-->
* Stack
  * Push: takes in any value as an argument and adds a new node with that value to the top of the stack.
  * Pop: Does not take in any argument, removes the node from the top of the stack and returns the node's value
  * Peek: That does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
  * isEmpty: Takes no argument and returns a boolean indicating whether or not the stack is empty.
* Queue
  * Enqueue: takes any value as an argument and adds a new node with that value to the back of the queue.
  * Dequeue: does not take any argument and removes the node from the front of the queue and returns the node's value.
  * Peel: does not take an argument and returns the value of the node located in the front of the queue.