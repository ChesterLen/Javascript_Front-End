function search() {
    let searchTextHTML = document.getElementById('searchText').value;
    let listHTML = document.querySelectorAll('#towns li');
    let resultHTML = document.getElementById('result')
    let counter = 0;

    for (let i = 0; i < listHTML.length; i++) {
        if (listHTML[i].textContent.includes(searchTextHTML)) {
            listHTML[i].style.fontWeight = 'bold';
            listHTML[i].style.textDecoration = 'underline';
            counter += 1;
        }
    }

    resultHTML.textContent = `${String(counter)} matches found`
}