const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', onFormInput);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const formDataString = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, formDataString);
}
