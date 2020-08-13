function binarySearch(arr, key) {
  let start = 1;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((end + start) / 2);

    if (arr[mid] === key) {
      return mid;
    }
    else if (arr[mid] < key) {
      start = mid + 1;
    }
    // else if(arr[mid] > key){
    //   return mid -1;
    else {
      end = mid - 1
    }
  }
  // else{
  return -1;
};





module.exports = binarySearch;