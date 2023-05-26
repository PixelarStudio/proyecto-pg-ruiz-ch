/*function bienvenida() {

    alert("Bienvenid@ a Pro Gamer Arg.");
    alert("Sistema de Ventas al por Mayor de Equipos Informaticos (Listas para usar.)");
    alert("Arma tu pedido seleccionando la opcion que mas te guste.");

        let opciones = parseInt(prompt("1) PC INTEL: $110.700, \n 2) PC AMD: $80.000, \n 3) COMBO ACTUALIZACION: $25.000"));
        const suma = (a, b) => a + b;
        const resta = (a, b) => a - b;
        const pcintel = 110700;
        const pcamd = 80000;
        const comboactualizacion = 25000;
        let descuento1 = 0.1;
        const IVA = 0.21;
        let precioPcIntel = resta(suma(pcintel, IVA * pcintel), descuento1 * pcintel);
        let precioPcAmd = resta(suma(pcamd, IVA * pcamd), descuento1 * pcamd);
        let precioComboActualizacion = resta(suma(comboactualizacion, IVA * comboactualizacion), descuento1 * comboactualizacion);
        
    do {
        switch (opciones) {
            case 1:
                alert("Selecione la cantidad de Pcs Armadas INTEL que desea comprar 🖥");
                let cantidad = parseInt(prompt("Ingrese la cantidad", 0))
                console.log(cantidad);
                if (cantidad <= 2) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioPcIntel * cantidad}.`);
                } else if (2 < cantidad <= 4) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioPcIntel * cantidad}.`);
                } else if (cantidad > 5) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioPcIntel * cantidad}.`);
                }
                break;
            case 2:
                alert("Selecione la cantidad de Pcs Armadas AMD que desea comprar 🖥");
                let cantidad1 = parseInt(prompt("Ingrese la cantidad", 0));
                console.log(cantidad1);
                if (cantidad1 <= 2) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioPcAmd * cantidad1}.`);
                } else if (2 < cantidad1 <= 4) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioPcAmd * cantidad1}.`);
                } else if (cantidad1 > 5) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioPcAmd * cantidad1}.`);
                }
                break;
            case 3:
                alert("Selecione la cantidad de COMBOS DE ACTUALIZACION que desea comprar 🖥🖱");
                let cantidad2 = parseInt(prompt("Ingrese la cantidad", 0));
                console.log(cantidad2);
                if (cantidad2 <= 2) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);
                } else if (2 < cantidad2 <= 4) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);
                } else if (cantidad2 > 5) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);
                }
                break;

            default:
                const eleccion = confirm("¿Deseas volver al menu?")
                if (eleccion) {
                    bienvenida()
                } else {
                    return "🛑⚠ Por favor, seleccione una opcion valida ⚠🛑"
                }
        }


    } while (
        confirm(`Te gustaría seguir comprando?`))

}
bienvenida() 

//Pre-Entrega: --- Entrega modificada --- 👇👇👇

*/

//Inicia los mensajes de informacion del proyecto. 
function mostrarMensaje(mensaje) {
  alert(mensaje);
}
//obtiene la cantidad que se desee ingresar para la compra.
function obtenerCantidad() {
  return parseInt(prompt("Ingrese la cantidad deseada", 0));
}
//Calcula el precio en base a la cantidad y aplica el iva correspondiente. 
function calcularPrecioFinal(precio, cantidad) {
  let descuento1 = 0.1;
  const IVA = 0.21;
  let precioFinal = (precio + IVA * precio) - (descuento1 * precio);
  return precioFinal * cantidad;
}
//Obtenido el precio y la cantidad comienza el proceso de finalizacion de compra, informando el importe final con iva aplicado. 
function procesarPedido(precio, cantidad) {
  let precioFinal = calcularPrecioFinal(precio, cantidad);
  alert(`Gracias por su compra. Su pedido está siendo procesado. El precio final es de $${precioFinal}.`);
}
//Se ejecuta la funciona la iniciar el sitio desde index.html una vez finalizado el proceso de seleccion con switch, se puede navegar por el sitio. 
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

bienvenida()