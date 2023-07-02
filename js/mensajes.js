container.addEventListener('click', (event) => {
    if (event.target.classList.contains('botonCarrito')) {
        const productId = event.target.id.slice(5);
        const producto = productos.find((producto) => producto.id === (productId));
        agregarAlCarrito(producto);
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