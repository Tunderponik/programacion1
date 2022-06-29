function almacenar_indice(index) {
    localStorage.setItem("indice",index)
}

function editar(index) {
    let listado_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

    document.getElementById("inp_nombre").value = listado_clientes[index].nombre
    document.getElementById("inp_apellido").value = listado_clientes[index].apellido
    document.getElementById("inp_precio").value = listado_clientes[index].precio

    //Guardamos en el storage el indice del cliente que queremos editar (actualizar)
    localStorage.setItem("indice_update",index)

    //Encendemos botón actualizar
    document.getElementById("btn_actualizar").style.display="block"
    document.getElementById("btn_guardar").style.display="none"
}