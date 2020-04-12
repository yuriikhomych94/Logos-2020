let password = prompt('Введіть пароль');
if(password == 'LOGOS') {
    alert('Ласкаво просимо')
} else if(password == null) {
    alert('Вхід скасований')
} else {
    alert('Пароль невірний')
}