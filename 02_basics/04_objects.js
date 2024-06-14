const  tinderUser = new Object () //singlenton  object ..!

//const tinderUser  = {}// Non singlenton..!
tinderUser.id = "123abc"
tinderUser.name = "janeffer"
tinderUser.isLoggrdIn = false 

//console.log(tinderUser);


const regularUser = {
    email: "yog@gmail.com",
    fullname:{
        userfullname:{
            firstname:"yogesh",
            lastname:"choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname);


const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}
const obj3 = { 5:"a",6:"b"}

//const obj4 = Object.assign ({},obj1,obj2,obj3);

const obj4 = {... obj1,...obj2,...obj3}//latest
//console.log(obj4);
    

const users = [
    {
        id: 1,
        email : "yog@google.com"
    },
    {
        id: 2,
        email : "yo1@google.com"
    },
    {
        id: 3,
        email : "yo0@google.com"
    },
    {
        id: 4,
        email : "2og@google.com"
    },
    {
        id: 5,
        email : "yo2@google.com"
    }
    
]
//console.log(users[1].email);
//console.log(tinderUser);

//console.log(object.keys(tinderUser));
//console.log(object.values(tinderUser));

console.log(tinderUser.hasOwnProperty(isLoggrdIn));