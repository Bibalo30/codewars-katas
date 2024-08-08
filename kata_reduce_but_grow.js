/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

function grow(x) {
    let total = 1;
    let length = x.length - 1;
    for (let i = 0; i <= length; i++) {
        total *= x[i];
    }
    return total;
}