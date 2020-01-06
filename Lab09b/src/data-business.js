import axios from "axios";

function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            const promise = new Promise(resolve => {
                setTimeout(function() {
                    resolve(response.data);
                }, 1000);
            });
            return promise;
        });
}

export { getCharacters };