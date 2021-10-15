export class Book {
    constructor(newTitle = "unknown_title", newAuthor = "unknown_author") {
        let checkLength = (string) => {
            if (string.length === 0) {
                return "unknown";
            }
            else
                return string;
        };
        this.title = checkLength(newTitle);
        this.author = checkLength(newAuthor);
    }
}
export class Library {
    constructor() {
        this.books = [];
    }
    list() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
    add(book) {
        this.books.push(book);
    }
    refresh() {
        let library = document.querySelector(".library");
        library === null || library === void 0 ? void 0 : library.replaceChildren();
        this.books.forEach((book) => {
            let item = document.createElement("DIV");
            item.classList.add("book");
            let title = document.createElement("DIV");
            title.classList.add("book-title");
            title.textContent = `${book.title}`;
            let author = document.createElement("DIV");
            author.classList.add("book-author");
            author.textContent = `by ${book.author}`;
            item.appendChild(title);
            item.appendChild(author);
            library === null || library === void 0 ? void 0 : library.appendChild(item);
        });
    }
}
