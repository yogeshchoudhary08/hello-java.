class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${ this._password} you's pass key`.toUpperCase()
    }
    set password(value){
        this._password = value // notes :> we don't give return to set it would be undefined
    }

    // get email() {
    //     // return this._email.toUpperCase()
    //     return`${this._email} VAlid`.toUpperCase()
    // }
    // set email(value) {
    //     this._email = value.toUpperCase()
    // }
}
const yogesh = new user('yog@google.com', '123')
console.log(yogesh.password);