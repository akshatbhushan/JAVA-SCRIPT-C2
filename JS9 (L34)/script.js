// // user’s age
// let i = prompt ("Age?")
// // console.log(i) // to check
// if (i === null) {
//     console.error("You pressed cancel")
// } else if (i.trim() === "") {
//     console.error("Nothing detected, enter number bruh")
// } else {
//    i = Number(i) 
//    if (isNaN(i)) {
//     console.error("Enter a number only, kid!")
//    } 
//    else if (i>105) {
//     console.error("You Should Vote Outside the world")
//    } else if (i >= 18) {
//     console.log('You can Vote ✅')
//    } else if (i < 0) { 
//         console.error("Invalid Age")
//     } else console.log("You are an underaged , kid!") 
   
// }
        // from l8 discarder } else if (Number(i) >= 18) {
        //     console.log('You can Vote ✅')
        // } else if (Number(i.trim() === NaN) {    Here it didnt work because Nan != Nan , in js it's false
        //     console.error("Enter a number only, kid!")
        // } else ("You are a kid , study!")
        // //  console.log(Number(i)) // check 

// shorter version later 

// multiplication table of 5

// for ( let i=1; i<=10 ; ++i) {
//      console.log(`5 X ${i} = ${i*5}`)
// }
// for (i=1; i<=50 ; ++i) {
//     if (i%5 === 0) console.log(i)
// }

// numbers between 1 and 15 are greater than 8 LC

// for (let i= 1; i <= 15 ; i++) {
//     let j=0
//     if (i>8) j++
//     console.log(j)
// }

// let count = 0;
// for ( i = 1 ; i<=15 ; i++) {
//     if (i>8) {
//         count++
//     console.log(i)
// }
// }
//  console.log (`Total ${count} numbers are > 8`)

//user  password and print access status with hardcoded pss

// let real = "Ben10100X"
// let pass = prompt("ENTER PASSWORD")
// if (pass === null ) console.error("Pressed Cancel, Try Again")
//     else if (pass === real) console.log("Access Grated ✅")
// else console.error ("Access Denied , Try Again")

// 3 times 

// let count = 0

// for (count = 0 ; count>=3 ; count++) {
// let real = "Ben10100X"
// let pass = prompt("ENTER PASSWORD")
// if (pass === null ) { 
//     console.error("Pressed Cancel, Try Again")
//     count++
// } else if (pass === real) console.log("Access Grated ✅") 
//   else console.error ("Access Denied , Try Again")

let real = "JavaS"
let count = 0

while (count<3) { 
    let pass = prompt ("ENTER PASSWORD")
    if (pass === real ) {
        console.log("Access Granted ✅");
        break;
    }
     else if (count === 0) {
        console.log("Wrong Password ❌, 2 Attempts Left")
        count++
    } else if (count === 1) {
        let pass2 = prompt ("ENTER PASSWORD")
        if (pass2 === real ) {
            console.log("Access Granted ✅");
            break;
        }
        else {console.log ("Wrong Password ❌, 1 Attempt Left")
        count++}
    } else if (count === 2 ) {
        let pass3 = prompt ("ENTER PASSWORD")
        if (pass3 === real ) {
            console.log("Access Granted ✅");
            break;
        }
        else {console.log ("Account Locked 🔒")
        count++}
    }
    
}

