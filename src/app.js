
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options = {options} />
        <AddOptions />
      </div>
    );
  }
}  
  
class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Options extends React.Component{
  handleRemove() {
    alert('Remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component{
 
  render() {
    return (
      <div>
        
      {this.props.optionText}
      </div>
    )
  }
}

class AddOptions extends React.Component{
  handlerAdd() {
    alert('add option');
}
  
  render() {
    return (
      <div>
        <form onClick={this.handlerAdd} >
          <input type="text" name="option"></input>
          <button >Add option</button>
        </form>
        
      </div>
    )
  }
}

class Action extends React.Component{
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
          <button onClick={this.handlePick}>What should I do?</button>
        
      </div>
    );  
  }
}




ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));