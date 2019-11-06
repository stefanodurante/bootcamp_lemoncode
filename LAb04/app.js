var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;
var getSurname2 = () => document.getElementById("input-surname2").value;

var getFullName = () => getName() + ' ' + getSurname1() + ' ' + getSurname2();

var submitName = () => {
    document.getElementById("full-name").innerText = getFullName();
}

// Por último, registramos la función submitName() bajo el evento    
// 'click' del botón submit
document.getElementById("button-submit").addEventListener("click", submitName); 

// step 6
// Registramos la función getFullName bajo el evento 'keyup'
// de cada input.
document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);


/* module 4 laboratorio */
let operating1 = () => document.getElementById("operating-1").value;
let operating2 = () => document.getElementById("operating-2").value;

const errorMessage = () => document.getElementById('result').value = "Hay que poner 2 operandos";

let add = () => document.getElementById('result').value = Number(operating1()) + Number(operating2());
let sus = () => document.getElementById('result').value = Number(operating1()) - Number(operating2());
let mul = () => document.getElementById('result').value = Number(operating1()) * Number(operating2());
let div = () => document.getElementById('result').value = Number(operating1()) / Number(operating2());

function submitAdd () {
    if (Number(operating1()) == 0 || Number(operating2()) == 0  ) {
        return errorMessage();
    }
    add();
}
function submitSus () {
    if (Number(operating1()) == 0 || Number(operating2()) == 0  ) {
        return errorMessage();
    }
    sus();
}
function submitMult () {
    if (Number(operating1()) == 0 || Number(operating2()) == 0  ) {
        return errorMessage();
    }
    mul();
}
function submitDiv () {
    if (Number(operating1()) == 0 || Number(operating2()) == 0  ) {
        return errorMessage();
    }
    div();
}

document.getElementById("button-sum").addEventListener("click", submitAdd); 
document.getElementById("button-sus").addEventListener("click", submitSus);
document.getElementById("button-mul").addEventListener("click", submitMult); 
document.getElementById("button-div").addEventListener("click", submitDiv);
