//while
let ask = prompt('Введіть пароль');
let pass = 1111;
let i = 4;

while(i > 0) {
    if ( ask != pass) {
    alert(`Неправильний пароль. Кількість спроб: ${i}`);
    ask = prompt('Введіть пароль');
    i--;
    } else if( ask == pass) {
        alert('Вітаємо на сайті');
        break;
    } 
}
