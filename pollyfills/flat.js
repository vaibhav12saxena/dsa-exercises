// Array.prototype.myFlat = function (depth = 1) {
//     //check for type of this

//   if (depth === 0) return this;
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if(!(i in this)) continue;
//     if (Array.isArray(this[i])) {
//       arr.push(...this[i].myFlat(depth - 1));
//     } else {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };


Array.prototype.myFlat= function(depth=1){
    if (!Array.isArray(this)) throw Error('MyFlat only works on array')
    depth = Math.floor(depth) || 0;
    if(depth===0) return this.slice();
    let arr=[]
    for (let i=0;i<this.length;i++){
        if(!(i in this)) continue;
        if(Array.isArray(this[i])){
            arr.push(...this[i].myFlat(depth-1))
        }
        else{
            arr.push(this[i])
        }
    }
    return arr

}

arr = [1, 2, 3,[3, 4, 5, [6, 7], 9], 10, 11];
console.log(arr.myFlat(2));

