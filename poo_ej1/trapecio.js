export default class Trapecio {

    constructor(Altura,Base1,Base2){
        this.altura = Altura
        this.base = Base1
        this.segundabase = Base2
    }

    calculo_trapecio(){

        let trapecio = parseInt(this.base) + parseInt(this.segundabase)
        let resultado = `Area de trapecio: ${(trapecio * this.altura)/2}`
         return resultado
    }
}