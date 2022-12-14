let myLibrary = [];
let i = 1;
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
  
  const button = document.createElement('BUTTON');
  const text = document.createTextNode("Delete");
  button.appendChild(text);
  button.setAttribute('id',`delete_button ${i}`);


  const button2 = document.createElement('BUTTON');
  const text2 = document.createTextNode(read.value);
  if (read.value == "Yes") {
    button2.setAttribute('class', 'green_button')
  }
  else {
    button2.setAttribute('class', 'red_button')
  }

  button2.appendChild(text2);
  button2.setAttribute('id',`complete_button ${i}`);
   
    const row = table.insertRow(1);
    row.setAttribute('id', i);

    const title_cell = row.insertCell(0);
    const author_cell = row.insertCell(1);
    const pages_cell = row.insertCell(2);
    const completed_cell = row.insertCell(3);
    const delete_cell = row.insertCell(4);
    
    title_cell.innerHTML = title.value;
    author_cell.innerHTML = author.value;
    pages_cell.innerHTML = pages.value;
    completed_cell.appendChild(button2);
    delete_cell.appendChild(button);
    
    i++;

    const delete_action = document.getElementById(`delete_button ${(i-1)}`);
  
    delete_action.addEventListener("click", (event) => {
      let deleteId = delete_action.id.split(" ").pop(); 
      console.log(deleteId)
      let deleteRow = document.getElementById(deleteId);
      row.parentNode.removeChild(deleteRow);
  });

  const complete_action = document.getElementById(`complete_button ${(i-1)}`);
    complete_action.addEventListener("click", (event) => {
      console.log(complete_action.innerHTML);
    
      if (complete_action.innerHTML == "Yes") {
        complete_action.innerHTML = "No";
        button2.setAttribute('class', 'red_button')
      }
      else {
        complete_action.innerHTML = "Yes";
        button2.setAttribute('class', 'green_button')
      }
  })

}
