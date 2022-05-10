let lenguajes = ["Python", "JavaScript", "Csharp", "C++" , "Java" , "PHP" , "Ruby"]

function longitud {
    longitud = ${lenguajes.length}
    document.getElementById("botton").textContent = longitud
}

lenguajes.forEach(function(valor, indice, lenguajes)) {
    console.log('${valor} se encuentra en el indice ${indice}')
}

console.log()

function recorridoArreglo(valor, indice, lenguajes) {
    console.log('${valor} se encuentra en el indice ${indice}')
}

lenguajes.forEach(recorridoArreglo) 

console.log()

lenguajes.forEach(valor, indice, lenguajes) => {
    console.log('${valor} se encuentra en el indice ${indice}')
}

console.log()