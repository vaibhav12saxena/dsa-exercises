// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

//    const matches = str.match(/[aeiou]/gi); 
//    return matches? matches.length:0
    let strMap={}
    for (let item of str ){
     strMap[item.toLowerCase()]= strMap[item.toLowerCase()+1]|| 1
    }
    count= (strMap['a'] || 0) + (strMap['e']||0 )+(strMap['i'] ||0)+(strMap?.['o']||0)+(strMap?.['u']||0);
    return count

}

module.exports = vowels;


    // function vowels(str) {
    //     let counter =0
    //     const vowelCheckArray = ['a','e','i','o','u'];
    //     for (let item of str ){
    //        vowelCheckArray.includes(item.toLowerCase()) && counter++
    //        }
    //        return counter
       
    //    }
       