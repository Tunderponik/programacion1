const consumir_dolar =async() =>{
    const api= await fetch(' https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolar = await api.json()

    let filas = []

    dolar.forEach( (element,index) => {

        let fila = `
            <tr>
                <td>${index}</td>    
                <td>${element.casa.nombre}</td>
                <td>${element.casa.compra}</td>
                <td>${element.casa.venta}</td>
            </tr>
            `
            filas.push(fila)
        
        });

document.getElementById("tbl_dolar").innerHTML = filas.join('')           
}
consumir_dolar()