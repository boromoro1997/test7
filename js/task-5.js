function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
btn.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.innerHTML = document.body.style.backgroundColor;
  console.log(document.body.style.backgroundColor);
}