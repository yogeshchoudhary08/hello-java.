//objects..!
//singlenton

// object literals..!{}=> objects but empty..
const mySym = Symbol("key1")

const JsUser = {
    name: "yoegsh choudhary",
    age: 21,
    location : "delhi",
    "full name ": "yogesh choudhary",
    [mySym]: "myKey1",
    email:"yogesh@google.com",
    isLoggedIn: false,
    lastLogInDays:["monday","sunday"]
}
console.log(JsUser.email);// not good way to print your code but 'makeshift'..!

console.log(JsUser["email"]);
console.log(JsUser["full name "]);// both case are ansillary..!
console.log(JsUser[mySym]);// for symbols


JsUser.email="yogesh@micro.com"//changing
Object.freeze(JsUser)// for freeze object..!


JsUser.greeting = function(){// for adding greetings
    console.log("heloo js users");
}
JsUser.greeting2 = function(){
    console.log(`hello js user , ${this.email}`); // for greeting to indivisual object..!
}
console.log(JsUser.greeting2());
console.log(JsUser.greeting());

// Note => when ever we axics then value we use dot (.) wwe will use..// special cases we [] axics we will have to do..!