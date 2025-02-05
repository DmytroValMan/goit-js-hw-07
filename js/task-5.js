function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorText = document.querySelector(".color");

const changeBackGroundColor = () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorText.textContent = `- ${bodyEl.style.backgroundColor}`;
};

changeColorBtn.addEventListener("click", changeBackGroundColor);
