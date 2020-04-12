let myMath = {};

myMath.a = 5;
myMath.b = 2;

myMath.sum = function() {
    return this.a + this.b;
};
console.log(myMath.sum());


myMath.subtraction = function() {
    return this.a - this.b;
};
console.log(myMath.subtraction());


myMath.multiplication = function() {
    return this.a * this.b;
};
console.log(myMath.multiplication());


myMath.division = function() {
    return this.a / this.b;
};
console.log(myMath.division());