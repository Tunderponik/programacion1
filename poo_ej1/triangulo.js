export default class Triangulo {

    constructor(A,B){
        this.altura = A
        this.base = B
    }

    calculo_triangulo(){
        let triangulo = `Area triangulo ${(this.altura * this.base) /2}`
        return triangulo
    }
}