import { ItemCollection } from "./ItemCollection";

let icollection: ItemCollection = new ItemCollection();
icollection.addTodo("First Task");
icollection.addTodo("Second Task");
icollection.taskDone(1);
icollection.printAll();
