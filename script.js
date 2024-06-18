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
    let btn = document.createElement("button");
    col1.innerText = a;
    col2.innerText = b;
    col3.innerText = c;
    col4.innerText = d;
    btn.innerText = "Remove from library";
    // let r = Math.random().toString().slice(2,11);
    function setAttribute(selector, attribute, value) {
        var elements = document.querySelectorAll(selector);
        for (var index = 0; index < elements.length; index++) {
            elements[index].setAttribute(attribute, (typeof value === "function" ? value(elements[index]) : value));
        }
    }
    // btn.classList.add(`${r}`);

    document.getElementById("output").appendChild(col1);
    document.getElementById("output").appendChild(col2);
    document.getElementById("output").appendChild(col3);
    document.getElementById("output").appendChild(col4);
    document.getElementById("output").appendChild(btn);
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
document.body.addEventListener('click', function (event) {
    if (event.target.className === "^\d+$"){
        removeBookFromLibrary(event.target.className);
    }
})
function removeBookFromLibrary(index){
    // index represents class name
    myLibrary.forEach(function (buk) {
        // let but = ;
        // if(but.)

        // addCell(a,b,c,d);
    });
    myLibrary.splice(index, 1);
}