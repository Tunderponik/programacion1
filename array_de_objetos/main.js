let vehiculos =[
    {
        marca: 'Ford',
        modelo: 'Focus',
        anio: 2014,
        origen: 'mercosur',
    },

    {
        marca: 'Vokswagen',
        modelo: 'Golf 1.4 TSI',
        anio: 2014,
        origen: 'mexico',
    }
]

//recoger un array de objetos
vehiculos.forEach( (element,index) => {
    console.log(index+'-'+element.modelo)
});

//funciones asincronas + concepto de Async y Await

const recorrer = () => {

    //esto realiza una peticion HTTP
    //a traves del metodo GET
    const respuestas = await fetch('https://jsonplaceholder.typicode.com/posts')

    const publicaciones = respuesta.json()

    publicaciones.forEach(element=> {
        console.log(element, title)
    });

}

const boton = document.getElementById("btn_ejecutar")
boton.addEventListener("click",recorrer)