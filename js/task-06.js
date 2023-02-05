const validInput = document.querySelector('#validation-input');

const verificationInput = event => {
  if (event.currentTarget.value.trim().length === parseInt(validInput.dataset.length)) {
    validInput.classList.remove('invalid');
    validInput.classList.add('valid');
    return;
  }
  validInput.classList.remove('valid');
  validInput.classList.add('invalid');
};

validInput.addEventListener('blur', verificationInput);
