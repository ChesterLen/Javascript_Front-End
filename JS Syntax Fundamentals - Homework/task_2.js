function vacation(group_of_people, group_type, day) {

    let total_price = 0
    let price_per_person = 0

    if (group_type == 'Students') {

        if (day == 'Friday') {
            price_per_person = 8.45

        } else if (day == 'Saturday') {
            price_per_person = 9.80
        } else if (day == 'Sunday') {
            price_per_person = 10.46
        }

        total_price = group_of_people * price_per_person

        if (group_of_people >= 30) {
            total_price *= 0.85
        }

    } else if (group_type == 'Business') {

        let free_stay_discount = 0

        if (day == 'Friday') {
            price_per_person = 10.90

        } else if (day == 'Saturday') {
            price_per_person = 15.60

        } else if (day == 'Sunday') {
            price_per_person = 16
        }

        total_price = group_of_people * price_per_person

        if (group_of_people >= 100) {
            free_stay_discount = 10 * price_per_person
            total_price -= free_stay_discount
        }

    } else if (group_type == 'Regular') {

        if (day == 'Friday') {
            price_per_person = 15

        } else if (day == 'Saturday') {
            price_per_person = 20

        } else if (day == 'Sunday') {
            price_per_person = 22.50
        }

        total_price = group_of_people * price_per_person

        if (group_of_people >= 10 && group_of_people <= 20) {
            total_price *= 0.95
        }

    }

    console.log(`Total price: ${total_price.toFixed(2)}`)
}