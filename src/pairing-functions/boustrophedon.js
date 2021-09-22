const pair = (...array_of_numbers) => {
    if (array_of_numbers.length < 2) return console.log("array_of_numbers.length < 2.");
    for (var number of array_of_numbers) {
        if (number < 0 || !Number.isInteger(number)) return console.log("number < 0 || !Number.isInteger(number)");
    }

    let x = array_of_numbers.shift() + 1;
    let y = array_of_numbers.shift() + 1;
    let result;

    (x < y) ? result = (y - 1) ** 2 + y - (y - x) * (-1) ** (y - 1)
        : result = (x - 1) ** 2 + x + (x - y) * (-1) ** (x - 1);

    if (array_of_numbers.length === 0) return result;
    if (array_of_numbers.length >= 1) {
        array_of_numbers.unshift(result);
        return pair(...array_of_numbers);
    }
}

const unpair = (number, length = 2) => {
    if (number < 0 || !Number.isInteger(number)) return console.log("number < 0 || !Number.isInteger(number)");

    let x;
    let y;

    const t = Math.floor(Math.sqrt(number - 1)) + 1;
    x = (t % 2) * Math.min(t, number - (t - 1) ** 2) + ((t + 1) % 2) * Math.min(t, t ** 2 - number + 1) - 1;
    y = (t % 2) * Math.min(t, t ** 2 - number + 1) + ((t + 1) % 2) * Math.min(t, number - (t - 1) ** 2) - 1;

    if (length > 2) return [unpair(x, length - 1), y];
    if (length === 2) return [x, y];
}


export {pair, unpair};