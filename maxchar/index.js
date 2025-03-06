// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let strMap={}

for (let char of str){
    strMap[char]= strMap[char]+1 || 1
}
let count =0

let maxCharacter=''
for (let char in strMap){
    if(strMap[char]>=count){
     maxCharacter= char
     count= strMap[char]
    }
}
return maxCharacter

}

module.exports = maxChar;









// let strMap={}
// // str.split('').forEach(element => {
// //     strMap[element] = strMap[element]+1 ||1
// // });
// for (let char of str){
//     strMap[char] = strMap[char]+1 ||1
// }
// let max = 0
// let maxChar =''
// for (let element in strMap){
// if( strMap[element]> max ){
//    max=strMap[element],
// maxChar= element
// }
// }

// return maxChar

