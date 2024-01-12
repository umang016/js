//if
const isuserloggedin = true
const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }else{
// console.log("greater than 50");
// }

// console.log("execute");
// <,>, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test2"), console.log("test2"); // not use for this way

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");

// }else if(balance < 900){
//    console.log("less than 900")

// }else{
//     console.log("less than 1200");

// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedin && debitcard && 2==3){
    console.log("Allow to buy cource");
}

if (loggedinfromgoogle || loggedinfromemail) {
    console.log("User logged in");
}