let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;

    this.info = function() {
        if (read === true) {
            return title + ' by ' + author + ', ' + pages + ' pages, already read';
        } else {
            return title + ' by ' + author + ', ' + pages + ' pages, not yet read';
        }
    }
}

function addBookToLibrary() {

}

function displayBooks() {

}

const Hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 255, false);
const Eragon = new Book('Eragon', 'Christopher Paolini', 488, true);

myLibrary.push(Hobbit);
myLibrary.push(Eragon);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
