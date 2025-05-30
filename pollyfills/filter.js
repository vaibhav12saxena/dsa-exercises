Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this) && result.push(this[i]);
  }
  return result;
};

arr = [1, 2, 3, 4, 5];

console.log(arr.myFilter((item) => item >= 2));
