const myApp = {
  title: 'Visibility Toggle',
  details: 'Some details here'
  
};
const showDetails = () => {
  visibility = !visibility;
  renderButton();
}


let visibility = false;
const appTest = document.getElementById('app');

const renderButton = () => {
  const ex = (
    <div>
      <h1>{myApp.title}</h1>
      <button onClick={showDetails }>
        {visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (<p>{myApp.details}</p>)}

      
    </div>
  );
  ReactDOM.render(ex, appTest);
};
  renderButton();






// let visibility = false;

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
