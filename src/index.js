module.exports = function toReadable (number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]
    const ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ['hundred']
    if(number <= 19) {
        return one[number]
    } 
    if (number > 19 && number < 99 && (number).toString()[1] == 0) {
        return ten[(number).toString().slice(0, 1)];
    }
    if (number > 19 && number <= 99 && (number).toString()[1] <= 9) {
        return ten[(number).toString().slice(0, 1)] + ' ' + one[(number).toString().slice(1)];
    }
   

    if (number > 99 && number <= 999 && (number).toString().slice(1,3) == '00') {
        return one[(number).toString()[0]] + ' ' + hundred;
    }
        
    if ((number > 99 && number <= 999 && (number).toString()[1] == '0')) {
        return one[(number).toString()[0]] + ' ' + hundred + ' ' + one[(number).toString()[2]];
    }    
    if ((number > 99 && number <= 999 && (number).toString().slice(1, 3) <= 19 && (number).toString().slice(1, 3) > 9)) {
        return one[(number).toString()[0]] + ' ' + hundred + ' ' + one[(number).toString().slice(1, 3)];
    }
    if (number > 99 && number <= 999 && (number).toString().slice(1, 3) > 19 && (number).toString()[2] == '0') {
        return one[(number).toString()[0]] + ' ' + hundred + ' ' + ten[(number).toString()[1]];
    }
    if (number > 99 && number <= 999 && (number).toString().slice(1, 3) > 19) {
        return one[(number).toString()[0]] + ' ' + hundred + ' ' + ten[(number).toString()[1]] + ' ' + one[(number).toString()[2]];
    }
}

//do it before 119


// if (number > 99 && number <= 999 && (number).toString().slice(2) === 0) {
//     return one[(number).toString().slice(0, 1)] + ' ' + hundred + ' ' + ten[(number).toString().slice(1, 2)];
// }
// if (number > 99 && number <= 999 && (number).toString().slice(1, 2) <= 9 && (number).toString().slice(1, 2) != 0) {
//     return one[(number).toString().slice(0, 1)] + ' ' + hundred + ' ' + ten[(number).toString().slice(1, 2)] + ' ' + one[(number).toString().slice(2)];
// }
// if (number > 99 && number <= 999 && (number).toString().slice(1) == 00) {
//     return one[(number).toString().slice(0, 1)] + ' ' + hundred;
// }
// if (number > 99 && number <= 999 && (number).toString().slice(1, 2) <= 9) {
//     return one[(number).toString().slice(0, 1)] + ' ' + hundred + ' ' + one[(number).toString().slice(0, 1)];
// }