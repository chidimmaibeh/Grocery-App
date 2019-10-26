// class Grocery1 {
//   name: string;
//   quantity: number;
//   constructor(public theName:string, public theQuantity:number)
//   {
//     this.name = theName;
//     this.quantity = theQuantity;
//   }
// }
var Grocery1 = /** @class */ (function () {
    function Grocery1(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery1;
}());
// There are a couple of ways to init value for arrays, i will show you 2 ways
var groceries1 = [
    { name: 'milk', quantity: 3 },
    { name: 'bread', quantity: 6 },
    { name: 'eggs', quantity: 11 }
];
// groceries1.push(new Grocery1('milk', 3))
// function initValueForGroceries1(): void{
//   for(let i =0; i<10; i++){
//     groceries1.push(
//       new Grocery1
//       ('item '+ i,      i)
//     )
//   }
// }
// function arraytoString (): string {
// }
// initValueForGroceries1();
function getStrings(groceries1) {
    var str = '';
    for (var i = 0; i < groceries1.length; i++) {
        var itemString = 'Name: ' + groceries1[i].name + ' Quantity: ' + groceries1[i].quantity + '----';
        str += itemString;
    }
    return str;
}
console.log(groceries1);
document.body.textContent = getStrings(groceries1);
/*
1.	Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think will be necessary.
2.	Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.
3.	The output of this assignment will be grocery.ts and groceries.html displaying the output.

*/ 
