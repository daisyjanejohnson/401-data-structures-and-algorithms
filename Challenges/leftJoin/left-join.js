// write a function leftJoin that takes in 2 hashmaps
// Go through the 1st hashmap and get the key/values
// Search for the key in the second hashmap
// If key is there push key and value from hash1 and value from hash2 into array.
// If key is not there push key and value from hash1 and null from hash 2 into array;
//Push values into results array and return

const Hashtable = require('../../Data-Structures/hashTables/hashtable.js');

function left_join(hashOne, hashTwo) {
  const outputArr = [];
  const hashArr = [];
  for (let i = 0; i < hashOne.length; i++) {
    

    let hashOneKey = hashOne[i];
    let hashOneValue = hashOne.get(hashOneKey);
    hashArr.push(hashOneKey, hashOneValue)

    if (hashTwo.contains(hashOneKey)) {
      hashArr.push(hashTwo.get(hashOneKey));
    } else {
      hashArr.push('null');
    }

  }
  outputArr.push(hashArr);
}

module.exports = left_join;