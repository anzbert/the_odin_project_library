import { Library, Book } from "./classes.js";
import "./dom.js";
export let lib = new Library();
// Test Content:
let book1 = new Book("its a story!!", "steve stevenson");
let book2 = new Book("super romance", "miaow ma mia");
let book3 = new Book("fantasy fighters", "dave le douche");
lib.add(book1);
lib.add(book2);
lib.add(book3);
lib.refresh();
