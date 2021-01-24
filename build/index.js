"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([0, -5, 10, 3]);
numbersCollection.sort();
console.log(numbersCollection.collection);
var charsCollection = new CharactersCollection_1.CharactersCollection("PoaJB");
charsCollection.sort();
console.log(charsCollection.collection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(0);
linkedList.add(-5);
linkedList.add(10);
linkedList.add(3);
linkedList.sort();
linkedList.print();