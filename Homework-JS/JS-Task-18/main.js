let firstName = document.getElementById('first__name');
let lastName = document.getElementById('last__name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let btn = document.getElementById('button');
let block = document.getElementById('.block')

let regExpName =  /^[a-z A-Z]{1,20}$/;

//  FIRST NAME

btn.addEventListener('click', function() {
    if(regExpName.test(firstName.value)) {
        firstName.style.border = '2px solid green'
    } else {
        firstName.style.border = '2px solid red';
        block.style.diplay = 'inline';
    }
})

btn.addEventListener('click', function() {
    if(regExpName.test(lastName.value)) {
        lastName.style.border = '2px solid green'
    } else {
        lastName.style.border = '2px solid red';
    }
})


//EMAIL
let regExpEmail =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/
btn.addEventListener('click', function() {
    if(regExpEmail.test(email.value)) {
        email.style.border = '2px solid green'
    } else {
        email.style.border = '2px solid red';
    }
});


//PHONE

let regExpPhone = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

btn.addEventListener('click', function() {
    if(regExpPhone.test(phone.value)) {
        phone.style.border = '2px solid green';
    } else {
        phone.style.border = '2px solid red';
    }
});


//PASSWORD 

let regExpPass = /^[a-z A-Z 0-9]{8,15}$/

btn.addEventListener('click', function() {
    if(regExpPass.test(pass.value)) {
        pass.style.border = '2px solid green';
    } else {
        pass.style.border = '2px solid red';
    }
});