'use strict';
const Hashtable = require('../hashtable.js');
/*
Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
*/


describe('Hashtable Test', () => {
  it('should add in correct spot', () => {
    const table = new Hashtable();
    table.add('apple', 'pippin');

    const index = table.hash('apple');
    const value = table.buckets[index];
    expect(value).toBe('pippin');
  });
  it('should add a key/value to hashtable results', () => {
    let table = new Hashtable();

  })
  it('should get the correct value', () => {
    const table = new Hashtable();

    table.add('apple', 'pippin');

    const value = table.get('apple');

    expect(value).toBe('pippin');
  })
})