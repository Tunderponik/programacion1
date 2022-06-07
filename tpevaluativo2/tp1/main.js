const consumir_dolar = async() => {
    const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos_dolar = await dolar.json()

let lista_criptos = []
    datos_dolar.forEach(criptos => {
        //console.log(element.name)
        let fila = `

        <tr>
        <td>${dolar.compra}</td>
        <td>${dolar.venta}</td>
        <td>${dolar.nombre}</td>
    </tr>

        
        
        `
        lista_dolar.push(fila)
});

document.getElementById("main_dolar").innerHTML = lista_dolar.join('')

}

//invocamos la funcion
consumir_dolar()