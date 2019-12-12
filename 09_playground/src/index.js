// fetch("https://api.github.com/orgs/apple/members").then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         for (item of data) {
//             document.write(item.login + "\n")
//         }
//     }).catch(error => {
//         document.write("Se ha producido un error en la llamada Api")
//     });


// ahora lo hacemos con Axios
import axios from 'axios'

axios.get("https://api.github.com/orgs/apple/members").then(response => {
        return response.data
    })
    .then(data => {
        for (let item of data) {
            document.write(item.login)
        }
    })

// Practica
//https: //codesandbox.io/s/bootcamp-lemoncode-mod8-practica-4-lblkf