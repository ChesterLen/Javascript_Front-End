function colorize() {
    const rows = document.getElementsByTagName('tr');
    console.log(rows)

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].style.background = 'teal';
        }
    }
}