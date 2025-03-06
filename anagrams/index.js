// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let stringAMap= stringMapWithoutSpecialCharacters(stringA);
  let stringBMap=stringMapWithoutSpecialCharacters(stringB);
  if(Object.keys( stringAMap).length!= Object.keys( stringBMap).length){
    return false
  }
  else{
    for(let element in stringAMap){
     if(stringAMap[element]!=stringBMap[element])
        return false
    }
    return true
  }

  //can implement by creating a aray and then sort and compare using ==== operator
}

function stringMapWithoutSpecialCharacters(stringA){
    cleanStringA= stringA.replace(/[^\w]/g,'').toLowerCase();
    cleanStringAMap={}
    for (let element of cleanStringA){
    cleanStringAMap[element]= cleanStringAMap[element]+1 || 1
    }
    return cleanStringAMap

}

module.exports = anagrams;
