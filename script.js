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

console.log(myLibrary);