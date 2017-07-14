//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.
// The given number must be converted into roman numerals. The roman numerals would have to be in upper-case

function convertsmallnum(num) {
    var romanNumber = "";
    var romanNumeral = {
        0: '',
        1: 'I',
        5: 'V',
        9: 'IX',
        10: 'X',
        50: 'L',
        90: 'XC',
        100: 'C',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    // if number is already in the lookup table return property value without any processing
    if (romanNumeral[num] != undefined)
        return romanNumeral[num];
    // need to do hard work here :)
    if (num >= 1000) {
        t = num / 1000;
        var tmp = "";
        for (i = 0; i < t; i++) {
            tmp = tmp + romanNumeral[1000];
        }
        return tmp;
    }
    if (num > 500) {
        t = num / 500;
        var tmp = "";
        return romanNumeral[num]
    }
}

function convertToRoman(num) {
    var n = num.toString();
    var array = [];
    var romanNumber = "";
    for (var i = 0; i < n.length; i++) {
        var temp = n.charAt(i) * Math.pow(10, n.length - i - 1);
        array.push(temp);
    }
    for (var i = 0; i < array.length; i++) {
        romanNumber = romanNumber + convertsmallnum(array[i]);
    }
    console.log(romanNumber);
    return romanNumber;
}

convertToRoman(3900);
// convertToRoman(36);
// convertToRoman(3999);
//console.log();