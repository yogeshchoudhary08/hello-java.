const promiseOne = new Promise(function (resolve, reject) {
    // DO na async tasks 
    // DB calss , ceyptography , network 
    setTimeout(function () {
        console.log('Astnc task is complete')
        resolve()
    }, 1000)

})
promiseOne.then(function () {
    console.log('promise cousumed')
}) // completly connection with resolve




// new promise(function (resolve, reject) {
// setTimeout(function () {
// console.log('Async task 2')
// resolve()
// }, 1000)
// }).then(function () {
// console.log('Async 2 resolved')
// })



const promiseThree = new promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: " yogesh choudhary", email: "yoges@example.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user)
})




const promiseFour = new promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error0) {
            resolve({ username: 'yogesh', email: 'yog2exmaple.com' })

        } else {
            reject('ERROR: something went wrong')
        }

    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user)
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    }).finally(() => console.log('The promise is either resolved or rejected'))




const promiseFive = new promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: ' yogesh', email: 'yog@example.com' })

        } else {
            reject('ERROR" js went wrong')
        }
    }, 1000)
})




async function consumedpromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}
consumedpromiseFive()



// async function getAllUsers() {
//    try {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data  =  await response.json()
    
//    } catch (error) {
//     console.log("E:" , error)
//    }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response ) =>{
    return response.json()

})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log( error));