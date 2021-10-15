import { lib } from "./script.js";
import { Book } from "./classes.js";

const HEADER_BTN_ADD = document.getElementById("header-btn-add");
const MODULO_LOCKSCREEN = document.getElementById("modulo-lockscreen");
const MODULO_ADD = document.getElementById("modulo-add");
const MODULO_ADD_BTN_ADD = document.getElementById("modulo-add-btn-add");

function openModuloAdd() {
  MODULO_LOCKSCREEN?.classList.toggle("hidden", false);
  MODULO_ADD?.classList.toggle("hidden", false);
}
function closeModuloAdd() {
  MODULO_LOCKSCREEN?.classList.toggle("hidden", true);
  MODULO_ADD?.classList.toggle("hidden", true);
}

HEADER_BTN_ADD?.addEventListener("click", openModuloAdd);

MODULO_ADD_BTN_ADD?.addEventListener("click", (event) => {
  event.preventDefault();

  let form = document.getElementById(
    "modulo-add-form"
  ) as HTMLFormElement | null;

  if (form !== null) {
    let formData = new FormData(form);

    let author = formData.get("author") as string;
    let title = formData.get("title") as string;
    let book = new Book(author, title);

    lib.add(book);
    lib.refresh();
    closeModuloAdd();
  }
});
