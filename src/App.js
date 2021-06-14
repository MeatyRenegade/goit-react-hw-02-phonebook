import { Component } from 'react';
import './App.css';

class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <div className="App">
          <h1>Phonebook</h1>
          <form>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={value}
                onChange={this.handleChange}
              />
            </label>
          </form>

          <button type="submit">Add contact</button>
          <ul>
            <li>Name Surname</li>
            <li>Name Surname</li>
            <li>Name Surname</li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
