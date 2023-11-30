function meetings(array) {
    let arraySplit = []
    let arrayObject = {}

    for (let element of array) {
        element = element.split(' ')
        arraySplit.push(element)

        if (arrayObject[element[0]]) {
            console.log(`Conflict on ${element[0]}!`)
        } else {
            arrayObject[element[0]] = element[1]
            console.log(`Scheduled for ${element[0]}`)
        }
    }

    for (let element of Object.entries(arrayObject)) {
        console.log(`${element[0]} -> ${element[1]}`)
    }
}