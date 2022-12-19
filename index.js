const menuContainer = document.getElementById("menu-container");

let controller = false;
menuContainer.addEventListener("click", function () {
  const navItems = document.querySelector(".nav-items");
  const iconImage = menuContainer.querySelector("img");

  if (!controller) {
    navItems.style.display = "flex";
    iconImage.src = "images/cancel.png";
    iconImage.style.background = "red"; //to remove later
    controller = true;
  } else {
    navItems.style.display = "none";
    iconImage.src = "images/nav.png";
    iconImage.style.background = "red"; //to remove later
    controller = false;
  }
});
