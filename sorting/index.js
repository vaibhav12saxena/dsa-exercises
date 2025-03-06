// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) {
        indexofMin = j;
      }
    }
    if (indexofMin !== i) {
      const lesser = arr[indexofMin];
      arr[indexofMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const centerIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, centerIndex);
  const right = arr.splice(centerIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const newArrary = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      newArrary.push(left.shift());
    } else {
      newArrary.push(right.shift());
    }
  }
  return [...newArrary, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
