export class Book {
  title: string;
  author: string;
  read: boolean;

  constructor(
    newTitle = "unknown_title",
    newAuthor = "unknown_author",
    read = false
  ) {
    let checkLength = (string: string) => {
      if (string.length === 0) {
        return "unknown";
      } else return string;
    };

    this.title = checkLength(newTitle);
    this.author = checkLength(newAuthor);
    this.read = read;
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
    this.saveToLocalstorage();
  }

  removeByIndex(bookIndex: number) {
    this.books.splice(bookIndex, 1);
    this.saveToLocalstorage();
  }

  saveToLocalstorage() {
    let dataToStore = JSON.stringify(this.books);
    localStorage.setItem("library", dataToStore);
  }
  getFromLocalstorage() {
    let storedData: string | null = localStorage.getItem("library");
    if (storedData !== null) {
      let parsedData = JSON.parse(storedData) as Array<Book>;
      this.books = parsedData;
      this.refresh();
    }
    this.refresh();
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

      let readCheckbox = document.createElement("INPUT") as HTMLInputElement;
      readCheckbox.classList.add("book-read-checkbox");
      readCheckbox.type = "checkbox";
      readCheckbox.name = "read-checkbox";
      readCheckbox.id = `book-${index}`;
      readCheckbox.checked = book.read;
      readCheckbox.addEventListener("change", () => {
        book.read = readCheckbox.checked;
        this.saveToLocalstorage();
      });

      // let label = document.createElement("LABEL") as HTMLLabelElement;
      // label.htmlFor = `book-${index}`;
      // label.appendChild(document.createTextNode("read"));

      let btnDelete = document.createElement("BUTTON");
      btnDelete.classList.add("book-btn-delete");
      btnDelete.textContent = "DELETE";
      btnDelete.addEventListener("click", () => {
        this.removeByIndex(index);
        this.refresh();
      });

      item.appendChild(title);
      title.appendChild(readCheckbox);
      item.appendChild(author);
      // item.appendChild(label);
      item.appendChild(btnDelete);

      library?.appendChild(item);
    });
  }
}
