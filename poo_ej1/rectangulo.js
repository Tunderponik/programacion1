export default class Rectangulo{
    constructor(A,B){
        this.base=B
        this.altura=A
    }

    area_rectangulo(){
        let rectangulo = `Area rectangolo: ${this.altura * this.base}`
        return rectangulo
    }
}