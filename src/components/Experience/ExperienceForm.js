import React, { useState } from 'react';
import ExperienceOverview from './ExperienceOverview';

const ExperienceForm = (props) => {
  const [values, setValues] = useState({
    company: '',
    position: '',
    maintasks: '',
    startDate: '',
    endDate: '',
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

  const editCheck = mode !== 'view';
  const { onDelete, id } = props;

  return (
    <div className="experience">
      {editCheck ? (
        <form onSubmit={onSubmitTask}>
          <div className="group1">
            <label htmlFor="school">Company name</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={values.company}
              placeholder="Google"
              required
            />
          </div>
          <div className="group2">
            <label htmlFor="text">Position</label>
            <input
              type="text"
              name="position"
              onChange={handleChange}
              value={values.position}
              placeholder="Junior full-stack developer"
              required
            />
          </div>
          <div className="group3">
            <label htmlFor="text">Main tasks</label>
            <input
              type="text"
              name="maintasks"
              onChange={handleChange}
              value={values.maintasks}
              placeholder="Games and stuff"
              required
            />
          </div>
          <div className="group4">
            <label htmlFor="startDate">Start date</label>
            <input
              type="text"
              name="startDate"
              onChange={handleChange}
              value={values.startDate}
              placeholder="mm/YYYY"
            />
          </div>
          <div className="group5">
            <label htmlFor="endDate">End date</label>
            <input
              type="text"
              name="endDate"
              onChange={handleChange}
              value={values.endDate}
              placeholder="mm/YYYY or Present"
            />
          </div>
          <div className="buttons-group">
            <button type="submit">Done</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        </form>
      ) : (
        <div>
          <ExperienceOverview data={values} />
          <button onClick={edit}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
