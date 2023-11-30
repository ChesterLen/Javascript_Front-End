function oddAndEvenSum(number) {
    let oddSum = 0
    let evenSum = 0
    let numberAsString = String(number)

    for (let i of numberAsString) {
        if (Number(i) % 2 !== 0) {
            oddSum += Number(i)
        } else {
            evenSum += Number(i)
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}