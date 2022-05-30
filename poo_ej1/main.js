import Triangulo from "./triangulo.js";

const mostrar_triangulo=()=>{
    const triangulo_a= document.getElementById("tria_base").value
    const triangulo_b= document.getElementById("tria_altura").value


    const triangulo_instancia= new Triangulo(triangulo_a,triangulo_b)
    
    const area_triangulo = triangulo_instancia.calculo_triangulo()

    document.getElementById("at").textContent = area_triangulo
}

document.getElementById("btn_calcular").addEventListener("click",mostrar_triangulo)