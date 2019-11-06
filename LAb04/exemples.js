/* 
Función --> 
bloque de código reutilizable
que realiza una tarea concreta 
*/
// var | let / const
/*
var name1 = "Javier";
console.log("Hola! Me llamo" + name1);

var name2 = "Antonio";
console.log("Hola! Me llamo" + name2);

var name3 = "Alba";
console.log("Hola! Me llamo" + name3);

var name4 = "Stefano";
console.log("Hola! Me llamo" + name4);
*/

/*function sayName(name) {
    console.log("Hola! Me llamo" + name);
}
console.log("Javier");
console.log("Stefano");
console.log("Alba");
console.log("Antonio");*/

/**
 * KISS - keep is simple stupid
 * DRY - Don't repeat yourself
 */

// Declaración de funciones

// declarar
//var name;

// asignar
//name = "Juan";

// declarar + asignar
//var name = "Juan"

// Declaración de la función sayHello
/*function sayHello() {
    console.log("Hola Mundo!");
}

function greetsomeone() {
    console.log("¡Buenos días Antonio!")
}

function sumNumbers() {
    var result = 3 + 2;
    console.log("El resultado es: ", result)
}*/

// FUNCTION EXPRESSION function expression
/* var sayHello = function() {
    console.log("Hola Mundo!");
}*/

// Ejecuto la función
//sayHello();

// ARROW FUNCTION (fat arrow, lambda)
// var sayHello = () => {
//     console.log("Hola Mundo!");
// }

// var greetSomeone = () => {
//     console.log("¡Buenos días Antonio!")
// }

// sayHello();
// greetSomeone();

// PARAMETROS DE ENTRADA
// var greetSomeone = (greeting, name) => {
//     console.log("¡" + greeting + " querido " + name + "!")
// }
// greetSomeone("Buenos días", "Miguel");
// greetSomeone("Buenas noches", "Javi");

// SALIDA DE UNA FUNCIÓN O RETORNO

// var sum = (numberA, numberB) => {
//     var result = numberA + numberB;
//     return result;
// }

// console.log(sum(5, 2));

// LA COMPACTAMO
// var sum = (numberA, numberB) => {
//     return numberA + numberB;
// };

// console.log(sum(3, 2));

// AMBITO DE UNA FUNCION
// var myName = "Antonio"

// function greetSomeone(greeting, name) {
//     // var myName = "Antonio" el console.log(myNAme) no fncionaría
//     console.log("¡Buenas noches querido " + myName + "!")
// }
// greetSomeone();
// console.log(myName);

// ANIDANDO FUNCIONE
// var greetSomeone = (greeting, name) => {
//     console.log("¡" + greeting + " querida " + name + "!")
// }

// function startDay(name) {
//     greetSomeone("Buenos días", name);
//     console.log("¿Qué tal se encuentra hoy?");
// }

// startDay("Gema")

// METODOS VS FUNCIONES

// var person = {
//     name: "Javier",
//     age: 36,
//     saySomething: () => {
//             console.log("Soy el profe de hoy");
//         } // esto es un metodo
// };

// person.saySomething();

// SINTAXIS ABREViADA
// var sayHello = () => {
//     console.log("Hola Mundo!");
// }
//var sayHello = () => console.log("Hola Mundo!");

// var sum = (a, b) => {
//     var result = a + b;
//     return result;
// }
// var sum = (a, b) => a + b;

// console.log(sum(5, 6));

// CUIDADO - para retornar un objeto hay utilizar () ya que si no no se enterpretarían bien los {}
// var ceatePerson = (name, age) => ({ name, age });
// console.log(ceatePerson("Javi", 36))

// EVENTOS --> AÑADEN INTERACCIÓN

// event handler
// event listener

/*
var handleButtonClick = () => alert("Button clicked!");
var handleHeaderClick = () => alert("Header clicked!");

var handleInputChange = (event) => {
        console.log(event.target.value);
    }
    // Ahora regstramos la función
document.getElementById("my-button").addEventListener("click", handleButtonClick);
document.getElementById("main-header").addEventListener("click", handleHeaderClick);
document.getElementById("my-input").addEventListener("change", handleInputChange);
*/

// CALCULO PESO IDEAL

// var altura = 1.75;
// var peso = 78;
// var sexo = "hombre";
// formula peso ideal:
// altrua en cm -150 * 0.75|0.6 * 50;

// Formula peso ideal:
// Altura en cm - 150 * 0.75|0.6 + 50;
/*
function calcularPesoIdeal(sexo, altura) {
    var factor = sexo === "hombre" ? 0.75 : 0.60;
    return (altura * 100 - 150) * factor + 50;
}

function calcularExcesoDePeso(pesoActual, pesoIdeal) {
    return pesoActual - pesoIdeal;
}

function notificaPesoIdeal(pesoIdeal) {
    return "Tu peso ideal corresponde a " + pesoIdeal + " kilos";
}

function notificaEstadoSobrepeso(excesoPeso) {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + " kilos";
    } else if (excesoPeso <= -1) {
        return "Come un poco más! Debes recuperar " + (excesoPeso * -1) + " kilos";
    } else {
        return "Wow! Estás ideal de la muerte!";
    }
}

function informePesoIdeal(altura, peso, sexo) {
    var pesoIdeal = calcularPesoIdeal(sexo, altura);
    var excesoPeso = calcularExcesoDePeso(peso, pesoIdeal);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(excesoPeso));
}

informePesoIdeal(1.7, 73, "hombre");
*/

/* Aun mas compacto */
// Formula peso ideal:
// Altura en cm - 150 * 0.75|0.6 + 50;
var calcularPesoIdeal = (altura, sexo) => (altura * 100 - 150) * (sexo === "hombre" ? 0.75 : 0.60) + 50;
var calcularExcesoDePeso = (pesoActual, pesoIdeal) => pesoActual - pesoIdeal;
var notificaPesoIdeal = pesoIdeal => "Tu peso ideal corresponde a " + pesoIdeal + " kilos";

var notificaEstadoSobrepeso = (excesoPeso) => {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + " kilos";
    } else if (excesoPeso <= -1) {
        return "Come un poco más! Debes recuperar " + (excesoPeso * -1) + " kilos";
    } else {
        return "Wow! Estás ideal de la muerte!";
    }
}

var informePesoIdeal = (person) => {
    var pesoIdeal = calcularPesoIdeal(person.altura, person.sexo);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(calcularExcesoDePeso(person.peso, pesoIdeal)));
}

// Datos de entrada, de server o user input.
var javi = {
    altura: 1.74,
    peso: 79,
    sexo: "hombre",
}

informePesoIdeal(javi);