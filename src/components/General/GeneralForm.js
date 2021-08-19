import React, { useState } from 'react';
import GeneralOverview from './GeneralOverview';

const GeneralForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [mode, setMode] = useState('edit');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setMode('view');
  };

  const edit = (e) => {
    setMode('edit');
  };

  const editCheck = mode === 'edit';

  return (
    <div className="general">
      {editCheck ? (
        <form onSubmit={onSubmitTask}>
          <div className="group1">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
              value={values.fullname}
              placeholder="John Smith"
              required
            />
          </div>
          <div className="group2">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="john@gmail.com"
              required
            />
          </div>
          <div className="group3">
            <label htmlFor="phone">Phone number</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              placeholder="5555551234"
              required
            />
          </div>
          <div className="buttons-group">
            <button type="submit">Done</button>
          </div>
        </form>
      ) : (
        <div>
          <GeneralOverview data={values} />
          <button onClick={edit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralForm;
