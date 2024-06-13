//arrays

const myArr = [0,1,2,3,4,5]
let myHeros = ["chotabheem","chutki"]

const myArr2 =  new Array(1,2,3,4)
//console.log(myArr2[1]);

//Array methods 
myArr.arr.push(6)// for adding last
myArr.arr.pop()// remove last one from array

myArr.unshift(2)// for starting adding 
myArr.shift()
//console.log(myArr.includes(9));// for existece
//console.log(myArr.indexOf(3));// place of index 

const newArr = myArr.join()
//console.log(myArr);
//console.log(typeof.newArr);


//slice , splice 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


