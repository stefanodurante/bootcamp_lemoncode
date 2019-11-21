// Dibujando con Bucles
// Tsodos los ejercicios que se proponen 
// a continuación tienen la misma dinámica: 
// se resuelven con bucles.
// Son ejercicios cortitos, pero habrá que darle al coco. 
// En muchos de ellos conviene pensar en filas y columnas.

// En cada ejercicio dibujaremos una figura por consola, usando uno o varios carácteres normales.
// Además, la figura podrá ser pintada con distintos tamaños.
// Crea una función para cada ejercicio que admita el tamaño de la figura como argumento. 
// Llama a este argumento n.
// También es recomendable que la función admita como argumento(s) el carácter(es) 
// usados para dibujar la figura.

//Cuadrado
console.log("Dibujar con Bucles");
console.log("");

// var square = (char, n) => {
//     for (var i = 0; i < n; i++) {
//         console.log(i, char.repeat(n));
//     }
// }
// square("*", 3);


function square(char, n) {
    var row = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            row += char;
        }
        row += "\n";
    }
    return row;
}
console.log(square("*", 5));

console.log("\n-------------------------------\n\n")
var squareWithBorder = (n, charBorder, charInner) => {
    var row = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            (i === 1 ||  i === n || j === 1 || j === n) ? (row += charBorder) : (row += charInner);
        }
        row += "\n";
    }
    return row;
}

console.log(squareWithBorder(4, "B", "*"));


console.log("\n-------------------------------\n\n")

//Cuadrado Diagonal Left-Right

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    var row = "";
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < n; j++) {
            if (i === j) {
                row += charDiagonal
            }
            if (j > i - 1) {
                row += charUp
            } else {
                row += charDown
            }
        }
        row += "\n";
    }
    return row;
}
console.log(squareDiagonalLR(5, "\\", "A", "B"));

console.log("\n-------------------------------\n\n")

// Cuadrado Diagonal Right-Left
var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    var row = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (i === j) {
                row += charDiagonal
            }
            if (j > i - 1) {
                row += charUp
            } else {
                row += charDown
            }
        }
        row += "\n";
    }
    return row;
}
console.log(squareDiagonalRL(3, "\/", "A", "B"));