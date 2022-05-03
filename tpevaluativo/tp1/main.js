function descuento() {

    const precio = document.getElementById("ford").value
    var resultado = null

    if (precio == 1950000) {
       resultado =   1950000 - ((precio / 100) * 5) 
    }
    else {
        if (precio === 2500000) {
           resultado = 2560000 - ((precio / 100) * 10) 
        }
        else {
            if (precio == 1750000) {
                resultado =  1750000 - ((precio / 100) * 15) 
            }
        }
    } 
    
    document.getElementById("mssg_resultado").textContent = 'Precio Final: ' + resultado
}