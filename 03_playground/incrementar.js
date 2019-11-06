const booking1 = {
    count: 3,
    price: 127.95
};
const booking2 = {
    count: 5,
    price: 127.95
};


/* ampliar reserva */
let ampliarReserva = booking1.count++;
console.log(ampliarReserva, booking1.count);

let ampliarReserva2 = ++booking1.count;
console.log(ampliarReserva2, booking1.count);

// Comparar las 2 reservas y mostramos la de mayor numero de noche
/*
const mayorNumeroNoches = booking1.count > booking2.count ? booking1 : booking2;

console.log(mayorNumeroNoches);*/