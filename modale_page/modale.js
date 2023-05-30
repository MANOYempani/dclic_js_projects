document.getElementById("ouvrirModale").addEventListener("click", function() {
    document.getElementById("myModale").style.display = "block";
  });
  
  document.getElementsByClassName("ferme")[0].addEventListener("click", function() {
    document.getElementById("myModale").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("myModale")) {
      document.getElementById("myModale").style.display = "none";
    }
  });
  