function calcular_potencia() {
    const tension = document.getElementById("inp_tension").value
    const corriente = document.getElementById("inp_corriente").value
    const potencia = tension * corriente

    return potencia
}

function mostrar_respuesta()
{

    const respuesta=calcular_potencia()
    alert(respuesta)
}