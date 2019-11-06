/*************
 * 
 * Contorl de flujo
 * 
 * if, for, switch case
 * 
 */

/* if */
/*
const valorIntrodcido = 3;

if (valorIntrodcido > 0 && valorIntrodcido < 10) {
    console.log("bien");
}

console.log("siguiente");
*/

/* ternrio */

//const valorIntroducido = 3;

//const c = valorIntroducido == 5 ? "Ha acertado el valor" : "No has acertado";
// condicion ? se cumple : no se cumple;

/*
console.log(c);
let b;

if (valorIntroducido == 5) {
    b = "Ha acertado el valor";
} else {
    b = "No has acertado";
}

console.log(b);
*/

/* Switch */

const dia = 1;

switch (dia) {
    case 1:
        console.log("L");

    case 2:
        console.log("M");
        break;
    case 3:
        console.log("X");
        break;
}




/***********************
 * 
 * 
 * Operadores
 * 
 */
/*let a = 1;

let b = --a + 1;
console.log(b);*/

/* operadores matematicos */
/*let a = 11;
let b = a % 2;
console.log(b);
*/



/* operadores booleano */
/*
const a = false;
let b = a;
console.log(b);
*/

/* operadores lógico and && */
/*const a = true;
const b = false;
const c = a && b;
console.log(c);*/

/* operadores lógico or || */
/*
const a = true;
const b = false;
const c = a || b;
console.log(c);
*/

/* comparador de igualdad */
//const a = 5;
//const b = "5";

/*const igual = a == b;  nos da true */
/* este nos da false */
//const igual = a === b; 
//console.log(igual);

/* comparador de desigualdad */
//const b != a;


/* comporar estructuras */
/*const user1 = {
    name: "John"
}

const user2 = {
    name: "John"
}

const user3 = user1;
*/
//console.log(user1 === user2); //devuelve false
//console.log(user3 == user1); //devuelve true


/* operadores relacionales -- para comparar variables */

/*const a = 5;

const esMenor = a < 5;

console.log(esMenor);*/


/* operador in -- para ver si una propiedad está dentro un objeto */
/*
const user = {
    name: 'John',
    age: 20
}

const tieneEdad = "age" in user;
*/

/*const user1 = {
    bigote: 'largo',
    pelo: 'rubio',
}

const user2 = {
    pelo: 'rubio',
}

console.log("bigote" in user2);*/


/* operador instanceof --> para ver el tipo de variable */
/*
const myVar = new Number(5);
const myVar2 = 5;
const myString = 'John';
const isNumber = myVar instanceof Number;

console.log('¿Es un numero?' + isNumber);
console.log(myVar);

console.log(myVar2);

console.log(isString);*/