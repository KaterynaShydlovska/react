class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.handleShowDetails = this.handleShowDetails.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleShowDetails() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
     } 
    })
  }
  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleShowDetails}>
          {this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey, There are some details you can see!</p>
              </div>
        )}

      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const showDetails = () => {
//   visibility = !visibility;
//   renderButton();
// }

// let visibility = false;
// const appTest = document.getElementById('app');

// const renderButton = () => {
//   const ex = (
//     <div>
//       <h1>{myApp.title}</h1>
//       <button onClick={showDetails }>
//         {visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (<p>{myApp.details}</p>)}

      
//     </div>
//   );
//   ReactDOM.render(ex, appTest);
// };
//   renderButton();






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
