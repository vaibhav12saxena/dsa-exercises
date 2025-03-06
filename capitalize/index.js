// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let CapitalizedStr=''
    for (let i=0; i<str.length;i++){
        if(i==0 || str[i-1]===" "){
        CapitalizedStr+=str[i].toUpperCase();
        }
        else{
            CapitalizedStr+=str[i]
        }
    }
    return CapitalizedStr;

}



module.exports = capitalize;


// function capitalize(str) {
//     strSplitArray= str.split(" ");
//     captilizeStringArray=[]
//     for (let element of strSplitArray){
//        element = element[0].toUpperCase()+element.substring(1)
//        captilizeStringArray.push(element)
//     }
//     return captilizeStringArray.join(' ')
   
//    }