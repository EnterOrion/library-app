let myLibrary = [];
const form = document.getElementById("add_book");

const title = form.elements["book_name"];
const author = form.elements["author_name"];
const pages = form.elements["page_number"];
const read = form.elements["read_validity"];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
  clearForm();
  console.log(myLibrary);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let bookInfo =
      title + " " + "by" + " " + author + "," + " " + pages + "," + " " + read;
    return bookInfo;
  };
}

function addBook() {
  myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
}
