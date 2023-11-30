function palindromeIntegers(array) {
    for (let i of array) {
        let iSplit = String(i).split('')
        if (iSplit[0] === iSplit[iSplit.length - 1]) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}