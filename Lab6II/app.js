console.log("Lab 6 - Algoritmos II");


var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,x'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "Hoy ha costado mucho sacar el código. Gracias por las ayudas Lissette y Javer. Buenas noche a tod@s";
// var text = "y:z yq ,:g!qe: ph,y: gq,qf r' ,óeu(:. (fq,uqg s:f 'qg qzheqg 'uggr!!r z iqjrf. whraqg a:,yr q !:e@g"
<<<<<<< HEAD
var text = "q erg,qagqf) whra tuaer)";
=======

var userText = () => document.getElementById("user-message").value;
var userEncriptedTex = () => document.getElementById("encrypted-message").value;

var encriptedText = () => document.getElementById("encrypted-message").value = transformMessage(userText(),plainAlphabet, encryptedAlphabet);
// esta es al revés
var decriptedText = () => document.getElementById("user-message").value = transformMessage(userEncriptedTex(), encryptedAlphabet, plainAlphabet);

>>>>>>> 036f952f9dac1d56cd1efa1c6cb425931bf3c6bc
var searchIndex = (alphabet, letter) => {
    // Bucle
    for (i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i
    }
    return -1;
}


var transformLetter = (letter, origin, destiny) => {
    var letterIndex = searchIndex(origin, letter);
    var transformedLetter = destiny[letterIndex];
    return (letterIndex === -1) ? letter : transformedLetter;
}


var transformMessage = (message, origin, destiny ) => {
    var messageLowerCase = message.toLowerCase();
    var result = "";

    for (var letter of messageLowerCase) {
<<<<<<< HEAD
        result = result + transformLetter(letter, encryptedAlphabet, plainAlphabet);
=======
        result = result + transformLetter(letter, origin, destiny);
>>>>>>> 036f952f9dac1d56cd1efa1c6cb425931bf3c6bc
    }

    return result;
}

var getEncryption = () => {
    encriptedText();
}

var getDecryption = () => {
    decriptedText();
}

document.getElementById("encrypt").addEventListener("click", getEncryption);
document.getElementById("decrypt").addEventListener("click", getDecryption);



/////// Generador aleatorio


const randomPick = (n, min, max) => {

}
  
randomPick(10, 1, 100);
