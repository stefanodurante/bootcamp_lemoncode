// IP 123.3.12.12

// validación IP
// const pattern = /^(\d{1,3}\.){3}\d{1,3}$/;


// const values = ['127.0.0.1', 'A.0.0.1', '-1.52.45.233', '10.98.199.1', 'AA 123.22.22.0 NN']; // SI NO NO SI NO


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })

//Validación DNI 
// DNI

// \w [a-zA-Z0-9_]
// DNI

// \w [a-zA-Z0-9_]


// const pattern = /^\d{2}\.?\d{3}\.?\d{3}(-|\s|_)?[A-Za-z]$/;


// const values = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q']; // SI


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.test(value));

// })
//Metodo exec
// DNI

// \w [a-zA-Z0-9_]


// const pattern = /^(\d{2}\.?\d{3}\.?\d{3})(-|\s|_)?([A-Za-z])$/;


// const values = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q']; // SI


// values.forEach(value => {

//     console.log('Regex matchs with ' + value + '? ->', pattern.exec(value));

// })

/// metodo exec
// DNI

// \w [a-zA-Z0-9_]


const pattern = /^\d{2}\.?\d{3}\.?\d{3}(-|\s|_)?([A-Za-z])$/;


const values = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q']; // SI


// pattern.exec(value)

// value.match(pattern)

values.forEach(value => {

    console.log('Regex matchs with ' + value + '? ->', value.match(pattern));

})