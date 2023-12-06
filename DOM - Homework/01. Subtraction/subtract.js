function subtract() {
    let numbers = document.querySelectorAll("input");
    let firstNumber = numbers[0];
    let secondNumber = numbers[1];
    let htmlResult = document.getElementById('result');
    let result;

    result = Number(firstNumber.value) - Number(secondNumber.value)

    htmlResult.textContent = String(result)
}