// 👉🏻 1. numbers 1-10

// for ( i=1 ; i >=10 ; i++) {
//     console.log(i)
// }

//👉🏻 2 Even 1-20

// for ( i = 1; i<21 ; i++) {
//     if (i%2 === 0) {
//         console.log(i)
//     }
// }

// for ( i =2 ; i < 21 ; i+=2) {
//     console.log(i)  Hell Naah 
// }

// 👉🏻 3 10-1

// for ( i = 10; i>0 ; i--) {
//     console.log(i)
// }

// 👉🏻 4 repeat yes 5X

// for (i = 111 ; i <=115 ; i++){
//     console.log("Yes")
// }

// // 👉🏻 5. Odd even check 1-10 

// for ( i = 1 ; i < 11 ; i ++ ) {
//     if (i%2 === 0 ){
//         console.log ( `${i} is even.`)
//     } else { 
//         console.log ( `${i} is odd.`)
//     }
// } 

// // OR

// for ( i = 1 ; i < 11 ; i ++ ) {
//     if (i%2 === 0 ) console.log ( `${i} is even.`)
//         else console.log ( `${i} is odd.`)
    
// } 

// 👉🏻 6. Number +ve or -ve condi

// let x = +prompt ('Enter no.')
// if ( x > 0 ) console.log( "+ve")
//     else if (x === 0) console.log ("Zero")
//     else console.log("-ve")


// let i =  prompt ('Enter no.')
// if ( i > 0 ) {
//     console.log( "+ve")
// } else if (i === 0) { 
//     console.log("Zero")
// } else {
//         console.log("-ve")
//     }



// let i = Number(prompt('Num'))
// i>0? console.log("+ve") : console.log("-ve") 



// let i = +prompt ('Enter no.')
// if ( i > 0 ) {
//     console.log( "+ve")
// }
//     else {
//         console.log("-ve")
//     }

// TB

// age vote

// let i = prompt('No.')
// if (i>=18) console.log("You can vote")
//     else (console.log("Chhotu, go to school"))

let i = prompt("Age")
if (i === null) {
    console.error("Try Again , you pressed cancel")
}
else if (i.trim()==="") {
    console.error("Write something valid, no space")
}

