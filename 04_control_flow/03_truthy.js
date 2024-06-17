const  useremail =  []

// if (useremail) {
//     console.log(`got user email`);
// } else {
//     console.log(`don't have email`);
// }

// falsey  values  => false  , 0 , -0 ,  Bigint 0n  , "" , null , undefined , NaN .. all are false values 

// truethy values => "0" , 'false ' , " space" , [] , {} , function(){}

// if(useremail.length === 0 ){
// console.log(`array is empty`);
// }


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//  console.log(`objects is empty`);   
// }




//Nullish coalescing operator (??): null or undefined 
//  it was structured for treating the values



let val1;
//val1 = 5 ?? 10 // => 5 
 //val1 = null ?? 10 // => 10
  //val1 = undefined ?? 15 // => 15

 // val1 = null ?? 10 ?? 100  //=> 10


//console.log(val1);


//terniary operator

//conditions ? true : false 
const iceTeaPrice = 100
iceTeaPrice <= 80? console.log(`less than 80`) : console.log (`more tham 80`)


