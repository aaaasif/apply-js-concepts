function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);

// the right way to get Leap Year

function leapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    else {
        return false;
    }
    
}

const year = 2100;
const isMyYeaarLeapYear = leapYear(year);
console.log('Is my year leap year?', isMyYeaarLeapYear)
