const abike = document.querySelector(".nav_list");
const tunde = document.querySelector(".del_hamburger");

const Fabulous = () => {
  abike.classList.toggle("fabulous");
};
tunde.addEventListener("click", Fabulous);
