import React from 'react';
const Filter = ({ value, onChange }) => (
  <div className="filter-input">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  </div>
);
export default Filter;