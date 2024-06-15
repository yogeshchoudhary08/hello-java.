// let a = 10 
// const b = 20 
// var c = 30
/// global scope....!
// note: console bt inpect it has diffrent global scope and by  node env it is diffren..



let a = 300 // which code we write outside that is called global scope..! it prints only but not block dcope elements..
if(true){// it is called block scope into the {}..! 
    let a = 10 
    const b = 20 
// console.log("INNER: ", a);
}
 //console.log(a);// output would be this ...INNER:  10  .. 300
 


 // 
 function one(){
    const username = " yogesh chohdary"


    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);


    two()



 }


 //one()

 if (true) {
let    username = "yogesh"
    if (username=== "yogesh") {
        const wesite= "youtube"
        //console.log(username + ".", wesite);
        
    }
  //  console.log(website);
    
 }
 //console.log(username);


 //++++++++++++++++ intersting +++++++++++++++


 function addone (num){
  
  return num + 1



 }

 console.log(addone(2));
// addone(5);


//  console.log(addTwo(5));

 const addTwo = function(num){// it can hold anything..!
    return num + 2

 }

 console.log(addTwo(2));
 //addTwo(5)
 //console.log(" your score is. ",addone (addTwo(-5))+(4));=>  question asked at google..!
 