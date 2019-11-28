console.log('Validar un IBAN')

const patternBank = /^((ES)\d{22})|((ES)\d{2}\s?(\d{4}\s?){4}\d{4})$/;
const patternBank2 = /^(ES)\d{2}/;
const valuesBank = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890', ];

console.log('************ Case 1 and 2')
valuesBank.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', patternBank.test(value));
})

console.log('************ Case 3')
valuesBank.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', patternBank2.exec(value));
})


// Matrícula

console.log('Matrícula');
const patternMatr = /^\d{4}\s?(-|\s|_)?[A-Z]{3}$/;
const patternDigit = /^(\d{4})/;
const patternChar = /[A-Z]{3}$/;

const valueCars = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
valueCars.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', patternMatr.test(value));
})
valueCars.forEach(value => {
    console.log('Regex matchs with? ->', patternDigit.exec(value), patternChar.exec(value));
})


// Tarjeta de crédito
console.log('Tarjeta de credito');

const patternCredit = /^[5][12345]\d{2}(-|\s|_)?\d{5}(-|\s|_)?\d{3}(-|\s|_)?\d{4}$/;

const valuesCredit = ["5299 64000 000 0000", "5299-64000-000-0000", "5299640000000000"];

valuesCredit.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', patternCredit.test(value));
})