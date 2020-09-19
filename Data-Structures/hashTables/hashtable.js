'use strict';

const { assert } = require("console");
const { Hash, KeyObject } = require("crypto");

/*
Implement a Hashtable with the following methods:

add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.
*/

class Hashtable{

  constructor(size=1024){
    this.buckets = new Array(size);
  }
  hash(key){
    return key.toString().length % this.size;
    }
 add(key, value) {

  const index = this.hash(key);

  if(!this.buckets[index]){
    this.buckets[index] = [ ];
  }
  this.buckets[index].push([key,value])
  return index;
  } 
  get(key){
    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if(!itemsInBucket) {
      return null;
    }else{
      // should have array of key value pairs
      // [ [key, value]]
      for(let bucket of itemsInBucket){
        // if key matches
        if(bucket[0] === key) {
          return bucket[1];
        }
      }
    }
  }
  contains(key){
    // signature of contains: Key (whatever form key is)
    // hashes key to return boolean
   const index = this.hash(key);
   if(this.buckets[index]){
   }
   return false;
  }
}

// loop to get all the charcodeAt to get teh asking number for evry letter.

module.exports = Hashtable;