// //ES6

class user {
    constructor(username, email, password) {
        this.username;
        this.email;
        this.password
    }

    encrpytPassword() {
        return `${this.password} abc`
    }
        chnageUserName(){
            return `${this.username.toUpperCase()}`
        }
    }


const dev = new user("yogesh ", "yog@faceBook.com", "123456")
// console.log(dev.encrpytPassword());
// console.log(dev.chnageUserName())

//behnd the scene 

function User(username,email,password){
    this.username = username;
    this.email = email ;
    this.password = password ;

}

user.prototype.encrpytPassword = function(){
    return `${this.password} abc`

}
user.prototype.chnageUserName = function(){
    return `${this.username.toUpperCase()}`

}

const code = new user("kaliya ", "kaliya@faceBook.com", "123456")
console.log(code.encrpytPassword());
console.log(code.chnageUserName())
