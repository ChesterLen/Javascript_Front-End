function dictionary(input) {
    const dict = {};
    for (let element of input) {
        let obj = JSON.parse(element);
        let key = Object.keys(obj)[0];
        dict[key] = Object.values(obj)[0];
    }

    let result = [];

    for (let i in dict) {
        result.push({[i]: dict[i]});
    }

    result.sort((a, b) => {
        if (Object.keys(a)[0] > Object.keys(b)[0]) {
            return 1;
        }
        if (Object.keys(a)[0] < Object.keys(b)[0]) {
            return -1;
        }
        if (Object.keys(a)[0] === Object.keys(b)[0]) {
            return 0
        }
    });

    for (let word of result) {
        let key = Object.keys(word).join();
        let value = word[key];

        console.log(`Term: ${key} => Definition: ${value}`);

    }
}