"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
let item1 = new Item_1.Item(1, "First Task", true);
let item2 = new Item_1.Item(1, "Second Task", false);
let item3 = new Item_1.Item(1, "Third Task");
item1.printTask();
item2.printTask();
item3.printTask();
