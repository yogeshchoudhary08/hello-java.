const user = {
    username :"yogesh ",
    price : 333 ,

    welcomeMeassage : function(){
        // console.log(`${this.username}, welcome to website..`);

        // console.log(this);// it would be printed .. chota bheem, welcome to website..// { //   username: 'chota bheem',//   price: 333,

 
    }

}
// user.welcomeMeassage();
// user.username="chota bheem"
// user.welcomeMeassage()

 //console.log(this);  =>  it depends on paresent value or block scopes..!



 function dev(){
    //let username = "yogesh"
  //  console.log(this );// it will print hall scenerio out side of code such : clearInterval: [Function: clearInterval],clearTimeout: [Function: clearTimeout],setInterval this kinda output..!

    //  console.log(this.username);// undefined for fuctiond but for objects for good..!
 }
 dev()

 
 
//  const dev2 = function(){
//     let username = "chota bheem"
//     console.log(this.username); undefined
//  }

//  dev2()


const dev3 = ()=>{//   remove function keywrod and after () it out it  ()=> it is called arror function..!
    let username = "chutki" 
    console.log(this); // only use this {}// with dot if call any verable output will be undefined
 }
//  dev3()

 // this keyword only suggests current context..!


//  const addTwo=(num1 , num2) => {   // this is arrow fuction
//         return num1 + num2
//  }


// const addTwo=(num1 , num2) =>  num1 + num2   /// implicit return is a way to return a value from a function without explicitly using the return keyword, it can be achieved by using arrow functions and single line function blocks, it's a shorthand that can make the code more concise and easier to read.
//const addTwo = (num1 , num2) =>  (num1 + num2 )  // if you write a code in {} curlly bracess you will have to write return keyword..! if you use () we are not supposed to use 
const addTwo=(num1 , num2) =>({username: "yogesh "})  // for print object..! put ({})
console.log(addTwo(8,10));



