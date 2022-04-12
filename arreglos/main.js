//Array
//variable tipo array
let helados = ("Banana Split", "dulce de leche", "frutilla")

//mostrar longitud de arreglos

//mostrar longitud de un arreglo
console.log(`
    longitud = ${helados.length} //3
    `)

//Acceso al elemento de un arreglo mediante su indice

//Acceder al ultimo elemento
let ultimo_elemento = helados[helados.length-1]
console.log(`
    ultimo elemento: ${ultimo_elemento}
`)

//recorrer un arreglo haciendo uso de foreach

helados.foreach(element, index) => {
    console.log(`
    ${index} - ${element}
    `)
});

//como agregar un elemento al final de un arreglo
helados.push("Pistache")
console.log(helados)

//como el último de un arreglo
helados.pop()
console.log(helados)

//como agregar un elemento al inicio de un arreglo
helados.unshift("Menta granizada mejorada")
console.log(helados)

//como eliminar el primer elemento de un array
helados.shift()
console.log(helados)

//como encontrar los índices de un elemento
let indice = helados.indexOf("Banana Split")
console.log(`
    Posición del elemento Banana Split = ${indice}
`)

//actualizar un elemento según su indice
helados.splice(indice,1)
console.log(helados)

//eliminar varios elementos de un arreglo
helados.splice(0,2)
console.log(helados)

//copiar un arreglo
helados.push("Merrec")

let copia = helados.splice()
copia.push("Chocolate")

console.log(copia)
console.log(helados)