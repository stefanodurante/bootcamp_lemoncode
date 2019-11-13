console.log("Bienvenido al Playground!");



// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [{
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

var getCartList = (product) => {
    var div = document.createElement("div");
    div.setAttribute("class", "c-shopping-item");

    var span = document.createElement("span");
    span.innerText = product.description;

    var input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("value", product.units);
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock);
    input.addEventListener("change", event => product.units = event.target.value);
    var cart = document.getElementById("shopping-cart");

    cart.appendChild(div).appendChild(span).appendChild(input);
    cart.appendChild(div).appendChild(input);
}


var subTotal = (product) => {
    let subTotalCarrito = 0;
    for (var item of products) {
        subTotalCarrito += item.price * item.units;
    }
    return parseFloat(subTotalCarrito).toFixed(2)
}

var totalIva = (product) => {
    let iva = 0;
    for (var item of products) {
        if (item.tax === REGULAR_TYPE) {
            iva += item.price * item.units * 21 / 100;
        } else if (item.tax === LOWER_TYPE) {
            iva += item.price * item.units * 4 / 100;
        } else {
            iva += 0;
        }
    }
    return parseFloat(iva).toFixed(2)
}
var totalCart = () => {
    /// corregir esto
    return Number(subTotal()) + Number(totalIva());
}

var handleCalculateCart = () => {
    event.preventDefault();

    document.getElementById("subtotal").innerText = subTotal(product);
    document.getElementById("totalIva").innerText = totalIva();
    document.getElementById("totalCart").innerText = totalCart();

    console.log("El evento funciona");
    console.log(products)
};


var showProducts = productList => {
    //var container = document.getElementById("shopping-cart");
    for (product of products) {
        getCartList(product);
    }
}

showProducts(products);
// Events

document.getElementById("button-submit").addEventListener("click", handleCalculateCart);