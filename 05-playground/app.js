const bookings = [{
        id: 1,
        price: 45.3,
        count: 3,
        room: "standard",
        prepaid: false,
        succeeded: true
    },
    {
        id: 2,
        price: 92.45,
        count: 4,
        room: "superior",
        prepaid: false,
        succeeded: true
    },
    {
        id: 3,
        price: 63.5,
        count: 7,
        room: "standard",
        prepaid: true,
        succeeded: false
    },
    {
        id: 3,
        price: 37.5,
        count: 2,
        room: "standard",
        prepaid: true,
        succeeded: true
    },
    {
        id: 5,
        price: 87.9,
        count: 5,
        room: "superior",
        prepaid: true,
        succeeded: false
    }
];

/*
function exiteError() {
    let succeeded = true;

    for (reserva of bookings) {
        succeeded = succeeded && reserva.succeeded;
    }

    return !succeeded;
}

for (reserva of bookings) {
    imprimir(reserva);
}
*/

/* ejercicio 2 */
// imprimimos solo las que tienen exitos

/*for (reserva of bookings) {
    if (reserva.succeeded) imprimir(reserva);
}*/

//o con while

//let i = 0;

// while (i < bookings.length) {
//     const reserva = bookings[i];

//     if (reserva.succeeded) {
//         imprimir(reserva);
//     }

//     i++;
// }


// bucle lista reservas pagadas


// for (reserva of bookings) {
//     console.log("hols");
//     if (reserva.prepaid == true) {
//         imprimir(reserva);
//     }
// }

// calcular el total de precios 

// let total = 0;
// for (reserva of bookings) {
//     total = +reserva.price * reserva.count;
// }

// console.log("Total: " + total)

// for (reserva of bookings) {
//     reserva.price = reserva.price * 0.5;
//     console.log(reserva.price);
// }

// prepaid true succeded false
/*for (reserva of bookings) {

    if (reserva.prepaid && !reserva.succeeded) {
        imprimir(reserva);
    }
}*/

let repetido = false;
for (i = 0; i < bookings.length; i++) {
    const reserva1 = bookings[i];
    // id 1

    // vamos a verificar que no hay otro id i;
    for (x = 0; x < bookings.length; x++) {
        if (x != i) {
            const reserva2 = bookings[x];
            repetido = repetido || reserva1.id === reserva2.id;
        }

    }
}
console.log("Hay identificadores repetido: " + repetido);