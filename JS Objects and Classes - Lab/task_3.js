function convertToObject(string) {
    let string2 = JSON.parse(string)

    for (let element of Object.entries(string2)) {
        console.log(`${element[0]}: ${element[1]}`)
    }
}