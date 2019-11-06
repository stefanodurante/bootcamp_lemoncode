var ciudades = ["Bali", "Roma", "Berlín"]
console.log(ciudades);

ciudades.push("Rio")
console.log(ciudades);

ciudades.unshift("Milano");
console.log(ciudades);

var ultimoElemeto = ciudades.pop();
console.log(ciudades);
console.log(ultimoElemeto);

var primerElemeto = ciudades.shift();
console.log(ciudades);
console.log(primerElemeto)

// index "Roma"
var index = ciudades.indexOf("Roma");
console.log(index);

// Elimino n elementos a partr de un index 
var elementoEliminado = ciudades.splice(1, 1);
console.log(ciudades)
console.log(elementoEliminado);

var copia = ciudades.slice();
console.log(ciudades === copia); // devuelve false ya que es una estructura compleja igual que los objeto

var copia = ciudades; // devuelve true
console.log(ciudades === copia);

// accedemos a una posicion del array 
var ciudades = ["Bali", "Roma", "Berlín"]
console.log(ciudades[0]);
console.log(ciudades[1]);
console.log(ciudades[2]);

ciudades[0] = "Malaga";
console.log(ciudades);

// cuanots indices tiene un array
// lenght
console.log(ciudades.length);