function reverse_array(n, array) {

    let sliced_array = array.slice(0, n)
    let reversed_array = ''

    for (let i=sliced_array.length - 1; i >= 0; i--) {
        reversed_array += sliced_array[i] + ' '
    }

    console.log(reversed_array)
}