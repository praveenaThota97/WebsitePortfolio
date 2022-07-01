function displayBlock() {//after clicling button function executes
    var x = document.getElementById("hideDiv");
    if (x.style.display === "none") {// Displays the hided projects
        x.style.display = "block";
        var ele=document.getElementById("secDiv");
        x.classList.remove("hide");
        ele.style.height="1380px";
      } else {//hides the extra projects
        x.style.display = "none";
        var ele=document.getElementById("secDiv");
        ele.style.height="900px";
      }

 }