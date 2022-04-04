const mostrar = () => {
    document.getElementById("inp_dato").value = 10
    document.getElementById("h_titulo").textContent = "Probando función flecha"
}

const boton = document.getElementById("btn_mostrar") //obtengo el elemento botón

boton.addEventListener("click", mostrar) //analizamos el evento a escuachar en click
//cuando se haga click se hará uso de la función