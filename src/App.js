import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

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
                onChange={this.handleChange}
              />
            </label>
          </form>

          <button type="submit">Add contact</button>
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
