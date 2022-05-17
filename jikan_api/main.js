const consumir_dato =async () => {
    const datos_recibidos = await fetch('://api.jikan.moe/v4/anime?q=beastars&sfw')

    const datos = await datos_recibidos.json()

    let lista_usuarios = []
    datos.forEach(usuario => {
        let fila = `
        <tr>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.website}</td>
        </tr>`
        lista_usuarios.push(fila)
    })

    document.getElementById("tbl_body").innerHTML = lista_usuarios.join('')
}

consumir_dato()