function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const insertDivBoxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
  let defaultSize = 30;
  const arrayDiv = [];

  for (let i = 0; i < amount; i++) {
    let randomColor = getRandomHexColor();
    defaultSize += 10;

    const newDivEl = document.createElement('div');
    newDivEl.style.margin = '10px';
    newDivEl.style.width = defaultSize + 'px';
    newDivEl.style.height = defaultSize + 'px';
    newDivEl.style.backgroundColor = randomColor;

    arrayDiv.push(newDivEl);
  }
  return insertDivBoxesEl.append(...arrayDiv);
};
const onCreateBoxes = event => createBoxes(inputEl.value);
const onDestroyBoxes = event => ((insertDivBoxesEl.innerHTML = ''), (inputEl.value = ''));

btnCreateEl.addEventListener('click', onCreateBoxes);
btnDestroyEl.addEventListener('click', onDestroyBoxes);

// VariantMy

// const inputEl = document.querySelector('input');
// const btnCreateEl = document.querySelector('[data-create]');
// const btnDestroyEl = document.querySelector('[data-destroy]');
// const insertDivBoxesEl = document.querySelector('#boxes');

// const createBoxes = amount => {
//   const fragment = new DocumentFragment();
//   let defaultSize = 30;

//   for (let i = 0; i < amount; i++) {
//     let randomColor = getRandomHexColor();
//     defaultSize += 10;

//     const newDivEl = document.createElement('div');
//     newDivEl.style.margin = '10px';
//     newDivEl.style.width = defaultSize + 'px';
//     newDivEl.style.height = defaultSize + 'px';
//     newDivEl.style.backgroundColor = randomColor;

//     fragment.appendChild(newDivEl);
//   }
//   return insertDivBoxesEl.append(fragment);
// };
// const onCreateBoxes = event => createBoxes(inputEl.value);
// const onDestroyBoxes = event => ((insertDivBoxesEl.innerHTML = ''), (inputEl.value = ''));

// btnCreateEl.addEventListener('click', onCreateBoxes);
// btnDestroyEl.addEventListener('click', onDestroyBoxes);

// Variavt2
// const btnCreateBoxes = document.querySelector('[data-create]');
// const btnDestroyBoxes = document.querySelector('[data-destroy]');
// const mainDiv = document.querySelector('#boxes');
// const inputAmount = document.querySelector('input');

// const amount = inputAmount.value;
// // ----чому так не працює ????
// console.log(`Start inputEl.value:`, inputAmount.value, `dsfsf:=`, amount);

// // const createBoxes = () => { --- чому так не працює????
// const createBoxes = amount => {
//   amount = inputAmount.value;
//   const divArr = [];
//   let heightWidth = 30;
//   for (let i = amount; i > 0; i = i - 1) {
//     const div = document.createElement('div');
//     div.style.width = `${heightWidth}px`;
//     div.style.height = `${heightWidth}px`;
//     div.style.background = getRandomHexColor();
//     divArr.push(div);
//     heightWidth += 10;
//   }
//   mainDiv.append(...divArr);
// };

// const destroyBoxes = () => {
//   console.log(`Start inputEl.value FiniSh:`, inputAmount.value, `Finish:=`, amount);
//   mainDiv.innerHTML = '';
// };
// inputAmount.addEventListener('input', {});
// btnCreateBoxes.addEventListener('click', createBoxes);
// btnDestroyBoxes.addEventListener('click', destroyBoxes);

// Variant3

// const input = document.querySelector('input');
// const createBrn = document.querySelector('[data-create]');
// const destroyBrn = document.querySelector('[data-destroy]');
// const boxList = document.querySelector('#boxes');

// function createBoxes(amount) {
//   amount = Number(input.value);
//   const boxes = new Array(amount).fill('').reduce((prevBox, currBox, index) => {
//     return (
//       prevBox +
//       `<div class='box' style = "width: ${30 + index * 10}px; height: ${
//         30 + index * 10
//       }px; background: ${getRandomHexColor()}"></div>`
//     );
//   }, '');
//   boxList.insertAdjacentHTML('beforeend', boxes);
// }

// function removeBoxes() {
//   boxList.innerHTML = '';
//   input.value = '';
// }

// createBrn.addEventListener('click', createBoxes);
// destroyBrn.addEventListener('click', removeBoxes);
