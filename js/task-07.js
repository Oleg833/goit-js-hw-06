const inputRange = document.querySelector('#font-size-control');
const rangeText = document.querySelector('#text');

const selectRange = event => (rangeText.style.fontSize = event.currentTarget.value + `px`);

inputRange.addEventListener('input', selectRange);
