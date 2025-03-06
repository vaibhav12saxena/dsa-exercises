// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//    let temparray=[]
//    count=1
//     for (let i=0; i<n; i++){
//         temparray[i]=[];
//         for (let j=0;j<n;j++){
         
//             temparray[i][j]=count  
//             count++         
//         }
//     }
//     // console.log(temparray);
// tempcount= n+1

// for (let i=1; i<n; i++){
//     temparray[i][n-1]= tempcount
//     tempcount++
// }
// console.log(temparray);

// }


function matrix(n){
    const results =[] 
    for(let i=0; i<n; i++){
        results.push([])
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn= n-1;
    let startRow=0;
    let endRow= n-1;

    while(startColumn<=endColumn && startRow<=endRow){
       // first line
        for(let i=startColumn; i<=endColumn;i++){
            results[startRow][i]=counter;
            counter++
        }
        startRow++
        //right column
        for (let i=startRow; i<=endRow; i++){
            results [i][endColumn]=counter;
            counter++
        }
        endColumn--
        //Bottom Row
        for(let i= endColumn; i>=startColumn; i--){
            results[endRow][i]=counter
            counter++
        }
        endRow--
        //leftRow
        for(let i=endRow; i>=startRow;i--){
            results[i][startColumn]=counter
            counter++
        }
        startColumn++
    }
    return results
}

module.exports = matrix;

// 0,0 0,1 0,2 0,3 1,3 2,3 3,3 3,2 3,1 3,0 2,0 1,0 1,1 1,2 2,2, 2,1
