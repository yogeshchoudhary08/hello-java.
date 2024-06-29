function setUserName(username) {
    //complex DB calls
    this.username.username
    console.log('called')
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const dev = new createUser("yogesh", "yug@google.com", "1223456")
console.log(dev)