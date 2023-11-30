function city(object) {

    for (let element of Object.entries(object)) {
        console.log(`${element[0]} -> ${element[1]}`)
    }
}