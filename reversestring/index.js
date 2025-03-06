// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //#sol1
    // return str.split("").reverse().join("");
    //#sol2
    // let reversedString =''
// for(let i=0; i<str.length; i++){
//     reversedString= str[i]+reversedString;
// }
// return reversedString
//#sol3
    // let reversedString =''
// for (let char of str){
// reversedString= char+reversedString;
// }
// return reversedString
//Sol4
return str.split('').reduce((rev,char)=> char+rev,'')
}

module.exports = reverse;
