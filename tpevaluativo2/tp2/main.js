let Criptos = ["Bitcoin","Etherium","Tether","BNB","Cardano","Dai","Helium","Shiba Inu","Tron","Crono s","Solana"]

//Añadir Stellar al principio del arreglo
Criptos.unshift("Stellar")

//Buscar indice
let indice = Criptos.indexOf("Shiba Inu")

//Eliminar 2 lugares
Criptos.splice(indice,2)

//Añadir Gate al final
Criptos.push("Gate")
console.log(Criptos)

const mostrar = () => {
    let indice = Criptos.indexOf("Helium")
    document.getElementById("p_criptos").innerHTML = `
    Longitud Arreglo: ${Criptos.length}
    <br>
    Último Arreglo: ${Criptos[Criptos.length-1]}
    <br>
    Moneda Helium: ${indice} - ${Criptos[indice]}
    `
}

document.getElementById('btn_parrafo').addEventListener("click",mostrar)

let bolsa = []
const recorrer = () => {
    Criptos.forEach((element,index) => {
        let fila = `
        <li class="list-group-item-success"> Element: ${element}  <--> Index: ${index}</li>
        `

        bolsa.push (fila)
    });
    document.getElementById("lista").innerHTML = bolsa.join('')
}

//Evento
document.getElementById('btn_mostrar').addEventListener("click",recorrer);