"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
        // Code will be auto genrated
    }
    printTask() {
        console.log(`ID : ${this.taskId}, \t\tTask : ${this.task}, \t\tDone : ${this.done}`);
    }
}
exports.Item = Item;
