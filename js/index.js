function bienvenida() {

    alert("Bienvenid@ a Pro Gamer Arg.");
    alert("Sistema de Ventas al por Mayor de Equipos Informaticos (Listas para usar.)");
    alert("Arma tu pedido seleccionando la opcion que mas te guste.");

    do {
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

        switch (opciones) {
            case 1:
                alert("Selecione la cantidad de Pcs Armadas INTEL que desea comprar 🖥");
                let cantidad = parseInt(prompt("Ingrese la cantidad", 0));
                console.log(cantidad);
                if (cantidad <= 0){
                    alert(`⚠ Por favor, Ingresa un valor valido.`)
                    break
                }
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
                if (cantidad <= 0){
                    alert(`⚠ Por favor, Ingresa un valor valido.`)
                    break
                }
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
                if (cantidad <= 0){
                    alert(`⚠ Por favor, Ingresa un valor valido.`)
                    break
                }
                if (cantidad2 <= 2) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);

                } else if (2 < cantidad2 <= 4) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);

                } else if (cantidad2 > 5) {
                    alert(`Gracias por su compra, 👉 su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);
                }
                break;

            default:
                alert('🛑⚠ Por favor, seleccione una opcion valida ⚠🛑')
        }


    } while (

        (confirm(`Te gustaría seguir comprando?`)));

}

bienvenida()



