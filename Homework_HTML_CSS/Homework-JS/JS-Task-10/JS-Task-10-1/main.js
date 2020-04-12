const arr1 = arrCopy([1, 2, 3]);

function arrCopy(arr) {
    const copy = arr.slice(0);
    return copy;
}
console.log(arr1);

const arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(arr2);

