import { lib } from "./script.js";
import { Book } from "./classes.js";
// DEFINE ELEMENTS
const HEADER_BTN_ADD = document.getElementById("header-btn-add");
const MODULO_LOCKSCREEN = document.getElementById("modulo-lockscreen");
const MODULO_ADD = document.getElementById("modulo-add");
const MODULO_ADD_BTN_ADD = document.getElementById("modulo-add-btn-add");
// FUNCTIONS
function openModuloAdd() {
    MODULO_LOCKSCREEN === null || MODULO_LOCKSCREEN === void 0 ? void 0 : MODULO_LOCKSCREEN.classList.toggle("hidden", false);
    MODULO_ADD === null || MODULO_ADD === void 0 ? void 0 : MODULO_ADD.classList.toggle("hidden", false);
}
function closeModuloAdd() {
    MODULO_LOCKSCREEN === null || MODULO_LOCKSCREEN === void 0 ? void 0 : MODULO_LOCKSCREEN.classList.toggle("hidden", true);
    MODULO_ADD === null || MODULO_ADD === void 0 ? void 0 : MODULO_ADD.classList.toggle("hidden", true);
}
// EVENT LISTENERS
HEADER_BTN_ADD === null || HEADER_BTN_ADD === void 0 ? void 0 : HEADER_BTN_ADD.addEventListener("click", openModuloAdd); // open new menu
MODULO_LOCKSCREEN === null || MODULO_LOCKSCREEN === void 0 ? void 0 : MODULO_LOCKSCREEN.addEventListener("click", closeModuloAdd); // close when clicking on background
MODULO_ADD === null || MODULO_ADD === void 0 ? void 0 : MODULO_ADD.addEventListener("click", (e) => e.stopPropagation()); // prevent closing when clicking on modulo
MODULO_ADD_BTN_ADD === null || MODULO_ADD_BTN_ADD === void 0 ? void 0 : MODULO_ADD_BTN_ADD.addEventListener("click", (event) => {
    event.preventDefault();
    let form = document.getElementById("modulo-add-form");
    if (form !== null) {
        let formData = new FormData(form);
        let author = formData.get("author");
        let title = formData.get("title");
        let book = new Book(author, title);
        lib.add(book);
        lib.refresh();
        closeModuloAdd();
    }
});
