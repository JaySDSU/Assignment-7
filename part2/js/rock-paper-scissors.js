/*eslint-env browser*/

var choices = ["rock", "paper", "scissors"];

var calculate = function() {
    "use strict";
    var user_input;
    var computer_input;

    user_input = window.prompt("Enter the choice for game \n 0.Rock \n 1.Paper \n 2.Scissors ");
    computer_input = Math.floor((Math.random() * 3));

    window.document.write("User Selects : " + choices[user_input] + ".<br>");
    window.document.write("Computer Selects : " + choices[computer_input] + ".<br>");

    if (user_input == computer_input) {
        window.document.write("Both computer and user selected same choice :" + choices[user_input]);
    } else if (user_input > 2) {
        window.alert("Enter valid choices");
    } else {
        if (user_input == 0 && computer_input == 1 || user_input == 1 && computer_input == 0) {
            window.document.write("Paper covers rock.<br>");
            if (user_input == 1) {
                window.document.write("So Computer Wins.<br>");
            } else {
                window.document.write("So You Wins.<br>");
            }
        } else if (user_input == 0 && computer_input == 2 || user_input == 2 && computer_input == 0) {
            window.document.write("Rock destroys Scissor.<br>");
            if (user_input == 1) {
                window.document.write("So You Wins.<br>");
            } else {
                window.document.write("So Computer Wins.<br>");
            }
        } else if (user_input == 1 && computer_input == 2 || user_input == 2 && computer_input == 1) {
            window.document.write("Scissor cuts Paper.<br>");
            if (user_input == 1) {
                window.document.write("So Computer Wins.<br>");
            } else {
                window.document.write("So You Wins.<br>");
            }
        }
    }
}

var display = function(choices) {
    "use strict";
    for (var i = 0; i < choices.length; i++) {
        window.document.write(i + ". " + choices[i] + "<br>");
    }
}
display(choices);
calculate();