const name = "umang" 
const repoCount =  50 

/*console.log(name + repoCount + 50);*/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('Umang-bha')

// console.log(gamename[0]);
// console.log(gamename.__proto__);


// console.log(gamename.length);
// console.log(gamename.toUpperCase());
//console.log(gamename.charAt(2));
//console.log(gamename.indexOf('b'));

const newstring = gamename.substring(0,4)
//console.log(newstring);

const anotherString = gamename.slice(-8,4)
//console.log(anotherString);

const newstringone = "   umang   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://umang.com/umang%20bhadiyadra"

console.log(url.replace('%20','-'));
console.log(url.includes('umang'));

console.log(gamename.split('-'));