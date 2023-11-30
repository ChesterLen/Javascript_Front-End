function count_string_occurrences(text, word) {
    let counter = 0
    let text_array = text.split(' ')

    for (let i of text_array) {
        if (i == word) {
            counter += 1
        }
    }

    console.log(counter)

}