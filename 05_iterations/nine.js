const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+ currval
// } , 0)

const myTotal = myNums.reduce((acc,curr)=> acc+curr,0) // same output but by smart way...
//console.log(myTotal);]



const myShoping =[
{
    itemName : "js",
    price : 2999
},
{
    itemName : "rb",
    price : 500
},
{
    itemName : "data science",
    price : 520
},
{
    itemName : "full stack dev",
    price : 8000
},
{
    itemName : "mobile dev ",
    price : 6000
},
{
    itemName : "data interpitation",
    price : 8000
},
{
    itemName : "java dev",
    price : 2999
},
{
    itemName : "mern stack",
    price : 2999
}

]
 
   const totalBill = myShoping.reduce((acc,item) => acc+ item.price  ,0)

console.log(totalBill);