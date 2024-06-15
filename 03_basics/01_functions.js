function sayMyName (){
    console.log("y");
    console.log("o");
    console.log("g");
    console.log("e");
    console.log("s");
    console.log("h");
    }

//sayMyName();

// function addTwoNumbers (num1 , num2){
// console.log(num1+ num2);
// }

function addTwoNumbers (num1 , num2){
//    let result = num1 + num2 
   //log("yogesh choudhary ")
//    return result// after result noting would be printed..1
   return num1 + num2
}
   
    const result = addTwoNumbers(5,6)
// console.log("result +",result);

function logInUserMessage  (username="jack"){// in case you do not pass value it will over write auto:
    if (username === undefined) {//!username true to false 
        //console.log("please enter user name ");

        return 
    }
return `${ username}just loggedIn`// if you do not want to print it...!
}

//console.log(logInUserMessage("yogesh choudhary"))

//console.log(logInUserMessage(""))



function calcululateCardPrice (...num1){// for passing mutipules values..!
    return num1

}
// console.log(calcululateCardPrice(200,500,600));


const user ={
    username:"yogesh choudhary",
    price: 1704191264,

}
function handLeObject (anyobject){
console.log(`student name is ${anyobject.username } and student rollno is ${anyobject.price}`);
}

handLeObject({
   username : "jack",
   price : 123
    
})
// handLeObject(user)

const myNewArray = [100 , 200, 400 ,500]
function returnSecondValue (getArray){
return getArray[2]
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([500,500,600,700]));