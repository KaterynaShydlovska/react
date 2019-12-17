const add =  (a, b) =>{
  // console.log(arguments);
  return a + b;
}
console.log(add(55, 1));


const user = {
  name: 'Kate',
  cities: ['Seattle', 'Austin', 'Los angeles'],
  printPlaceLived() {
    return this.cities.map((city) => this.name + ' will lives in ' + city);
    
  
    // this.cities.forEach ((city)=> {
    //   console.log(this.name + ' will lives in ' + city);
// });
  }
};

console.log(user.printPlaceLived());


const multiplier = {
  num :2,
  someNum:[1, 2, 3],
  multiplay() {
    return this.someNum.map((number) => this.num * number);

  }
};
console.log(multiplier.multiplay());