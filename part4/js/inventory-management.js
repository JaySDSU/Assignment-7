/*eslint-env browser*/
function update_inventory(number, stock, inventory) {
    for (i = 0; i < inventory.length; i++) {
        if (Number(inventory[i][0]) === Number(number)) {
            inventory[i][2] = "(" + stock + ")";
            window.console.log("Sku Number " + number + " was updated");
        }
    }
}

function display(inventory) {
    var i;
    window.console.log("List of inventory \n");
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i][0] + ", " + inventory[i][1] + ", " + inventory[i][2] + ", " + inventory[i][3]);
    }
}

function main() {

    var inventory = [
        [4824, "Shirt", "(10)", "$15.99"],
        [6343, "Jeans", "(22)", "$39.99"],
        [3223, "Socks", "(36)", "$9.99"],
        [2233, "Hat", "(12)", "$14.99"],
        [9382, "Jacket", "(5)", "$49.99"]
    ];

    while (true) {
        command = window.prompt("Enter Command \n 1.Show \n 2.Update \n 3.Exit");
        if (command === 'show') {
            display(inventory);
        } else if (command === 'update') {
            number = window.prompt("Enter Sku Number");
            stock = window.prompt("Enter number of Stock Quantity");
            update_inventory(number, stock, inventory);
        } else if (command === 'exit') {
            break;
        } else {
            window.alert("Enter valid Input");
        }
    }
}

main();