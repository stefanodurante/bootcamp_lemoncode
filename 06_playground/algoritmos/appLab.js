// Requistos
// -Calcular precio total aplicando descuento. según la siguiete regla:
// * Si la cantidad supera 6 unidades, se aplicará un 5% al total del dicho producto.
// * Si el coste total de un producto supera 50€ se aplicará un descuento adicional del 5%

console.log("Módule 6 - Algoritmo I");
console.log("Bienvenido");

var products = [{
        product: "Jamón Ibérico",
        units: 1,
        price: 9.99,
    },
    {
        product: "Queso Tostado",
        units: 6,
        price: 4.45,
    },
    {
        product: "Vino Tinto",
        units: 12,
        price: 2.15,
    },
];

// - A partir de una lista de prod, recorrerla y calcular coste de cada producto:
//      - Para calcular coste de cada producto:
//          * Coste total = units * price
// getDiscount    * Aplicar descuento sobre coste total
//                  - necesitamos => units y coste total del producto.
//                      + si units > 5 => 5%
//                      * si coste total del producto >= 50 => 5%

// aplicamos el descuento
var getDiscount = (units, cost) => {
    var unitDiscount = units > 5 ? 5 : 0;
    var costDiscount = cost >= 50 ? 5 : 0;
    return unitDiscount + costDiscount;
}

// ahora colculamos el coste de cada producto

var productCost = product => {
    var productCost = product.units * product.price;
    var productDiscount = getDiscount(product.units, productCost);
    return productCost * (1 - productDiscount / 100);
}

var totalCost = productList => {
    var totalCost = 0;
    for (var product of productList) {
        totalCost = totalCost + productCost(product);
    }
    return totalCost;
}

console.log(totalCost(products));


// segundo algoritmo

// calcular letras del dni
/*
- La entrada debe ser un número entre 0 y 99999999.
- Debemos calcular el resto de la división entera entre el número introducido y el número 23.
- Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
  `(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)`
- Si lo introducido no es un número deberá indicarse con un `alert` al usuario y volver a preguntar los datos.
- Deberá repetirse el proceso hasta que el usuario pulse "Cancelar".
*/

var number;

do {
    var rest;
    var letter;

    // paso 1 - pedimos datos al user
    number = prompt("Introduce tu número de DNI:");

    // paso 2 - comprobar que es un número
    if (parseInt(number) === Number(number)) {
        console.log("Es un número", number);
        number = Number(number);

        // paso 3: comprobar que es un número válido(0 a 99999999)
        if (number >= 0 && number <= 99999999) {
            console.log("El número es válido", number);

            // paso 4: obtner el resto y la letra correspondiente

            rest = number % 23;

            switch (rest) {
                case 0:
                    letter = "T";
                    break;
                case 1:
                    letter = "R";
                    break;
                case 2:
                    letter = "W";
                    break;
                case 3:
                    letter = "A";
                    break;
                case 4:
                    letter = "G";
                    break;
                case 5:
                    letter = "M";
                    break;
                case 6:
                    letter = "Y";
                    break;
                case 7:
                    letter = "F";
                    break;
                case 8:
                    letter = "P";
                    break;
                case 9:
                    letter = "D";
                    break;
                case 10:
                    letter = "X";
                    break;
                case 11:
                    letter = "B";
                    break;
                case 12:
                    letter = "N";
                    break;
                case 13:
                    letter = "J";
                    break;
                case 14:
                    letter = "Z";
                    break;
                case 15:
                    letter = "S";
                    break;
                case 16:
                    letter = "Q";
                    break;
                case 17:
                    letter = "V";
                    break;
                case 18:
                    letter = "H";
                    break;
                case 19:
                    letter = "L";
                    break;
                case 20:
                    letter = "C";
                    break;
                case 21:
                    letter = "K";
                    break;
                case 22:
                    letter = "E";
                    break;
            }

            // letter = dígito de control
            alert("Número: " + number + ", Letra: " + letter);
            number = null;
        } else {
            console.log("El número de DNI es erróneo");
        }

    } else {
        if (number != null) {
            alert(number + " No es un número");
        }
        alert(number + " No es un número");
    }
} while (number != null);

// Primer requisito: la entrada debe ser un número
// Cuidado! promt devuelve string
// Segunto requisito: numero entre 0 y 999999999999
// tercer requisito: Si lo introducido no es un número deberá indicarse con un alert
// cuarto requisito: