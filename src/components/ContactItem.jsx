import React from 'react';
const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li>
    {name}: {number}
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);
export default ContactItem;