const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "KLeeder_07", "Kelvin")
        expect(user.username).toBe("KLeeder_07")
        expect(user.name).toBe("Kelvin")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1, "KLeeder_07", "Kelvin")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("KLeeder_07")
        expect(userInfoInList[2]).toBe("Kelvin")
        expect(userInfoInList[3]).toBe("Sin bio")
        
    })

    test("3. Update username", () =>{
        const user = UserService.create(1, "KLeeder_07", "Kelvin" )
        UserService.updateUserUsername(user, "KLeeder")
        expect(user.username).toBe("KLeeder")
    })
})