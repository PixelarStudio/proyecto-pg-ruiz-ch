const mostrarMensajes = (msg)=> {
    const divMensajes = document.querySelector('div.mensajes')
    divMensajes.textContent = msg || ''
}
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('botonCarrito')) {
        const productId = event.target.id.slice(5);
        const producto = productos.find((producto) => producto.id === (productId));
        agregarAlCarrito(producto);
        mostrarMensajes(`El producto ID: ${producto.id} - ${producto.nombre} Se agrego al carrito correctamente.`)
    }
});
const URL = "js/productos.json"
const carrito = [];
const productos = [];

async function getProcutosAsync() {
    const response = await fetch(URL)
    const data = await response.json()
    productos.push(...data)
    cargarProductos()
  }
  getProcutosAsync()