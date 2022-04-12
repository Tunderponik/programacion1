//Crear un array
//variable de tipo array
let autos = ["Ford","Renault","Volsbagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

//mostrar LONGITUD de un arreglo

console.log(` 
    Longitud = ${autos.length} //9
`)

//Acceso a un elemento de un arreglo mediante su indice/posicion
//Acceder al ultimo elemento 
let ultimo_elemento = autos [autos.length-1]
console.log(`
        Ultimo elemento: ${ultimo_elemento}
`)

//recorrer un arreglo haciendo uso de foreach
                //argumento
autos.forEach( (element,index) => {

    console.log(`
        ${index} - ${element}
    `)

});

//como AGREGAR un elemento al FINAL de un arreglo
autos.push("Pistacho")
console.log(autos)

//como ELIMINAR el ULTIMO elemento de un arreglo
autos.pop()
console.log(autos)

//como AGREGAR un elemento al INICIO de un arreglo 
autos.unshift("Menta granizada")
console.log(autos)

//como ELIMINAR el PRIMER elemento de un arreglo
autos.shift()
console.log(autos)

//Como encontrar los indices de un elemento de un array
let indice=autos.indexOf("Ford")
console.log (`
        Posicion del elemento Ford= ${indice}
`)

////ELIMINAR un elemento segun su indice
//indice lo declare como let en el punto anterior
autos.splice(indice,1)
console.log(autos)

//ELIMINAR  varios elementos de un arreglo
autos.splice(0,2)
console.log(autos)


autos.push("Marroc")
//COPIAR un arreglo
//["MARROC"]
let copia= autos.slice()

//Copia=[MARROC,CHOCLATE]
copia.push("Chocolate")
console.log(copia)

//autos=[MARROC]
console.log(autos)