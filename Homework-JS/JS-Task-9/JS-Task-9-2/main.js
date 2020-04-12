let mail = prompt('Enter yout mail');

if(mail.startsWith('@') || mail.endsWith('@') || mail.indexOf('@') == -1) {
    console.log('Wrong mail Sorry')
} else {
    console.log('Your mail is correct, Thank you')
}
