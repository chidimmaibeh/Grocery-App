var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceries = [
    { name: 'milk', quantity: 3 },
    { name: 'bread', quantity: 6 },
    { name: 'eggs', quantity: 11 }
];
function getStrings(groceries) {
    var str = '';
    for (var i = 0; i < groceries.length; i++) {
        var itemString = 'Name: ' + groceries[i].name + ' Quantity: ' + groceries[i].quantity + '----';
        str += itemString;
    }
    return str;
}
console.log(groceries);
document.body.textContent = getStrings(groceries);
/*
1.	Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think will be necessary.
2.	Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.
3.	The output of this assignment will be grocery.ts and groceries.html displaying the output.

*/ 
