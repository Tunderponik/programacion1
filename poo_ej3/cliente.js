export default class Cliente {
    constructor(nom, ape, dni){
        this.nombre = nom
        this.apellido = ape
        this.dni = dni
    }
    
    guardar_cliente(){
            let nuevo_cliente = {
                nombre: this.nombre,
                apellido: this.apellido,
                dni: this.dni,
            }
        if("listado_clientes" in localStorage){
            let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))
            lista_clientes.push(nuevo_cliente)
            localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))
        }
        else {

            let lista_clientes = []
            lista_clientes.push(nuevo_cliente)
            //Crear el sector de almacenamiento
            localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))
        }
        //Invocamos al método obtener
        this.obtener_clientes()
    }

    obtener_clientes(){
        let listado_clientes =  JSON.parse(localStorage.getItem("listado_clientes"))

        let filas = []
        listado_clientes.forEach(element => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="this.eliminar_cliente(${index})" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join("")
    }

    eliminar_cliente(index){
        let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        //Eliminar cliente
        lista_clientes.splice(index,1)

        localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))

        this.obtener_clientes()
    }
}