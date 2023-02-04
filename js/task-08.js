const loginForm = document.querySelector('.login-form');

const onLoginEventCurrentTarget = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!password.value.trim()) {
    alert('Заповніть всі поля!');
    return;
  }
  console.log(email.value, password.value);
  event.currentTarget.reset();
};

loginForm.addEventListener('submit', onLoginEventCurrentTarget);
