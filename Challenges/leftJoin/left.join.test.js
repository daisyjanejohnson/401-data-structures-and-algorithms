const { hasUncaughtExceptionCaptureCallback } = require('process');
const Hashtable = require('../../Data-Structures/hashTables/hashtable.js');
const leftJoin = require('./left-join.js');

it('should return the correct key and values', () => {
  let synonym = new Hashtable();
  let antonym = new Hashtable();
  synonym.add('wrath', 'anger');
  antonym.add('wrath', 'delight');

  expect(leftJoin(returnArr)).toBe(['wrath', 'anger', 'delight']);

})