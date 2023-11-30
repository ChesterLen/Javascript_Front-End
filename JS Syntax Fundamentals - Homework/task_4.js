function print_and_sum(start, end) {

    let total_sum = 0
    let numbers = ''

    for (let i = start; i < end + 1; i++) {
        numbers += i + ' '
        total_sum += i
    }

    console.log(numbers)
    console.log(`Sum: ${total_sum}`)
}