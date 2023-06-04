function mostrarMensaje(mensaje) {
    alert(mensaje);
  }
  function obtenerCantidad() {
    return parseInt(prompt("Ingrese la cantidad deseada", 0));
  }
  function calcularPrecioFinal(precio, cantidad) {
    let descuento1 = 0.1;
    const IVA = 0.21;
    let precioFinal = (precio + IVA * precio) - (descuento1 * precio);
    return precioFinal * cantidad;
  }
  function procesarPedido(precio, cantidad) {
    let precioFinal = calcularPrecioFinal(precio, cantidad);
    alert(`Gracias por su compra. Su pedido está siendo procesado. El precio final es de $${precioFinal}.`);
  }
  function bienvenida() {
    mostrarMensaje("Bienvenid@ a Pro Gamer Arg.");
    mostrarMensaje("Sistema de Ventas al por Mayor de Equipos Informáticos.");
    mostrarMensaje("Arma tu pedido seleccionando la opción que más te guste. Todos los productos cuentan con 10% de Descuento.");
  
    let opciones = parseInt(prompt("Precios expresados sin IVA \n1) PC INTEL: $150.000, \n2) PC AMD: $180.000, \n3) COMBO ACTUALIZACIÓN: $55.000"));
  
    switch (opciones) {
      case 1:
        mostrarMensaje("Seleccione la cantidad de PCs INTEL que desea comprar 🖥");
        let cantidad1 = obtenerCantidad();
        procesarPedido(150000, cantidad1);
        break;
      case 2:
        mostrarMensaje("Seleccione la cantidad de PCs AMD que desea comprar 🖥");
        let cantidad2 = obtenerCantidad();
        procesarPedido(180000, cantidad2);
        break;
      case 3:
        mostrarMensaje("Seleccione la cantidad de COMBOS DE ACTUALIZACIÓN que desea comprar 🖥🖱");
        let cantidad3 = obtenerCantidad();
        procesarPedido(55000, cantidad3);
        break;
      default:
        const eleccion = confirm("¿Desea volver al principio?");
        if (eleccion) {
          bienvenida();
        } else {
          return "🛑⚠ Por favor, seleccione una opción válida ⚠🛑";
        }
    }
  
    if (confirm("¿Te gustaría seguir comprando?")) {
      bienvenida();
    }
  }
  
