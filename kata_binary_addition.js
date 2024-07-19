/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) 

solved 15/07/23

*/

function addBinary(a, b) {
    let sum = a + b;
    let binArr = [];
    let bin = "";

    while (sum >= 1) {
        if (sum % 2 === 0) {
            binArr.unshift("0");
        }
        else if (sum % 2 !== 0) {
            binArr.unshift("1");
        }
        sum = Math.floor(sum / 2);
    }
    for (let i = 0; i < binArr.length; i++) {
        bin += binArr[i];
    }
    return bin;
}

