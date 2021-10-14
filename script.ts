class Book {
  title: string;
  author: string;

  constructor(newTitle = "unknown_title", newAuthor = "unknown_author") {
    this.title = newTitle;
    this.author = newAuthor;
  }
}

class Library {
  books: Array<Book> = [];

  list() {
    this.books.forEach((book) => {
      console.log(book);
    });
  }

  add(book: Book) {
    if (!book) {
      console.log("no Book specified");
      return;
    }
    this.books.push(book);
    // console.log(book, "added...");
  }

  showAll() {
    let parent: HTMLElement | null = document.getElementById("library");

    this.books.forEach((book) => {
      let p: HTMLElement = document.createElement("P");
      p.classList.add("book");
      p.textContent = `${book.author} - ${book.title}`;
      parent?.appendChild(p);
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
