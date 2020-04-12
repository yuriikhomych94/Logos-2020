let months = prompt('Введіть число');
switch (true){
    case months >=1 && months <= 2:
    alert('Зима');
    break;

    case months >= 3 && months <= 5:
    alert('Весна');
    break;

    case months >= 6 && months <= 8:
    alert('Літо');
    break;

    case months >= 9 && months <= 11:
    alert('Осінь');
    break;

    case months == 12:
    alert('Зима');
    break;
    default:
        alert('Такого місяця не існує');
}

