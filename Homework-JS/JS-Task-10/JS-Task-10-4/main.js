const arr1 = removeDuplicates(['html','css','html','js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);
function removeDuplicates(arr) {
    const remove = [];
    for (let i = 0; i < arr.length; i++) {
        const origin = arr[i];
        if (remove.indexOf(origin) == -1) {
            remove.push(origin)
        }
    }
    return remove;
}

console.log(arr1)
console.log(arr2);