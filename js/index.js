function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateNumbers(left_edge, right_edge) {
    let numbers = [0, 0, 0];
    while (numbers[0]===0) {
        numbers[0] = getRandomIntInclusive(left_edge, right_edge);
    };
    while (numbers[1]===0) {
        numbers[1] = getRandomIntInclusive(left_edge, right_edge);
    };
    while (numbers[2]===0) {
        numbers[2] = getRandomIntInclusive(left_edge, right_edge);
    };

    return numbers
}

function generateEquation() {
    let left_edge = document.forms['edges']['left-edge'].value;
    let right_edge = document.forms['edges']['right-edge'].value;

    numbers = generateNumbers(left_edge, right_edge);
    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];
    let D = Math.pow(b,2) - 4*a*c;
    while ((!Number.isInteger(Math.sqrt(D))) || (D<0) || (c===0)) {
        numbers = generateNumbers(left_edge, right_edge);
        a = numbers[0];
        b = numbers[1];
        c = numbers[2];
        D = Math.pow(b,2) - 4*a*c;
    };

    if (a===-1) {
        document.getElementById('a-value').innerHTML = '-';
    } else if (a===1) {
        document.getElementById('a-value').innerHTML = ' ';
    } else {
        document.getElementById('a-value').innerHTML = a.toString(10);
    }

    if (b===-1) {
        document.getElementById('b-value').innerHTML = '-';
    } else if (b===1) {
        document.getElementById('b-value').innerHTML = '+';
    } else if (b>0) {
        document.getElementById('b-value').innerHTML = '+' + b.toString(10);
    } else {
        document.getElementById('b-value').innerHTML = b.toString(10);
    }

    if (c>0) {
        document.getElementById('c-value').innerHTML = '+' + c.toString(10);
    } else {
        document.getElementById('c-value').innerHTML = c.toString(10);
    }
};