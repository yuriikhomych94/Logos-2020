function number(n) {
    for(let i = 2; i < n; i++) {
       if(n % i === 0) return false;
    }
    return n > 1;
   }

console.log(number(127))