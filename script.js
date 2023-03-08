const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(item) {
    myLibrary.push(item);
}

// Load current library on page refresh
function populateTable() {   
    document.getElementById("book-table").innerHTML=""; 
    myLibrary.forEach(addBook);    
}

document.addEventListener("DOMContentLoaded", populateTable);

// Toggle the "read" status of a book
function isBookRead(Book) {
    if (Book.status === "read") {
        return `${Book.status} <input type="checkbox" id="book-${myLibrary.indexOf(Book)}-status" name="book-${myLibrary.indexOf(Book)}-status" data-index="${myLibrary.indexOf(Book)}" checked>`
    } 
    return `${Book.status} <input type="checkbox" id="book-${myLibrary.indexOf(Book)}-status" name="book-${myLibrary.indexOf(Book)}-status" data-index="${myLibrary.indexOf(Book)}">`
}

function toggleBookStatus(event) {
    const bookIndex = event.currentTarget.dataset.index;
    const checkBox = event.currentTarget;    
    const checkBook = myLibrary[bookIndex];
    if (checkBox.checked === true) {
        checkBook.status = "read";
    } else {
        checkBook.status = "not read";
    }
    populateTable();
}

// Add a book to the library table
function addBook(Book) {
    const table = document.getElementById("book-table");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);    
    cell1.innerText = Book.title;
    cell2.innerText = Book.author;
    cell3.innerText = Book.pages;
    cell4.innerHTML = isBookRead(Book);
    cell5.innerHTML = `<button class="remove" id="book-${myLibrary.indexOf(Book)}" data-index="${myLibrary.indexOf(Book)}">Remove</button>`
    document.getElementById(`book-${myLibrary.indexOf(Book)}-status`).addEventListener("change", toggleBookStatus);
    document.getElementById(`book-${myLibrary.indexOf(Book)}`).addEventListener("click", removeBook); 
}

// Add a new book to the library
function openForm() {
    document.getElementById("form-wrapper").style.display = "block";
}

const newBook = document.getElementById("new-book");
newBook.addEventListener("click", openForm);

const popupSubmit = document.getElementById("popup-form");

// Need check for blank inputs
// Need to check for duplicate entries?
function getBookData(event) {
    const formData = new FormData(popupSubmit);
    const formTitle = formData.get("book-title");
    const formAuthor = formData.get("book-author");
    const formPages = formData.get("book-pages");
    const formStatus = formData.get("book-status");
    const nextBook = new Book(formTitle, formAuthor, formPages, formStatus);
    addBookToLibrary(nextBook);    
    addBook(nextBook);
    popupSubmit.reset();
    event.preventDefault();
}

popupSubmit.addEventListener("submit", getBookData);

// Remove a book from the library
function removeBook(event) {
    const bookIndex = event.currentTarget.dataset.index;    
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
    }    
    populateTable();
}

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