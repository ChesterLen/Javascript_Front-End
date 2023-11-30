function cooking_by_numbers(number, op1, op2, op3, op4, op5) {
    let num = Number(number)
    let commands = [op1, op2, op3, op4, op5]

    for (let i = 0; i <= commands.length - 1; i++) {
        if (commands[i] == 'chop') {
            num /= 2
        } else if (commands[i] == 'dice') {
            num = Math.sqrt(num)
        } else if (commands[i] == 'spice') {
            num += 1
        } else if (commands[i] == 'bake') {
            num *= 3
        } else if (commands[i] == 'fillet') {
            num -= num * 0.2
        }
        console.log(num)
    }
}