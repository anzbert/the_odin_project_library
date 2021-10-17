import { Library, Book } from "./classes.js";
import "./dom.js";
export let lib = new Library();
// Test Content:
let book1 = new Book("its a story!!", "steve stevenson", false);
let book2 = new Book("super romance", "miaow ma mia", true);
let book3 = new Book("fantasy fighters", "dave le douche", true);
// add default library:
if (!localStorage.getItem("library")) {
    lib.add(book1);
    lib.add(book2);
    lib.add(book3);
    lib.saveToLocalstorage();
}
lib.getFromLocalstorage();
