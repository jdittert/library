const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const bookOne = new Book("Green Eggs", "Dr. Suess", 17, "read");
const bookTwo = new Book("High Fidelity", "Nick Hornby", 352, "not read");

function addBookToLibrary(item) {
    myLibrary.push(item);
}

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);

function addBook(Book) {
    const table = document.getElementById("book-table");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerText = Book.title;
    cell2.innerText = Book.author;
    cell3.innerText = Book.pages;
    cell4.innerText = Book.status;
}

function populateTable() {    
    myLibrary.forEach(addBook);    
}

const populate = document.getElementById("populate");
populate.addEventListener("click", populateTable);

// Add a new book to the library

function openForm() {
    document.getElementById("form-wrapper").style.display = "block";
}

const newBook = document.getElementById("new-book");
newBook.addEventListener("click", openForm);

const popupSubmit = document.getElementById("popup-form");

// Need check for blank inputs
// Need populateTable to only add the next row and now all previous rows
// Need to check for duplicate entries?
function getBookData(event) {
    const formData = new FormData(popupSubmit);
    const formTitle = formData.get("book-title");
    const formAuthor = formData.get("book-author");
    const formPages = formData.get("book-pages");
    const formStatus = formData.get("book-status");
    const nextBook = new Book(formTitle, formAuthor, formPages, formStatus);
    addBookToLibrary(nextBook);
    populateTable();
    popupSubmit.reset();
    event.preventDefault();
}

popupSubmit.addEventListener("submit", getBookData);

// This does not work as intended
/*
function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}


window.onclick = function (event) {
    const modal = document.getElementById("popup-form");
    if (event.target == modal) {
        modal.style.display = "none";
    }
} */

console.log(myLibrary);