let factorial = +prompt('Введіть число');
let result = 1;

for(let i = 1; i <= factorial; i++) {
    result = result * i;
}
console.log(result);