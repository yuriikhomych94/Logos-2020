let arr = [1, -2, 3, 0, 4, -5, 6, -11];

let filter = arr.filter(num => num > 0 );
let sqr = filter.map(num => num = Math.sqrt(num));
console.log(sqr);