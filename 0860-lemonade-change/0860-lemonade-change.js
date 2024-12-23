/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            if (five > 0) {
                five--;
                ten++;
            } else {
                return false; // No $5 bill to give change
            }
        } else if (bills[i] === 20) {
            if (ten > 0 && five > 0) {
                // Prefer giving one $10 and one $5 as change
                ten--;
                five--;
            } else if (five >= 3) {
                // Give three $5 bills as change
                five -= 3;
            } else {
                return false; // Not enough change for $20
            }
        }
    }

    return true; // All customers received the correct change
};
