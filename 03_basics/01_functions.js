

function sayMyName(){
//     console.log("u");
//     console.log("m");
//     console.log("a");
//     console.log("n");
//     console.log("g");   
 }

//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


function loginusermessage(username = " sam"){
    // if(username === undefined)
    if(!username){
         console.log("Please Enter the Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("Umang"));
// console.log(loginusermessage("Umang"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 440, 500, 600));

const user = {
    username: "umang",
    prices: 199
}

function handObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handObject(user)
handObject({
    username: "sam",
    price: 399
})

const mynewArr = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(mynewArr));