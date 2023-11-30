function modern_times_of_hash_tag(text_to_process) {
    let regex = /#[A-Za-z]+/gm;
    let matches = text_to_process.match(regex)

    for (let iterator of matches) {
        console.log(iterator.replace('#', ''))
    }
}