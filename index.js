// code your solution here
// const result = array.find((year)=>result==='w')

// console.log(result)

// const superbowlWin= function(record){
//     let year = []
//     for (let i=0; i<record.length; i++){
//         if (record[i].result === 'W'){
//             return record[i].year
//         }
//     }
//     return null
// }
// console.log(superbowlWin(record))



// function superbowlWin(record) {
//     const winningRecord = record.find(record => record.result === "W");
//     if (winningRecord) {
//       return winningRecord.year;
//     } else {
//       return undefined;
//     }
//   }
//   console.log(superbowlWin(records))

function superbowlWin(record) {
    const win = record.find(obj => obj.result === 'W');
    return win ? win.year : undefined;
  }
  