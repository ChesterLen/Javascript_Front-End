function piccolo(array) {
    let parkingLot = [];

    for (const element of array) {
        let [direction, number] = element.split(', ');

        if (direction === 'IN' && !parkingLot.includes(number)) {
            parkingLot.push(number);
        } else if (direction === 'OUT' && parkingLot.includes(number)) {
            let index = parkingLot.indexOf(number);
            parkingLot.splice(index, 1);
        }
    }

    if (parkingLot.length > 0) {
        let sortedParking = parkingLot.sort((a, b) => a.localeCompare(b))

        console.log(sortedParking.join('\n'))

    } else {
        console.log('Parking Lot is Empty')
    }
}