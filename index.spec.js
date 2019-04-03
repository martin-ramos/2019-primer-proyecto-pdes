import { Golondrina, GolondrinasInmutables as GI } from "./index";


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

describe("pepita inmutable", () => {
    it("debería volar y consumir energía", () => {
        const pepita = GI.volar(GI.crear("pepita"), 2)
        expect(pepita).toMatchObject({nombre: "pepita", edad: 1, energia: 24})
        // expect(pepita.energia).toEqual(24)
        // expect(pepita.nombre).toEqual("pepita")
        // expect(pepita.edad).toEqual(1)
    })
});
