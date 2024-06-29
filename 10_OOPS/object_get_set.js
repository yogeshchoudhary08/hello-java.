const user ={
    _email:"h@hc.com",
    _password : "abc", // underscore means i define in private prop

     get email(){// get means to get from memory 
        return this._email.toUpperCase()
     },
     set email(value){// for set email is prop
        this._email = value
     },

     get password(){
        return this._password.toUpperCase()
     },
     set password(value){
        this._password = value
     }

}
const dev = Object.create(user)
console.log(dev.password);