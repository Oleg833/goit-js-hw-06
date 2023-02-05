const loginForm = document.querySelector('.login-form');

const onLoginEventCurrentTarget = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    alert('Заповніть всі поля!');
    return;
  }
  const myForm = {
    email: email.value,
    password: password.value,
  };
  // console.log(email.value, password.value);
  console.log(myForm);
  event.currentTarget.reset();
};

loginForm.addEventListener('submit', onLoginEventCurrentTarget);
