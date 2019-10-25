class Grocery {
  name: string;
  quantity: number;
  constructor(public itemName:string, public itemQuantity:number)
  {
    this.name = itemName + " " + itemQuantity;
  }
}

interface Food {
  itemName: string;
  itemQuantity:number;
}

function getList(food:Food) {
  return "Your grocery items are, " + food.itemName + " " + food.itemQuantity;
}

let grocerylist = new Grocery("milk", 3)  
document.body.textContent = getList(grocerylist);