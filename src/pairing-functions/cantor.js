const pair = (...array_of_numbers) => {
    if (array_of_numbers.length < 2)
        return console.log("array_of_numbers.length < 2.");
    for (var number of array_of_numbers) {
        if (number < 0 || !Number.isInteger(number))
            return console.log("number < 0 || !Number.isInteger(number)");
    }

    let x = array_of_numbers.shift();
    let y = array_of_numbers.shift();

    const result = 0.5 * (x + y) * (x + y + 1) + y;

    if (array_of_numbers.length === 0) return result;
    if (array_of_numbers.length >= 1) {
        array_of_numbers.unshift(result);
        return pair(...array_of_numbers);
    }
};

const unpair = (number, length = 2) => {
    if (number < 0 || !Number.isInteger(number))
        return console.log("number < 0 || !Number.isInteger(number)");

    const w = Math.floor(0.5 * (Math.sqrt(8 * number + 1) - 1));
    const t = 0.5 * (w ** 2 + w);
    const x = w - (number - t);
    const y = number - t;

    if (length > 2) return [unpair(x, length - 1), y];
    if (length === 2) return [x, y];
};

export {pair, unpair};