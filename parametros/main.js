const calcular = (d1,d2) => {

const resultado = Math.pow(d1,d2)

return resultado

}

const mostrar = () => {
    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value

    const respuesta = calcular(dato1,dato2)

    alert(respuesta)
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)