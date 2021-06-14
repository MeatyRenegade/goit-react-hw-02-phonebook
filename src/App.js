import { Component } from 'react';
import './App.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <div className="App">
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name{' '}
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Number{' '}
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>

          <ul className="ContactList">
            {contacts.map(contact => (
              <li className="ContactList_item" key={contact.id}>
                <p className="ContactList_text">{contact.name}</p>
                <p className="ContactList_text">{contact.number}</p>
                <button
                  className="button"
                  onClick={() => this.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
