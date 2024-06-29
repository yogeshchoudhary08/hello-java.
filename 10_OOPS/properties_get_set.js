function user (email , password){
    this.email = email 
    this.password = password

    Object.defineProperties(this , "email", {
        get : function(){
            return this._email.toUppperCase()
        },
        set : function(value){
            this._email = value.toUppperCase()
        }
    }),

    Object.defineProperties(this , "password", {
        get : function(){
            return this._password.toUppperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

    const code = new user('code@google.com','12345')
console.log(code.email)
console.log(code.password)