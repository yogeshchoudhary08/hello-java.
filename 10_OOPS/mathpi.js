//  const discripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(discripter)


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)
// Object.create(null)

//object 

const code = {
    name: "js",
    price: 250,
    isAvailable: true,
    writeCode: function () {
        console.log(`code udifined`);
    }

}
console.log(Object.getOwnPropertyDescriptor(code, "name"))
Object.defineProperty(code ,"name",{
    // writable : false ,
    enumerable : true,
    // configurable: false,
    // iteratable: false,
 })


console.log(Object.getOwnPropertyDescriptor(code,"name"))
for (const [key, value] of Object.entries(code)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`)
    }

}