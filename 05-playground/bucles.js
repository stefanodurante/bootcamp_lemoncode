// var ciudades = ["Bali", "Roma", "Berlín", "Malaga", "Madrid"]

// // accedemos a las posiciones del array incrementando la var
// inizializamos indice con 0
// let indice = 0;
// //  indice = indice + 1; indice++ incrementamos la variable
// console.log(ciudades[indice]);

// indice = indice + 1; // indice++
// console.log(ciudades[indice]);

// indice++ // indice = indice + 1;
// console.log(ciudades[indice]);

// indice++
// console.log(ciudades[indice]);

// indice++
// console.log(ciudades[indice]);

// para evitar todo estos pasos utilizamos los Bucles // se utiliza un bucle para no repetir una iteración
// var ciudades = ["Bali", "Roma", "Berlín", "Malaga", "Madrid"]

// for (indice = 0; indice < ciudades.length; indice++) {
//     console.log(ciudades[indice]);
// }

// for (indice = ciudades.length - 1; indice >= 0; indice--) {
//     console.log(ciudades[indice]);
// }

// // lo mas normal es utilizar un i

// for (i = 0; i < ciudades.length; i++) {
//     console.log(ciudades[i]);
// }


var reserva1 = { id: 1, price: 24.50, client: "Caroline" };
var reserva2 = { id: 2, price: 61.50, client: "Liam" };
var reserva3 = { id: 3, price: 49.85, client: "Andrew" };
var reserva4 = { id: 4, price: 37.10, client: "John" };
var reservas = [reserva1, reserva2, reserva3, reserva4];
//Ejemplo de bucle:
var total = 0;
for (i = 0; i < reservas.length; i++) {
    total += reservas[i].price;
}
//console.log(total)
// total: 172.95

// let total = 0;


// for of
// for (reserva of reservas) {
//     total = total + reserva.price; //es igual a  total += reservas[i].price
// }

// console.log(total);


// for in
// var reserva1 = { id: 1, price: 24.50, client: "Caroline" };

// for (propiedad in reserva1) {
//     console.log(propiedad + ": " + reserva1[propiedad]);
// }

// var array = ["hola", "adios", "bye"];
// for (propiedad in array) {
//     console.log(propiedad + ": " + array[propiedad]);
// }

// while
var ciudades = ["Bali", "Roma", "Tokio", "Montevideo"];

var i = 0;

while (i < ciudades.length) {
    console.log("Estamos visitando " + ciudades[i]);
    i++;
}

// do while se ejecuta la primera iteración y luegocompruebo la condición
var reserva1 = { id: 1, price: 24.50, client: "Caroline" };
var reserva2 = { id: 2, price: 61.50, client: "Liam" };
var reserva3 = { id: 3, price: 49.85, client: "Andrew" };
var reserva4 = { id: 4, price: 37.10, client: "John" };
var reservas = [reserva1, reserva2, reserva3, reserva4];
//Ejemplo de bucle:
var total = 0;
var i = 0;
do {
    total += reservas[i].price;
    i++;
} while (i < reservas.length);