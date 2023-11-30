function convertToJSON(name, lastName, hairColor) {
    let obj = {name, lastName, hairColor}
    let objToString = JSON.stringify(obj)

    console.log(objToString)
}