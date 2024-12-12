document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Button
  const hamburger = document.querySelector(".hamburger");
  const hero = document.querySelector(".hero");
  const cross = document.querySelector(".cross");
  const navUl = document.querySelector("nav ul");
  const navUlLi = document.querySelectorAll("nav ul li");

  function remove() {
    navUl.classList.remove("active");
    hamburger.classList.remove("active");
    hero.classList.remove("active");
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.add("active");
    hero.classList.add("active");
  });
  hamburger.addEventListener("click", () => {
    navUl.classList.add("active");
  });

  cross.addEventListener("click", remove);

  navUlLi.forEach((li) => {
    li.addEventListener("click", remove);
  });
});
