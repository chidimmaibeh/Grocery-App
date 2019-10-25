var Grocery = /** @class */ (function () {
    function Grocery(itemName, itemQuantity) {
        this.itemName = itemName;
        this.itemQuantity = itemQuantity;
        this.name = itemName + " " + itemQuantity;
    }
    return Grocery;
}());
function getList(food) {
    return "Your grocery items are, " + food.itemName + " " + food.itemQuantity;
}
var grocerylist = new Grocery("milk", 3);
document.body.textContent = getList(grocerylist);
