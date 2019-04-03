import { pepita, crearGolondrina } from "./index";


describe("pepita básica", () => {
    it("debería volar y consumir energía", () => {
        const pepita = crearGolondrina()
        pepita.volar(2)
        expect(pepita.energia).toEqual(24)

    })

    it("debería comer y sumar energía", () => {
        const pepita = crearGolondrina()
        pepita.comer(3)
        expect(pepita.energia).toEqual(36)
        
    })

})