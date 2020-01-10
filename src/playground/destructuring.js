 //Object destructing

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

// const book = {
//   title: 'Master',
//   aouthor: 'Bulgakov',
//   publisher: {
//     // name: 'Someone'
//   }
// };

// const {name: publisherName = 'Self-Publishe' } = book.publisher;

// console.log(publisherName);


 //Array destructing


// const address = ['409 23rd Ave', 'Seattle', 'Washington', '98144'];

// const [street, city, state, zip] = address;
// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

// console.log(`A medium Coffe(hot) cost $2.50`);
const [coffee,  , mediumPrise] = item;

console.log(`A medium ${coffee} cost ${mediumPrise}`);