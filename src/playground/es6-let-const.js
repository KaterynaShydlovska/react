var nameVar = 'Kate';
var nameVar = 'Hulk';
console.log('nameVar', nameVar);

let nameLet = 'Andrii';
nameLet = 'Lubov';
console.log('nameLet', nameLet);

const nameConst = 'Roman';
console.log('nameConst', nameConst);



//Block scoping 

const fullName = 'Kateryna Shydlovska';
let firstName;

if (fullName) {
   firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);