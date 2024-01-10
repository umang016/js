

function sayMyName(){
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("g");   
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
    if(!username){
        console.log("Please Enter the Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("Umang"));
console.log(loginusermessage("Uman"));