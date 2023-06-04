const pedido = [];
const productos = [{id: 1, nombre: "AMD RYZEN 7 5700G", desc: "Procesador Amd Ryzen 5700G", precio: 85370, cantidad: 1,},
                   {id: 2, nombre: "MOUSE GAMER", desc: "Mouse Gamer con 5400 DPI", precio: 17553, cantidad: 1,  },
                   {id: 3, nombre: "AMD RYZEN 5 5600G", desc: "Procesador Amd Ryzen 5700G", precio: 79350, cantidad: 1, },
                   {id: 4, nombre: "AMD PHANTOM RX 560", desc: "AMD RX 560 4GB GDDR5", precio: 34253, cantidad: 1,},
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
  alert(`El valor total de tu pedido es $${mipedido.precioTotal()}\nCantidad total de productos: ${mipedido.cantProductos()}\n¡Muchas gracias por tu compra!`
  );
}

comprarProducto();
