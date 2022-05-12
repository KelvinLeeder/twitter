const User = require('./../../app/models/User')

describe("Unit Tests for User class", () =>{

    test('Creat an User Object', () =>{
        //Aqui invocamos el codigo que vamos a usar en la app 
        const user = new User(1, "KLeeder_07", "Kelvin", "Bio", "dateCreated", "lastUpdate" )

        //Aqui se valida los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquiera con el con el valor de la derecha(Valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("KLeeder_07")
        expect(user.name).toBe("Kelvin")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
        
    });
})