import Vehiculo from "./vehiculo.js"

function mostrar(){
    const km = document.getElementById("inp_km").value
    const marca = document.getElementById("inp_marca").value

    const auto = new Vehiculo()
    auto.mostrar_datos_vehiculos()
}
document.getElementById("btn_mostrar").addEventListener("click", mostrar)
