function toggle() {
    let extraText = document.getElementById('extra');
    let buttonHTML = document.querySelector('.button');

    if (buttonHTML.textContent === 'More') {
        extraText.style.display = 'block'
        buttonHTML.textContent = 'Less'
    } else {
        extraText.style.display = 'none'
        buttonHTML.textContent = 'More'
    }
}