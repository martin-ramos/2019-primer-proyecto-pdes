import { Golondrina } from "./index";


describe("pepita básica", () => {
    it("debería volar y consumir energía", () => {
        // const pepita = crearGolondrina()
        const pepita = new Golondrina()
        pepita.volar(2)
        expect(pepita.energia).toEqual(24)

    })

    it("debería comer y sumar energía", () => {
        // const pepita = crearGolondrina()
        const pepita = new Golondrina()
        pepita.comer(3)
        expect(pepita.energia).toEqual(36)

    })

})
