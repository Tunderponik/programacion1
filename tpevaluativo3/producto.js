document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'White Wolf',
            precio: 250,
            imagen: 'https://m.media-amazon.com/images/I/61UQ7LWQ0AS._AC_UX679_.jpg'
        },
        {
            id: 2,
            nombre: 'Protogen',
            precio: 750,
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpRVeP4dz0tJBxChFwx9LlFtUDCAHN_SDDCNoX7HNzzvAxEaPX8ULcKvMhPybzHuk7io&usqp=CAU'
        },
        {
            id: 3,
            nombre: 'Kettu',
            precio: 300,
            imagen: 'https://pbs.twimg.com/media/E92_kWdWYAUeyvn?format=jpg&name=large'
        },
        {
            id: 4,
            nombre: 'Arctic Fox',
            precio: 200,
            imagen: 'https://furry.ar/wp-content/uploads/2019/04/Nero4-1-683x1024.jpg'
        },
        {
            id: 5,
            nombre: 'Blue Fox',
            precio: 250,
            imagen: 'https://pm1.narvii.com/7099/4b4d366fdf148a67e9fc427164b89ed6af15c2f5r1-750-1117v2_hq.jpg'
        },
        {
            id: 6,
            nombre: 'Puro',
            precio: 400,
            imagen: 'https://pbs.twimg.com/media/FD73tQeVcAQKbIn.jpg:large'
        },

    ];

    let carrito = [];
    const divisa = ' USD$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    // Funciones

    //Dibujar productos
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertar
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    //Añadir producto al carrito
    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
    }

    //Dibujar productos guardados
    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Crear nodo
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclar nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
       DOMtotal.textContent = calcularTotal();
    }

    //Borrar producto
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
    }

    //Calcular precios
    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    //Vaciar carrito
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();
    renderizarCarrito();
  });