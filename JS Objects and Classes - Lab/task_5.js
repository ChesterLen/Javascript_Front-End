function phoneBook(array) {
    let arraySplit = []
    let arrayObject = {}

    for (let element of array) {
        element = element.split(' ')
        arraySplit.push(element)

        if (arrayObject[element[0]]) {
            arrayObject[element[0]] = element[1]
        } else {
            arrayObject[element[0]] = element[1]
        }
    }

    for (let element of Object.entries(arrayObject)) {
        console.log(`${element[0]} -> ${element[1]}`)
    }
}