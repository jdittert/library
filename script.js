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

function addBook(title) {
    const table = document.getElementById("book-table");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerText = title;
    cell2.innerText = "Blarg";
    cell3.innerText = "Cheese";
    cell4.innerText = "Whiz";
}

// I thought this would work, but it doesn't //
function populateTable() {    
    myLibrary.forEach(addBook);    
}

// This also does not work //
function populateRow() {
    const {title} = this.title;
    addBook(title);
}

const populate = document.getElementById("populate");
populate.addEventListener("click", populateRow);

console.log(myLibrary);