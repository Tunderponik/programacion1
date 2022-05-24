export default class Vehiculo {
    marca;
    km;

    constructor(m,k){

    }
    mostrar_datos_vehiculos(){
        this.km = 22500
        this.marca = 'Volkswagen'

        console.log(`
            kilometraje: ${this.km}
            Marca: ${this.marca}
            `)
    }
}