const pair = (...array_of_numbers) => {
    if (array_of_numbers.length < 2) return console.log("array_of_numbers.length < 2.");
    for (var number of array_of_numbers) {
        if (number < 0 || !Number.isInteger(number)) return console.log("number < 0 || !Number.isInteger(number)");
    }

    let x = array_of_numbers.shift();
    let y = array_of_numbers.shift();
    let result;

    (x !== Math.max(x, y)) ? result = y ** 2 + x
        : result = x ** 2 + x + y;

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

    if (number - Math.floor(Math.sqrt(number)) ** 2 < Math.floor(Math.sqrt(number))) {
        x = number - Math.floor(Math.sqrt(number)) ** 2;
        y = Math.floor(Math.sqrt(number));
    } else {
        x = Math.floor(Math.sqrt(number));
        y = number - Math.floor(Math.sqrt(number)) ** 2 - Math.floor(Math.sqrt(number));
    }

    if (length > 2) return [unpair(x, length - 1), y];
    if (length === 2) return [x, y];
}

export {pair, unpair};