const user ={
    username: "umang",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "same"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "umang"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "umang"
//     console.log(this.username);
// }

const chai = function(){
       let username = "umang"
        console.log(this);
}


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ( num1 + num2 )


console.log(addTwo(3,4));