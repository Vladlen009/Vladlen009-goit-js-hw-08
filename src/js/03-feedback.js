import trottle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

form.addEventListener('input', trottle(obFormInputData, 500));
form.addEventListener('submit', onFormSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

onInitForm();

function obFormInputData(evt) {
  const emailInput = evt.target.name;
  const messageInput = evt.target.value;

  formData[emailInput] = messageInput;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const onFormDataInput = evt.target.elements;
  const emailInput = onFormDataInput.email.value;
  const messageInput = onFormDataInput.message.value;

  if (emailInput === '' || messageInput === '') {
    alert('Please fill in all fields of the form!');
  }

  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInitForm() {
  const LOCALSTORAGE_DATA = localStorage.getItem(LOCALSTORAGE_KEY);
  const JSON_LOCALSTORAGE_DATA = JSON.parse(LOCALSTORAGE_DATA);

  if (JSON_LOCALSTORAGE_DATA) {
    emailEl.value = JSON_LOCALSTORAGE_DATA.email || '';
    messageEl.value = JSON_LOCALSTORAGE_DATA.message || '';
  }
}
