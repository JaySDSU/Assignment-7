/*eslint-env browser*/

//STEP 1
Message = function() {
    window.alert("I have been clicked.");
};

//STEP 2
mybutton = window.document.getElementById("myButton");
mybutton.onclick = function() {
    window.alert("I have been clicked.");
};

//STEP 3
function clicked() {
    window.alert("I have been clicked.");
}
mybutton1 = document.getElementById("myButton1");
mybutton1.addEventListener("click", clicked);


//STEP 4
mybutton2 = document.getElementById("myButton2");
mybutton2.addEventListener("click", function() {
    window.alert("I have been clicked.");
});

//STEP 5
init = function() {
    btn = document.getElementById("myButton3");
    btn.addEventListener("click", function() {
        window.alert("I have been clicked.");
    });
}
window.addEventListener("load", init);