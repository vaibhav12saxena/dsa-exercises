Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

let arr = [1, 2, 3, 4, 5];

arr.myMap((item, index) => {
  console.log(item, index);
});
