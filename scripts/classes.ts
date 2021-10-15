export class Book {
  title: string;
  author: string;

  constructor(newTitle = "unknown_title", newAuthor = "unknown_author") {
    let checkLength = (string: string) => {
      if (string.length === 0) {
        return "unknown";
      } else return string;
    };

    this.title = checkLength(newTitle);
    this.author = checkLength(newAuthor);
  }
}

export class Library {
  books: Array<Book> = [];

  list() {
    this.books.forEach((book) => {
      console.log(book);
    });
  }

  add(book: Book) {
    this.books.push(book);
  }

  removeByIndex(bookIndex: number) {
    this.books.splice(bookIndex, 1);
  }

  refresh() {
    let library: HTMLElement | null = document.querySelector(".library");

    library?.replaceChildren();

    this.books.forEach((book, index) => {
      let item: HTMLElement = document.createElement("DIV");
      item.classList.add("book");

      let title = document.createElement("DIV");
      title.classList.add("book-title");
      title.textContent = `${book.title}`;

      let author = document.createElement("DIV");
      author.classList.add("book-author");
      author.textContent = `by ${book.author}`;

      let btnDelete = document.createElement("BUTTON");
      btnDelete.classList.add("book-btn-delete");
      btnDelete.textContent = "DELETE";
      btnDelete.addEventListener("click", () => {
        this.removeByIndex(index);
        this.refresh();
      });

      item.appendChild(title);
      item.appendChild(author);
      item.appendChild(btnDelete);

      library?.appendChild(item);
    });
  }
}
