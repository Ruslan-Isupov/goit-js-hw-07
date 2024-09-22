const form = document.querySelector('.login-form');

const subForm = event => {
  event.preventDefault();
  const values = event.target.elements;
  const formData = {
    email: values.email.value,
    password: values.password.value,
  };

  if (!values.email.value || !values.password.value) {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
  }
  event.target.reset();
};
form.addEventListener('submit', subForm);
