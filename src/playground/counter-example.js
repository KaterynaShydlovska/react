let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();

};
const minusOne = () => {
  count--;
  renderCounterApp();

}
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>one</button>
      <button onClick={minusOne}>minus one</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);

};
renderCounterApp();
// const user = {
//   name: 'Kate',
//   age: 25,
//   location: 'Seattle'

// }
// var useName = 'Andrew';
// var userAge = 25;
// var userLocation = 'Austin';
// const test = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );
// const dog = {
//   name: 'Hulk',
//   age: 12 ,
//   location: 'Seattle' 
//   // location: 'Seattle'
// }
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }


// }

// let testTwo = (
//   <div>
//     <h1>{dog.name ? dog.name : 'Anonymus'}</h1>
//     {(dog.age >= 2) && <p>Age: {dog.age}</p>}
//     {getLocation(dog.location)}
//   </div>

// );


// ReactDOM.render(testTwo, appRoot);