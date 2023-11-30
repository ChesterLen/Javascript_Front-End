function passwordValidator(password) {
    let regexChecker = /^[A-Za-z0-9][A-Za-z0-9]*[A-Za-z0-9]$/gm
    let match = password.match(regexChecker)
    let counter = 0
    let notValid = false

    for (let i of password) {
        if (!isNaN(i)) {
            counter += 1
        }
    }

    if (String(password).length < 6 || String(password).length > 10) {
        console.log("Password must be between 6 and 10 characters")
        notValid = true
    }
    if (!match) {
        console.log("Password must consist only of letters and digits")
        notValid = true
    }
    if (counter < 2) {
        console.log("Password must have at least 2 digits")
        notValid = true
    }

    if (!notValid) {
        console.log("Password is valid")
    }
}