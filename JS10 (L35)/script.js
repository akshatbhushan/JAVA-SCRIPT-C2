// 3 times then lock

// let real = "JS6"
// let count = 0

// while ( count <3 ) {
//     let pass = prompt ("Enter Password")
//         if (real === pass ) {
//             console.log('Access Granted ✅')
//             break;
//         } else {
//             if (count === 0 ) {
//                 console.warn("2 Attempts left")
//                 count ++
//             } else if (count === 1) { 
//                 console.warn("1 Attempt left")
//                 count++;
//             } else if (count === 2) {
//                 console.error("Account locked 🔒");
//                 count++;
//                 // alert ("FBI OPEN UP 🔫")
//                 // break;
//             }
//         } 
// }

// until stop and count yes

// let word= prompt ("Enter a Word")
// let count = 0 

// while (word !== "stop"  ){
//         word = prompt ("Enter a Word")
//         if (word === "yes" ) count++;
//         }
//  console.log(count)


// no / 7 1-50 

// let count = 0; 
// for (i=1 ; i<51 ; i++) {
//     if ( i % 7 === 0) {
//         console.log(i)
//         count ++;
//     }
// }

// // console.log(`Total ${count} numbers divisible by 7 till 50`)

// all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;
//     for (i=1 ; i<31 ; i++) {
//         if (i%2 !== 0 ) sum = sum +i
//     }                           // for (i=1 ; i<31 ; i+=2) {    
//                                 //    sum= sum + i
//                                 //}
//  console.log(sum)


// with while 

// let i =1;
// let sum = 0;

// while (i<31) {
//     sum +=i
//     i+=2
// }
//  console.log(`Total ${sum}`)

// ASKING until even

// let i =  prompt ("Enter A NO.")
// while (i%2 !== 0) {
//     i = prompt ("Enter A NO.")
//     if (i === null ) {
//         console.warn ("Pressed Cancel")
//     } else if (i.trim ()=== "") {
//         console.log("Enter something")
//        } else {
//         if (Number(i)=== 0) {
//             console.log("You entered 0") }
//         else if (Number(i)%2 === 0) 
//         console.log(`You typed an Even no. ${i}`)
//          else { (isNaN(i)) 
//             {console.log("Enter Numbers only")}
//     }
// }  
// }

// Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let first = prompt("Enter 1st no.")
// let seco = prompt ("Enter 2nd no.")

// // if (first > seco) {
// //     for (i = seco ; i <= first ; i++) {
// //     console.log(i)
// // }
// // }

// if (first > seco) {
//     for (i = first ; i >= seco ; i--) {
//     console.log(i)
// }
// }

// else {for (i = first ; i <= seco ; i++) {
//     console.log(i)
// } 
// }