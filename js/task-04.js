const decrementBtn = document.querySelector('#counter [data-action="decrement"]');
const incrementBtn = document.querySelector('#counter [data-action="increment"]');
const counterEl = document.querySelector('#value');
let counterValue = 0;

const decrementClickValue = () => ((counterValue -= 1), (counterEl.textContent = counterValue));
const incrementClickValue = () => ((counterValue += 1), (counterEl.textContent = counterValue));

decrementBtn.addEventListener('click', decrementClickValue);
incrementBtn.addEventListener('click', incrementClickValue);
