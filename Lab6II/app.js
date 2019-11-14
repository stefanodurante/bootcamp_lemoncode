console.log("Lab 6 - Algoritmos II");


var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "Hoy ha costado mucho sacar el código. Gracias por las ayudas Lissette y Javer. Buenas noche a tod@s";
// var text = "y:z yq ,:g!qe: ph,y: gq,qf r' ,óeu(:. (fq,uqg s:f 'qg qzheqg 'uggr!!r z iqjrf. whraqg a:,yr q !:e@g"
var text = "q erg,qagqf) whra tuaer)";
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


var transformMessage = message => {
    var messageLowerCase = message.toLowerCase();
    var result = "";

    for (var letter of messageLowerCase) {
        result = result + transformLetter(letter, encryptedAlphabet, plainAlphabet);
    }

    return result;
}

console.log(transformMessage(text));