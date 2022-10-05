console.log("script starts");
displayList()

function displayList(){
  let books = localStorage.getItem("books");
  // console.log(booksArr)
  let tBody = document.getElementById("tBody");

  let booksArr
  if (books == null) {
    booksArr = [];
    tBody.innerHTML = `<h3> Not Added Any Book <\h3>`;
  } else {
    booksArr = JSON.parse(books);
    //   booksArr.forEach(element => {
    //   console.log(element)
    // });
  }
  let html = "";
  booksArr.forEach((book, index) => {
    html += `
  <tr class="bookRow" >
   <th scope="row">${index + 1}</th>
   <td>${book.name}</td>
   <td>${book.author}</td>
   <td>${book.type}</td>
   <td>
     <button type="button" class="btn btn-secondary btn-sm" id="${index}" onclick="Display.prototype.deleteBook(this.id)">Delete</button>
   </td>
   
  </tr>
  `;
  });
  if (booksArr != null) {
    tBody.innerHTML = html;
  }
}



class Book {
  constructor(bookName, author, type) {
    this.name = bookName;
    this.author = author;
    this.type = type;
    // console.log(this)
  }

  storage(book) {
    let allBooks = localStorage.getItem("books");
    let allBooksArr
    if (allBooks == null) {
      allBooksArr = [];
    } else {
      allBooksArr = JSON.parse(allBooks);
    }
    allBooksArr.push(book);
    localStorage.setItem("books", JSON.stringify(allBooksArr));
  }

  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
}

class Display {



  displayList() {
    let books = localStorage.getItem("books");
    // console.log(booksArr)
    let tBody = document.getElementById("tBody");

    let booksArr
    if (books == null) {
      booksArr = [];
      tBody.innerHTML = `<h3> Not Added Any Book <\h3>`;
    } else {
      booksArr = JSON.parse(books);
      //   booksArr.forEach(element => {
      //   console.log(element)
      // });
    }
    let html = "";
    booksArr.forEach((book, index) => {
      html += `
    <tr class="bookRow" >
     <th scope="row">${index + 1}</th>
     <td>${book.name}</td>
     <td>${book.author}</td>
     <td>${book.type}</td>
     <td>
       <button type="button" class="btn btn-secondary btn-sm" id="${index}" onclick="Display.prototype.deleteBook(this.id)">Delete</button>
     </td>
     
    </tr>
    `;
    });
    if (booksArr != null) {
      tBody.innerHTML = html;
    }
  }

  deleteBook(bookId){
    // console.log("I am Deleting")
    let allBooks = localStorage.getItem("books");
    let allBooksArr
    if (allBooks == null) {
      allBooksArr = [];
    } else {
      allBooksArr = JSON.parse(allBooks);
    }
    allBooksArr.splice(bookId,1)
    localStorage.setItem("books", JSON.stringify(allBooksArr));
    Display.prototype.displayList();
  }

  search(){
    let searchVal= document.gebi
    console.log(searchBar.value)
  }

  

}


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  let programming = document.getElementById("programming");
  let constitution = document.getElementById("constitution");
  let novel = document.getElementById("novel");
  if (programming.checked) {
    type = programming.value;
  } else if (constitution.checked) {
    type = constitution.value;
  } else if (novel.checked) {
    type = novel.value;
  }

  let alertDiv = document.getElementById("alertMsg");

  if (bookName.length < 2 || author.length < 2) {
    alertDiv.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Please insert valid data
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

      setTimeout(() => {  
        alertDiv.innerHTML= ""
      }, 1000);
  } else {
    let book = new Book(bookName, author, type);
    console.log(book);
    Book.prototype.storage(book);
    Book.prototype.clear()
    alertDiv.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Book added successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    setTimeout(() => {  
      alertDiv.innerHTML= ""
    }, 1000);
    Display.prototype.displayList()
  }

  let searchBar= document.getElementById("search")
  searchBar.addEventListener("input",Display.prototype.search())  
});


