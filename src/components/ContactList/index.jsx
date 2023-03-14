import { useSelector, useDispatch } from "react-redux";

import { removeContact } from "../../store/contactSlice";

import contactSelector from '../../store/selector';

import './style.scss';

const ContactList = () => {
  const contacts = useSelector(contactSelector.getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(removeContact(id));
  }

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

export default ContactList;
