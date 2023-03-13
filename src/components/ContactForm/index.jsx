import { useState } from "react";

import PropTypes from "prop-types";

import './style.scss';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  const onChange = (event) => {
    const { value, name } = event.target;

    if (name === 'number') {
      setFormData({...formData, [name]: formatPhoneNumber(value) });
      return null;
    }

    setFormData({...formData, [name]: value });
  }

  return (
    <div className="form">
      <div className="form__name name">
        <label htmlFor="form-name">Name</label>
        <input
          id="form-name"
          type="text"
          name="name"
          className="name__field"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="form__number number">
        <label htmlFor="form-number">Number</label>
        <input
          id="form-number"
          type="tel"
          name="number"
          className="number__field"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={formData.number}
          onChange={onChange}
          required
        />
      </div>
      <button className="form__button" onClick={() => onAddContact(formData)}>
        Add contact
      </button>
    </div>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}

export default ContactForm;
