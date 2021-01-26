document.getElementById("searchInput").addEventListener('keyup',function(event){
    let searchQuery =  event.target.value.toLowerCase();

    let allnamesDOMCollection = document.getElementsByClassName("name")
    for(let counter = 0; counter < allnamesDOMCollection.length; counter++){
        const currentName = allnamesDOMCollection[counter].textContent.toLowerCase();

        if (currentName .includes(searchQuery)){
            allnamesDOMCollection[counter].style.display = "block";

        } else{
            allnamesDOMCollection[counter].style.display = "none";
        }
        
    }
})

/// Getting all the elemets from the DOM
