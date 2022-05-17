const User = require('./../models/User')

class UserService {
    static create (id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return [user.id, user.username, user.name, user="Sin bio"]
    }

    static updateUserUsername(user){
        return user.username = "KLeeder"
    }

    static getAllUsernames (user){
        return [user.username = "KLeeder_01", user.username = "KLeeder_02", user.username = "KLeeder_03" ]
    }
}

module.exports = UserService