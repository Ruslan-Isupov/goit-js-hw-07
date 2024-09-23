const form = document.querySelector('.login-form');

const subForm = event => {
  event.preventDefault();
  const values = event.target.elements;
  if (!values.email.value || !values.password.value) {
    return alert('All form fields must be filled in');
  }
  console.log({
    email: values.email.value,
    password: values.password.value,
  });
  event.target.reset();
};
form.addEventListener('submit', subForm);
