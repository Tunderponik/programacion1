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
        this.vaciar_formulario()
    }

    obtener_clientes(){
        let listado_clientes =  JSON.parse(localStorage.getItem("listado_clientes"))

        let filas = []
        listado_clientes.forEach ( (element, index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm" class="btn btn-primary"><i class="fa fa-pencil"></i></button>
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

    actualizar_cliente(index){
        //Fui a buscar el listado de clientes al storage
        let listado_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        listado_clientes[index].nombre = document.getElementById("inp_nombre").value
        listado_clientes[index].apellido = document.getElementById("inp_apellido").value
        listado_clientes[index].dni = document.getElementById("inp_dni").value

        localStorage.setItem("listado_clientes", JSON.stringify(listado_clientes))

        //Volvemos a reconstruir la tabla
        this.obtener_clientes()

        vaciar_formulario() {
            document.getElementById("btn_cliente").reset()
        }
    }
}