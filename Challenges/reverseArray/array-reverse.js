'use strict';

function reverseArray(arr){
  let newArr =[];
  for(let i = arr.length -1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

