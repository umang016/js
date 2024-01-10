// singleton

// Object literals
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Umang",
    "full name": "Umang Bhadiydar",
    [mySym]: "mykey1",
    age: 21,
    location: "Surat",
    email: "umang@gmail.com",
    isLoggedIn: false,
    lastLoginDay:  ["Monday", " Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])

 JsUser.email = "umang@chatgpt.com",
// Object.freeze(JsUser)
 JsUser.email = "umang@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS USER");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS USER, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());