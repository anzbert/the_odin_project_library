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
    let library: HTMLElement | null = document.querySelector(".library");
    console.log(library);

    this.books.forEach((book) => {
      let item: HTMLElement = document.createElement("DIV");
      item.classList.add("book");

      let author = document.createElement("DIV");
      author.classList.add("book-author");
      author.textContent = `by ${book.author}`;

      let title = document.createElement("DIV");
      author.classList.add("book-title");
      title.textContent = `${book.title}`;

      item.appendChild(title);
      item.appendChild(author);

      library?.appendChild(item);
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
