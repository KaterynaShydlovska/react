
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDleteOptions = this.handleDleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  handleDleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  
handlePick() {
  const randNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randNum];
  alert(option);
}
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
      
    });
  }
    render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header  subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDleteOptions={this.handleDleteOptions}
        />
        <AddOptions
          handleAddOption=
          {this.handleAddOption}/>
      </div>
    );
  }
} 

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
};

Header.defaultProps = {
  title: 'Indecision'
}
  
// class Header extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

const Options = (props)=> {
  return (
    <div>
      <button onClick={props.handleDleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option} />)
      }
    </div>
  )
}

// class Options extends React.Component{
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>

      {props.optionText}
    </div>

  )
}

// class Option extends React.Component{
 
//   render() {
//     return (
//       <div>
        
//       {this.props.optionText}
//       </div>
//     )
//   }
// }

class AddOptions extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {error};
    });
} 
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} >
          <input type="text" name="option"></input>
          <button >Add option</button>
        </form>
        
      </div>
    )
  }
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
          </button>

    </div>
  )
}

// class Action extends React.Component{

//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//           </button>
        
//       </div>
//     );  
//   }
// }


// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age:{props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));