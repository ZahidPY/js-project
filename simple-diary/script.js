const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const textBox = document.getElementById("entry-textbox");
const entriesNav = document.querySelector(".entries-nav");
let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    

    const entryDiv = document.createElement("div");
    entryDiv.className = "single-entry";
    entryDiv.textContent = count + ". " +textBox.value;
    entryDiv.style.display = "none";
    entriesSection.appendChild(entryDiv);
    textBox.value = "";

    const displayEntryButton = document.createElement("button");
    displayEntryButton.className = "display-entry-button";
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);
    count++;


   
    displayEntryButton.addEventListener("click", function(){
      
        const allEntries = document.querySelectorAll(".single-entry");
        
        for(i = 0; i<allEntries.length; i++){
            allEntries[i].style.display = "none";
        }
        entryDiv.style.display = "block";



    })

  
}

entryForm.addEventListener('submit', addEntryToDom)