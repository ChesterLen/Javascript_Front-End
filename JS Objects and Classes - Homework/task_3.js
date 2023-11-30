function storeProvision(array1, array2) {
    let object = {}

    for (let i = 0; i < array1.length; i++) {
        object[array1[i]] = Number(array1[i+=1])
    }

    for (let i = 0; i < array2.length; i++) {
        if (object.hasOwnProperty(array2[i])) {
            object[array2[i]] += Number(array2[i+=1])
        } else {
            object[array2[i]] = Number(array2[i+=1])
        }
    }

    for (let element in object) {
        console.log(`${element} -> ${object[element]}`)
    }
}