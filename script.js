const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('input-box');

// Function to check whether there is any existing data(Notes) or not, if YES then it will display on browser. 
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Function for storing notes in local storage when website is being refreshed. 
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// Function for deleting Existing notes. 
notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // After deleting notes, This will be updated in local storage. 
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){ 
                updateStorage();
            }
        })
    }
})

document.addEventListener("Keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLinkeBreak");
        event.preventDefault();
    }
})