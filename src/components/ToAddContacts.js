import React, { Component } from 'react'
import "../styles/ContactPageMain.css"
import FlipMove from "react-flip-move";

export default class extends Component {
  constructor(props) {
    super(props);
    
    this.createContacts = this.createContacts.bind(this);
  }
  
  delete(key) {
    this.props.delete(key);
  }
  
  
  createContacts(contact) {
    return <li onClick={() => this.delete(contact.key)}
               key={contact.key}>{contact.text}</li>
  }
  
  render() {
    const toAddEntries = this.props.entries
    const listContacts = toAddEntries.map(this.createContacts)
    
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listContacts}
        </FlipMove>
      </ul>
    );
  }
}