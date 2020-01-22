const reservas = [{
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1
    }
];

class getReservasHotel {
    constructor() {
        this._reserva = [];
        this._subtotal = 0;
        this._total = 0;
    }

    hasBreakfast(desayuno) {
        if (desayuno) {
            return 15;
        } else {
            return 0
        }
    }

    calcularRoomType(tipoHabitacion) {
        switch (tipoHabitacion) {
            case "standard":
                return 100;
            case "suite":
                return 150;
        }
        return 1;
    }

    calculateAddPax(pax) {
        if (pax > 1) {
            return 40 * (pax - 1);
        } else {
            return 0
        }
    }

    calculateSubtotal(noches, pax, tipoHabitacion, desayuno) {
        this._subtotal = reservas.reduce(
            (acumulado, { noches, pax, tipoHabitacion, desayuno }) => acumulado + noches * (this.calcularRoomType(tipoHabitacion) + this.calculateAddPax(pax) + this.hasBreakfast(desayuno) * pax),
            0
        );
    }

    calculateTotal(noches, pax, tipoHabitacion, desayuno) {
        const Iva = parseFloat(1.21);
        this._total = reservas.reduce(
            (acumulado, { noches, pax, tipoHabitacion }) => acumulado + noches * (this.calcularRoomType(tipoHabitacion) + this.calculateAddPax(pax) + this.hasBreakfast(desayuno) * pax) * Iva,
            0
        );
    }

    get total() {
        return this._total;
    }
    get subtotal() {
        return this._subtotal;
    }

    set reservas(reservaExterna) {
        this._reserva = reservaExterna;
        this.calculateSubtotal();
        this.calculateTotal();
    }
}

class getParticular extends getReservasHotel {
    constructor() {
        super();
    }
}

class getTourOperator extends getReservasHotel {
    constructor() {
        super();
    }

    calcularRoomType(tipoHabitacion) {
        return 100;
    }

    calculateTotal(noches, pax, tipoHabitacion, desayuno) {
        const Iva = parseFloat(1.21);
        this._total = reservas.reduce(
            (acumulado, { noches, pax, tipoHabitacion }) => acumulado + noches * (this.calcularRoomType(tipoHabitacion) + this.calculateAddPax(pax) + this.hasBreakfast(desayuno) * pax) * Iva * 0.85,
            0
        );
    }
}



const reservasHotel = new getParticular();
const reservasTourHotel = new getTourOperator();

reservasHotel.reservas = reservas;

console.log("Subtotal", reservasHotel.subtotal);
console.log("Total", reservasHotel.total);


reservasTourHotel.reservas = reservas;

console.log("Total tour operator", reservasTourHotel.total);