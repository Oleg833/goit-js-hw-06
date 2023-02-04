function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetBtn = document.querySelector('.change-color');
const BgdColorValueEl = document.querySelector('.color');
const BtnClick = () => {
  const value = getRandomHexColor();
  document.body.style.backgroundColor = value;
  BgdColorValueEl.textContent = value;
};

widgetBtn.addEventListener('click', BtnClick);
