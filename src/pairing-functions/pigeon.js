const pair = (...array_of_numbers) => {
    if (array_of_numbers.length < 2)
        return console.log("array_of_numbers.length < 2.");
    for (var number of array_of_numbers) {
        if (number < 0 || !Number.isInteger(number))
            return console.log("number < 0 || !Number.isInteger(number)");
    }

    let x = array_of_numbers.shift();
    let y = array_of_numbers.shift();

    x = x.toString(2).split("").reverse().join("");
    y = y.toString(2).split("").reverse().join("");

    let result = "";
    for (let i = 0; i < Math.max(x.length, y.length); i++) {
        result += y[i] + x[i];
    }
    result = result.replace(/undefined/g, "0");
    result = parseInt(result.split("").reverse().join(""), 2);

    if (array_of_numbers.length === 0) return result;
    if (array_of_numbers.length >= 1) {
        array_of_numbers.unshift(result);
        return pair(...array_of_numbers);
    }
};

const unpair = (number, length = 2) => {
    if (number < 0 || !Number.isInteger(number))
        return console.log("number < 0 || !Number.isInteger(number)");

    const result = (number - 1).toString(2);

    let x = '';
    let y = '';
    for (let i = 0; i < result.length; i++) {
        if (i % 2 !== 0) {
            x += result[i];
        } else {
            y += result[i];
        }
    }
    x = parseInt(x, 2);
    y = parseInt(y, 2);

    if (length > 2) return [unpair(x, length - 1), y];
    if (length === 2) return [x, y];
};


export {pair, unpair};