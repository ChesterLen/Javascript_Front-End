function format_grade(grade) {
    let result = ''
    let formattedGrade = 0

    if (grade < 3) {
        result = 'Fail'
        formattedGrade = Math.floor(grade)
    } else if (grade >= 3 && grade < 3.50) {
        result = 'Poor'
    } else if (grade >= 3.50 && grade < 4.50) {
        result = 'Good'
    } else if (grade >= 4.50 && grade < 5.50) {
        result = 'Very good'
    } else {
        result = 'Excellent'
    }

    if (formattedGrade) {
        console.log(`${result} (${formattedGrade})`)
    } else {
        console.log(`${result} (${grade.toFixed(2)})`)
    }
}