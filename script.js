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
    let row = document.getElementById("output");
    for (let i = 0; i < 4; i++) {
        let colVal = document.createElement("div");
        colVal.innerText = a;
        row.appendChild(colVal).className = "container-item";
    }
    /*
    function addCell(color) {
  let container = document.getElementById(color + "-container");

  let cell = document.createElement("div");
  cell.innerText = color;
  container.appendChild(cell).className = "container-item";
}*/
}
function displayBooks() {
    document.getElementById("output").innerHTML = "";
    myLibrary.forEach(function (buk) {
        let a = buk.title;
        let b = buk.author;
        let c = buk.noOfPages;
        let d = buk.hasTheBookBeenRead;
        //     // Create element:
        //     const para = document.createElement("p");
        //     para.innerHTML = a + " "+ b +" "+" "+ c +" "+ d;
        //     // Append to output:
        //     document.getElementById("output").appendChild(para);

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
