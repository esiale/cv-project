import React, { useState } from 'react';
import uniqid from 'uniqid';

const FormHandler = (props) => {
  const [list, setList] = useState([uniqid()]);

  const handleDelete = (itemId) => {
    const updatedList = list.filter((item) => item !== itemId);
    setList(updatedList);
  };

  const handleAddMore = () => {
    setList([...list, uniqid()]);
  };

  const Form = props.Form;
  return (
    <section>
      {list.map((id) => (
        <Form key={id} id={id} onDelete={handleDelete} />
      ))}
      <button className="add-more-btn" onClick={handleAddMore}>
        Add More
      </button>
    </section>
  );
};

export default FormHandler;
