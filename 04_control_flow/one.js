// if
// const isUserloggedIn = true  
const temprature = 45 
// if(temprature === 55){
// console.log(`less than 50`)
// 
// }else {
// console.log(`temprature is greater than 50` );
// }
// 
//< ,> , <= , >= , == check only equality , != not equal , === check types also ,!== check negative side..

// const score = 200
// if(score > 100){
//     var power = "fly"
// console.log(`user power: ${power}`);

// }                                               // that's why we are not supposed to utilize var key  word user power: fly both output are same (var has global value that's why)

//     console.log(`user power: ${power}`);


const balance = 1000
//if(balance > 500) console.log("test"); don't do like it..

// if(balance < 500){
// console.log(`less than 500`);
// }else if ( balance < 750 ){
//     console.log(`less than 750`);
// }else if (balance < 900){
//     console.log(`less than 900`);

// }
// else {
//     console.log(`less than 1200`);
// }

const userLoggedIn = true 
const debitCard = true
const loggedIFromGoogle = true 
const loggedInFromEmail = true

if (loggedIFromGoogle || loggedInFromEmail  ) { //  one condition must be true to excute the code..
    console.log(`you are eligible for shoping`);
} else{
    console.log(`you are not eligibe for shoping`);
}

if (userLoggedIn && debitCard && 2==2 ) { // all condition must be ture..
    console.log(`you are eligible`);
}