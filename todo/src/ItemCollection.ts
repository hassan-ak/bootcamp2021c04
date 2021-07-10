import { Item } from "./Item";
export class ItemCollection {
  private nextId: number = 1;

  constructor(public items: Item[] = []) {}

  public addTodo(task: string): void {
    let item: Item = new Item(this.nextId, task, false);
    this.nextId++;
    this.items.push(item);
  }

  public taskDone(taskId: number): void {
    let item: Item = this.items.find((item) => item.taskId == taskId);
    item.done = true;
  }

  public printAll(): void {
    this.items.forEach((item) => {
      item.printTask();
    });
  }
}

// export class TodoCollection {
//   constructor(public userName: string, public todoItems: TodoItem[] = []) {
//     // no statements required
//   }
//   addTodo(task: string): number {
//     while (this.getTodoById(this.nextId)) {
//       this.nextId++;
//     }
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
