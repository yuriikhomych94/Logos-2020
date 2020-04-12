let arr = [{
    name: 'Ivan',
    country: 'Ukraine'
}, {
    name: 'Petro',
    country: 'Ukraine'
},{
    name: 'Miguel',
    country: 'Cuba'
}];
let country = arr.every(arr => arr.country == 'Ukraine');
console.log(country) // FALSE
