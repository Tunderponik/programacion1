//función clásica
function mostrar(){
    //forma 1
    //const nombres = document.querySelector("#inp_nombres").value
    //forma 2
    const nombres = document.querySelector("#inp_nombres").value

    //sin complete string
    const mensaje = 'Nombre y apellido: ${nombres} - DNI'

    alert(mensaje)
}


function mifuncion_con_retorno() {
    const ejemplo = 'Probando funcio con retorno'
    return ejemplo
}

function monstrar_respuesta() {
    const respuesta = mifuncion_con_retorno()
}