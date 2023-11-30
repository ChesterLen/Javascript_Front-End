function factorialDivision(num1, num2) {
    let numsArray = [num1, num2]
    let factorials = []
    let final_result = 0

    function num_factorial(number) {
            let result = number;
            if (number === 0 || number === 1)
                return 1;
            while (number > 1) {
                number--;
                result *= number;
            }
            return result;
        }

    for (let i = 0; i < numsArray.length; i++) {
        let factorial = num_factorial(numsArray[i])
        factorials.push(factorial)
    }

    final_result = factorials[0] / factorials[factorials.length - 1]

    console.log(final_result.toFixed(2))
}