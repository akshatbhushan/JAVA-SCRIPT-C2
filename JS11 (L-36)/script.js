// first 3 odds 1-20

// let count = 0
// for (i=1; i<21 ; i++) {
//     if (i%2 !== 0) {
//         console.log(i)
//             count++;
//     }
//     if (count === 3) break;
// }

// let j = 1
// let tick = 0

// while (j<21) {
//     if (j%2 !== 0) {
//         console.log(j);
            
//             tick++;
//     }
//     if (tick === 3) break;
//     j++;
// } 


// 5 no , count + -

// let posi = 0;
// let nega = 0;
// let zr = 0;
// let count = 1;

// while (count < 6) {
//     let num =prompt (`Enter pos/neg No. #${count}`)

//     if (+num === 0) {
//         zr++;
//         count++;
//     } else if (num > 0) {
//         posi++;
//         count++;
//     } else if (num < 0) {
//         nega++;
//         count++;
//     }
    
// }

// console.log(`Total positives = ${posi}`)
// console.log(`Total negatives = ${nega}`)
// console.log(`Total zeroes = ${zr}`)

// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
let count = 0;

while (count < 3) {
    let i = prompt ("Enter Amount to Withdraw")
    if (i=== null) console.error("You pressed cancel")
    else if (i.trim() === "") {console.error("Enter Something")}
    else {
        i = +i
        if (isNaN(i)) {console.error("Enter A number only!")}
    else if (i>balance) {
        console.warn ("Insufficient Balance Broke")
        break;
    }
}
    balance= balance - i 
    count++
}
if (balance>0) console.log(`Amount left = ${balance}`)
if (balance === 1000 ) console.warn("All chances to withdraw are Over")

// let balance = 1000;
// for (i=1 ; i<4 ; i++ ) {
//      let wd = +prompt ("Enter Amount")
//     if (wd>balance) {
//          console.log ("Insufficient Balance Broke")
//          break;
//     }
//     balance = balance - wd;
//      if (balance === 0) break;  
// }
// if (balance>0) console.log(`Amount left = ${balance}`)
