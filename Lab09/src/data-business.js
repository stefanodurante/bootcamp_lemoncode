import axios from "axios";

function getCharacters() {
    return axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            const BadPromise = new Promise(resolve => {
                setTimeout(function() {
                    resolve(response.data);
                }, 1000);
            });
            return BadPromise;
        });
}

export { getCharacters };