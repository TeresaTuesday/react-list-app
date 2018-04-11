import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ContactsPage from './components/ContactsPage'

const destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <ContactsPage/>
  </div>,
  destination
)

// <App />, document.getElementById('root'));
// registerServiceWorker();
