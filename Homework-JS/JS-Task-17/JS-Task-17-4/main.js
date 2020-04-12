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
let country = arr.some(arr => arr.country == 'Cuba');
console.log(country); //TRUE
