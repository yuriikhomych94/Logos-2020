let person = {};

person.firstName = 'Ivan';
person.secondName = 'Ivanov';

person.showData = function() {
    console.log(person);
}

person.showData();


let newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

newPerson.showData = function() {
    console.log(newPerson);
}

newPerson.showData();

