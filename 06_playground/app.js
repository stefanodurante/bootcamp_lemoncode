console.log("Validación form2");

// 1. full name validation
// - El nombre no esté vacío, no null, nu undefined
// - longitud minima de 5 caracteres
var isValidFullName = fullname => fullname && (fullname.length >= 5);

// - obtener el nombre
// - validar el nombre
// - Si es invalido => aplicamos regla CSS para error sobre el input
// - Si es válido => no aplicamos regla CSS (la quitamos)
var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);

    if (valid) {
        fullNameField.classList.remove("error");
    } else {
        fullNameField.classList.add("error");
    }

    return valid;
}

// 2. bithdate validation
// - Year. Mayor que 1850. Menor o igual al año actual.
// - Month. Entre 1 y 12.
// - Días. Máximo 30 o 31 según el mes, con la excepción de febrero que será 28 o 29 según bisiesto o no

var isValidYear = year => year && year >= 1850 && year <= new Date().getFullYear();
var isValidMonth = month => month && (month >= 1) && (month <= 12);
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0); /* miro si es año bisiesto */
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return day > 0 && day <= monthLength[month - 1];
}

// string "01/08/1993"---como lo rompo?
var splitDateInParts = date => {
    var parts = date.split("/"); // parts => [01, 08, 1993]
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}

var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date); //[day, month, year]
    var validYear = isValidYear(parts[2]);
    var validMonth = isValidMonth(parts[1]);
    var validDay = isValidDay(parts[0], parts[1], parts[2]);
    return validYear && validMonth && validDay;
}

var validateBirthDate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);

    if (valid) {
        birthdayField.classList.remove("error");
    } else {
        birthdayField.classList.add("error");
    }

    return valid;
}

// 3. DNI validation
// - comprobar si el numero es correcto
// - comprobar que la letra es correcta

var DNI_LETERS = "TRWAGMYFPDDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETERS[dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    // 12345678z
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);

    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}

var validateDNI = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);

    if (valid) {
        dniField.classList.remove("error");
    } else {
        dniField.classList.add("error");
    }

    return valid;
};

// 4. Mobile validation

var isValidMobile = mobile => {
    return (
        mobile &&
        parseInt(mobile) && // NaN ---> false
        mobile.length === 9 &&
        (mobile.starsWith(9) || mobile.starsWith(8) || mobile.starsWith(7) ||  mobile.starsWith(6))
    );
}

var validateMobile = () => {
    var mobileField = document.getElementById("mobile");
    var valid = isValidMobile(mobileField.value);

    if (valid) {
        mobileField.classList.remove("error");
    } else {
        mobileField.classList.add("error");
    }

    return valid;
}


// 5. General Algorithm
var validateForm = (event) => {
    event.preventDefault(); /* impide al navegador hacer la acción de default */

    validateFullName();
    /*
     * validateFullName
     */
    validateBirthDate();
    /*
     * validateBirthDate
     */

    validateDNI();
    /*
     * validateDNI
     */
    validateMobile();
    /*
     * validatePhone
     */
    console.log("El evento funciona");
}

// Events
document.getElementById("register").addEventListener("submit", validateForm);



// 1. Full name validation
// - El nombre no esté vacio, que no sea null, que no sea undefined, 
// - Debe tener una longitud mínima de 5 caracteres.
var isValidFullName = fullname => fullname && (fullname.length >= 5);


// - Obtener el nombre que ha introducido el usuario
// - Validar ese nombre
// - Si es invalido => Aplicamos regla CSS para error sobre el input.
// - Si es válido => No aplicamos regla CSS (la eliminamos).
var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);

    if (valid) {
        fullNameField.classList.remove("error");
    } else {
        fullNameField.classList.add("error");
    }

    return valid;
}


// 2. Birthdate validation
// - Year. Mayor que 1850. Menor o igual que el año actual.
// - Month. Entre 1 y 12.
// - Dias. Maximo 30 o 31 según el mes, con la excepcion de febrero que será 28 o 29 (según año bisiesto).
var isValidYear = year => year && (year >= 1850) && (year <= new Date().getFullYear());
var isValidMonth = month => month && (month >= 1) && (month <= 12);
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day > 0 && day <= monthLength[month - 1];
}

var splitDateInParts = date => {
    var parts = date.split("/"); // parts => ["01", "08", "1993"]
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}

var isValidDate = date => {
    if (date.lenght < 8 || date.lenght > 10) return false;
    var parts = splitDateInParts(date); // [day, month, year]
    var validYear = isValidYear(parts[2]);
    var validMonth = isValidMonth(parts[1]);
    var validDay = isValidDay(parts[0], parts[1], parts[2]);

    return validYear && validMonth && validDay;
}

var validateBirthdate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);

    if (valid) {
        birthdayField.classList.remove("error");
    } else {
        birthdayField.classList.add("error");
    }

    return valid;
}


// 3. DNI Validation
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS[dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}

var validateDNI = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);

    if (valid) {
        dniField.classList.remove("error");
    } else {
        dniField.classList.add("error");
    }

    return valid;
};


// 4. Mobile Validation
var isValidMobile = mobile => {
    return (
        mobile && typeof mobile === "string" &&
        parseInt(mobile) &&
        mobile.length === 9 &&
        (mobile.startsWith("9") || mobile.startsWith("8") || mobile.startsWith("7") || mobile.startsWith("6"))
    );
}

var validateMobile = () => {
    var mobileField = document.getElementById("mobile");
    var valid = isValidMobile(mobileField.value);

    if (valid) {
        mobileField.classList.remove("error");
    } else {
        mobileField.classList.add("error");
    }

    return valid;
};


// 5. General Algorithm

var validateForm = (event) => {
    event.preventDefault();

    validateFullName();
    validateBirthdate();
    validateDNI();
    validateMobile();
};

// Events
document.getElementById("register").addEventListener("submit", validateForm);