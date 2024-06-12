// primitive

// 7 types: string,number,bollean,null,undefined,symbol,BigInt..

const score = 100 
const scoreValue = 100 

const isLoggedIn= false

const outSideTemp =null

let userEmail;

const id = symbol('123')
const anotherId = symbol('123')
//console.log(id === anotherId);


const bigNumber = 12255564446n




//reference typr (Non primitive)

//Array, Objects , Functions

//const heros = ["shaktiman ", "chota bheem","chutki"]


let myself ={ 
    name : "yogesh",
    age: 21,
}
//const myFunction= function(){
    //console.log("hello dev..!");


//console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack mem(primitive )p , heap memo(Non primitive)


let mySocialMediaName = "yogesh choudhary008";
let anotherName = mySocialMediaName;
anotherName = "code";
console.log(mySocialMediaName);
console.log(anotherName);

let user1 = {
    gmail: "yog@gmail.com",
    upi: "yog@ypl"
}


let user2 = user1

user2.email = "chotabheemgmail.com"


