function towns(array) {
    let object = {}

    for (let element of array) {
        object[element.split(' | ')[0]] = element.split(' | ').slice(1, element.length)
    }

    for (let element of Object.entries(object)) {
        let town = element[0]
        let latitude = Number(element[1][0]).toFixed(2)
        let longitude = Number(element[1][1]).toFixed(2)
        console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`)
    }
}