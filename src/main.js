const menuBtn = document.querySelector(".burger-menu");
let menuOpen = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  if (menuOpen.style.display === "flex") {
    menuOpen.style.display = "none"
  } else {
    menuOpen.style.display = "flex"
  }
});


