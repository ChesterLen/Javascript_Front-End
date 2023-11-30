function simpleCalculator(num1, num2, operator) {
    const operations = {
        multiply: (num1, num2) => num1 * num2,
        divide: (num1, num2) => num1 / num2,
        add: (num1, num2) => num1 + num2,
        subtract: (num1, num2) => num1 - num2,
    };

    const operatorFunction = operations[operator];
    const result = operatorFunction(num1, num2)
    console.log(result)
}