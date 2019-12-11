// 1- Callbacks
// const myCallback = function() {
//     alert("hola después de 3 segundos");
// }

// setTimeout(myCallback, 3000)

const myCallback = () => {
    alert("hola después de 3 segundos");
};

//setTimeout(myCallback, 3000)

// 2- Promises

const myPromise = new Promise((resolve, reject) => {
    const currentDay = new Date().getDate();

    if (currentDay == 1) {
        reject("Mal")
    } else if (currentDay < 15) {
        alert("Promesa 1 finalizada")
        setTimeout(function() { resolve("Hola") }, 3000)

    } else {
        resolve("Hola2")
    }
    setTimeout(function() {
        reject("Error dentro de la promesa");
    }, 3000);
});

myPromise
    .then(result => {
        const mySecondPromise = new Promise(resolve => {
            setTimeout(function() {
                resolve("LA promesa se ha devuelto correctamente: " + result);
            }, 2000)
        })
        return mySecondPromise;
    })
    .then(result2 => {
        alert(result2);
    })
    .catch(error => {
        alert("Se ha producido un error: " + error);
    });