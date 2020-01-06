// hasId
// Implementa una función llamada hasId que admita como parámetro un objeto y
// compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true / false ).
// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).

const user = {
    id: 1234,
    name: "Stefano",
    age: 36
};

const hasId = ({ id }) => id ? true : false;

console.log(hasId(user));


// head
// Implementa una función llamada head tal que, dado un array como entrada, 
// devuelva el primer elemento. TIP: No utilices el corchete ([]) para acceder a la posición 0.

const myArr = ["a", "b", "c", "d"];
//const [first] = myArr
const head = ([first]) => first;
console.log(head(myArr));

// tail
// Implementa una función llamada tail tal que, dado un array como entrada, 
// devuelva un nuevo array con  todos los elementos menos el primero.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const myTailArr = ["uno", 2, true, 3];
const tail = ([, ...restItems]) => restItems;

console.log(tail(myTailArr));
console.log(myTailArr);


// swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, dado un array como 
//entrada, devuelva un nuevo array donde el primer elemento ha sido colocado 
//en la última posición.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const mySwapArr = [1, 2, 3, 4];

const swapFirstToLast = ([first, , , last]) => [last, , , first];
console.log(swapFirstToLast(mySwapArr))