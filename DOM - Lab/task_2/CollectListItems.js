function extractText() {
    const liArray = document.getElementsByTagName('li');
    const result = [];

    for (let element of Array.from(liArray)) {
        result.push(element.textContent);
    }

    const textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.join('\n')
}