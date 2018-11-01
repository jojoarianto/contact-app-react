import React, { Component } from 'react';
import Contact from './Contact';

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: 'Irianto',
          phone: '085732401129',
          email: 'irianto94@outlook.com'
        },
        {
          name: 'Titis K D',
          phone: '085732401129',
          email: 'titis@outlook.com'
        },
        {
          name: 'Iqbal',
          phone: '085732401129',
          email: 'iqbal@outlook.com'
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}
