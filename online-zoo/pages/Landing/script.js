const coverElem = document.getElementById('cover');
const formElem = document.getElementById('form-feedback');
const feedbackButton = document.querySelector('#contactUs');
const feedbackButtonF = document.querySelector('#contactUsF');
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
feedbackButtonF.addEventListener('click', () => {
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

const formDonat = document.getElementById('form-donat');
const donatButton = document.getElementById('footBtn');
const sendDonat = document.getElementById('submit-donat');
const valueDonat = document.getElementById('value-donat');
const textDonat = document.getElementById('text-donat');



const validatedonat = () => {
    if (
        valueDonat.validity.valid &&
        textDonat.validity.valid
    ) {
        sendDonat.classList.remove('invalid');
    } else {
        sendDonat.classList.add('invalid');
    }
}


donatButton.addEventListener('click', () => {
    document.body.classList.add('notScrollable');
    coverElem.classList.remove('hidden');
    formDonat.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
    document.body.classList.remove('notScrollable');
    coverElem.classList.add('hidden');
    formDonat.classList.add('hidden');
});

valueDonat.addEventListener('input', () => {
    validatedonat();
});

textDonat.addEventListener('input', () => {
    validatedonat();
});

const formBank = document.getElementById('form-bank');
const payBank = document.getElementById('bank-pay');
let cardnumber = document.querySelector('#cardnumber');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cardholder = document.querySelector('#cardholder');
const cvc = document.querySelector('#cvc');

const validateBank = () => {
    if (
        cardholder.validity.valid &&
        year.validity.valid &&
        month.validity.valid &&
        cvc.validity.valid &&
        cardnumber.validity.valid
    ) {
        payBank.classList.remove('invalid');
    } else {
        payBank.classList.add('invalid');
    }
}
cardnumber.addEventListener('input', () => {
    cardnumber.value = cardnumber.value.slice(0, 16);
    validateBank();
});

month.addEventListener('input', () => {
    month.value = month.value.slice(0, 2);
    validateBank();
});

year.addEventListener('input', () => {
    year.value = year.value.slice(0, 2);
    validateBank();
});

cardholder.addEventListener('input', () => {
    validateBank();
});
cvc.addEventListener('input', () => {
    cvc.value = cvc.value.slice(0, 3);
    validateBank();
});


sendDonat.addEventListener('click', () => {
    if (sendDonat.classList.contains('invalid')) return;
    document.body.classList.add('notScrollable');
    formDonat.classList.add('hidden');
    formBank.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
    document.body.classList.remove('notScrollable');
    coverElem.classList.add('hidden');
    formBank.classList.add('hidden');
});

payBank.addEventListener('click', () => {
    if (payBank.classList.contains('invalid')) return;
    document.body.classList.remove('notScrollable');
    coverElem.classList.add('hidden');
    formBank.classList.add('hidden');
});

document.querySelectorAll(".closeBtn").forEach(element => {
    element.onclick = function (event) {
        document.body.classList.remove('notScrollable');
        coverElem.classList.add('hidden');
        formElem.classList.add('hidden');
        formDonat.classList.add('hidden');
        formBank.classList.add('hidden');
        event.preventDefault();
    }

});