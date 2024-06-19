

const coding = ["python","java script","ruby","swift "]

// coding.forEach( function (item){
    // console.log(item);
// } ) // call back function not has name or identy

// coding.forEach(  (item)=> {
//     console.log(item);
// } )

// //coding.forEach( (item)=>{
//     console.log(item );
// })

// function printMe  (item){
// console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item , index , arr)=>{ // it would print same it is which you wrote.
//     console.log(item , index , arr);
// })

const myCoding = [{
    languageName : "js",
    languageFileName: "java"
},
{
    languageName : "py",
    languageFileName: "python"
},
{
    languageName : "rb",
    languageFileName: "ruby"
}
] 
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
  
})