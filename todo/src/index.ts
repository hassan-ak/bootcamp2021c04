import { Item } from "./Item";
import { ItemCollection } from "./ItemCollection";

// let item1: Item = new Item(1, "First Task", true);
// let item2: Item = new Item(1, "Second Task", false);
// let item3: Item = new Item(1, "Third Task");

// item1.printTask();
// item2.printTask();
// item3.printTask();

let icollection: ItemCollection = new ItemCollection();
icollection.addTodo("First Task");
icollection.addTodo("Second Task");
icollection.printAll();
