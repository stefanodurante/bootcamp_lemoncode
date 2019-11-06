const booking1 = {
    count: 5,
    price: 127.95
};

const booking2 = {
    count: 4,
    price: 127.95
};

let reservaConDescuento = 0;

if (booking1.count * booking1.price > 500) {
    reservaConDescuento++;
}

if (booking2.count * booking2.price > 500) {
    reservaConDescuento++;
}

console.log("Hay " + reservaConDescuento + " con descuento.");