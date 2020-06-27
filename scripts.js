function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (menu.style.display === "none") {
    menu.style.display = "grid"
  } else {menu.style.display = "none"}
}
