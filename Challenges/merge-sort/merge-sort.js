'use strict';

function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  } else {
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid,arr.length);
  return merge(mergeSort(left), mergeSort(right));
  } 
}

function merge(left,right){
  let resultArray = [];

  while(left.length && right.length){
    if(left[0] <= right[0]){
      resultArray.push(left[0]);
      left = left.slice(1);
    } else {
      resultArray.push(right[0]);
      right = right.slice(1);
    }
  }
  while(left.length){
    resultArray.push(left.shift());
  }
  while(right.length){
    resultArray.push(right.shift());
  }
  return resultArray;
}

module.exports = mergeSort;
