import PropTypes from "prop-types";

import './style.scss';
import { useSelector } from "react-redux";

const ContactList = ({ onDeleteContact, onFilterContacts }) => {
  const contacts = onFilterContacts(useSelector(state => state.contacts.items));

  return (
    <ul className="contact-list">
      {
        contacts.map((contact) => (
          <li className="contact-list__contact contact" key={contact.id}>
            <span>{contact.name}: {contact.number}</span>
            <button className="contact__delete-button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
}

export default ContactList;
