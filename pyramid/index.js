// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '     1                          1-1   2-3  3-5 4-7 5-9      i+
//       ' ### '      3                                 1    2   3   4                       2n-1    5-4-2/2 = 1
//       '#####'      5 7 9

function pyramid(n,row=0,stair='') {
  if(n===row){
    return;
}
if (stair.length===2*n-1){
    console.log(stair);
   return pyramid(n,row+1)
}
const midpoint=Math.floor( (2*n-1)/2)
if (midpoint-row<=stair.length && midpoint+row>=stair.length){
    stair+='#'
}
else {
    stair +=' '
}
pyramid(n,row,stair)

}
pyramid(5)
module.exports = pyramid;







// function pyramid(n) {
//     const  midpoint = Math.floor((2*n-1)/2)  //2
// for (let i=0;i<n;i++){
//     let str ='';
//     for(j=0;j<2*n-1;j++){
//      if(midpoint-i<=j && midpoint+i>=j ){
//      str+='#'
//      }
//      else{
//         str+=' '  
//      }
//     }
//     console.log(str);
// }
// }



//Solution1
// function pyramid(n) {
//     for (let i=1, j=0;i<=n;i++){
//     str = ' '.repeat(n-i)+'#'.repeat(i+j)+' '.repeat(n-i)
//     j=j+1
//      console.log(str)
//      }
//  }