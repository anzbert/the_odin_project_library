"use strict";
class Book {
    constructor(newTitle = "unknown_title", newAuthor = "unknown_author") {
        this.title = newTitle;
        this.author = newAuthor;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    list() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
    add(book) {
        if (!book) {
            console.log("no Book specified");
            return;
        }
        this.books.push(book);
        // console.log(book, "added...");
    }
    showAll() {
        let parent = document.getElementById("library");
        this.books.forEach((book) => {
            let p = document.createElement("P");
            p.classList.add("book");
            p.textContent = `${book.author} - ${book.title}`;
            parent === null || parent === void 0 ? void 0 : parent.appendChild(p);
        });
    }
}
let lib = new Library();
// Testing:
let book1 = new Book("its a story!!", "steve stevenson");
let book2 = new Book("super romance", "miaow ma mia");
let book3 = new Book("fantasy fighters", "dave le douche");
lib.add(book1);
lib.add(book2);
lib.add(book3);
lib.showAll();
