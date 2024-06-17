const btn = document.querySelector("#addBookBtn");
const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const pageCount = document.getElementById("noOfPages");
const hasTheBookBeenRead = document.getElementById("readingStatus");
const output = document.getElementById("output");
const myLibrary = [];

function Book(title, author, noOfPages, hasTheBookBeenRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.hasTheBookBeenRead = hasTheBookBeenRead;
}
function addCell(a,b,c,d) {
    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    let col3 = document.createElement("div");
    let col4 = document.createElement("div");
    col1.innerText = a;
    col2.innerText = b;
    col3.innerText = c;
    col4.innerText = d;
    document.getElementById("output").appendChild(col1);
    document.getElementById("output").appendChild(col2);
    document.getElementById("output").appendChild(col3);
    document.getElementById("output").appendChild(col4);
}
function displayBooks() {
    document.getElementById("output").innerHTML = "";
    myLibrary.forEach(function (buk) {
        let a = buk.title;
        let b = buk.author;
        let c = buk.noOfPages;
        let d = buk.hasTheBookBeenRead;
        addCell(a,b,c,d);
    });
}
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
    bookTitle.value = "";
    author.value = "";
    pageCount.value = "";
    hasTheBookBeenRead.value = "";
}

btn.addEventListener("click", () => {
    const myBook = new Book(bookTitle.value, author.value, pageCount.value, hasTheBookBeenRead.value);
    addBookToLibrary(myBook);
});
