console.log("Script starts");
showNotes();

let addBtn = document.getElementById("addBtn");

// Function to add new Notes
addBtn.addEventListener("click", (e) => {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = " ";
  // console.log(notesObj);

  showNotes();
});

// Function to show Note Cards
function showNotes() {
  let note = localStorage.getItem("notes");
  if (note == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(note);
  }
  let html = "";

  noteObj.forEach(function (element, index) {
    html += `
        <div class="noteCard card my-3 mx-5" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" style="font-weight:bold">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>  
      </div>
        `;
  });
  let notesDiv = document.getElementById("notes");
  if (noteObj.length != 0) {
    notesDiv.innerHTML = html;
  } else {
    notesDiv.innerHTML = `Not Added Any Notes PLease Click On "Add Note" To Add New Note`;
  }
}

// Function to Delete a Note


// Function for Searching a Note
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
  let inputVal = searchTxt.value.toLowerCase();
  // console.log("Input event fired", inputVal)
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element
      .getElementsByTagName("p")[0]
      .innerText.toLocaleLowerCase();
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// Button mouseover effect

let buttons= document.getElementsByClassName("btn")

Array.from(buttons).forEach(btn => {
  btn.addEventListener("onmouseover",function(){
    btn.style.backgroundColor= "red"
  })
});

