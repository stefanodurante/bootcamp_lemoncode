//document.getElementById("full-name").innerText = "Stefano"
var getName = () => document.getElementById("input-name").value;
var getSurName1 = () => document.getElementById("input-surname1").value;
var getSurName2 = () => document.getElementById("input-surname2").value;
var getFullName = () => getName() + " " + getSurName1() + " " + getSurName2();
var submitName = () => document.getElementById("full-name").innerText = getFullName();

// registramos la función como event listener

document.getElementById("button-submit").addEventListener("click", submitName);

/* */
document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);

/* module 4 laboratorio */
let operating1 = () => parseFloat(document.getElementById("operating-1").value);
let operating2 = () => parseFloat(document.getElementById("operating-2").value);
let op1 = operating1()
let op2 = operating2()
const errorMessage = () => document.getElementById('result').value = "Hay que poner 2 operandos";

let add = () => document.getElementById('result').value = isNaN(operating1()) || isNaN(operating2()) ? errorMessage() : operating1() + operating2();
let sus = () => document.getElementById('result').value = isNaN(operating1()) || isNaN(operating2()) ? errorMessage() : operating1() - operating2();
let mul = () => document.getElementById('result').value = isNaN(operating1()) || isNaN(operating2()) ? errorMessage() : operating1() * operating2();
let div = () => document.getElementById('result').value = isNaN(operating1()) || isNaN(operating2()) ? errorMessage() : operating1() / operating2();

document.getElementById("button-sum").addEventListener("click", add);
document.getElementById("button-sus").addEventListener("click", sus);
document.getElementById("button-mul").addEventListener("click", mul);
document.getElementById("button-div").addEventListener("click", div);