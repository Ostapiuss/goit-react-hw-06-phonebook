import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import './App.scss'

export const App = () => {
  return (
    <div className="root-app">
      <div className="root-app__phonebook phonebook">
        <div className="phonebook__form">
          <h2 className="phonebook__title">Phonebook</h2>
          <ContactForm />
        </div>
        <h2 className="phonebook__title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
