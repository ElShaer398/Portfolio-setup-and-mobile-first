const menuContainer = document.getElementById("menu-container");

let controller = false;
menuContainer.addEventListener("click", function () {
  const navItems = document.querySelector(".nav-items");
  const iconImage = menuContainer.querySelector("img");
  const items = document.querySelectorAll(".items");

  if (!controller) {
    document.querySelector("header").style.background = "#6070ff";
    document.querySelector(".main-1").style.background = "#6070ff";
    items.forEach(function(item) {
      item.style.color = "white";
    })
    navItems.style.display = "flex";
    iconImage.src = "images/cancel.png";
    navItems.style.flexDirection = "column";
    navItems.style.listStyle = "none";
    navItems.style.position = "absolute";
    navItems.style.left = "28px";
    navItems.style.top = "106px";
    controller = true;
  } else {
    navItems.style.display = "none";
    iconImage.src = "images/nav.png";
    iconImage.style.background = "red"; //to remove later
    controller = false;
  }
});
