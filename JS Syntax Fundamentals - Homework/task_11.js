function road_radar(speed, area) {
    let limit = 0
    let status = ''
    let isSpeedingUp = false
    let difference = 0

    switch (area) {
        case 'motorway':
            limit = 130
            if (speed > limit) {
                isSpeedingUp = true
                difference = Math.abs(speed - limit)
            }
            break;

        case 'interstate':
            limit = 90
            if (speed > limit) {
                isSpeedingUp = true
                difference = Math.abs(speed - limit)
            }
            break;

        case 'city':
            limit = 50
            if (speed > limit) {
                isSpeedingUp = true
                difference = Math.abs(speed - limit)
            }
            break;

        case 'residential':
            limit = 20
            if (speed > limit) {
                isSpeedingUp = true
                difference = Math.abs(speed - limit)
            }
            break;
    }

    if (difference <= 20) {
        status = 'speeding'
    } else if (difference <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    if (!isSpeedingUp) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}