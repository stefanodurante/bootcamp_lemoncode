var day = [
    {
        day: "Lunes",
        subject: "Matemáticas",
    },
    {
        day: "Martes",
        subject: "Lengua",
    },
    {
        day: "Miércoles",
        subject: "Física",
    },
    {
        day: "Jueves",
        subject: "Química",
    },
    {
        day: "Viernes",
        subject: "Gimnasia",
    },
]

/* ejercicio 1;*/
var day = day[4].day;

switch (day) {
    case "Lunes": console.log("Matemáticas"); break;
    case "Martes": console.log("Lengua"); break;
    case "Miércoles": console.log("Física"); break;
    case "Jueves": console.log("Química"); break;
    case "Viernes": console.log("Gimnasia"); break;
    default: console.log("No es un día de la semana válido"); break;
}

/* ejercicio 2; */

var hora = 5;

if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
}
if (hora >= 13 && hora <= 20) {
    console.log("Buenas tardes");
}
if (hora <= 5 || hora >= 21 && hora < 24) {
    console.log("Buenas noches");
}
if (hora > 24) {
    console.log("NO es un tramo valido");
}
/* se puede pasar a switch? */


/* ejercicio 3 */
var diaSemana = 3;

switch (diaSemana) {
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("No es un día de la semana válido"); break;
}
