let startTime;
const duration = 300; 
const menu = document.querySelector(".header__list");

function openMenu(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  const elapsed = timestamp - startTime;

  const progress = Math.min(elapsed / duration, 1);
  menu.style.left = -100 + progress * 100 + "%";

  if (progress < 1) {
    requestAnimationFrame(openMenu);
  } else {
    menu.classList.remove("animating");
    startTime = null;
  }
}

document.querySelector(".menu-line").addEventListener("click", () => {
  if (menu.style.left === "" || menu.style.left === "-100%") {
    menu.classList.add("animating");
    requestAnimationFrame(openMenu);
  } else {
    menu.style.left = "-100%";
  }
});
