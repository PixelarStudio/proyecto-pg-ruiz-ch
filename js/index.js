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

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  mostrarProductosCarrito();
  let timerInterval
  Swal.fire({
    title: 'Vaciando Carrito!',
    html: 'El carrito se vaciara en <b></b> milisegundos.',
    timer: 1500,
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

    container.innerHTML = resultados.length > 0 ? resultados.map(producto => cardReturn(producto)).join("") : "<b>No se encontraron productos.</b>";
    });
