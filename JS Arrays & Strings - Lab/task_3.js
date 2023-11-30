function even_odd_subtraction(array) {
    let sum_even = 0
    let sum_odd = 0

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 == 0) {
            sum_even += array[i]
        } else {
            sum_odd += array[i]
        }
    }

    console.log(sum_even - sum_odd)
}