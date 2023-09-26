// Definir la largeur de la sidebar a 1000vw et faire overflow hidden

function openNav() {
  document.getElementById("mySidebar").style.width = "100vw";
  document.querySelector("body").style.overflow = "hidden";
}

//definir la larguer de la side bar a 0et faire overflow auto

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.querySelector("body").style.overflow = "auto";
}
