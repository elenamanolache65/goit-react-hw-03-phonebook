import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import './App.css';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Lazar Madalina', number: '459-12-56' },
      { id: 'id-2', name: 'Pop Alexandra', number: '443-89-12' },
      { id: 'id-3', name: 'Vlad Maria', number: '645-17-79' },
      { id: 'id-4', name: 'Popescu Ana', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;