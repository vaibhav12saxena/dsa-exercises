// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunkedArray;
}
module.exports = chunk;

// function chunk(array, size) {
//     if(size<=0 || size>=array.length){
//         return[array]
//     }
//     else{
//     let newArray=[]
//     let subArray=[]
//     array.forEach((element,i) => {
//     subArray.push(element);
//     if(subArray.length==size || i==array.length-1){
//      newArray.push(subArray)
//      seubArray=[];
//     }
//     });
//     return newArray
// }
// }
