import { useEffect } from "react";

import {useDispatch, useSelector} from "react-redux";
import {
  removeContact,
  changeFilter,
  addContact,
  setInitialItems
} from "../store/contactSlice";


import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { nanoid } from "nanoid";
import './App.scss'

const LOCAL_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (storageData) {
      dispatch(setInitialItems(storageData))
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
    }
  }, [contacts])

  const isTheSameNameInCollection = (name) => {
    return contacts.some((contact) => contact.name.trim().toLowerCase() === name.toLowerCase().trim());
  }

  const onAddContact = (contact) => {
    if (contact.name.length <= 0) {
      alert(`The length should me greater than 0 symbols`);
      return null;
    }


    if (isTheSameNameInCollection(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return null;
    }

    const newContact = {
      name: contact.name,
      number: contact.number,
      id: nanoid()
    }

    dispatch(addContact(newContact));
  }

  const onChangeFilter = (event) => {
    const { value: newSearchValue } = event.target;
    dispatch(changeFilter(newSearchValue));
  }

  const onFilterContacts = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

  const onDeleteContact = (id) => {
    dispatch(removeContact(id));
  }

  return (
    <div className="root-app">
      <div className="root-app__phonebook phonebook">
        <div className="phonebook__form">
          <h2 className="phonebook__title">Phonebook</h2>
          <ContactForm onAddContact={onAddContact} />
        </div>
        <h2 className="phonebook__title">Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList onDeleteContact={onDeleteContact} onFilterContacts={onFilterContacts} />
      </div>
    </div>
  );
};
