const pedido = [];
const productos = [{ id: 1, nombre: "AMD RYZEN 7 5700G",  precio: 85370,  img: './imagenes/pg-r5700g.jpeg' },
                   { id: 2, nombre: "MOUSE GAMER LOGITECH",  precio: 17553, img: './imagenes/mouse.jpg' },
                   { id: 3, nombre: "AMD RYZEN 5 5600G",  precio: 79350, img: './imagenes/pg-r5700g.jpeg' },
                   { id: 4, nombre: "PLAY STATION 5", precio: 334253, img: './imagenes/consolas.jpg' },
                   { id: 5, nombre: "DISCO EXTERNO", precio: 44253, img: './imagenes/DISCOEXTERNO.jpEg' },
                   { id: 6, nombre: "ESTABILIZADOR", precio: 24253, img: './imagenes/estabilizador.jpeg' },
                   { id: 7, nombre: "AIR COORLER CPU", precio: 134253, img: './imagenes/Coolers.jpeg' },
                   { id: 8, nombre: "MODEM 4 ANTENAS", precio: 21322, img: './imagenes/conctividad.jpeg' },
                   { id: 9, nombre: "NOTEBOOK i5", precio: 355403, img: './imagenes/notebook.jpeg' },
                  { id: 10, nombre: "IMPRESORA HP", precio: 355403, img: './imagenes/impresoras.jpeg' },
                  ];

class Compra {
  constructor(pedido) {
    this.pedido = pedido;
  }

  cantProductos() {
    if (this.pedido.length > 0) {
      return this.pedido.reduce((total, producto) => total + producto.cantidad, 0);
    }
  }

  precioTotal() {
    if (this.pedido.length > 0) {

      return this.pedido.reduce((total, producto) => total + producto.precio, 0);
    }
  }
}

function buscarProducto(id) {
  let retorno = productos.find((producto) => producto.id === parseInt(id));
  return retorno
}

function mostrarDetalleProducto(producto) {
  alert(` 
      Agregaste ${producto.nombre} correctamente.
      Detalle del Producto: 
      ID: ${producto.id}
      Descripcion: ${producto.desc}
      Precio: $${producto.precio}
      `)
}

function comprarProducto() {
  let buscoId = prompt("Ingresa el ID del producto (1, 2, 3, 4)");
  let idElegido = buscarProducto(buscoId);

  if (idElegido) {
    pedido.push(idElegido);
    mostrarDetalleProducto(idElegido);
  } else {
    alert("Producto no encontrado");
  }

  let continua = confirm("¿Deseas continuar comprando?");

  if (continua) {
    comprarProducto();
  } else {
    finDeCompra();
  }
}

function finDeCompra() {
  const mipedido = new Compra(pedido);
  alert(`El valor total de tu pedido es $ `+ mipedido.precioTotal() +`\nCantidad total de productos: `+ mipedido.cantProductos() +`\n¡Muchas gracias por tu compra!`
  );
}

//comprarProducto();


const container = document.querySelector('div.container#container')

function cardReturn(producto) {
    return `<div class="productDiv">
                 <h3 class="productos__h2">${producto.nombre}</h3>
                 <img src="${producto.img}" class="imagProduc" alt="...">
                 <p class="productos__precio">$ ${producto.precio}</p>
                 <hr class="dropdown-divider">
                 <button class="botonCarrito" id=boton${producto.id}>Comprar</button>
            </div>` 
}

function cargarProductos() {
    container.innerHTML = ''
    productos.forEach((producto) => {
        container.innerHTML += cardReturn(producto)
    })
    activarClickEnBotones()
}

cargarProductos()

function activarClickEnBotones() {
    const botones = document.querySelectorAll('.botonCarrito')
          for (let boton of botones) { //Event : event - ev - evt
            boton.addEventListener('click', (e)=> { 
                const idElegido = productos.find((producto)=> producto.id === parseInt(e.target.id))
                pedido.push(idElegido)
                console.table(pedido)
            })
          }
}


imgLogo.addEventListener('click', ()=> {
    location.href = 'finalizarCompra.html'
})

imgLogo.addEventListener('mousemove', ()=> {
    imgLogo.title = 'Ir al carrito'
})