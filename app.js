let myLibrary = [];
const form = document.getElementById("add_book");
const table = document.getElementById("library_table");


const title = form.elements["book_name"];
const author = form.elements["author_name"];
const pages = form.elements["page_number"];
const read = form.elements["read_validity"];


form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
  displayLibrary();
  clearForm();
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

function displayLibrary() {
    const row = table.insertRow(1);
    const title_cell = row.insertCell(0);
    const author_cell = row.insertCell(1);
    const pages_cell = row.insertCell(2);
    const completed_cell = row.insertCell(3);
    
    title_cell.innerHTML = title.value;
    author_cell.innerHTML = author.value;
    pages_cell.innerHTML = pages.value;
    completed_cell.innerHTML = read.value;

}
