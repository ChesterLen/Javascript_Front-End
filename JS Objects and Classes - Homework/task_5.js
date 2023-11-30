function inventory(array) {
    let heroes = []

    for (let heroData of array) {
        let [name, level, items] = heroData.split(' / ')
        let hero = {name, level: Number(level), items: items}
        heroes.push(hero)
    }

    heroes.sort((a, b) => a.level - b.level)

    heroes.forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`))
}