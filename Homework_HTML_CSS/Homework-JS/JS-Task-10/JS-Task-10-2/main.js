const arr1 = arrToString([1,2,3]);

const arr2 = arrToString([10,200,3333]);

function arrToString(arr) {
    const str = arr.join().split();
    return str;
}
console.log(arr1);
console.log(arr2);

