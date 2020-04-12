let getSel = x => document.querySelector(x);

getSel('.block1').onclick = function () {
    this.style.backgroundImage = 'url("' + prompt('Введіть url адресу') + '")';
    this.style.backgroundSize = 'cover';
}
getSel('.block2').onclick = function () {
    this.style.backgroundImage = 'url("' + prompt('Введіть url адресу') + '")';
    this.style.backgroundSize = 'cover';
}
getSel('.block3').onclick = function () {
    this.style.backgroundImage = 'url("' + prompt('Введіть url адресу') + '")';
    this.style.backgroundSize = 'cover';
}
