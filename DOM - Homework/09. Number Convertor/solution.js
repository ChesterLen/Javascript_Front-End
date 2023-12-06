function solve() {
    document.querySelector('button').addEventListener('click', onClick);

    let number = document.getElementById('input');
    let output = document.getElementById('result')
    let select = document.querySelectorAll('select');
    let selectToSelect = select[select.length - 1];
    let selectTo = document.querySelectorAll('#selectMenuTo')[0];
    let selectTo2 = document.createElement('option');
    selectTo.appendChild(selectTo2);
    let option1 = document.querySelectorAll('#selectMenuTo option')[0];
    let option2 = document.querySelectorAll('#selectMenuTo option')[1];
    option1.text = 'Binary'
    option2.text = 'Hexadecimal'

    function onClick() {
        number = Number(number.value)
        if (selectTo.value === 'Hexadecimal') {
            output.value = number.toString(16)
        } else {
            output.value = number.toString(2)
        }
    }
}