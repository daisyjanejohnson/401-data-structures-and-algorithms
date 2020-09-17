'use strict';

function quickSort(arr, left, right){
  if( left < right ){
    position = partition(arr, left, right)
    if(left < position -1)quickSort(arr, left, position -1)
    if(position + 1 < right) quickSort(arr, position +1, right)
    }
  }

function partition(arr, left, right){
  let pivot = arr[right];
  let i = left - 1;
  for(let j=left; j <= right -1; j++){
    if(arr[i] <= pivot){
      i++
      Swap(arr, i, left);
    }
  }
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = {quickSort, partition, swap};