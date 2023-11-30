function fruit(fruit_type, weight, price_per_kilo) {
    let kilos = weight / 1000
    let price = kilos * price_per_kilo
    console.log(`I need $${price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit_type}.`)
}