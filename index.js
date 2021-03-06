// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the Input box
var input = document.getElementById("input");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  if (input.value) {
    // This line was setting the value to nothing, so nothing was captured
    // input.value = "";
    input.required = false;
    modal.style.display = "block";
   
  } else {
    modal.style.display = "none";
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  input.value = "";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    input.value = "";
  }
};
