function reversed_chars(a, b, c) {

    let string = a + ' ' + b + ' ' + c
    let reversed_string = ''

    for (let i = string.length - 1; i >= 0; i--) {
        reversed_string += string[i]
    }

    console.log(reversed_string)
}