const coverElem = document.getElementById('cover');
const formElem = document.getElementById('form-feedback');
const feedbackButton = document.getElementById('contactUs');
const sendButton = document.getElementById('submit-feedback');
const nameField = document.getElementById('name-feedback');
const emailField = document.getElementById('email-feedback');
const textField = document.getElementById('text-feedback');


const validate = () => {
    if (
        nameField.validity.valid &&
        emailField.validity.valid &&
        textField.validity.valid
    ) {
        sendButton.classList.remove('invalid');
    } else {
        sendButton.classList.add('invalid');
    }
}


feedbackButton.addEventListener('click', () => {
    document.body.classList.add('notScrollable');
    coverElem.classList.remove('hidden');
    formElem.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
    document.body.classList.remove('notScrollable');
    coverElem.classList.add('hidden');
    formElem.classList.add('hidden');
});

sendButton.addEventListener('click', () => {
    if (sendButton.classList.contains('invalid')) return;
    document.body.classList.remove('notScrollable');
    coverElem.classList.add('hidden');
    formElem.classList.add('hidden');
});

nameField.addEventListener('input', () => {
    validate();
});

emailField.addEventListener('input', () => {
    validate();
});

textField.addEventListener('input', () => {
    validate();
});