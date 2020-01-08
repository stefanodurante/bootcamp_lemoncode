// console.log("clases");

// // centro comercial

// // área de perfmería (dto. 10%)

// // const subtotal = 30;
// // const descuento = 10;

// // const calcularTotal = (subtotal, descuento) => subtotal - (descuento * subtotal) / 100;

// // console.log("Perfumeria ", calcularTotal(subtotal, descuento))

// // // área de supermercado (dto. 20%)

// // const subtotal = 50;
// // const descuento = 20;

// // const calcularTotal = (subtotal, descuento) => subtotal - (descuento * subtotal) / 100;

// // console.log("Supermercado ", calcularTotal(subtotal, descuento))

// /// no sa un error ya que las variables se llaman igual

// // Definiendo nuestra clase
// // la clase es un tipo de funcion que se define con class

// // Definiendo nuestra clase

// class TotalesDepartamento {
//     constructor(descuento) {
//         this.descuento = descuento;
//         this._subtotal = 0;
//         this.total = 0;
//     }

//     // introduciomos el getter
//     // get total() {
//     //     return this.subtotal - (this.descuento * this.subtotal) / 100
//     // }

//     set subtotal(nuevoValor) {
//         this._subtotal = nuevoValor;
//         this.total = this._subtotal - (this.descuento * this._subtotal) / 100
//     }

//     // métodos de la clase (la clase expone las funciones hacia fuera)
//     // calculaTotal() {
//     //     this.total = this.subtotal - this.descuento * this.subtotal / 100;
//     // }
// }

// const totalesPerfumeria = new TotalesDepartamento(10);

// totalesPerfumeria.subtotal = 50;
// console.log("Perfumeria ", totalesPerfumeria.total);

// totalesPerfumeria.subtotal = 30;
// console.log("Perfumeria ", totalesPerfumeria.total);
// // const totalesSupermercado = new TotalesDepartamento(20);
// // totalesSupermercado.calculaTotal();

// console.log("Supermercado ", totalesSupermercado.total);

// this

// class PreciosAPI {
//     cosntructor() {
//         this.descuento = 0.8;
//     }
//     cargaPrecioDeServidor() {
//         setTimeout(function() {
//             const precio = 2; // <- simulando entrada de la Api

//             console.log(precio * this.descuento)
//         }, 1000)
//     }
// }

// const preciosAPI = new PreciosAPI();
// preciosAPI.cargaPrecioDeServidor();

// class Animal {
//     constructor(nombre, piernas, ruido) {
//         this.tipo = "animal";
//         this.nombre = nombre;
//         this.piernas = piernas;
//         this.ruido = ruido;
//     }

//     habla() {
//         console.log(`${this.nombre} dice ${this.ruido}`);
//     }

//     anda() {
//         console.log(this.nombre + " camina con " + this.piernas);
//     }

//     set cazacomida(comida) {
//         this.comida = comida;
//     }

//     get come() {
//         return `${this.nombre} se come ${this.comida || "nada grouaann"}`;
//     }
// }

// const laika = new Animal("Laika", 4, "woff");
// laika.cazacomida = "huesos";
// console.log(laika.come);

// // loro ("otro, 2, "pipas);

// Practica

// ## Definición

// Vamos a manejarnos con un carrito de la compra.

// Tenemos la siguiente entrada de datos:

// - Un array de productos que hemos comprado.
// - Cada producto tiene:
//   - El nombre del producto.
//   - La cantidad de productos que hemos comprado.
//   - El precio.
//   - El tipo de IVA que aplica.

// Requisitos

/**
 * Queremos calcular
 * - El subtotal de la compra (suma de producto por cantidad si n iva)
 * - El total de la compra (subtotal + iva)
 */
const cesta = [{
        nombre: "Cerveza",
        cantidad: 1,
        precio: 2,
        tipoIVA: "general"
    },
    {
        nombre: "Galletas",
        cantidad: 3,
        precio: 1,
        tipoIVA: "reducido"
    },
    {
        nombre: "pan",
        cantidad: 4,
        precio: 0.5,
        tipoIVA: "superreducido"
    }
];

class CarritoDeLaCompra {
    constructor() {
        this._cesta = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculaSubtotal() {
        // this._subtotal = cesta.reduce(
        //     (acumulado, lineaTicket) =>
        //     acumulado + lineaTicket.cantidad * lineaTicket.precio, 0);
        // lo pasamos a destructuring
        this._subtotal = cesta.reduce(
            (acumulado, { cantidad, precio }) => acumulado + cantidad * precio,
            0
        );
    }

    calcularFactorIVA(tipoIVA) {
        switch (tipoIVA) {
            case "general":
                return 1.21;
            case "reducido":
                return 1.1;
            case "superreducido":
                return 1.4;
        }

        return 1;
    }

    calculateTotal() {
        this._total = cesta.reduce(
            (acumulado, { cantidad, precio, tipoIVA }) =>
            acumulado + cantidad * precio * this.calcularFactorIVA(tipoIVA),
            0
        );
    }

    get total() {
        return this._total;
    }
    get subtotal() {
        return this._subtotal;
    }

    set cesta(cestaExterna) {
        this._cesta = cestaExterna;
        this.calculaSubtotal();
        this.calculateTotal();
    }
}

const carrito = new CarritoDeLaCompra();

carrito.cesta = cesta;
carrito.subtotal;

console.log("subtotal", carrito.subtotal);

console.log("total", carrito.total);