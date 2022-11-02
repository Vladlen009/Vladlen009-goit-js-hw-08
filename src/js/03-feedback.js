import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formData = {};
const refs = {
form: document.querySelector(".feedback-form"),
textarea: document.querySelector(".feedback-form textarea"),
input: document.querySelector(".feedback-form input")
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500 ));

populateTextarea();


function onTextareaInput(event){
  formData[event.target.name] = event.target.value;
console.log(formData);
// const dataOfKey = JSON.stringify(formData);
localStorage.setItem("STORAGE_KEY",JSON.stringify(formData));  
}

function onFormSubmit(event){
    event.preventDefault();
    console.log('Sending form');
    const dataAfterSubmit = localStorage.getItem("STORAGE_KEY");
    console.log(JSON.parse(dataAfterSubmit));
    // console.log(dataAfterSubmit);
    event.currentTarget.reset();
    localStorage.removeItem("STORAGE_KEY");
}


function populateTextarea(){
    const savedMessage = localStorage.getItem("STORAGE_KEY");
    const savedMessageParsed = JSON.parse(savedMessage);
    
    if (savedMessageParsed){
        const formDat = savedMessageParsed;
        // console.log(formD);
        refs.textarea.value = formDat.message || "";
        refs.input.value = formDat.email || "";
  
    }}

