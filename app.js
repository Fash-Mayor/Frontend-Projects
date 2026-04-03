// -- SORTING LOGIC --
const sortSelect = document.getElementById("sort-select");
const cards = document.querySelectorAll(".card");

sortSelect.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;

  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");

    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      // Show the card
      card.style.display = "grid";
    } else {
      // Hide the card
      card.style.display = "none";
    }
  });
});

// -- MODAL LOGIC --
const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.closest(".modal").style.display = "none";
    body.classList.remove("prevent-background-scroll");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});

// -- REDIRECT LOGIC --
function redir_btn1() {
  window.location.href = "Projects/calculator/calc.html";
}
function redir_btn2() {
  window.location.href = "Projects/fylo-landing-page/index.html";
}
function redir_btn3() {
  window.location.href = "Projects/tip-calc-app/index.html";
}
function redir_btn4() {
  window.location.href = "Projects/chowshop/chow.html";
}
function redir_btn5() {
  window.location.href = "Projects/intelli-school/index.html";
}
function redir_btn6() {
  window.location.href = "Projects/intelli-restaurant/index.html";
}