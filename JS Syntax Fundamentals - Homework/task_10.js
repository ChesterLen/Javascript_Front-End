function same_numbers(number) {
    let number_as_string = String(number)
    let sum_number = 0
    let same_numbers = false

    for (let i = 0; i <= number_as_string.length - 1; i++) {
        sum_number += Number(number_as_string[i])
    }

    for (let i = 0; i <= number_as_string.length; i++) {
        if (number_as_string[i + 1]) {
            if (number_as_string[i] == number_as_string[i + 1]) {
                same_numbers = true
            } else {
                same_numbers = false
                break
            }
        } else {
            break
        }
    }

    console.log(same_numbers)
    console.log(sum_number)

}

same_numbers(2222222)