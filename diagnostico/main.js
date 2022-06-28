let numero = ['1','2','3','4','5','6','7','8','9','10']

var pares = [];
numero.forEach(element => {
    
    if(element%2 == 0){
        pares.push(element)
    }
});

console.log(pares)




let rango = []

for (const element of numero) {
    if (element > 2 && element < 9) {
        rango.push(element)
    }
}

console.log(rango)
