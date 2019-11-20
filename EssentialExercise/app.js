var printMessage = () => console.log("Hola mundo1");
printMessage();

var printGreatings = name => console.log("Hola " + name);
printGreatings("Stefano");

var printToUpper = str => console.log(str.toUpperCase());
printToUpper("Hola Mundo Upper")

var printToLower = str => console.log(str.toLowerCase());
printToLower("Hola Mundo Lower")

var sum = (a, b) => console.log(parseInt(a) + parseInt(b));
sum(3, 8)

var concatString = (str1, str2, str3) => {
    console.log("El string final es: " + str1 + " " + str2 + " " + str3);
}

concatString("como", "mola", "eso");

person = {
    name: "Stefano",
    age: "42"
}

// var addPropertyToObject = (data) => {
//     person.id = data;
//     console.log(person);
// }
// addPropertyToObject(null);

var addPropertyToObject = (obj) => {
    obj.id = null;

}
addPropertyToObject(person);
console.log(person);


console.log("********************")
    // bloque 2
    //Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .
var isNullOrUndefined = a => (a === undefined || a === null);

console.log(isNullOrUndefined(null))
console.log(isNullOrUndefined("null"))


//Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
var tryPositiveOrNegative = n => n > 0 ? console.log(n + " is positive") : console.log(n + " is negative");

tryPositiveOrNegative(-2);
tryPositiveOrNegative(2);

// Implementa una función que admita un número como parámetro y diga, 
// por consola, si es mayor que 100, menor que 100 o exactamente 100.

var tryHundred = num => {
    switch (true) {
        case (num > 100):
            console.log("Is bigger than 100")
            break;
        case (num < 100):
            console.log("Is little than 100")
            break;
        default:
            console.log("Is 100")
            break;
    }
}

tryHundred(101);

// Implementa una función que admita como parámetro un objeto y 
// devuelva si dicho objeto tiene una propiedad ‘name’ o no.

person = {
    name: 'Stefano',
    age: '42'
}

var getNameInObject = (person) => {
    if (person.name) {
        console.log("La propiedad existe");
    } else {
        console.log("La propiedad no existe");
    }
}
getNameInObject(person);
// refactor 
var nameInObject = obj => {
    if (obj.name) {
        return true;
    }
}
nameInObject(person);
console.log(person.name)


// Implementa una función que admita 2 números como argumento 
// y compruebe si el primero es divisible por el segundo.

var isDivisible = (a, b) => (a % b === 0) ? console.log("Is divisible") : console.log("Is not divisible")

isDivisible(4, 3);

//Implementa una función que admita un string y un número como parámetro, 
//y comprobar que tienen ese número de caracteres.

// var compareStringAndNumber = (str, num) => (str.length === num) ? console.log("Ok") : console.log("Fuck");
// compareStringAndNumber("hola tu", 7);
console.log("**********+")
var compareStringAndNumber = (str, num) => (str.length === num)
console.log(compareStringAndNumber("hola tu", 5));

//Implementa una función que admita un día de la semana en formato número 
//(del 1 al 7) y devuelva que día de la semana es (en texto).

var returnDayWeek = (a) => {
    switch (a) {
        case 1:
            console.log("L");
            break;
        case 2:
            console.log("M");
            break;
        case 3:
            console.log("X");
            break;
        case 4:
            console.log("J");
            break;
        case 5:
            console.log("V");
            break;
        case 6:
            console.log("S");
            break;
        case 7:
            console.log("Dom");
            break;
        default:
            console.log("Not valid");
            break
    }
}
returnDayWeek(8);


var returnMonth = (m) => {
    switch (m) {
        case 1:
            console.log("Gen");
            break;
        case 2:
            console.log("Feb");
            break;
        case 3:
            console.log("Mar");
            break;
        case 4:
            console.log("Abr");
            break;
        case 5:
            console.log("may");
            break;
        case 6:
            console.log("jun");
            break;
        case 7:
            console.log("Jul");
            break;
        case 8:
            console.log("Ago");
            break;
        case 9:
            console.log("Sep");
            break;
        case 10:
            console.log("Oct");
            break;
        case 11:
            console.log("Nov");
            break;
        case 12:
            console.log("Dic");
            break;
        default:
            break;
    }
}

returnMonth(1);

//Implementa una función que admita 2 arrays como argumento, 
//y devuelva el array más largo.
var array1 = ["v", "d", "f", "g", "h"]
var array2 = ["v", "d", "a", "d", "a", "d", "a", "d"]
var compareArraisLength = (ar1, ar2) => (ar1.length > ar2.length) ? ar1 : ar2;

console.log("El array mas largo es: " + compareArraisLength(array1, array2));


//////
var compareFirstElement = (ar1, ar2) => Array.isArray(ar1) && Array.isArray(ar2) && ar1[0] === ar2[0]
    // console.log(ar1.[0]);
    // console.log(ar2.indexOf[0]);

console.log(compareFirstElement(array1, array2));


// Implementa una función que admita un array de números, y devuelva el 
// segundo elemento, y en caso de no existir, devuelva ‘undefined’ .

var array3 = ["a"]
var array4 = ["a", "b"]
var getSecondElement = (arr) => {

    // if (arr[1]) {
    //     console.log("El segundo elemento es: " + arr[1]);
    // } else {
    //     console.log("Solo hay un elemento");
    // }
    // mejor checkear la longitud
    if (arr.length > 1) {
        return arr[1];
    }
}
console.log("********");
console.log(getSecondElement(array3));
console.log(getSecondElement(array4));

//Implementa una función que admita un string como parámetro 
//y devuelva la última letra.

var word = "Hola Mundo"
var getLastLetter = str => {
    return str[str.length - 1];
}
console.log(getLastLetter(word));

//Implementa una función que dado un array, intercambie el primer elemento por el último. 
//Muestra por consola el resultado.


var myArray = ["a", "b", "c"]
var swapFirstAndLastEl = arr => {
    console.log(arr);
    var tempElement = arr[0];
    var lastIndex = arr.lenght - 1;
    arr[0] = arr[lastIndex];
    arr[lastIndex] = tempElement;
    console.log(arr);
}

//swapFirstAndLastEl(myArray);


// bucles
console.log("************* Bucle **************");

var showText = (num, str) => {
    for (var i = 0; i < num; i++) {
        console.log(str);
    }
}
console.log(showText(4, "Hola que tal?"));

//Implementa una función que admita como parámetro un objeto cualquiera 
//y devuelva el número de propiedades que tiene el objeto.
var person = {
    name: "aaa",
    age: "32"
}
var getProperties = obj => {
    for (item in obj) {
        console.log(obj[item]);
    }
}
getProperties(person)

console.log("************* Bucle **************");
// Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.
var repeat = (text, n) => {
    for (var index = 0; index < n; index++) {
        console.log(text);
    }
}
repeat("hola", 3);
// Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.
var numProps = obj => {
    var result = 0;
    for (var prop in obj) {
        result++
        //if (obj.hasOwnProperty(prop)) result++
    }
    return result;
}
console.log(numProps({ name: "Stefano", age: "42" }));
// Implementa una función que admita como parámetro un objeto y 
// muestre por consola los valores de sus propiedades.
var showProps = obj => {
    for (var prop in obj) {
        console.log(obj[prop]);
    }
    return 0;
}
console.log(showProps({ name: "Stefano", age: "42" }));

// Implementa una función que admita un array de números y otro parámetro 
// que sea un número y sume cada elemento del array multiplicado por dicho
// número. Devuelve el resultado.

var multArray = (arr, x) => {
    var result = 0;
    for (var item of arr) {
        result += item * x;
    }
    return result;
}
console.log(multArray([1, 2], 2))

// Implementa una función que dado un string como parámetro y también 
//un carácter, devuelva cuantas veces aparece dicho carácter en el string.

var searchInString = (str, target) => {
    var occurences = 0;

    for (var index = 0; index < str.length; index++) {
        if (str[index] === target) occurences++;
    }

    return occurences;
}

console.log(searchInString("Hola cómo estás", "m"));


// Implementa una función que dado un array de cualquier tipo, 
// lo recorra del primer al último elemento, mostrando cada elemento por 
// consola.

var showArrayItems = arr => {
    for (var item of arr) {
        console.log(item);
    }
}
showArrayItems([1, 2, 3])
    // Implementa una función que dado un array de cualquier tipo, lo recorra desde
    // el último elemento al primero, y lo muestre por consola.
var showArrayItemsReverse = arr => {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
};


// Implementa una función que dado un array de números, 
//y otro parámetro que sea un número, diga cuantos elementos son menores a 
//dicho número, y cuántos no.
var numStats = (arr, num) => {
    var result = [0, 0, 0];

    for (var item of arr) {
        if (item === num) result[1]++;
        else if (item < num) result[0]++;
        else result[2]++;
    }

    return result;
}
console.log(numStats([2, 4, -1, 6], 4))

// Implementa una función que admita 2 arrays como argumento, y diga si algún
// elemento del primero, se encuentra en el segundo.
var anyInCommon = (arr1, arr2) => {
    for (var a of arr1) {
        for (var b of arr2) {
            if (a === b) return true;
        }
    }
    return false;
}

// Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. 
//Muestra los arrays transformados por consola.

var swapArrays = (arr1, arr2) => {
    var i = 0;
    while (i < arr1.length && i < arr2.length) {
        var tmp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = tmp;
        i++;
    }
    console.log(arr1, arr2);
}
swapArrays([1, 2], ["a", "b"])

// Implementa una función que admita un array como argumento, 
//y construya un objeto en el que almacene cada uno de los 
//elementos del array en propiedades indexadas, 
//del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.

var objectFromArray = arr => {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var propName = "prop" + i;
        result[propName] = arr[i];
    }
    return result;
}

console.log(objectFromArray(["hola", "adios"]));

// Implementa una función que admita un array y un número, y empieza a recorrer
// dicho array por el número dado. Muestra por consola cada elemento por el que
// iteres.

var iterateArrayFrom = (arr, startIndex) => {
    if (startIndex < arr.length && startIndex >= 0) {
        for (var i = startIndex; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

iterateArrayFrom(["uno", "dos", "tres"], 1);

// Implementa una función que dado un array de strings y otro parámetro como
// string diga si existe en el array.

var search = (arr, target) => {
    for (var item of arr) {
        if (item === target) return true;
    }
    return false;
}

console.log(search([1, 2], 3));

// Implementa un array que contenga nombres de frutas en Español y otro array
// con las mismas frutas en el mismo orden pero en ingles. Implementa una
// función de traducción, que dada una fruta en español, diga la traducción en
// Inglés, y otra función equivalente que haga la traducción inversa.
var fEn = ["apple", "orange", "banana"];
var fEs = ["manzana", "naranja", "plátano"];

var translateFruitToEs = fruit => fEs[fEn.indexOf(fruit)];

var translateFruitToEn = fruit => fEn[fEs.indexOf(fruit)];

console.log(translateFruitToEn("naranja"));
// Implementa una función que admita un texto por parámetro y lo devuelva por
// consola al revés.
var showReverse = text => {
    var result = "";
    for (var i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    console.log(result);
};

showReverse("orden correcto")
    // Implementa una función que admita un texto por parámetro y lo devuelva en
    // formato ‘EsTe Es Mi TeXtO’.

var funCapitals = text => {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += i % 2 === 0 ? text[i].toUpperCase() : text[i];
    }

    return result;
};


console.log(funCapitals("hola caracola"))


 // Implementa una función que admita como parámetro un array de arrays. La
// función debe recorrer todos los elementos de cada subarray y mostrarlos por
// consola.

var iterateSubItems = arr => {
    for (var subArr of arr) {
        for (var item of subArr) {
            console.log(item);
        }
    }
};

var myArr = [
    [1, 2],
    ["inicio", "fin"], "hola"
];
iterateSubItems(myArr);