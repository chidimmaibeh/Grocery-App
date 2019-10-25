var Grocery = /** @class */ (function () {
    function Grocery(itemName, itemQunatity) {
        this.itemName = itemName;
        this.itemQunatity = itemQunatity;
        this.name = itemName + "" + itemQunatity;
    }
    return Grocery;
}());
function getList(food) {
    return "Your grocery items, " + food.itemName;
}
var grocerylist = new Grocery("milk", 3);
document.body.textContent = getList(grocerylist);
