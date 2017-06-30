// Get's the element form from the document and assigns it to the variable 'form'
var form = document.getElementById('form');

// Get the button that opens the form and assings it to the variable 'button'
var button = document.getElementById("showform");

// Get the <span> (close) element that closes the form
var closes = document.getElementsByClassName("close")[0];

// When the user clicks the button, opens the form 
button.onclick = function() {
    form.style.display = "block";
}

// When the user clicks on close (x), close the form
closes.onclick = function() {
    form.style.display = "none";
}

// When the user clicks anywhere outside of the form, close it
document.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
}
