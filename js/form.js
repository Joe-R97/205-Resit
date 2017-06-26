// Get the modal
var modal = document.getElementById('form');

// Get the button that opens the modal
var btn = document.getElementById("showform");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Validates form making sure the corect information is given
function validateForm() {
    var x = document.forms["form"]["fullname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}