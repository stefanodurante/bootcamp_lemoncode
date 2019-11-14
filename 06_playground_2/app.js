console.log("Módulo 6 - Algoritmos II");

/* Algoritmos que se repiten de forma extensa */

/* Algoritmos de generación aleatoria */
console.log("Algoritmos de generación aleatoria");
// Random() genera numeros decimales aleatorios entre [0, 1) --el 1 no se incluye.
Math.random();
// No se utiliza para criptografía
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


// Generación binaria (la posibilidades son 50%)
console.log("Generación binaria");
// 0                   0.5                   1
// [--------------------|--------------------)

// probabilidad de que el resultado sea menor de 0.5 --> 50%
// Probabibilidad de que el resultado sea mayor que 0.5 --> 50%

var getRandom = (a, b) => (Math.random() < 0.5) ? a : b;

// puedo aplicar un redondeo con Math.round
var getRandom = (a, b) => Math.round(Math.random()) ? a : b; // devuelve un booleano

console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));

// Ejemplo de Math.round
console.log(Math.round(0.3));
console.log(Math.round(0.50001));
console.log("*************************************");
// Generación con multiple opciónes
console.log("Generación con multiple opciónes");
// CASO SENCILLO
// Eligir aletoriamente entre 0 y 9
// Calclar rango => rango = max - min = 1 => me da 10 números
var random = Math.random() * 10;
// Consigo esto:
// 0    1    2    3    4    5    6    7    8    9   10
// [----|----|----|----|----|----|----|----|----|----)
//   1    2    etc
var getRandomNumber = () => Math.floor(Math.random() * 10); // siempre me lo redondea hacía el intero que está a la izquierda
//Math.ceil();// hace el contrario
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());

// CASO GENERAL
// tenemos que escoger entre 50 y 100

var range = 100 - 50 + 1; // 51 números a escoger

Math.floor(Math.random() * range); //Caso peor 0.00, Caso mejor 50.9999
// pero si sumo 50 tendré de 50 a 100
Math.floor(Math.random() * range) + 50;

// la formula general es:

//var range = max - min + 1;
//Math.floor(math.random() * range) + min;

/******************************************** */
// el Dado trucado (hacemos más grande un sector)


console.log("*************************************");
console.log("*************************************");
console.log("*************************************");
/* Algoritmos de busqueda */
console.log("Algoritmos de busqueda");
// Buscar valor dentro de un Array

// Busqueda secuencial o lineal
console.log("Busqueda secuencial o lineal");
var array = [1, 3, 4, 5, 2, 9, 6, 7, 8];

var search = (array, target) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

console.log(search(array, 2));
// se puede hacer con indexOf
console.log(array.indexOf(5)); // es quivalente a la funcion search

// var myString = "casa"; // string = array like
// console.log(myString.indexOf("s"));

// Busquda binária --> solo cuando el array está ordenado
// vamos a buscar el punto medio de nuestor array
// nos preguntamos si lo que buscamos es mayor o meor del punto medio
// si el target es menor busco entre el target y 0
// si no busco entre target y array.length -1


//[12, 14, 123, 25, 30, 36, 43, 62, 67, 72, 88]

var binaySearch = (array, target) => {
    var min = 0;
    var max = array.length - 1;

    while (min <= max) {
        var mid = Math.floor((max - min) / 2) + min;

        if (array[mid] === target) return mid;
        else if (array[mid] < target) {
            min = mid + 1;
        } else max = mid - 1;
    }
    return -1
}

var sortedArray = [2, 5, 7, 11, 23, 54, 67, 80, 120, 144];
console.log(binaySearch(sortedArray, 120))
console.log("*************************************");
console.log("*************************************");
console.log("*************************************");

/* Algoritmos de ordención */
console.log("Algoritmos de ordención ");

// técnica 1 -- Ordenación por burbuja
console.log("Técnica 1 -- Ordenación por burbuja");

var myArray = [3, 5, 1, 8, 7, 2];

// antex hacemos la funcion de swap
var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

// console.log(myArray);
// var bubbleSort = array => {
//     var size = array.length;
//     for (var index = 1; index < array.length; index++) {
//         console.log("Iteración: " + index)
//         for (var left = 0; left < size - index; left++) {
//             var right = left + 1
//             if (array[left] > array[right]) {
//                 swap(array, left, right)
//                 console.log("Array: ", array);
//             }
//         }
//     }
//     return array;
// }
// console.log(bubbleSort(myArray));

// Técnica 2
//  Selection Sort u ordenación por selección
// Reutilizamo sla función swap
console.log("Técnica 2 -- Selection Sort ");

// var selectionSort = array => {
//     var size = array.length;
//     var minIndex;

//     for (var sIndex = 0; sIndex < size; sIndex++) {
//         console.log("Interación: " + sIndex);
//         // s => selección
//         minIndex = sIndex;

//         // bucle interno 

//         for (var index = sIndex + 1; index < size; index++) {

//             if (array[index] < array[minIndex]) {
//                 minIndex = index;
//                 console.log("Array: ", array);
//             }

//         }
//         swap(array, minIndex, sIndex);
//     }
//     return array;
// }

// console.log(selectionSort(myArray));


/// Algoritmo inserción sort
console.log("Técnica 3 -- inserción sort ");
var insertionSort = array => {
    var size = array.length;
    var sortedListLastIndex = 0;

    for (var item = 1; item < size; item++) {
        var current = array[item];
        var currentIndex = item;
        var swapIndex = sortedListLastIndex;

        while (current < array[swapIndex] && swapIndex >= 0) {
            swap(array, currentIndex--, swapIndex--);
        }

        console.log(myArray);
        sortedListLastIndex++;
    }
    return array;
}
console.log(insertionSort(myArray));