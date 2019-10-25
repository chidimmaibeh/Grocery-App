class Grocery {
  name: string;
  qunatity: number;
  constructor(public itemName:string, public itemQunatity:number)
  {
    this.name = itemName + "" + itemQunatity;
  }
}

interface Food {
  itemName: string;
  itemQunatity:number;
}

function getList(food:Food) {
  return "Your grocery items, " + food.itemName;
}

let grocerylist = new Grocery("milk", 3, "bread", 6, "eggs", 11)
document.body.textContent = getList(grocerylist);