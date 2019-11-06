const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

for (itemCart of carrito) {
    print(itemCart);
}

// eliminamos el elemento 54657 del carrito 
var nuevoCarrito = carrito.splice(2, 1);
console.log(nuevoCarrito);/* elemento eliminado */
console.log("Carrito con 3 elementos :" + carrito); /* nuevo listado sin el elemento eliminado */

// vulevo a añadir el elemento para poder calcular el total
var carritoRestablecido = carrito.push({
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
});
console.log("El carrito vuelve a tener 4 elementos: " + carrito);

// calculo el total del carrito y aplicamos los descuentos

let totalCarrito = 0;
for (item of carrito) {
    totalCarrito += item.price * item.count;
}
if( totalCarrito > 100 ) {
    console.log(totalCarrito)
    descuentoCarrito = parseFloat(totalCarrito)*0.05;
    totalCarrito = totalCarrito - descuentoCarrito;
}
console.log("El total de tu compra es: " + parseInt(totalCarrito) + "€");

// buscamos las opciones prime
for (item of carrito) {
    if (item.premium) print(item);
}

// mostramos el mensaje de gastos de envío
function gastosEnvio(item) {
    let premium = true;
    for (item of carrito) {
        premium = premium && item.premium;

    }
    return !premium;
}
//console.log(gastosEnvio(item))


/* función para imprimir en consola */

function print(item) {
    console.log("********************");

    for (attr in item) {
        console.log(attr.toUpperCase() + ": " + item[attr]);

    }
}

/* Evaluamos si todos los objetos son prime */

/* función para imprimir  html*/

var parsed = "";

for (item of carrito) {
    parsed += "<ul>";
    for (attr in item) {
        parsed += "<li>" + attr.toUpperCase() + ": " + item[attr];
    }
    parsed += "</ul>"
}

document.getElementById("cart").innerHTML = '<div>' + parsed + "<p>El total de la compra es: " + parseInt(totalCarrito) + '</div>';

/* me falta el punto 
Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
tiene gastos de envío".
*/
