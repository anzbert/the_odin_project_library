import * as Classes from "./classes.js";
let lib = new Classes.Library();
const HEADER_BTN_ADD = document.getElementById("header-btn-add");
HEADER_BTN_ADD === null || HEADER_BTN_ADD === void 0 ? void 0 : HEADER_BTN_ADD.addEventListener("click", () => { });
// Test Content:
let book1 = new Classes.Book("its a story!!", "steve stevenson");
let book2 = new Classes.Book("super romance", "miaow ma mia");
let book3 = new Classes.Book("fantasy fighters", "dave le douche");
lib.add(book1);
lib.add(book2);
lib.add(book3);
lib.showAll();
