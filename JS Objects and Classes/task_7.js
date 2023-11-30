function addressBook(array) {
    let addressList = {}

    for (const person of array) {
        const [name, address] = person.split(':')
        addressList[name] = address
    }

    const peopleNames = Object.entries(addressList)
    const sortedPeople = peopleNames.sort()

    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`)
    }
}