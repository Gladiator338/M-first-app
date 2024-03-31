import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
//import ContactCard from './ContactCcard';
import ContactList from './ContactList';
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact)
    setContact([...contacts, contact]);
  };
  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retreiveContacts) setContact(retreiveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App;
