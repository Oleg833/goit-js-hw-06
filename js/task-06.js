const validInput = document.querySelector('#validation-input');

const verificationInput = event => {
  if (event.currentTarget.value.trim().length === parseInt(validInput.dataset.length)) {
    validInput.classList.add('valid');
    return;
  }
  validInput.classList.add('invalid');
};

validInput.addEventListener('blur', verificationInput);
