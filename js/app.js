const URL = "js/productos.json"
const carrito = [];
const productos = [];

async function getProductosAsync() {
    const response = await fetch(URL)
    const data = await response.json()
    productos.push(...data)
    cargarProductos()
}
getProductosAsync()

function mostrarProductosCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let carritoDetalle = "";
    let total = 0;

    if (carrito.length > 0) {
        carrito.forEach((producto, index) => {
            carritoDetalle += `
                <div class="carritoItem">
                    <img src="${producto.img}" alt="...">
                    <p><b>ID: </b>${producto.id}</p>
                    <p><b>NOMBRE: </b>${producto.nombre}</p>
                    <p><b>PRECIO: </b>$${producto.precio}</p>
                    <p><b>CANTIDAD: </b>${producto.cantidad}</p>
                    <button class="eliminar" data-index="${index}"><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
                         `;
            total += producto.precio * producto.cantidad;
        });
        carritoDetalle += `
            <p class="total">TOTAL: $${total}</p>`;
    } else {
        carritoDetalle = "<b>El carrito está vacío.</b>";
    }
    document.querySelector('.carritoContainer').innerHTML = carritoDetalle;
    document.querySelectorAll('.eliminar').forEach(button => button.addEventListener('click', eliminarProducto));
    document.querySelector('.finalizar-compra').addEventListener('click', finalizarCompra);
}

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let productoEncontrado = carrito.find(prod => prod.id === producto.id);
    if (productoEncontrado) {
        productoEncontrado.cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
    mostrarProductosCarrito();
}

function eliminarProducto(event) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(event.target.dataset.index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarProductosCarrito();
}

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('botonCarrito')) {
        const productId = event.target.id.slice(5);
        const producto = productos.find((producto) => producto.id === (productId));
        agregarAlCarrito(producto);
    }
});
const botonFinalizar = document.querySelector('.finalizar-compra');
if (botonFinalizar) {
    botonFinalizar.addEventListener('click', finalizarCompra);
}

async function finalizarCompra() {
    const steps = ['1', '2']
    const Queue = Swal.mixin({
        progressSteps: steps,
        confirmButtonText: 'Siguiente >',
        // optional classes to avoid backdrop blinking between steps
        showClass: { backdrop: 'swal2-noanimation' },
        hideClass: { backdrop: 'swal2-noanimation' }
    })
    await Queue.fire({
        title: 'Compra finalizada con éxito! Muchas gracias por tu compra!',
        currentProgressStep: 0,
        showClass: { backdrop: 'swal2-noanimation' },
    })
    await Queue.fire({
        title: 'ProGamerArg agradece por su Visita!',
        currentProgressStep: 2,
        confirmButtonText: 'OK',
        showClass: { backdrop: 'swal2-noanimation' },
    })
    localStorage.removeItem("carrito");
    mostrarProductosCarrito();
}
mostrarProductosCarrito();