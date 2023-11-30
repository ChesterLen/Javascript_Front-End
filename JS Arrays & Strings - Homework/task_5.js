function reveal_words(words, sentence) {
    let words_split = words.split(', ')
    let sentence_split = sentence.split(' ')

    for (let word = 0; word < words_split.length; word++) {
        for (let word_2 = 0; word_2 < sentence_split.length; word_2++) {
            if (sentence_split[word_2].includes('*') && sentence_split[word_2].length === words_split[word].length) {
                sentence_split[word_2] = words_split[word]
            }
        }
    }
    console.log(sentence_split.join(' '))
}