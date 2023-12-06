function sumTable() {
    const tableRows = document.querySelectorAll('tr > td')
    const tableRowsArray = Array.from(tableRows).slice(0, Array.from(tableRows).length - 2)
    const sum = document.getElementById('sum')

    let totalPrice = 0

    for (let i = 0; i < tableRowsArray.length; i++) {
        if (i % 2 !== 0) {
            totalPrice += Number(tableRowsArray[i].textContent)
        }
    }

    sum.textContent = String(totalPrice)
}