class user {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(` A new cousre was added by ${this.username}`)
    }
}

const code = new  Teacher("yogesh san","yog@google","123")

code.addCourse()

const code2 = new user("code2")
code2.logMe()

console.log( code === Teacher);
console.log( code === code2);
console.log( code instanceof user);