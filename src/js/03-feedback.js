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

function fillFormInput() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const parsedSavedFormData = JSON.parse(savedFormData);

  if (parsedSavedFormData) {
    if (parsedSavedFormData.email) {
      refs.input.value = parsedSavedFormData.email;
    }

    if (parsedSavedFormData.message) {
      refs.textarea.value = parsedSavedFormData.message;
    }
  }
}
