/*eslint-env browser*/
//STEP 1
halfNumber = function(number) {
    "use strict";
    var result;
    result = (number / 2);
    window.console.log("Half of " + number + " is " + result + ".<br>");
};

//STEP 2
squareNumber = function(number) {
    "use strict";
    var result;
    result = number * number;
    window.console.log("The result of squaring the number " + number + " is " + result + ".<br>");
};
//STEP 3
percentOf = function(number1, number2) {
    "use strict";
    var result;
    result = (number1 / number2) * 100;
    window.console.log(number1 + " is " + result + "% of " + number2 + ".<br>");
};

//STEP 4
findModulus = function(number1, number2) {
    "use strict";
    var result;
    result = number1 % number2;
    window.console.log(result + " is the modulus of " + number1 + " and " + number2 + ".<br>");
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

halfNumber(10);
squareNumber(10);
percentOf(4, 2);
findModulus(10, 6);
myArray = window.prompt("Enter the numbers").split(',');
sum(myArray);