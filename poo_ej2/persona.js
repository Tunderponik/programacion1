export default class Persona {
    apellido;
    nombre;
    dni;
    constructor(){

    }

    mostrar_datos_personales() {
        console.log(`
            Apellido: ${this.apellido}
            Nombre: ${this.nombre}
            Dni: ${this.dni}
        `)
    }
}