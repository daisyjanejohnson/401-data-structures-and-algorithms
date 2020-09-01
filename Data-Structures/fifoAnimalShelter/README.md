# FIFO Animal Shelter
First-in First out Animal Shelter

## Challenge
* Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
* Implement the following methods:
    - enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
    - dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
Time O(n)
Space O(1)
The approach was to create two stacks and treat the values within them as though they were in a queue. Taking the first value in stack1 and pushing it into stack2 resulting in the FIFO method.
## API
enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.


## WhiteBoard

![WhiteBoard](.assets/AnimalShelter.png)

***WHY WONT THE WHITEBOARD IMAGES WORRRRRRK***