function array_rotation(array, rotations) {

    for (let i = 0; i <= rotations - 1; i++) {
        array.push(Number(array.splice(0, 1)))
    }

    console.log(array.join(' '))
}