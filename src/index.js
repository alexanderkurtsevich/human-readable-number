module.exports = function toReadable(number) {
    let numberArray = number.toString().split('');
    let first = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
    }

    if (first[number] !== undefined) {
        return first[number]
    }

    else if (numberArray.length == 2) {
        return first[number - numberArray[1]] + " " + first[numberArray[1]]
    }

    else if (numberArray.length == 3) {

        if (number % 100 == 0) {
            return first[numberArray[0]] + " " + "hundred"
        }

        if (numberArray[1] == 0) {
            return first[numberArray[0]] + " " + "hundred" + " " + first[numberArray[2]]
        }

        let lastNumbers = (first[numberArray.slice(1, 3).join('')] !== undefined) ? 
        first[numberArray.slice(1, 3).join('')] : 
        first[numberArray.slice(1, 3).join('') - numberArray[2]] + " " + first[numberArray[2]];
        
        return first[numberArray[0]] + " " + "hundred" + " " + lastNumbers;
    }



}
