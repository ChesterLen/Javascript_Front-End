function sum_digits(number) {
    let sum = 0
    let number_as_string = String(number)


    for (let i = 0; i < number_as_string.length; i++) {
        sum += Number(number_as_string[i])
    }

    console.log(sum)
}