const container = document.querySelector("#container");
const buscarBtn = document.querySelector("#buscarBtn");
const busquedaInput = document.querySelector("#busquedaInput");
const carritoContainer = document.querySelector("#carritoContainer");
const vaciarCarritoBtn = document.querySelector('#vaciarCarritoBtn');

function cardReturn(producto) {
  return `<div class="productDiv">
              <h3 class="productos__h2">${producto.nombre}</h3>
              <img src="${producto.img}" class="imagProduc" alt="Imagen Ilustrativa">
              <p class="productos__precio">$ ${producto.precio}</p>
              <button class="botonCarrito" id="boton${producto.id}">Comprar</button>
          </div>`;
}

function cargarProductos() {
    container.innerHTML = "";
    productos.forEach((producto) => {
        container.innerHTML += cardReturn(producto);
    });
}

function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarProductosCarrito();
  Swal.fire({
    title: 'Agregado al Carrito!',
    text: `Agregaste ${producto.nombre} correctamente.`,
    imageUrl: `${producto.img}`,
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: 'Imagen de Producto',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
    
  })
}

function mostrarProductosCarrito() {
  let carritoDetalle = "";
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;

  if (carrito.length > 0) {
    carrito.forEach((producto) => {
      carritoDetalle += `
            <div class="carritoItem">
                <img src="${producto.img}" alt="...">
                <p><b>ID:</b> ${producto.id}</p>
                <p><b>NOMBRE:</b>${producto.nombre}</p>
                <p><b>PRECIO $</b>${producto.precio}</p>
           </div>`;
      total += producto.precio;
    });
  } else {
    carritoDetalle = "<b>El carrito está vacío.</b>";
  }
  carritoDetalle += `<p class="total" >TOTAL: $ ${total}</p>`;
  carritoContainer.innerHTML = carritoDetalle;
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarProductosCarrito();
    let timerInterval
  Swal.fire({
  title: 'Vaciando Carrito!',
  html: 'El carrito se vaciara en <b></b> milisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
  }
})
}
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

buscarBtn.addEventListener("click", () => {
  const searchTerm = busquedaInput.value.toLowerCase().trim();
  const resultados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm));

  if (resultados.length > 0) {
    container.innerHTML = "";
    resultados.forEach((producto) => {
      container.innerHTML += cardReturn(producto);
    });
  } else {
    container.innerHTML = "No se encontraron productos.";
  }
});



