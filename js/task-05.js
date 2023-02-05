const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
  inputText.value.trim()
    ? (outputText.textContent = inputText.value)
    : (outputText.textContent = 'Anonymous');
});

// inputText.addEventListener('input', event => {
//   if (!event.currentTarget.value.trim()) {
//     return (outputText.textContent = 'Anonymous');
//   }
//   outputText.textContent = event.currentTarget.value.trim();
// });

// const onInputChange = event => {
//   inputText.value.trim()
//     ? (outputText.textContent = inputText.value)
//     : (outputText.textContent = 'Anonymous');
// };

// inputText.addEventListener('input', onInputChange);
