function every_nth_element(array, number) {
    let array_2 = []
    let arrayLength = array.length

    for (let i = 0; i <= arrayLength - 1; i += number) {
        array_2.push(array[i])
    }

    return array_2
}