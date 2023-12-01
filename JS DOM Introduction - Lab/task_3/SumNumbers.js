function calc() {
    const firstNumber = document.getElementById('num1');
    const firstNumberValue = firstNumber.value;
    const firstNumberAsNum = Number(firstNumberValue);
    // const firstNumber = Number(document.getElementById('num1').value);

    const secondNumber = document.getElementById('num2');
    const secondNumberValue = secondNumber.value;
    const secondNumberAsNum = Number(secondNumberValue);
    // const secondNumber = Number(document.getElementById('num2').value);

    const sum = firstNumberAsNum + secondNumberAsNum;
    document.getElementById('sum').value = sum;
}