const booking = {
    count: 4,
    price: 127.95
};

let total = booking.count * booking.price;

const discount = total > 500 ? total * 0.2 : 0;

console.log("Total de la reserva sin descuento: ", total.toFixed());

if (total > 500 && discount > 0) {
    let totalWithDiscount = total - discount;
    console.log("Descuento: ", discount.toFixed());
    console.log("Total con decuento: ", totalWithDiscount.toFixed());
}