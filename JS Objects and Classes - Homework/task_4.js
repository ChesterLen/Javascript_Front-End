function movies(array) {
    let moviesArray = []

    array.forEach((element) => {
        if (element.includes('addMovie')) {
            let movie = element.split('addMovie ')[1]
            moviesArray.push({'name': movie})
        } else if (element.includes('directedBy')) {
            let [movie, director] = element.split(' directedBy ')
            let searching = moviesArray.find((el) => el.name === movie)

            if (searching) {
                searching['director'] = director
            }
        } else if (element.includes('onDate')) {
            let [movie, date] = element.split(' onDate ')
            let searching = moviesArray.find((el) => el.name === movie)

            if (searching) {
                searching['date'] = date
            }
        }
    })

    moviesArray.forEach((movie) => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie))
        }
    })
}