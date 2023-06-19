const mostrarMensajes = (msg, bgcolor)=> {
    const divMensajes = document.querySelector('div.mensajes')
    divMensajes.textContent = msg || ''
    divMensajes.style.background = bgcolor || ''
}
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('botonCarrito')) {
        const productId = event.target.id.slice(5);
        const producto = productos.find((p) => p.id === parseInt(productId));
        agregarAlCarrito(producto);
        mostrarMensajes(`El producto ID: ${producto.id} - ${producto.nombre} Se agrego al carrito correctamente.`)
    }
});