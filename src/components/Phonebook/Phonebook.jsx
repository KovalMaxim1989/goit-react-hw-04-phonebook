import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, FormLabel, Input, Button } from './Phonebook.styled';

const Phonebook = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };
  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContact(name, number);
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleNumberChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default Phonebook;
