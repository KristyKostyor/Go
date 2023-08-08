const menu = document.querySelector(".header__list");
const menuIcon = document.querySelector(".menu-icon");
const crossIcon = document.querySelector(".cross-icon");

document.querySelector(".menu-line").addEventListener("click", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
    menu.classList.add("header__enable");
    menuIcon.style.display = "none";
    crossIcon.style.display = "block";
  } else {
    menu.style.display = "none";
    menu.classList.remove("header__enable");
    menuIcon.style.display = "block";
    crossIcon.style.display = "none";
  }
});

document.querySelector(".header__button").addEventListener("click", () => {
  const modal = document.getElementById("callModal");
  modal.style.display = "block";
});

document.querySelector(".header__callmob").addEventListener("click", () => {
  const modal = document.getElementById("callModal");
  modal.style.display = "block";
  menu.style.display = "none";
  menu.classList.remove("header__enable");
  menuIcon.style.display = "block";
  crossIcon.style.display = "none";
});

document.querySelector(".close-button").addEventListener("click", () => {
  const modal = document.getElementById("callModal");
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("callModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
