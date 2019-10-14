/*eslint-env browser*/
//STEP 1
halfNumber = function(number) {
    "use strict";
    result = float(number / 2);
    window.console.log("Half of " + number + " is " + result + ".<br>");
    return result
};
//STEP 2
squareNumber = function(number) {
    "use strict";
    result = number * number;
    window.console.log("The result of squaring the number " + number + " is " + result + ".<br>");
    return result
};
//STEP 3
percentOf = function(number1, number2) {
    "use strict";
    result = (number1 / number2) * 100;
    window.console.log(number1 + " is " + result + "% of " + number2 + ".<br>");
    return result
};

//STEP 4
findModulus = function(number1, number2) {
    "use strict";
    result = number1 % number2;
    window.console.log(result + " is the modulus of " + number1 + " and " + number2 + ".<br>");
    return result
}

//STEP 5
sum = function(myArray) {
    "use strict";
    var result = 0;
    var i;
    for (i in myArray) {
        result += Number(myArray[i]);
    }
    window.console.log(result);
}

myArray = window.prompt("Enter the numbers").split(',');
sum(myArray);