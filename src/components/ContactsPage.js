import React, { Component } from 'react'

import ToAddContacts from './ToAddContacts'
import "../styles/ContactPageMain.css"


export default class extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [ ]
    };
    
    this.addContact = this.addContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }
  
  addContact(e) {
    if (this._inputElement.value !== "") {
      const newContact = {
        text: this._inputElement.value,
        key: Date.now()
      };
      
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.concat(newContact)
        };
      });
      
      this._inputElement.value = "";
      
    }
    
    console.log(this.state.contacts);
    
    e.preventDefault();
  }
  
  deleteContact(key) {
    const filteredContacts = this.state.contacts.filter(function (contact) {
      return (contact.key !== key)
    });
    
    this.setState({
      contacts: filteredContacts
    })
  }
  
  render() {
    return (
      <div className="ContactsPageMain">
        <div className="header">
          <form onSubmit={this.addContact}>
            <input ref={(a) => this._inputElement = a}
                   placeholder="enter item">
            </input>
            <button type="submit">Add</button>
          </form>
          <ToAddContacts entries={this.state.contacts}
                          delete={this.deleteContact} />
        </div>
      
      </div>
    );
  }
}

