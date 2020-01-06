import styles from "./styles.css";
import * as Utils from "./utils.js"
import * as DataBusiness from "./data-business"


DataBusiness.getCharacters().then(data => {

    document.getElementById("root").innerText = "";
    const characters = data;
    const nodes = [];

    for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        nodes.push(node);
        node.onclick = function() {
            Utils.showCharacter(character)
        }
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
});