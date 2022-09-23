let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;

}

function addBookToLibrary() {
  myLibrary.push(getBookFromInput());
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }

const getBookFromInput = () =>  {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read-check').checked;
    console.log(read);
    return new Book(title, author, pages, true);
} 

function updateLibrary () {
  myLibrary.forEach(book => {
    const div = document.createElement('div');
    div.classList.add('bookcard');

    const buttonrow = document.createElement('div');
    buttonrow.classList.add('buttonrow');

    const btitle = document.createElement('div');
    const bauthor = document.createElement('div');
    const bpages = document.createElement('div');

    btitle.innerHTML = book.title;
    bauthor.innerHTML = book.author;
    bpages.innerHTML = book.pages;

    div.appendChild(btitle);
    div.appendChild(bauthor);
    div.appendChild(bpages);

    const read = document.getElementById('read-check').checked;

    const remove = document.createElement('button');
    remove.classList.add("remove-btn");

    const readbtn = document.createElement('button');
    if (read){
      readbtn.classList.add('read-btn');
      readbtn.innerHTML = 'Read';
    } else {
      readbtn.classList.add('notread-btn');
      readbtn.innerHTML = 'Not Read';
    }

    remove.innerHTML = "Remove";
    buttonrow.appendChild(remove);
    buttonrow.appendChild(readbtn);
    div.appendChild(buttonrow);

    const bookcards = document.querySelector('.bookcards-cont');
    bookcards.appendChild(div);
  })
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  clearCards();
  addBookToLibrary();
  updateLibrary();

}

function exitForm () {
  document.getElementById("myForm").style.display = "none";
}

function clearCards () {
  document.querySelector(".bookcards-cont").innerHTML = "";
}

function removeBook (book) {

}




