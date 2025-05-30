Array.prototype.myReduce = function (cb, initialVal) {
  let result = initialVal;

  for (let i = 0; i < this.length; i++) {
    result = result ? cb(result, this[i], i, arr) : this[0];
  }
  return result;
};

arr = [1, 2, 3, 4, 5];

console.log(arr.myReduce((acc, curr) => acc + curr, 2));
