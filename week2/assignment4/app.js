const banner = document.querySelector(".banner");
const closeButton = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const toggleButton = document.querySelector(".toggle");
const actionButton = document.querySelector(".action-btn");
const contentBox = document.querySelectorAll(".content-box");

//Request 1: Click to Change Text.
banner.addEventListener("click", () => {
  textChangeHandler(banner);
});

function textChangeHandler(target) {
  target.textContent = "Have a Good Time!";
}

//Request 2: Click to Show/Close Menu
toggleButton.addEventListener("click", () => {
  showModalHandler(menu, "block");
  console.log("show");
});

closeButton.addEventListener("click", () => {
  closeModalHandler(menu);
});

function showModalHandler(modal, displaytype) {
  modal.style.display = displaytype;
}

function closeModalHandler(modal) {
  modal.style.display = "none";
}

//Request 3: Click to Show More Content Boxes.
actionButton.addEventListener("click", () => {
  for (let i = 0; i < contentBox.length; i++) {
    removeClassNameHandler(contentBox[i], "hidden-box");
  }
});

function removeClassNameHandler(target, className) {
  target.classList.remove(className);
}
