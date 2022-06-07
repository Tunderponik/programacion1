let lenguajes = ['Bitcoin', 'Etherium', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana']

//Agregar leguaje al inicio del arreglo
lenguajes.unshift('Stellar')
//Buscar el index de Game boy Advanced
//let index=consolas.indexOf("Game Boy Advanced")
//Eliminar index y PM
lenguajes.delete('Shiba Inu')
lenguajes.delete('Tron')

//Agregar lenguaje al final
lenguajes.unshift('Gate')

consolas.splice(index,2)

const mostrar = () => {
    let final=consolas[consolas.length-1]    

document.getElementById('h2').textContent = ` 
    Longitud del arreglo: ${consolas.length}
`
document.getElementById('h2_final').textContent = `
    Elemento final del arreglo: ${final}
`

document.getElementById('h2_posicion').textContent = `  
    Posicion 4 del array: ${consolas[4]}
`
}

document.getElementById('btn').addEventListener("click",mostrar)

let con = []
const recorrido = () => {

    consolas.forEach((index,element) => {    
        let fila = `
        <tr>
        <th>${element}</th>
        <td >${index}</td>
        </tr>
        `
        con.push(fila)
    });

    document.getElementById('t_body').innerHTML=con.join('')
}

document.getElementById('btn_tbl').addEventListener("click",recorrido)