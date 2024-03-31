import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css';
import Api from '../Api/contacts';
import EditContact from './EditContact';


function App() {
  //const LOCAL_STORAGE_KEY = "contacts";


  const [contacts, setContact] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const retreiveContacts = async () => {
    const response = await Api.get("./contacts")
    return response
  }
  const addContactHandler = async (contact) => {
    const request = { id: uuidv4(), ...contact }
    const response = await Api.post("/contacts", request)
    setContact([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await Api.put(`/contacts/${contact.id}`, contact)
    const { id } = response.data
    setContact(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact
    }))
  }

  const removeContactHandlet = async (id) => {
    await Api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContact(newContactList)
  }

  const serachHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    }
    else {
      setSearchResults(contacts)
    }

  }
  useEffect(() => {
    // const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retreiveContacts) setContact(retreiveContacts);
    const retreivedContacts = async () => {
      const allContacts = await retreiveContacts()
      if (allContacts) setContact(allContacts.data)
    }
    retreivedContacts()
  }, []);
  useEffect(() => {

    if (contacts.length !== 0) {
      //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }

  }, [contacts]);
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/'
            exact
            //Component={<ContactList contacts={contacts} getContactID={removeContactHandlet}/>}
            element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} getContactID={removeContactHandlet} term={searchTerm} serachKeyWord={serachHandler} />}

          />
          <Route path='/AddContact' exact
            //Component={() => <AddContact addContactHandler={addContactHandler} />} 
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path='/EditContact/:id' exact
            //Component={() => <AddContact addContactHandler={addContactHandler} />} 
            element={<EditContact updateContactHandler={updateContactHandler} />}
          />
          <Route path='/contact/:id'
            Component={ContactDetails}
          />
        </Routes>



        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactID={removeContactHandlet}/> */}

      </Router>
    </div>
  )
}

export default App;
