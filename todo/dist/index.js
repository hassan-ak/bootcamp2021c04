"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCollection_1 = require("./ItemCollection");
let icollection = new ItemCollection_1.ItemCollection();
icollection.addTodo("First Task");
icollection.addTodo("Second Task");
icollection.taskDone(1);
icollection.printAll();
