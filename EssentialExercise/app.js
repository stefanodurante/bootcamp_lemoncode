var printMessage = () => {
    console.log("Hola mundo");
}
printMessage();

var printGreatings = name => {
    console.log("Hola " + name);
}

printGreatings("Stefano");

var printToUpper = str => {
    console.log(str.toUpperCase());
}
printToUpper ("Hola Mundo")

var printToLower = str => {
    console.log(str.toLowerCase());
}
printToLower ("Hola Mundo")

var sum = (a, b) => {
    console.log(parseInt(a) + parseInt(b));
}
sum(3,8)

var concatString = (str1, str2,str3)=> {
    console.log("El string final es: " + str1 + " " + str2 + " " + str3);
}

concatString("como", "mola" , "eso");

person = {
    name:"Stefano",
    age:"42"
}

var addPropertyToObject = (data) => {
    person.id=data;
    console.log(person);
}
addPropertyToObject("null");

// bloque 2
