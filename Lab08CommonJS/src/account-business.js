const StyleBusiness = require("./style-business");

function getClientAccountsElement(accounts) {
    const ul = document.createElement("ul");
    for (let account of accounts) {
        ul.append(getAccountElement(account));
    }
    return ul;
}

function getAccountElement(account) {
    const li = document.createElement("li");

    li.style = StyleBusiness.getNodeStyle(account);

    li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
    return li;
}

module.exports = { getClientAccountsElement, getAccountElement };