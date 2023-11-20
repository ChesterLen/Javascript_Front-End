function ticket_price(day, age) {

    let ticket_price = 0

    if (day == 'Weekday') {
        if (0 <= age && age <= 18) {
            ticket_price = 12
        } else if (18 < age && age <= 64) {
            ticket_price = 18
        } else if (64 < age && age <= 122) {
            ticket_price = 12
        }

    } else if (day == 'Weekend') {
        if (0 <= age && age <= 18) {
            ticket_price = 15
        } else if (18 < age && age <= 64) {
            ticket_price = 20
        } else if (64 < age && age <= 122) {
            ticket_price = 15
        }
    } else if (day == 'Holiday') {
        if (0 <= age && age <= 18) {
            ticket_price = 5
        } else if (18 < age && age <= 64) {
            ticket_price = 12
        } else if (64 < age && age <= 122) {
            ticket_price = 10
        }
    }

    if (ticket_price) {
        console.log(`${ticket_price}$`)
    } else if (age <= 0) {
        console.log('Error!')
    }
}

ticket_price(
    'Holiday', -15
)