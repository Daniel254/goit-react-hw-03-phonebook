import React, { Component } from 'react';
import ContactList from 'components/ContactList';
import GlobalStyle from 'components/GlobalStyle';
import NewContactForm from 'components/NewContactForm';
import SearchContact from 'components/SearchContact';
import Box from './components/Box';
import sanitizeString from './utils/sanitizeString';
import Section from 'components/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkExistingContactName = newContact => {
    return (
      this.state.contacts.filter(
        contact =>
          sanitizeString(contact.name) === sanitizeString(newContact.name)
      ).length > 0
    );
  };

  filterHandler = ({ currentTarget: { value } }) => {
    this.setState({
      filter: sanitizeString(value),
    });
  };

  addContactHandler = async newContact => {
    if (this.checkExistingContactName(newContact)) {
      throw new Error(`${newContact.name} is already in contacts`);
    }
    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  deleteContactHandler = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <GlobalStyle />
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'start',
            // fontSize: 40,
            color: '#010101',
            margin: '0 auto',
            width: '400px',
          }}
        >
          <Box as="h1" mx="auto">
            Phonebook
          </Box>
          <NewContactForm addContact={this.addContactHandler} />
          <Section mt="10px">
            <Box as="h2">Contacts</Box>
            <SearchContact
              filterHandler={this.filterHandler}
              filterString={this.state.filter}
            />
            <ContactList
              contactList={contacts}
              filter={filter}
              deleteContact={this.deleteContactHandler}
            />
          </Section>
        </div>
      </>
    );
  }
}
