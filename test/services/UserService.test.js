const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "KLeeder_07", "Kelvin")
        expect(user.username).toBe("KLeeder_07")
        expect(user.name).toBe("Kelvin")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
})