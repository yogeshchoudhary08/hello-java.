class user {
    constructor(username) {
        this.username = username;

    }
    logMe() {
        console.log(`username : ${this.username}`)
    }

     static createId() { // stoping assess for stoping 
        return `123`
    }
}
const yogesh = new user("yogesh")
// console.log(yogesh.createId())

class teacher extends user {
    constructor( username,email){
        super(username)
        this.email = email

    }
}
const iphone  = new teacher('iphone ',"i@phonne.com")
iphone.logMe()
 console.log(iphone.createId())