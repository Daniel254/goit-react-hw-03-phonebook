import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'components/Notification';
import { List, DeleteBtn } from './ContactList.styled';
import sanitizeString from 'utils/sanitizeString';

export default class ContactList extends Component {
  static propTypes = {
    contactList: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contactList, filter, deleteContact } = this.props;
    const filteredContactList = contactList.filter(item =>
      sanitizeString(item.name).includes(filter)
    );

    return (
      <>
        {contactList.length > 0 ? (
          filteredContactList.length > 0 ? (
            <List>
              {filteredContactList.map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                  <DeleteBtn onClick={() => deleteContact(id)}>
                    Delete
                  </DeleteBtn>
                </li>
              ))}
            </List>
          ) : (
            <Notification message="No contacts found" />
          )
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </>
    );
  }
}
