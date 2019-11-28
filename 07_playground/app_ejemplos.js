console.log("Módulo 7 Expresiones Regulares -Introducción")

// 1- ejemplo1: const patternOld = /Imagen./;
// 2- ejemplo2: const pattern = newRegExp('imagen.');
// Cumliría con :
// imagenA
// imagen0
// imagenB

// 2- ejemplo3:
// const myValueOk = "imagenA";
// const myValueNotOk = "holaimagen0";

// const pattern = /imagen./;

// const resultOk = pattern.test(myValueNotOk);
// console.log(resultOk);

// test es un metodo de RegExp

//4 - para evitar falsos positivos
// const myValueOk = "imagenA";
// const myValueNotOk = "holaimagen0";

// const pattern = /^imagen./;

// const resultOk = pattern.test(myValueNotOk);
// console.log(resultOk);

//5 también podemos añadr $

// const myValueOk = "imagenA";
// const myValueNotOk = "holaimagen0";

// const pattern = /^imagen.$/;

// const resultOk = pattern.test(myValueOk);
// console.log(resultOk);

// const resultNotOk = pattern.test(myValueNotOk);
// console.log(resultNotOk);

// Se llaman patrones de posición

// y si quiero chckear el punto?
// const myValueOk = "imagenA.jpg";
// const myValueNotOk = "holaimagen0";

// const pattern = /^imagen.\.jpg$/;

// const resultOk = pattern.test(myValueOk);
// console.log(resultOk);

// const resultNotOk = pattern.test(myValueNotOk);
// console.log(resultNotOk);

// Validar un array
// ejemplo 1
// const pattern = /^Jose/;
// const values = ['Jose Perez Gomez', 'Manuel Lozano', 'Maria Jose perez'];

// values.forEach(value => {
//   console.log('Regex matchs with ' +value +'? ->', pattern.test(value));
// })

// ejemplo 2
// const pattern = /txt$/;

// const values = ['mitexto.txt', 'imagen.jpg', 'imagentxt.jpg'];


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

//***************** */

// con [] comprobamos todos los valores contenidos
// const pattern = /^[1234567890]$/; // para limitarlo a un solo caracter numérico ponemos ^[1234567890]$
// const values = ['1', 'a', 'a'];

// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

// si queremos excluir todos los caracteres usamos
// [^1234567890]

// const pattern = /^...$/;
// const values = ['abc', 'ab', 'a12', 'ab\n'];

// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

// \w\w\w
// \w -> [a-z,A-Z,0-9,_] nos valída este conjunto de caracteres
//

// si pongo W excluyo los caracteres
// \w -> [^a-zA-Z0-9_]

// const pattern = /^\W\W\W$/;


// const values = ['aaa', '123', 'a12', '@#%', '@#'];


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })
//d -> [0-9] solo números
// const pattern = /^\D\D\D$/;
// const values = ['aaa', '123', '012', '@#%', '12'];

// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })


// // solo si no són números
// // \D -> [0-9_¿^*^*]

// const pattern = /^\D\D\D$/;
// const values = ['aaa', '123', '012', '@#%', '12'];

// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

// validando el DNI
// \s -> [ ] (espacio, tabulador, nueva linea)

// \S -> [^ ] NO (espacio, tabulador, nueva linea)

// const pattern = /^\d\d\d\d\d\d\d\d\s[a-zA-Z]$/;


// const values = ['12345678 Q', '12345678 q', '12345678-Q', 'abc45678-Q', 'abc45678 Q'];


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

// patrones de repetición

// {2} {2,5} {2,}
// ? ->{0,1}
// * -> {0,}
// + -> [1,]

// const pattern = /^\d{8}\s[a-zA-Z]$/;


// const values = ['12345678 Q', '12345678 q', '12345678-Q', 'abc45678-Q', 'abc45678 Q'];


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

// const pattern = /^imagen\d*\.jpg$/;


// const values = ['imagen.jpg', 'imagen1.jpg', 'imagen01.jpg', 'imagen_2.jpg', 'imagenA2.jpg'];


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })


// // {2} {2,} {2,4}

// // ? {0,1}

// // * {0,}

// // + {1,}


// const pattern = /^imagen\d+\.jpg$/;


// const values = ['imagen.jpg', 'imagen1.jpg', 'imagen01.jpg', 'imagen_2.jpg', 'imagenA2.jpg'];


// values.forEach(value => {

// console.log('Regex matchs with ' + value +'? ->', pattern.test(value));

// })

// [ac] para letras -> 1 de las 2
// (pre) toda la palabra pre

// | -> (A)|(B) patrón Matriculas
// MA4050AZ

// 0642AFD -> \d{4}[A-Z]{3}


// (A)|(B)


// const pattern = /^([A-Z]{1,2}\d{4}[A-Z]{1,2})|(\d{4}[A-Z]{3})$/;


// const values = ['MA4050AZ', '0642AFD', 'MA4444'];


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })