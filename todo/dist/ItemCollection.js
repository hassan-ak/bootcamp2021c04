"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const Item_1 = require("./Item");
class ItemCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new Item_1.Item(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
    }
    printAll() {
        this.items.forEach((item) => {
            item.printTask();
        });
    }
}
exports.ItemCollection = ItemCollection;
// export class TodoCollection {
//   constructor(public userName: string, public todoItems: TodoItem[] = []) {
//     // no statements required
//   }
//   addTodo(task: string): number {
//     while (this.getTodoById(this.nextId)) {
//       this.nextId++;
//     }
//     return this.nextId;
//   }
//   getTodoById(id: number): TodoItem {
//     return this.todoItems.find((item) => item.id === id);
//   }
//   markComplete(id: number, complete: boolean) {
//     const todoItem = this.getTodoById(id);
//     if (todoItem) {
//       todoItem.complete = complete;
//     }
//   }
// }
