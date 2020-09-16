'use strict';

function mergeSort(arr){
  let n = arr.length;
  let mid = Math.floor(n/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid,n);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge(left,right){
  let resultArray = [];
  let i = 0;
  let j = 0;

  while((i<left.length)&&(j<right.length)){
    if(left[i] <= right[j]){
      resultArray.push(left[i]);
      i++;
    } else {
      resultArray.push(right[j]);
      j++
    }
  }
  // Check if there are any extra items left.
    while(i < left.length){
      resultArray.push(left[i]);
      i++
   }
    while(j < right.length){
      resultArray.push(right[j]);
      j++
    }

  return resultArray
}

module.exports = mergeSort;
