// const person = {
//   name: 'Kate',
//   age: 25,
//   location: {
//     city: "Seattle",
//     temp: 58
//   }
// };

// const {name: firstName = 'Anonymus', age} = person;

// const name = person.name;
// const age = person.age;


// console.log(`${firstName} is ${age}.`);

// const {city, temp: tempreture} = person.location;

// if (city && {tempreture}) {
//   console.log(`It's ${tempreture} in ${city}.`); 
// }

const book = {
  title: 'Master',
  aouthor: 'Bulgakov',
  publisher: {
    // name: 'Someone'
  }
};

const {name: publisherName = 'Self-Publishe' } = book.publisher;

console.log(publisherName);

