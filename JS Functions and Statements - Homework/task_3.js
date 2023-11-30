function charactersInRange(char1, char2) {
    let firstChar = char1.charCodeAt()
    let secondChar = char2.charCodeAt()
    let result = ''

    if (firstChar < secondChar) {
        for (let i = firstChar + 1; i < secondChar; i++) {
            result += String.fromCodePoint(i) + ' '
        }
    } else {
        for (let i = secondChar + 1; i < firstChar; i++) {
            result += String.fromCodePoint(i) + ' '
        }
    }

    console.log(result)
}