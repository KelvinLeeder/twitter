const UserService = require('./../../app/services/UserService')
const UserView = require('./../../app/views/UserView')

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

    test("4. Given a list of user give me the list of usernames", () =>{
        const user1 = UserService.create(1, "KLeeder_01", "Kelvin")
        const user2 = UserService.create(1, "KLeeder_02", "Kelvin")
        const user3 = UserService.create(1, "KLeeder_03", "Kelvin")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("KLeeder_01")
        expect(usernames).toContain("KLeeder_02")
        expect(usernames).toContain("KLeeder_03")
        
    })

    test(" 5. Return an error object when try to create a new user wiht an null payload",()=>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })


    test("6. Return an error object when try to create a new user with a payload invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor/)
    })

    test("7. Return an error object when try to create a new user with a payload with missing propierties", () =>{
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor/)
    })

    test ("8. Create a user by a given valid payload", ()=>{
        const payload = {username: "username", id: 1, name:"name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)

    })
})




  