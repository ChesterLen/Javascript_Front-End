function songs(array) {
    let typeOfList = array[array.length - 1]

    if (typeOfList === 'all') {
        for (let element of array.slice(1, array.length - 1)) {
            let elementSplit = element.split('_')
            console.log(elementSplit.slice(1, elementSplit.length - 1).join(' '))
        }
    }

    for (let element of array.slice(1, array.length - 1)) {
        let elementSplit = element.split('_')
        if (elementSplit[0] === typeOfList) {
            console.log(elementSplit.slice(1, elementSplit.length - 1).join(' '))
        }
    }
}