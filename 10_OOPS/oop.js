const user = {
    username: 'yogesh',
    loginCount: 5,
    signedIn: true,



    getUserDetails: function () {
        // console.log('Got user details from database');
        // console.log(`username: ${this.username}`);
        // console.log(this) 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // nothing in global context but global would  not be change

const promiseOne = new promise() // new key word is used for make mutlipules  instences only one object for new context

 function user(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = logincount 
    this.isLoggedIn  = isLoggedIn
    return this 

 }

 const userOne = new user ('chota bheem ' , 45 , true);
 const userTwo = new user ('Addem Smith' , 12 , false);

 console.log(userOne.constructor);
//  console.log(userTwo);

// * Constructor prop is only a reffrece for own syntex
 //  FOR new key word
 // create which creats new objects
 //   pass on pack arguments 
 //Add on

