function loadingBar(number) {
    let loadingSign = '%'
    let notLoadedSign = '.'
    let notLoadedSignCount = (100 - number) / 10

    if (number < 100) {
        console.log(`${number}% [${loadingSign.repeat(number / 10)}${notLoadedSign.repeat(notLoadedSignCount)}]`)
        console.log('Still loading...')
    } else {
        console.log('100% Complete!')
    }
}