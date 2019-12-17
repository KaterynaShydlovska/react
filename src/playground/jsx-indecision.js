console.log('Is running');

//JSX - JavaScript XML 
const app = {
  title: 'Bla bla',
  subtitle: 'Bla bla car',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOption();
  }

};

const reset = () => {
  app.options = [];
  renderOption();
}



const appRoot = document.getElementById('app');

const onMakeDesision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};

const renderOption = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDesision}>What should I do?</button>
      <button onClick={reset}>Remove All</button>
      <ol>
        {
          app.options.map((text) => {
            return <li key={text}> {text}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button >Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);

};
renderOption();